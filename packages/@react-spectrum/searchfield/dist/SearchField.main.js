require("./vars.9afd4902.css");
var $1e139f06a0a4b696$exports = require("./search_vars_css.main.js");
var $anRgD$reactspectrumutils = require("@react-spectrum/utils");
var $anRgD$reactspectrumbutton = require("@react-spectrum/button");
var $anRgD$spectrumiconsuiMagnifier = require("@spectrum-icons/ui/Magnifier");
var $anRgD$react = require("react");
var $anRgD$reactspectrumtextfield = require("@react-spectrum/textfield");
var $anRgD$reactspectrumform = require("@react-spectrum/form");
var $anRgD$reactspectrumprovider = require("@react-spectrum/provider");
var $anRgD$reactariasearchfield = require("@react-aria/searchfield");
var $anRgD$reactstatelysearchfield = require("@react-stately/searchfield");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SearchField", () => $111fe330b4c1f3ac$export$b94867ecbd698f21);
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









const $111fe330b4c1f3ac$export$b94867ecbd698f21 = /*#__PURE__*/ (0, $anRgD$react.forwardRef)(function SearchField(props, ref) {
    props = (0, $anRgD$reactspectrumutils.useSlotProps)(props, 'searchfield');
    props = (0, $anRgD$reactspectrumprovider.useProviderProps)(props);
    props = (0, $anRgD$reactspectrumform.useFormProps)(props);
    let defaultIcon = /*#__PURE__*/ (0, ($parcel$interopDefault($anRgD$react))).createElement((0, ($parcel$interopDefault($anRgD$spectrumiconsuiMagnifier))), {
        "data-testid": "searchicon"
    });
    let { icon: icon = defaultIcon, isDisabled: isDisabled, UNSAFE_className: UNSAFE_className, placeholder: placeholder, ...otherProps } = props;
    if (placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/SearchField.html#help-text');
    let state = (0, $anRgD$reactstatelysearchfield.useSearchFieldState)(props);
    let inputRef = (0, $anRgD$react.useRef)(null);
    let { clearButtonProps: clearButtonProps, ...result } = (0, $anRgD$reactariasearchfield.useSearchField)(props, state, inputRef);
    let clearButton = /*#__PURE__*/ (0, ($parcel$interopDefault($anRgD$react))).createElement((0, $anRgD$reactspectrumbutton.ClearButton), {
        ...clearButtonProps,
        preventFocus: true,
        UNSAFE_className: (0, $anRgD$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-ClearButton'),
        isDisabled: isDisabled
    });
    let validationState = props.validationState || (result.isInvalid ? 'invalid' : undefined);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($anRgD$react))).createElement((0, $anRgD$reactspectrumtextfield.TextFieldBase), {
        ...otherProps,
        ...result,
        validationState: validationState,
        UNSAFE_className: (0, $anRgD$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search', 'spectrum-Textfield', {
            'is-disabled': isDisabled,
            'is-quiet': props.isQuiet,
            'spectrum-Search--invalid': validationState === 'invalid' && !isDisabled,
            'spectrum-Search--valid': validationState === 'valid' && !isDisabled
        }, UNSAFE_className),
        inputClassName: (0, $anRgD$reactspectrumutils.classNames)((0, ($parcel$interopDefault($1e139f06a0a4b696$exports))), 'spectrum-Search-input'),
        ref: ref,
        inputRef: inputRef,
        isDisabled: isDisabled,
        icon: icon,
        wrapperChildren: state.value !== '' && !props.isReadOnly ? clearButton : undefined
    });
});


//# sourceMappingURL=SearchField.main.js.map
