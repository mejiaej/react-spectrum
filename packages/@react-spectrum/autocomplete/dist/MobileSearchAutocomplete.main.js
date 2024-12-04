var $e32120882142a69f$exports = require("./intlStrings.main.js");
require("./searchautocomplete.af2b88b2.css");
var $83da5c2df967875d$exports = require("./searchautocomplete_css.main.js");
require("./vars.3a478514.css");
var $1e139f06a0a4b696$exports = require("./search_vars_css.main.js");
require("./vars.f6fa9f1b.css");
var $2f86633ce5b04f1e$exports = require("./inputgroup_vars_css.main.js");
require("./vars.8b5c28ea.css");
var $40cb3a00c193680f$exports = require("./textfield_vars_css.main.js");
var $56uON$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $56uON$spectrumiconsuiCheckmarkMedium = require("@spectrum-icons/ui/CheckmarkMedium");
var $56uON$reactspectrumutils = require("@react-spectrum/utils");
var $56uON$reactspectrumbutton = require("@react-spectrum/button");
var $56uON$reactstatelycombobox = require("@react-stately/combobox");
var $56uON$reactariaoverlays = require("@react-aria/overlays");
var $56uON$reactspectrumlabel = require("@react-spectrum/label");
var $56uON$reactariafocus = require("@react-aria/focus");
var $56uON$reactspectrumlistbox = require("@react-spectrum/listbox");
var $56uON$spectrumiconsuiMagnifier = require("@spectrum-icons/ui/Magnifier");
var $56uON$reactariautils = require("@react-aria/utils");
var $56uON$reactspectrumprogress = require("@react-spectrum/progress");
var $56uON$react = require("react");
var $56uON$reactariainteractions = require("@react-aria/interactions");
var $56uON$reactspectrumtextfield = require("@react-spectrum/textfield");
var $56uON$reactspectrumoverlays = require("@react-spectrum/overlays");
var $56uON$reactariabutton = require("@react-aria/button");
var $56uON$reactariadialog = require("@react-aria/dialog");
var $56uON$reactarialabel = require("@react-aria/label");
var $56uON$reactariai18n = require("@react-aria/i18n");
var $56uON$reactariaform = require("@react-aria/form");
var $56uON$reactspectrumprovider = require("@react-spectrum/provider");
var $56uON$reactariaautocomplete = require("@react-aria/autocomplete");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "MobileSearchAutocomplete", () => $a9f98e219df0b64d$export$e7a90f7d6b078162);
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



























function $a9f98e219df0b64d$var$ForwardMobileSearchAutocomplete(props, ref) {
    props = (0, $56uON$reactspectrumprovider.useProviderProps)(props);
    let { isQuiet: isQuiet, isDisabled: isDisabled, isRequired: isRequired, validationBehavior: validationBehavior, validate: validate, name: name, isReadOnly: isReadOnly, onSubmit: onSubmit = ()=>{} } = props;
    let { contains: contains } = (0, $56uON$reactariai18n.useFilter)({
        sensitivity: 'base'
    });
    let state = (0, $56uON$reactstatelycombobox.useComboBoxState)({
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
        validate: (0, $56uON$react.useCallback)((v)=>validate === null || validate === void 0 ? void 0 : validate(v.inputValue), [
            validate
        ])
    });
    let buttonRef = (0, $56uON$react.useRef)(null);
    let domRef = (0, $56uON$reactspectrumutils.useFocusableRef)(ref, buttonRef);
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, $56uON$reactariaoverlays.useOverlayTrigger)({
        type: 'listbox'
    }, state, buttonRef);
    let inputRef = (0, $56uON$react.useRef)(null);
    (0, $56uON$reactariaform.useFormValidation)({
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
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $56uON$reactarialabel.useField)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: errorMessage
    });
    // Focus the button and show focus ring when clicking on the label
    labelProps.onClick = ()=>{
        if (!props.isDisabled && buttonRef.current) {
            buttonRef.current.focus();
            (0, $56uON$reactariainteractions.setInteractionModality)('keyboard');
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
    (0, $56uON$reactariautils.useFormReset)(inputRef, state.inputValue, state.setInputValue);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, ($parcel$interopDefault($56uON$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactspectrumlabel.Field), {
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
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement($a9f98e219df0b64d$var$SearchAutocompleteButton, {
        ...(0, $56uON$reactariautils.mergeProps)(triggerProps, fieldProps, {
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
    }, state.inputValue || props.placeholder || '')), /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement("input", {
        ...inputProps,
        ref: inputRef
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactspectrumoverlays.Tray), {
        state: state,
        isFixedHeight: true,
        ...overlayProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement($a9f98e219df0b64d$var$SearchAutocompleteTray, {
        ...props,
        onClose: state.close,
        overlayProps: overlayProps,
        state: state
    })));
}
let $a9f98e219df0b64d$export$e7a90f7d6b078162 = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).forwardRef($a9f98e219df0b64d$var$ForwardMobileSearchAutocomplete);
// any type is because we don't want to call useObjectRef because this is an internal component and we know
// we are always passing an object ref
const $a9f98e219df0b64d$var$SearchAutocompleteButton = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).forwardRef(function SearchAutocompleteButton(props, ref) {
    let searchIcon = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, ($parcel$interopDefault($56uON$spectrumiconsuiMagnifier))), {
        "data-testid": "searchicon"
    });
    let { icon: icon = searchIcon, isQuiet: isQuiet, isDisabled: isDisabled, isReadOnly: isReadOnly, isPlaceholder: isPlaceholder, validationState: validationState, inputValue: inputValue, clearInput: clearInput, children: children, style: style, className: className } = props;
    let stringFormatter = (0, $56uON$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($e32120882142a69f$exports))), '@react-spectrum/autocomplete');
    let valueId = (0, $56uON$reactariautils.useId)();
    let invalidId = (0, $56uON$reactariautils.useId)();
    let validationIcon = validationState === 'invalid' ? /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, ($parcel$interopDefault($56uON$spectrumiconsuiAlertMedium))), {
        id: invalidId,
        "aria-label": stringFormatter.format('invalid')
    }) : /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, ($parcel$interopDefault($56uON$spectrumiconsuiCheckmarkMedium))), null);
    if (icon) icon = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).cloneElement(icon, {
        UNSAFE_className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-icon'),
        size: 'S'
    });
    let clearButton = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactspectrumbutton.ClearButton), {
        onPress: (e)=>{
            var _props_onPress;
            clearInput === null || clearInput === void 0 ? void 0 : clearInput();
            props === null || props === void 0 ? void 0 : (_props_onPress = props.onPress) === null || _props_onPress === void 0 ? void 0 : _props_onPress.call(props, e);
        },
        preventFocus: true,
        "aria-label": stringFormatter.format('clear'),
        excludeFromTabOrder: true,
        UNSAFE_className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let validation = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).cloneElement(validationIcon, {
        UNSAFE_className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-validationIcon', (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input-validationIcon'), (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-validationIcon'))
    });
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $56uON$reactariainteractions.useHover)({});
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $56uON$reactariafocus.useFocusRing)();
    let { buttonProps: buttonProps } = (0, $56uON$reactariabutton.useButton)({
        ...props,
        'aria-labelledby': [
            props['aria-labelledby'],
            props['aria-label'] && !props['aria-labelledby'] ? props.id : null,
            valueId,
            validationState === 'invalid' ? invalidId : null
        ].filter(Boolean).join(' '),
        elementType: 'div'
    }, ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement("div", {
        ...(0, $56uON$reactariautils.mergeProps)(hoverProps, focusProps, buttonProps),
        "aria-haspopup": "dialog",
        ref: ref,
        style: {
            ...style,
            outline: 'none'
        },
        className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered,
            'is-focused': isFocused,
            'focus-ring': isFocusVisible
        }, (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'searchautocomplete', 'mobile-searchautocomplete'), className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement("div", {
        className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Textfield--valid': validationState === 'valid' && !isDisabled,
            'spectrum-Textfield--quiet': isQuiet
        }, (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search', 'spectrum-Search--loadable', {
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }), (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-field'))
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement("div", {
        className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-input', {
            'spectrum-Textfield-inputIcon': !!icon,
            'is-hovered': isHovered,
            'is-placeholder': isPlaceholder,
            'is-disabled': isDisabled,
            'is-quiet': isQuiet,
            'is-focused': isFocused
        }, (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-input'), (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'mobile-input'))
    }, icon, /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement("span", {
        id: valueId,
        className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'mobile-value')
    }, children)), validationState && !isDisabled ? validation : null, (inputValue !== '' || validationState != null) && !isReadOnly && clearButton));
});
function $a9f98e219df0b64d$var$SearchAutocompleteTray(props) {
    let searchIcon = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, ($parcel$interopDefault($56uON$spectrumiconsuiMagnifier))), {
        "data-testid": "searchicon"
    });
    let { state: // completionMode = 'suggest',
    state, icon: icon = searchIcon, isDisabled: isDisabled, validationState: validationState, label: label, overlayProps: overlayProps, loadingState: loadingState, onLoadMore: onLoadMore, onClose: onClose, onSubmit: onSubmit } = props;
    let timeout = (0, $56uON$react.useRef)(null);
    let [showLoading, setShowLoading] = (0, $56uON$react.useState)(false);
    let inputRef = (0, $56uON$react.useRef)(null);
    let popoverRef = (0, $56uON$react.useRef)(null);
    let listBoxRef = (0, $56uON$react.useRef)(null);
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let layout = (0, $56uON$reactspectrumlistbox.useListBoxLayout)();
    let stringFormatter = (0, $56uON$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($e32120882142a69f$exports))), '@react-spectrum/autocomplete');
    let { inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, clearButtonProps: clearButtonProps } = (0, $56uON$reactariaautocomplete.useSearchAutocomplete)({
        ...props,
        layoutDelegate: layout,
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        // Handled outside the tray.
        name: undefined
    }, state);
    (0, ($parcel$interopDefault($56uON$react))).useEffect(()=>{
        if (inputRef.current) (0, $56uON$reactariafocus.focusSafely)(inputRef.current);
    }, []);
    (0, ($parcel$interopDefault($56uON$react))).useEffect(()=>{
        // When the tray closes, set state.isFocused (i.e. the tray input's focus tracker) to false.
        // This is to prevent state.isFocused from being set to true when the tray closes via tapping on the underlay
        // (FocusScope attempts to restore focus to the tray input when tapping outside the tray due to "contain")
        // Have to do this manually since React doesn't call onBlur when a component is unmounted: https://github.com/facebook/react/issues/12363
        if (!state.isOpen && state.isFocused) state.setFocused(false);
    });
    let { dialogProps: dialogProps } = (0, $56uON$reactariadialog.useDialog)({
        'aria-labelledby': (0, $56uON$reactariautils.useId)(labelProps.id)
    }, popoverRef);
    // Override the role of the input to "searchbox" instead of "combobox".
    // Since the listbox is always visible, the combobox role doesn't really give us anything.
    // VoiceOver on iOS reads "double tap to collapse" when focused on the input rather than
    // "double tap to edit text", as with a textbox or searchbox. We'd like double tapping to
    // open the virtual keyboard rather than closing the tray.
    inputProps.role = 'searchbox';
    inputProps['aria-haspopup'] = 'listbox';
    delete inputProps.onTouchEnd;
    let clearButton = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactspectrumbutton.ClearButton), {
        ...clearButtonProps,
        preventFocus: true,
        "aria-label": stringFormatter.format('clear'),
        excludeFromTabOrder: true,
        UNSAFE_className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let loadingCircle = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactspectrumprogress.ProgressCircle), {
        "aria-label": stringFormatter.format('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-circleLoader', (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-circleLoader'))
    });
    // Close the software keyboard on scroll to give the user a bigger area to scroll.
    // But only do this if scrolling with touch, otherwise it can cause issues with touch
    // screen readers.
    let isTouchDown = (0, $56uON$react.useRef)(false);
    let onTouchStart = ()=>{
        isTouchDown.current = true;
    };
    let onTouchEnd = ()=>{
        isTouchDown.current = false;
    };
    let onScroll = (0, $56uON$react.useCallback)(()=>{
        if (!inputRef.current || document.activeElement !== inputRef.current || !isTouchDown.current) return;
        if (popoverRef.current) popoverRef.current.focus();
    }, [
        inputRef,
        popoverRef,
        isTouchDown
    ]);
    let inputValue = inputProps.value;
    let lastInputValue = (0, $56uON$react.useRef)(inputValue);
    (0, $56uON$react.useEffect)(()=>{
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
    if (icon) icon = /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).cloneElement(icon, {
        UNSAFE_className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-icon'),
        size: 'S'
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactariafocus.FocusScope), {
        restoreFocus: true,
        contain: true
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement("div", {
        ...(0, $56uON$reactariautils.mergeProps)(overlayProps, dialogProps),
        ref: popoverRef,
        className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'tray-dialog')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactariaoverlays.DismissButton), {
        onDismiss: onClose
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactspectrumtextfield.TextFieldBase), {
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
        UNSAFE_className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search', 'spectrum-Textfield', 'spectrum-Search--loadable', {
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }, (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'tray-textfield', {
            'has-label': !!props.label
        })),
        inputClassName: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-input'),
        validationIconClassName: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-validationIcon')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactspectrumlistbox.ListBoxBase), {
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
        renderEmptyState: ()=>loadingState !== 'loading' && /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement("span", {
                className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'no-results')
            }, stringFormatter.format('noResults')),
        UNSAFE_className: (0, $56uON$reactspectrumutils.classNames)((0, ($parcel$interopDefault($83da5c2df967875d$exports))), 'tray-listbox'),
        ref: listBoxRef,
        onScroll: onScroll,
        onLoadMore: onLoadMore,
        isLoading: isLoading
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($56uON$react))).createElement((0, $56uON$reactariaoverlays.DismissButton), {
        onDismiss: onClose
    })));
}


//# sourceMappingURL=MobileSearchAutocomplete.main.js.map
