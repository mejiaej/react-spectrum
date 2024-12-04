import "./vars.b0351abd.css";
import $hJE0A$icon_vars_cssmodulejs from "./icon_vars_css.mjs";
import {baseStyleProps as $hJE0A$baseStyleProps, useSlotProps as $hJE0A$useSlotProps, useStyleProps as $hJE0A$useStyleProps, classNames as $hJE0A$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $hJE0A$filterDOMProps} from "@react-aria/utils";
import {useProvider as $hJE0A$useProvider} from "@react-spectrum/provider";
import $hJE0A$react from "react";


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




function $6bfb67578ee6effd$var$iconColorValue(value) {
    return `var(--spectrum-semantic-${value}-color-icon)`;
}
const $6bfb67578ee6effd$var$iconStyleProps = {
    ...(0, $hJE0A$baseStyleProps),
    color: [
        'color',
        $6bfb67578ee6effd$var$iconColorValue
    ]
};
function $6bfb67578ee6effd$export$f04a61298a47a40f(props) {
    props = (0, $hJE0A$useSlotProps)(props, 'icon');
    let { children: children, size: size, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $hJE0A$useStyleProps)(otherProps, $6bfb67578ee6effd$var$iconStyleProps);
    let provider;
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        provider = (0, $hJE0A$useProvider)();
    } catch  {
    // ignore
    }
    let scale = 'M';
    if (provider != null) scale = provider.scale === 'large' ? 'L' : 'M';
    if (!ariaHidden) ariaHidden = undefined;
    // Use user specified size, falling back to provider scale if size is undef
    let iconSize = size ? size : scale;
    return /*#__PURE__*/ (0, $hJE0A$react).cloneElement(children, {
        ...(0, $hJE0A$filterDOMProps)(otherProps),
        ...styleProps,
        focusable: 'false',
        'aria-label': ariaLabel,
        'aria-hidden': ariaLabel ? ariaHidden || undefined : true,
        role: 'img',
        className: (0, $hJE0A$classNames)((0, ($parcel$interopDefault($hJE0A$icon_vars_cssmodulejs))), children.props.className, 'spectrum-Icon', `spectrum-Icon--size${iconSize}`, styleProps.className)
    });
}


export {$6bfb67578ee6effd$export$f04a61298a47a40f as Icon};
//# sourceMappingURL=Icon.module.js.map
