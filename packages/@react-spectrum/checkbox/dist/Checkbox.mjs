import {CheckboxGroupContext as $8c8ab388b155237e$export$baf37c4be89255b8} from "./context.mjs";
import "./vars.b0b62fb7.css";
import $cvQES$checkbox_vars_cssmodulejs from "./checkbox_vars_css.mjs";
import {useContextProps as $cvQES$useContextProps, CheckboxContext as $cvQES$CheckboxContext} from "react-aria-components";
import $cvQES$spectrumiconsuiCheckmarkSmall from "@spectrum-icons/ui/CheckmarkSmall";
import {useFocusableRef as $cvQES$useFocusableRef, useStyleProps as $cvQES$useStyleProps, classNames as $cvQES$classNames} from "@react-spectrum/utils";
import $cvQES$spectrumiconsuiDashSmall from "@spectrum-icons/ui/DashSmall";
import {FocusRing as $cvQES$FocusRing} from "@react-aria/focus";
import $cvQES$react, {forwardRef as $cvQES$forwardRef, useRef as $cvQES$useRef, useContext as $cvQES$useContext} from "react";
import {useCheckboxGroupItem as $cvQES$useCheckboxGroupItem, useCheckbox as $cvQES$useCheckbox} from "@react-aria/checkbox";
import {useFormProps as $cvQES$useFormProps} from "@react-spectrum/form";
import {useHover as $cvQES$useHover} from "@react-aria/interactions";
import {useProviderProps as $cvQES$useProviderProps} from "@react-spectrum/provider";
import {useToggleState as $cvQES$useToggleState} from "@react-stately/toggle";


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












const $25b6292d81af2844$export$48513f6b9f8ce62d = /*#__PURE__*/ (0, $cvQES$forwardRef)(function Checkbox(props, ref) {
    let originalProps = props;
    let inputRef = (0, $cvQES$useRef)(null);
    let domRef = (0, $cvQES$useFocusableRef)(ref, inputRef);
    [props, domRef] = (0, $cvQES$useContextProps)(props, domRef, (0, $cvQES$CheckboxContext));
    props = (0, $cvQES$useProviderProps)(props);
    props = (0, $cvQES$useFormProps)(props);
    let { isIndeterminate: isIndeterminate = false, isEmphasized: isEmphasized = false, autoFocus: autoFocus, children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $cvQES$useStyleProps)(otherProps);
    // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
    // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
    // but since the checkbox won't move in and out of a group, it should be safe.
    let groupState = (0, $cvQES$useContext)((0, $8c8ab388b155237e$export$baf37c4be89255b8));
    let { inputProps: inputProps, isInvalid: isInvalid, isDisabled: isDisabled } = groupState ? (0, $cvQES$useCheckboxGroupItem)({
        ...props,
        // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
        // it's passed explicitly here to avoid typescript error (requires ignore).
        // @ts-ignore
        value: props.value,
        // Only pass isRequired and validationState to react-aria if they came from
        // the props for this individual checkbox, and not from the group via context.
        isRequired: originalProps.isRequired,
        validationState: originalProps.validationState,
        isInvalid: originalProps.isInvalid
    }, groupState, inputRef) : (0, $cvQES$useCheckbox)(props, (0, $cvQES$useToggleState)(props), inputRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $cvQES$useHover)({
        isDisabled: isDisabled
    });
    let markIcon = isIndeterminate ? /*#__PURE__*/ (0, $cvQES$react).createElement((0, $cvQES$spectrumiconsuiDashSmall), {
        UNSAFE_className: (0, $cvQES$classNames)((0, ($parcel$interopDefault($cvQES$checkbox_vars_cssmodulejs))), 'spectrum-Checkbox-partialCheckmark')
    }) : /*#__PURE__*/ (0, $cvQES$react).createElement((0, $cvQES$spectrumiconsuiCheckmarkSmall), {
        UNSAFE_className: (0, $cvQES$classNames)((0, ($parcel$interopDefault($cvQES$checkbox_vars_cssmodulejs))), 'spectrum-Checkbox-checkmark')
    });
    if (groupState) {
        for (let key of [
            'isSelected',
            'defaultSelected',
            'isEmphasized'
        ])if (originalProps[key] != null) console.warn(`${key} is unsupported on individual <Checkbox> elements within a <CheckboxGroup>. Please apply these props to the group instead.`);
        if (props.value == null) console.warn('A <Checkbox> element within a <CheckboxGroup> requires a `value` property.');
    }
    return /*#__PURE__*/ (0, $cvQES$react).createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: (0, $cvQES$classNames)((0, ($parcel$interopDefault($cvQES$checkbox_vars_cssmodulejs))), 'spectrum-Checkbox', {
            'is-checked': inputProps.checked,
            'is-indeterminate': isIndeterminate,
            'spectrum-Checkbox--quiet': !isEmphasized,
            'is-invalid': isInvalid,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $cvQES$react).createElement((0, $cvQES$FocusRing), {
        focusRingClass: (0, $cvQES$classNames)((0, ($parcel$interopDefault($cvQES$checkbox_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $cvQES$react).createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: (0, $cvQES$classNames)((0, ($parcel$interopDefault($cvQES$checkbox_vars_cssmodulejs))), 'spectrum-Checkbox-input')
    })), /*#__PURE__*/ (0, $cvQES$react).createElement("span", {
        className: (0, $cvQES$classNames)((0, ($parcel$interopDefault($cvQES$checkbox_vars_cssmodulejs))), 'spectrum-Checkbox-box')
    }, markIcon), children && /*#__PURE__*/ (0, $cvQES$react).createElement("span", {
        className: (0, $cvQES$classNames)((0, ($parcel$interopDefault($cvQES$checkbox_vars_cssmodulejs))), 'spectrum-Checkbox-label')
    }, children));
});


export {$25b6292d81af2844$export$48513f6b9f8ce62d as Checkbox};
//# sourceMappingURL=Checkbox.module.js.map
