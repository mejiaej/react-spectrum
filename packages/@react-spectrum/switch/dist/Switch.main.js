require("./vars.3485d42f.css");
var $faeb9d1b92049ba7$exports = require("./toggle_vars_css.main.js");
var $3aWe4$reactspectrumutils = require("@react-spectrum/utils");
var $3aWe4$reactariafocus = require("@react-aria/focus");
var $3aWe4$react = require("react");
var $3aWe4$reactariainteractions = require("@react-aria/interactions");
var $3aWe4$reactspectrumprovider = require("@react-spectrum/provider");
var $3aWe4$reactariaswitch = require("@react-aria/switch");
var $3aWe4$reactstatelytoggle = require("@react-stately/toggle");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Switch", () => $e216104aee091306$export$b5d5cf8927ab7262);
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







const $e216104aee091306$export$b5d5cf8927ab7262 = /*#__PURE__*/ (0, $3aWe4$react.forwardRef)(function Switch(props, ref) {
    props = (0, $3aWe4$reactspectrumprovider.useProviderProps)(props);
    let { isEmphasized: isEmphasized = false, isDisabled: isDisabled = false, autoFocus: autoFocus, children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $3aWe4$reactspectrumutils.useStyleProps)(otherProps);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $3aWe4$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let inputRef = (0, $3aWe4$react.useRef)(null);
    let domRef = (0, $3aWe4$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let state = (0, $3aWe4$reactstatelytoggle.useToggleState)(props);
    let { inputProps: inputProps } = (0, $3aWe4$reactariaswitch.useSwitch)(props, state, inputRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3aWe4$react))).createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: (0, $3aWe4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($faeb9d1b92049ba7$exports))), 'spectrum-ToggleSwitch', {
            'spectrum-ToggleSwitch--quiet': !isEmphasized,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3aWe4$react))).createElement((0, $3aWe4$reactariafocus.FocusRing), {
        focusRingClass: (0, $3aWe4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($faeb9d1b92049ba7$exports))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3aWe4$react))).createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: (0, $3aWe4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($faeb9d1b92049ba7$exports))), 'spectrum-ToggleSwitch-input')
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($3aWe4$react))).createElement("span", {
        className: (0, $3aWe4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($faeb9d1b92049ba7$exports))), 'spectrum-ToggleSwitch-switch')
    }), children && /*#__PURE__*/ (0, ($parcel$interopDefault($3aWe4$react))).createElement("span", {
        className: (0, $3aWe4$reactspectrumutils.classNames)((0, ($parcel$interopDefault($faeb9d1b92049ba7$exports))), 'spectrum-ToggleSwitch-label')
    }, children));
});


//# sourceMappingURL=Switch.main.js.map
