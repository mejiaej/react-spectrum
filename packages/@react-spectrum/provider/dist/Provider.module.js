import {Context as $a8430f637b4ccbce$export$841858b892ce1f4c} from "./context.module.js";
import "./vars.8344a1cc.css";
import $dyW1v$page_vars_cssmodulejs from "./page_vars_css.module.js";
import "./typography.a20446f2.css";
import $dyW1v$typography_index_cssmodulejs from "./typography_index_css.module.js";
import {useColorScheme as $d8453c5ae7fac713$export$6343629ee1b29116, useScale as $d8453c5ae7fac713$export$a8d2043b2d807f4d} from "./mediaQueries.module.js";
import $dyW1v$packagemodulejs from "./package.module.js";
import {useMatchedBreakpoints as $dyW1v$useMatchedBreakpoints, useStyleProps as $dyW1v$useStyleProps, BreakpointProvider as $dyW1v$BreakpointProvider, useDOMRef as $dyW1v$useDOMRef, shouldKeepSpectrumClassNames as $dyW1v$shouldKeepSpectrumClassNames} from "@react-spectrum/utils";
import $dyW1v$clsx from "clsx";
import {filterDOMProps as $dyW1v$filterDOMProps, RouterProvider as $dyW1v$RouterProvider} from "@react-aria/utils";
import {useLocale as $dyW1v$useLocale, I18nProvider as $dyW1v$I18nProvider} from "@react-aria/i18n";
import {ModalProvider as $dyW1v$ModalProvider, useModalProvider as $dyW1v$useModalProvider} from "@react-aria/overlays";
import $dyW1v$react, {useContext as $dyW1v$useContext, useRef as $dyW1v$useRef, useEffect as $dyW1v$useEffect} from "react";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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










const $7167f8da3cce35e4$var$DEFAULT_BREAKPOINTS = {
    S: 640,
    M: 768,
    L: 1024,
    XL: 1280,
    XXL: 1536
};
const $7167f8da3cce35e4$export$2881499e37b75b9a = /*#__PURE__*/ (0, $dyW1v$react).forwardRef(function Provider(props, ref) {
    let prevContext = (0, $dyW1v$useContext)((0, $a8430f637b4ccbce$export$841858b892ce1f4c));
    let prevColorScheme = prevContext && prevContext.colorScheme;
    let prevBreakpoints = prevContext && prevContext.breakpoints;
    let { theme: theme = prevContext && prevContext.theme, defaultColorScheme: defaultColorScheme } = props;
    if (!theme) throw new Error('theme not found, the parent provider must have a theme provided');
    // Hooks must always be called.
    let autoColorScheme = (0, $d8453c5ae7fac713$export$6343629ee1b29116)(theme, defaultColorScheme || 'light');
    let autoScale = (0, $d8453c5ae7fac713$export$a8d2043b2d807f4d)(theme);
    let { locale: prevLocale } = (0, $dyW1v$useLocale)();
    // if the new theme doesn't support the prevColorScheme, we must resort to the auto
    let usePrevColorScheme = prevColorScheme ? !!theme[prevColorScheme] : false;
    // importance of color scheme props > parent > auto:(OS > default > omitted)
    let { colorScheme: colorScheme = usePrevColorScheme ? prevColorScheme : autoColorScheme, scale: scale = prevContext ? prevContext.scale : autoScale, locale: locale = prevContext ? prevLocale : undefined, breakpoints: breakpoints = prevContext ? prevBreakpoints : $7167f8da3cce35e4$var$DEFAULT_BREAKPOINTS, children: children, isQuiet: isQuiet, isEmphasized: isEmphasized, isDisabled: isDisabled, isRequired: isRequired, isReadOnly: isReadOnly, validationState: validationState, router: router, ...otherProps } = props;
    // select only the props with values so undefined props don't overwrite prevContext values
    let currentProps = {
        version: $dyW1v$packagemodulejs.version,
        theme: theme,
        breakpoints: breakpoints,
        colorScheme: colorScheme,
        scale: scale,
        isQuiet: isQuiet,
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isRequired: isRequired,
        isReadOnly: isReadOnly,
        validationState: validationState
    };
    let matchedBreakpoints = (0, $dyW1v$useMatchedBreakpoints)(breakpoints);
    let filteredProps = {};
    Object.entries(currentProps).forEach(([key, value])=>value !== undefined && (filteredProps[key] = value));
    // Merge options with parent provider
    let context = Object.assign({}, prevContext, filteredProps);
    // Only wrap in a DOM node if the theme, colorScheme, or scale changed
    let contents = children;
    let domProps = (0, $dyW1v$filterDOMProps)(otherProps);
    let { styleProps: styleProps } = (0, $dyW1v$useStyleProps)(otherProps, undefined, {
        matchedBreakpoints: matchedBreakpoints
    });
    if (!prevContext || props.locale || theme !== prevContext.theme || colorScheme !== prevContext.colorScheme || scale !== prevContext.scale || Object.keys(domProps).length > 0 || otherProps.UNSAFE_className || styleProps.style && Object.keys(styleProps.style).length > 0) contents = /*#__PURE__*/ (0, $dyW1v$react).createElement($7167f8da3cce35e4$var$ProviderWrapper, {
        ...props,
        UNSAFE_style: {
            isolation: !prevContext ? 'isolate' : undefined,
            ...styleProps.style
        },
        ref: ref
    }, contents);
    if (router) contents = /*#__PURE__*/ (0, $dyW1v$react).createElement((0, $dyW1v$RouterProvider), router, contents);
    return /*#__PURE__*/ (0, $dyW1v$react).createElement((0, $a8430f637b4ccbce$export$841858b892ce1f4c).Provider, {
        value: context
    }, /*#__PURE__*/ (0, $dyW1v$react).createElement((0, $dyW1v$I18nProvider), {
        locale: locale
    }, /*#__PURE__*/ (0, $dyW1v$react).createElement((0, $dyW1v$BreakpointProvider), {
        matchedBreakpoints: matchedBreakpoints
    }, /*#__PURE__*/ (0, $dyW1v$react).createElement((0, $dyW1v$ModalProvider), null, contents))));
});
const $7167f8da3cce35e4$var$ProviderWrapper = /*#__PURE__*/ (0, $dyW1v$react).forwardRef(function ProviderWrapper(props, ref) {
    let { children: children, ...otherProps } = props;
    let { locale: locale, direction: direction } = (0, $dyW1v$useLocale)();
    let { theme: theme, colorScheme: colorScheme, scale: scale } = $7167f8da3cce35e4$export$693cdb10cec23617();
    let { modalProviderProps: modalProviderProps } = (0, $dyW1v$useModalProvider)();
    let { styleProps: styleProps } = (0, $dyW1v$useStyleProps)(otherProps);
    let domRef = (0, $dyW1v$useDOMRef)(ref);
    let themeKey = Object.keys(theme[colorScheme])[0];
    let scaleKey = Object.keys(theme[scale])[0];
    let className = (0, $dyW1v$clsx)(styleProps.className, (0, ($parcel$interopDefault($dyW1v$page_vars_cssmodulejs)))['spectrum'], (0, ($parcel$interopDefault($dyW1v$typography_index_cssmodulejs)))['spectrum'], Object.values(theme[colorScheme]), Object.values(theme[scale]), theme.global ? Object.values(theme.global) : null, {
        'react-spectrum-provider': (0, $dyW1v$shouldKeepSpectrumClassNames),
        spectrum: (0, $dyW1v$shouldKeepSpectrumClassNames),
        [themeKey]: (0, $dyW1v$shouldKeepSpectrumClassNames),
        [scaleKey]: (0, $dyW1v$shouldKeepSpectrumClassNames)
    });
    var _props_colorScheme, _ref;
    let style = {
        ...styleProps.style,
        // This ensures that browser native UI like scrollbars are rendered in the right color scheme.
        // See https://web.dev/color-scheme/.
        colorScheme: (_ref = (_props_colorScheme = props.colorScheme) !== null && _props_colorScheme !== void 0 ? _props_colorScheme : colorScheme) !== null && _ref !== void 0 ? _ref : Object.keys(theme).filter((k)=>k === 'light' || k === 'dark').join(' ')
    };
    let hasWarned = (0, $dyW1v$useRef)(false);
    (0, $dyW1v$useEffect)(()=>{
        if (direction && domRef.current) {
            var _domRef_current_parentElement, _domRef_current;
            let closestDir = (_domRef_current = domRef.current) === null || _domRef_current === void 0 ? void 0 : (_domRef_current_parentElement = _domRef_current.parentElement) === null || _domRef_current_parentElement === void 0 ? void 0 : _domRef_current_parentElement.closest('[dir]');
            let dir = closestDir && closestDir.getAttribute('dir');
            if (dir && dir !== direction && !hasWarned.current) {
                console.warn(`Language directions cannot be nested. ${direction} inside ${dir}.`);
                hasWarned.current = true;
            }
        }
    }, [
        direction,
        domRef,
        hasWarned
    ]);
    return /*#__PURE__*/ (0, $dyW1v$react).createElement("div", {
        ...(0, $dyW1v$filterDOMProps)(otherProps),
        ...styleProps,
        ...modalProviderProps,
        className: className,
        style: style,
        lang: locale,
        dir: direction,
        ref: domRef
    }, children);
});
function $7167f8da3cce35e4$export$693cdb10cec23617() {
    let context = (0, $dyW1v$useContext)((0, $a8430f637b4ccbce$export$841858b892ce1f4c));
    if (!context) throw new Error("No root provider found, please make sure your app is wrapped within a <Provider>. Alternatively, this issue may be caused by duplicate packages, see https://github.com/adobe/react-spectrum/wiki/Frequently-Asked-Questions-(FAQs)#why-are-there-errors-after-upgrading-a-react-spectrum-package for more information.");
    return context;
}
function $7167f8da3cce35e4$export$521c373ccc32c300(props) {
    let context = (0, $dyW1v$useContext)((0, $a8430f637b4ccbce$export$841858b892ce1f4c));
    if (!context) return props;
    return Object.assign({}, {
        isQuiet: context.isQuiet,
        isEmphasized: context.isEmphasized,
        isDisabled: context.isDisabled,
        isRequired: context.isRequired,
        isReadOnly: context.isReadOnly,
        validationState: context.validationState
    }, props);
}


export {$7167f8da3cce35e4$export$2881499e37b75b9a as Provider, $7167f8da3cce35e4$export$693cdb10cec23617 as useProvider, $7167f8da3cce35e4$export$521c373ccc32c300 as useProviderProps};
//# sourceMappingURL=Provider.module.js.map
