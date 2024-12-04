import "./vars.66d47c1b.css";
import $k8ZOF$statuslight_vars_cssmodulejs from "./statuslight_vars_css.module.js";
import {useDOMRef as $k8ZOF$useDOMRef, useStyleProps as $k8ZOF$useStyleProps, classNames as $k8ZOF$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $k8ZOF$filterDOMProps} from "@react-aria/utils";
import $k8ZOF$react, {forwardRef as $k8ZOF$forwardRef} from "react";
import {useProviderProps as $k8ZOF$useProviderProps} from "@react-spectrum/provider";


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




const $df8f173c8bd4ebc0$export$5f84c37a31c6e41c = /*#__PURE__*/ (0, $k8ZOF$forwardRef)(function StatusLight(props, ref) {
    let { variant: variant, children: children, isDisabled: isDisabled, role: role, ...otherProps } = (0, $k8ZOF$useProviderProps)(props);
    let domRef = (0, $k8ZOF$useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $k8ZOF$useStyleProps)(otherProps);
    if (!children && !props['aria-label']) console.warn('If no children are provided, an aria-label must be specified');
    if (!role && (props['aria-label'] || props['aria-labelledby'])) console.warn('A labelled StatusLight must have a role.');
    return /*#__PURE__*/ (0, $k8ZOF$react).createElement("div", {
        ...(0, $k8ZOF$filterDOMProps)(otherProps, {
            labelable: !!role
        }),
        ...styleProps,
        role: role,
        className: (0, $k8ZOF$classNames)((0, ($parcel$interopDefault($k8ZOF$statuslight_vars_cssmodulejs))), 'spectrum-StatusLight', `spectrum-StatusLight--${variant}`, {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: domRef
    }, children);
});


export {$df8f173c8bd4ebc0$export$5f84c37a31c6e41c as StatusLight};
//# sourceMappingURL=StatusLight.module.js.map
