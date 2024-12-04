var $e32120882142a69f$exports = require("./intlStrings.main.js");
var $a9f98e219df0b64d$exports = require("./MobileSearchAutocomplete.main.js");
require("./searchautocomplete.af2b88b2.css");
var $83da5c2df967875d$exports = require("./searchautocomplete_css.main.js");
require("./vars.3a478514.css");
var $1e139f06a0a4b696$exports = require("./search_vars_css.main.js");
require("./vars.f6fa9f1b.css");
var $2f86633ce5b04f1e$exports = require("./inputgroup_vars_css.main.js");
require("./vars.8b5c28ea.css");
var $40cb3a00c193680f$exports = require("./textfield_vars_css.main.js");
var $k6PeR$reactspectrumutils = require("@react-spectrum/utils");
var $k6PeR$reactspectrumbutton = require("@react-spectrum/button");
var $k6PeR$reactspectrumlabel = require("@react-spectrum/label");
var $k6PeR$reactariautils = require("@react-aria/utils");
var $k6PeR$reactariafocus = require("@react-aria/focus");
var $k6PeR$reactspectrumlistbox = require("@react-spectrum/listbox");
var $k6PeR$spectrumiconsuiMagnifier = require("@spectrum-icons/ui/Magnifier");
var $k6PeR$reactspectrumoverlays = require("@react-spectrum/overlays");
var $k6PeR$reactspectrumprogress = require("@react-spectrum/progress");
var $k6PeR$react = require("react");
var $k6PeR$reactspectrumtextfield = require("@react-spectrum/textfield");
var $k6PeR$reactstatelycombobox = require("@react-stately/combobox");
var $k6PeR$reactariai18n = require("@react-aria/i18n");
var $k6PeR$reactspectrumform = require("@react-spectrum/form");
var $k6PeR$reactariainteractions = require("@react-aria/interactions");
var $k6PeR$reactspectrumprovider = require("@react-spectrum/provider");
var $k6PeR$reactariaautocomplete = require("@react-aria/autocomplete");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SearchAutocomplete", () => $dcf500d58a031ca6$export$dd65332a5b19fa63);
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






















function $dcf500d58a031ca6$var$SearchAutocomplete(props, ref) {
    props = (0, $k6PeR$reactspectrumprovider.useProviderProps)(props);
    props = (0, $k6PeR$reactspectrumform.useFormProps)(props);
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead.');
    let isMobile = (0, $k6PeR$reactspectrumutils.useIsMobileDevice)();
    if (isMobile) // menuTrigger=focus/manual don't apply to mobile searchwithin
    return /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, $a9f98e219df0b64d$exports.MobileSearchAutocomplete), {
        ...props,
        menuTrigger: "input",
        ref: ref
    });
    else return /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement($dcf500d58a031ca6$var$SearchAutocompleteBase, {
        ...props,
        ref: ref
    });
}
function $dcf500d58a031ca6$var$ForwardSearchAutocompleteBase(props, ref) {
    props = (0, $k6PeR$reactspectrumprovider.useProviderProps)(props);
    let { menuTrigger: menuTrigger = 'input', shouldFlip: shouldFlip = true, direction: direction = 'bottom', align: align = 'start', isQuiet: isQuiet, menuWidth: customMenuWidth, loadingState: loadingState, onLoadMore: onLoadMore, onSubmit: onSubmit = ()=>{}, validate: validate } = props;
    let stringFormatter = (0, $k6PeR$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($e32120882142a69f$exports))), '@react-spectrum/autocomplete');
    let isAsync = loadingState != null;
    let popoverRef = (0, $k6PeR$react.useRef)(null);
    let unwrappedPopoverRef = (0, $k6PeR$reactspectrumutils.useUnwrapDOMRef)(popoverRef);
    let listBoxRef = (0, $k6PeR$react.useRef)(null);
    let inputRef = (0, $k6PeR$react.useRef)(null);
    let domRef = (0, $k6PeR$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let { contains: contains } = (0, $k6PeR$reactariai18n.useFilter)({
        sensitivity: 'base'
    });
    let state = (0, $k6PeR$reactstatelycombobox.useComboBoxState)({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: isAsync,
        allowsCustomValue: true,
        onSelectionChange: (key)=>key !== null && onSubmit(null, key),
        selectedKey: undefined,
        defaultSelectedKey: undefined,
        validate: (0, $k6PeR$react.useCallback)((v)=>validate === null || validate === void 0 ? void 0 : validate(v.inputValue), [
            validate
        ])
    });
    let layout = (0, $k6PeR$reactspectrumlistbox.useListBoxLayout)();
    let { inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, clearButtonProps: clearButtonProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $k6PeR$reactariaautocomplete.useSearchAutocomplete)({
        ...props,
        layoutDelegate: layout,
        popoverRef: unwrappedPopoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        menuTrigger: menuTrigger
    }, state);
    // Measure the width of the inputfield to inform the width of the menu (below).
    let [menuWidth, setMenuWidth] = (0, $k6PeR$react.useState)(0);
    let { scale: scale } = (0, $k6PeR$reactspectrumprovider.useProvider)();
    let onResize = (0, $k6PeR$react.useCallback)(()=>{
        if (inputRef.current) {
            let inputWidth = inputRef.current.offsetWidth;
            setMenuWidth(inputWidth);
        }
    }, [
        inputRef,
        setMenuWidth
    ]);
    (0, $k6PeR$reactspectrumutils.useResizeObserver)({
        ref: domRef,
        onResize: onResize
    });
    (0, $k6PeR$reactariautils.useLayoutEffect)(onResize, [
        scale,
        onResize
    ]);
    let width = isQuiet ? undefined : menuWidth;
    let style = {
        width: customMenuWidth ? (0, $k6PeR$reactspectrumutils.dimensionValue)(customMenuWidth) : width,
        minWidth: isQuiet ? `calc(${menuWidth}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))` : menuWidth
    };
    var _state_focusStrategy;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, ($parcel$interopDefault($k6PeR$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, $k6PeR$reactspectrumlabel.Field), {
        ...props,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        labelProps: labelProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        ref: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement($dcf500d58a031ca6$var$SearchAutocompleteInput, {
        ...props,
        isOpen: state.isOpen,
        loadingState: loadingState,
        inputProps: inputProps,
        inputRef: inputRef,
        clearButtonProps: clearButtonProps,
        validationState: props.validationState || (isInvalid ? 'invalid' : undefined)
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, $k6PeR$reactspectrumoverlays.Popover), {
        state: state,
        UNSAFE_style: style,
        UNSAFE_className: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-popover', {
            'spectrum-InputGroup-popover--quiet': isQuiet
        }),
        ref: popoverRef,
        triggerRef: inputRef,
        placement: `${direction} ${align}`,
        hideArrow: true,
        isNonModal: true,
        shouldFlip: shouldFlip
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, $k6PeR$reactspectrumlistbox.ListBoxBase), {
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
        renderEmptyState: ()=>isAsync && /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement("span", {
                className: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'no-results')
            }, stringFormatter.format('noResults'))
    })));
}
let $dcf500d58a031ca6$var$SearchAutocompleteBase = /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).forwardRef($dcf500d58a031ca6$var$ForwardSearchAutocompleteBase);
// any type is because we don't want to call useObjectRef because this is an internal component and we know
// we are always passing an object ref
function $dcf500d58a031ca6$var$ForwardSearchAutocompleteInput(props, ref) {
    let searchIcon = /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, ($parcel$interopDefault($k6PeR$spectrumiconsuiMagnifier))), {
        "data-testid": "searchicon"
    });
    let { icon: icon = searchIcon, isQuiet: isQuiet, isDisabled: isDisabled, isReadOnly: isReadOnly, validationState: validationState, inputProps: inputProps, inputRef: inputRef, autoFocus: autoFocus, style: style, className: className, loadingState: loadingState, isOpen: isOpen, menuTrigger: menuTrigger, clearButtonProps: clearButtonProps } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $k6PeR$reactariainteractions.useHover)({});
    let stringFormatter = (0, $k6PeR$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($e32120882142a69f$exports))), '@react-spectrum/autocomplete');
    let domProps = (0, $k6PeR$reactariautils.filterDOMProps)(props);
    let timeout = (0, $k6PeR$react.useRef)(null);
    let [showLoading, setShowLoading] = (0, $k6PeR$react.useState)(false);
    let loadingCircle = /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, $k6PeR$reactspectrumprogress.ProgressCircle), {
        "aria-label": stringFormatter.format('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-circleLoader', (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input-circleLoader'), (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-circleLoader'))
    });
    let clearButton = /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, $k6PeR$reactspectrumbutton.ClearButton), {
        ...clearButtonProps,
        preventFocus: true,
        UNSAFE_className: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let isLoading = loadingState === 'loading' || loadingState === 'filtering';
    let inputValue = inputProps.value;
    let lastInputValue = (0, $k6PeR$react.useRef)(inputValue);
    (0, $k6PeR$react.useEffect)(()=>{
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, $k6PeR$reactariafocus.FocusRing), {
        within: true,
        isTextInput: true,
        focusClass: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'is-focused'),
        focusRingClass: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement("div", {
        ...hoverProps,
        ref: ref,
        style: style,
        className: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered
        }, (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'searchautocomplete'), className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).createElement((0, $k6PeR$reactspectrumtextfield.TextFieldBase), {
        ...domProps,
        inputProps: inputProps,
        inputRef: inputRef,
        UNSAFE_className: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search', 'spectrum-Search--loadable', 'spectrum-Textfield', {
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }, (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-field')),
        inputClassName: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-input'),
        validationIconClassName: (0, $k6PeR$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-validationIcon'),
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
let $dcf500d58a031ca6$var$SearchAutocompleteInput = /*#__PURE__*/ (0, ($parcel$interopDefault($k6PeR$react))).forwardRef($dcf500d58a031ca6$var$ForwardSearchAutocompleteInput);
/**
 * A SearchAutocomplete is a searchfield that supports a dynamic list of suggestions.
 */ let $dcf500d58a031ca6$export$dd65332a5b19fa63 = /*#__PURE__*/ (0, $k6PeR$react.forwardRef)($dcf500d58a031ca6$var$SearchAutocomplete);


//# sourceMappingURL=SearchAutocomplete.main.js.map
