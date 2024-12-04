require("./vars.a9683aca.css");
var $0f362c72c73357fc$exports = require("./badge_vars_css.main.js");
var $3aISS$reactspectrumutils = require("@react-spectrum/utils");
var $3aISS$reactariautils = require("@react-aria/utils");
var $3aISS$react = require("react");
var $3aISS$reactspectrumtext = require("@react-spectrum/text");
var $3aISS$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Badge", () => $f243611f87a6fe61$export$37acb3580601e69a);
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





const $f243611f87a6fe61$export$37acb3580601e69a = /*#__PURE__*/ (0, $3aISS$react.forwardRef)(function Badge(props, ref) {
    let { children: children, variant: variant, ...otherProps } = (0, $3aISS$reactspectrumprovider.useProviderProps)(props);
    let domRef = (0, $3aISS$reactspectrumutils.useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $3aISS$reactspectrumutils.useStyleProps)(otherProps);
    let isTextOnly = (0, ($parcel$interopDefault($3aISS$react))).Children.toArray(props.children).every((c)=>!/*#__PURE__*/ (0, ($parcel$interopDefault($3aISS$react))).isValidElement(c));
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3aISS$react))).createElement("span", {
        ...(0, $3aISS$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        role: "presentation",
        className: (0, $3aISS$reactspectrumutils.classNames)((0, ($parcel$interopDefault($0f362c72c73357fc$exports))), 'spectrum-Badge', {
            [`spectrum-Badge--${variant}`]: variant
        }, styleProps.className),
        ref: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($3aISS$react))).createElement((0, $3aISS$reactspectrumutils.SlotProvider), {
        slots: {
            icon: {
                size: 'S',
                UNSAFE_className: (0, $3aISS$reactspectrumutils.classNames)((0, ($parcel$interopDefault($0f362c72c73357fc$exports))), 'spectrum-Badge-icon')
            },
            text: {
                UNSAFE_className: (0, $3aISS$reactspectrumutils.classNames)((0, ($parcel$interopDefault($0f362c72c73357fc$exports))), 'spectrum-Badge-label')
            }
        }
    }, typeof children === 'string' || isTextOnly ? /*#__PURE__*/ (0, ($parcel$interopDefault($3aISS$react))).createElement((0, $3aISS$reactspectrumtext.Text), null, children) : children));
});


//# sourceMappingURL=Badge.main.js.map
