import "./vars.7c2bdd7c.css";
import $hlUTw$barloader_vars_cssmodulejs from "./barloader_vars_css.mjs";
import {clamp as $hlUTw$clamp} from "@react-aria/utils";
import {useDOMRef as $hlUTw$useDOMRef, useStyleProps as $hlUTw$useStyleProps, classNames as $hlUTw$classNames} from "@react-spectrum/utils";
import $hlUTw$react from "react";


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



const $ddf9337e928b5fe6$export$7c6ed87244065f3a = /*#__PURE__*/ (0, $hlUTw$react).forwardRef(function ProgressBarBase(props, ref) {
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, size: size = 'L', label: label, barClassName: barClassName, showValueLabel: showValueLabel = !!label, labelPosition: labelPosition = 'top', isIndeterminate: isIndeterminate = false, barProps: barProps, labelProps: labelProps, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, ...otherProps } = props;
    let domRef = (0, $hlUTw$useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $hlUTw$useStyleProps)(otherProps);
    value = (0, $hlUTw$clamp)(value, minValue, maxValue);
    let barStyle = {};
    if (!isIndeterminate) {
        let percentage = (value - minValue) / (maxValue - minValue);
        barStyle.width = `${Math.round(percentage * 100)}%`;
    }
    // Ideally this should be in useProgressBar, but children
    // are not supported in ProgressCircle which shares that hook...
    if (!label && !ariaLabel && !ariaLabelledby) console.warn('If you do not provide a visible label via children, you must specify an aria-label or aria-labelledby attribute for accessibility');
    // use inline style for fit-content because cssnano is too smart for us and will strip out the -moz prefix in css files
    return /*#__PURE__*/ (0, $hlUTw$react).createElement("div", {
        ...barProps,
        ref: domRef,
        className: (0, $hlUTw$classNames)((0, ($parcel$interopDefault($hlUTw$barloader_vars_cssmodulejs))), 'spectrum-BarLoader', {
            'spectrum-BarLoader--small': size === 'S',
            'spectrum-BarLoader--large': size === 'L',
            'spectrum-BarLoader--indeterminate': isIndeterminate,
            'spectrum-BarLoader--sideLabel': labelPosition === 'side'
        }, barClassName, styleProps.className),
        style: {
            minWidth: '-moz-fit-content',
            ...styleProps.style
        }
    }, label && /*#__PURE__*/ (0, $hlUTw$react).createElement("span", {
        ...labelProps,
        className: (0, $hlUTw$classNames)((0, ($parcel$interopDefault($hlUTw$barloader_vars_cssmodulejs))), 'spectrum-BarLoader-label')
    }, label), showValueLabel && barProps && /*#__PURE__*/ (0, $hlUTw$react).createElement("div", {
        className: (0, $hlUTw$classNames)((0, ($parcel$interopDefault($hlUTw$barloader_vars_cssmodulejs))), 'spectrum-BarLoader-percentage')
    }, barProps['aria-valuetext']), /*#__PURE__*/ (0, $hlUTw$react).createElement("div", {
        className: (0, $hlUTw$classNames)((0, ($parcel$interopDefault($hlUTw$barloader_vars_cssmodulejs))), 'spectrum-BarLoader-track')
    }, /*#__PURE__*/ (0, $hlUTw$react).createElement("div", {
        className: (0, $hlUTw$classNames)((0, ($parcel$interopDefault($hlUTw$barloader_vars_cssmodulejs))), 'spectrum-BarLoader-fill'),
        style: barStyle
    })));
});


export {$ddf9337e928b5fe6$export$7c6ed87244065f3a as ProgressBarBase};
//# sourceMappingURL=ProgressBarBase.module.js.map
