import "./vars.f6adca10.css";
import $1v8IR$radio_vars_cssmodulejs from "./radio_vars_css.mjs";
import {useRadioProvider as $f394bff9e10389a0$export$b054eba74077a826} from "./context.mjs";
import {useStyleProps as $1v8IR$useStyleProps, useFocusableRef as $1v8IR$useFocusableRef, classNames as $1v8IR$classNames} from "@react-spectrum/utils";
import {FocusRing as $1v8IR$FocusRing} from "@react-aria/focus";
import $1v8IR$react, {forwardRef as $1v8IR$forwardRef, useRef as $1v8IR$useRef} from "react";
import {useHover as $1v8IR$useHover} from "@react-aria/interactions";
import {useRadio as $1v8IR$useRadio} from "@react-aria/radio";


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






const $337c5cb580c4e6ba$export$d7b12c4107be0d61 = /*#__PURE__*/ (0, $1v8IR$forwardRef)(function Radio(props, ref) {
    let { isDisabled: isDisabled, children: children, autoFocus: autoFocus, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $1v8IR$useStyleProps)(otherProps);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $1v8IR$useHover)({
        isDisabled: isDisabled
    });
    let inputRef = (0, $1v8IR$useRef)(null);
    let domRef = (0, $1v8IR$useFocusableRef)(ref, inputRef);
    let radioGroupProps = (0, $f394bff9e10389a0$export$b054eba74077a826)();
    let { isEmphasized: isEmphasized, state: state } = radioGroupProps;
    let { inputProps: inputProps } = (0, $1v8IR$useRadio)({
        ...props,
        ...radioGroupProps,
        isDisabled: isDisabled
    }, state, inputRef);
    return /*#__PURE__*/ (0, $1v8IR$react).createElement("label", {
        ...styleProps,
        ...hoverProps,
        ref: domRef,
        className: (0, $1v8IR$classNames)((0, ($parcel$interopDefault($1v8IR$radio_vars_cssmodulejs))), 'spectrum-Radio', {
            // Removing. Pending design feedback.
            // 'spectrum-Radio--labelBelow': labelPosition === 'bottom',
            'spectrum-Radio--quiet': !isEmphasized,
            'is-disabled': isDisabled,
            'is-invalid': state.isInvalid,
            'is-hovered': isHovered
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $1v8IR$react).createElement((0, $1v8IR$FocusRing), {
        focusRingClass: (0, $1v8IR$classNames)((0, ($parcel$interopDefault($1v8IR$radio_vars_cssmodulejs))), 'focus-ring'),
        autoFocus: autoFocus
    }, /*#__PURE__*/ (0, $1v8IR$react).createElement("input", {
        ...inputProps,
        ref: inputRef,
        className: (0, $1v8IR$classNames)((0, ($parcel$interopDefault($1v8IR$radio_vars_cssmodulejs))), 'spectrum-Radio-input')
    })), /*#__PURE__*/ (0, $1v8IR$react).createElement("span", {
        className: (0, $1v8IR$classNames)((0, ($parcel$interopDefault($1v8IR$radio_vars_cssmodulejs))), 'spectrum-Radio-button')
    }), children && /*#__PURE__*/ (0, $1v8IR$react).createElement("span", {
        className: (0, $1v8IR$classNames)((0, ($parcel$interopDefault($1v8IR$radio_vars_cssmodulejs))), 'spectrum-Radio-label')
    }, children));
});


export {$337c5cb580c4e6ba$export$d7b12c4107be0d61 as Radio};
//# sourceMappingURL=Radio.module.js.map
