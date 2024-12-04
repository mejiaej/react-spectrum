import "./combobox.1c1869da.css";
import $c3ZYr$combobox_cssmodulejs from "./combobox_css.mjs";
import $c3ZYr$intlStringsmodulejs from "./intlStrings.mjs";
import {MobileComboBox as $a1ae4cad4496428f$export$7637df911c069b4d} from "./MobileComboBox.mjs";
import "./vars.3f2ff1e8.css";
import $c3ZYr$inputgroup_vars_cssmodulejs from "./inputgroup_vars_css.mjs";
import "./vars.202cbdb0.css";
import $c3ZYr$textfield_vars_cssmodulejs from "./textfield_vars_css.mjs";
import $c3ZYr$spectrumiconsuiChevronDownMedium from "@spectrum-icons/ui/ChevronDownMedium";
import {useIsMobileDevice as $c3ZYr$useIsMobileDevice, useUnwrapDOMRef as $c3ZYr$useUnwrapDOMRef, useFocusableRef as $c3ZYr$useFocusableRef, useResizeObserver as $c3ZYr$useResizeObserver, dimensionValue as $c3ZYr$dimensionValue, classNames as $c3ZYr$classNames} from "@react-spectrum/utils";
import {Field as $c3ZYr$Field} from "@react-spectrum/label";
import {FieldButton as $c3ZYr$FieldButton} from "@react-spectrum/button";
import {FocusRing as $c3ZYr$FocusRing} from "@react-aria/focus";
import {useListBoxLayout as $c3ZYr$useListBoxLayout, ListBoxBase as $c3ZYr$ListBoxBase} from "@react-spectrum/listbox";
import {Popover as $c3ZYr$Popover} from "@react-spectrum/overlays";
import {useHover as $c3ZYr$useHover, PressResponder as $c3ZYr$PressResponder} from "@react-aria/interactions";
import {ProgressCircle as $c3ZYr$ProgressCircle} from "@react-spectrum/progress";
import $c3ZYr$react, {useRef as $c3ZYr$useRef, useState as $c3ZYr$useState, useCallback as $c3ZYr$useCallback, useEffect as $c3ZYr$useEffect} from "react";
import {TextFieldBase as $c3ZYr$TextFieldBase} from "@react-spectrum/textfield";
import {useComboBox as $c3ZYr$useComboBox} from "@react-aria/combobox";
import {useComboBoxState as $c3ZYr$useComboBoxState} from "@react-stately/combobox";
import {useLocalizedStringFormatter as $c3ZYr$useLocalizedStringFormatter, useFilter as $c3ZYr$useFilter} from "@react-aria/i18n";
import {useFormProps as $c3ZYr$useFormProps} from "@react-spectrum/form";
import {useLayoutEffect as $c3ZYr$useLayoutEffect} from "@react-aria/utils";
import {useProviderProps as $c3ZYr$useProviderProps, useProvider as $c3ZYr$useProvider} from "@react-spectrum/provider";


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





















const $2289f375e813f187$export$72b9695b8216309a = /*#__PURE__*/ (0, $c3ZYr$react).forwardRef(function ComboBox(props, ref) {
    props = (0, $c3ZYr$useProviderProps)(props);
    props = (0, $c3ZYr$useFormProps)(props);
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/ComboBox.html#help-text');
    let isMobile = (0, $c3ZYr$useIsMobileDevice)();
    if (isMobile) // menuTrigger=focus/manual don't apply to mobile combobox
    return /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $a1ae4cad4496428f$export$7637df911c069b4d), {
        ...props,
        menuTrigger: "input",
        ref: ref
    });
    else return /*#__PURE__*/ (0, $c3ZYr$react).createElement($2289f375e813f187$var$ComboBoxBase, {
        ...props,
        ref: ref
    });
});
const $2289f375e813f187$var$ComboBoxBase = /*#__PURE__*/ (0, $c3ZYr$react).forwardRef(function ComboBoxBase(props, ref) {
    let { menuTrigger: menuTrigger = 'input', shouldFlip: shouldFlip = true, direction: direction = 'bottom', align: align = 'start', isQuiet: isQuiet, loadingState: loadingState, onLoadMore: onLoadMore, allowsCustomValue: allowsCustomValue, menuWidth: customMenuWidth, name: name, formValue: formValue = 'text' } = props;
    if (allowsCustomValue) formValue = 'text';
    let stringFormatter = (0, $c3ZYr$useLocalizedStringFormatter)((0, ($parcel$interopDefault($c3ZYr$intlStringsmodulejs))), '@react-spectrum/combobox');
    let isAsync = loadingState != null;
    let popoverRef = (0, $c3ZYr$useRef)(null);
    let unwrappedPopoverRef = (0, $c3ZYr$useUnwrapDOMRef)(popoverRef);
    let buttonRef = (0, $c3ZYr$useRef)(null);
    let unwrappedButtonRef = (0, $c3ZYr$useUnwrapDOMRef)(buttonRef);
    let listBoxRef = (0, $c3ZYr$useRef)(null);
    let inputRef = (0, $c3ZYr$useRef)(null);
    // serve as the new popover `triggerRef` instead of `unwrappedButtonRef` before for better positioning.
    let inputGroupRef = (0, $c3ZYr$useRef)(null);
    let domRef = (0, $c3ZYr$useFocusableRef)(ref, inputRef);
    let { contains: contains } = (0, $c3ZYr$useFilter)({
        sensitivity: 'base'
    });
    let state = (0, $c3ZYr$useComboBoxState)({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: isAsync
    });
    let layout = (0, $c3ZYr$useListBoxLayout)();
    let { buttonProps: buttonProps, inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $c3ZYr$useComboBox)({
        ...props,
        layoutDelegate: layout,
        buttonRef: unwrappedButtonRef,
        popoverRef: unwrappedPopoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        menuTrigger: menuTrigger,
        name: formValue === 'text' ? name : undefined
    }, state);
    // Measure the width of the inputfield and the button to inform the width of the menu (below).
    let [menuWidth, setMenuWidth] = (0, $c3ZYr$useState)(undefined);
    let { scale: scale } = (0, $c3ZYr$useProvider)();
    let onResize = (0, $c3ZYr$useCallback)(()=>{
        if (unwrappedButtonRef.current && inputRef.current) {
            let buttonWidth = unwrappedButtonRef.current.offsetWidth;
            let inputWidth = inputRef.current.offsetWidth;
            setMenuWidth(buttonWidth + inputWidth);
        }
    }, [
        unwrappedButtonRef,
        inputRef,
        setMenuWidth
    ]);
    (0, $c3ZYr$useResizeObserver)({
        ref: domRef,
        onResize: onResize
    });
    (0, $c3ZYr$useLayoutEffect)(onResize, [
        scale,
        onResize
    ]);
    let width = isQuiet ? undefined : menuWidth;
    let style = {
        width: customMenuWidth ? (0, $c3ZYr$dimensionValue)(customMenuWidth) : width,
        minWidth: isQuiet ? `calc(${menuWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))` : menuWidth
    };
    let cbInputProps = {
        ...props,
        children: null
    };
    var _state_selectedKey, _state_focusStrategy;
    return /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$react).Fragment, null, /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$Field), {
        ...props,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        labelProps: labelProps,
        ref: domRef
    }, /*#__PURE__*/ (0, $c3ZYr$react).createElement($2289f375e813f187$var$ComboBoxInput, {
        ...cbInputProps,
        isOpen: state.isOpen,
        loadingState: loadingState,
        inputProps: inputProps,
        inputRef: inputRef,
        triggerProps: buttonProps,
        triggerRef: buttonRef,
        validationState: props.validationState || (isInvalid ? 'invalid' : undefined),
        ref: inputGroupRef
    })), name && formValue === 'key' && /*#__PURE__*/ (0, $c3ZYr$react).createElement("input", {
        type: "hidden",
        name: name,
        value: (_state_selectedKey = state.selectedKey) !== null && _state_selectedKey !== void 0 ? _state_selectedKey : ''
    }), /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$Popover), {
        state: state,
        UNSAFE_style: style,
        UNSAFE_className: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-popover', {
            'spectrum-InputGroup-popover--quiet': isQuiet
        }),
        ref: popoverRef,
        triggerRef: inputGroupRef,
        scrollRef: listBoxRef,
        placement: `${direction} ${align}`,
        hideArrow: true,
        isNonModal: true,
        shouldFlip: shouldFlip
    }, /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$ListBoxBase), {
        ...listBoxProps,
        ref: listBoxRef,
        disallowEmptySelection: true,
        autoFocus: (_state_focusStrategy = state.focusStrategy) !== null && _state_focusStrategy !== void 0 ? _state_focusStrategy : undefined,
        shouldSelectOnPressUp: true,
        focusOnPointerEnter: true,
        layout: layout,
        state: state,
        shouldUseVirtualFocus: true,
        isLoading: loadingState === 'loading' || loadingState === 'loadingMore',
        showLoadingSpinner: loadingState === 'loadingMore',
        onLoadMore: onLoadMore,
        renderEmptyState: ()=>isAsync && /*#__PURE__*/ (0, $c3ZYr$react).createElement("span", {
                className: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$combobox_cssmodulejs))), 'no-results')
            }, loadingState === 'loading' ? stringFormatter.format('loading') : stringFormatter.format('noResults'))
    })));
});
const $2289f375e813f187$var$ComboBoxInput = /*#__PURE__*/ (0, $c3ZYr$react).forwardRef(function ComboBoxInput(props, ref) {
    let { isQuiet: isQuiet, isDisabled: isDisabled, validationState: validationState, inputProps: inputProps, inputRef: inputRef, triggerProps: triggerProps, triggerRef: triggerRef, autoFocus: autoFocus, style: style, className: className, loadingState: loadingState, isOpen: isOpen, menuTrigger: menuTrigger } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $c3ZYr$useHover)({});
    let stringFormatter = (0, $c3ZYr$useLocalizedStringFormatter)((0, ($parcel$interopDefault($c3ZYr$intlStringsmodulejs))), '@react-spectrum/combobox');
    let timeout = (0, $c3ZYr$useRef)(null);
    let [showLoading, setShowLoading] = (0, $c3ZYr$useState)(false);
    let loadingCircle = /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$ProgressCircle), {
        "aria-label": stringFormatter.format('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$textfield_vars_cssmodulejs))), 'spectrum-Textfield-circleLoader', (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input-circleLoader'))
    });
    let isLoading = loadingState === 'loading' || loadingState === 'filtering';
    let inputValue = inputProps.value;
    let lastInputValue = (0, $c3ZYr$useRef)(inputValue);
    (0, $c3ZYr$useEffect)(()=>{
        if (isLoading && !showLoading) {
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
        } else if (!isLoading) {
            // If loading is no longer happening, clear any timers and hide the loading circle
            setShowLoading(false);
            if (timeout.current) clearTimeout(timeout.current);
            timeout.current = null;
        }
        lastInputValue.current = inputValue;
    }, [
        isLoading,
        showLoading,
        inputValue
    ]);
    (0, $c3ZYr$useEffect)(()=>{
        return ()=>{
            if (timeout.current) clearTimeout(timeout.current);
            timeout.current = null;
        };
    }, []);
    return /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$FocusRing), {
        within: true,
        isTextInput: true,
        focusClass: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'is-focused'),
        focusRingClass: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $c3ZYr$react).createElement("div", {
        ...hoverProps,
        ref: ref,
        style: style,
        className: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered
        }, className)
    }, /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$TextFieldBase), {
        inputProps: inputProps,
        inputRef: inputRef,
        UNSAFE_className: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-field'),
        inputClassName: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input'),
        validationIconClassName: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input-validationIcon'),
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        // loading circle should only be displayed if menu is open, if menuTrigger is "manual", or first time load (to stop circle from showing up when user selects an option)
        // TODO: add special case for completionMode: complete as well
        isLoading: showLoading && (isOpen || menuTrigger === 'manual' || loadingState === 'loading'),
        loadingIndicator: loadingState != null ? loadingCircle : undefined,
        disableFocusRing: true
    }), /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$PressResponder), {
        preventFocusOnPress: true,
        isPressed: isOpen
    }, /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$FieldButton), {
        ...triggerProps,
        ref: triggerRef,
        UNSAFE_className: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: validationState
    }, /*#__PURE__*/ (0, $c3ZYr$react).createElement((0, $c3ZYr$spectrumiconsuiChevronDownMedium), {
        UNSAFE_className: (0, $c3ZYr$classNames)((0, ($parcel$interopDefault($c3ZYr$inputgroup_vars_cssmodulejs))), 'spectrum-Dropdown-chevron')
    })))));
});


export {$2289f375e813f187$export$72b9695b8216309a as ComboBox};
//# sourceMappingURL=ComboBox.module.js.map
