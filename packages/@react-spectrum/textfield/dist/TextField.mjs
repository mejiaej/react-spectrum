import {TextFieldBase as $599adb75312e6492$export$d22444a338b6e3c2} from "./TextFieldBase.mjs";
import $9R76J$react, {forwardRef as $9R76J$forwardRef, useRef as $9R76J$useRef} from "react";
import {useFormProps as $9R76J$useFormProps} from "@react-spectrum/form";
import {useProviderProps as $9R76J$useProviderProps} from "@react-spectrum/provider";
import {useTextField as $9R76J$useTextField} from "@react-aria/textfield";

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




const $265457f9427aa380$export$2c73285ae9390cec = /*#__PURE__*/ (0, $9R76J$forwardRef)(function TextField(props, ref) {
    props = (0, $9R76J$useProviderProps)(props);
    props = (0, $9R76J$useFormProps)(props);
    let inputRef = (0, $9R76J$useRef)(null);
    let result = (0, $9R76J$useTextField)(props, inputRef);
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/TextField.html#help-text');
    return /*#__PURE__*/ (0, $9R76J$react).createElement((0, $599adb75312e6492$export$d22444a338b6e3c2), {
        ...props,
        ...result,
        ref: ref,
        inputRef: inputRef
    });
});


export {$265457f9427aa380$export$2c73285ae9390cec as TextField};
//# sourceMappingURL=TextField.module.js.map
