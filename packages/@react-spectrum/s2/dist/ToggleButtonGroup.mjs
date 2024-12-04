import {actionGroupStyle as $10401bdc118cbc90$export$641cbcd1f6f6802f} from "./ActionButtonGroup.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $dLMiS$jsx} from "react/jsx-runtime";
import {ToggleButtonGroup as $dLMiS$ToggleButtonGroup} from "react-aria-components";
import {createContext as $dLMiS$createContext, forwardRef as $dLMiS$forwardRef} from "react";

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $b891af863738b7d4$export$298258635ae0dd97 = /*#__PURE__*/ (0, $dLMiS$createContext)(null);
const $b891af863738b7d4$export$40258cc1d95ff477 = /*#__PURE__*/ (0, $dLMiS$forwardRef)(function ToggleButtonGroup(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $b891af863738b7d4$export$298258635ae0dd97);
    let { density: density = 'regular', size: size = 'M', orientation: orientation = 'horizontal', isJustified: isJustified, children: children, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles } = props;
    return /*#__PURE__*/ (0, $dLMiS$jsx)((0, $dLMiS$ToggleButtonGroup), {
        ...props,
        ref: ref,
        style: UNSAFE_style,
        className: UNSAFE_className + (0, $10401bdc118cbc90$export$641cbcd1f6f6802f)({
            size: size,
            density: density,
            orientation: orientation,
            isJustified: isJustified
        }, styles),
        children: /*#__PURE__*/ (0, $dLMiS$jsx)($b891af863738b7d4$export$298258635ae0dd97.Provider, {
            value: props,
            children: children
        })
    });
});


export {$b891af863738b7d4$export$298258635ae0dd97 as ToggleButtonGroupContext, $b891af863738b7d4$export$40258cc1d95ff477 as ToggleButtonGroup};
//# sourceMappingURL=ToggleButtonGroup.mjs.map
