var $b856e6788a7ea5bf$exports = require("./Button.main.js");
var $c5ccf687772c0422$exports = require("./utils.main.js");
var $846a838139f2ac6b$exports = require("./FieldError.main.js");
var $35157657e549736b$exports = require("./Form.main.js");
var $dcae72abc18c0045$exports = require("./Group.main.js");
var $1bcfcef5af644e13$exports = require("./Input.main.js");
var $84ae0bf5bd8e2a5f$exports = require("./Label.main.js");
var $a8a589c28affdc40$exports = require("./Text.main.js");
var $9H0iv$reactaria = require("react-aria");
var $9H0iv$reactariautils = require("@react-aria/utils");
var $9H0iv$react = require("react");
var $9H0iv$reactstately = require("react-stately");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SearchFieldContext", () => $a83c69b310385d53$export$d1c4e4c63cb03a11);
$parcel$export(module.exports, "SearchField", () => $a83c69b310385d53$export$b94867ecbd698f21);
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











const $a83c69b310385d53$export$d1c4e4c63cb03a11 = /*#__PURE__*/ (0, $9H0iv$react.createContext)(null);
const $a83c69b310385d53$export$b94867ecbd698f21 = /*#__PURE__*/ (0, $9H0iv$react.forwardRef)(function SearchField(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $a83c69b310385d53$export$d1c4e4c63cb03a11);
    let { validationBehavior: formValidationBehavior } = (0, $c5ccf687772c0422$exports.useSlottedContext)((0, $35157657e549736b$exports.FormContext)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let inputRef = (0, $9H0iv$react.useRef)(null);
    let [labelRef, label] = (0, $c5ccf687772c0422$exports.useSlot)();
    let state = (0, $9H0iv$reactstately.useSearchFieldState)({
        ...props,
        validationBehavior: validationBehavior
    });
    let { labelProps: labelProps, inputProps: inputProps, clearButtonProps: clearButtonProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $9H0iv$reactaria.useSearchField)({
        ...(0, $c5ccf687772c0422$exports.removeDataAttributes)(props),
        label: label,
        validationBehavior: validationBehavior
    }, state, inputRef);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        values: {
            isEmpty: state.value === '',
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            state: state
        },
        defaultClassName: 'react-aria-SearchField'
    });
    let DOMProps = (0, $9H0iv$reactariautils.filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9H0iv$react))).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-empty": state.value === '' || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($9H0iv$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
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
                    ref: inputRef
                }
            ],
            [
                (0, $b856e6788a7ea5bf$exports.ButtonContext),
                clearButtonProps
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
                (0, $dcae72abc18c0045$exports.GroupContext),
                {
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, $846a838139f2ac6b$exports.FieldErrorContext),
                validation
            ]
        ]
    }, renderProps.children));
});


//# sourceMappingURL=SearchField.main.js.map
