var $2f3cded204daae76$exports = require("./StepButton.main.js");
require("./vars.8d25eb32.css");
var $3649bcbba015c4d7$exports = require("./stepper_vars_css.main.js");
var $3d7oE$reactspectrumutils = require("@react-spectrum/utils");
var $3d7oE$reactspectrumlabel = require("@react-spectrum/label");
var $3d7oE$reactariafocus = require("@react-aria/focus");
var $3d7oE$reactariautils = require("@react-aria/utils");
var $3d7oE$reactstatelynumberfield = require("@react-stately/numberfield");
var $3d7oE$react = require("react");
var $3d7oE$reactspectrumtextfield = require("@react-spectrum/textfield");
var $3d7oE$reactspectrumform = require("@react-spectrum/form");
var $3d7oE$reactariainteractions = require("@react-aria/interactions");
var $3d7oE$reactariai18n = require("@react-aria/i18n");
var $3d7oE$reactarianumberfield = require("@react-aria/numberfield");
var $3d7oE$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "NumberField", () => $9b3df9c012d62e52$export$63c5fa0b2fdccd2e);
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













const $9b3df9c012d62e52$export$63c5fa0b2fdccd2e = /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).forwardRef(function NumberField(props, ref) {
    props = (0, $3d7oE$reactspectrumprovider.useProviderProps)(props);
    props = (0, $3d7oE$reactspectrumform.useFormProps)(props);
    let provider = (0, $3d7oE$reactspectrumprovider.useProvider)();
    let { isQuiet: isQuiet, isReadOnly: isReadOnly, isDisabled: isDisabled, hideStepper: hideStepper } = props;
    let { styleProps: style } = (0, $3d7oE$reactspectrumutils.useStyleProps)(props);
    let { locale: locale } = (0, $3d7oE$reactariai18n.useLocale)();
    let state = (0, $3d7oE$reactstatelynumberfield.useNumberFieldState)({
        ...props,
        locale: locale
    });
    let inputRef = (0, $3d7oE$react.useRef)(null);
    let domRef = (0, $3d7oE$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let { groupProps: groupProps, labelProps: labelProps, inputProps: inputProps, incrementButtonProps: incrementButtonProps, decrementButtonProps: decrementButtonProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $3d7oE$reactarianumberfield.useNumberField)(props, state, inputRef);
    let isMobile = provider.scale === 'large';
    let showStepper = !hideStepper;
    let { isHovered: isHovered, hoverProps: hoverProps } = (0, $3d7oE$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let validationState = props.validationState || (isInvalid ? 'invalid' : undefined);
    let className = (0, $3d7oE$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper', // because FocusRing won't pass along the className from Field, we have to handle that ourselves
    !props.label && style.className ? style.className : '', {
        'spectrum-Stepper--isQuiet': isQuiet,
        'is-disabled': isDisabled,
        'spectrum-Stepper--readonly': isReadOnly,
        'is-invalid': validationState === 'invalid' && !isDisabled,
        'spectrum-Stepper--showStepper': showStepper,
        'spectrum-Stepper--isMobile': isMobile,
        'is-hovered': isHovered
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement((0, $3d7oE$reactspectrumlabel.Field), {
        ...props,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        labelProps: labelProps,
        ref: domRef,
        wrapperClassName: (0, $3d7oE$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-container', {
            'spectrum-Stepper-container--isMobile': isMobile
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement($9b3df9c012d62e52$var$NumberFieldInput, {
        ...props,
        groupProps: (0, $3d7oE$reactariautils.mergeProps)(groupProps, hoverProps),
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
const $9b3df9c012d62e52$var$NumberFieldInput = /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).forwardRef(function NumberFieldInput(props, ref) {
    let { groupProps: groupProps, inputProps: inputProps, inputRef: inputRef, incrementProps: incrementProps, decrementProps: decrementProps, className: className, style: style, autoFocus: autoFocus, isQuiet: isQuiet, isDisabled: isDisabled, hideStepper: hideStepper, validationState: validationState, name: name, state: state } = props;
    let showStepper = !hideStepper;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement((0, $3d7oE$reactariafocus.FocusRing), {
        within: true,
        isTextInput: true,
        focusClass: (0, $3d7oE$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'is-focused'),
        focusRingClass: (0, $3d7oE$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement("div", {
        ...groupProps,
        ref: ref,
        style: style,
        className: className
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement((0, $3d7oE$reactspectrumtextfield.TextFieldBase), {
        UNSAFE_className: (0, $3d7oE$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-field'),
        inputClassName: (0, $3d7oE$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-input'),
        validationIconClassName: (0, $3d7oE$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3649bcbba015c4d7$exports))), 'spectrum-Stepper-icon'),
        isQuiet: isQuiet,
        inputRef: inputRef,
        validationState: validationState,
        inputProps: inputProps,
        isDisabled: isDisabled,
        disableFocusRing: true
    }), showStepper && /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement((0, ($parcel$interopDefault($3d7oE$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement((0, $2f3cded204daae76$exports.StepButton), {
        direction: "up",
        isQuiet: isQuiet,
        ...incrementProps
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement((0, $2f3cded204daae76$exports.StepButton), {
        direction: "down",
        isQuiet: isQuiet,
        ...decrementProps
    })), name && /*#__PURE__*/ (0, ($parcel$interopDefault($3d7oE$react))).createElement("input", {
        type: "hidden",
        name: name,
        value: isNaN(state.numberValue) ? '' : state.numberValue
    })));
});


//# sourceMappingURL=NumberField.main.js.map
