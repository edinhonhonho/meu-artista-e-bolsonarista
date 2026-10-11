#!/usr/bin/env python3
"""Baixa a foto de cada pessoa do catálogo a partir da Wikipédia (pt) para fotos/.

Uso:  python3 scripts/baixar_fotos.py
Requer: python3 e node (para ler data.js). Só biblioteca padrão.
Gera:   fotos/<slug>.jpg e fotos/manifest.json  ({slug: {file, pagina}}).
Roda sozinho no deploy do GitHub Pages (.github/workflows/pages.yml).
"""
import json, os, re, subprocess, sys, time, unicodedata, urllib.parse, urllib.request

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOTOS = os.path.join(RAIZ, "fotos")
API = "https://pt.wikipedia.org"
UA = {"User-Agent": "meu-artista-e-bolsonarista/1.0 (catalogo educativo; github.com/edinhonhonho/meu-artista-e-bolsonarista)"}


def slug(nome):
    s = unicodedata.normalize("NFD", nome).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def pessoas():
    js = "global.window={};require('./data.js');console.log(JSON.stringify(window.ARTISTAS.map(a=>({nome:a.nome,wiki:a.wiki||null}))))"
    out = subprocess.run(["node", "-e", js], cwd=RAIZ, capture_output=True, text=True, check=True).stdout
    return json.loads(out)


def get(url, binario=False):
    for tentativa in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
                dados = r.read()
                return dados if binario else json.loads(dados)
        except Exception:
            time.sleep(1.5 * (tentativa + 1))
    return None


def resumo(titulo):
    j = get(f"{API}/api/rest_v1/page/summary/{urllib.parse.quote(titulo.replace(' ', '_'))}")
    if not j or j.get("type") == "disambiguation" or not j.get("thumbnail"):
        return None
    if not re.search(r"brasil", (j.get("description") or "") + " " + (j.get("extract") or ""), re.I):
        return None  # evita homônimos
    return j


def achar(p):
    j = resumo(p["wiki"] or p["nome"])
    if j:
        return j
    q = re.sub(r"\(.*?\)", "", p["nome"]).replace("&", " ").strip()
    busca = get(f"{API}/w/rest.php/v1/search/title?limit=3&q={urllib.parse.quote(q)}")
    for pg in (busca or {}).get("pages", []):
        j = resumo(pg.get("key") or pg.get("title"))
        if j:
            return j
    return None


def main():
    os.makedirs(FOTOS, exist_ok=True)
    manifest, faltam = {}, []
    for p in pessoas():
        s = slug(p["nome"])
        j = achar(p)
        if not j:
            faltam.append(p["nome"]); continue
        src = j["thumbnail"]["source"]
        grande = re.sub(r"/\d+px-", "/500px-", src)
        img = get(grande, True) or get(src, True)
        if not img:
            faltam.append(p["nome"]); continue
        with open(os.path.join(FOTOS, s + ".jpg"), "wb") as f:
            f.write(img)
        manifest[s] = {"file": s + ".jpg", "pagina": (j.get("content_urls") or {}).get("desktop", {}).get("page", "")}
        time.sleep(0.15)
    with open(os.path.join(FOTOS, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    print(f"{len(manifest)} fotos baixadas; {len(faltam)} sem foto:")
    for n in faltam:
        print("  -", n)


if __name__ == "__main__":
    sys.exit(main())
