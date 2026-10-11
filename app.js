(function () {
  var data = window.ARTISTAS.slice().sort(function (a, b) {
    return a.nome.localeCompare(b.nome, "pt-BR");
  });
  var state = { q: "", lado: "", cat: "", ano: "" };
  var SELO = { bolsonaro: "▼ Bolsonarista", lula: "▲ Com Lula" };

  var $ = function (id) { return document.getElementById(id); };
  var grid = $("grid");

  function norm(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function initials(n) {
    var p = n.replace(/\(.*?\)/g, "").replace(/&/g, " ").trim().split(/\s+/);
    return ((p[0] || "")[0] || "") + ((p.length > 1 ? p[p.length - 1][0] : "") || "");
  }

  // ── Fotos: Wikipédia (pt), buscadas no navegador de quem visita ──
  var API = "https://pt.wikipedia.org";
  var cache = {};

  function getJSON(url) {
    return fetch(url, { headers: { Accept: "application/json" } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  }

  function okSummary(j) {
    if (!j || j.type === "disambiguation" || !j.thumbnail) return null;
    // evita homônimos: o verbete precisa falar de algo brasileiro
    if (!/brasil/i.test((j.description || "") + " " + (j.extract || ""))) return null;
    return j.thumbnail.source;
  }

  function summary(title) {
    return getJSON(API + "/api/rest_v1/page/summary/" + encodeURIComponent(title.replace(/ /g, "_"))).then(okSummary);
  }

  // 1) verbete pelo título; 2) busca na Wikipédia e tenta os 3 primeiros resultados
  function findPhoto(a) {
    var first = a.wiki || a.nome;
    return summary(first).then(function (src) {
      if (src) return src;
      var q = a.nome.replace(/\(.*?\)/g, "").replace(/&/g, " ").trim();
      return getJSON(API + "/w/rest.php/v1/search/title?limit=3&q=" + encodeURIComponent(q)).then(function (j) {
        var pages = (j && j.pages) || [];
        return pages.reduce(function (p, pg) {
          return p.then(function (found) { return found || summary(pg.key || pg.title); });
        }, Promise.resolve(null));
      });
    });
  }

  function loadPhoto(a, box) {
    var key = a.wiki || a.nome;
    if (!cache[key]) cache[key] = findPhoto(a);
    cache[key].then(function (src) {
      if (!src) return;
      var img = new Image();
      img.alt = "Foto de " + a.nome;
      img.referrerPolicy = "no-referrer";
      img.onload = function () { box.appendChild(img); box.classList.add("has-photo"); };
      img.src = src;
    });
  }

  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { io.unobserve(e.target); loadPhoto(e.target._a, e.target); }
    });
  }, { rootMargin: "300px" }) : null;

  // ── Cards ──
  function card(a) {
    var c = el("article", "card " + a.lado);

    var ph = el("div", "ph");
    ph.appendChild(el("span", "ini", initials(a.nome).toUpperCase()));
    ph.appendChild(el("span", "seal", SELO[a.lado]));
    ph.appendChild(el("h3", null, a.nome));
    ph._a = a;
    if (io) io.observe(ph); else loadPhoto(a, ph);
    c.appendChild(ph);

    var body = el("div", "body");
    var meta = el("div", "meta");
    meta.appendChild(el("span", "tag", a.categoria));
    meta.appendChild(el("span", "tag", a.periodo.join(" · ")));
    body.appendChild(meta);
    body.appendChild(el("p", null, a.resumo));
    if (a.nota) body.appendChild(el("p", "nota", "Ressalva: " + a.nota));

    var ul = el("ul", "src");
    a.fontes.forEach(function (f) {
      var li = el("li");
      var link = el("a", null, f.titulo);
      link.href = f.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      li.appendChild(link);
      li.appendChild(el("span", null, " — " + f.veiculo));
      ul.appendChild(li);
    });
    body.appendChild(ul);
    c.appendChild(body);
    return c;
  }

  function render() {
    var q = norm(state.q);
    var list = data.filter(function (a) {
      return (!state.lado || a.lado === state.lado) &&
        (!state.cat || a.categoria === state.cat) &&
        (!state.ano || a.periodo.indexOf(+state.ano) !== -1) &&
        (!q || norm(a.nome).indexOf(q) !== -1);
    });
    grid.textContent = "";
    list.forEach(function (a) { grid.appendChild(card(a)); });
    $("empty").hidden = list.length > 0;
    $("count").textContent = list.length + " de " + data.length + " registros";
  }

  function stats() {
    var b = data.filter(function (a) { return a.lado === "bolsonaro"; }).length;
    var box = $("stats");
    [["", data.length, "no catálogo"], ["neg", b, "com Bolsonaro"], ["pos", data.length - b, "com Lula"]].forEach(function (s) {
      var d = el("div", "stat " + s[0]);
      d.appendChild(el("b", null, String(s[1])));
      d.appendChild(el("span", null, s[2]));
      box.appendChild(d);
    });
  }

  Array.from(new Set(data.map(function (a) { return a.categoria; }))).sort().forEach(function (c) {
    var o = el("option", null, c);
    o.value = c;
    $("cat").appendChild(o);
  });

  $("q").addEventListener("input", function (e) { state.q = e.target.value; render(); });
  $("cat").addEventListener("change", function (e) { state.cat = e.target.value; render(); });
  $("ano").addEventListener("change", function (e) { state.ano = e.target.value; render(); });
  document.querySelectorAll(".seg button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".seg button").forEach(function (x) { x.classList.remove("on"); });
      btn.classList.add("on");
      state.lado = btn.dataset.lado;
      render();
    });
  });

  stats();
  render();
})();
