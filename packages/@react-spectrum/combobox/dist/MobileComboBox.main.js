require("./vars.8e9a1ae1.css");
var $afc5a4514aca2340$exports = require("./button_vars_css.main.js");
require("./combobox.1c1869da.css");
var $41fae9390a5a37fa$exports = require("./combobox_css.main.js");
var $9e627d9ac6346a53$exports = require("./intlStrings.main.js");
require("./vars.3ad1a294.css");
var $eb2fc0ee655eff6b$exports = require("./fieldlabel_vars_css.main.js");
require("./vars.3e061265.css");
var $1e139f06a0a4b696$exports = require("./search_vars_css.main.js");
require("./vars.3f2ff1e8.css");
var $2f86633ce5b04f1e$exports = require("./inputgroup_vars_css.main.js");
require("./vars.202cbdb0.css");
var $40cb3a00c193680f$exports = require("./textfield_vars_css.main.js");
var $iKVNA$spectrumiconsuiAlertMedium = require("@spectrum-icons/ui/AlertMedium");
var $iKVNA$spectrumiconsuiCheckmarkMedium = require("@spectrum-icons/ui/CheckmarkMedium");
var $iKVNA$spectrumiconsuiChevronDownMedium = require("@spectrum-icons/ui/ChevronDownMedium");
var $iKVNA$reactspectrumutils = require("@react-spectrum/utils");
var $iKVNA$reactspectrumbutton = require("@react-spectrum/button");
var $iKVNA$reactstatelycombobox = require("@react-stately/combobox");
var $iKVNA$reactariaoverlays = require("@react-aria/overlays");
var $iKVNA$reactspectrumlabel = require("@react-spectrum/label");
var $iKVNA$reactariafocus = require("@react-aria/focus");
var $iKVNA$reactspectrumlistbox = require("@react-spectrum/listbox");
var $iKVNA$reactariautils = require("@react-aria/utils");
var $iKVNA$reactspectrumprogress = require("@react-spectrum/progress");
var $iKVNA$react = require("react");
var $iKVNA$reactariainteractions = require("@react-aria/interactions");
var $iKVNA$reactspectrumtextfield = require("@react-spectrum/textfield");
var $iKVNA$reactspectrumoverlays = require("@react-spectrum/overlays");
var $iKVNA$reactariabutton = require("@react-aria/button");
var $iKVNA$reactariacombobox = require("@react-aria/combobox");
var $iKVNA$reactariadialog = require("@react-aria/dialog");
var $iKVNA$reactarialabel = require("@react-aria/label");
var $iKVNA$reactariai18n = require("@react-aria/i18n");
var $iKVNA$reactariaform = require("@react-aria/form");
var $iKVNA$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "MobileComboBox", () => $e514018f82d1b067$export$7637df911c069b4d);
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





























const $e514018f82d1b067$export$7637df911c069b4d = /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).forwardRef(function MobileComboBox(props, ref) {
    props = (0, $iKVNA$reactspectrumprovider.useProviderProps)(props);
    let { isQuiet: isQuiet, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, validationBehavior: validationBehavior, name: name, formValue: formValue = 'text', allowsCustomValue: allowsCustomValue } = props;
    if (allowsCustomValue) formValue = 'text';
    let { contains: contains } = (0, $iKVNA$reactariai18n.useFilter)({
        sensitivity: 'base'
    });
    let state = (0, $iKVNA$reactstatelycombobox.useComboBoxState)({
        ...props,
        defaultFilter: contains,
        allowsEmptyCollection: true,
        // Needs to be false here otherwise we double up on commitSelection/commitCustomValue calls when
        // user taps on underlay (i.e. initial tap will call setFocused(false) -> commitSelection/commitCustomValue via onBlur,
        // then the closing of the tray will call setFocused(false) again due to cleanup effect)
        shouldCloseOnBlur: false
    });
    let buttonRef = (0, $iKVNA$react.useRef)(null);
    let domRef = (0, $iKVNA$reactspectrumutils.useFocusableRef)(ref, buttonRef);
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, $iKVNA$reactariaoverlays.useOverlayTrigger)({
        type: 'listbox'
    }, state, buttonRef);
    let inputRef = (0, $iKVNA$react.useRef)(null);
    (0, $iKVNA$reactariaform.useFormValidation)({
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
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $iKVNA$reactarialabel.useField)({
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
            (0, $iKVNA$reactariainteractions.setInteractionModality)('keyboard');
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
    (0, $iKVNA$reactariautils.useFormReset)(inputRef, String((_inputProps_value = inputProps.value) !== null && _inputProps_value !== void 0 ? _inputProps_value : ''), formValue === 'text' ? state.setInputValue : state.setSelectedKey);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, ($parcel$interopDefault($iKVNA$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactspectrumlabel.Field), {
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
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement($e514018f82d1b067$export$adfa0abcd5972f7e, {
        ...(0, $iKVNA$reactariautils.mergeProps)(triggerProps, fieldProps, {
            autoFocus: props.autoFocus
        }),
        ref: buttonRef,
        isQuiet: isQuiet,
        isDisabled: isDisabled,
        isPlaceholder: !state.inputValue,
        validationState: validationState,
        onPress: ()=>!isReadOnly && state.open(null, 'manual')
    }, state.inputValue || props.placeholder || '')), /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement("input", {
        ...inputProps,
        ref: inputRef
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactspectrumoverlays.Tray), {
        state: state,
        isFixedHeight: true,
        ...overlayProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement($e514018f82d1b067$var$ComboBoxTray, {
        ...props,
        onClose: state.close,
        overlayProps: overlayProps,
        state: state
    })));
});
const $e514018f82d1b067$export$adfa0abcd5972f7e = /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).forwardRef(function ComboBoxButton(props, ref) {
    let { isQuiet: isQuiet, isDisabled: isDisabled, isPlaceholder: isPlaceholder, validationState: validationState, children: children, style: style, className: className } = props;
    let stringFormatter = (0, $iKVNA$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($9e627d9ac6346a53$exports))), '@react-spectrum/combobox');
    let valueId = (0, $iKVNA$reactariautils.useId)();
    let invalidId = (0, $iKVNA$reactariautils.useId)();
    let validationIcon = validationState === 'invalid' ? /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, ($parcel$interopDefault($iKVNA$spectrumiconsuiAlertMedium))), {
        id: invalidId,
        "aria-label": stringFormatter.format('invalid')
    }) : /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, ($parcel$interopDefault($iKVNA$spectrumiconsuiCheckmarkMedium))), null);
    let validation = /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).cloneElement(validationIcon, {
        UNSAFE_className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-validationIcon', (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input-validationIcon'))
    });
    let objRef = (0, $iKVNA$reactariautils.useObjectRef)(ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $iKVNA$reactariainteractions.useHover)({});
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $iKVNA$reactariabutton.useButton)({
        ...props,
        'aria-labelledby': [
            props['aria-labelledby'],
            props['aria-label'] && !props['aria-labelledby'] ? props.id : null,
            valueId,
            validationState === 'invalid' ? invalidId : null
        ].filter(Boolean).join(' '),
        elementType: 'div'
    }, objRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactariafocus.FocusRing), {
        focusClass: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'is-focused'),
        focusRingClass: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement("div", {
        ...(0, $iKVNA$reactariautils.mergeProps)(hoverProps, buttonProps),
        "aria-haspopup": "dialog",
        ref: objRef,
        style: {
            ...style,
            outline: 'none'
        },
        className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup', {
            'spectrum-InputGroup--quiet': isQuiet,
            'is-disabled': isDisabled,
            'spectrum-InputGroup--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered
        }, (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'mobile-combobox'), className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement("div", {
        className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield', {
            'spectrum-Textfield--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Textfield--valid': validationState === 'valid' && !isDisabled,
            'spectrum-Textfield--quiet': isQuiet
        }, (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-field'))
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement("div", {
        className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-input', {
            'is-hovered': isHovered,
            'is-placeholder': isPlaceholder,
            'is-disabled': isDisabled
        }, (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-InputGroup-input', (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-Field-field')), (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'mobile-input'))
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement("span", {
        id: valueId,
        className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'mobile-value')
    }, children)), validationState && !isDisabled ? validation : null), /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement("div", {
        className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), 'spectrum-FieldButton', {
            'spectrum-FieldButton--quiet': isQuiet,
            'is-active': isPressed,
            'is-disabled': isDisabled,
            'spectrum-FieldButton--invalid': validationState === 'invalid' && !isDisabled,
            'is-hovered': isHovered
        }, (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-FieldButton'))
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, ($parcel$interopDefault($iKVNA$spectrumiconsuiChevronDownMedium))), {
        UNSAFE_className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($2f86633ce5b04f1e$exports))), 'spectrum-Dropdown-chevron')
    }))));
});
function $e514018f82d1b067$var$ComboBoxTray(props) {
    let { state: // completionMode = 'suggest',
    state, isDisabled: isDisabled, validationState: validationState, label: label, overlayProps: overlayProps, loadingState: loadingState, onLoadMore: onLoadMore, onClose: onClose } = props;
    let timeout = (0, $iKVNA$react.useRef)(null);
    let [showLoading, setShowLoading] = (0, $iKVNA$react.useState)(false);
    let inputRef = (0, $iKVNA$react.useRef)(null);
    let buttonRef = (0, $iKVNA$react.useRef)(null);
    let popoverRef = (0, $iKVNA$react.useRef)(null);
    let listBoxRef = (0, $iKVNA$react.useRef)(null);
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let layout = (0, $iKVNA$reactspectrumlistbox.useListBoxLayout)();
    let stringFormatter = (0, $iKVNA$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($9e627d9ac6346a53$exports))), '@react-spectrum/combobox');
    let { inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps } = (0, $iKVNA$reactariacombobox.useComboBox)({
        ...props,
        // completionMode,
        layoutDelegate: layout,
        buttonRef: (0, $iKVNA$reactspectrumutils.unwrapDOMRef)(buttonRef),
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        inputRef: inputRef,
        // Handled outside the tray.
        name: undefined
    }, state);
    (0, ($parcel$interopDefault($iKVNA$react))).useEffect(()=>{
        if (inputRef.current) (0, $iKVNA$reactariafocus.focusSafely)(inputRef.current);
    }, []);
    (0, ($parcel$interopDefault($iKVNA$react))).useEffect(()=>{
        // When the tray closes, set state.isFocused (i.e. the tray input's focus tracker) to false.
        // This is to prevent state.isFocused from being set to true when the tray closes via tapping on the underlay
        // (FocusScope attempts to restore focus to the tray input when tapping outside the tray due to "contain")
        // Have to do this manually since React doesn't call onBlur when a component is unmounted: https://github.com/facebook/react/issues/12363
        if (!state.isOpen && state.isFocused) state.setFocused(false);
    });
    let { dialogProps: dialogProps } = (0, $iKVNA$reactariadialog.useDialog)({
        'aria-labelledby': (0, $iKVNA$reactariautils.useId)(labelProps.id)
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
    let clearButton = /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactspectrumbutton.ClearButton), {
        preventFocus: true,
        "aria-label": stringFormatter.format('clear'),
        excludeFromTabOrder: true,
        onPress: ()=>{
            var _inputRef_current;
            state.setInputValue('');
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        },
        UNSAFE_className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let loadingCircle = /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactspectrumprogress.ProgressCircle), {
        "aria-label": stringFormatter.format('loading'),
        size: "S",
        isIndeterminate: true,
        UNSAFE_className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-circleLoader', (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($40cb3a00c193680f$exports))), 'spectrum-Textfield-circleLoader'))
    });
    // Close the software keyboard on scroll to give the user a bigger area to scroll.
    // But only do this if scrolling with touch, otherwise it can cause issues with touch
    // screen readers.
    let isTouchDown = (0, $iKVNA$react.useRef)(false);
    let onTouchStart = ()=>{
        isTouchDown.current = true;
    };
    let onTouchEnd = ()=>{
        isTouchDown.current = false;
    };
    let onScroll = (0, $iKVNA$react.useCallback)(()=>{
        var _popoverRef_current;
        if (!inputRef.current || document.activeElement !== inputRef.current || !isTouchDown.current) return;
        (_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.focus();
    }, [
        inputRef,
        popoverRef,
        isTouchDown
    ]);
    let inputValue = inputProps.value;
    let lastInputValue = (0, $iKVNA$react.useRef)(inputValue);
    (0, $iKVNA$react.useEffect)(()=>{
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactariafocus.FocusScope), {
        restoreFocus: true,
        contain: true
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement("div", {
        ...(0, $iKVNA$reactariautils.mergeProps)(overlayProps, dialogProps),
        ref: popoverRef,
        className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'tray-dialog')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactariaoverlays.DismissButton), {
        onDismiss: onClose
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactspectrumtextfield.TextFieldBase), {
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
        UNSAFE_className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search', 'spectrum-Textfield', 'spectrum-Search--loadable', {
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }, (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'tray-textfield', {
            'has-label': !!props.label
        })),
        inputClassName: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'tray-textfield-input', (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-input')),
        validationIconClassName: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-validationIcon')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactspectrumlistbox.ListBoxBase), {
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
        renderEmptyState: ()=>loadingState !== 'loading' && /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement("span", {
                className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'no-results')
            }, stringFormatter.format('noResults')),
        UNSAFE_className: (0, $iKVNA$reactspectrumutils.classNames)((0, ($parcel$interopDefault($41fae9390a5a37fa$exports))), 'tray-listbox'),
        ref: listBoxRef,
        onScroll: onScroll,
        onLoadMore: onLoadMore,
        isLoading: isLoading
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($iKVNA$react))).createElement((0, $iKVNA$reactariaoverlays.DismissButton), {
        onDismiss: onClose
    })));
}


//# sourceMappingURL=MobileComboBox.main.js.map
