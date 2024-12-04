var $bdf3bf7fe71fe120$exports = require("./context.main.js");
require("./vars.b0b62fb7.css");
var $591f3ccba6339bdb$exports = require("./checkbox_vars_css.main.js");
var $lfSyy$reactariacomponents = require("react-aria-components");
var $lfSyy$spectrumiconsuiCheckmarkSmall = require("@spectrum-icons/ui/CheckmarkSmall");
var $lfSyy$reactspectrumutils = require("@react-spectrum/utils");
var $lfSyy$spectrumiconsuiDashSmall = require("@spectrum-icons/ui/DashSmall");
var $lfSyy$reactariafocus = require("@react-aria/focus");
var $lfSyy$react = require("react");
var $lfSyy$reactariacheckbox = require("@react-aria/checkbox");
var $lfSyy$reactspectrumform = require("@react-spectrum/form");
var $lfSyy$reactariainteractions = require("@react-aria/interactions");
var $lfSyy$reactspectrumprovider = require("@react-spectrum/provider");
var $lfSyy$reactstatelytoggle = require("@react-stately/toggle");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Checkbox", () => $096ccd12d23dd6cc$export$48513f6b9f8ce62d);
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












const $096ccd12d23dd6cc$export$48513f6b9f8ce62d = /*#__PURE__*/ (0, $lfSyy$react.forwardRef)(function Checkbox(props, ref) {
    let originalProps = props;
    let inputRef = (0, $lfSyy$react.useRef)(null);
    let domRef = (0, $lfSyy$reactspectrumutils.useFocusableRef)(ref, inputRef);
    [props, domRef] = (0, $lfSyy$reactariacomponents.useContextProps)(props, domRef, (0, $lfSyy$reactariacomponents.CheckboxContext));
    props = (0, $lfSyy$reactspectrumprovider.useProviderProps)(props);
    props = (0, $lfSyy$reactspectrumform.useFormProps)(props);
    let { isIndeterminate: isIndeterminate = false, isEmphasized: isEmphasized = false, autoFocus: autoFocus, children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $lfSyy$reactspectrumutils.useStyleProps)(otherProps);
    // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
    // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
    // but since the checkbox won't move in and out of a group, it should be safe.
    let groupState = (0, $lfSyy$react.useContext)((0, $bdf3bf7fe71fe120$exports.CheckboxGroupContext));
    let { inputProps: inputProps, isInvalid: isInvalid, isDisabled: isDisabled } = groupState ? (0, $lfSyy$reactariacheckbox.useCheckboxGroupItem)({
        ...props,
        // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
        // it's passed explicitly here to avoid typescript error (requires ignore).
        // @ts-ignore
        value: props.value,
        // Only pass isRequired and validationState to react-aria if they came from
        // the props for this individual checkbox, and not from the group via context.
        isRequired: originalProps.isRequired,
        validationState: originalProps.validationState,
        isInvalid: originalProps.isInvalid
    }, groupState, inputRef) : (0, $lfSyy$reactariacheckbox.useCheckbox)(props, (0, $lfSyy$reactstatelytoggle.useToggleState)(props), inputRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $lfSyy$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let markIcon = isIndeterminate ? /*#__PURE__*/ (0, ($parcel$interopDefault($lfSyy$react))).createElement((0, ($parcel$interopDefault($lfSyy$spectrumiconsuiDashSmall))), {
        UNSAFE_className: (0, $lfSyy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($591f3ccba6339bdb$exports))), 'spectrum-Checkbox-partialCheckmark')
    }) : /*#__PURE__*/ (0, ($parcel$interopDefault($lfSyy$react))).createElement((0, ($parcel$interopDefault($lfSyy$spectrumiconsuiCheckmarkSmall))), {
        UNSAFE_className: (0, $lfSyy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($591f3ccba6339bdb$exports))), 'spectrum-Checkbox-checkmark')
    });
    if (groupState) {
        for (let key of [
            'isSelected',
            'defaultSelected',
            'isEmphasized'
        ])if (originalProps[key] != null) console.warn(`${key} is unsupported on individual <Checkbox> elements within a <CheckboxGroup>. Please apply these props to the group instead.`);
        if (props.value == null) console.warn('A <Checkbox> element within a <CheckboxGroup> requires a `value` property.');
    }
    return /*#__PURE__*/ (0, ($parcel$interopDefault($lfSyy$react))).createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: (0, $lfSyy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($591f3ccba6339bdb$exports))), 'spectrum-Checkbox', {
            'is-checked': inputProps.checked,
            'is-indeterminate': isIndeterminate,
            'spectrum-Checkbox--quiet': !isEmphasized,
            'is-invalid': isInvalid,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($lfSyy$react))).createElement((0, $lfSyy$reactariafocus.FocusRing), {
        focusRingClass: (0, $lfSyy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($591f3ccba6339bdb$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($lfSyy$react))).createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: (0, $lfSyy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($591f3ccba6339bdb$exports))), 'spectrum-Checkbox-input')
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($lfSyy$react))).createElement("span", {
        className: (0, $lfSyy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($591f3ccba6339bdb$exports))), 'spectrum-Checkbox-box')
    }, markIcon), children && /*#__PURE__*/ (0, ($parcel$interopDefault($lfSyy$react))).createElement("span", {
        className: (0, $lfSyy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($591f3ccba6339bdb$exports))), 'spectrum-Checkbox-label')
    }, children));
});


//# sourceMappingURL=Checkbox.main.js.map
