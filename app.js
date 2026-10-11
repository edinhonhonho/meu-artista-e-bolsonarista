(function () {
  var data = window.ARTISTAS.slice().sort(function (a, b) {
    return a.nome.localeCompare(b.nome, "pt-BR");
  });
  var state = { q: "", lado: "", cat: "", ano: "" };
  var LADO = { bolsonaro: "Bolsonaro", lula: "Lula" };

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

  function card(a) {
    var c = el("article", "card " + a.lado);
    c.appendChild(el("h3", null, a.nome));

    var meta = el("div", "meta");
    meta.appendChild(el("span", "tag side-" + a.lado, "Apoia " + LADO[a.lado]));
    meta.appendChild(el("span", "tag", a.categoria));
    meta.appendChild(el("span", "tag", a.periodo.join(" · ")));
    c.appendChild(meta);

    c.appendChild(el("p", null, a.resumo));
    if (a.nota) c.appendChild(el("p", "nota", "Ressalva: " + a.nota));

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
    c.appendChild(ul);
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
    var l = data.length - b;
    var box = $("stats");
    [["", data.length, "no catálogo"], ["b", b, "com Bolsonaro"], ["l", l, "com Lula"]].forEach(function (s) {
      var d = el("div", "stat " + s[0]);
      d.appendChild(el("b", null, String(s[1])));
      d.appendChild(document.createTextNode(s[2]));
      box.appendChild(d);
    });
  }

  var cats = Array.from(new Set(data.map(function (a) { return a.categoria; }))).sort();
  cats.forEach(function (c) {
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
