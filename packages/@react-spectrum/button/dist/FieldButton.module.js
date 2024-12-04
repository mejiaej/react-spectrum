import "./vars.98146794.css";
import $b8ZoF$button_vars_cssmodulejs from "./button_vars_css.module.js";
import {useSlotProps as $b8ZoF$useSlotProps, useFocusableRef as $b8ZoF$useFocusableRef, useStyleProps as $b8ZoF$useStyleProps, classNames as $b8ZoF$classNames, SlotProvider as $b8ZoF$SlotProvider} from "@react-spectrum/utils";
import {FocusRing as $b8ZoF$FocusRing} from "@react-aria/focus";
import {mergeProps as $b8ZoF$mergeProps} from "@react-aria/utils";
import $b8ZoF$react from "react";
import {useButton as $b8ZoF$useButton} from "@react-aria/button";
import {useHover as $b8ZoF$useHover} from "@react-aria/interactions";


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






const $b43bd559b476d0c4$export$47dc48f595b075da = /*#__PURE__*/ (0, $b8ZoF$react).forwardRef(function FieldButton(props, ref) {
    props = (0, $b8ZoF$useSlotProps)(props, 'button');
    let { isQuiet: isQuiet, isDisabled: isDisabled, validationState: validationState, isInvalid: isInvalid, children: children, autoFocus: autoFocus, isActive: isActive, focusRingClass: focusRingClass, ...otherProps } = props;
    let domRef = (0, $b8ZoF$useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $b8ZoF$useButton)(props, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $b8ZoF$useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $b8ZoF$useStyleProps)(otherProps);
    return /*#__PURE__*/ (0, $b8ZoF$react).createElement((0, $b8ZoF$FocusRing), {
        focusRingClass: (0, $b8ZoF$classNames)((0, ($parcel$interopDefault($b8ZoF$button_vars_cssmodulejs))), 'focus-ring', focusRingClass),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $b8ZoF$react).createElement("button", {
        ...(0, $b8ZoF$mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $b8ZoF$classNames)((0, ($parcel$interopDefault($b8ZoF$button_vars_cssmodulejs))), 'spectrum-FieldButton', {
            'spectrum-FieldButton--quiet': isQuiet,
            'is-active': isActive || isPressed,
            'is-disabled': isDisabled,
            'spectrum-FieldButton--invalid': isInvalid || validationState === 'invalid',
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $b8ZoF$react).createElement((0, $b8ZoF$SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $b8ZoF$classNames)((0, ($parcel$interopDefault($b8ZoF$button_vars_cssmodulejs))), 'spectrum-Icon')
            }
        }
    }, children)));
});


export {$b43bd559b476d0c4$export$47dc48f595b075da as FieldButton};
//# sourceMappingURL=FieldButton.module.js.map
