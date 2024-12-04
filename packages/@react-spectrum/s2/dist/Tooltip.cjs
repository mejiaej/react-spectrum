require("./Tooltip.css");
var $914a06b3a1c679bc$exports = require("./Provider.cjs");
var $8KZCJ$reactjsxruntime = require("react/jsx-runtime");
var $8KZCJ$reactariacomponents = require("react-aria-components");
var $8KZCJ$react = require("react");
var $8KZCJ$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Tooltip", () => $d3b6a84aebe66f8d$export$28c660c63b792dea);
$parcel$export(module.exports, "TooltipTrigger", () => $d3b6a84aebe66f8d$export$8c610744efcf8a1d);
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




const $d3b6a84aebe66f8d$var$slide = "-d5xa23";
const $d3b6a84aebe66f8d$var$tooltip = function anonymous(props) {
    let rules = " .";
    if (props.colorScheme === "dark") rules += ' _Ab';
    else if (props.colorScheme === "light") rules += ' _Aa';
    else if (props.colorScheme === "light dark") rules += ' _Ac';
    else rules += ' _A-10jn6wd';
    rules += ' _2d';
    rules += ' _1c';
    rules += ' r__Z';
    rules += ' o-375tou';
    rules += ' __na';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' _dbd';
    rules += ' _dc';
    rules += ' _eb';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    rules += ' aa_____x';
    rules += ' ad';
    rules += ' u-375tp0';
    rules += ' v-375tp1';
    rules += ' sab';
    rules += ' tab';
    rules += ' waa';
    rules += ' caa';
    if (props.isPressed) rules += ' bo';
    else if (props.isFocusVisible) rules += ' bo';
    else if (props.isHovered) rules += ' bo';
    else rules += ' bn';
    rules += ' _vh';
    rules += ' _wh';
    rules += ' _xh';
    rules += ' _yh';
    rules += ' CI';
    rules += ' DI';
    rules += ' E-1dbqcch';
    rules += ' F-1dbqcch';
    rules += ' Ad';
    rules += ' Bd';
    rules += ' yd';
    rules += ' zd';
    if (props.isExiting) rules += ' _S-xkqmqx';
    else if (props.isEntering) rules += ' _S-xkqmqx';
    if (props.isExiting) rules += ' _T-375xx3';
    else if (props.isEntering) rules += ' _T-375xx3';
    if (props.isExiting) rules += ' _Yc';
    if (props.isExiting) rules += ' _Vb';
    else if (props.isEntering) rules += ' _Va';
    if (props.placement === "right") rules += ' -s75z33_A-K';
    else if (props.placement === "left") rules += ' -s75z33_A-c';
    else if (props.placement === "bottom") rules += ' -s75z33_A-a';
    else if (props.placement === "top") rules += ' -s75z33_A-a';
    if (props.placement === "right") rules += ' -s75z34_A-a';
    else if (props.placement === "left") rules += ' -s75z34_A-a';
    else if (props.placement === "bottom") rules += ' -s75z34_A-K';
    else if (props.placement === "top") rules += ' -s75z34_A-c';
    rules += ' -_375tou_o-M';
    rules += ' -_375tp0_u-ab';
    rules += ' -_375tp1_v-ab';
    return rules;
};
const $d3b6a84aebe66f8d$var$arrowStyles = function anonymous(props) {
    let rules = " .";
    rules += ' _Za';
    rules += ' eL';
    if (props.placement === "right") rules += ' R-3d7kri';
    else if (props.placement === "left") rules += ' R-wggzbf';
    else if (props.placement === "bottom") rules += ' R-z0ysi6';
    else if (props.placement === "top") rules += ' R-3t1x';
    if (props.placement === "right") rules += ' P-375y1d';
    else if (props.placement === "left") rules += ' P-yj88ji';
    return rules;
};
let $d3b6a84aebe66f8d$var$InternalTooltipTriggerContext = /*#__PURE__*/ (0, $8KZCJ$react.createContext)({});
const $d3b6a84aebe66f8d$export$28c660c63b792dea = /*#__PURE__*/ (0, $8KZCJ$react.forwardRef)(function Tooltip(props, ref) {
    let { children: children, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '' } = props;
    let domRef = (0, $8KZCJ$reactspectrumutils.useDOMRef)(ref);
    let { containerPadding: containerPadding, crossOffset: crossOffset, offset: offset, placement: placement = 'top', shouldFlip: shouldFlip } = (0, $8KZCJ$react.useContext)($d3b6a84aebe66f8d$var$InternalTooltipTriggerContext);
    let colorScheme = (0, $8KZCJ$react.useContext)((0, $914a06b3a1c679bc$exports.ColorSchemeContext));
    let { locale: locale, direction: direction } = (0, $8KZCJ$reactariacomponents.useLocale)();
    let [borderRadius, setBorderRadius] = (0, $8KZCJ$react.useState)(0);
    // TODO: should we pass through lang and dir props in RAC?
    let tooltipRef = (0, $8KZCJ$react.useCallback)((el)=>{
        domRef.current = el;
        if (el) {
            el.lang = locale;
            el.dir = direction;
            let spectrumBorderRadius = window.getComputedStyle(el).borderRadius;
            if (spectrumBorderRadius !== '') setBorderRadius(parseInt(spectrumBorderRadius, 10));
        }
    }, [
        locale,
        direction,
        domRef
    ]);
    return /*#__PURE__*/ (0, $8KZCJ$reactjsxruntime.jsx)((0, $8KZCJ$reactariacomponents.Tooltip), {
        ...props,
        arrowBoundaryOffset: borderRadius,
        containerPadding: containerPadding,
        crossOffset: crossOffset,
        offset: offset,
        placement: placement,
        shouldFlip: shouldFlip,
        ref: tooltipRef,
        style: UNSAFE_style,
        className: (renderProps)=>UNSAFE_className + $d3b6a84aebe66f8d$var$tooltip({
                ...renderProps,
                colorScheme: colorScheme
            }),
        children: (renderProps)=>/*#__PURE__*/ (0, $8KZCJ$reactjsxruntime.jsxs)((0, $8KZCJ$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $8KZCJ$reactjsxruntime.jsx)((0, $8KZCJ$reactariacomponents.OverlayArrow), {
                        children: /*#__PURE__*/ (0, $8KZCJ$reactjsxruntime.jsx)("svg", {
                            className: $d3b6a84aebe66f8d$var$arrowStyles(renderProps),
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "10",
                            height: "5",
                            viewBox: "0 0 10 5",
                            children: /*#__PURE__*/ (0, $8KZCJ$reactjsxruntime.jsx)("path", {
                                d: "M4.29289 4.29289L0 0H10L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289Z"
                            })
                        })
                    }),
                    children
                ]
            })
    });
});
function $d3b6a84aebe66f8d$export$8c610744efcf8a1d(props) {
    let { containerPadding: containerPadding, crossOffset: crossOffset, offset: offset, placement: placement, shouldFlip: shouldFlip, ...triggerProps } = props;
    return /*#__PURE__*/ (0, $8KZCJ$reactjsxruntime.jsx)((0, $8KZCJ$reactariacomponents.TooltipTrigger), {
        ...triggerProps,
        children: /*#__PURE__*/ (0, $8KZCJ$reactjsxruntime.jsx)($d3b6a84aebe66f8d$var$InternalTooltipTriggerContext.Provider, {
            value: {
                containerPadding: containerPadding,
                crossOffset: crossOffset,
                offset: offset,
                placement: placement,
                shouldFlip: shouldFlip
            },
            children: props.children
        })
    });
}
function $d3b6a84aebe66f8d$export$92ee03cda75aac2b(props) {
    return /*#__PURE__*/ (0, $8KZCJ$reactjsxruntime.jsx)("div", {});
}


//# sourceMappingURL=Tooltip.cjs.map
