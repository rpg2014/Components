'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".primary {\n  background-color: #e07a5f; }\n\n.accent {\n  background-color: #81b29a; }\n\n.icon {\n  width: 0;\n  height: 0;\n  border-top: 0.75rem solid transparent;\n  border-bottom: 0.75rem solid transparent;\n  border-left: 0.88rem solid #f2cc8f;\n  margin: 0.5rem;\n  transition: 100ms all ease; }\n  .icon.paused {\n    width: 0rem;\n    height: 40%;\n    border-style: double;\n    border-width: 0 0rem 0 1rem; }\n\n.playPauseButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin: 0.25rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: #3d405b;\n  border: none;\n  box-shadow: inset;\n  cursor: pointer;\n  transition-duration: 0.4s; }\n\n.playPauseButton:hover {\n  background-color: #55495c;\n  scale: 1.05; }\n\n.playPauseButton:active {\n  scale: 0.95;\n  background-color: #4b5768; }\n";
styleInject(css_248z);

// Generated with util/create-component.js
var PlayPauseButton = function (_a) {
    var play = _a.play;
    var _b = React.useState(play), isPlaying = _b[0], setPlaying = _b[1];
    return (React__default['default'].createElement("button", { "data-testid": "PlayPauseButton", className: "playPauseButton", onClick: function () { return setPlaying(!isPlaying); } },
        React__default['default'].createElement("div", { className: isPlaying ? 'icon' : 'icon paused' })));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var css_248z$1 = ".primary {\n  background-color: #e07a5f; }\n\n.accent {\n  background-color: #81b29a; }\n\n.progressBarWrapper {\n  width: 45%;\n  height: 2rem; }\n\n.progressBarBg {\n  background-color: #3d405b;\n  height: 0.5rem;\n  width: 100%;\n  border-radius: 1rem;\n  box-shadow: 3rem; }\n\n.progressBarFg {\n  background-color: #e07a5f;\n  height: 0.5rem;\n  overflow: hidden;\n  border-radius: .75rem;\n  transition: 500ms width ease; }\n\n.progressBarFgHover:hover {\n  background-color: #81b29a;\n  outline-style: solid;\n  outline-color: #e07a5f;\n  outline-width: 0.15rem; }\n\n.progressBarLabel {\n  color: #3d405b;\n  height: 0.4rem;\n  text-align: center;\n  vertical-align: text-top;\n  margin-bottom: 0.1rem; }\n";
styleInject(css_248z$1);

var ProgressBar = function (_a) {
    var percentage = _a.percentage, label = _a.label, showPercentage = _a.showPercentage, _b = _a.height, height = _b === void 0 ? '0.5rem' : _b, _c = _a.width, width = _c === void 0 ? '45%' : _c, highlightOnHover = _a.highlightOnHover;
    var _d = React.useState(percentage ? percentage : 0), progress = _d[0], setProgress = _d[1];
    React.useEffect(function () {
        setProgress(percentage);
    }, [percentage]);
    // useEffect(() => {
    //   if(progress<100 && progress!=0){
    //     setProgress(progress+1)
    //   }else{
    //     setProgress(0)
    //   }
    // }, [progress])
    // const zeroTo100 = () => {
    //   setProgress(progress+1);
    // }
    var heightStyle = {
        height: height,
    };
    return (React__default['default'].createElement("div", { className: "progressBarWrapper", style: __assign(__assign({}, heightStyle), { width: width }) },
        React__default['default'].createElement("div", { className: "progressBarBg", style: __assign({}, heightStyle) },
            React__default['default'].createElement("div", { className: "progressBarFg " + (highlightOnHover ? 'progressBarFgHover' : ''), style: __assign(__assign({}, heightStyle), { width: progress + "%" }) },
                showPercentage && React__default['default'].createElement("div", { className: "progressBarLabel", style: __assign(__assign({}, heightStyle), { fontSize: heightStyle.height }) }, progress + "%"),
                label && React__default['default'].createElement("div", { className: 'progressBarLabel', style: __assign(__assign({}, heightStyle), { fontSize: heightStyle.height }) }, label)))));
};

var css_248z$2 = ".primary {\n  background-color: #e07a5f; }\n\n.accent {\n  background-color: #81b29a; }\n\n.SearchBarWrapper {\n  display: flex;\n  flex-direction: column; }\n\n.searchLabel {\n  margin: 0rem 0rem 0rem 0.5rem;\n  color: rgba(61, 64, 91, 0.8); }\n\n.searchInput {\n  border: 0;\n  height: 2rem;\n  flex-grow: 1;\n  margin: 0;\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0);\n  transition: 100ms all ease;\n  outline: 0; }\n\n.searchBox {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  outline: 0; }\n\n.searchBoxOutline {\n  border: 0.2rem solid #3d405b;\n  border-radius: 3rem;\n  transition: 200ms all ease; }\n  .searchBoxOutline:focus::before, .searchBoxOutline:focus::after, .searchBoxOutline:focus-within, .searchBoxOutline:focus, .searchBoxOutline:focus-visible, .searchBoxOutline:active, .searchBoxOutline:hover {\n    border: 0.2rem solid #81b29a;\n    animation: borderColorsOutline 200ms linear forwards; }\n\n.searchBoxBottom {\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 0.2rem solid #3d405b;\n  border-radius: 2px;\n  transition: 200ms all ease; }\n  .searchBoxBottom:focus-within {\n    border-bottom: 0.2rem solid #81b29a; }\n\n.submitButton {\n  border: 0;\n  margin: 0;\n  background-color: rgba(255, 255, 255, 0);\n  border: 0.12rem solid #e07a5f;\n  border-radius: 4rem;\n  margin: 0.3rem 1rem;\n  text-align: center;\n  color: #3d405b;\n  transition: 50ms all; }\n  .submitButton:hover {\n    background-color: #81b29a;\n    border: 0;\n    scale: 1.05;\n    color: #f4f1de; }\n\n@keyframes borderColorsOutline {\n  0% {\n    border-top-color: #3d405b;\n    border-right-color: #3d405b;\n    border-bottom-color: #3d405b;\n    border-left-color: #3d405b; }\n  33% {\n    border-top-width: 100%;\n    border-top-color: #3d405b;\n    border-right-color: #3d405b;\n    border-bottom-color: #81b29a;\n    border-left-color: #3d405b; }\n  66% {\n    border-top-color: #3d405b;\n    border-right-color: #81b29a;\n    border-bottom-color: #81b29a;\n    border-left-color: #81b29a; }\n  100% {\n    border-top-color: #81b29a;\n    border-right-color: #81b29a;\n    border-bottom-color: #81b29a;\n    border-left-color: #81b29a; } }\n";
styleInject(css_248z$2);

var SearchBar = function (props) {
    var _a = React.useState(""), value = _a[0], setValue = _a[1];
    var _b = React.useState(false), active = _b[0], setActive = _b[1];
    var onChange = function (event) {
        props.onChange(event.target.value);
        setValue(event.target.value);
    };
    return (React__default['default'].createElement("div", { className: "SearchBarWrapper", style: { width: props.width } },
        props.label && React__default['default'].createElement("label", { className: "searchLabel", htmlFor: 'male' }, props.label),
        React__default['default'].createElement("div", { className: "searchBox " + (props.variant === 'outline' ? 'searchBoxOutline' : 'searchBoxBottom') },
            React__default['default'].createElement("input", { type: 'search', className: 'searchInput', name: "search", id: 'search', value: value, onChange: onChange, 
                // onClick={set}
                placeholder: props.placeholder }),
            React__default['default'].createElement("button", { className: 'submitButton' }, props.buttonLabel))));
};

var css_248z$3 = ".primary {\n  background-color: #e07a5f; }\n\n.accent {\n  background-color: #81b29a; }\n\n.skeleton {\n  border-radius: 0.4rem;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0) 80%), linear-gradient(#f4f1de 100%, transparent 0);\n  background-size: 50px 200px, 100% 100%;\n  /* bg */\n  height: 2rem;\n  margin: 1rem;\n  animation: shine 1.5s infinite ease; }\n\n@keyframes shine {\n  to {\n    background-position: 100% 0; } }\n";
styleInject(css_248z$3);

var css_248z$4 = ".primary {\n  background-color: #e07a5f; }\n\n.accent {\n  background-color: #81b29a; }\n";
styleInject(css_248z$4);

/**
 * A loading skeleton
 * @param param0
 */
var Skeleton = function (_a) {
    var width = _a.width, height = _a.height;
    return (React__default['default'].createElement("div", { className: "skeleton", style: { width: width, height: height } }));
};

var css_248z$5 = ".primary {\n  background-color: #e07a5f; }\n\n.accent {\n  background-color: #81b29a; }\n\n.spinner {\n  animation: spin 2s linear infinite;\n  border-radius: 50%; }\n\n.smallSize {\n  width: 2rem;\n  height: 2rem;\n  border: 0.5rem solid #f4f1de;\n  border-top: 0.5rem solid #e07a5f; }\n\n.largeSize {\n  width: 4rem;\n  height: 4rem;\n  border: 0.7rem solid #f4f1de;\n  border-top: 0.7rem solid #e07a5f; }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n";
styleInject(css_248z$5);

/**
 * A loading spinner
 * TODO make color and theme work
 * @param param0
 */
var Spinner = function (_a) {
    var size = _a.size, color = _a.color, theme = _a.theme;
    var sizeClass = size === 'lg' ? 'largeSize' : 'smallSize';
    return (React__default['default'].createElement("div", { className: "spinner " + sizeClass + " ", style: { borderTopColor: color } }));
};

exports.PlayPauseButton = PlayPauseButton;
exports.ProgressBar = ProgressBar;
exports.SearchBar = SearchBar;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
//# sourceMappingURL=index.js.map
