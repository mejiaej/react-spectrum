require("./vars.b0351abd.css");
var $5ef39e0c80b682c7$exports = require("./icon_vars_css.main.js");
var $hx3aW$reactspectrumutils = require("@react-spectrum/utils");
var $hx3aW$reactariautils = require("@react-aria/utils");
var $hx3aW$reactspectrumprovider = require("@react-spectrum/provider");
var $hx3aW$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Icon", () => $2f297c87d3047269$export$f04a61298a47a40f);
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




function $2f297c87d3047269$var$iconColorValue(value) {
    return `var(--spectrum-semantic-${value}-color-icon)`;
}
const $2f297c87d3047269$var$iconStyleProps = {
    ...(0, $hx3aW$reactspectrumutils.baseStyleProps),
    color: [
        'color',
        $2f297c87d3047269$var$iconColorValue
    ]
};
function $2f297c87d3047269$export$f04a61298a47a40f(props) {
    props = (0, $hx3aW$reactspectrumutils.useSlotProps)(props, 'icon');
    let { children: children, size: size, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $hx3aW$reactspectrumutils.useStyleProps)(otherProps, $2f297c87d3047269$var$iconStyleProps);
    let provider;
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        provider = (0, $hx3aW$reactspectrumprovider.useProvider)();
    } catch  {
    // ignore
    }
    let scale = 'M';
    if (provider != null) scale = provider.scale === 'large' ? 'L' : 'M';
    if (!ariaHidden) ariaHidden = undefined;
    // Use user specified size, falling back to provider scale if size is undef
    let iconSize = size ? size : scale;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($hx3aW$react))).cloneElement(children, {
        ...(0, $hx3aW$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        focusable: 'false',
        'aria-label': ariaLabel,
        'aria-hidden': ariaLabel ? ariaHidden || undefined : true,
        role: 'img',
        className: (0, $hx3aW$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ef39e0c80b682c7$exports))), children.props.className, 'spectrum-Icon', `spectrum-Icon--size${iconSize}`, styleProps.className)
    });
}


//# sourceMappingURL=Icon.main.js.map
