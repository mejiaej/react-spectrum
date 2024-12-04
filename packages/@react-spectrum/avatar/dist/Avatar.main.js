require("./vars.d338152f.css");
var $d22788318b5f79eb$exports = require("./avatar_vars_css.main.js");
var $3FJGB$reactspectrumutils = require("@react-spectrum/utils");
var $3FJGB$reactariautils = require("@react-aria/utils");
var $3FJGB$react = require("react");
var $3FJGB$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Avatar", () => $cc830936d47bae2b$export$e2255cf6045e8d47);
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




const $cc830936d47bae2b$var$DEFAULT_SIZE = 'avatar-size-100';
const $cc830936d47bae2b$var$SIZE_RE = /^size-\d+/;
const $cc830936d47bae2b$export$e2255cf6045e8d47 = /*#__PURE__*/ (0, $3FJGB$react.forwardRef)(function Avatar(props, ref) {
    props = (0, $3FJGB$reactspectrumutils.useSlotProps)(props, 'avatar');
    const { alt: alt = '', isDisabled: isDisabled, size: size = $cc830936d47bae2b$var$DEFAULT_SIZE, src: src, ...otherProps } = (0, $3FJGB$reactspectrumprovider.useProviderProps)(props);
    const { styleProps: styleProps } = (0, $3FJGB$reactspectrumutils.useStyleProps)(otherProps);
    const domRef = (0, $3FJGB$reactspectrumutils.useDOMRef)(ref);
    const domProps = (0, $3FJGB$reactariautils.filterDOMProps)(otherProps);
    // Casting `size` as `any` since `isNaN` expects a `number`, but we want it
    // to handle `string` numbers; e.g. '300' as opposed to 300
    const sizeValue = typeof size !== 'number' && ($cc830936d47bae2b$var$SIZE_RE.test(size) || !isNaN(size)) ? (0, $3FJGB$reactspectrumutils.dimensionValue)($cc830936d47bae2b$var$DEFAULT_SIZE) // override disallowed size values
     : (0, $3FJGB$reactspectrumutils.dimensionValue)(size || $cc830936d47bae2b$var$DEFAULT_SIZE);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3FJGB$react))).createElement("img", {
        ...styleProps,
        ...domProps,
        alt: alt,
        className: (0, $3FJGB$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d22788318b5f79eb$exports))), 'spectrum-Avatar', {
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


//# sourceMappingURL=Avatar.main.js.map
