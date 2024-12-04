import "./Provider.css";
import {mergeStyles as $feb886035e0d4633$export$e618dc39ac9ad607} from "../icons/runtime.mjs";
import {jsx as $5cZPy$jsx} from "react/jsx-runtime";
import {createContext as $5cZPy$createContext, useContext as $5cZPy$useContext} from "react";
import {I18nProvider as $5cZPy$I18nProvider, RouterProvider as $5cZPy$RouterProvider, useLocale as $5cZPy$useLocale} from "react-aria-components";

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



const $9affbfa4e13b9582$export$374e0245597d19a3 = /*#__PURE__*/ (0, $5cZPy$createContext)(null);
function $9affbfa4e13b9582$export$2881499e37b75b9a(props) {
    let result = /*#__PURE__*/ (0, $5cZPy$jsx)($9affbfa4e13b9582$var$ProviderInner, {
        ...props
    });
    let parentColorScheme = (0, $5cZPy$useContext)($9affbfa4e13b9582$export$374e0245597d19a3);
    let colorScheme = props.colorScheme || parentColorScheme;
    if (colorScheme !== parentColorScheme) result = /*#__PURE__*/ (0, $5cZPy$jsx)($9affbfa4e13b9582$export$374e0245597d19a3.Provider, {
        value: colorScheme,
        children: result
    });
    if (props.locale) result = /*#__PURE__*/ (0, $5cZPy$jsx)((0, $5cZPy$I18nProvider), {
        locale: props.locale,
        children: result
    });
    if (props.router) result = /*#__PURE__*/ (0, $5cZPy$jsx)((0, $5cZPy$RouterProvider), {
        ...props.router,
        children: result
    });
    return result;
}
undefined;
let $9affbfa4e13b9582$var$providerStyles = function anonymous(props) {
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
function $9affbfa4e13b9582$var$ProviderInner(props) {
    let { elementType: Element = 'div', UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', styles: styles, children: children, background: background, colorScheme: colorScheme } = props;
    let { locale: locale, direction: direction } = (0, $5cZPy$useLocale)();
    return /*#__PURE__*/ (0, $5cZPy$jsx)(Element, {
        lang: locale,
        dir: direction,
        style: UNSAFE_style,
        className: UNSAFE_className + (0, $feb886035e0d4633$export$e618dc39ac9ad607)(styles, $9affbfa4e13b9582$var$providerStyles({
            background: background,
            colorScheme: colorScheme
        })),
        children: children
    });
}


export {$9affbfa4e13b9582$export$374e0245597d19a3 as ColorSchemeContext, $9affbfa4e13b9582$export$2881499e37b75b9a as Provider};
//# sourceMappingURL=Provider.mjs.map
