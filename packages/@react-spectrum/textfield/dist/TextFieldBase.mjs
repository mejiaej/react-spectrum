import "./vars.ff531137.css";
import $264pK$textfield_vars_cssmodulejs from "./textfield_vars_css.mjs";
import $264pK$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $264pK$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {createFocusableRef as $264pK$createFocusableRef, classNames as $264pK$classNames} from "@react-spectrum/utils";
import {Field as $264pK$Field} from "@react-spectrum/label";
import {mergeProps as $264pK$mergeProps} from "@react-aria/utils";
import $264pK$react, {forwardRef as $264pK$forwardRef, useRef as $264pK$useRef, useImperativeHandle as $264pK$useImperativeHandle, cloneElement as $264pK$cloneElement} from "react";
import {useFocusRing as $264pK$useFocusRing} from "@react-aria/focus";
import {useHover as $264pK$useHover} from "@react-aria/interactions";


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








const $599adb75312e6492$export$d22444a338b6e3c2 = /*#__PURE__*/ (0, $264pK$forwardRef)(function TextFieldBase(props, ref) {
    let { validationState: validationState = props.isInvalid ? 'invalid' : null, icon: icon, isQuiet: isQuiet = false, isDisabled: isDisabled, multiLine: multiLine, autoFocus: autoFocus, inputClassName: inputClassName, wrapperChildren: wrapperChildren, labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, inputRef: userInputRef, isLoading: isLoading, loadingIndicator: loadingIndicator, validationIconClassName: validationIconClassName, disableFocusRing: disableFocusRing } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $264pK$useHover)({
        isDisabled: isDisabled
    });
    let domRef = (0, $264pK$useRef)(null);
    let defaultInputRef = (0, $264pK$useRef)(null);
    let inputRef = userInputRef || defaultInputRef;
    // Expose imperative interface for ref
    (0, $264pK$useImperativeHandle)(ref, ()=>({
            ...(0, $264pK$createFocusableRef)(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        }));
    let ElementType = multiLine ? 'textarea' : 'input';
    let isInvalid = validationState === 'invalid' && !isDisabled;
    if (icon) {
        let UNSAFE_className = (0, $264pK$classNames)((0, ($parcel$interopDefault($264pK$textfield_vars_cssmodulejs))), icon.props && icon.props.UNSAFE_className, 'spectrum-Textfield-icon');
        icon = /*#__PURE__*/ (0, $264pK$cloneElement)(icon, {
            UNSAFE_className: UNSAFE_className,
            size: 'S'
        });
    }
    let validationIcon = isInvalid ? /*#__PURE__*/ (0, $264pK$react).createElement((0, $264pK$spectrumiconsuiAlertMedium), null) : /*#__PURE__*/ (0, $264pK$react).createElement((0, $264pK$spectrumiconsuiCheckmarkMedium), null);
    let validation = /*#__PURE__*/ (0, $264pK$cloneElement)(validationIcon, {
        UNSAFE_className: (0, $264pK$classNames)((0, ($parcel$interopDefault($264pK$textfield_vars_cssmodulejs))), 'spectrum-Textfield-validationIcon', validationIconClassName)
    });
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $264pK$useFocusRing)({
        isTextInput: true,
        autoFocus: autoFocus
    });
    let textField = /*#__PURE__*/ (0, $264pK$react).createElement("div", {
        className: (0, $264pK$classNames)((0, ($parcel$interopDefault($264pK$textfield_vars_cssmodulejs))), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': isInvalid,
            'spectrum-Textfield--valid': validationState === 'valid' && !isDisabled,
            'spectrum-Textfield--loadable': loadingIndicator,
            'spectrum-Textfield--quiet': isQuiet,
            'spectrum-Textfield--multiline': multiLine,
            'focus-ring': !disableFocusRing && isFocusVisible
        })
    }, /*#__PURE__*/ (0, $264pK$react).createElement(ElementType, {
        ...(0, $264pK$mergeProps)(inputProps, hoverProps, focusProps),
        ref: inputRef,
        rows: multiLine ? 1 : undefined,
        className: (0, $264pK$classNames)((0, ($parcel$interopDefault($264pK$textfield_vars_cssmodulejs))), 'spectrum-Textfield-input', {
            'spectrum-Textfield-inputIcon': icon,
            'is-hovered': isHovered
        }, inputClassName)
    }), icon, validationState && !isLoading && !isDisabled ? validation : null, isLoading && loadingIndicator, wrapperChildren);
    return /*#__PURE__*/ (0, $264pK$react).createElement((0, $264pK$Field), {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        wrapperClassName: (0, $264pK$classNames)((0, ($parcel$interopDefault($264pK$textfield_vars_cssmodulejs))), 'spectrum-Textfield-wrapper', {
            'spectrum-Textfield-wrapper--quiet': isQuiet
        }),
        showErrorIcon: false,
        ref: domRef
    }, textField);
});


export {$599adb75312e6492$export$d22444a338b6e3c2 as TextFieldBase};
//# sourceMappingURL=TextFieldBase.module.js.map
