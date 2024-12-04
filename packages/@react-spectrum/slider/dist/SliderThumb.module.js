import "./vars.fb2ba660.css";
import $fQERx$slider_vars_cssmodulejs from "./slider_vars_css.module.js";
import {classNames as $fQERx$classNames} from "@react-spectrum/utils";
import {FocusRing as $fQERx$FocusRing} from "@react-aria/focus";
import {mergeProps as $fQERx$mergeProps} from "@react-aria/utils";
import $fQERx$react, {useRef as $fQERx$useRef} from "react";
import {useHover as $fQERx$useHover} from "@react-aria/interactions";
import {useSliderThumb as $fQERx$useSliderThumb} from "@react-aria/slider";
import {VisuallyHidden as $fQERx$VisuallyHidden} from "@react-aria/visually-hidden";


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







function $9058ca69d66a724f$export$2c1b491743890dec(props) {
    let { inputRef: inputRef, state: state } = props;
    let backupRef = (0, $fQERx$useRef)(null);
    inputRef = inputRef || backupRef;
    let { thumbProps: thumbProps, inputProps: inputProps, isDragging: isDragging, isFocused: isFocused } = (0, $fQERx$useSliderThumb)({
        ...props,
        inputRef: inputRef
    }, state);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $fQERx$useHover)({});
    return /*#__PURE__*/ (0, $fQERx$react).createElement((0, $fQERx$FocusRing), {
        within: true,
        focusRingClass: (0, $fQERx$classNames)((0, ($parcel$interopDefault($fQERx$slider_vars_cssmodulejs))), 'is-focused')
    }, /*#__PURE__*/ (0, $fQERx$react).createElement("div", {
        className: (0, $fQERx$classNames)((0, ($parcel$interopDefault($fQERx$slider_vars_cssmodulejs))), 'spectrum-Slider-handle', {
            'is-hovered': isHovered,
            'is-dragged': isDragging,
            'is-tophandle': isFocused
        }),
        ...(0, $fQERx$mergeProps)(thumbProps, hoverProps),
        role: "presentation"
    }, /*#__PURE__*/ (0, $fQERx$react).createElement((0, $fQERx$VisuallyHidden), null, /*#__PURE__*/ (0, $fQERx$react).createElement("input", {
        className: (0, $fQERx$classNames)((0, ($parcel$interopDefault($fQERx$slider_vars_cssmodulejs))), 'spectrum-Slider-input'),
        ref: inputRef,
        ...inputProps
    }))));
}


export {$9058ca69d66a724f$export$2c1b491743890dec as SliderThumb};
//# sourceMappingURL=SliderThumb.module.js.map
