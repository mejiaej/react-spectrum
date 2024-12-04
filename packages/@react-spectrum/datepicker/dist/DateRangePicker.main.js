var $bd22dc8dad9522bc$exports = require("./DatePickerField.main.js");
require("./styles.d49f4d83.css");
var $91c3db8c6a21ca71$exports = require("./styles_css.main.js");
var $c3ebc4931d9b9977$exports = require("./Input.main.js");
var $0045b32a117743a7$exports = require("./intlStrings.main.js");
require("./vars.cf48e391.css");
var $2f86633ce5b04f1e$exports = require("./inputgroup_vars_css.main.js");
var $740ff83729a8f317$exports = require("./TimeField.main.js");
var $4d2e419f522adb48$exports = require("./utils.main.js");
var $56Vum$spectrumiconsworkflowCalendar = require("@spectrum-icons/workflow/Calendar");
var $56Vum$reactspectrumutils = require("@react-spectrum/utils");
var $56Vum$reactspectrumview = require("@react-spectrum/view");
var $56Vum$reactspectrumdialog = require("@react-spectrum/dialog");
var $56Vum$reactspectrumlabel = require("@react-spectrum/label");
var $56Vum$reactspectrumbutton = require("@react-spectrum/button");
var $56Vum$reactspectrumlayout = require("@react-spectrum/layout");
var $56Vum$reactariautils = require("@react-aria/utils");
var $56Vum$reactspectrumcalendar = require("@react-spectrum/calendar");
var $56Vum$react = require("react");
var $56Vum$reactariadatepicker = require("@react-aria/datepicker");
var $56Vum$reactstatelydatepicker = require("@react-stately/datepicker");
var $56Vum$reactariafocus = require("@react-aria/focus");
var $56Vum$reactspectrumform = require("@react-spectrum/form");
var $56Vum$reactariainteractions = require("@react-aria/interactions");
var $56Vum$reactariai18n = require("@react-aria/i18n");
var $56Vum$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DateRangePicker", () => $16cafb71dac155a4$export$17334619f3ac2224);
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























const $16cafb71dac155a4$export$17334619f3ac2224 = /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).forwardRef(function DateRangePicker(props, ref) {
    var _state_timeRange, _state_timeRange1;
    props = (0, $56Vum$reactspectrumprovider.useProviderProps)(props);
    props = (0, $56Vum$reactspectrumform.useFormProps)(props);
    let { isQuiet: isQuiet, isDisabled: isDisabled, autoFocus: autoFocus, placeholderValue: placeholderValue, maxVisibleMonths: maxVisibleMonths = 1, pageBehavior: pageBehavior } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $56Vum$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let targetRef = (0, $56Vum$react.useRef)(null);
    let state = (0, $56Vum$reactstatelydatepicker.useDateRangePickerState)({
        ...props,
        shouldCloseOnSelect: ()=>!state.hasTime
    });
    let { labelProps: labelProps, groupProps: groupProps, buttonProps: buttonProps, dialogProps: dialogProps, startFieldProps: startFieldProps, endFieldProps: endFieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, calendarProps: calendarProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $56Vum$reactariadatepicker.useDateRangePicker)(props, state, targetRef);
    let { isOpen: isOpen, setOpen: setOpen } = state;
    let { direction: direction } = (0, $56Vum$reactariai18n.useLocale)();
    let domRef = (0, $4d2e419f522adb48$exports.useFocusManagerRef)(ref);
    let stringFormatter = (0, $56Vum$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($0045b32a117743a7$exports))), '@react-spectrum/datepicker');
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $56Vum$reactariafocus.useFocusRing)({
        within: true,
        isTextInput: true,
        autoFocus: autoFocus
    });
    let { isFocused: isFocusedButton, focusProps: focusPropsButton } = (0, $56Vum$reactariafocus.useFocusRing)({
        within: false,
        isTextInput: false,
        autoFocus: autoFocus
    });
    let className = (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup', {
        'spectrum-InputGroup--quiet': isQuiet,
        'spectrum-InputGroup--invalid': isInvalid && !isDisabled,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'focus-ring': isFocusVisible && !isFocusedButton
    });
    let fieldClassName = (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input', {
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
    // Multiplying by two for the two dates, adding one character for the dash, and then the padding around the dash
    let approximateWidth = `calc(${(0, $4d2e419f522adb48$exports.useFormattedDateWidth)(state) * 2 + 1}ch + 2 * var(--spectrum-global-dimension-size-100))`;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $56Vum$reactspectrumlabel.Field), {
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
        wrapperClassName: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement("div", {
        ...(0, $56Vum$reactariautils.mergeProps)(groupProps, hoverProps, focusProps),
        className: className,
        ref: targetRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $c3ebc4931d9b9977$exports.Input), {
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        className: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-field'),
        inputClassName: fieldClassName,
        disableFocusRing: true,
        minWidth: approximateWidth
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $bd22dc8dad9522bc$exports.DatePickerField), {
        ...startFieldProps,
        "data-testid": "start-date",
        isQuiet: props.isQuiet,
        inputClassName: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-startField')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement($16cafb71dac155a4$var$DateRangeDash, null), /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $bd22dc8dad9522bc$exports.DatePickerField), {
        ...endFieldProps,
        "data-testid": "end-date",
        isQuiet: props.isQuiet,
        inputClassName: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-Datepicker-endField', (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-endField'))
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $56Vum$reactspectrumdialog.DialogTrigger), {
        type: "popover",
        mobileType: "tray",
        placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
        targetRef: targetRef,
        hideArrow: true,
        isOpen: isOpen,
        onOpenChange: setOpen,
        shouldFlip: props.shouldFlip
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $56Vum$reactspectrumbutton.FieldButton), {
        ...(0, $56Vum$reactariautils.mergeProps)(buttonProps, focusPropsButton),
        UNSAFE_className: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: validationState
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, ($parcel$interopDefault($56Vum$spectrumiconsworkflowCalendar))), null)), /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $56Vum$reactspectrumdialog.Dialog), {
        UNSAFE_className: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-dialog'),
        ...dialogProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $56Vum$reactspectrumview.Content), null, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement("div", {
        className: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-dialogContent')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $56Vum$reactspectrumcalendar.RangeCalendar), {
        ...calendarProps,
        visibleMonths: visibleMonths,
        pageBehavior: pageBehavior,
        UNSAFE_className: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-calendar', {
            'is-invalid': validationState === 'invalid'
        })
    }), showTimeField && /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $56Vum$reactspectrumlayout.Flex), {
        gap: "size-100",
        marginTop: "size-100",
        UNSAFE_className: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-timeFields')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $740ff83729a8f317$exports.TimeField), {
        label: stringFormatter.format('startTime'),
        value: ((_state_timeRange = state.timeRange) === null || _state_timeRange === void 0 ? void 0 : _state_timeRange.start) || null,
        onChange: (v)=>state.setTime('start', v),
        placeholderValue: timePlaceholder,
        granularity: timeGranularity,
        minValue: timeMinValue,
        maxValue: timeMaxValue,
        hourCycle: props.hourCycle,
        hideTimeZone: props.hideTimeZone,
        flex: true
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement((0, $740ff83729a8f317$exports.TimeField), {
        label: stringFormatter.format('endTime'),
        value: ((_state_timeRange1 = state.timeRange) === null || _state_timeRange1 === void 0 ? void 0 : _state_timeRange1.end) || null,
        onChange: (v)=>state.setTime('end', v),
        placeholderValue: timePlaceholder,
        granularity: timeGranularity,
        minValue: timeMinValue,
        maxValue: timeMaxValue,
        hourCycle: props.hourCycle,
        hideTimeZone: props.hideTimeZone,
        flex: true
    }))))))));
});
function $16cafb71dac155a4$var$DateRangeDash() {
    return /*#__PURE__*/ (0, ($parcel$interopDefault($56Vum$react))).createElement("div", {
        "aria-hidden": "true",
        "data-testid": "date-range-dash",
        className: (0, $56Vum$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-rangeDash')
    });
}


//# sourceMappingURL=DateRangePicker.main.js.map
