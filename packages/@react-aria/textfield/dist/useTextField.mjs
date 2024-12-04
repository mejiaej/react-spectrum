import {useEffect as $ig234$useEffect} from "react";
import {filterDOMProps as $ig234$filterDOMProps, useFormReset as $ig234$useFormReset, getOwnerWindow as $ig234$getOwnerWindow, mergeProps as $ig234$mergeProps} from "@react-aria/utils";
import {useControlledState as $ig234$useControlledState} from "@react-stately/utils";
import {useField as $ig234$useField} from "@react-aria/label";
import {useFocusable as $ig234$useFocusable} from "@react-aria/focus";
import {useFormValidation as $ig234$useFormValidation} from "@react-aria/form";
import {useFormValidationState as $ig234$useFormValidationState} from "@react-stately/form";

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






function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, $ig234$useControlledState)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, $ig234$useFocusable)(props, ref);
    let validationState = (0, $ig234$useFormValidationState)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $ig234$useField)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, $ig234$filterDOMProps)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    (0, $ig234$useFormReset)(ref, value, setValue);
    (0, $ig234$useFormValidation)(props, validationState, ref);
    (0, $ig234$useEffect)(()=>{
        // This works around a React/Chrome bug that prevents textarea elements from validating when controlled.
        // We prevent React from updating defaultValue (i.e. children) of textarea when `value` changes,
        // which causes Chrome to skip validation. Only updating `value` is ok in our case since our
        // textareas are always controlled. React is planning on removing this synchronization in a
        // future major version.
        // https://github.com/facebook/react/issues/19474
        // https://github.com/facebook/react/issues/11896
        if (ref.current instanceof (0, $ig234$getOwnerWindow)(ref.current).HTMLTextAreaElement) {
            let input = ref.current;
            Object.defineProperty(input, 'defaultValue', {
                get: ()=>input.value,
                set: ()=>{},
                configurable: true
            });
        }
    }, [
        ref
    ]);
    return {
        labelProps: labelProps,
        inputProps: (0, $ig234$mergeProps)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            value: value,
            onChange: (e)=>setValue(e.target.value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}


export {$2d73ec29415bd339$export$712718f7aec83d5 as useTextField};
//# sourceMappingURL=useTextField.module.js.map
