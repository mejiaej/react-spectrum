import {ButtonContext as $d2b4bc8c273e7be6$export$24d547caef80ccd1} from "./Button.mjs";
import {Provider as $64fa3d84918910a7$export$2881499e37b75b9a, removeDataAttributes as $64fa3d84918910a7$export$ef03459518577ad4, useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3, useSlot as $64fa3d84918910a7$export$9d4c57ee4c6ffdd8, useSlottedContext as $64fa3d84918910a7$export$fabf2dc03a41866e} from "./utils.mjs";
import {FieldErrorContext as $ee014567cb39d3f0$export$ff05c3ac10437e03} from "./FieldError.mjs";
import {FormContext as $d3e0e05bdfcf66bd$export$c24727297075ec6a} from "./Form.mjs";
import $akiWb$intlStringsmodulejs from "./intlStrings.mjs";
import {LabelContext as $01b77f81d0f07f68$export$75b6ee27786ba447} from "./Label.mjs";
import {ListBoxContext as $eed445e0843c11d0$export$7ff8f37d2d81a48d, ListStateContext as $eed445e0843c11d0$export$7c5906fe4f1f2af2} from "./ListBox.mjs";
import {OverlayTriggerStateContext as $de32f1b87079253c$export$d2f961adcb0afbe} from "./Dialog.mjs";
import {PopoverContext as $07b14b47974efb58$export$9b9a0cd73afb7ca4} from "./Popover.mjs";
import {TextContext as $514c0188e459b4c0$export$9afb8bc826b033ea} from "./Text.mjs";
import {useFocusRing as $akiWb$useFocusRing, useSelect as $akiWb$useSelect, HiddenSelect as $akiWb$HiddenSelect, useLocalizedStringFormatter as $akiWb$useLocalizedStringFormatter} from "react-aria";
import {useSelectState as $akiWb$useSelectState} from "react-stately";
import {CollectionBuilder as $akiWb$CollectionBuilder} from "@react-aria/collections";
import {useResizeObserver as $akiWb$useResizeObserver, filterDOMProps as $akiWb$filterDOMProps} from "@react-aria/utils";
import $akiWb$react, {createContext as $akiWb$createContext, forwardRef as $akiWb$forwardRef, useMemo as $akiWb$useMemo, useRef as $akiWb$useRef, useState as $akiWb$useState, useCallback as $akiWb$useCallback, useContext as $akiWb$useContext} from "react";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 














const $82d7e5349645de74$export$7540cee5be7dc19b = /*#__PURE__*/ (0, $akiWb$createContext)(null);
const $82d7e5349645de74$export$ef445b55be0601bd = /*#__PURE__*/ (0, $akiWb$createContext)(null);
const $82d7e5349645de74$export$ef9b1a59e592288f = /*#__PURE__*/ (0, $akiWb$forwardRef)(function Select(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $82d7e5349645de74$export$7540cee5be7dc19b);
    let { children: children, isDisabled: isDisabled = false, isInvalid: isInvalid = false, isRequired: isRequired = false } = props;
    let content = (0, $akiWb$useMemo)(()=>typeof children === 'function' ? children({
            isOpen: false,
            isDisabled: isDisabled,
            isInvalid: isInvalid,
            isRequired: isRequired,
            isFocused: false,
            isFocusVisible: false,
            defaultChildren: null
        }) : children, [
        children,
        isDisabled,
        isInvalid,
        isRequired
    ]);
    return /*#__PURE__*/ (0, $akiWb$react).createElement((0, $akiWb$CollectionBuilder), {
        content: content
    }, (collection)=>/*#__PURE__*/ (0, $akiWb$react).createElement($82d7e5349645de74$var$SelectInner, {
            props: props,
            collection: collection,
            selectRef: ref
        }));
});
function $82d7e5349645de74$var$SelectInner({ props: props, selectRef: ref, collection: collection }) {
    let { validationBehavior: formValidationBehavior } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)((0, $d3e0e05bdfcf66bd$export$c24727297075ec6a)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let state = (0, $akiWb$useSelectState)({
        ...props,
        collection: collection,
        children: undefined,
        validationBehavior: validationBehavior
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $akiWb$useFocusRing)({
        within: true
    });
    // Get props for child elements from useSelect
    let buttonRef = (0, $akiWb$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { labelProps: labelProps, triggerProps: triggerProps, valueProps: valueProps, menuProps: menuProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $akiWb$useSelect)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label,
        validationBehavior: validationBehavior
    }, state, buttonRef);
    // Make menu width match input + button
    let [buttonWidth, setButtonWidth] = (0, $akiWb$useState)(null);
    let onResize = (0, $akiWb$useCallback)(()=>{
        if (buttonRef.current) setButtonWidth(buttonRef.current.offsetWidth + 'px');
    }, [
        buttonRef
    ]);
    (0, $akiWb$useResizeObserver)({
        ref: buttonRef,
        onResize: onResize
    });
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, $akiWb$useMemo)(()=>({
            isOpen: state.isOpen,
            isFocused: state.isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isRequired: props.isRequired || false
        }), [
        state.isOpen,
        state.isFocused,
        isFocusVisible,
        props.isDisabled,
        validation.isInvalid,
        props.isRequired
    ]);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: renderPropsState,
        defaultClassName: 'react-aria-Select'
    });
    let DOMProps = (0, $akiWb$filterDOMProps)(props);
    delete DOMProps.id;
    let scrollRef = (0, $akiWb$useRef)(null);
    return /*#__PURE__*/ (0, $akiWb$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $82d7e5349645de74$export$7540cee5be7dc19b,
                props
            ],
            [
                $82d7e5349645de74$export$ef445b55be0601bd,
                state
            ],
            [
                $82d7e5349645de74$export$f8f745c04421623f,
                valueProps
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: 'span'
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    ...triggerProps,
                    ref: buttonRef,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    trigger: 'Select',
                    triggerRef: buttonRef,
                    scrollRef: scrollRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': buttonWidth
                    }
                }
            ],
            [
                (0, $eed445e0843c11d0$export$7ff8f37d2d81a48d),
                {
                    ...menuProps,
                    ref: scrollRef
                }
            ],
            [
                (0, $eed445e0843c11d0$export$7c5906fe4f1f2af2),
                state
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, $ee014567cb39d3f0$export$ff05c3ac10437e03),
                validation
            ]
        ]
    }, /*#__PURE__*/ (0, $akiWb$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ...focusProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": state.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-open": state.isOpen || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }), /*#__PURE__*/ (0, $akiWb$react).createElement((0, $akiWb$HiddenSelect), {
        state: state,
        triggerRef: buttonRef,
        label: label,
        name: props.name,
        isDisabled: props.isDisabled
    }));
}
const $82d7e5349645de74$export$f8f745c04421623f = /*#__PURE__*/ (0, $akiWb$createContext)(null);
const $82d7e5349645de74$export$e288731fd71264f0 = /*#__PURE__*/ (0, $akiWb$forwardRef)(function SelectValue(props, ref) {
    var _state_selectedItem, _state_selectedItem1;
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $82d7e5349645de74$export$f8f745c04421623f);
    let state = (0, $akiWb$useContext)($82d7e5349645de74$export$ef445b55be0601bd);
    let { placeholder: placeholder } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)($82d7e5349645de74$export$7540cee5be7dc19b);
    let selectedItem = state.selectedKey != null ? state.collection.getItem(state.selectedKey) : null;
    let rendered = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.props.children;
    if (typeof rendered === 'function') {
        // If the selected item has a function as a child, we need to call it to render to React.JSX.
        let fn = rendered;
        rendered = fn({
            isHovered: false,
            isPressed: false,
            isSelected: false,
            isFocused: false,
            isFocusVisible: false,
            isDisabled: false,
            selectionMode: 'single',
            selectionBehavior: 'toggle'
        });
    }
    let stringFormatter = (0, $akiWb$useLocalizedStringFormatter)((0, ($parcel$interopDefault($akiWb$intlStringsmodulejs))), 'react-aria-components');
    var _ref, _state_selectedItem_value, _state_selectedItem_textValue;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultChildren: (_ref = rendered !== null && rendered !== void 0 ? rendered : placeholder) !== null && _ref !== void 0 ? _ref : stringFormatter.format('selectPlaceholder'),
        defaultClassName: 'react-aria-SelectValue',
        values: {
            selectedItem: (_state_selectedItem_value = (_state_selectedItem = state.selectedItem) === null || _state_selectedItem === void 0 ? void 0 : _state_selectedItem.value) !== null && _state_selectedItem_value !== void 0 ? _state_selectedItem_value : null,
            selectedText: (_state_selectedItem_textValue = (_state_selectedItem1 = state.selectedItem) === null || _state_selectedItem1 === void 0 ? void 0 : _state_selectedItem1.textValue) !== null && _state_selectedItem_textValue !== void 0 ? _state_selectedItem_textValue : null,
            isPlaceholder: !selectedItem
        }
    });
    let DOMProps = (0, $akiWb$filterDOMProps)(props);
    return /*#__PURE__*/ (0, $akiWb$react).createElement("span", {
        ref: ref,
        ...DOMProps,
        ...renderProps,
        "data-placeholder": !selectedItem || undefined
    }, /*#__PURE__*/ (0, $akiWb$react).createElement((0, $514c0188e459b4c0$export$9afb8bc826b033ea).Provider, {
        value: undefined
    }, renderProps.children));
});


export {$82d7e5349645de74$export$7540cee5be7dc19b as SelectContext, $82d7e5349645de74$export$ef445b55be0601bd as SelectStateContext, $82d7e5349645de74$export$ef9b1a59e592288f as Select, $82d7e5349645de74$export$f8f745c04421623f as SelectValueContext, $82d7e5349645de74$export$e288731fd71264f0 as SelectValue};
//# sourceMappingURL=Select.module.js.map
