require("./Provider.css");
var $308b180f49d82d28$exports = require("../icons/runtime.cjs");
var $jc3A8$reactjsxruntime = require("react/jsx-runtime");
var $jc3A8$react = require("react");
var $jc3A8$reactariacomponents = require("react-aria-components");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorSchemeContext", () => $914a06b3a1c679bc$export$374e0245597d19a3);
$parcel$export(module.exports, "Provider", () => $914a06b3a1c679bc$export$2881499e37b75b9a);
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



const $914a06b3a1c679bc$export$374e0245597d19a3 = /*#__PURE__*/ (0, $jc3A8$react.createContext)(null);
function $914a06b3a1c679bc$export$2881499e37b75b9a(props) {
    let result = /*#__PURE__*/ (0, $jc3A8$reactjsxruntime.jsx)($914a06b3a1c679bc$var$ProviderInner, {
        ...props
    });
    let parentColorScheme = (0, $jc3A8$react.useContext)($914a06b3a1c679bc$export$374e0245597d19a3);
    let colorScheme = props.colorScheme || parentColorScheme;
    if (colorScheme !== parentColorScheme) result = /*#__PURE__*/ (0, $jc3A8$reactjsxruntime.jsx)($914a06b3a1c679bc$export$374e0245597d19a3.Provider, {
        value: colorScheme,
        children: result
    });
    if (props.locale) result = /*#__PURE__*/ (0, $jc3A8$reactjsxruntime.jsx)((0, $jc3A8$reactariacomponents.I18nProvider), {
        locale: props.locale,
        children: result
    });
    if (props.router) result = /*#__PURE__*/ (0, $jc3A8$reactjsxruntime.jsx)((0, $jc3A8$reactariacomponents.RouterProvider), {
        ...props.router,
        children: result
    });
    return result;
}
undefined;
let $914a06b3a1c679bc$var$providerStyles = function anonymous(props) {
    let rules = " .";
    if (props.colorScheme === "dark") rules += ' _Ab';
    else if (props.colorScheme === "light") rules += ' _Aa';
    else if (props.colorScheme === "light dark") rules += ' _Ac';
    else rules += ' _A-10jn6wd';
    if (props.background === "layer-2") rules += ' -_1de2x0q_b-______k';
    else if (props.background === "layer-1") rules += ' -_1de2x0q_b-e';
    else if (props.background === "base") rules += ' -_1de2x0q_b-d';
    if (props.background === "layer-2") rules += ' b-1de2x0q';
    else if (props.background === "layer-1") rules += ' b-1de2x0q';
    else if (props.background === "base") rules += ' b-1de2x0q';
    return rules;
};
function $914a06b3a1c679bc$var$ProviderInner(props) {
    let { elementType: Element = 'div', UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', styles: styles, children: children, background: background, colorScheme: colorScheme } = props;
    let { locale: locale, direction: direction } = (0, $jc3A8$reactariacomponents.useLocale)();
    return /*#__PURE__*/ (0, $jc3A8$reactjsxruntime.jsx)(Element, {
        lang: locale,
        dir: direction,
        style: UNSAFE_style,
        className: UNSAFE_className + (0, $308b180f49d82d28$exports.mergeStyles)(styles, $914a06b3a1c679bc$var$providerStyles({
            background: background,
            colorScheme: colorScheme
        })),
        children: children
    });
}


//# sourceMappingURL=Provider.cjs.map
