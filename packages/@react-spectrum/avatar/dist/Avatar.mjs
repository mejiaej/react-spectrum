import "./vars.d338152f.css";
import $73onX$avatar_vars_cssmodulejs from "./avatar_vars_css.mjs";
import {useSlotProps as $73onX$useSlotProps, useStyleProps as $73onX$useStyleProps, useDOMRef as $73onX$useDOMRef, dimensionValue as $73onX$dimensionValue, classNames as $73onX$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $73onX$filterDOMProps} from "@react-aria/utils";
import $73onX$react, {forwardRef as $73onX$forwardRef} from "react";
import {useProviderProps as $73onX$useProviderProps} from "@react-spectrum/provider";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $ab0b7b2186c39312$var$DEFAULT_SIZE = 'avatar-size-100';
const $ab0b7b2186c39312$var$SIZE_RE = /^size-\d+/;
const $ab0b7b2186c39312$export$e2255cf6045e8d47 = /*#__PURE__*/ (0, $73onX$forwardRef)(function Avatar(props, ref) {
    props = (0, $73onX$useSlotProps)(props, 'avatar');
    const { alt: alt = '', isDisabled: isDisabled, size: size = $ab0b7b2186c39312$var$DEFAULT_SIZE, src: src, ...otherProps } = (0, $73onX$useProviderProps)(props);
    const { styleProps: styleProps } = (0, $73onX$useStyleProps)(otherProps);
    const domRef = (0, $73onX$useDOMRef)(ref);
    const domProps = (0, $73onX$filterDOMProps)(otherProps);
    // Casting `size` as `any` since `isNaN` expects a `number`, but we want it
    // to handle `string` numbers; e.g. '300' as opposed to 300
    const sizeValue = typeof size !== 'number' && ($ab0b7b2186c39312$var$SIZE_RE.test(size) || !isNaN(size)) ? (0, $73onX$dimensionValue)($ab0b7b2186c39312$var$DEFAULT_SIZE) // override disallowed size values
     : (0, $73onX$dimensionValue)(size || $ab0b7b2186c39312$var$DEFAULT_SIZE);
    return /*#__PURE__*/ (0, $73onX$react).createElement("img", {
        ...styleProps,
        ...domProps,
        alt: alt,
        className: (0, $73onX$classNames)((0, ($parcel$interopDefault($73onX$avatar_vars_cssmodulejs))), 'spectrum-Avatar', {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: domRef,
        src: src,
        style: {
            ...styleProps.style,
            ...sizeValue && {
                height: sizeValue,
                width: sizeValue
            }
        }
    });
});


export {$ab0b7b2186c39312$export$e2255cf6045e8d47 as Avatar};
//# sourceMappingURL=Avatar.module.js.map
