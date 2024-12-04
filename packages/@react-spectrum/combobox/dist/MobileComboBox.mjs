import "./vars.8e9a1ae1.css";
import $gRayl$button_vars_cssmodulejs from "./button_vars_css.mjs";
import "./combobox.1c1869da.css";
import $gRayl$combobox_cssmodulejs from "./combobox_css.mjs";
import $gRayl$intlStringsmodulejs from "./intlStrings.mjs";
import "./vars.3ad1a294.css";
import $gRayl$fieldlabel_vars_cssmodulejs from "./fieldlabel_vars_css.mjs";
import "./vars.3e061265.css";
import $gRayl$search_vars_cssmodulejs from "./search_vars_css.mjs";
import "./vars.3f2ff1e8.css";
import $gRayl$inputgroup_vars_cssmodulejs from "./inputgroup_vars_css.mjs";
import "./vars.202cbdb0.css";
import $gRayl$textfield_vars_cssmodulejs from "./textfield_vars_css.mjs";
import $gRayl$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $gRayl$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import $gRayl$spectrumiconsuiChevronDownMedium from "@spectrum-icons/ui/ChevronDownMedium";
import {useFocusableRef as $gRayl$useFocusableRef, classNames as $gRayl$classNames, unwrapDOMRef as $gRayl$unwrapDOMRef} from "@react-spectrum/utils";
import {ClearButton as $gRayl$ClearButton} from "@react-spectrum/button";
import {useComboBoxState as $gRayl$useComboBoxState} from "@react-stately/combobox";
import {useOverlayTrigger as $gRayl$useOverlayTrigger, DismissButton as $gRayl$DismissButton} from "@react-aria/overlays";
import {Field as $gRayl$Field} from "@react-spectrum/label";
import {FocusRing as $gRayl$FocusRing, focusSafely as $gRayl$focusSafely, FocusScope as $gRayl$FocusScope} from "@react-aria/focus";
import {useListBoxLayout as $gRayl$useListBoxLayout, ListBoxBase as $gRayl$ListBoxBase} from "@react-spectrum/listbox";
import {useFormReset as $gRayl$useFormReset, mergeProps as $gRayl$mergeProps, useId as $gRayl$useId, useObjectRef as $gRayl$useObjectRef} from "@react-aria/utils";
import {ProgressCircle as $gRayl$ProgressCircle} from "@react-spectrum/progress";
import $gRayl$react, {useRef as $gRayl$useRef, useState as $gRayl$useState, useCallback as $gRayl$useCallback, useEffect as $gRayl$useEffect} from "react";
import {setInteractionModality as $gRayl$setInteractionModality, useHover as $gRayl$useHover} from "@react-aria/interactions";
import {TextFieldBase as $gRayl$TextFieldBase} from "@react-spectrum/textfield";
import {Tray as $gRayl$Tray} from "@react-spectrum/overlays";
import {useButton as $gRayl$useButton} from "@react-aria/button";
import {useComboBox as $gRayl$useComboBox} from "@react-aria/combobox";
import {useDialog as $gRayl$useDialog} from "@react-aria/dialog";
import {useField as $gRayl$useField} from "@react-aria/label";
import {useFilter as $gRayl$useFilter, useLocalizedStringFormatter as $gRayl$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useFormValidation as $gRayl$useFormValidation} from "@react-aria/form";
import {useProviderProps as $gRayl$useProviderProps} from "@react-spectrum/provider";


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





























const $a1ae4cad4496428f$export$7637df911c069b4d = /*#__PURE__*/ (0, $gRayl$react).forwardRef(function MobileComboBox(props, ref) {
    props = (0, $gRayl$useProviderProps)(props);
    let { isQuiet: isQuiet, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, validationBehavior: validationBehavior, name: name, formValue: formValue = 'text', allowsCustomValue: allowsCustomValue } = props;
    if (allowsCustomValue) formValue = 'text';
    let { contains: contains } = (0, $gRayl$useFilter)({
        sensitivity: 'base'
    });
    let state = (0, $gRayl$useComboBoxState)({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: true,
        // Needs to be false here otherwise we double up on commitSelection/commitCustomValue calls when
        // user taps on underlay (i.e. initial tap will call setFocused(false) -> commitSelection/commitCustomValue via onBlur,
        // then the closing of the tray will call setFocused(false) again due to cleanup effect)
        shouldCloseOnBlur: false
    });
    let buttonRef = (0, $gRayl$useRef)(null);
    let domRef = (0, $gRayl$useFocusableRef)(ref, buttonRef);
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, $gRayl$useOverlayTrigger)({
        type: 'listbox'
    }, state, buttonRef);
    let inputRef = (0, $gRayl$useRef)(null);
    (0, $gRayl$useFormValidation)({
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
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $gRayl$useField)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: errorMessage
    });
    // Focus the button and show focus ring when clicking on the label
    labelProps.onClick = ()=>{
        if (!props.isDisabled) {
            var _buttonRef_current;
            (_buttonRef_current = buttonRef.current) === null || _buttonRef_current === void 0 ? void 0 : _buttonRef_current.focus();
            (0, $gRayl$setInteractionModality)('keyboard');
        }
    };
    let inputProps = {
        type: 'hidden',
        name: name,
        value: formValue === 'text' ? state.inputValue : String(state.selectedKey)
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
    var _inputProps_value;
    (0, $gRayl$useFormReset)(inputRef, String((_inputProps_value = inputProps.value) !== null && _inputProps_value !== void 0 ? _inputProps_value : ''), formValue === 'text' ? state.setInputValue : state.setSelectedKey);
    return /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$react).Fragment, null, /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$Field), {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        validationState: validationState,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        elementType: "span",
        ref: domRef,
        includeNecessityIndicatorInAccessibilityName: true
    }, /*#__PURE__*/ (0, $gRayl$react).createElement($a1ae4cad4496428f$export$adfa0abcd5972f7e, {
        ...(0, $gRayl$mergeProps)(triggerProps, fieldProps, {
            autoFocus: props.autoFocus
        }),
        ref: buttonRef,
        isQuiet: isQuiet,
        isDisabled: isDisabled,
        isPlaceholder: !state.inputValue,
        validationState: validationState,
        onPress: ()=>!isReadOnly && state.open(null, 'manual')
    }, state.inputValue || props.placeholder || '')), /*#__PURE__*/ (0, $gRayl$react).createElement("input", {
        ...inputProps,
        ref: inputRef
    }), /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$Tray), {
        state: state,
        isFixedHeight: true,
        ...overlayProps
    }, /*#__PURE__*/ (0, $gRayl$react).createElement($a1ae4cad4496428f$var$ComboBoxTray, {
        ...props,
        onClose: state.close,
        overlayProps: overlayProps,
        state: state
    })));
});
const $a1ae4cad4496428f$export$adfa0abcd5972f7e = /*#__PURE__*/ (0, $gRayl$react).forwardRef(function ComboBoxButton(props, ref) {
    let { isQuiet: isQuiet, isDisabled: isDisabled, isPlaceholder: isPlaceholder, validationState: validationState, children: children, style: style, className: className } = props;
    let stringFormatter = (0, $gRayl$useLocalizedStringFormatter)((0, ($parcel$interopDefault($gRayl$intlStringsmodulejs))), '@react-spectrum/combobox');
    let valueId = (0, $gRayl$useId)();
    let invalidId = (0, $gRayl$useId)();
    let validationIcon = validationState === 'invalid' ? /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$spectrumiconsuiAlertMedium), {
        id: invalidId,
        "aria-label": stringFormatter.format('invalid')
    }) : /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$spectrumiconsuiCheckmarkMedium), null);
    let validation = /*#__PURE__*/ (0, $gRayl$react).cloneElement(validationIcon, {
        UNSAFE_className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$textfield_vars_cssmodulejs))), 'spectrum-Textfield-validationIcon', (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input-validationIcon'))
    });
    let objRef = (0, $gRayl$useObjectRef)(ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $gRayl$useHover)({});
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $gRayl$useButton)({
        ...props,
        'aria-labelledby': [
            props['aria-labelledby'],
            props['aria-label'] && !props['aria-labelledby'] ? props.id : null,
            valueId,
            validationState === 'invalid' ? invalidId : null
        ].filter(Boolean).join(' '),
        elementType: 'div'
    }, objRef);
    return /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$FocusRing), {
        focusClass: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$inputgroup_vars_cssmodulejs))), 'is-focused'),
        focusRingClass: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$inputgroup_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $gRayl$react).createElement("div", {
        ...(0, $gRayl$mergeProps)(hoverProps, buttonProps),
        "aria-haspopup": "dialog",
        ref: objRef,
        style: {
            ...style,
            outline: 'none'
        },
        className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered
        }, (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$combobox_cssmodulejs))), 'mobile-combobox'), className)
    }, /*#__PURE__*/ (0, $gRayl$react).createElement("div", {
        className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$textfield_vars_cssmodulejs))), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Textfield--valid': validationState === 'valid' && !isDisabled,
            'spectrum-Textfield--quiet': isQuiet
        }, (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-field'))
    }, /*#__PURE__*/ (0, $gRayl$react).createElement("div", {
        className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$textfield_vars_cssmodulejs))), 'spectrum-Textfield-input', {
            'is-hovered': isHovered,
            'is-placeholder': isPlaceholder,
            'is-disabled': isDisabled
        }, (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input', (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$fieldlabel_vars_cssmodulejs))), 'spectrum-Field-field')), (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$combobox_cssmodulejs))), 'mobile-input'))
    }, /*#__PURE__*/ (0, $gRayl$react).createElement("span", {
        id: valueId,
        className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$combobox_cssmodulejs))), 'mobile-value')
    }, children)), validationState && !isDisabled ? validation : null), /*#__PURE__*/ (0, $gRayl$react).createElement("div", {
        className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$button_vars_cssmodulejs))), 'spectrum-FieldButton', {
            'spectrum-FieldButton--quiet': isQuiet,
            'is-active': isPressed,
            'is-disabled': isDisabled,
            'spectrum-FieldButton--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered
        }, (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$inputgroup_vars_cssmodulejs))), 'spectrum-FieldButton'))
    }, /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$spectrumiconsuiChevronDownMedium), {
        UNSAFE_className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$inputgroup_vars_cssmodulejs))), 'spectrum-Dropdown-chevron')
    }))));
});
function $a1ae4cad4496428f$var$ComboBoxTray(props) {
    let { state: // completionMode = 'suggest',
    state, isDisabled: isDisabled, validationState: validationState, label: label, overlayProps: overlayProps, loadingState: loadingState, onLoadMore: onLoadMore, onClose: onClose } = props;
    let timeout = (0, $gRayl$useRef)(null);
    let [showLoading, setShowLoading] = (0, $gRayl$useState)(false);
    let inputRef = (0, $gRayl$useRef)(null);
    let buttonRef = (0, $gRayl$useRef)(null);
    let popoverRef = (0, $gRayl$useRef)(null);
    let listBoxRef = (0, $gRayl$useRef)(null);
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let layout = (0, $gRayl$useListBoxLayout)();
    let stringFormatter = (0, $gRayl$useLocalizedStringFormatter)((0, ($parcel$interopDefault($gRayl$intlStringsmodulejs))), '@react-spectrum/combobox');
    let { inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps } = (0, $gRayl$useComboBox)({
        ...props,
        // completionMode,
        layoutDelegate: layout,
        buttonRef: (0, $gRayl$unwrapDOMRef)(buttonRef),
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        // Handled outside the tray.
        name: undefined
    }, state);
    (0, $gRayl$react).useEffect(()=>{
        if (inputRef.current) (0, $gRayl$focusSafely)(inputRef.current);
    }, []);
    (0, $gRayl$react).useEffect(()=>{
        // When the tray closes, set state.isFocused (i.e. the tray input's focus tracker) to false.
        // This is to prevent state.isFocused from being set to true when the tray closes via tapping on the underlay
        // (FocusScope attempts to restore focus to the tray input when tapping outside the tray due to "contain")
        // Have to do this manually since React doesn't call onBlur when a component is unmounted: https://github.com/facebook/react/issues/12363
        if (!state.isOpen && state.isFocused) state.setFocused(false);
    });
    let { dialogProps: dialogProps } = (0, $gRayl$useDialog)({
        'aria-labelledby': (0, $gRayl$useId)(labelProps.id)
    }, popoverRef);
    // Override the role of the input to "searchbox" instead of "combobox".
    // Since the listbox is always visible, the combobox role doesn't really give us anything.
    // VoiceOver on iOS reads "double tap to collapse" when focused on the input rather than
    // "double tap to edit text", as with a textbox or searchbox. We'd like double tapping to
    // open the virtual keyboard rather than closing the tray.
    // Unlike "combobox", "aria-expanded" is not a valid attribute on "searchbox".
    inputProps.role = 'searchbox';
    inputProps['aria-haspopup'] = 'listbox';
    delete inputProps['aria-expanded'];
    delete inputProps.onTouchEnd;
    let clearButton = /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$ClearButton), {
        preventFocus: true,
        "aria-label": stringFormatter.format('clear'),
        excludeFromTabOrder: true,
        onPress: ()=>{
            var _inputRef_current;
            state.setInputValue('');
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        },
        UNSAFE_className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$search_vars_cssmodulejs))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let loadingCircle = /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$ProgressCircle), {
        "aria-label": stringFormatter.format('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$search_vars_cssmodulejs))), 'spectrum-Search-circleLoader', (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$textfield_vars_cssmodulejs))), 'spectrum-Textfield-circleLoader'))
    });
    // Close the software keyboard on scroll to give the user a bigger area to scroll.
    // But only do this if scrolling with touch, otherwise it can cause issues with touch
    // screen readers.
    let isTouchDown = (0, $gRayl$useRef)(false);
    let onTouchStart = ()=>{
        isTouchDown.current = true;
    };
    let onTouchEnd = ()=>{
        isTouchDown.current = false;
    };
    let onScroll = (0, $gRayl$useCallback)(()=>{
        var _popoverRef_current;
        if (!inputRef.current || document.activeElement !== inputRef.current || !isTouchDown.current) return;
        (_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.focus();
    }, [
        inputRef,
        popoverRef,
        isTouchDown
    ]);
    let inputValue = inputProps.value;
    let lastInputValue = (0, $gRayl$useRef)(inputValue);
    (0, $gRayl$useEffect)(()=>{
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
            if (timeout.current) clearTimeout(timeout.current);
            timeout.current = null;
        }
        lastInputValue.current = inputValue;
    }, [
        loadingState,
        inputValue,
        showLoading
    ]);
    let onKeyDown = (e)=>{
        var _popoverRef_current, _inputProps_onKeyDown;
        // Close virtual keyboard if user hits Enter w/o any focused options
        if (e.key === 'Enter' && state.selectionManager.focusedKey == null) (_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.focus();
        else (_inputProps_onKeyDown = inputProps.onKeyDown) === null || _inputProps_onKeyDown === void 0 ? void 0 : _inputProps_onKeyDown.call(inputProps, e);
    };
    return /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$FocusScope), {
        restoreFocus: true,
        contain: true
    }, /*#__PURE__*/ (0, $gRayl$react).createElement("div", {
        ...(0, $gRayl$mergeProps)(overlayProps, dialogProps),
        ref: popoverRef,
        className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$combobox_cssmodulejs))), 'tray-dialog')
    }, /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$DismissButton), {
        onDismiss: onClose
    }), /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$TextFieldBase), {
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
        labelAlign: "start",
        labelPosition: "top",
        wrapperChildren: (state.inputValue !== '' || loadingState === 'filtering' || validationState != null) && !props.isReadOnly ? clearButton : undefined,
        UNSAFE_className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$search_vars_cssmodulejs))), 'spectrum-Search', 'spectrum-Textfield', 'spectrum-Search--loadable', {
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }, (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$combobox_cssmodulejs))), 'tray-textfield', {
            'has-label': !!props.label
        })),
        inputClassName: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$combobox_cssmodulejs))), 'tray-textfield-input', (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$search_vars_cssmodulejs))), 'spectrum-Search-input')),
        validationIconClassName: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$search_vars_cssmodulejs))), 'spectrum-Search-validationIcon')
    }), /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$ListBoxBase), {
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
        renderEmptyState: ()=>loadingState !== 'loading' && /*#__PURE__*/ (0, $gRayl$react).createElement("span", {
                className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$combobox_cssmodulejs))), 'no-results')
            }, stringFormatter.format('noResults')),
        UNSAFE_className: (0, $gRayl$classNames)((0, ($parcel$interopDefault($gRayl$combobox_cssmodulejs))), 'tray-listbox'),
        ref: listBoxRef,
        onScroll: onScroll,
        onLoadMore: onLoadMore,
        isLoading: isLoading
    }), /*#__PURE__*/ (0, $gRayl$react).createElement((0, $gRayl$DismissButton), {
        onDismiss: onClose
    })));
}


export {$a1ae4cad4496428f$export$7637df911c069b4d as MobileComboBox, $a1ae4cad4496428f$export$adfa0abcd5972f7e as ComboBoxButton};
//# sourceMappingURL=MobileComboBox.module.js.map
