import {StepButton as $7f00b388e0d3b2f6$export$b2f6b60c1d32d6aa} from "./StepButton.module.js";
import "./vars.8d25eb32.css";
import $5I0aR$stepper_vars_cssmodulejs from "./stepper_vars_css.module.js";
import {useStyleProps as $5I0aR$useStyleProps, useFocusableRef as $5I0aR$useFocusableRef, classNames as $5I0aR$classNames} from "@react-spectrum/utils";
import {Field as $5I0aR$Field} from "@react-spectrum/label";
import {FocusRing as $5I0aR$FocusRing} from "@react-aria/focus";
import {mergeProps as $5I0aR$mergeProps} from "@react-aria/utils";
import {useNumberFieldState as $5I0aR$useNumberFieldState} from "@react-stately/numberfield";
import $5I0aR$react, {useRef as $5I0aR$useRef} from "react";
import {TextFieldBase as $5I0aR$TextFieldBase} from "@react-spectrum/textfield";
import {useFormProps as $5I0aR$useFormProps} from "@react-spectrum/form";
import {useHover as $5I0aR$useHover} from "@react-aria/interactions";
import {useLocale as $5I0aR$useLocale} from "@react-aria/i18n";
import {useNumberField as $5I0aR$useNumberField} from "@react-aria/numberfield";
import {useProviderProps as $5I0aR$useProviderProps, useProvider as $5I0aR$useProvider} from "@react-spectrum/provider";


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













const $48b879bdd771eb85$export$63c5fa0b2fdccd2e = /*#__PURE__*/ (0, $5I0aR$react).forwardRef(function NumberField(props, ref) {
    props = (0, $5I0aR$useProviderProps)(props);
    props = (0, $5I0aR$useFormProps)(props);
    let provider = (0, $5I0aR$useProvider)();
    let { isQuiet: isQuiet, isReadOnly: isReadOnly, isDisabled: isDisabled, hideStepper: hideStepper } = props;
    let { styleProps: style } = (0, $5I0aR$useStyleProps)(props);
    let { locale: locale } = (0, $5I0aR$useLocale)();
    let state = (0, $5I0aR$useNumberFieldState)({
        ...props,
        locale: locale
    });
    let inputRef = (0, $5I0aR$useRef)(null);
    let domRef = (0, $5I0aR$useFocusableRef)(ref, inputRef);
    let { groupProps: groupProps, labelProps: labelProps, inputProps: inputProps, incrementButtonProps: incrementButtonProps, decrementButtonProps: decrementButtonProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $5I0aR$useNumberField)(props, state, inputRef);
    let isMobile = provider.scale === 'large';
    let showStepper = !hideStepper;
    let { isHovered: isHovered, hoverProps: hoverProps } = (0, $5I0aR$useHover)({
        isDisabled: isDisabled
    });
    let validationState = props.validationState || (isInvalid ? 'invalid' : undefined);
    let className = (0, $5I0aR$classNames)((0, ($parcel$interopDefault($5I0aR$stepper_vars_cssmodulejs))), 'spectrum-Stepper', // because FocusRing won't pass along the className from Field, we have to handle that ourselves
    !props.label && style.className ? style.className : '', {
        'spectrum-Stepper--isQuiet': isQuiet,
        'is-disabled': isDisabled,
        'spectrum-Stepper--readonly': isReadOnly,
        'is-invalid': validationState === 'invalid' && !isDisabled,
        'spectrum-Stepper--showStepper': showStepper,
        'spectrum-Stepper--isMobile': isMobile,
        'is-hovered': isHovered
    });
    return /*#__PURE__*/ (0, $5I0aR$react).createElement((0, $5I0aR$Field), {
        ...props,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        labelProps: labelProps,
        ref: domRef,
        wrapperClassName: (0, $5I0aR$classNames)((0, ($parcel$interopDefault($5I0aR$stepper_vars_cssmodulejs))), 'spectrum-Stepper-container', {
            'spectrum-Stepper-container--isMobile': isMobile
        })
    }, /*#__PURE__*/ (0, $5I0aR$react).createElement($48b879bdd771eb85$var$NumberFieldInput, {
        ...props,
        groupProps: (0, $5I0aR$mergeProps)(groupProps, hoverProps),
        inputProps: inputProps,
        inputRef: inputRef,
        incrementProps: incrementButtonProps,
        decrementProps: decrementButtonProps,
        className: className,
        style: style,
        state: state,
        validationState: validationState
    }));
});
const $48b879bdd771eb85$var$NumberFieldInput = /*#__PURE__*/ (0, $5I0aR$react).forwardRef(function NumberFieldInput(props, ref) {
    let { groupProps: groupProps, inputProps: inputProps, inputRef: inputRef, incrementProps: incrementProps, decrementProps: decrementProps, className: className, style: style, autoFocus: autoFocus, isQuiet: isQuiet, isDisabled: isDisabled, hideStepper: hideStepper, validationState: validationState, name: name, state: state } = props;
    let showStepper = !hideStepper;
    return /*#__PURE__*/ (0, $5I0aR$react).createElement((0, $5I0aR$FocusRing), {
        within: true,
        isTextInput: true,
        focusClass: (0, $5I0aR$classNames)((0, ($parcel$interopDefault($5I0aR$stepper_vars_cssmodulejs))), 'is-focused'),
        focusRingClass: (0, $5I0aR$classNames)((0, ($parcel$interopDefault($5I0aR$stepper_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $5I0aR$react).createElement("div", {
        ...groupProps,
        ref: ref,
        style: style,
        className: className
    }, /*#__PURE__*/ (0, $5I0aR$react).createElement((0, $5I0aR$TextFieldBase), {
        UNSAFE_className: (0, $5I0aR$classNames)((0, ($parcel$interopDefault($5I0aR$stepper_vars_cssmodulejs))), 'spectrum-Stepper-field'),
        inputClassName: (0, $5I0aR$classNames)((0, ($parcel$interopDefault($5I0aR$stepper_vars_cssmodulejs))), 'spectrum-Stepper-input'),
        validationIconClassName: (0, $5I0aR$classNames)((0, ($parcel$interopDefault($5I0aR$stepper_vars_cssmodulejs))), 'spectrum-Stepper-icon'),
        isQuiet: isQuiet,
        inputRef: inputRef,
        validationState: validationState,
        inputProps: inputProps,
        isDisabled: isDisabled,
        disableFocusRing: true
    }), showStepper && /*#__PURE__*/ (0, $5I0aR$react).createElement((0, $5I0aR$react).Fragment, null, /*#__PURE__*/ (0, $5I0aR$react).createElement((0, $7f00b388e0d3b2f6$export$b2f6b60c1d32d6aa), {
        direction: "up",
        isQuiet: isQuiet,
        ...incrementProps
    }), /*#__PURE__*/ (0, $5I0aR$react).createElement((0, $7f00b388e0d3b2f6$export$b2f6b60c1d32d6aa), {
        direction: "down",
        isQuiet: isQuiet,
        ...decrementProps
    })), name && /*#__PURE__*/ (0, $5I0aR$react).createElement("input", {
        type: "hidden",
        name: name,
        value: isNaN(state.numberValue) ? '' : state.numberValue
    })));
});


export {$48b879bdd771eb85$export$63c5fa0b2fdccd2e as NumberField};
//# sourceMappingURL=NumberField.module.js.map
