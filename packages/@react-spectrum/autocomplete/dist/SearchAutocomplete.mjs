import $fLcex$intlStringsmodulejs from "./intlStrings.mjs";
import {MobileSearchAutocomplete as $c940f54e16bafef5$export$e7a90f7d6b078162} from "./MobileSearchAutocomplete.mjs";
import "./searchautocomplete.af2b88b2.css";
import $fLcex$searchautocomplete_cssmodulejs from "./searchautocomplete_css.mjs";
import "./vars.3a478514.css";
import $fLcex$search_vars_cssmodulejs from "./search_vars_css.mjs";
import "./vars.f6fa9f1b.css";
import $fLcex$inputgroup_vars_cssmodulejs from "./inputgroup_vars_css.mjs";
import "./vars.8b5c28ea.css";
import $fLcex$textfield_vars_cssmodulejs from "./textfield_vars_css.mjs";
import {useIsMobileDevice as $fLcex$useIsMobileDevice, useUnwrapDOMRef as $fLcex$useUnwrapDOMRef, useFocusableRef as $fLcex$useFocusableRef, useResizeObserver as $fLcex$useResizeObserver, dimensionValue as $fLcex$dimensionValue, classNames as $fLcex$classNames} from "@react-spectrum/utils";
import {ClearButton as $fLcex$ClearButton} from "@react-spectrum/button";
import {Field as $fLcex$Field} from "@react-spectrum/label";
import {useLayoutEffect as $fLcex$useLayoutEffect, filterDOMProps as $fLcex$filterDOMProps} from "@react-aria/utils";
import {FocusRing as $fLcex$FocusRing} from "@react-aria/focus";
import {useListBoxLayout as $fLcex$useListBoxLayout, ListBoxBase as $fLcex$ListBoxBase} from "@react-spectrum/listbox";
import $fLcex$spectrumiconsuiMagnifier from "@spectrum-icons/ui/Magnifier";
import {Popover as $fLcex$Popover} from "@react-spectrum/overlays";
import {ProgressCircle as $fLcex$ProgressCircle} from "@react-spectrum/progress";
import $fLcex$react, {useRef as $fLcex$useRef, useCallback as $fLcex$useCallback, useState as $fLcex$useState, useEffect as $fLcex$useEffect, forwardRef as $fLcex$forwardRef} from "react";
import {TextFieldBase as $fLcex$TextFieldBase} from "@react-spectrum/textfield";
import {useComboBoxState as $fLcex$useComboBoxState} from "@react-stately/combobox";
import {useLocalizedStringFormatter as $fLcex$useLocalizedStringFormatter, useFilter as $fLcex$useFilter} from "@react-aria/i18n";
import {useFormProps as $fLcex$useFormProps} from "@react-spectrum/form";
import {useHover as $fLcex$useHover} from "@react-aria/interactions";
import {useProviderProps as $fLcex$useProviderProps, useProvider as $fLcex$useProvider} from "@react-spectrum/provider";
import {useSearchAutocomplete as $fLcex$useSearchAutocomplete} from "@react-aria/autocomplete";


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






















function $f3f3b62273a2d260$var$SearchAutocomplete(props, ref) {
    props = (0, $fLcex$useProviderProps)(props);
    props = (0, $fLcex$useFormProps)(props);
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead.');
    let isMobile = (0, $fLcex$useIsMobileDevice)();
    if (isMobile) // menuTrigger=focus/manual don't apply to mobile searchwithin
    return /*#__PURE__*/ (0, $fLcex$react).createElement((0, $c940f54e16bafef5$export$e7a90f7d6b078162), {
        ...props,
        menuTrigger: "input",
        ref: ref
    });
    else return /*#__PURE__*/ (0, $fLcex$react).createElement($f3f3b62273a2d260$var$SearchAutocompleteBase, {
        ...props,
        ref: ref
    });
}
function $f3f3b62273a2d260$var$ForwardSearchAutocompleteBase(props, ref) {
    props = (0, $fLcex$useProviderProps)(props);
    let { menuTrigger: menuTrigger = 'input', shouldFlip: shouldFlip = true, direction: direction = 'bottom', align: align = 'start', isQuiet: isQuiet, menuWidth: customMenuWidth, loadingState: loadingState, onLoadMore: onLoadMore, onSubmit: onSubmit = ()=>{}, validate: validate } = props;
    let stringFormatter = (0, $fLcex$useLocalizedStringFormatter)((0, ($parcel$interopDefault($fLcex$intlStringsmodulejs))), '@react-spectrum/autocomplete');
    let isAsync = loadingState != null;
    let popoverRef = (0, $fLcex$useRef)(null);
    let unwrappedPopoverRef = (0, $fLcex$useUnwrapDOMRef)(popoverRef);
    let listBoxRef = (0, $fLcex$useRef)(null);
    let inputRef = (0, $fLcex$useRef)(null);
    let domRef = (0, $fLcex$useFocusableRef)(ref, inputRef);
    let { contains: contains } = (0, $fLcex$useFilter)({
        sensitivity: 'base'
    });
    let state = (0, $fLcex$useComboBoxState)({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: isAsync,
        allowsCustomValue: true,
        onSelectionChange: (key)=>key !== null && onSubmit(null, key),
        selectedKey: undefined,
        defaultSelectedKey: undefined,
        validate: (0, $fLcex$useCallback)((v)=>validate === null || validate === void 0 ? void 0 : validate(v.inputValue), [
            validate
        ])
    });
    let layout = (0, $fLcex$useListBoxLayout)();
    let { inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, clearButtonProps: clearButtonProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $fLcex$useSearchAutocomplete)({
        ...props,
        layoutDelegate: layout,
        popoverRef: unwrappedPopoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        menuTrigger: menuTrigger
    }, state);
    // Measure the width of the inputfield to inform the width of the menu (below).
    let [menuWidth, setMenuWidth] = (0, $fLcex$useState)(0);
    let { scale: scale } = (0, $fLcex$useProvider)();
    let onResize = (0, $fLcex$useCallback)(()=>{
        if (inputRef.current) {
            let inputWidth = inputRef.current.offsetWidth;
            setMenuWidth(inputWidth);
        }
    }, [
        inputRef,
        setMenuWidth
    ]);
    (0, $fLcex$useResizeObserver)({
        ref: domRef,
        onResize: onResize
    });
    (0, $fLcex$useLayoutEffect)(onResize, [
        scale,
        onResize
    ]);
    let width = isQuiet ? undefined : menuWidth;
    let style = {
        width: customMenuWidth ? (0, $fLcex$dimensionValue)(customMenuWidth) : width,
        minWidth: isQuiet ? `calc(${menuWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))` : menuWidth
    };
    var _state_focusStrategy;
    return /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$react).Fragment, null, /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$Field), {
        ...props,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        labelProps: labelProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        ref: domRef
    }, /*#__PURE__*/ (0, $fLcex$react).createElement($f3f3b62273a2d260$var$SearchAutocompleteInput, {
        ...props,
        isOpen: state.isOpen,
        loadingState: loadingState,
        inputProps: inputProps,
        inputRef: inputRef,
        clearButtonProps: clearButtonProps,
        validationState: props.validationState || (isInvalid ? 'invalid' : undefined)
    })), /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$Popover), {
        state: state,
        UNSAFE_style: style,
        UNSAFE_className: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-popover', {
            'spectrum-InputGroup-popover--quiet': isQuiet
        }),
        ref: popoverRef,
        triggerRef: inputRef,
        placement: `${direction} ${align}`,
        hideArrow: true,
        isNonModal: true,
        shouldFlip: shouldFlip
    }, /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$ListBoxBase), {
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
        renderEmptyState: ()=>isAsync && /*#__PURE__*/ (0, $fLcex$react).createElement("span", {
                className: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$searchautocomplete_cssmodulejs))), 'no-results')
            }, stringFormatter.format('noResults'))
    })));
}
let $f3f3b62273a2d260$var$SearchAutocompleteBase = /*#__PURE__*/ (0, $fLcex$react).forwardRef($f3f3b62273a2d260$var$ForwardSearchAutocompleteBase);
// any type is because we don't want to call useObjectRef because this is an internal component and we know
// we are always passing an object ref
function $f3f3b62273a2d260$var$ForwardSearchAutocompleteInput(props, ref) {
    let searchIcon = /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$spectrumiconsuiMagnifier), {
        "data-testid": "searchicon"
    });
    let { icon: icon = searchIcon, isQuiet: isQuiet, isDisabled: isDisabled, isReadOnly: isReadOnly, validationState: validationState, inputProps: inputProps, inputRef: inputRef, autoFocus: autoFocus, style: style, className: className, loadingState: loadingState, isOpen: isOpen, menuTrigger: menuTrigger, clearButtonProps: clearButtonProps } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $fLcex$useHover)({});
    let stringFormatter = (0, $fLcex$useLocalizedStringFormatter)((0, ($parcel$interopDefault($fLcex$intlStringsmodulejs))), '@react-spectrum/autocomplete');
    let domProps = (0, $fLcex$filterDOMProps)(props);
    let timeout = (0, $fLcex$useRef)(null);
    let [showLoading, setShowLoading] = (0, $fLcex$useState)(false);
    let loadingCircle = /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$ProgressCircle), {
        "aria-label": stringFormatter.format('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$textfield_vars_cssmodulejs))), 'spectrum-Textfield-circleLoader', (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-input-circleLoader'), (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$search_vars_cssmodulejs))), 'spectrum-Search-circleLoader'))
    });
    let clearButton = /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$ClearButton), {
        ...clearButtonProps,
        preventFocus: true,
        UNSAFE_className: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$search_vars_cssmodulejs))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let isLoading = loadingState === 'loading' || loadingState === 'filtering';
    let inputValue = inputProps.value;
    let lastInputValue = (0, $fLcex$useRef)(inputValue);
    (0, $fLcex$useEffect)(()=>{
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
            if (timeout.current != null) {
                clearTimeout(timeout.current);
                timeout.current = null;
            }
        }
        lastInputValue.current = inputValue;
    }, [
        isLoading,
        showLoading,
        inputValue
    ]);
    return /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$FocusRing), {
        within: true,
        isTextInput: true,
        focusClass: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$inputgroup_vars_cssmodulejs))), 'is-focused'),
        focusRingClass: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$inputgroup_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $fLcex$react).createElement("div", {
        ...hoverProps,
        ref: ref,
        style: style,
        className: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered
        }, (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$searchautocomplete_cssmodulejs))), 'searchautocomplete'), className)
    }, /*#__PURE__*/ (0, $fLcex$react).createElement((0, $fLcex$TextFieldBase), {
        ...domProps,
        inputProps: inputProps,
        inputRef: inputRef,
        UNSAFE_className: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$search_vars_cssmodulejs))), 'spectrum-Search', 'spectrum-Search--loadable', 'spectrum-Textfield', {
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }, (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$inputgroup_vars_cssmodulejs))), 'spectrum-InputGroup-field')),
        inputClassName: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$search_vars_cssmodulejs))), 'spectrum-Search-input'),
        validationIconClassName: (0, $fLcex$classNames)((0, ($parcel$interopDefault($fLcex$search_vars_cssmodulejs))), 'spectrum-Search-validationIcon'),
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        isLoading: showLoading && (isOpen || menuTrigger === 'manual' || loadingState === 'loading'),
        loadingIndicator: loadingState != null ? loadingCircle : undefined,
        icon: icon,
        wrapperChildren: (inputValue !== '' || loadingState === 'filtering' || validationState != null) && !isReadOnly ? clearButton : undefined,
        disableFocusRing: true
    })));
}
let $f3f3b62273a2d260$var$SearchAutocompleteInput = /*#__PURE__*/ (0, $fLcex$react).forwardRef($f3f3b62273a2d260$var$ForwardSearchAutocompleteInput);
/**
 * A SearchAutocomplete is a searchfield that supports a dynamic list of suggestions.
 */ let $f3f3b62273a2d260$export$dd65332a5b19fa63 = /*#__PURE__*/ (0, $fLcex$forwardRef)($f3f3b62273a2d260$var$SearchAutocomplete);


export {$f3f3b62273a2d260$export$dd65332a5b19fa63 as SearchAutocomplete};
//# sourceMappingURL=SearchAutocomplete.module.js.map
