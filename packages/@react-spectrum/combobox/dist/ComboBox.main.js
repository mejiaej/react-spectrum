require("./combobox.1c1869da.css");
var $41fae9390a5a37fa$exports = require("./combobox_css.main.js");
var $9e627d9ac6346a53$exports = require("./intlStrings.main.js");
var $e514018f82d1b067$exports = require("./MobileComboBox.main.js");
require("./vars.3f2ff1e8.css");
var $2f86633ce5b04f1e$exports = require("./inputgroup_vars_css.main.js");
require("./vars.202cbdb0.css");
var $40cb3a00c193680f$exports = require("./textfield_vars_css.main.js");
var $XxzjX$spectrumiconsuiChevronDownMedium = require("@spectrum-icons/ui/ChevronDownMedium");
var $XxzjX$reactspectrumutils = require("@react-spectrum/utils");
var $XxzjX$reactspectrumlabel = require("@react-spectrum/label");
var $XxzjX$reactspectrumbutton = require("@react-spectrum/button");
var $XxzjX$reactariafocus = require("@react-aria/focus");
var $XxzjX$reactspectrumlistbox = require("@react-spectrum/listbox");
var $XxzjX$reactspectrumoverlays = require("@react-spectrum/overlays");
var $XxzjX$reactariainteractions = require("@react-aria/interactions");
var $XxzjX$reactspectrumprogress = require("@react-spectrum/progress");
var $XxzjX$react = require("react");
var $XxzjX$reactspectrumtextfield = require("@react-spectrum/textfield");
var $XxzjX$reactariacombobox = require("@react-aria/combobox");
var $XxzjX$reactstatelycombobox = require("@react-stately/combobox");
var $XxzjX$reactariai18n = require("@react-aria/i18n");
var $XxzjX$reactspectrumform = require("@react-spectrum/form");
var $XxzjX$reactariautils = require("@react-aria/utils");
var $XxzjX$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ComboBox", () => $e4f518eb9b010873$export$72b9695b8216309a);
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





















const $e4f518eb9b010873$export$72b9695b8216309a = /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).forwardRef(function ComboBox(props, ref) {
    props = (0, $XxzjX$reactspectrumprovider.useProviderProps)(props);
    props = (0, $XxzjX$reactspectrumform.useFormProps)(props);
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/ComboBox.html#help-text');
    let isMobile = (0, $XxzjX$reactspectrumutils.useIsMobileDevice)();
    if (isMobile) // menuTrigger=focus/manual don't apply to mobile combobox
    return /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $e514018f82d1b067$exports.MobileComboBox), {
        ...props,
        menuTrigger: "input",
        ref: ref
    });
    else return /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement($e4f518eb9b010873$var$ComboBoxBase, {
        ...props,
        ref: ref
    });
});
const $e4f518eb9b010873$var$ComboBoxBase = /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).forwardRef(function ComboBoxBase(props, ref) {
    let { menuTrigger: menuTrigger = 'input', shouldFlip: shouldFlip = true, direction: direction = 'bottom', align: align = 'start', isQuiet: isQuiet, loadingState: loadingState, onLoadMore: onLoadMore, allowsCustomValue: allowsCustomValue, menuWidth: customMenuWidth, name: name, formValue: formValue = 'text' } = props;
    if (allowsCustomValue) formValue = 'text';
    let stringFormatter = (0, $XxzjX$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($9e627d9ac6346a53$exports))), '@react-spectrum/combobox');
    let isAsync = loadingState != null;
    let popoverRef = (0, $XxzjX$react.useRef)(null);
    let unwrappedPopoverRef = (0, $XxzjX$reactspectrumutils.useUnwrapDOMRef)(popoverRef);
    let buttonRef = (0, $XxzjX$react.useRef)(null);
    let unwrappedButtonRef = (0, $XxzjX$reactspectrumutils.useUnwrapDOMRef)(buttonRef);
    let listBoxRef = (0, $XxzjX$react.useRef)(null);
    let inputRef = (0, $XxzjX$react.useRef)(null);
    // serve as the new popover `triggerRef` instead of `unwrappedButtonRef` before for better positioning.
    let inputGroupRef = (0, $XxzjX$react.useRef)(null);
    let domRef = (0, $XxzjX$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let { contains: contains } = (0, $XxzjX$reactariai18n.useFilter)({
        sensitivity: 'base'
    });
    let state = (0, $XxzjX$reactstatelycombobox.useComboBoxState)({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: isAsync
    });
    let layout = (0, $XxzjX$reactspectrumlistbox.useListBoxLayout)();
    let { buttonProps: buttonProps, inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $XxzjX$reactariacombobox.useComboBox)({
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
    let [menuWidth, setMenuWidth] = (0, $XxzjX$react.useState)(undefined);
    let { scale: scale } = (0, $XxzjX$reactspectrumprovider.useProvider)();
    let onResize = (0, $XxzjX$react.useCallback)(()=>{
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
    (0, $XxzjX$reactspectrumutils.useResizeObserver)({
        ref: domRef,
        onResize: onResize
    });
    (0, $XxzjX$reactariautils.useLayoutEffect)(onResize, [
        scale,
        onResize
    ]);
    let width = isQuiet ? undefined : menuWidth;
    let style = {
        width: customMenuWidth ? (0, $XxzjX$reactspectrumutils.dimensionValue)(customMenuWidth) : width,
        minWidth: isQuiet ? `calc(${menuWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))` : menuWidth
    };
    let cbInputProps = {
        ...props,
        children: null
    };
    var _state_selectedKey, _state_focusStrategy;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, ($parcel$interopDefault($XxzjX$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $XxzjX$reactspectrumlabel.Field), {
        ...props,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        labelProps: labelProps,
        ref: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement($e4f518eb9b010873$var$ComboBoxInput, {
        ...cbInputProps,
        isOpen: state.isOpen,
        loadingState: loadingState,
        inputProps: inputProps,
        inputRef: inputRef,
        triggerProps: buttonProps,
        triggerRef: buttonRef,
        validationState: props.validationState || (isInvalid ? 'invalid' : undefined),
        ref: inputGroupRef
    })), name && formValue === 'key' && /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement("input", {
        type: "hidden",
        name: name,
        value: (_state_selectedKey = state.selectedKey) !== null && _state_selectedKey !== void 0 ? _state_selectedKey : ''
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $XxzjX$reactspectrumoverlays.Popover), {
        state: state,
        UNSAFE_style: style,
        UNSAFE_className: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-popover', {
            'spectrum-InputGroup-popover--quiet': isQuiet
        }),
        ref: popoverRef,
        triggerRef: inputGroupRef,
        scrollRef: listBoxRef,
        placement: `${direction} ${align}`,
        hideArrow: true,
        isNonModal: true,
        shouldFlip: shouldFlip
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $XxzjX$reactspectrumlistbox.ListBoxBase), {
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
        renderEmptyState: ()=>isAsync && /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement("span", {
                className: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'no-results')
            }, loadingState === 'loading' ? stringFormatter.format('loading') : stringFormatter.format('noResults'))
    })));
});
const $e4f518eb9b010873$var$ComboBoxInput = /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).forwardRef(function ComboBoxInput(props, ref) {
    let { isQuiet: isQuiet, isDisabled: isDisabled, validationState: validationState, inputProps: inputProps, inputRef: inputRef, triggerProps: triggerProps, triggerRef: triggerRef, autoFocus: autoFocus, style: style, className: className, loadingState: loadingState, isOpen: isOpen, menuTrigger: menuTrigger } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $XxzjX$reactariainteractions.useHover)({});
    let stringFormatter = (0, $XxzjX$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($9e627d9ac6346a53$exports))), '@react-spectrum/combobox');
    let timeout = (0, $XxzjX$react.useRef)(null);
    let [showLoading, setShowLoading] = (0, $XxzjX$react.useState)(false);
    let loadingCircle = /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $XxzjX$reactspectrumprogress.ProgressCircle), {
        "aria-label": stringFormatter.format('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-circleLoader', (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input-circleLoader'))
    });
    let isLoading = loadingState === 'loading' || loadingState === 'filtering';
    let inputValue = inputProps.value;
    let lastInputValue = (0, $XxzjX$react.useRef)(inputValue);
    (0, $XxzjX$react.useEffect)(()=>{
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
    (0, $XxzjX$react.useEffect)(()=>{
        return ()=>{
            if (timeout.current) clearTimeout(timeout.current);
            timeout.current = null;
        };
    }, []);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $XxzjX$reactariafocus.FocusRing), {
        within: true,
        isTextInput: true,
        focusClass: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'is-focused'),
        focusRingClass: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement("div", {
        ...hoverProps,
        ref: ref,
        style: style,
        className: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered
        }, className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $XxzjX$reactspectrumtextfield.TextFieldBase), {
        inputProps: inputProps,
        inputRef: inputRef,
        UNSAFE_className: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-field'),
        inputClassName: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input'),
        validationIconClassName: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input-validationIcon'),
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        validationState: validationState,
        // loading circle should only be displayed if menu is open, if menuTrigger is "manual", or first time load (to stop circle from showing up when user selects an option)
        // TODO: add special case for completionMode: complete as well
        isLoading: showLoading && (isOpen || menuTrigger === 'manual' || loadingState === 'loading'),
        loadingIndicator: loadingState != null ? loadingCircle : undefined,
        disableFocusRing: true
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $XxzjX$reactariainteractions.PressResponder), {
        preventFocusOnPress: true,
        isPressed: isOpen
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, $XxzjX$reactspectrumbutton.FieldButton), {
        ...triggerProps,
        ref: triggerRef,
        UNSAFE_className: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-FieldButton'),
        isQuiet: isQuiet,
        validationState: validationState
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($XxzjX$react))).createElement((0, ($parcel$interopDefault($XxzjX$spectrumiconsuiChevronDownMedium))), {
        UNSAFE_className: (0, $XxzjX$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-Dropdown-chevron')
    })))));
});


//# sourceMappingURL=ComboBox.main.js.map
