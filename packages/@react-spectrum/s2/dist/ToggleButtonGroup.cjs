var $7a26131f6144af2b$exports = require("./ActionButtonGroup.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $f8g9U$reactjsxruntime = require("react/jsx-runtime");
var $f8g9U$reactariacomponents = require("react-aria-components");
var $f8g9U$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ToggleButtonGroupContext", () => $428d056a8f9b19e5$export$298258635ae0dd97);
$parcel$export(module.exports, "ToggleButtonGroup", () => $428d056a8f9b19e5$export$40258cc1d95ff477);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $428d056a8f9b19e5$export$298258635ae0dd97 = /*#__PURE__*/ (0, $f8g9U$react.createContext)(null);
const $428d056a8f9b19e5$export$40258cc1d95ff477 = /*#__PURE__*/ (0, $f8g9U$react.forwardRef)(function ToggleButtonGroup(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $428d056a8f9b19e5$export$298258635ae0dd97);
    let { density: density = 'regular', size: size = 'M', orientation: orientation = 'horizontal', isJustified: isJustified, children: children, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles } = props;
    return /*#__PURE__*/ (0, $f8g9U$reactjsxruntime.jsx)((0, $f8g9U$reactariacomponents.ToggleButtonGroup), {
        ...props,
        ref: ref,
        style: UNSAFE_style,
        className: UNSAFE_className + (0, $7a26131f6144af2b$exports.actionGroupStyle)({
            size: size,
            density: density,
            orientation: orientation,
            isJustified: isJustified
        }, styles),
        children: /*#__PURE__*/ (0, $f8g9U$reactjsxruntime.jsx)($428d056a8f9b19e5$export$298258635ae0dd97.Provider, {
            value: props,
            children: children
        })
    });
});


//# sourceMappingURL=ToggleButtonGroup.cjs.map
