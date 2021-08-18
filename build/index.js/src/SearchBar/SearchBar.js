'use strict';

var React = require('react');
require('./SearchBar.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SearchBar = function (props) {
    var _a = React.useState(""), value = _a[0], setValue = _a[1];
    var _b = React.useState(false), active = _b[0], setActive = _b[1];
    var onChange = function (event) {
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

module.exports = SearchBar;
//# sourceMappingURL=SearchBar.js.map
