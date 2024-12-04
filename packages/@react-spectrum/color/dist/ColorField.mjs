import "./colorfield.43223e3d.css";
import $b4uus$colorfield_cssmodulejs from "./colorfield_css.mjs";
import {classNames as $b4uus$classNames} from "@react-spectrum/utils";
import {useContextProps as $b4uus$useContextProps, ColorFieldContext as $b4uus$ColorFieldContext} from "react-aria-components";
import $b4uus$react, {useRef as $b4uus$useRef} from "react";
import {TextFieldBase as $b4uus$TextFieldBase} from "@react-spectrum/textfield";
import {useColorChannelField as $b4uus$useColorChannelField, useColorField as $b4uus$useColorField} from "@react-aria/color";
import {useColorChannelFieldState as $b4uus$useColorChannelFieldState, useColorFieldState as $b4uus$useColorFieldState} from "@react-stately/color";
import {useFormProps as $b4uus$useFormProps} from "@react-spectrum/form";
import {useLocale as $b4uus$useLocale} from "@react-aria/i18n";
import {useProviderProps as $b4uus$useProviderProps} from "@react-spectrum/provider";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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









const $0077d47e004328f0$export$b865d4358897bb17 = /*#__PURE__*/ (0, $b4uus$react).forwardRef(function ColorField(props, ref) {
    props = (0, $b4uus$useProviderProps)(props);
    props = (0, $b4uus$useFormProps)(props);
    [props] = (0, $b4uus$useContextProps)(props, null, (0, $b4uus$ColorFieldContext));
    if (props.placeholder) console.warn('Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/ColorField.html#help-text');
    if (props.channel) return /*#__PURE__*/ (0, $b4uus$react).createElement($0077d47e004328f0$var$ColorChannelField, {
        ...props,
        channel: props.channel,
        forwardedRef: ref
    });
    else return /*#__PURE__*/ (0, $b4uus$react).createElement($0077d47e004328f0$var$HexColorField, {
        ...props,
        forwardedRef: ref
    });
});
function $0077d47e004328f0$var$ColorChannelField(props) {
    let { value: // These disabled props are handled by the state hook
    value, defaultValue: defaultValue, onChange: onChange, validate: validate, forwardedRef: forwardedRef, ...otherProps } = props;
    let { locale: locale } = (0, $b4uus$useLocale)();
    let state = (0, $b4uus$useColorChannelFieldState)({
        ...props,
        locale: locale
    });
    let inputRef = (0, $b4uus$useRef)(null);
    let result = (0, $b4uus$useColorChannelField)(otherProps, state, inputRef);
    return /*#__PURE__*/ (0, $b4uus$react).createElement((0, $b4uus$react).Fragment, null, /*#__PURE__*/ (0, $b4uus$react).createElement((0, $b4uus$TextFieldBase), {
        ...otherProps,
        ref: forwardedRef,
        inputRef: inputRef,
        ...result,
        inputClassName: (0, $b4uus$classNames)((0, ($parcel$interopDefault($b4uus$colorfield_cssmodulejs))), 'react-spectrum-ColorField-input')
    }), props.name && /*#__PURE__*/ (0, $b4uus$react).createElement("input", {
        type: "hidden",
        name: props.name,
        value: isNaN(state.numberValue) ? '' : state.numberValue
    }));
}
function $0077d47e004328f0$var$HexColorField(props) {
    let { value: // These disabled props are handled by the state hook
    value, defaultValue: defaultValue, onChange: onChange, forwardedRef: forwardedRef, ...otherProps } = props;
    let state = (0, $b4uus$useColorFieldState)(props);
    let inputRef = (0, $b4uus$useRef)(null);
    let result = (0, $b4uus$useColorField)(otherProps, state, inputRef);
    return /*#__PURE__*/ (0, $b4uus$react).createElement((0, $b4uus$TextFieldBase), {
        ...otherProps,
        ref: forwardedRef,
        inputRef: inputRef,
        ...result,
        inputClassName: (0, $b4uus$classNames)((0, ($parcel$interopDefault($b4uus$colorfield_cssmodulejs))), 'react-spectrum-ColorField-input')
    });
}


export {$0077d47e004328f0$export$b865d4358897bb17 as ColorField};
//# sourceMappingURL=ColorField.module.js.map
