# Meu artista é Bolsonarista?

Catálogo de artistas e celebridades brasileiras que **declararam publicamente** apoio a Jair Bolsonaro ou a Lula, cada um com link para a reportagem que comprova.

Site estático (HTML + CSS + JS puro, sem build). Abra `index.html` no navegador ou publique no GitHub Pages (há um workflow em `.github/workflows/pages.yml`).

## Critérios

- Entra apenas **apoio público e declarado** (post, vídeo, fala em show/evento, ato de campanha), noticiado por veículo de imprensa.
- Todo registro precisa de **ao menos uma fonte** com link.
- O registro indica a **eleição** a que o apoio se refere (2018, 2022, 2026). Não afirma a posição atual da pessoa.
- Ressalvas relevantes (mudança de posição, apoio só ao candidato e não ao partido, citado apenas em listas) ficam no campo `nota`.
- Aspas só quando a reportagem as atribui à pessoa.

## Limitações conhecidas

- A compilação inicial foi feita por busca na web; **as fontes foram localizadas pelos resultados de busca (título, trecho e link), não abertas uma a uma** — o ambiente de coleta não conseguiu abrir as páginas. Revise a fonte antes de tomar um registro como definitivo e corrija o que estiver errado.
- Alguns portais exibiam datas inconsistentes; quando a data de uma reportagem é incerta, isso consta na nota.
- Lista **não exaustiva**: faltam nomes (esporte, humor, TV, influenciadores). Apoio a Flávio Bolsonaro em 2026 foi mapeado de forma parcial — contribuições bem-vindas.

## Como contribuir

Edite `data.js` e abra um pull request, ou abra uma issue. Formato:

```js
{
  nome: "Nome",
  categoria: "Música",          // Música | Teatro, TV e Cinema | Esporte | Influenciadores | …
  lado: "bolsonaro",            // "bolsonaro" | "lula"
  periodo: [2022],
  resumo: "O que a pessoa declarou, de forma factual.",
  nota: "Ressalva opcional.",
  fontes: [{ titulo: "Título da matéria", url: "https://…", veiculo: "Veículo" }]
}
```

Pedidos de correção ou remoção por erro factual, com fonte, são atendidos.

## Fotos

As fotos são buscadas na Wikipédia (API pública) pelo navegador de quem visita o site; se não houver foto ou o verbete não for de uma pessoa/grupo brasileiro, aparecem as iniciais. Para forçar o verbete certo de um homônimo, use o campo opcional `wiki` (título do verbete na Wikipédia pt). Os créditos de cada imagem estão na página de origem na Wikipédia.
