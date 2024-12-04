import $9yRST$intlStringsmodulejs from "./intlStrings.module.js";
import "./searchautocomplete.af2b88b2.css";
import $9yRST$searchautocomplete_cssmodulejs from "./searchautocomplete_css.module.js";
import "./vars.3a478514.css";
import $9yRST$search_vars_cssmodulejs from "./search_vars_css.module.js";
import "./vars.f6fa9f1b.css";
import $9yRST$inputgroup_vars_cssmodulejs from "./inputgroup_vars_css.module.js";
import "./vars.8b5c28ea.css";
import $9yRST$textfield_vars_cssmodulejs from "./textfield_vars_css.module.js";
import $9yRST$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $9yRST$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import {useFocusableRef as $9yRST$useFocusableRef, classNames as $9yRST$classNames} from "@react-spectrum/utils";
import {ClearButton as $9yRST$ClearButton} from "@react-spectrum/button";
import {useComboBoxState as $9yRST$useComboBoxState} from "@react-stately/combobox";
import {useOverlayTrigger as $9yRST$useOverlayTrigger, DismissButton as $9yRST$DismissButton} from "@react-aria/overlays";
import {Field as $9yRST$Field} from "@react-spectrum/label";
import {useFocusRing as $9yRST$useFocusRing, focusSafely as $9yRST$focusSafely, FocusScope as $9yRST$FocusScope} from "@react-aria/focus";
import {useListBoxLayout as $9yRST$useListBoxLayout, ListBoxBase as $9yRST$ListBoxBase} from "@react-spectrum/listbox";
import $9yRST$spectrumiconsuiMagnifier from "@spectrum-icons/ui/Magnifier";
import {useFormReset as $9yRST$useFormReset, mergeProps as $9yRST$mergeProps, useId as $9yRST$useId} from "@react-aria/utils";
import {ProgressCircle as $9yRST$ProgressCircle} from "@react-spectrum/progress";
import $9yRST$react, {useCallback as $9yRST$useCallback, useRef as $9yRST$useRef, useState as $9yRST$useState, useEffect as $9yRST$useEffect} from "react";
import {setInteractionModality as $9yRST$setInteractionModality, useHover as $9yRST$useHover} from "@react-aria/interactions";
import {TextFieldBase as $9yRST$TextFieldBase} from "@react-spectrum/textfield";
import {Tray as $9yRST$Tray} from "@react-spectrum/overlays";
import {useButton as $9yRST$useButton} from "@react-aria/button";
import {useDialog as $9yRST$useDialog} from "@react-aria/dialog";
import {useField as $9yRST$useField} from "@react-aria/label";
import {useFilter as $9yRST$useFilter, useLocalizedStringFormatter as $9yRST$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useFormValidation as $9yRST$useFormValidation} from "@react-aria/form";
import {useProviderProps as $9yRST$useProviderProps} from "@react-spectrum/provider";
import {useSearchAutocomplete as $9yRST$useSearchAutocomplete} from "@react-aria/autocomplete";


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



























function $c940f54e16bafef5$var$ForwardMobileSearchAutocomplete(props, ref) {
    props = (0, $9yRST$useProviderProps)(props);
    let { isQuiet: isQuiet, isDisabled: isDisabled, isRequired: isRequired, validationBehavior: validationBehavior, validate: validate, name: name, isReadOnly: isReadOnly, onSubmit: onSubmit = ()=>{} } = props;
    let { contains: contains } = (0, $9yRST$useFilter)({
        sensitivity: 'base'
    });
    let state = (0, $9yRST$useComboBoxState)({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: true,
        // Needs to be false here otherwise we double up on commitSelection/commitCustomValue calls when
        // user taps on underlay (i.e. initial tap will call setFocused(false) -> commitSelection/commitCustomValue via onBlur,
        // then the closing of the tray will call setFocused(false) again due to cleanup effect)
        shouldCloseOnBlur: false,
        allowsCustomValue: true,
        onSelectionChange: (key)=>key !== null && onSubmit(null, key),
        selectedKey: undefined,
        defaultSelectedKey: undefined,
        validate: (0, $9yRST$useCallback)((v)=>validate === null || validate === void 0 ? void 0 : validate(v.inputValue), [
            validate
        ])
    });
    let buttonRef = (0, $9yRST$useRef)(null);
    let domRef = (0, $9yRST$useFocusableRef)(ref, buttonRef);
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, $9yRST$useOverlayTrigger)({
        type: 'listbox'
    }, state, buttonRef);
    let inputRef = (0, $9yRST$useRef)(null);
    (0, $9yRST$useFormValidation)({
        ...props,
        focus: ()=>{
            var _buttonRef_current;
            return (_buttonRef_current = buttonRef.current) === null || _buttonRef_current === void 0 ? void 0 : _buttonRef_current.focus();
        }
    }, state, inputRef);
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let validationState = props.validationState || (isInvalid ? 'invalid' : undefined);
    var _props_errorMessage;
    let errorMessage = (_props_errorMessage = props.errorMessage) !== null && _props_errorMessage !== void 0 ? _props_errorMessage : validationErrors.join(' ');
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $9yRST$useField)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: errorMessage
    });
    // Focus the button and show focus ring when clicking on the label
    labelProps.onClick = ()=>{
        if (!props.isDisabled && buttonRef.current) {
            buttonRef.current.focus();
            (0, $9yRST$setInteractionModality)('keyboard');
        }
    };
    let inputProps = {
        type: 'hidden',
        name: name,
        value: state.inputValue
    };
    if (validationBehavior === 'native') {
        // Use a hidden <input type="text"> rather than <input type="hidden">
        // so that an empty value blocks HTML form submission when the field is required.
        inputProps.type = 'text';
        inputProps.hidden = true;
        inputProps.required = isRequired;
        // Ignore react warning.
        inputProps.onChange = ()=>{};
    }
    (0, $9yRST$useFormReset)(inputRef, state.inputValue, state.setInputValue);
    return /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$react).Fragment, null, /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$Field), {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        elementType: "span",
        ref: domRef,
        includeNecessityIndicatorInAccessibilityName: true
    }, /*#__PURE__*/ (0, $9yRST$react).createElement($c940f54e16bafef5$var$SearchAutocompleteButton, {
        ...(0, $9yRST$mergeProps)(triggerProps, fieldProps, {
            autoFocus: props.autoFocus,
            icon: props.icon
        }),
        ref: buttonRef,
        isQuiet: isQuiet,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isPlaceholder: !state.inputValue,
        validationState: validationState,
        inputValue: state.inputValue,
        clearInput: ()=>state.setInputValue(''),
        onPress: ()=>!isReadOnly && state.open(null, 'manual')
    }, state.inputValue || props.placeholder || '')), /*#__PURE__*/ (0, $9yRST$react).createElement("input", {
        ...inputProps,
        ref: inputRef
    }), /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$Tray), {
        state: state,
        isFixedHeight: true,
        ...overlayProps
    }, /*#__PURE__*/ (0, $9yRST$react).createElement($c940f54e16bafef5$var$SearchAutocompleteTray, {
        ...props,
        onClose: state.close,
        overlayProps: overlayProps,
        state: state
    })));
}
let $c940f54e16bafef5$export$e7a90f7d6b078162 = /*#__PURE__*/ (0, $9yRST$react).forwardRef($c940f54e16bafef5$var$ForwardMobileSearchAutocomplete);
// any type is because we don't want to call useObjectRef because this is an internal component and we know
// we are always passing an object ref
const $c940f54e16bafef5$var$SearchAutocompleteButton = /*#__PURE__*/ (0, $9yRST$react).forwardRef(function SearchAutocompleteButton(props, ref) {
    let searchIcon = /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$spectrumiconsuiMagnifier), {
        "data-testid": "searchicon"
    });
    let { icon: icon = searchIcon, isQuiet: isQuiet, isDisabled: isDisabled, isReadOnly: isReadOnly, isPlaceholder: isPlaceholder, validationState: validationState, inputValue: inputValue, clearInput: clearInput, children: children, style: style, className: className } = props;
    let stringFormatter = (0, $9yRST$useLocalizedStringFormatter)((0, ($parcel$interopDefault($9yRST$intlStringsmodulejs))), '@react-spectrum/autocomplete');
    let valueId = (0, $9yRST$useId)();
    let invalidId = (0, $9yRST$useId)();
    let validationIcon = validationState === 'invalid' ? /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$spectrumiconsuiAlertMedium), {
        id: invalidId,
        "aria-label": stringFormatter.format('invalid')
    }) : /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$spectrumiconsuiCheckmarkMedium), null);
    if (icon) icon = /*#__PURE__*/ (0, $9yRST$react).cloneElement(icon, {
        UNSAFE_className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$textfield_vars_cssmodulejs))), 'spectrum-Textfield-icon'),
        size: 'S'
    });
    let clearButton = /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$ClearButton), {
        onPress: (e)=>{
            var _props_onPress;
            clearInput === null || clearInput === void 0 ? void 0 : clearInput();
            props === null || props === void 0 ? void 0 : (_props_onPress = props.onPress) === null || _props_onPress === void 0 ? void 0 : _props_onPress.call(props, e);
        },
        preventFocus: true,
        "aria-label": stringFormatter.format('clear'),
        excludeFromTabOrder: true,
        UNSAFE_className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let validation = /*#__PURE__*/ (0, $9yRST$react).cloneElement(validationIcon, {
        UNSAFE_className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$textfield_vars_cssmodulejs))), 'spectrum-Textfield-validationIcon', (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input-validationIcon'), (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-Search-validationIcon'))
    });
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $9yRST$useHover)({});
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $9yRST$useFocusRing)();
    let { buttonProps: buttonProps } = (0, $9yRST$useButton)({
        ...props,
        'aria-labelledby': [
            props['aria-labelledby'],
            props['aria-label'] && !props['aria-labelledby'] ? props.id : null,
            valueId,
            validationState === 'invalid' ? invalidId : null
        ].filter(Boolean).join(' '),
        elementType: 'div'
    }, ref);
    return /*#__PURE__*/ (0, $9yRST$react).createElement("div", {
        ...(0, $9yRST$mergeProps)(hoverProps, focusProps, buttonProps),
        "aria-haspopup": "dialog",
        ref: ref,
        style: {
            ...style,
            outline: 'none'
        },
        className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered,
            'is-focused': isFocused,
            'focus-ring': isFocusVisible
        }, (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$searchautocomplete_cssmodulejs))), 'searchautocomplete', 'mobile-searchautocomplete'), className)
    }, /*#__PURE__*/ (0, $9yRST$react).createElement("div", {
        className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$textfield_vars_cssmodulejs))), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Textfield--valid': validationState === 'valid' && !isDisabled,
            'spectrum-Textfield--quiet': isQuiet
        }, (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-Search', 'spectrum-Search--loadable', {
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }), (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-field'))
    }, /*#__PURE__*/ (0, $9yRST$react).createElement("div", {
        className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$textfield_vars_cssmodulejs))), 'spectrum-Textfield-input', {
            'spectrum-Textfield-inputIcon': !!icon,
            'is-hovered': isHovered,
            'is-placeholder': isPlaceholder,
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'is-focused': isFocused
        }, (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-Search-input'), (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$searchautocomplete_cssmodulejs))), 'mobile-input'))
    }, icon, /*#__PURE__*/ (0, $9yRST$react).createElement("span", {
        id: valueId,
        className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$searchautocomplete_cssmodulejs))), 'mobile-value')
    }, children)), validationState && !isDisabled ? validation : null, (inputValue !== '' || validationState != null) && !isReadOnly && clearButton));
});
function $c940f54e16bafef5$var$SearchAutocompleteTray(props) {
    let searchIcon = /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$spectrumiconsuiMagnifier), {
        "data-testid": "searchicon"
    });
    let { state: // completionMode = 'suggest',
    state, icon: icon = searchIcon, isDisabled: isDisabled, validationState: validationState, label: label, overlayProps: overlayProps, loadingState: loadingState, onLoadMore: onLoadMore, onClose: onClose, onSubmit: onSubmit } = props;
    let timeout = (0, $9yRST$useRef)(null);
    let [showLoading, setShowLoading] = (0, $9yRST$useState)(false);
    let inputRef = (0, $9yRST$useRef)(null);
    let popoverRef = (0, $9yRST$useRef)(null);
    let listBoxRef = (0, $9yRST$useRef)(null);
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let layout = (0, $9yRST$useListBoxLayout)();
    let stringFormatter = (0, $9yRST$useLocalizedStringFormatter)((0, ($parcel$interopDefault($9yRST$intlStringsmodulejs))), '@react-spectrum/autocomplete');
    let { inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, clearButtonProps: clearButtonProps } = (0, $9yRST$useSearchAutocomplete)({
        ...props,
        layoutDelegate: layout,
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        // Handled outside the tray.
        name: undefined
    }, state);
    (0, $9yRST$react).useEffect(()=>{
        if (inputRef.current) (0, $9yRST$focusSafely)(inputRef.current);
    }, []);
    (0, $9yRST$react).useEffect(()=>{
        // When the tray closes, set state.isFocused (i.e. the tray input's focus tracker) to false.
        // This is to prevent state.isFocused from being set to true when the tray closes via tapping on the underlay
        // (FocusScope attempts to restore focus to the tray input when tapping outside the tray due to "contain")
        // Have to do this manually since React doesn't call onBlur when a component is unmounted: https://github.com/facebook/react/issues/12363
        if (!state.isOpen && state.isFocused) state.setFocused(false);
    });
    let { dialogProps: dialogProps } = (0, $9yRST$useDialog)({
        'aria-labelledby': (0, $9yRST$useId)(labelProps.id)
    }, popoverRef);
    // Override the role of the input to "searchbox" instead of "combobox".
    // Since the listbox is always visible, the combobox role doesn't really give us anything.
    // VoiceOver on iOS reads "double tap to collapse" when focused on the input rather than
    // "double tap to edit text", as with a textbox or searchbox. We'd like double tapping to
    // open the virtual keyboard rather than closing the tray.
    inputProps.role = 'searchbox';
    inputProps['aria-haspopup'] = 'listbox';
    delete inputProps.onTouchEnd;
    let clearButton = /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$ClearButton), {
        ...clearButtonProps,
        preventFocus: true,
        "aria-label": stringFormatter.format('clear'),
        excludeFromTabOrder: true,
        UNSAFE_className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let loadingCircle = /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$ProgressCircle), {
        "aria-label": stringFormatter.format('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-Search-circleLoader', (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$textfield_vars_cssmodulejs))), 'spectrum-Textfield-circleLoader'))
    });
    // Close the software keyboard on scroll to give the user a bigger area to scroll.
    // But only do this if scrolling with touch, otherwise it can cause issues with touch
    // screen readers.
    let isTouchDown = (0, $9yRST$useRef)(false);
    let onTouchStart = ()=>{
        isTouchDown.current = true;
    };
    let onTouchEnd = ()=>{
        isTouchDown.current = false;
    };
    let onScroll = (0, $9yRST$useCallback)(()=>{
        if (!inputRef.current || document.activeElement !== inputRef.current || !isTouchDown.current) return;
        if (popoverRef.current) popoverRef.current.focus();
    }, [
        inputRef,
        popoverRef,
        isTouchDown
    ]);
    let inputValue = inputProps.value;
    let lastInputValue = (0, $9yRST$useRef)(inputValue);
    (0, $9yRST$useEffect)(()=>{
        if (loadingState === 'filtering' && !showLoading) {
            if (timeout.current === null) timeout.current = setTimeout(()=>{
                setShowLoading(true);
            }, 500);
            // If user is typing, clear the timer and restart since it is a new request
            if (inputValue !== lastInputValue.current) {
                clearTimeout(timeout.current);
                timeout.current = setTimeout(()=>{
                    setShowLoading(true);
                }, 500);
            }
        } else if (loadingState !== 'filtering') {
            // If loading is no longer happening, clear any timers and hide the loading circle
            setShowLoading(false);
            if (timeout.current !== null) {
                clearTimeout(timeout.current);
                timeout.current = null;
            }
        }
        lastInputValue.current = inputValue;
    }, [
        loadingState,
        inputValue,
        showLoading
    ]);
    let onKeyDown = (e)=>{
        // Close virtual keyboard, close tray, and fire onSubmit if user hits Enter w/o any focused options
        if (e.key === 'Enter' && state.selectionManager.focusedKey == null) {
            var _popoverRef_current;
            (_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.focus();
            if (onClose) onClose();
            if (onSubmit) onSubmit(inputValue == null ? null : inputValue.toString(), null);
        } else if (inputProps.onKeyDown) inputProps.onKeyDown(e);
    };
    if (icon) icon = /*#__PURE__*/ (0, $9yRST$react).cloneElement(icon, {
        UNSAFE_className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$textfield_vars_cssmodulejs))), 'spectrum-Textfield-icon'),
        size: 'S'
    });
    return /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$FocusScope), {
        restoreFocus: true,
        contain: true
    }, /*#__PURE__*/ (0, $9yRST$react).createElement("div", {
        ...(0, $9yRST$mergeProps)(overlayProps, dialogProps),
        ref: popoverRef,
        className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$searchautocomplete_cssmodulejs))), 'tray-dialog')
    }, /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$DismissButton), {
        onDismiss: onClose
    }), /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$TextFieldBase), {
        label: label,
        labelProps: labelProps,
        inputProps: {
            ...inputProps,
            onKeyDown: onKeyDown
        },
        inputRef: inputRef,
        isDisabled: isDisabled,
        isLoading: showLoading && loadingState === 'filtering',
        loadingIndicator: loadingState != null ? loadingCircle : undefined,
        validationState: validationState,
        wrapperChildren: (state.inputValue !== '' || loadingState === 'filtering' || validationState != null) && !props.isReadOnly ? clearButton : undefined,
        icon: icon,
        UNSAFE_className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-Search', 'spectrum-Textfield', 'spectrum-Search--loadable', {
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }, (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$searchautocomplete_cssmodulejs))), 'tray-textfield', {
            'has-label': !!props.label
        })),
        inputClassName: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-Search-input'),
        validationIconClassName: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$search_vars_cssmodulejs))), 'spectrum-Search-validationIcon')
    }), /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$ListBoxBase), {
        ...listBoxProps,
        domProps: {
            onTouchStart: onTouchStart,
            onTouchEnd: onTouchEnd
        },
        disallowEmptySelection: true,
        shouldSelectOnPressUp: true,
        focusOnPointerEnter: true,
        layout: layout,
        state: state,
        shouldUseVirtualFocus: true,
        renderEmptyState: ()=>loadingState !== 'loading' && /*#__PURE__*/ (0, $9yRST$react).createElement("span", {
                className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$searchautocomplete_cssmodulejs))), 'no-results')
            }, stringFormatter.format('noResults')),
        UNSAFE_className: (0, $9yRST$classNames)((0, ($parcel$interopDefault($9yRST$searchautocomplete_cssmodulejs))), 'tray-listbox'),
        ref: listBoxRef,
        onScroll: onScroll,
        onLoadMore: onLoadMore,
        isLoading: isLoading
    }), /*#__PURE__*/ (0, $9yRST$react).createElement((0, $9yRST$DismissButton), {
        onDismiss: onClose
    })));
}


export {$c940f54e16bafef5$export$e7a90f7d6b078162 as MobileSearchAutocomplete};
//# sourceMappingURL=MobileSearchAutocomplete.module.js.map
