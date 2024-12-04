import "./vars.98146794.css";
import $3XyjH$button_vars_cssmodulejs from "./button_vars_css.module.js";
import {useFocusableRef as $3XyjH$useFocusableRef, useStyleProps as $3XyjH$useStyleProps, classNames as $3XyjH$classNames, SlotProvider as $3XyjH$SlotProvider} from "@react-spectrum/utils";
import {FocusRing as $3XyjH$FocusRing} from "@react-aria/focus";
import {mergeProps as $3XyjH$mergeProps} from "@react-aria/utils";
import $3XyjH$react from "react";
import {Text as $3XyjH$Text} from "@react-spectrum/text";
import {useHover as $3XyjH$useHover} from "@react-aria/interactions";
import {useProviderProps as $3XyjH$useProviderProps} from "@react-spectrum/provider";
import {useToggleButton as $3XyjH$useToggleButton} from "@react-aria/button";
import {useToggleState as $3XyjH$useToggleState} from "@react-stately/toggle";


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









const $3979c7c23b0bd270$export$d2b052e7b4be1756 = /*#__PURE__*/ (0, $3XyjH$react).forwardRef(function ToggleButton(props, ref) {
    props = (0, $3XyjH$useProviderProps)(props);
    let { isQuiet: isQuiet, isDisabled: isDisabled, isEmphasized: isEmphasized, staticColor: staticColor, children: children, autoFocus: autoFocus, ...otherProps } = props;
    let domRef = (0, $3XyjH$useFocusableRef)(ref);
    let state = (0, $3XyjH$useToggleState)(props);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $3XyjH$useToggleButton)(props, state, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $3XyjH$useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $3XyjH$useStyleProps)(otherProps);
    let isTextOnly = (0, $3XyjH$react).Children.toArray(props.children).every((c)=>!/*#__PURE__*/ (0, $3XyjH$react).isValidElement(c));
    return /*#__PURE__*/ (0, $3XyjH$react).createElement((0, $3XyjH$FocusRing), {
        focusRingClass: (0, $3XyjH$classNames)((0, ($parcel$interopDefault($3XyjH$button_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $3XyjH$react).createElement("button", {
        ...styleProps,
        ...(0, $3XyjH$mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $3XyjH$classNames)((0, ($parcel$interopDefault($3XyjH$button_vars_cssmodulejs))), 'spectrum-ActionButton', {
            'spectrum-ActionButton--quiet': isQuiet,
            'spectrum-ActionButton--emphasized': isEmphasized,
            'spectrum-ActionButton--staticColor': !!staticColor,
            'spectrum-ActionButton--staticWhite': staticColor === 'white',
            'spectrum-ActionButton--staticBlack': staticColor === 'black',
            'is-active': isPressed,
            'is-disabled': isDisabled,
            'is-hovered': isHovered,
            'is-selected': state.isSelected
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $3XyjH$react).createElement((0, $3XyjH$SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $3XyjH$classNames)((0, ($parcel$interopDefault($3XyjH$button_vars_cssmodulejs))), 'spectrum-Icon')
            },
            text: {
                UNSAFE_className: (0, $3XyjH$classNames)((0, ($parcel$interopDefault($3XyjH$button_vars_cssmodulejs))), 'spectrum-ActionButton-label')
            }
        }
    }, typeof children === 'string' || isTextOnly ? /*#__PURE__*/ (0, $3XyjH$react).createElement((0, $3XyjH$Text), null, children) : children)));
});


export {$3979c7c23b0bd270$export$d2b052e7b4be1756 as ToggleButton};
//# sourceMappingURL=ToggleButton.module.js.map
