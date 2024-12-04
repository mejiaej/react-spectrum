import "./flex-gap.bf0f97f4.css";
import $bDezp$flexgap_cssmodulejs from "./flex-gap_css.mjs";
import {passthroughStyle as $bDezp$passthroughStyle, useBreakpoint as $bDezp$useBreakpoint, useStyleProps as $bDezp$useStyleProps, useDOMRef as $bDezp$useDOMRef, responsiveDimensionValue as $bDezp$responsiveDimensionValue, classNames as $bDezp$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $bDezp$filterDOMProps} from "@react-aria/utils";
import $bDezp$react, {forwardRef as $bDezp$forwardRef} from "react";


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



const $884c64d19340d345$var$flexStyleProps = {
    direction: [
        'flexDirection',
        (0, $bDezp$passthroughStyle)
    ],
    wrap: [
        'flexWrap',
        $884c64d19340d345$var$flexWrapValue
    ],
    justifyContent: [
        'justifyContent',
        $884c64d19340d345$var$flexAlignValue
    ],
    alignItems: [
        'alignItems',
        $884c64d19340d345$var$flexAlignValue
    ],
    alignContent: [
        'alignContent',
        $884c64d19340d345$var$flexAlignValue
    ]
};
const $884c64d19340d345$export$f51f4c4ede09e011 = /*#__PURE__*/ (0, $bDezp$forwardRef)(function Flex(props, ref) {
    let { children: children, ...otherProps } = props;
    let breakpointProvider = (0, $bDezp$useBreakpoint)();
    let matchedBreakpoints = (breakpointProvider === null || breakpointProvider === void 0 ? void 0 : breakpointProvider.matchedBreakpoints) || [
        'base'
    ];
    let { styleProps: styleProps } = (0, $bDezp$useStyleProps)(otherProps);
    let { styleProps: flexStyle } = (0, $bDezp$useStyleProps)(otherProps, $884c64d19340d345$var$flexStyleProps);
    let domRef = (0, $bDezp$useDOMRef)(ref);
    let style = {
        ...styleProps.style,
        ...flexStyle.style
    };
    if (props.gap != null) style.gap = (0, $bDezp$responsiveDimensionValue)(props.gap, matchedBreakpoints);
    if (props.columnGap != null) style.columnGap = (0, $bDezp$responsiveDimensionValue)(props.columnGap, matchedBreakpoints);
    if (props.rowGap != null) style.rowGap = (0, $bDezp$responsiveDimensionValue)(props.rowGap, matchedBreakpoints);
    return /*#__PURE__*/ (0, $bDezp$react).createElement("div", {
        ...(0, $bDezp$filterDOMProps)(otherProps),
        className: (0, $bDezp$classNames)((0, ($parcel$interopDefault($bDezp$flexgap_cssmodulejs))), 'flex', styleProps.className),
        style: style,
        ref: domRef
    }, children);
});
/**
 * Normalize 'start' and 'end' alignment values to 'flex-start' and 'flex-end'
 * in flex containers for browser compatibility.
 */ function $884c64d19340d345$var$flexAlignValue(value) {
    if (value === 'start') return 'flex-start';
    if (value === 'end') return 'flex-end';
    return value;
}
/**
 * Takes a boolean and translates it to flex wrap or nowrap.
 */ function $884c64d19340d345$var$flexWrapValue(value) {
    if (typeof value === 'boolean') return value ? 'wrap' : 'nowrap';
    return value;
}


export {$884c64d19340d345$export$f51f4c4ede09e011 as Flex};
//# sourceMappingURL=Flex.module.js.map
