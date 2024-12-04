require("./vars.66d47c1b.css");
var $7e20c9d2bb376434$exports = require("./statuslight_vars_css.main.js");
var $8aavy$reactspectrumutils = require("@react-spectrum/utils");
var $8aavy$reactariautils = require("@react-aria/utils");
var $8aavy$react = require("react");
var $8aavy$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "StatusLight", () => $ba01d1490c4da3ea$export$5f84c37a31c6e41c);
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




const $ba01d1490c4da3ea$export$5f84c37a31c6e41c = /*#__PURE__*/ (0, $8aavy$react.forwardRef)(function StatusLight(props, ref) {
    let { variant: variant, children: children, isDisabled: isDisabled, role: role, ...otherProps } = (0, $8aavy$reactspectrumprovider.useProviderProps)(props);
    let domRef = (0, $8aavy$reactspectrumutils.useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $8aavy$reactspectrumutils.useStyleProps)(otherProps);
    if (!children && !props['aria-label']) console.warn('If no children are provided, an aria-label must be specified');
    if (!role && (props['aria-label'] || props['aria-labelledby'])) console.warn('A labelled StatusLight must have a role.');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8aavy$react))).createElement("div", {
        ...(0, $8aavy$reactariautils.filterDOMProps)(otherProps, {
            labelable: !!role
        }),
        ...styleProps,
        role: role,
        className: (0, $8aavy$reactspectrumutils.classNames)((0, ($parcel$interopDefault($7e20c9d2bb376434$exports))), 'spectrum-StatusLight', `spectrum-StatusLight--${variant}`, {
            'is-disabled': isDisabled
        }, styleProps.className),
        ref: domRef
    }, children);
});


//# sourceMappingURL=StatusLight.main.js.map
