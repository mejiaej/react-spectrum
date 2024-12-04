import "./styles.d49f4d83.css";
import $fVzF9$styles_cssmodulejs from "./styles_css.module.js";
import "./vars.ba84240a.css";
import $fVzF9$textfield_vars_cssmodulejs from "./textfield_vars_css.module.js";
import $fVzF9$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $fVzF9$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {useValueEffect as $fVzF9$useValueEffect, classNames as $fVzF9$classNames} from "@react-spectrum/utils";
import {useLayoutEffect as $fVzF9$useLayoutEffect, useResizeObserver as $fVzF9$useResizeObserver, useEvent as $fVzF9$useEvent, mergeProps as $fVzF9$mergeProps, mergeRefs as $fVzF9$mergeRefs} from "@react-aria/utils";
import $fVzF9$react, {useRef as $fVzF9$useRef, useCallback as $fVzF9$useCallback} from "react";
import {useFocusRing as $fVzF9$useFocusRing} from "@react-aria/focus";


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







const $79348162c55d687f$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, $fVzF9$react).forwardRef(function Input(props, ref) {
    let inputRef = (0, $fVzF9$useRef)(null);
    let { isDisabled: isDisabled, isQuiet: isQuiet, inputClassName: inputClassName, validationState: validationState, children: children, fieldProps: fieldProps, className: className, style: style, disableFocusRing: disableFocusRing } = props;
    // Reserve padding for the error icon when the width of the input is unconstrained.
    // When constrained, don't reserve space because adding it only when invalid will
    // not cause a layout shift.
    let [reservePadding, setReservePadding] = (0, $fVzF9$useValueEffect)(false);
    let onResize = (0, $fVzF9$useCallback)(()=>setReservePadding(function*(reservePadding) {
            if (inputRef.current && inputRef.current.parentElement) {
                if (reservePadding) // Try to collapse padding if the content is clipped.
                {
                    if (inputRef.current.scrollWidth > inputRef.current.offsetWidth) {
                        let width = inputRef.current.parentElement.offsetWidth;
                        yield false;
                        // If removing padding causes a layout shift, add it back.
                        if (inputRef.current.parentElement.offsetWidth !== width) yield true;
                    }
                } else // Try to add padding if the content is not clipped.
                if (inputRef.current.offsetWidth >= inputRef.current.scrollWidth) {
                    let width = inputRef.current.parentElement.offsetWidth;
                    yield true;
                    // If adding padding does not change the width (i.e. width is constrained), remove it again.
                    if (inputRef.current.parentElement.offsetWidth === width) yield false;
                }
            }
        }), [
        inputRef,
        setReservePadding
    ]);
    (0, $fVzF9$useLayoutEffect)(onResize, [
        onResize
    ]);
    (0, $fVzF9$useResizeObserver)({
        ref: inputRef,
        onResize: onResize
    });
    // We also need to listen for resize events of the window so we can detect
    // when there is enough space for the padding to be re-added. Ideally we'd
    // use a resize observer on a parent element, but it's hard to know _what_
    // parent element.
    (0, $fVzF9$useEvent)((0, $fVzF9$useRef)(typeof window !== 'undefined' ? window : null), 'resize', onResize);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible, isFocused: isFocused } = (0, $fVzF9$useFocusRing)({
        isTextInput: true,
        within: true
    });
    let isInvalid = validationState === 'invalid' && !isDisabled;
    let textfieldClass = (0, $fVzF9$classNames)((0, ($parcel$interopDefault($fVzF9$textfield_vars_cssmodulejs))), 'spectrum-Textfield', {
        'spectrum-Textfield--invalid': isInvalid,
        'spectrum-Textfield--valid': validationState === 'valid' && !isDisabled,
        'spectrum-Textfield--quiet': isQuiet,
        'focus-ring': isFocusVisible && !disableFocusRing
    }, (0, $fVzF9$classNames)((0, ($parcel$interopDefault($fVzF9$styles_cssmodulejs))), 'react-spectrum-Datepicker-field'), className);
    let inputClass = (0, $fVzF9$classNames)((0, ($parcel$interopDefault($fVzF9$textfield_vars_cssmodulejs))), 'spectrum-Textfield-input', {
        'is-disabled': isDisabled,
        'is-focused': isFocused
    }, (0, $fVzF9$classNames)((0, ($parcel$interopDefault($fVzF9$styles_cssmodulejs))), 'react-spectrum-DateField-Input'), reservePadding && (0, $fVzF9$classNames)((0, ($parcel$interopDefault($fVzF9$styles_cssmodulejs))), 'react-spectrum-Datepicker-input'), inputClassName);
    let iconClass = (0, $fVzF9$classNames)((0, ($parcel$interopDefault($fVzF9$textfield_vars_cssmodulejs))), 'spectrum-Textfield-validationIcon');
    let validationIcon = null;
    if (validationState === 'invalid' && !isDisabled) validationIcon = /*#__PURE__*/ (0, $fVzF9$react).createElement((0, $fVzF9$spectrumiconsuiAlertMedium), {
        "data-testid": "invalid-icon",
        UNSAFE_className: iconClass
    });
    else if (validationState === 'valid' && !isDisabled) validationIcon = /*#__PURE__*/ (0, $fVzF9$react).createElement((0, $fVzF9$spectrumiconsuiCheckmarkMedium), {
        "data-testid": "valid-icon",
        UNSAFE_className: iconClass
    });
    return /*#__PURE__*/ (0, $fVzF9$react).createElement("div", {
        role: "presentation",
        ...(0, $fVzF9$mergeProps)(fieldProps, focusProps),
        className: textfieldClass,
        style: style
    }, /*#__PURE__*/ (0, $fVzF9$react).createElement("div", {
        role: "presentation",
        className: inputClass
    }, /*#__PURE__*/ (0, $fVzF9$react).createElement("div", {
        role: "presentation",
        className: (0, $fVzF9$classNames)((0, ($parcel$interopDefault($fVzF9$styles_cssmodulejs))), 'react-spectrum-Datepicker-inputContents'),
        ref: (0, $fVzF9$mergeRefs)(ref, inputRef)
    }, /*#__PURE__*/ (0, $fVzF9$react).createElement("div", {
        role: "presentation",
        className: (0, $fVzF9$classNames)((0, ($parcel$interopDefault($fVzF9$styles_cssmodulejs))), 'react-spectrum-Datepicker-inputSized'),
        style: {
            minWidth: props.minWidth
        }
    }, children))), validationIcon);
});


export {$79348162c55d687f$export$f5b8910cec6cf069 as Input};
//# sourceMappingURL=Input.module.js.map
