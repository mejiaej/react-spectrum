import $6hDYZ$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.2a434635.css";
import $6hDYZ$dropdown_vars_cssmodulejs from "./dropdown_vars_css.module.js";
import $6hDYZ$spectrumiconsuiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import $6hDYZ$spectrumiconsuiChevronDownMedium from "@spectrum-icons/ui/ChevronDownMedium";
import {useSlotProps as $6hDYZ$useSlotProps, useDOMRef as $6hDYZ$useDOMRef, useUnwrapDOMRef as $6hDYZ$useUnwrapDOMRef, useIsMobileDevice as $6hDYZ$useIsMobileDevice, dimensionValue as $6hDYZ$dimensionValue, classNames as $6hDYZ$classNames, SlotProvider as $6hDYZ$SlotProvider} from "@react-spectrum/utils";
import {Field as $6hDYZ$Field} from "@react-spectrum/label";
import {FieldButton as $6hDYZ$FieldButton} from "@react-spectrum/button";
import {useSelect as $6hDYZ$useSelect, HiddenSelect as $6hDYZ$HiddenSelect} from "@react-aria/select";
import {useListBoxLayout as $6hDYZ$useListBoxLayout, ListBoxBase as $6hDYZ$ListBoxBase} from "@react-spectrum/listbox";
import {useId as $6hDYZ$useId, useResizeObserver as $6hDYZ$useResizeObserver, useLayoutEffect as $6hDYZ$useLayoutEffect, mergeProps as $6hDYZ$mergeProps} from "@react-aria/utils";
import {Tray as $6hDYZ$Tray, Popover as $6hDYZ$Popover} from "@react-spectrum/overlays";
import {useHover as $6hDYZ$useHover, PressResponder as $6hDYZ$PressResponder} from "@react-aria/interactions";
import {ProgressCircle as $6hDYZ$ProgressCircle} from "@react-spectrum/progress";
import $6hDYZ$react, {useRef as $6hDYZ$useRef, useState as $6hDYZ$useState, useCallback as $6hDYZ$useCallback} from "react";
import {Text as $6hDYZ$Text} from "@react-spectrum/text";
import {useFormProps as $6hDYZ$useFormProps} from "@react-spectrum/form";
import {useLocalizedStringFormatter as $6hDYZ$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $6hDYZ$useProviderProps, useProvider as $6hDYZ$useProvider} from "@react-spectrum/provider";
import {useSelectState as $6hDYZ$useSelectState} from "@react-stately/select";


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


















const $51664a9007a3c6f9$export$ba25329847403e11 = /*#__PURE__*/ (0, $6hDYZ$react).forwardRef(function Picker(props, ref) {
    props = (0, $6hDYZ$useSlotProps)(props, 'picker');
    props = (0, $6hDYZ$useProviderProps)(props);
    props = (0, $6hDYZ$useFormProps)(props);
    let stringFormatter = (0, $6hDYZ$useLocalizedStringFormatter)((0, ($parcel$interopDefault($6hDYZ$intlStringsmodulejs))), '@react-spectrum/picker');
    let { autoComplete: autoComplete, isDisabled: isDisabled, direction: direction = 'bottom', align: align = 'start', shouldFlip: shouldFlip = true, placeholder: placeholder = stringFormatter.format('placeholder'), isQuiet: isQuiet, label: label, labelPosition: labelPosition = 'top', menuWidth: menuWidth, name: name, autoFocus: autoFocus } = props;
    let state = (0, $6hDYZ$useSelectState)(props);
    let domRef = (0, $6hDYZ$useDOMRef)(ref);
    let popoverRef = (0, $6hDYZ$useRef)(null);
    let triggerRef = (0, $6hDYZ$useRef)(null);
    let unwrappedTriggerRef = (0, $6hDYZ$useUnwrapDOMRef)(triggerRef);
    let listboxRef = (0, $6hDYZ$useRef)(null);
    let isLoadingInitial = props.isLoading && state.collection.size === 0;
    let isLoadingMore = props.isLoading && state.collection.size > 0;
    let progressCircleId = (0, $6hDYZ$useId)();
    // We create the listbox layout in Picker and pass it to ListBoxBase below
    // so that the layout information can be cached even while the listbox is not mounted.
    // We also use the layout as the keyboard delegate for type to select.
    let layout = (0, $6hDYZ$useListBoxLayout)();
    let { labelProps: labelProps, triggerProps: triggerProps, valueProps: valueProps, menuProps: menuProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $6hDYZ$useSelect)({
        ...props,
        'aria-describedby': isLoadingInitial ? progressCircleId : undefined
    }, state, unwrappedTriggerRef);
    let isMobile = (0, $6hDYZ$useIsMobileDevice)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $6hDYZ$useHover)({
        isDisabled: isDisabled
    });
    // On small screen devices, the listbox is rendered in a tray, otherwise a popover.
    let listbox = /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$ListBoxBase), {
        ...menuProps,
        ref: listboxRef,
        disallowEmptySelection: true,
        autoFocus: state.focusStrategy || true,
        shouldSelectOnPressUp: true,
        focusOnPointerEnter: true,
        layout: layout,
        state: state,
        width: isMobile ? '100%' : undefined,
        // Set max height: inherit so Tray scrolling works
        UNSAFE_style: {
            maxHeight: 'inherit'
        },
        isLoading: props.isLoading,
        showLoadingSpinner: isLoadingMore,
        onLoadMore: props.onLoadMore
    });
    // Measure the width of the button to inform the width of the menu (below).
    let [buttonWidth, setButtonWidth] = (0, $6hDYZ$useState)(undefined);
    let { scale: scale } = (0, $6hDYZ$useProvider)();
    let onResize = (0, $6hDYZ$useCallback)(()=>{
        if (!isMobile && unwrappedTriggerRef.current) {
            let width = unwrappedTriggerRef.current.offsetWidth;
            setButtonWidth(width);
        }
    }, [
        unwrappedTriggerRef,
        setButtonWidth,
        isMobile
    ]);
    (0, $6hDYZ$useResizeObserver)({
        ref: unwrappedTriggerRef,
        onResize: onResize
    });
    (0, $6hDYZ$useLayoutEffect)(onResize, [
        scale,
        state.selectedKey,
        onResize
    ]);
    let overlay;
    if (isMobile) overlay = /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$Tray), {
        state: state
    }, listbox);
    else {
        // If quiet, use the default width, otherwise match the width of the button. This can be overridden by the menuWidth prop.
        // Always have a minimum width of the button width. When quiet, there is an extra offset to add.
        // Not using style props for this because they don't support `calc`.
        let width = isQuiet ? undefined : buttonWidth;
        let style = {
            width: menuWidth ? (0, $6hDYZ$dimensionValue)(menuWidth) : width,
            minWidth: isQuiet ? `calc(${buttonWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))` : buttonWidth
        };
        overlay = /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$Popover), {
            UNSAFE_style: style,
            UNSAFE_className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Dropdown-popover', {
                'spectrum-Dropdown-popover--quiet': isQuiet
            }),
            ref: popoverRef,
            placement: `${direction} ${align}`,
            shouldFlip: shouldFlip,
            hideArrow: true,
            state: state,
            triggerRef: unwrappedTriggerRef,
            scrollRef: listboxRef
        }, listbox);
    }
    let contents = state.selectedItem ? state.selectedItem.rendered : placeholder;
    if (typeof contents === 'string') contents = /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$Text), null, contents);
    let picker = /*#__PURE__*/ (0, $6hDYZ$react).createElement("div", {
        className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Dropdown', {
            'is-invalid': isInvalid && !isDisabled,
            'is-disabled': isDisabled,
            'spectrum-Dropdown--quiet': isQuiet
        })
    }, /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$HiddenSelect), {
        autoComplete: autoComplete,
        isDisabled: isDisabled,
        state: state,
        triggerRef: unwrappedTriggerRef,
        label: label,
        name: name
    }), /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$PressResponder), (0, $6hDYZ$mergeProps)(hoverProps, triggerProps), /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$FieldButton), {
        ref: triggerRef,
        isActive: state.isOpen,
        isQuiet: isQuiet,
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        autoFocus: autoFocus,
        UNSAFE_className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Dropdown-trigger', {
            'is-hovered': isHovered
        })
    }, /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$SlotProvider), {
        slots: {
            icon: {
                UNSAFE_className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Icon'),
                size: 'S'
            },
            avatar: {
                UNSAFE_className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Dropdown-avatar'),
                size: 'avatar-size-100'
            },
            text: {
                ...valueProps,
                UNSAFE_className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Dropdown-label', {
                    'is-placeholder': !state.selectedItem
                })
            },
            description: {
                isHidden: true
            }
        }
    }, contents), isLoadingInitial && /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$ProgressCircle), {
        id: progressCircleId,
        isIndeterminate: true,
        size: "S",
        "aria-label": stringFormatter.format('loading'),
        UNSAFE_className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Dropdown-progressCircle')
    }), isInvalid && !isLoadingInitial && !isDisabled && /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$spectrumiconsuiAlertMedium), {
        UNSAFE_className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Dropdown-invalidIcon')
    }), /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$spectrumiconsuiChevronDownMedium), {
        UNSAFE_className: (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Dropdown-chevron')
    }))), state.collection.size === 0 ? null : overlay);
    let wrapperClassName = (0, $6hDYZ$classNames)((0, ($parcel$interopDefault($6hDYZ$dropdown_vars_cssmodulejs))), 'spectrum-Field', {
        'spectrum-Dropdown-fieldWrapper--quiet': isQuiet,
        'spectrum-Dropdown-fieldWrapper--positionSide': labelPosition === 'side'
    });
    return /*#__PURE__*/ (0, $6hDYZ$react).createElement((0, $6hDYZ$Field), {
        ...props,
        ref: domRef,
        wrapperClassName: wrapperClassName,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        showErrorIcon: false,
        includeNecessityIndicatorInAccessibilityName: true,
        elementType: "span"
    }, picker);
});


export {$51664a9007a3c6f9$export$ba25329847403e11 as Picker};
//# sourceMappingURL=Picker.module.js.map
