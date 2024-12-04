require("./colorfield.43223e3d.css");
var $ddec4d6aa21146c4$exports = require("./colorfield_css.main.js");
var $4ivT8$reactspectrumutils = require("@react-spectrum/utils");
var $4ivT8$reactariacomponents = require("react-aria-components");
var $4ivT8$react = require("react");
var $4ivT8$reactspectrumtextfield = require("@react-spectrum/textfield");
var $4ivT8$reactariacolor = require("@react-aria/color");
var $4ivT8$reactstatelycolor = require("@react-stately/color");
var $4ivT8$reactspectrumform = require("@react-spectrum/form");
var $4ivT8$reactariai18n = require("@react-aria/i18n");
var $4ivT8$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorField", () => $8bdb9bc27ff3debb$export$b865d4358897bb17);
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









const $8bdb9bc27ff3debb$export$b865d4358897bb17 = /*#__PURE__*/ (0, ($parcel$interopDefault($4ivT8$react))).forwardRef(function ColorField(props, ref) {
    props = (0, $4ivT8$reactspectrumprovider.useProviderProps)(props);
    props = (0, $4ivT8$reactspectrumform.useFormProps)(props);
    [props] = (0, $4ivT8$reactariacomponents.useContextProps)(props, null, (0, $4ivT8$reactariacomponents.ColorFieldContext));
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/ColorField.html#help-text');
    if (props.channel) return /*#__PURE__*/ (0, ($parcel$interopDefault($4ivT8$react))).createElement($8bdb9bc27ff3debb$var$ColorChannelField, {
        ...props,
        channel: props.channel,
        forwardedRef: ref
    });
    else return /*#__PURE__*/ (0, ($parcel$interopDefault($4ivT8$react))).createElement($8bdb9bc27ff3debb$var$HexColorField, {
        ...props,
        forwardedRef: ref
    });
});
function $8bdb9bc27ff3debb$var$ColorChannelField(props) {
    let { value: // These disabled props are handled by the state hook
    value, defaultValue: defaultValue, onChange: onChange, validate: validate, forwardedRef: forwardedRef, ...otherProps } = props;
    let { locale: locale } = (0, $4ivT8$reactariai18n.useLocale)();
    let state = (0, $4ivT8$reactstatelycolor.useColorChannelFieldState)({
        ...props,
        locale: locale
    });
    let inputRef = (0, $4ivT8$react.useRef)(null);
    let result = (0, $4ivT8$reactariacolor.useColorChannelField)(otherProps, state, inputRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($4ivT8$react))).createElement((0, ($parcel$interopDefault($4ivT8$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($4ivT8$react))).createElement((0, $4ivT8$reactspectrumtextfield.TextFieldBase), {
        ...otherProps,
        ref: forwardedRef,
        inputRef: inputRef,
        ...result,
        inputClassName: (0, $4ivT8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ddec4d6aa21146c4$exports))), 'react-spectrum-ColorField-input')
    }), props.name && /*#__PURE__*/ (0, ($parcel$interopDefault($4ivT8$react))).createElement("input", {
        type: "hidden",
        name: props.name,
        value: isNaN(state.numberValue) ? '' : state.numberValue
    }));
}
function $8bdb9bc27ff3debb$var$HexColorField(props) {
    let { value: // These disabled props are handled by the state hook
    value, defaultValue: defaultValue, onChange: onChange, forwardedRef: forwardedRef, ...otherProps } = props;
    let state = (0, $4ivT8$reactstatelycolor.useColorFieldState)(props);
    let inputRef = (0, $4ivT8$react.useRef)(null);
    let result = (0, $4ivT8$reactariacolor.useColorField)(otherProps, state, inputRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($4ivT8$react))).createElement((0, $4ivT8$reactspectrumtextfield.TextFieldBase), {
        ...otherProps,
        ref: forwardedRef,
        inputRef: inputRef,
        ...result,
        inputClassName: (0, $4ivT8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ddec4d6aa21146c4$exports))), 'react-spectrum-ColorField-input')
    });
}


//# sourceMappingURL=ColorField.main.js.map
