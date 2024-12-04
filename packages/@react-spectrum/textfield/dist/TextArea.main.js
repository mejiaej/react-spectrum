var $86793250183ac29e$exports = require("./TextFieldBase.main.js");
var $5VIId$reactariautils = require("@react-aria/utils");
var $5VIId$react = require("react");
var $5VIId$reactstatelyutils = require("@react-stately/utils");
var $5VIId$reactspectrumform = require("@react-spectrum/form");
var $5VIId$reactspectrumprovider = require("@react-spectrum/provider");
var $5VIId$reactariatextfield = require("@react-aria/textfield");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TextArea", () => $eec649e464f3832d$export$f5c9f3c2c4054eec);
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






const $eec649e464f3832d$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, ($parcel$interopDefault($5VIId$react))).forwardRef(function TextArea(props, ref) {
    props = (0, $5VIId$reactspectrumprovider.useProviderProps)(props);
    props = (0, $5VIId$reactspectrumform.useFormProps)(props);
    let { isDisabled: isDisabled = false, isQuiet: isQuiet = false, isReadOnly: isReadOnly = false, isRequired: isRequired = false, onChange: onChange, ...otherProps } = props;
    var _props_defaultValue;
    // not in stately because this is so we know when to re-measure, which is a spectrum design
    let [inputValue, setInputValue] = (0, $5VIId$reactstatelyutils.useControlledState)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : '', ()=>{});
    let inputRef = (0, $5VIId$react.useRef)(null);
    let onHeightChange = (0, $5VIId$react.useCallback)(()=>{
        // Quiet textareas always grow based on their text content.
        // Standard textareas also grow by default, unless an explicit height is set.
        if ((isQuiet || !props.height) && inputRef.current) {
            let input = inputRef.current;
            let prevAlignment = input.style.alignSelf;
            let prevOverflow = input.style.overflow;
            // Firefox scroll position is lost when overflow: 'hidden' is applied so we skip applying it.
            // The measure/applied height is also incorrect/reset if we turn on and off
            // overflow: hidden in Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1787062
            let isFirefox = 'MozAppearance' in input.style;
            if (!isFirefox) input.style.overflow = 'hidden';
            input.style.alignSelf = 'start';
            input.style.height = 'auto';
            // offsetHeight - clientHeight accounts for the border/padding.
            input.style.height = `${input.scrollHeight + (input.offsetHeight - input.clientHeight)}px`;
            input.style.overflow = prevOverflow;
            input.style.alignSelf = prevAlignment;
        }
    }, [
        isQuiet,
        inputRef,
        props.height
    ]);
    (0, $5VIId$reactariautils.useLayoutEffect)(()=>{
        if (inputRef.current) onHeightChange();
    }, [
        onHeightChange,
        inputValue,
        inputRef
    ]);
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/TextArea.html#help-text');
    let result = (0, $5VIId$reactariatextfield.useTextField)({
        ...props,
        onChange: (0, $5VIId$reactariautils.chain)(onChange, setInputValue),
        inputElementType: 'textarea'
    }, inputRef);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($5VIId$react))).createElement((0, $86793250183ac29e$exports.TextFieldBase), {
        ...otherProps,
        ref: ref,
        inputRef: inputRef,
        ...result,
        multiLine: true,
        isDisabled: isDisabled,
        isQuiet: isQuiet,
        isReadOnly: isReadOnly,
        isRequired: isRequired
    });
});


//# sourceMappingURL=TextArea.main.js.map
