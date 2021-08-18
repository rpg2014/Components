import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = ".primary {\n  background-color: #e07a5f; }\n\n.accent {\n  background-color: #81b29a; }\n\n.icon {\n  width: 0;\n  height: 0;\n  border-top: 0.75rem solid transparent;\n  border-bottom: 0.75rem solid transparent;\n  border-left: 0.88rem solid #f2cc8f;\n  margin: 0.5rem;\n  transition: 100ms all ease; }\n  .icon.paused {\n    width: 0rem;\n    height: 40%;\n    border-style: double;\n    border-width: 0 0rem 0 1rem; }\n\n.playPauseButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin: 0.25rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3d405b;\n  border: none;\n  box-shadow: inset;\n  cursor: pointer;\n  transition-duration: 0.4s; }\n\n.playPauseButton:hover {\n  background-color: #55495c;\n  scale: 1.05; }\n\n.playPauseButton:active {\n  scale: 0.95;\n  background-color: #4b5768; }\n";
styleInject(css_248z);

export default css_248z;
//# sourceMappingURL=PlayPauseButton.scss.js.map
