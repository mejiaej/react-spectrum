import "./vars.a9683aca.css";
import $jtG7a$badge_vars_cssmodulejs from "./badge_vars_css.module.js";
import {useDOMRef as $jtG7a$useDOMRef, useStyleProps as $jtG7a$useStyleProps, classNames as $jtG7a$classNames, SlotProvider as $jtG7a$SlotProvider} from "@react-spectrum/utils";
import {filterDOMProps as $jtG7a$filterDOMProps} from "@react-aria/utils";
import $jtG7a$react, {forwardRef as $jtG7a$forwardRef} from "react";
import {Text as $jtG7a$Text} from "@react-spectrum/text";
import {useProviderProps as $jtG7a$useProviderProps} from "@react-spectrum/provider";


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





const $c2a9f60d7159b63f$export$37acb3580601e69a = /*#__PURE__*/ (0, $jtG7a$forwardRef)(function Badge(props, ref) {
    let { children: children, variant: variant, ...otherProps } = (0, $jtG7a$useProviderProps)(props);
    let domRef = (0, $jtG7a$useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $jtG7a$useStyleProps)(otherProps);
    let isTextOnly = (0, $jtG7a$react).Children.toArray(props.children).every((c)=>!/*#__PURE__*/ (0, $jtG7a$react).isValidElement(c));
    return /*#__PURE__*/ (0, $jtG7a$react).createElement("span", {
        ...(0, $jtG7a$filterDOMProps)(otherProps),
        ...styleProps,
        role: "presentation",
        className: (0, $jtG7a$classNames)((0, ($parcel$interopDefault($jtG7a$badge_vars_cssmodulejs))), 'spectrum-Badge', {
            [`spectrum-Badge--${variant}`]: variant
        }, styleProps.className),
        ref: domRef
    }, /*#__PURE__*/ (0, $jtG7a$react).createElement((0, $jtG7a$SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $jtG7a$classNames)((0, ($parcel$interopDefault($jtG7a$badge_vars_cssmodulejs))), 'spectrum-Badge-icon')
            },
            text: {
                UNSAFE_className: (0, $jtG7a$classNames)((0, ($parcel$interopDefault($jtG7a$badge_vars_cssmodulejs))), 'spectrum-Badge-label')
            }
        }
    }, typeof children === 'string' || isTextOnly ? /*#__PURE__*/ (0, $jtG7a$react).createElement((0, $jtG7a$Text), null, children) : children));
});


export {$c2a9f60d7159b63f$export$37acb3580601e69a as Badge};
//# sourceMappingURL=Badge.module.js.map
