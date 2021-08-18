'use strict';

var styleInject_es = require('../../node_modules/style-inject/dist/style-inject.es.js');

var css_248z = ".primary {\n  background-color: #e07a5f; }\n\n.accent {\n  background-color: #81b29a; }\n\n.skeleton {\n  border-radius: 0.4rem;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0) 80%), linear-gradient(#f4f1de 100%, transparent 0);\n  background-size: 50px 200px, 100% 100%;\n  /* bg */\n  height: 2rem;\n  margin: 1rem;\n  animation: shine 1.5s infinite ease; }\n\n@keyframes shine {\n  to {\n    background-position: 100% 0; } }\n";
styleInject_es(css_248z);

module.exports = css_248z;
//# sourceMappingURL=Skeleton.scss.js.map
