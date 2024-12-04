require("./vars.61a672da.css");
var $b516e4acb09598d3$exports = require("./well_vars_css.main.js");
var $44ml7$reactspectrumutils = require("@react-spectrum/utils");
var $44ml7$reactariautils = require("@react-aria/utils");
var $44ml7$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Well", () => $fb0fd853f763d005$export$d89c679ee2f73242);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $fb0fd853f763d005$export$d89c679ee2f73242 = /*#__PURE__*/ (0, $44ml7$react.forwardRef)(function Well(props, ref) {
    let { children: children, role: role, ...otherProps } = props;
    let domRef = (0, $44ml7$reactspectrumutils.useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $44ml7$reactspectrumutils.useStyleProps)(otherProps);
    if (!role && (props['aria-label'] || props['aria-labelledby'])) console.warn('A labelled Well must have a role.');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($44ml7$react))).createElement("div", {
        ...(0, $44ml7$reactariautils.filterDOMProps)(otherProps, {
            labelable: !!role
        }),
        ...styleProps,
        role: role,
        ref: domRef,
        className: (0, $44ml7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b516e4acb09598d3$exports))), 'spectrum-Well', styleProps.className)
    }, children);
});


//# sourceMappingURL=Well.main.js.map
