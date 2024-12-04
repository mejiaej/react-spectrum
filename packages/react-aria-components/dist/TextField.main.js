var $c5ccf687772c0422$exports = require("./utils.main.js");
var $846a838139f2ac6b$exports = require("./FieldError.main.js");
var $35157657e549736b$exports = require("./Form.main.js");
var $1bcfcef5af644e13$exports = require("./Input.main.js");
var $84ae0bf5bd8e2a5f$exports = require("./Label.main.js");
var $a5d2423f42834231$exports = require("./TextArea.main.js");
var $a8a589c28affdc40$exports = require("./Text.main.js");
var $1Ma1u$reactaria = require("react-aria");
var $1Ma1u$reactariautils = require("@react-aria/utils");
var $1Ma1u$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TextFieldContext", () => $3f2c5af9d7d8905b$export$2129e27b3ef0d483);
$parcel$export(module.exports, "TextField", () => $3f2c5af9d7d8905b$export$2c73285ae9390cec);
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









const $3f2c5af9d7d8905b$export$2129e27b3ef0d483 = /*#__PURE__*/ (0, $1Ma1u$react.createContext)(null);
const $3f2c5af9d7d8905b$export$2c73285ae9390cec = /*#__PURE__*/ (0, $1Ma1u$react.forwardRef)(function TextField(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $3f2c5af9d7d8905b$export$2129e27b3ef0d483);
    let { validationBehavior: formValidationBehavior } = (0, $c5ccf687772c0422$exports.useSlottedContext)((0, $35157657e549736b$exports.FormContext)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let inputRef = (0, $1Ma1u$react.useRef)(null);
    let [labelRef, label] = (0, $c5ccf687772c0422$exports.useSlot)();
    let [inputElementType, setInputElementType] = (0, $1Ma1u$react.useState)('input');
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $1Ma1u$reactaria.useTextField)({
        ...(0, $c5ccf687772c0422$exports.removeDataAttributes)(props),
        inputElementType: inputElementType,
        label: label,
        validationBehavior: validationBehavior
    }, inputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (0, $1Ma1u$react.useCallback)((el)=>{
        inputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, []);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-TextField'
    });
    let DOMProps = (0, $1Ma1u$reactariautils.filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1Ma1u$react))).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1Ma1u$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                (0, $84ae0bf5bd8e2a5f$exports.LabelContext),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, $1bcfcef5af644e13$exports.InputContext),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, $a5d2423f42834231$exports.TextAreaContext),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, $a8a589c28affdc40$exports.TextContext),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, $846a838139f2ac6b$exports.FieldErrorContext),
                validation
            ]
        ]
    }, renderProps.children));
});


//# sourceMappingURL=TextField.main.js.map
