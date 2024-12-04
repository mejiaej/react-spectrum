require("./actionbar.bdfe7eee.css");
var $ff24c7bbe0c168db$exports = require("./actionbar_css.main.js");
var $hZJeg$reactspectrumutils = require("@react-spectrum/utils");
var $hZJeg$reactariautils = require("@react-aria/utils");
var $hZJeg$react = require("react");
var $hZJeg$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ActionBarContainer", () => $961b22d2b8bd2da1$export$ac2eb07f267e434c);
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




const $961b22d2b8bd2da1$export$ac2eb07f267e434c = /*#__PURE__*/ (0, ($parcel$interopDefault($hZJeg$react))).forwardRef(function ActionBarContainer(props, ref) {
    // Grabs specific props from the closest Provider (see https://react-spectrum.adobe.com/react-spectrum/Provider.html#property-groups). Remove if your component doesn't support any of the listed props.
    props = (0, $hZJeg$reactspectrumprovider.useProviderProps)(props);
    let { children: children } = props;
    let { styleProps: styleProps } = (0, $hZJeg$reactspectrumutils.useStyleProps)(props);
    let domRef = (0, $hZJeg$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($hZJeg$react))).createElement("div", {
        ...(0, $hZJeg$reactariautils.filterDOMProps)(props),
        ...styleProps,
        ref: domRef,
        className: (0, $hZJeg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ff24c7bbe0c168db$exports))), 'ActionBarContainer', styleProps.className)
    }, children);
});


//# sourceMappingURL=ActionBarContainer.main.js.map
