import {ButtonContext as $d2b4bc8c273e7be6$export$24d547caef80ccd1} from "./Button.module.js";
import {Provider as $64fa3d84918910a7$export$2881499e37b75b9a, removeDataAttributes as $64fa3d84918910a7$export$ef03459518577ad4, useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3, useSlot as $64fa3d84918910a7$export$9d4c57ee4c6ffdd8, useSlottedContext as $64fa3d84918910a7$export$fabf2dc03a41866e} from "./utils.module.js";
import {FieldErrorContext as $ee014567cb39d3f0$export$ff05c3ac10437e03} from "./FieldError.module.js";
import {FormContext as $d3e0e05bdfcf66bd$export$c24727297075ec6a} from "./Form.module.js";
import {GroupContext as $a049562f99e7db0e$export$f9c6924e160136d1} from "./Group.module.js";
import {InputContext as $3985021b0ad6602f$export$37fb8590cf2c088c} from "./Input.module.js";
import {LabelContext as $01b77f81d0f07f68$export$75b6ee27786ba447} from "./Label.module.js";
import {TextContext as $514c0188e459b4c0$export$9afb8bc826b033ea} from "./Text.module.js";
import {useSearchField as $8iEQ9$useSearchField} from "react-aria";
import {filterDOMProps as $8iEQ9$filterDOMProps} from "@react-aria/utils";
import $8iEQ9$react, {createContext as $8iEQ9$createContext, forwardRef as $8iEQ9$forwardRef, useRef as $8iEQ9$useRef} from "react";
import {useSearchFieldState as $8iEQ9$useSearchFieldState} from "react-stately";

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 











const $440f4836bcb56932$export$d1c4e4c63cb03a11 = /*#__PURE__*/ (0, $8iEQ9$createContext)(null);
const $440f4836bcb56932$export$b94867ecbd698f21 = /*#__PURE__*/ (0, $8iEQ9$forwardRef)(function SearchField(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $440f4836bcb56932$export$d1c4e4c63cb03a11);
    let { validationBehavior: formValidationBehavior } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)((0, $d3e0e05bdfcf66bd$export$c24727297075ec6a)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let inputRef = (0, $8iEQ9$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let state = (0, $8iEQ9$useSearchFieldState)({
        ...props,
        validationBehavior: validationBehavior
    });
    let { labelProps: labelProps, inputProps: inputProps, clearButtonProps: clearButtonProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $8iEQ9$useSearchField)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label,
        validationBehavior: validationBehavior
    }, state, inputRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isEmpty: state.value === '',
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            state: state
        },
        defaultClassName: 'react-aria-SearchField'
    });
    let DOMProps = (0, $8iEQ9$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $8iEQ9$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-empty": state.value === '' || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined
    }, /*#__PURE__*/ (0, $8iEQ9$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, $3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                clearButtonProps
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, $a049562f99e7db0e$export$f9c6924e160136d1),
                {
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, $ee014567cb39d3f0$export$ff05c3ac10437e03),
                validation
            ]
        ]
    }, renderProps.children));
});


export {$440f4836bcb56932$export$d1c4e4c63cb03a11 as SearchFieldContext, $440f4836bcb56932$export$b94867ecbd698f21 as SearchField};
//# sourceMappingURL=SearchField.module.js.map
