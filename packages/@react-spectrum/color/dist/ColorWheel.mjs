import {ColorThumb as $3a90e89d07d7bbd5$export$a3cc47cee1c1ccc} from "./ColorThumb.mjs";
import "./vars.27a9fa37.css";
import $bv4AR$colorwheel_vars_cssmodulejs from "./colorwheel_vars_css.mjs";
import {useFocusableRef as $bv4AR$useFocusableRef, dimensionValue as $bv4AR$dimensionValue, useStyleProps as $bv4AR$useStyleProps, classNames as $bv4AR$classNames} from "@react-spectrum/utils";
import {useContextProps as $bv4AR$useContextProps, ColorWheelContext as $bv4AR$ColorWheelContext} from "react-aria-components";
import $bv4AR$react, {useRef as $bv4AR$useRef, useState as $bv4AR$useState, useCallback as $bv4AR$useCallback, useEffect as $bv4AR$useEffect} from "react";
import {useColorWheel as $bv4AR$useColorWheel} from "@react-aria/color";
import {useColorWheelState as $bv4AR$useColorWheelState} from "@react-stately/color";
import {useFocusRing as $bv4AR$useFocusRing} from "@react-aria/focus";
import {useProviderProps as $bv4AR$useProviderProps} from "@react-spectrum/provider";
import {useResizeObserver as $bv4AR$useResizeObserver} from "@react-aria/utils";


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









const $3aac1c27203f04b5$var$WHEEL_THICKNESS = 24;
const $3aac1c27203f04b5$export$f80663f808113381 = /*#__PURE__*/ (0, $bv4AR$react).forwardRef(function ColorWheel(props, ref) {
    props = (0, $bv4AR$useProviderProps)(props);
    let inputRef = (0, $bv4AR$useRef)(null);
    let containerRef = (0, $bv4AR$useFocusableRef)(ref, inputRef);
    [props, containerRef] = (0, $bv4AR$useContextProps)(props, containerRef, (0, $bv4AR$ColorWheelContext));
    let { isDisabled: isDisabled } = props;
    let size = props.size && (0, $bv4AR$dimensionValue)(props.size);
    let { styleProps: styleProps } = (0, $bv4AR$useStyleProps)(props);
    let [wheelRadius, setWheelRadius] = (0, $bv4AR$useState)(0);
    let [wheelThickness, setWheelThickness] = (0, $bv4AR$useState)($3aac1c27203f04b5$var$WHEEL_THICKNESS);
    let resizeHandler = (0, $bv4AR$useCallback)(()=>{
        if (containerRef.current) {
            setWheelRadius(containerRef.current.offsetWidth / 2);
            let thickness = window.getComputedStyle(containerRef.current).getPropertyValue('--spectrum-colorwheel-track-thickness');
            if (thickness) setWheelThickness(parseInt(thickness, 10));
        }
    }, [
        containerRef,
        setWheelRadius,
        setWheelThickness
    ]);
    (0, $bv4AR$useEffect)(()=>{
        // the size observer's fallback to the window resize event doesn't fire on mount
        if (wheelRadius === 0) resizeHandler();
    }, [
        wheelRadius,
        resizeHandler
    ]);
    (0, $bv4AR$useResizeObserver)({
        ref: containerRef,
        onResize: resizeHandler
    });
    let state = (0, $bv4AR$useColorWheelState)(props);
    let { trackProps: trackProps, inputProps: inputProps, thumbProps: thumbProps } = (0, $bv4AR$useColorWheel)({
        ...props,
        innerRadius: wheelRadius - wheelThickness,
        outerRadius: wheelRadius
    }, state, inputRef);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $bv4AR$useFocusRing)();
    return /*#__PURE__*/ (0, $bv4AR$react).createElement("div", {
        className: (0, $bv4AR$classNames)((0, ($parcel$interopDefault($bv4AR$colorwheel_vars_cssmodulejs))), 'spectrum-ColorWheel', {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: containerRef,
        style: {
            ...styleProps.style,
            // Workaround around https://github.com/adobe/spectrum-css/issues/1032
            'width': size,
            'height': size
        }
    }, /*#__PURE__*/ (0, $bv4AR$react).createElement("div", {
        ...trackProps,
        className: (0, $bv4AR$classNames)((0, ($parcel$interopDefault($bv4AR$colorwheel_vars_cssmodulejs))), 'spectrum-ColorWheel-gradient')
    }), /*#__PURE__*/ (0, $bv4AR$react).createElement((0, $3a90e89d07d7bbd5$export$a3cc47cee1c1ccc), {
        value: state.getDisplayColor(),
        isFocused: isFocusVisible,
        isDisabled: isDisabled,
        isDragging: state.isDragging,
        containerRef: containerRef,
        className: (0, $bv4AR$classNames)((0, ($parcel$interopDefault($bv4AR$colorwheel_vars_cssmodulejs))), 'spectrum-ColorWheel-handle'),
        ...thumbProps
    }, /*#__PURE__*/ (0, $bv4AR$react).createElement("input", {
        ...focusProps,
        className: (0, $bv4AR$classNames)((0, ($parcel$interopDefault($bv4AR$colorwheel_vars_cssmodulejs))), 'spectrum-ColorWheel-slider'),
        ...inputProps,
        ref: inputRef
    })));
});


export {$3aac1c27203f04b5$export$f80663f808113381 as ColorWheel};
//# sourceMappingURL=ColorWheel.module.js.map
