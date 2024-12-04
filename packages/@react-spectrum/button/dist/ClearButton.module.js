import "./vars.98146794.css";
import $d0kJV$button_vars_cssmodulejs from "./button_vars_css.module.js";
import {useFocusableRef as $d0kJV$useFocusableRef, useStyleProps as $d0kJV$useStyleProps, classNames as $d0kJV$classNames} from "@react-spectrum/utils";
import $d0kJV$spectrumiconsuiCrossSmall from "@spectrum-icons/ui/CrossSmall";
import {FocusRing as $d0kJV$FocusRing} from "@react-aria/focus";
import {mergeProps as $d0kJV$mergeProps} from "@react-aria/utils";
import $d0kJV$react from "react";
import {useButton as $d0kJV$useButton} from "@react-aria/button";
import {useHover as $d0kJV$useHover} from "@react-aria/interactions";


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







const $dd24e555a16de2ae$export$13ec83e50bf04290 = /*#__PURE__*/ (0, $d0kJV$react).forwardRef(function ClearButton(props, ref) {
    let { children: children = /*#__PURE__*/ (0, $d0kJV$react).createElement((0, $d0kJV$spectrumiconsuiCrossSmall), {
        UNSAFE_className: (0, ($parcel$interopDefault($d0kJV$button_vars_cssmodulejs)))['spectrum-Icon']
    }), focusClassName: focusClassName, variant: variant, autoFocus: autoFocus, isDisabled: isDisabled, preventFocus: preventFocus, elementType: elementType = preventFocus ? 'div' : 'button', ...otherProps } = props;
    let domRef = (0, $d0kJV$useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $d0kJV$useButton)({
        ...props,
        elementType: elementType
    }, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $d0kJV$useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $d0kJV$useStyleProps)(otherProps);
    // For cases like the clear button in a search field, remove the tabIndex so
    // iOS 14 with VoiceOver doesn't focus the button and hide the keyboard when
    // moving the cursor over the clear button.
    if (preventFocus) delete buttonProps.tabIndex;
    let ElementType = elementType;
    return /*#__PURE__*/ (0, $d0kJV$react).createElement((0, $d0kJV$FocusRing), {
        focusRingClass: (0, $d0kJV$classNames)((0, ($parcel$interopDefault($d0kJV$button_vars_cssmodulejs))), 'focus-ring', focusClassName),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $d0kJV$react).createElement(ElementType, {
        ...styleProps,
        ...(0, $d0kJV$mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $d0kJV$classNames)((0, ($parcel$interopDefault($d0kJV$button_vars_cssmodulejs))), 'spectrum-ClearButton', {
            [`spectrum-ClearButton--${variant}`]: variant,
            'is-disabled': isDisabled,
            'is-active': isPressed,
            'is-hovered': isHovered
        }, styleProps.className)
    }, children));
});


export {$dd24e555a16de2ae$export$13ec83e50bf04290 as ClearButton};
//# sourceMappingURL=ClearButton.module.js.map
