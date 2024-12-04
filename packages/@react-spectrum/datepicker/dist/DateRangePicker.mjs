import {DatePickerField as $d2bb88c82604b25f$export$34dc4cfa15ead1} from "./DatePickerField.mjs";
import "./styles.d49f4d83.css";
import $dUbU7$styles_cssmodulejs from "./styles_css.mjs";
import {Input as $79348162c55d687f$export$f5b8910cec6cf069} from "./Input.mjs";
import $dUbU7$intlStringsmodulejs from "./intlStrings.mjs";
import "./vars.cf48e391.css";
import $dUbU7$inputgroup_vars_cssmodulejs from "./inputgroup_vars_css.mjs";
import {TimeField as $f0a04554754386b6$export$5eaee2322dd727eb} from "./TimeField.mjs";
import {useFocusManagerRef as $04e96200274b03de$export$71a23a36270e4bf0, useFormatHelpText as $04e96200274b03de$export$322f4580ccd8dde6, useFormattedDateWidth as $04e96200274b03de$export$31e22e3c931fc056, useVisibleMonths as $04e96200274b03de$export$12ce2869ce471b1f} from "./utils.mjs";
import $dUbU7$spectrumiconsworkflowCalendar from "@spectrum-icons/workflow/Calendar";
import {classNames as $dUbU7$classNames} from "@react-spectrum/utils";
import {Content as $dUbU7$Content} from "@react-spectrum/view";
import {DialogTrigger as $dUbU7$DialogTrigger, Dialog as $dUbU7$Dialog} from "@react-spectrum/dialog";
import {Field as $dUbU7$Field} from "@react-spectrum/label";
import {FieldButton as $dUbU7$FieldButton} from "@react-spectrum/button";
import {Flex as $dUbU7$Flex} from "@react-spectrum/layout";
import {mergeProps as $dUbU7$mergeProps} from "@react-aria/utils";
import {RangeCalendar as $dUbU7$RangeCalendar} from "@react-spectrum/calendar";
import $dUbU7$react, {useRef as $dUbU7$useRef} from "react";
import {useDateRangePicker as $dUbU7$useDateRangePicker} from "@react-aria/datepicker";
import {useDateRangePickerState as $dUbU7$useDateRangePickerState} from "@react-stately/datepicker";
import {useFocusRing as $dUbU7$useFocusRing} from "@react-aria/focus";
import {useFormProps as $dUbU7$useFormProps} from "@react-spectrum/form";
import {useHover as $dUbU7$useHover} from "@react-aria/interactions";
import {useLocale as $dUbU7$useLocale, useLocalizedStringFormatter as $dUbU7$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $dUbU7$useProviderProps} from "@react-spectrum/provider";


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























const $cb301300011a98f7$export$17334619f3ac2224 = /*#__PURE__*/ (0, $dUbU7$react).forwardRef(function DateRangePicker(props, ref) {
    var _state_timeRange, _state_timeRange1;
    props = (0, $dUbU7$useProviderProps)(props);
    props = (0, $dUbU7$useFormProps)(props);
    let { isQuiet: isQuiet, isDisabled: isDisabled, autoFocus: autoFocus, placeholderValue: placeholderValue, maxVisibleMonths: maxVisibleMonths = 1, pageBehavior: pageBehavior } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dUbU7$useHover)({
        isDisabled: isDisabled
    });
    let targetRef = (0, $dUbU7$useRef)(null);
    let state = (0, $dUbU7$useDateRangePickerState)({
        ...props,
        shouldCloseOnSelect: ()=>!state.hasTime
    });
    let { labelProps: labelProps, groupProps: groupProps, buttonProps: buttonProps, dialogProps: dialogProps, startFieldProps: startFieldProps, endFieldProps: endFieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, calendarProps: calendarProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $dUbU7$useDateRangePicker)(props, state, targetRef);
    let { isOpen: isOpen, setOpen: setOpen } = state;
    let { direction: direction } = (0, $dUbU7$useLocale)();
    let domRef = (0, $04e96200274b03de$export$71a23a36270e4bf0)(ref);
    let stringFormatter = (0, $dUbU7$useLocalizedStringFormatter)((0, ($parcel$interopDefault($dUbU7$intlStringsmodulejs))), '@react-spectrum/datepicker');
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dUbU7$useFocusRing)({
        within: true,
        isTextInput: true,
        autoFocus: autoFocus
    });
    let { isFocused: isFocusedButton, focusProps: focusPropsButton } = (0, $dUbU7$useFocusRing)({
        within: false,
        isTextInput: false,
        autoFocus: autoFocus
    });
    let className = (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup', {
        'spectrum-InputGroup--quiet': isQuiet,
        'spectrum-InputGroup--invalid': isInvalid && !isDisabled,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'focus-ring': isFocusVisible && !isFocusedButton
    });
    let fieldClassName = (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input', {
        'is-disabled': isDisabled,
        'is-invalid': isInvalid && !isDisabled
    });
    // Note: this description is intentionally not passed to useDatePicker.
    // The format help text is unnecessary for screen reader users because each segment already has a label.
    let description = (0, $04e96200274b03de$export$322f4580ccd8dde6)(props);
    if (description && !props.description) descriptionProps.id = undefined;
    let placeholder = placeholderValue;
    let timePlaceholder = placeholder && 'hour' in placeholder ? placeholder : null;
    let timeMinValue = props.minValue && 'hour' in props.minValue ? props.minValue : null;
    let timeMaxValue = props.maxValue && 'hour' in props.maxValue ? props.maxValue : null;
    let timeGranularity = state.granularity === 'hour' || state.granularity === 'minute' || state.granularity === 'second' ? state.granularity : null;
    let showTimeField = !!timeGranularity;
    let visibleMonths = (0, $04e96200274b03de$export$12ce2869ce471b1f)(maxVisibleMonths);
    let validationState = state.validationState || (isInvalid ? 'invalid' : null);
    // Multiplying by two for the two dates, adding one character for the dash, and then the padding around the dash
    let approximateWidth = `calc(${(0, $04e96200274b03de$export$31e22e3c931fc056)(state) * 2 + 1}ch + 2 * var(--spectrum-global-dimension-size-100))`;
    return /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $dUbU7$Field), {
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
        wrapperClassName: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$styles_cssmodulejs))), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ (0, $dUbU7$react).createElement("div", {
        ...(0, $dUbU7$mergeProps)(groupProps, hoverProps, focusProps),
        className: className,
        ref: targetRef
    }, /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $79348162c55d687f$export$f5b8910cec6cf069), {
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        className: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-field'),
        inputClassName: fieldClassName,
        disableFocusRing: true,
        minWidth: approximateWidth
    }, /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $d2bb88c82604b25f$export$34dc4cfa15ead1), {
        ...startFieldProps,
        "data-testid": "start-date",
        isQuiet: props.isQuiet,
        inputClassName: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$styles_cssmodulejs))), 'react-spectrum-Datepicker-startField')
    }), /*#__PURE__*/ (0, $dUbU7$react).createElement($cb301300011a98f7$var$DateRangeDash, null), /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $d2bb88c82604b25f$export$34dc4cfa15ead1), {
        ...endFieldProps,
        "data-testid": "end-date",
        isQuiet: props.isQuiet,
        inputClassName: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$inputgroup_vars_cssmodulejs))), 'spectrum-Datepicker-endField', (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$styles_cssmodulejs))), 'react-spectrum-Datepicker-endField'))
    })), /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $dUbU7$DialogTrigger), {
        type: "popover",
        mobileType: "tray",
        placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
        targetRef: targetRef,
        hideArrow: true,
        isOpen: isOpen,
        onOpenChange: setOpen,
        shouldFlip: props.shouldFlip
    }, /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $dUbU7$FieldButton), {
        ...(0, $dUbU7$mergeProps)(buttonProps, focusPropsButton),
        UNSAFE_className: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$inputgroup_vars_cssmodulejs))), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: validationState
    }, /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $dUbU7$spectrumiconsworkflowCalendar), null)), /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $dUbU7$Dialog), {
        UNSAFE_className: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$styles_cssmodulejs))), 'react-spectrum-Datepicker-dialog'),
        ...dialogProps
    }, /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $dUbU7$Content), null, /*#__PURE__*/ (0, $dUbU7$react).createElement("div", {
        className: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$styles_cssmodulejs))), 'react-spectrum-Datepicker-dialogContent')
    }, /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $dUbU7$RangeCalendar), {
        ...calendarProps,
        visibleMonths: visibleMonths,
        pageBehavior: pageBehavior,
        UNSAFE_className: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$styles_cssmodulejs))), 'react-spectrum-Datepicker-calendar', {
            'is-invalid': validationState === 'invalid'
        })
    }), showTimeField && /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $dUbU7$Flex), {
        gap: "size-100",
        marginTop: "size-100",
        UNSAFE_className: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$styles_cssmodulejs))), 'react-spectrum-Datepicker-timeFields')
    }, /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $f0a04554754386b6$export$5eaee2322dd727eb), {
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
    }), /*#__PURE__*/ (0, $dUbU7$react).createElement((0, $f0a04554754386b6$export$5eaee2322dd727eb), {
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
function $cb301300011a98f7$var$DateRangeDash() {
    return /*#__PURE__*/ (0, $dUbU7$react).createElement("div", {
        "aria-hidden": "true",
        "data-testid": "date-range-dash",
        className: (0, $dUbU7$classNames)((0, ($parcel$interopDefault($dUbU7$styles_cssmodulejs))), 'react-spectrum-Datepicker-rangeDash')
    });
}


export {$cb301300011a98f7$export$17334619f3ac2224 as DateRangePicker};
//# sourceMappingURL=DateRangePicker.module.js.map
