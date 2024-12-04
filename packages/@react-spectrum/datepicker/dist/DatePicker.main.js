var $bd22dc8dad9522bc$exports = require("./DatePickerField.main.js");
require("./styles.d49f4d83.css");
var $91c3db8c6a21ca71$exports = require("./styles_css.main.js");
var $c3ebc4931d9b9977$exports = require("./Input.main.js");
var $0045b32a117743a7$exports = require("./intlStrings.main.js");
require("./vars.ba84240a.css");
require("./textfield_vars_css.main.js");
require("./vars.cf48e391.css");
var $2f86633ce5b04f1e$exports = require("./inputgroup_vars_css.main.js");
var $740ff83729a8f317$exports = require("./TimeField.main.js");
var $4d2e419f522adb48$exports = require("./utils.main.js");
var $2ni54$reactspectrumcalendar = require("@react-spectrum/calendar");
var $2ni54$spectrumiconsworkflowCalendar = require("@spectrum-icons/workflow/Calendar");
var $2ni54$reactspectrumutils = require("@react-spectrum/utils");
var $2ni54$reactspectrumview = require("@react-spectrum/view");
var $2ni54$reactspectrumdialog = require("@react-spectrum/dialog");
var $2ni54$reactspectrumlabel = require("@react-spectrum/label");
var $2ni54$reactspectrumbutton = require("@react-spectrum/button");
var $2ni54$reactariautils = require("@react-aria/utils");
var $2ni54$react = require("react");
var $2ni54$reactariadatepicker = require("@react-aria/datepicker");
var $2ni54$reactstatelydatepicker = require("@react-stately/datepicker");
var $2ni54$reactariafocus = require("@react-aria/focus");
var $2ni54$reactspectrumform = require("@react-spectrum/form");
var $2ni54$reactariainteractions = require("@react-aria/interactions");
var $2ni54$reactariai18n = require("@react-aria/i18n");
var $2ni54$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DatePicker", () => $5c1ddf85d7c27889$export$5109c6dd95d8fb00);
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























const $5c1ddf85d7c27889$export$5109c6dd95d8fb00 = /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).forwardRef(function DatePicker(props, ref) {
    props = (0, $2ni54$reactspectrumprovider.useProviderProps)(props);
    props = (0, $2ni54$reactspectrumform.useFormProps)(props);
    let { autoFocus: autoFocus, isQuiet: isQuiet, isDisabled: isDisabled, placeholderValue: placeholderValue, maxVisibleMonths: maxVisibleMonths = 1, pageBehavior: pageBehavior } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $2ni54$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let targetRef = (0, $2ni54$react.useRef)(null);
    let state = (0, $2ni54$reactstatelydatepicker.useDatePickerState)({
        ...props,
        shouldCloseOnSelect: ()=>!state.hasTime
    });
    let { groupProps: groupProps, labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, buttonProps: buttonProps, dialogProps: dialogProps, calendarProps: calendarProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $2ni54$reactariadatepicker.useDatePicker)(props, state, targetRef);
    let { isOpen: isOpen, setOpen: setOpen } = state;
    let { direction: direction } = (0, $2ni54$reactariai18n.useLocale)();
    let domRef = (0, $4d2e419f522adb48$exports.useFocusManagerRef)(ref);
    let stringFormatter = (0, $2ni54$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($0045b32a117743a7$exports))), '@react-spectrum/datepicker');
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $2ni54$reactariafocus.useFocusRing)({
        within: true,
        isTextInput: true,
        autoFocus: autoFocus
    });
    let { isFocused: isFocusedButton, focusProps: focusPropsButton } = (0, $2ni54$reactariafocus.useFocusRing)({
        within: false,
        isTextInput: false,
        autoFocus: autoFocus
    });
    let className = (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup', {
        'spectrum-InputGroup--quiet': isQuiet,
        'spectrum-InputGroup--invalid': isInvalid && !isDisabled,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'focus-ring': isFocusVisible && !isFocusedButton
    });
    let fieldClassName = (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input', {
        'is-disabled': isDisabled,
        'is-invalid': isInvalid && !isDisabled
    });
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = (0, $4d2e419f522adb48$exports.useFormatHelpText)(props);
    if (description && !props.description) descriptionProps.id = undefined;
    let placeholder = placeholderValue;
    let timePlaceholder = placeholder && 'hour' in placeholder ? placeholder : null;
    let timeMinValue = props.minValue && 'hour' in props.minValue ? props.minValue : null;
    let timeMaxValue = props.maxValue && 'hour' in props.maxValue ? props.maxValue : null;
    let timeGranularity = state.granularity === 'hour' || state.granularity === 'minute' || state.granularity === 'second' ? state.granularity : null;
    let showTimeField = !!timeGranularity;
    let visibleMonths = (0, $4d2e419f522adb48$exports.useVisibleMonths)(maxVisibleMonths);
    let validationState = state.validationState || (isInvalid ? 'invalid' : null);
    let approximateWidth = (0, $4d2e419f522adb48$exports.useFormattedDateWidth)(state) + 'ch';
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $2ni54$reactspectrumlabel.Field), {
        ...props,
        ref: domRef,
        elementType: "span",
        description: description,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: validationState,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        wrapperClassName: (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement("div", {
        ...(0, $2ni54$reactariautils.mergeProps)(groupProps, hoverProps, focusProps),
        className: className,
        ref: targetRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $c3ebc4931d9b9977$exports.Input), {
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        className: (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-field'),
        inputClassName: fieldClassName,
        disableFocusRing: true,
        minWidth: approximateWidth
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $bd22dc8dad9522bc$exports.DatePickerField), {
        ...fieldProps,
        "data-testid": "date-field",
        isQuiet: isQuiet
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $2ni54$reactspectrumdialog.DialogTrigger), {
        type: "popover",
        mobileType: "tray",
        placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
        targetRef: targetRef,
        hideArrow: true,
        isOpen: isOpen,
        onOpenChange: setOpen,
        shouldFlip: props.shouldFlip
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $2ni54$reactspectrumbutton.FieldButton), {
        ...(0, $2ni54$reactariautils.mergeProps)(buttonProps, focusPropsButton),
        UNSAFE_className: (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: validationState
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, ($parcel$interopDefault($2ni54$spectrumiconsworkflowCalendar))), null)), /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $2ni54$reactspectrumdialog.Dialog), {
        UNSAFE_className: (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-dialog'),
        ...dialogProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $2ni54$reactspectrumview.Content), null, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement("div", {
        className: (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-dialogContent')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $2ni54$reactspectrumcalendar.Calendar), {
        ...calendarProps,
        visibleMonths: visibleMonths,
        pageBehavior: pageBehavior,
        UNSAFE_className: (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-calendar', {
            'is-invalid': isInvalid
        })
    }), showTimeField && /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement("div", {
        className: (0, $2ni54$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-timeFields')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2ni54$react))).createElement((0, $740ff83729a8f317$exports.TimeField), {
        label: stringFormatter.format('time'),
        value: state.timeValue,
        onChange: state.setTimeValue,
        placeholderValue: timePlaceholder,
        granularity: timeGranularity,
        minValue: timeMinValue,
        maxValue: timeMaxValue,
        hourCycle: props.hourCycle,
        hideTimeZone: props.hideTimeZone,
        marginTop: "size-100"
    }))))))));
});


//# sourceMappingURL=DatePicker.main.js.map
