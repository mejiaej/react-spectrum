var $b95bf71d4a256ee8$exports = require("./intlStrings.main.js");
require("./vars.2a434635.css");
var $b39b306bfc9a5551$exports = require("./dropdown_vars_css.main.js");
var $3qYcd$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $3qYcd$spectrumiconsuiChevronDownMedium = require("@spectrum-icons/ui/ChevronDownMedium");
var $3qYcd$reactspectrumutils = require("@react-spectrum/utils");
var $3qYcd$reactspectrumlabel = require("@react-spectrum/label");
var $3qYcd$reactspectrumbutton = require("@react-spectrum/button");
var $3qYcd$reactariaselect = require("@react-aria/select");
var $3qYcd$reactspectrumlistbox = require("@react-spectrum/listbox");
var $3qYcd$reactariautils = require("@react-aria/utils");
var $3qYcd$reactspectrumoverlays = require("@react-spectrum/overlays");
var $3qYcd$reactariainteractions = require("@react-aria/interactions");
var $3qYcd$reactspectrumprogress = require("@react-spectrum/progress");
var $3qYcd$react = require("react");
var $3qYcd$reactspectrumtext = require("@react-spectrum/text");
var $3qYcd$reactspectrumform = require("@react-spectrum/form");
var $3qYcd$reactariai18n = require("@react-aria/i18n");
var $3qYcd$reactspectrumprovider = require("@react-spectrum/provider");
var $3qYcd$reactstatelyselect = require("@react-stately/select");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Picker", () => $902e54cfaa4270a9$export$ba25329847403e11);
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


















const $902e54cfaa4270a9$export$ba25329847403e11 = /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).forwardRef(function Picker(props, ref) {
    props = (0, $3qYcd$reactspectrumutils.useSlotProps)(props, 'picker');
    props = (0, $3qYcd$reactspectrumprovider.useProviderProps)(props);
    props = (0, $3qYcd$reactspectrumform.useFormProps)(props);
    let stringFormatter = (0, $3qYcd$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($b95bf71d4a256ee8$exports))), '@react-spectrum/picker');
    let { autoComplete: autoComplete, isDisabled: isDisabled, direction: direction = 'bottom', align: align = 'start', shouldFlip: shouldFlip = true, placeholder: placeholder = stringFormatter.format('placeholder'), isQuiet: isQuiet, label: label, labelPosition: labelPosition = 'top', menuWidth: menuWidth, name: name, autoFocus: autoFocus } = props;
    let state = (0, $3qYcd$reactstatelyselect.useSelectState)(props);
    let domRef = (0, $3qYcd$reactspectrumutils.useDOMRef)(ref);
    let popoverRef = (0, $3qYcd$react.useRef)(null);
    let triggerRef = (0, $3qYcd$react.useRef)(null);
    let unwrappedTriggerRef = (0, $3qYcd$reactspectrumutils.useUnwrapDOMRef)(triggerRef);
    let listboxRef = (0, $3qYcd$react.useRef)(null);
    let isLoadingInitial = props.isLoading && state.collection.size === 0;
    let isLoadingMore = props.isLoading && state.collection.size > 0;
    let progressCircleId = (0, $3qYcd$reactariautils.useId)();
    // We create the listbox layout in Picker and pass it to ListBoxBase below
    // so that the layout information can be cached even while the listbox is not mounted.
    // We also use the layout as the keyboard delegate for type to select.
    let layout = (0, $3qYcd$reactspectrumlistbox.useListBoxLayout)();
    let { labelProps: labelProps, triggerProps: triggerProps, valueProps: valueProps, menuProps: menuProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $3qYcd$reactariaselect.useSelect)({
        ...props,
        'aria-describedby': isLoadingInitial ? progressCircleId : undefined
    }, state, unwrappedTriggerRef);
    let isMobile = (0, $3qYcd$reactspectrumutils.useIsMobileDevice)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $3qYcd$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    // On small screen devices, the listbox is rendered in a tray, otherwise a popover.
    let listbox = /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactspectrumlistbox.ListBoxBase), {
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
    let [buttonWidth, setButtonWidth] = (0, $3qYcd$react.useState)(undefined);
    let { scale: scale } = (0, $3qYcd$reactspectrumprovider.useProvider)();
    let onResize = (0, $3qYcd$react.useCallback)(()=>{
        if (!isMobile && unwrappedTriggerRef.current) {
            let width = unwrappedTriggerRef.current.offsetWidth;
            setButtonWidth(width);
        }
    }, [
        unwrappedTriggerRef,
        setButtonWidth,
        isMobile
    ]);
    (0, $3qYcd$reactariautils.useResizeObserver)({
        ref: unwrappedTriggerRef,
        onResize: onResize
    });
    (0, $3qYcd$reactariautils.useLayoutEffect)(onResize, [
        scale,
        state.selectedKey,
        onResize
    ]);
    let overlay;
    if (isMobile) overlay = /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactspectrumoverlays.Tray), {
        state: state
    }, listbox);
    else {
        // If quiet, use the default width, otherwise match the width of the button. This can be overridden by the menuWidth prop.
        // Always have a minimum width of the button width. When quiet, there is an extra offset to add.
        // Not using style props for this because they don't support `calc`.
        let width = isQuiet ? undefined : buttonWidth;
        let style = {
            width: menuWidth ? (0, $3qYcd$reactspectrumutils.dimensionValue)(menuWidth) : width,
            minWidth: isQuiet ? `calc(${buttonWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))` : buttonWidth
        };
        overlay = /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactspectrumoverlays.Popover), {
            UNSAFE_style: style,
            UNSAFE_className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Dropdown-popover', {
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
    if (typeof contents === 'string') contents = /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactspectrumtext.Text), null, contents);
    let picker = /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement("div", {
        className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Dropdown', {
            'is-invalid': isInvalid && !isDisabled,
            'is-disabled': isDisabled,
            'spectrum-Dropdown--quiet': isQuiet
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactariaselect.HiddenSelect), {
        autoComplete: autoComplete,
        isDisabled: isDisabled,
        state: state,
        triggerRef: unwrappedTriggerRef,
        label: label,
        name: name
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactariainteractions.PressResponder), (0, $3qYcd$reactariautils.mergeProps)(hoverProps, triggerProps), /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactspectrumbutton.FieldButton), {
        ref: triggerRef,
        isActive: state.isOpen,
        isQuiet: isQuiet,
        isDisabled: isDisabled,
        isInvalid: isInvalid,
        autoFocus: autoFocus,
        UNSAFE_className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Dropdown-trigger', {
            'is-hovered': isHovered
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                UNSAFE_className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Icon'),
                size: 'S'
            },
            avatar: {
                UNSAFE_className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Dropdown-avatar'),
                size: 'avatar-size-100'
            },
            text: {
                ...valueProps,
                UNSAFE_className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Dropdown-label', {
                    'is-placeholder': !state.selectedItem
                })
            },
            description: {
                isHidden: true
            }
        }
    }, contents), isLoadingInitial && /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactspectrumprogress.ProgressCircle), {
        id: progressCircleId,
        isIndeterminate: true,
        size: "S",
        "aria-label": stringFormatter.format('loading'),
        UNSAFE_className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Dropdown-progressCircle')
    }), isInvalid && !isLoadingInitial && !isDisabled && /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, ($parcel$interopDefault($3qYcd$spectrumiconsuiAlertMedium))), {
        UNSAFE_className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Dropdown-invalidIcon')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, ($parcel$interopDefault($3qYcd$spectrumiconsuiChevronDownMedium))), {
        UNSAFE_className: (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Dropdown-chevron')
    }))), state.collection.size === 0 ? null : overlay);
    let wrapperClassName = (0, $3qYcd$reactspectrumutils.classNames)((0, ($parcel$interopDefault($b39b306bfc9a5551$exports))), 'spectrum-Field', {
        'spectrum-Dropdown-fieldWrapper--quiet': isQuiet,
        'spectrum-Dropdown-fieldWrapper--positionSide': labelPosition === 'side'
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3qYcd$react))).createElement((0, $3qYcd$reactspectrumlabel.Field), {
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


//# sourceMappingURL=Picker.main.js.map
