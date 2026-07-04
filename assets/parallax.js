/* Woodland Dark Academia — scroll/mouse parallax + reveal runtime.
   Usage:
     <script src=".../assets/parallax.js"></script>  (after DOM, or call WDAParallax.init())
   Markup contracts:
     [data-plx-scroll]          a scrollable container (the page shell, height:100vh; overflow-y:auto)
       [data-plx-y="-0.5"]      child transformed by scrollTop * factor (pinned-hero layers; negative = lifts away)
       [data-plx-rect="0.3"]    child transformed by its own viewport progress (mid-page bands; measure parent)
       [data-reveal]            starts hidden (set inline opacity:0; transform:translateY(28px); transition…), revealed on intersect
     [data-plx-scene]           a hover scene (mouse parallax)
       [data-plx="0.08"]        child shifted by cursor * depth
   Motion kill-switch: document.body.dataset.motion = "off" disables everything and reveals all. */
(function () {
  if (window.WDAParallax) return;
  var motionOff = function () { return document.body && document.body.dataset.motion === 'off'; };

  function initScene(scene) {
    if (scene.__wda) return; scene.__wda = true;
    var raf = null, tx = 0, ty = 0;
    var apply = function () {
      raf = null;
      scene.querySelectorAll('[data-plx]').forEach(function (el) {
        var d = parseFloat(el.getAttribute('data-plx')) || 0;
        el.style.transform = 'translate3d(' + (tx * d * 220).toFixed(1) + 'px,' + (ty * d * 140).toFixed(1) + 'px,0)';
      });
    };
    scene.addEventListener('mousemove', function (e) {
      if (motionOff()) return;
      var r = scene.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    scene.addEventListener('mouseleave', function () {
      tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    });
  }

  function initScroll(box) {
    if (box.__wda) return; box.__wda = true;
    var raf = null;
    var apply = function () {
      raf = null;
      var st = box.scrollTop;
      box.querySelectorAll('[data-plx-y]').forEach(function (el) {
        var f = parseFloat(el.getAttribute('data-plx-y')) || 0;
        el.style.transform = 'translate3d(0,' + (st * f).toFixed(1) + 'px,0)';
      });
      var br = box.getBoundingClientRect();
      box.querySelectorAll('[data-plx-rect]').forEach(function (el) {
        var f = parseFloat(el.getAttribute('data-plx-rect')) || 0;
        var pr = (el.parentElement || el).getBoundingClientRect();
        var c = (pr.top + pr.height / 2 - br.top) / br.height;
        el.style.transform = 'translate3d(0,' + ((0.5 - c) * f * 400).toFixed(1) + 'px,0)';
      });
    };
    box.addEventListener('scroll', function () {
      if (motionOff()) return;
      if (!raf) raf = requestAnimationFrame(apply);
    }, { passive: true });
    requestAnimationFrame(apply);
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.opacity = '1';
          en.target.style.transform = 'translateY(0)';
          obs.unobserve(en.target);
        }
      });
    }, { root: box, threshold: 0.12 });
    box.querySelectorAll('[data-reveal]').forEach(function (el) {
      if (motionOff()) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
      else obs.observe(el);
    });
  }

  window.WDAParallax = {
    init: function () {
      document.querySelectorAll('[data-plx-scene]').forEach(initScene);
      document.querySelectorAll('[data-plx-scroll]').forEach(initScroll);
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { window.WDAParallax.init(); });
  } else {
    window.WDAParallax.init();
  }
})();
