import "./vars.9afd4902.css";
import $kYtTO$search_vars_cssmodulejs from "./search_vars_css.mjs";
import {useSlotProps as $kYtTO$useSlotProps, classNames as $kYtTO$classNames} from "@react-spectrum/utils";
import {ClearButton as $kYtTO$ClearButton} from "@react-spectrum/button";
import $kYtTO$spectrumiconsuiMagnifier from "@spectrum-icons/ui/Magnifier";
import $kYtTO$react, {forwardRef as $kYtTO$forwardRef, useRef as $kYtTO$useRef} from "react";
import {TextFieldBase as $kYtTO$TextFieldBase} from "@react-spectrum/textfield";
import {useFormProps as $kYtTO$useFormProps} from "@react-spectrum/form";
import {useProviderProps as $kYtTO$useProviderProps} from "@react-spectrum/provider";
import {useSearchField as $kYtTO$useSearchField} from "@react-aria/searchfield";
import {useSearchFieldState as $kYtTO$useSearchFieldState} from "@react-stately/searchfield";


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









const $a6a4ace9217ce6df$export$b94867ecbd698f21 = /*#__PURE__*/ (0, $kYtTO$forwardRef)(function SearchField(props, ref) {
    props = (0, $kYtTO$useSlotProps)(props, 'searchfield');
    props = (0, $kYtTO$useProviderProps)(props);
    props = (0, $kYtTO$useFormProps)(props);
    let defaultIcon = /*#__PURE__*/ (0, $kYtTO$react).createElement((0, $kYtTO$spectrumiconsuiMagnifier), {
        "data-testid": "searchicon"
    });
    let { icon: icon = defaultIcon, isDisabled: isDisabled, UNSAFE_className: UNSAFE_className, placeholder: placeholder, ...otherProps } = props;
    if (placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/SearchField.html#help-text');
    let state = (0, $kYtTO$useSearchFieldState)(props);
    let inputRef = (0, $kYtTO$useRef)(null);
    let { clearButtonProps: clearButtonProps, ...result } = (0, $kYtTO$useSearchField)(props, state, inputRef);
    let clearButton = /*#__PURE__*/ (0, $kYtTO$react).createElement((0, $kYtTO$ClearButton), {
        ...clearButtonProps,
        preventFocus: true,
        UNSAFE_className: (0, $kYtTO$classNames)((0, ($parcel$interopDefault($kYtTO$search_vars_cssmodulejs))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let validationState = props.validationState || (result.isInvalid ? 'invalid' : undefined);
    return /*#__PURE__*/ (0, $kYtTO$react).createElement((0, $kYtTO$TextFieldBase), {
        ...otherProps,
        ...result,
        validationState: validationState,
        UNSAFE_className: (0, $kYtTO$classNames)((0, ($parcel$interopDefault($kYtTO$search_vars_cssmodulejs))), 'spectrum-Search', 'spectrum-Textfield', {
            'is-disabled': isDisabled,
            'is-quiet': props.isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }, UNSAFE_className),
        inputClassName: (0, $kYtTO$classNames)((0, ($parcel$interopDefault($kYtTO$search_vars_cssmodulejs))), 'spectrum-Search-input'),
        ref: ref,
        inputRef: inputRef,
        isDisabled: isDisabled,
        icon: icon,
        wrapperChildren: state.value !== '' && !props.isReadOnly ? clearButton : undefined
    });
});


export {$a6a4ace9217ce6df$export$b94867ecbd698f21 as SearchField};
//# sourceMappingURL=SearchField.module.js.map
