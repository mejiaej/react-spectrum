import {ListBoxContext as $0c6f792811e33483$export$7ff8f37d2d81a48d} from "./ListBoxContext.mjs";
import "./vars.954cf9f6.css";
import $6TrMC$menu_vars_cssmodulejs from "./menu_vars_css.mjs";
import $6TrMC$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {classNames as $6TrMC$classNames, ClearSlots as $6TrMC$ClearSlots, SlotProvider as $6TrMC$SlotProvider} from "@react-spectrum/utils";
import {FocusRing as $6TrMC$FocusRing} from "@react-aria/focus";
import {Grid as $6TrMC$Grid} from "@react-spectrum/layout";
import {useHover as $6TrMC$useHover, isFocusVisible as $6TrMC$isFocusVisible} from "@react-aria/interactions";
import {mergeProps as $6TrMC$mergeProps} from "@react-aria/utils";
import $6TrMC$react, {useContext as $6TrMC$useContext, useRef as $6TrMC$useRef} from "react";
import {Text as $6TrMC$Text} from "@react-spectrum/text";
import {useOption as $6TrMC$useOption} from "@react-aria/listbox";


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










function $86983ea1fa3f7312$export$feb3b6b552c14a12(props) {
    let { item: item } = props;
    let { rendered: rendered, key: key } = item;
    let ElementType = item.props.href ? 'a' : 'div';
    let { state: state, shouldFocusOnHover: shouldFocusOnHover, shouldUseVirtualFocus: shouldUseVirtualFocus } = (0, $6TrMC$useContext)((0, $0c6f792811e33483$export$7ff8f37d2d81a48d));
    let ref = (0, $6TrMC$useRef)(undefined);
    let { optionProps: optionProps, labelProps: labelProps, descriptionProps: descriptionProps, isSelected: isSelected, isDisabled: isDisabled, isFocused: isFocused } = (0, $6TrMC$useOption)({
        'aria-label': item['aria-label'],
        key: key,
        isVirtualized: true
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $6TrMC$useHover)({
        ...props,
        isDisabled: isDisabled
    });
    let contents = typeof rendered === 'string' ? /*#__PURE__*/ (0, $6TrMC$react).createElement((0, $6TrMC$Text), null, rendered) : rendered;
    let isKeyboardModality = (0, $6TrMC$isFocusVisible)();
    return /*#__PURE__*/ (0, $6TrMC$react).createElement((0, $6TrMC$FocusRing), {
        focusRingClass: (0, $6TrMC$classNames)((0, ($parcel$interopDefault($6TrMC$menu_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $6TrMC$react).createElement(ElementType, {
        ...(0, $6TrMC$mergeProps)(optionProps, shouldFocusOnHover ? {} : hoverProps),
        ref: ref,
        className: (0, $6TrMC$classNames)((0, ($parcel$interopDefault($6TrMC$menu_vars_cssmodulejs))), 'spectrum-Menu-item', {
            // If using virtual focus, apply focused styles to the item when the user is interacting with keyboard modality
            'is-focused': shouldUseVirtualFocus && isFocused && isKeyboardModality,
            'is-disabled': isDisabled,
            'is-selected': isSelected,
            'is-selectable': state.selectionManager.selectionMode !== 'none',
            // When shouldFocusOnHover is false, apply hover styles both when hovered with the mouse.
            // Otherwise, apply hover styles when focused using non-keyboard modality.
            'is-hovered': isHovered && !shouldFocusOnHover || isFocused && !isKeyboardModality
        })
    }, /*#__PURE__*/ (0, $6TrMC$react).createElement((0, $6TrMC$Grid), {
        UNSAFE_className: (0, $6TrMC$classNames)((0, ($parcel$interopDefault($6TrMC$menu_vars_cssmodulejs))), 'spectrum-Menu-itemGrid')
    }, /*#__PURE__*/ (0, $6TrMC$react).createElement((0, $6TrMC$ClearSlots), null, /*#__PURE__*/ (0, $6TrMC$react).createElement((0, $6TrMC$SlotProvider), {
        slots: {
            text: {
                UNSAFE_className: (0, ($parcel$interopDefault($6TrMC$menu_vars_cssmodulejs)))['spectrum-Menu-itemLabel'],
                ...labelProps
            },
            icon: {
                size: 'S',
                UNSAFE_className: (0, ($parcel$interopDefault($6TrMC$menu_vars_cssmodulejs)))['spectrum-Menu-icon']
            },
            avatar: {
                size: 'avatar-size-100',
                UNSAFE_className: (0, ($parcel$interopDefault($6TrMC$menu_vars_cssmodulejs)))['spectrum-Menu-avatar']
            },
            description: {
                UNSAFE_className: (0, ($parcel$interopDefault($6TrMC$menu_vars_cssmodulejs)))['spectrum-Menu-description'],
                ...descriptionProps
            }
        }
    }, contents, isSelected && /*#__PURE__*/ (0, $6TrMC$react).createElement((0, $6TrMC$spectrumiconsuiCheckmarkMedium), {
        slot: "checkmark",
        UNSAFE_className: (0, $6TrMC$classNames)((0, ($parcel$interopDefault($6TrMC$menu_vars_cssmodulejs))), 'spectrum-Menu-checkmark')
    }))))));
}


export {$86983ea1fa3f7312$export$feb3b6b552c14a12 as ListBoxOption};
//# sourceMappingURL=ListBoxOption.module.js.map
