(function () {
  var root = document.documentElement;

  // Tema: alterna entre claro e escuro e lembra a escolha.
  var toggle = document.querySelector(".theme-toggle");
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("tema", next); } catch (e) {}
    });
  }

  // Cabeçalho ganha a linha inferior depois de rolar.
  var header = document.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("is-scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Foto: mostra o retrato se assets/foto.jpg existir; senão fica o monograma.
  var portrait = document.getElementById("retrato");
  if (portrait) {
    var img = portrait.querySelector("img");
    function ok() { portrait.classList.add("has-photo"); }
    function fail() { img.remove(); }
    if (img.complete) { img.naturalWidth > 0 ? ok() : fail(); }
    else { img.addEventListener("load", ok); img.addEventListener("error", fail); }
  }

  // Diagrama: uma única sequência quando aparece na tela.
  // Mensagem chega pelo WhatsApp, passa pelas quatro etapas e a resposta volta;
  // depois um produto conectado envia seu chamado ao mesmo hub.
  var svg = document.getElementById("eco-diagrama");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!svg) return;
  var steps = svg.querySelectorAll(".dg-step");

  function show(id, on) { var el = svg.getElementById ? svg.getElementById(id) : document.getElementById(id); if (el) el.style.opacity = on ? "1" : "0"; }
  function run(id) { var a = document.getElementById(id); if (a && a.beginElement) a.beginElement(); }
  function lightAll(on) { steps.forEach(function (s) { s.classList.toggle("is-on", on); }); }

  if (reduce || !("IntersectionObserver" in window)) { lightAll(true); return; }

  function play() {
    var t = 0;
    show("pulse-in", true); run("m-in");
    t += 1100;
    setTimeout(function () { show("pulse-in", false); }, t);
    steps.forEach(function (s, i) { setTimeout(function () { s.classList.add("is-on"); }, t + i * 380); });
    t += steps.length * 380 + 150;
    setTimeout(function () { show("pulse-out", true); run("m-out"); }, t);
    t += 1100;
    setTimeout(function () { show("pulse-out", false); }, t);
    t += 350;
    setTimeout(function () { show("pulse-app", true); run("m-app"); }, t);
    t += 1100;
    setTimeout(function () { show("pulse-app", false); }, t);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { io.disconnect(); setTimeout(play, 300); }
    });
  }, { threshold: 0.45 });
  io.observe(svg);
})();
