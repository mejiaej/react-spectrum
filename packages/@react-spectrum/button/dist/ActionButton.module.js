import "./vars.98146794.css";
import $kfV1G$button_vars_cssmodulejs from "./button_vars_css.module.js";
import {useSlotProps as $kfV1G$useSlotProps, classNames as $kfV1G$classNames, useFocusableRef as $kfV1G$useFocusableRef, useStyleProps as $kfV1G$useStyleProps, ClearSlots as $kfV1G$ClearSlots, SlotProvider as $kfV1G$SlotProvider} from "@react-spectrum/utils";
import $kfV1G$spectrumiconsuiCornerTriangle from "@spectrum-icons/ui/CornerTriangle";
import {FocusRing as $kfV1G$FocusRing} from "@react-aria/focus";
import {mergeProps as $kfV1G$mergeProps} from "@react-aria/utils";
import $kfV1G$react from "react";
import {Text as $kfV1G$Text} from "@react-spectrum/text";
import {useButton as $kfV1G$useButton} from "@react-aria/button";
import {useHover as $kfV1G$useHover} from "@react-aria/interactions";
import {useProviderProps as $kfV1G$useProviderProps} from "@react-spectrum/provider";


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









const $042ad0b3a4a55b33$export$cfc7921d29ef7b80 = /*#__PURE__*/ (0, $kfV1G$react).forwardRef(function ActionButton(props, ref) {
    props = (0, $kfV1G$useProviderProps)(props);
    props = (0, $kfV1G$useSlotProps)(props, 'actionButton');
    let textProps = (0, $kfV1G$useSlotProps)({
        UNSAFE_className: (0, $kfV1G$classNames)((0, ($parcel$interopDefault($kfV1G$button_vars_cssmodulejs))), 'spectrum-ActionButton-label')
    }, 'text');
    let { isQuiet: isQuiet, isDisabled: isDisabled, staticColor: staticColor, children: children, autoFocus: autoFocus, holdAffordance: // @ts-ignore (private)
    holdAffordance, hideButtonText: // @ts-ignore (private)
    hideButtonText, ...otherProps } = props;
    let domRef = (0, $kfV1G$useFocusableRef)(ref);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $kfV1G$useButton)(props, domRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $kfV1G$useHover)({
        isDisabled: isDisabled
    });
    let { styleProps: styleProps } = (0, $kfV1G$useStyleProps)(otherProps);
    let isTextOnly = (0, $kfV1G$react).Children.toArray(props.children).every((c)=>!/*#__PURE__*/ (0, $kfV1G$react).isValidElement(c));
    return /*#__PURE__*/ (0, $kfV1G$react).createElement((0, $kfV1G$FocusRing), {
        focusRingClass: (0, $kfV1G$classNames)((0, ($parcel$interopDefault($kfV1G$button_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $kfV1G$react).createElement("button", {
        ...styleProps,
        ...(0, $kfV1G$mergeProps)(buttonProps, hoverProps),
        ref: domRef,
        className: (0, $kfV1G$classNames)((0, ($parcel$interopDefault($kfV1G$button_vars_cssmodulejs))), 'spectrum-ActionButton', {
            'spectrum-ActionButton--quiet': isQuiet,
            'spectrum-ActionButton--staticColor': !!staticColor,
            'spectrum-ActionButton--staticWhite': staticColor === 'white',
            'spectrum-ActionButton--staticBlack': staticColor === 'black',
            'is-active': isPressed,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, holdAffordance && /*#__PURE__*/ (0, $kfV1G$react).createElement((0, $kfV1G$spectrumiconsuiCornerTriangle), {
        UNSAFE_className: (0, $kfV1G$classNames)((0, ($parcel$interopDefault($kfV1G$button_vars_cssmodulejs))), 'spectrum-ActionButton-hold')
    }), /*#__PURE__*/ (0, $kfV1G$react).createElement((0, $kfV1G$ClearSlots), null, /*#__PURE__*/ (0, $kfV1G$react).createElement((0, $kfV1G$SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $kfV1G$classNames)((0, ($parcel$interopDefault($kfV1G$button_vars_cssmodulejs))), 'spectrum-Icon', {
                    'spectrum-ActionGroup-itemIcon': hideButtonText
                })
            },
            text: {
                ...textProps
            }
        }
    }, typeof children === 'string' || isTextOnly ? /*#__PURE__*/ (0, $kfV1G$react).createElement((0, $kfV1G$Text), null, children) : children))));
});


export {$042ad0b3a4a55b33$export$cfc7921d29ef7b80 as ActionButton};
//# sourceMappingURL=ActionButton.module.js.map
