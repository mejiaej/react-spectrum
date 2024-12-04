import "./vars.98146794.css";
import $g8O0d$button_vars_cssmodulejs from "./button_vars_css.mjs";
import {useFocusableRef as $g8O0d$useFocusableRef, useStyleProps as $g8O0d$useStyleProps, classNames as $g8O0d$classNames} from "@react-spectrum/utils";
import {FocusRing as $g8O0d$FocusRing} from "@react-aria/focus";
import {mergeProps as $g8O0d$mergeProps} from "@react-aria/utils";
import $g8O0d$react from "react";
import {useButton as $g8O0d$useButton} from "@react-aria/button";
import {useHover as $g8O0d$useHover} from "@react-aria/interactions";
import {useProviderProps as $g8O0d$useProviderProps} from "@react-spectrum/provider";


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







const $45108e3c482ee88b$export$9b0b80fed00ba8b1 = /*#__PURE__*/ (0, $g8O0d$react).forwardRef(function LogicButton(props, ref) {
    props = (0, $g8O0d$useProviderProps)(props);
    let { variant: variant, children: children, isDisabled: isDisabled, autoFocus: autoFocus, ...otherProps } = props;
    let domRef = (0, $g8O0d$useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $g8O0d$useButton)(props, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $g8O0d$useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $g8O0d$useStyleProps)(otherProps);
    return /*#__PURE__*/ (0, $g8O0d$react).createElement((0, $g8O0d$FocusRing), {
        focusRingClass: (0, $g8O0d$classNames)((0, ($parcel$interopDefault($g8O0d$button_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $g8O0d$react).createElement("button", {
        ...styleProps,
        ...(0, $g8O0d$mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $g8O0d$classNames)((0, ($parcel$interopDefault($g8O0d$button_vars_cssmodulejs))), 'spectrum-LogicButton', {
            [`spectrum-LogicButton--${variant}`]: variant,
            'is-disabled': isDisabled,
            'is-active': isPressed,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $g8O0d$react).createElement("span", {
        className: (0, $g8O0d$classNames)((0, ($parcel$interopDefault($g8O0d$button_vars_cssmodulejs))), 'spectrum-Button-label')
    }, children)));
});


export {$45108e3c482ee88b$export$9b0b80fed00ba8b1 as LogicButton};
//# sourceMappingURL=LogicButton.module.js.map
