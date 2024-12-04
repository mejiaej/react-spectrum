import "./vars.61a672da.css";
import $8Snfj$well_vars_cssmodulejs from "./well_vars_css.module.js";
import {useDOMRef as $8Snfj$useDOMRef, useStyleProps as $8Snfj$useStyleProps, classNames as $8Snfj$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $8Snfj$filterDOMProps} from "@react-aria/utils";
import $8Snfj$react, {forwardRef as $8Snfj$forwardRef} from "react";


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



const $126c538221395de1$export$d89c679ee2f73242 = /*#__PURE__*/ (0, $8Snfj$forwardRef)(function Well(props, ref) {
    let { children: children, role: role, ...otherProps } = props;
    let domRef = (0, $8Snfj$useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $8Snfj$useStyleProps)(otherProps);
    if (!role && (props['aria-label'] || props['aria-labelledby'])) console.warn('A labelled Well must have a role.');
    return /*#__PURE__*/ (0, $8Snfj$react).createElement("div", {
        ...(0, $8Snfj$filterDOMProps)(otherProps, {
            labelable: !!role
        }),
        ...styleProps,
        role: role,
        ref: domRef,
        className: (0, $8Snfj$classNames)((0, ($parcel$interopDefault($8Snfj$well_vars_cssmodulejs))), 'spectrum-Well', styleProps.className)
    }, children);
});


export {$126c538221395de1$export$d89c679ee2f73242 as Well};
//# sourceMappingURL=Well.module.js.map
