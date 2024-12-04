import {TextFieldBase as $599adb75312e6492$export$d22444a338b6e3c2} from "./TextFieldBase.mjs";
import {useLayoutEffect as $hi3T0$useLayoutEffect, chain as $hi3T0$chain} from "@react-aria/utils";
import $hi3T0$react, {useRef as $hi3T0$useRef, useCallback as $hi3T0$useCallback} from "react";
import {useControlledState as $hi3T0$useControlledState} from "@react-stately/utils";
import {useFormProps as $hi3T0$useFormProps} from "@react-spectrum/form";
import {useProviderProps as $hi3T0$useProviderProps} from "@react-spectrum/provider";
import {useTextField as $hi3T0$useTextField} from "@react-aria/textfield";

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






const $cc187bf91f8eea73$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, $hi3T0$react).forwardRef(function TextArea(props, ref) {
    props = (0, $hi3T0$useProviderProps)(props);
    props = (0, $hi3T0$useFormProps)(props);
    let { isDisabled: isDisabled = false, isQuiet: isQuiet = false, isReadOnly: isReadOnly = false, isRequired: isRequired = false, onChange: onChange, ...otherProps } = props;
    var _props_defaultValue;
    // not in stately because this is so we know when to re-measure, which is a spectrum design
    let [inputValue, setInputValue] = (0, $hi3T0$useControlledState)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : '', ()=>{});
    let inputRef = (0, $hi3T0$useRef)(null);
    let onHeightChange = (0, $hi3T0$useCallback)(()=>{
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
    (0, $hi3T0$useLayoutEffect)(()=>{
        if (inputRef.current) onHeightChange();
    }, [
        onHeightChange,
        inputValue,
        inputRef
    ]);
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/TextArea.html#help-text');
    let result = (0, $hi3T0$useTextField)({
        ...props,
        onChange: (0, $hi3T0$chain)(onChange, setInputValue),
        inputElementType: 'textarea'
    }, inputRef);
    return /*#__PURE__*/ (0, $hi3T0$react).createElement((0, $599adb75312e6492$export$d22444a338b6e3c2), {
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


export {$cc187bf91f8eea73$export$f5c9f3c2c4054eec as TextArea};
//# sourceMappingURL=TextArea.module.js.map
