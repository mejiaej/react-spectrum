var $h7ExA$reactariautils = require("@react-aria/utils");
var $h7ExA$react = require("react");
var $h7ExA$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Text", () => $1efae25dd196d679$export$5f1af8db9871e1d6);
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


const $1efae25dd196d679$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, $h7ExA$react.forwardRef)(function Text(props, ref) {
    props = (0, $h7ExA$reactspectrumutils.useSlotProps)(props, 'text');
    let { children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $h7ExA$reactspectrumutils.useStyleProps)(otherProps);
    let domRef = (0, $h7ExA$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($h7ExA$react))).createElement("span", {
        role: "none",
        ...(0, $h7ExA$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef
    }, children);
});


//# sourceMappingURL=Text.main.js.map
