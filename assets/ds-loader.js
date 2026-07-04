/* Woodland Dark Academia — component loader.
   Fetches component .jsx sources, transpiles with Babel (must be loaded), evaluates them
   with a tiny CommonJS shim, and merges all exports into window.WDA.
   Usage (after react + babel scripts):
     <script src=".../assets/ds-loader.js"></script>
     WDALoad("../../", ["components/core/Button.jsx", …]).then(() => render) */
window.WDA = window.WDA || {};
window.WDALoad = function (root, files) {
  return Promise.all(
    files.map(function (p) {
      return fetch(root + p)
        .then(function (r) {
          if (!r.ok) throw new Error(p + " → HTTP " + r.status);
          return r.text();
        })
        .then(function (src) {
          var out = Babel.transform(src, { presets: [["env", { modules: "commonjs" }], ["react", { runtime: "classic" }]], filename: p }).code;
          var module = { exports: {} };
          var req = function (name) {
            if (name === "react") return window.React;
            throw new Error("unavailable module: " + name);
          };
          new Function("module", "exports", "require", out)(module, module.exports, req);
          Object.assign(window.WDA, module.exports);
        });
    })
  ).then(function () {
    return window.WDA;
  });
};
