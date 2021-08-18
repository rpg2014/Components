import React, { useState } from 'react';
import './SearchBar.scss.js';

var SearchBar = function (props) {
    var _a = useState(""), value = _a[0], setValue = _a[1];
    var _b = useState(false), active = _b[0], setActive = _b[1];
    var onChange = function (event) {
        setValue(event.target.value);
    };
    return (React.createElement("div", { className: "SearchBarWrapper", style: { width: props.width } },
        props.label && React.createElement("label", { className: "searchLabel", htmlFor: 'male' }, props.label),
        React.createElement("div", { className: "searchBox " + (props.variant === 'outline' ? 'searchBoxOutline' : 'searchBoxBottom') },
            React.createElement("input", { type: 'search', className: 'searchInput', name: "search", id: 'search', value: value, onChange: onChange, 
                // onClick={set}
                placeholder: props.placeholder }),
            React.createElement("button", { className: 'submitButton' }, props.buttonLabel))));
};

export default SearchBar;
//# sourceMappingURL=SearchBar.js.map
