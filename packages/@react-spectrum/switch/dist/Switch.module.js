import "./vars.3485d42f.css";
import $cEq2J$toggle_vars_cssmodulejs from "./toggle_vars_css.module.js";
import {useStyleProps as $cEq2J$useStyleProps, useFocusableRef as $cEq2J$useFocusableRef, classNames as $cEq2J$classNames} from "@react-spectrum/utils";
import {FocusRing as $cEq2J$FocusRing} from "@react-aria/focus";
import $cEq2J$react, {forwardRef as $cEq2J$forwardRef, useRef as $cEq2J$useRef} from "react";
import {useHover as $cEq2J$useHover} from "@react-aria/interactions";
import {useProviderProps as $cEq2J$useProviderProps} from "@react-spectrum/provider";
import {useSwitch as $cEq2J$useSwitch} from "@react-aria/switch";
import {useToggleState as $cEq2J$useToggleState} from "@react-stately/toggle";


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







const $8341c396cee1c5fc$export$b5d5cf8927ab7262 = /*#__PURE__*/ (0, $cEq2J$forwardRef)(function Switch(props, ref) {
    props = (0, $cEq2J$useProviderProps)(props);
    let { isEmphasized: isEmphasized = false, isDisabled: isDisabled = false, autoFocus: autoFocus, children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $cEq2J$useStyleProps)(otherProps);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $cEq2J$useHover)({
        isDisabled: isDisabled
    });
    let inputRef = (0, $cEq2J$useRef)(null);
    let domRef = (0, $cEq2J$useFocusableRef)(ref, inputRef);
    let state = (0, $cEq2J$useToggleState)(props);
    let { inputProps: inputProps } = (0, $cEq2J$useSwitch)(props, state, inputRef);
    return /*#__PURE__*/ (0, $cEq2J$react).createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: (0, $cEq2J$classNames)((0, ($parcel$interopDefault($cEq2J$toggle_vars_cssmodulejs))), 'spectrum-ToggleSwitch', {
            'spectrum-ToggleSwitch--quiet': !isEmphasized,
            'is-disabled': isDisabled,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $cEq2J$react).createElement((0, $cEq2J$FocusRing), {
        focusRingClass: (0, $cEq2J$classNames)((0, ($parcel$interopDefault($cEq2J$toggle_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $cEq2J$react).createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: (0, $cEq2J$classNames)((0, ($parcel$interopDefault($cEq2J$toggle_vars_cssmodulejs))), 'spectrum-ToggleSwitch-input')
    })), /*#__PURE__*/ (0, $cEq2J$react).createElement("span", {
        className: (0, $cEq2J$classNames)((0, ($parcel$interopDefault($cEq2J$toggle_vars_cssmodulejs))), 'spectrum-ToggleSwitch-switch')
    }), children && /*#__PURE__*/ (0, $cEq2J$react).createElement("span", {
        className: (0, $cEq2J$classNames)((0, ($parcel$interopDefault($cEq2J$toggle_vars_cssmodulejs))), 'spectrum-ToggleSwitch-label')
    }, children));
});


export {$8341c396cee1c5fc$export$b5d5cf8927ab7262 as Switch};
//# sourceMappingURL=Switch.module.js.map
