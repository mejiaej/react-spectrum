import "./vars.74a64330.css";
import $a4QS8$circleloader_vars_cssmodulejs from "./circleloader_vars_css.module.js";
import {clamp as $a4QS8$clamp} from "@react-aria/utils";
import {useDOMRef as $a4QS8$useDOMRef, useStyleProps as $a4QS8$useStyleProps, classNames as $a4QS8$classNames} from "@react-spectrum/utils";
import $a4QS8$react from "react";
import {useProgressBar as $a4QS8$useProgressBar} from "@react-aria/progress";


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




const $79c16f64960b6385$export$c79b9d6b4cc92af7 = /*#__PURE__*/ (0, $a4QS8$react).forwardRef(function ProgressCircle(props, ref) {
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, size: size = 'M', staticColor: staticColor, variant: variant, isIndeterminate: isIndeterminate = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, ...otherProps } = props;
    let domRef = (0, $a4QS8$useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $a4QS8$useStyleProps)(otherProps);
    value = (0, $a4QS8$clamp)(value, minValue, maxValue);
    let { progressBarProps: progressBarProps } = (0, $a4QS8$useProgressBar)({
        ...props,
        value: value
    });
    let subMask1Style = {};
    let subMask2Style = {};
    if (!isIndeterminate) {
        let percentage = (value - minValue) / (maxValue - minValue) * 100;
        let angle;
        if (percentage > 0 && percentage <= 50) {
            angle = -180 + percentage / 50 * 180;
            subMask1Style.transform = `rotate(${angle}deg)`;
            subMask2Style.transform = 'rotate(-180deg)';
        } else if (percentage > 50) {
            angle = -180 + (percentage - 50) / 50 * 180;
            subMask1Style.transform = 'rotate(0deg)';
            subMask2Style.transform = `rotate(${angle}deg)`;
        }
    }
    if (!ariaLabel && !ariaLabelledby) console.warn('ProgressCircle requires an aria-label or aria-labelledby attribute for accessibility');
    return /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        ...styleProps,
        ...progressBarProps,
        ref: domRef,
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader', {
            'spectrum-CircleLoader--indeterminate': isIndeterminate,
            'spectrum-CircleLoader--small': size === 'S',
            'spectrum-CircleLoader--large': size === 'L',
            'spectrum-CircleLoader--overBackground': variant === 'overBackground',
            'spectrum-CircleLoader--staticWhite': staticColor === 'white',
            'spectrum-CircleLoader--staticBlack': staticColor === 'black'
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader-track')
    }), /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader-fills')
    }, /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader-fillMask1')
    }, /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader-fillSubMask1'),
        "data-testid": "fillSubMask1",
        style: subMask1Style
    }, /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader-fill')
    }))), /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader-fillMask2')
    }, /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader-fillSubMask2'),
        "data-testid": "fillSubMask2",
        style: subMask2Style
    }, /*#__PURE__*/ (0, $a4QS8$react).createElement("div", {
        className: (0, $a4QS8$classNames)((0, ($parcel$interopDefault($a4QS8$circleloader_vars_cssmodulejs))), 'spectrum-CircleLoader-fill')
    })))));
});


export {$79c16f64960b6385$export$c79b9d6b4cc92af7 as ProgressCircle};
//# sourceMappingURL=ProgressCircle.module.js.map
