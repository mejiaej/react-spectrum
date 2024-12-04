import "./Tooltip.css";
import {ColorSchemeContext as $9affbfa4e13b9582$export$374e0245597d19a3} from "./Provider.mjs";
import {jsx as $iNhwA$jsx, jsxs as $iNhwA$jsxs, Fragment as $iNhwA$Fragment} from "react/jsx-runtime";
import {useLocale as $iNhwA$useLocale, Tooltip as $iNhwA$Tooltip, OverlayArrow as $iNhwA$OverlayArrow, TooltipTrigger as $iNhwA$TooltipTrigger} from "react-aria-components";
import {createContext as $iNhwA$createContext, forwardRef as $iNhwA$forwardRef, useContext as $iNhwA$useContext, useState as $iNhwA$useState, useCallback as $iNhwA$useCallback} from "react";
import {useDOMRef as $iNhwA$useDOMRef} from "@react-spectrum/utils";

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




const $4c20647d6e5d8fdf$var$slide = "-d5xa23";
const $4c20647d6e5d8fdf$var$tooltip = function anonymous(props) {
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
const $4c20647d6e5d8fdf$var$arrowStyles = function anonymous(props) {
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
let $4c20647d6e5d8fdf$var$InternalTooltipTriggerContext = /*#__PURE__*/ (0, $iNhwA$createContext)({});
const $4c20647d6e5d8fdf$export$28c660c63b792dea = /*#__PURE__*/ (0, $iNhwA$forwardRef)(function Tooltip(props, ref) {
    let { children: children, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '' } = props;
    let domRef = (0, $iNhwA$useDOMRef)(ref);
    let { containerPadding: containerPadding, crossOffset: crossOffset, offset: offset, placement: placement = 'top', shouldFlip: shouldFlip } = (0, $iNhwA$useContext)($4c20647d6e5d8fdf$var$InternalTooltipTriggerContext);
    let colorScheme = (0, $iNhwA$useContext)((0, $9affbfa4e13b9582$export$374e0245597d19a3));
    let { locale: locale, direction: direction } = (0, $iNhwA$useLocale)();
    let [borderRadius, setBorderRadius] = (0, $iNhwA$useState)(0);
    // TODO: should we pass through lang and dir props in RAC?
    let tooltipRef = (0, $iNhwA$useCallback)((el)=>{
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
    return /*#__PURE__*/ (0, $iNhwA$jsx)((0, $iNhwA$Tooltip), {
        ...props,
        arrowBoundaryOffset: borderRadius,
        containerPadding: containerPadding,
        crossOffset: crossOffset,
        offset: offset,
        placement: placement,
        shouldFlip: shouldFlip,
        ref: tooltipRef,
        style: UNSAFE_style,
        className: (renderProps)=>UNSAFE_className + $4c20647d6e5d8fdf$var$tooltip({
                ...renderProps,
                colorScheme: colorScheme
            }),
        children: (renderProps)=>/*#__PURE__*/ (0, $iNhwA$jsxs)((0, $iNhwA$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $iNhwA$jsx)((0, $iNhwA$OverlayArrow), {
                        children: /*#__PURE__*/ (0, $iNhwA$jsx)("svg", {
                            className: $4c20647d6e5d8fdf$var$arrowStyles(renderProps),
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "10",
                            height: "5",
                            viewBox: "0 0 10 5",
                            children: /*#__PURE__*/ (0, $iNhwA$jsx)("path", {
                                d: "M4.29289 4.29289L0 0H10L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289Z"
                            })
                        })
                    }),
                    children
                ]
            })
    });
});
function $4c20647d6e5d8fdf$export$8c610744efcf8a1d(props) {
    let { containerPadding: containerPadding, crossOffset: crossOffset, offset: offset, placement: placement, shouldFlip: shouldFlip, ...triggerProps } = props;
    return /*#__PURE__*/ (0, $iNhwA$jsx)((0, $iNhwA$TooltipTrigger), {
        ...triggerProps,
        children: /*#__PURE__*/ (0, $iNhwA$jsx)($4c20647d6e5d8fdf$var$InternalTooltipTriggerContext.Provider, {
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
function $4c20647d6e5d8fdf$export$92ee03cda75aac2b(props) {
    return /*#__PURE__*/ (0, $iNhwA$jsx)("div", {});
}


export {$4c20647d6e5d8fdf$export$28c660c63b792dea as Tooltip, $4c20647d6e5d8fdf$export$8c610744efcf8a1d as TooltipTrigger, $4c20647d6e5d8fdf$export$92ee03cda75aac2b as CombinedTooltip};
//# sourceMappingURL=Tooltip.mjs.map
