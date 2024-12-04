var $86793250183ac29e$exports = require("./TextFieldBase.main.js");
var $em8OD$react = require("react");
var $em8OD$reactspectrumform = require("@react-spectrum/form");
var $em8OD$reactspectrumprovider = require("@react-spectrum/provider");
var $em8OD$reactariatextfield = require("@react-aria/textfield");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TextField", () => $34fd51d50eb4b056$export$2c73285ae9390cec);
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




const $34fd51d50eb4b056$export$2c73285ae9390cec = /*#__PURE__*/ (0, $em8OD$react.forwardRef)(function TextField(props, ref) {
    props = (0, $em8OD$reactspectrumprovider.useProviderProps)(props);
    props = (0, $em8OD$reactspectrumform.useFormProps)(props);
    let inputRef = (0, $em8OD$react.useRef)(null);
    let result = (0, $em8OD$reactariatextfield.useTextField)(props, inputRef);
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/TextField.html#help-text');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($em8OD$react))).createElement((0, $86793250183ac29e$exports.TextFieldBase), {
        ...props,
        ...result,
        ref: ref,
        inputRef: inputRef
    });
});


//# sourceMappingURL=TextField.main.js.map
