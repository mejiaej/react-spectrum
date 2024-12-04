var $b856e6788a7ea5bf$exports = require("./Button.main.js");
var $c5ccf687772c0422$exports = require("./utils.main.js");
var $846a838139f2ac6b$exports = require("./FieldError.main.js");
var $35157657e549736b$exports = require("./Form.main.js");
var $d72d752ea1c67b9a$exports = require("./intlStrings.main.js");
var $84ae0bf5bd8e2a5f$exports = require("./Label.main.js");
var $a03b42240404b420$exports = require("./ListBox.main.js");
var $2979ab89b336194b$exports = require("./Dialog.main.js");
var $61e2b7078adb18bc$exports = require("./Popover.main.js");
var $a8a589c28affdc40$exports = require("./Text.main.js");
var $23VoQ$reactaria = require("react-aria");
var $23VoQ$reactstately = require("react-stately");
var $23VoQ$reactariacollections = require("@react-aria/collections");
var $23VoQ$reactariautils = require("@react-aria/utils");
var $23VoQ$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SelectContext", () => $17f0ecdc17674b23$export$7540cee5be7dc19b);
$parcel$export(module.exports, "SelectStateContext", () => $17f0ecdc17674b23$export$ef445b55be0601bd);
$parcel$export(module.exports, "Select", () => $17f0ecdc17674b23$export$ef9b1a59e592288f);
$parcel$export(module.exports, "SelectValueContext", () => $17f0ecdc17674b23$export$f8f745c04421623f);
$parcel$export(module.exports, "SelectValue", () => $17f0ecdc17674b23$export$e288731fd71264f0);
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














const $17f0ecdc17674b23$export$7540cee5be7dc19b = /*#__PURE__*/ (0, $23VoQ$react.createContext)(null);
const $17f0ecdc17674b23$export$ef445b55be0601bd = /*#__PURE__*/ (0, $23VoQ$react.createContext)(null);
const $17f0ecdc17674b23$export$ef9b1a59e592288f = /*#__PURE__*/ (0, $23VoQ$react.forwardRef)(function Select(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $17f0ecdc17674b23$export$7540cee5be7dc19b);
    let { children: children, isDisabled: isDisabled = false, isInvalid: isInvalid = false, isRequired: isRequired = false } = props;
    let content = (0, $23VoQ$react.useMemo)(()=>typeof children === 'function' ? children({
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($23VoQ$react))).createElement((0, $23VoQ$reactariacollections.CollectionBuilder), {
        content: content
    }, (collection)=>/*#__PURE__*/ (0, ($parcel$interopDefault($23VoQ$react))).createElement($17f0ecdc17674b23$var$SelectInner, {
            props: props,
            collection: collection,
            selectRef: ref
        }));
});
function $17f0ecdc17674b23$var$SelectInner({ props: props, selectRef: ref, collection: collection }) {
    let { validationBehavior: formValidationBehavior } = (0, $c5ccf687772c0422$exports.useSlottedContext)((0, $35157657e549736b$exports.FormContext)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let state = (0, $23VoQ$reactstately.useSelectState)({
        ...props,
        collection: collection,
        children: undefined,
        validationBehavior: validationBehavior
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $23VoQ$reactaria.useFocusRing)({
        within: true
    });
    // Get props for child elements from useSelect
    let buttonRef = (0, $23VoQ$react.useRef)(null);
    let [labelRef, label] = (0, $c5ccf687772c0422$exports.useSlot)();
    let { labelProps: labelProps, triggerProps: triggerProps, valueProps: valueProps, menuProps: menuProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $23VoQ$reactaria.useSelect)({
        ...(0, $c5ccf687772c0422$exports.removeDataAttributes)(props),
        label: label,
        validationBehavior: validationBehavior
    }, state, buttonRef);
    // Make menu width match input + button
    let [buttonWidth, setButtonWidth] = (0, $23VoQ$react.useState)(null);
    let onResize = (0, $23VoQ$react.useCallback)(()=>{
        if (buttonRef.current) setButtonWidth(buttonRef.current.offsetWidth + 'px');
    }, [
        buttonRef
    ]);
    (0, $23VoQ$reactariautils.useResizeObserver)({
        ref: buttonRef,
        onResize: onResize
    });
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, $23VoQ$react.useMemo)(()=>({
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
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        values: renderPropsState,
        defaultClassName: 'react-aria-Select'
    });
    let DOMProps = (0, $23VoQ$reactariautils.filterDOMProps)(props);
    delete DOMProps.id;
    let scrollRef = (0, $23VoQ$react.useRef)(null);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($23VoQ$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $17f0ecdc17674b23$export$7540cee5be7dc19b,
                props
            ],
            [
                $17f0ecdc17674b23$export$ef445b55be0601bd,
                state
            ],
            [
                $17f0ecdc17674b23$export$f8f745c04421623f,
                valueProps
            ],
            [
                (0, $84ae0bf5bd8e2a5f$exports.LabelContext),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: 'span'
                }
            ],
            [
                (0, $b856e6788a7ea5bf$exports.ButtonContext),
                {
                    ...triggerProps,
                    ref: buttonRef,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, $2979ab89b336194b$exports.OverlayTriggerStateContext),
                state
            ],
            [
                (0, $61e2b7078adb18bc$exports.PopoverContext),
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
                (0, $a03b42240404b420$exports.ListBoxContext),
                {
                    ...menuProps,
                    ref: scrollRef
                }
            ],
            [
                (0, $a03b42240404b420$exports.ListStateContext),
                state
            ],
            [
                (0, $a8a589c28affdc40$exports.TextContext),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, $846a838139f2ac6b$exports.FieldErrorContext),
                validation
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($23VoQ$react))).createElement("div", {
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
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($23VoQ$react))).createElement((0, $23VoQ$reactaria.HiddenSelect), {
        state: state,
        triggerRef: buttonRef,
        label: label,
        name: props.name,
        isDisabled: props.isDisabled
    }));
}
const $17f0ecdc17674b23$export$f8f745c04421623f = /*#__PURE__*/ (0, $23VoQ$react.createContext)(null);
const $17f0ecdc17674b23$export$e288731fd71264f0 = /*#__PURE__*/ (0, $23VoQ$react.forwardRef)(function SelectValue(props, ref) {
    var _state_selectedItem, _state_selectedItem1;
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $17f0ecdc17674b23$export$f8f745c04421623f);
    let state = (0, $23VoQ$react.useContext)($17f0ecdc17674b23$export$ef445b55be0601bd);
    let { placeholder: placeholder } = (0, $c5ccf687772c0422$exports.useSlottedContext)($17f0ecdc17674b23$export$7540cee5be7dc19b);
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
    let stringFormatter = (0, $23VoQ$reactaria.useLocalizedStringFormatter)((0, ($parcel$interopDefault($d72d752ea1c67b9a$exports))), 'react-aria-components');
    var _ref, _state_selectedItem_value, _state_selectedItem_textValue;
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        defaultChildren: (_ref = rendered !== null && rendered !== void 0 ? rendered : placeholder) !== null && _ref !== void 0 ? _ref : stringFormatter.format('selectPlaceholder'),
        defaultClassName: 'react-aria-SelectValue',
        values: {
            selectedItem: (_state_selectedItem_value = (_state_selectedItem = state.selectedItem) === null || _state_selectedItem === void 0 ? void 0 : _state_selectedItem.value) !== null && _state_selectedItem_value !== void 0 ? _state_selectedItem_value : null,
            selectedText: (_state_selectedItem_textValue = (_state_selectedItem1 = state.selectedItem) === null || _state_selectedItem1 === void 0 ? void 0 : _state_selectedItem1.textValue) !== null && _state_selectedItem_textValue !== void 0 ? _state_selectedItem_textValue : null,
            isPlaceholder: !selectedItem
        }
    });
    let DOMProps = (0, $23VoQ$reactariautils.filterDOMProps)(props);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($23VoQ$react))).createElement("span", {
        ref: ref,
        ...DOMProps,
        ...renderProps,
        "data-placeholder": !selectedItem || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($23VoQ$react))).createElement((0, $a8a589c28affdc40$exports.TextContext).Provider, {
        value: undefined
    }, renderProps.children));
});


//# sourceMappingURL=Select.main.js.map
