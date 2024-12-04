var $a5b4f4e252b5a021$exports = require("./context.main.js");
require("./vars.8344a1cc.css");
var $22365f0f5f2dcdd5$exports = require("./page_vars_css.main.js");
require("./typography.a20446f2.css");
var $19fbfce217006b12$exports = require("./typography_index_css.main.js");
var $a6e2b5f4621e4690$exports = require("./mediaQueries.main.js");
var $4db360e38265184f$exports = require("./package.main.js");
var $dbjUM$reactspectrumutils = require("@react-spectrum/utils");
var $dbjUM$clsx = require("clsx");
var $dbjUM$reactariautils = require("@react-aria/utils");
var $dbjUM$reactariai18n = require("@react-aria/i18n");
var $dbjUM$reactariaoverlays = require("@react-aria/overlays");
var $dbjUM$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Provider", () => $96cabdf5b0aed55b$export$2881499e37b75b9a);
$parcel$export(module.exports, "useProvider", () => $96cabdf5b0aed55b$export$693cdb10cec23617);
$parcel$export(module.exports, "useProviderProps", () => $96cabdf5b0aed55b$export$521c373ccc32c300);
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










const $96cabdf5b0aed55b$var$DEFAULT_BREAKPOINTS = {
    S: 640,
    M: 768,
    L: 1024,
    XL: 1280,
    XXL: 1536
};
const $96cabdf5b0aed55b$export$2881499e37b75b9a = /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).forwardRef(function Provider(props, ref) {
    let prevContext = (0, $dbjUM$react.useContext)((0, $a5b4f4e252b5a021$exports.Context));
    let prevColorScheme = prevContext && prevContext.colorScheme;
    let prevBreakpoints = prevContext && prevContext.breakpoints;
    let { theme: theme = prevContext && prevContext.theme, defaultColorScheme: defaultColorScheme } = props;
    if (!theme) throw new Error('theme not found, the parent provider must have a theme provided');
    // Hooks must always be called.
    let autoColorScheme = (0, $a6e2b5f4621e4690$exports.useColorScheme)(theme, defaultColorScheme || 'light');
    let autoScale = (0, $a6e2b5f4621e4690$exports.useScale)(theme);
    let { locale: prevLocale } = (0, $dbjUM$reactariai18n.useLocale)();
    // if the new theme doesn't support the prevColorScheme, we must resort to the auto
    let usePrevColorScheme = prevColorScheme ? !!theme[prevColorScheme] : false;
    // importance of color scheme props > parent > auto:(OS > default > omitted)
    let { colorScheme: colorScheme = usePrevColorScheme ? prevColorScheme : autoColorScheme, scale: scale = prevContext ? prevContext.scale : autoScale, locale: locale = prevContext ? prevLocale : undefined, breakpoints: breakpoints = prevContext ? prevBreakpoints : $96cabdf5b0aed55b$var$DEFAULT_BREAKPOINTS, children: children, isQuiet: isQuiet, isEmphasized: isEmphasized, isDisabled: isDisabled, isRequired: isRequired, isReadOnly: isReadOnly, validationState: validationState, router: router, ...otherProps } = props;
    // select only the props with values so undefined props don't overwrite prevContext values
    let currentProps = {
        version: $4db360e38265184f$exports.version,
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
    let matchedBreakpoints = (0, $dbjUM$reactspectrumutils.useMatchedBreakpoints)(breakpoints);
    let filteredProps = {};
    Object.entries(currentProps).forEach(([key, value])=>value !== undefined && (filteredProps[key] = value));
    // Merge options with parent provider
    let context = Object.assign({}, prevContext, filteredProps);
    // Only wrap in a DOM node if the theme, colorScheme, or scale changed
    let contents = children;
    let domProps = (0, $dbjUM$reactariautils.filterDOMProps)(otherProps);
    let { styleProps: styleProps } = (0, $dbjUM$reactspectrumutils.useStyleProps)(otherProps, undefined, {
        matchedBreakpoints: matchedBreakpoints
    });
    if (!prevContext || props.locale || theme !== prevContext.theme || colorScheme !== prevContext.colorScheme || scale !== prevContext.scale || Object.keys(domProps).length > 0 || otherProps.UNSAFE_className || styleProps.style && Object.keys(styleProps.style).length > 0) contents = /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).createElement($96cabdf5b0aed55b$var$ProviderWrapper, {
        ...props,
        UNSAFE_style: {
            isolation: !prevContext ? 'isolate' : undefined,
            ...styleProps.style
        },
        ref: ref
    }, contents);
    if (router) contents = /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).createElement((0, $dbjUM$reactariautils.RouterProvider), router, contents);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).createElement((0, $a5b4f4e252b5a021$exports.Context).Provider, {
        value: context
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).createElement((0, $dbjUM$reactariai18n.I18nProvider), {
        locale: locale
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).createElement((0, $dbjUM$reactspectrumutils.BreakpointProvider), {
        matchedBreakpoints: matchedBreakpoints
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).createElement((0, $dbjUM$reactariaoverlays.ModalProvider), null, contents))));
});
const $96cabdf5b0aed55b$var$ProviderWrapper = /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).forwardRef(function ProviderWrapper(props, ref) {
    let { children: children, ...otherProps } = props;
    let { locale: locale, direction: direction } = (0, $dbjUM$reactariai18n.useLocale)();
    let { theme: theme, colorScheme: colorScheme, scale: scale } = $96cabdf5b0aed55b$export$693cdb10cec23617();
    let { modalProviderProps: modalProviderProps } = (0, $dbjUM$reactariaoverlays.useModalProvider)();
    let { styleProps: styleProps } = (0, $dbjUM$reactspectrumutils.useStyleProps)(otherProps);
    let domRef = (0, $dbjUM$reactspectrumutils.useDOMRef)(ref);
    let themeKey = Object.keys(theme[colorScheme])[0];
    let scaleKey = Object.keys(theme[scale])[0];
    let className = (0, ($parcel$interopDefault($dbjUM$clsx)))(styleProps.className, (0, ($parcel$interopDefault($22365f0f5f2dcdd5$exports)))['spectrum'], (0, ($parcel$interopDefault($19fbfce217006b12$exports)))['spectrum'], Object.values(theme[colorScheme]), Object.values(theme[scale]), theme.global ? Object.values(theme.global) : null, {
        'react-spectrum-provider': (0, $dbjUM$reactspectrumutils.shouldKeepSpectrumClassNames),
        spectrum: (0, $dbjUM$reactspectrumutils.shouldKeepSpectrumClassNames),
        [themeKey]: (0, $dbjUM$reactspectrumutils.shouldKeepSpectrumClassNames),
        [scaleKey]: (0, $dbjUM$reactspectrumutils.shouldKeepSpectrumClassNames)
    });
    var _props_colorScheme, _ref;
    let style = {
        ...styleProps.style,
        // This ensures that browser native UI like scrollbars are rendered in the right color scheme.
        // See https://web.dev/color-scheme/.
        colorScheme: (_ref = (_props_colorScheme = props.colorScheme) !== null && _props_colorScheme !== void 0 ? _props_colorScheme : colorScheme) !== null && _ref !== void 0 ? _ref : Object.keys(theme).filter((k)=>k === 'light' || k === 'dark').join(' ')
    };
    let hasWarned = (0, $dbjUM$react.useRef)(false);
    (0, $dbjUM$react.useEffect)(()=>{
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($dbjUM$react))).createElement("div", {
        ...(0, $dbjUM$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        ...modalProviderProps,
        className: className,
        style: style,
        lang: locale,
        dir: direction,
        ref: domRef
    }, children);
});
function $96cabdf5b0aed55b$export$693cdb10cec23617() {
    let context = (0, $dbjUM$react.useContext)((0, $a5b4f4e252b5a021$exports.Context));
    if (!context) throw new Error("No root provider found, please make sure your app is wrapped within a <Provider>. Alternatively, this issue may be caused by duplicate packages, see https://github.com/adobe/react-spectrum/wiki/Frequently-Asked-Questions-(FAQs)#why-are-there-errors-after-upgrading-a-react-spectrum-package for more information.");
    return context;
}
function $96cabdf5b0aed55b$export$521c373ccc32c300(props) {
    let context = (0, $dbjUM$react.useContext)((0, $a5b4f4e252b5a021$exports.Context));
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


//# sourceMappingURL=Provider.main.js.map
