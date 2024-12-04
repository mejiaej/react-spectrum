import {DatePickerField as $d2bb88c82604b25f$export$34dc4cfa15ead1} from "./DatePickerField.module.js";
import "./styles.d49f4d83.css";
import $8czI1$styles_cssmodulejs from "./styles_css.module.js";
import {Input as $79348162c55d687f$export$f5b8910cec6cf069} from "./Input.module.js";
import $8czI1$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.ba84240a.css";
import "./textfield_vars_css.module.js";
import "./vars.cf48e391.css";
import $8czI1$inputgroup_vars_cssmodulejs from "./inputgroup_vars_css.module.js";
import {TimeField as $f0a04554754386b6$export$5eaee2322dd727eb} from "./TimeField.module.js";
import {useFocusManagerRef as $04e96200274b03de$export$71a23a36270e4bf0, useFormatHelpText as $04e96200274b03de$export$322f4580ccd8dde6, useFormattedDateWidth as $04e96200274b03de$export$31e22e3c931fc056, useVisibleMonths as $04e96200274b03de$export$12ce2869ce471b1f} from "./utils.module.js";
import {Calendar as $8czI1$Calendar} from "@react-spectrum/calendar";
import $8czI1$spectrumiconsworkflowCalendar from "@spectrum-icons/workflow/Calendar";
import {classNames as $8czI1$classNames} from "@react-spectrum/utils";
import {Content as $8czI1$Content} from "@react-spectrum/view";
import {DialogTrigger as $8czI1$DialogTrigger, Dialog as $8czI1$Dialog} from "@react-spectrum/dialog";
import {Field as $8czI1$Field} from "@react-spectrum/label";
import {FieldButton as $8czI1$FieldButton} from "@react-spectrum/button";
import {mergeProps as $8czI1$mergeProps} from "@react-aria/utils";
import $8czI1$react, {useRef as $8czI1$useRef} from "react";
import {useDatePicker as $8czI1$useDatePicker} from "@react-aria/datepicker";
import {useDatePickerState as $8czI1$useDatePickerState} from "@react-stately/datepicker";
import {useFocusRing as $8czI1$useFocusRing} from "@react-aria/focus";
import {useFormProps as $8czI1$useFormProps} from "@react-spectrum/form";
import {useHover as $8czI1$useHover} from "@react-aria/interactions";
import {useLocale as $8czI1$useLocale, useLocalizedStringFormatter as $8czI1$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $8czI1$useProviderProps} from "@react-spectrum/provider";


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























const $beaeefa091999363$export$5109c6dd95d8fb00 = /*#__PURE__*/ (0, $8czI1$react).forwardRef(function DatePicker(props, ref) {
    props = (0, $8czI1$useProviderProps)(props);
    props = (0, $8czI1$useFormProps)(props);
    let { autoFocus: autoFocus, isQuiet: isQuiet, isDisabled: isDisabled, placeholderValue: placeholderValue, maxVisibleMonths: maxVisibleMonths = 1, pageBehavior: pageBehavior } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $8czI1$useHover)({
        isDisabled: isDisabled
    });
    let targetRef = (0, $8czI1$useRef)(null);
    let state = (0, $8czI1$useDatePickerState)({
        ...props,
        shouldCloseOnSelect: ()=>!state.hasTime
    });
    let { groupProps: groupProps, labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, buttonProps: buttonProps, dialogProps: dialogProps, calendarProps: calendarProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $8czI1$useDatePicker)(props, state, targetRef);
    let { isOpen: isOpen, setOpen: setOpen } = state;
    let { direction: direction } = (0, $8czI1$useLocale)();
    let domRef = (0, $04e96200274b03de$export$71a23a36270e4bf0)(ref);
    let stringFormatter = (0, $8czI1$useLocalizedStringFormatter)((0, ($parcel$interopDefault($8czI1$intlStringsmodulejs))), '@react-spectrum/datepicker');
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $8czI1$useFocusRing)({
        within: true,
        isTextInput: true,
        autoFocus: autoFocus
    });
    let { isFocused: isFocusedButton, focusProps: focusPropsButton } = (0, $8czI1$useFocusRing)({
        within: false,
        isTextInput: false,
        autoFocus: autoFocus
    });
    let className = (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup', {
        'spectrum-InputGroup--quiet': isQuiet,
        'spectrum-InputGroup--invalid': isInvalid && !isDisabled,
        'is-disabled': isDisabled,
        'is-hovered': isHovered,
        'is-focused': isFocused,
        'focus-ring': isFocusVisible && !isFocusedButton
    });
    let fieldClassName = (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input', {
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
    let approximateWidth = (0, $04e96200274b03de$export$31e22e3c931fc056)(state) + 'ch';
    return /*#__PURE__*/ (0, $8czI1$react).createElement((0, $8czI1$Field), {
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
        wrapperClassName: (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$styles_cssmodulejs))), 'react-spectrum-Datepicker-fieldWrapper')
    }, /*#__PURE__*/ (0, $8czI1$react).createElement("div", {
        ...(0, $8czI1$mergeProps)(groupProps, hoverProps, focusProps),
        className: className,
        ref: targetRef
    }, /*#__PURE__*/ (0, $8czI1$react).createElement((0, $79348162c55d687f$export$f5b8910cec6cf069), {
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        className: (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-field'),
        inputClassName: fieldClassName,
        disableFocusRing: true,
        minWidth: approximateWidth
    }, /*#__PURE__*/ (0, $8czI1$react).createElement((0, $d2bb88c82604b25f$export$34dc4cfa15ead1), {
        ...fieldProps,
        "data-testid": "date-field",
        isQuiet: isQuiet
    })), /*#__PURE__*/ (0, $8czI1$react).createElement((0, $8czI1$DialogTrigger), {
        type: "popover",
        mobileType: "tray",
        placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
        targetRef: targetRef,
        hideArrow: true,
        isOpen: isOpen,
        onOpenChange: setOpen,
        shouldFlip: props.shouldFlip
    }, /*#__PURE__*/ (0, $8czI1$react).createElement((0, $8czI1$FieldButton), {
        ...(0, $8czI1$mergeProps)(buttonProps, focusPropsButton),
        UNSAFE_className: (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$inputgroup_vars_cssmodulejs))), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: validationState
    }, /*#__PURE__*/ (0, $8czI1$react).createElement((0, $8czI1$spectrumiconsworkflowCalendar), null)), /*#__PURE__*/ (0, $8czI1$react).createElement((0, $8czI1$Dialog), {
        UNSAFE_className: (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$styles_cssmodulejs))), 'react-spectrum-Datepicker-dialog'),
        ...dialogProps
    }, /*#__PURE__*/ (0, $8czI1$react).createElement((0, $8czI1$Content), null, /*#__PURE__*/ (0, $8czI1$react).createElement("div", {
        className: (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$styles_cssmodulejs))), 'react-spectrum-Datepicker-dialogContent')
    }, /*#__PURE__*/ (0, $8czI1$react).createElement((0, $8czI1$Calendar), {
        ...calendarProps,
        visibleMonths: visibleMonths,
        pageBehavior: pageBehavior,
        UNSAFE_className: (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$styles_cssmodulejs))), 'react-spectrum-Datepicker-calendar', {
            'is-invalid': isInvalid
        })
    }), showTimeField && /*#__PURE__*/ (0, $8czI1$react).createElement("div", {
        className: (0, $8czI1$classNames)((0, ($parcel$interopDefault($8czI1$styles_cssmodulejs))), 'react-spectrum-Datepicker-timeFields')
    }, /*#__PURE__*/ (0, $8czI1$react).createElement((0, $f0a04554754386b6$export$5eaee2322dd727eb), {
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


export {$beaeefa091999363$export$5109c6dd95d8fb00 as DatePicker};
//# sourceMappingURL=DatePicker.module.js.map
