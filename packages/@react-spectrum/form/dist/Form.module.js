import "./vars.0b4b4e4a.css";
import $ijGT7$fieldlabel_vars_cssmodulejs from "./fieldlabel_vars_css.module.js";
import {useStyleProps as $ijGT7$useStyleProps, useDOMRef as $ijGT7$useDOMRef, classNames as $ijGT7$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $ijGT7$filterDOMProps} from "@react-aria/utils";
import {FormValidationContext as $ijGT7$FormValidationContext} from "@react-stately/form";
import {useProviderProps as $ijGT7$useProviderProps, Provider as $ijGT7$Provider} from "@react-spectrum/provider";
import $ijGT7$react, {useContext as $ijGT7$useContext} from "react";


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





let $ac118ceca79b8650$var$FormContext = /*#__PURE__*/ (0, $ijGT7$react).createContext(null);
function $ac118ceca79b8650$export$a6b5be5c6b451665(props) {
    let ctx = (0, $ijGT7$useContext)($ac118ceca79b8650$var$FormContext);
    if (ctx) return {
        ...ctx,
        ...props
    };
    return props;
}
const $ac118ceca79b8650$var$formPropNames = new Set([
    'action',
    'autoComplete',
    'encType',
    'method',
    'target',
    'onSubmit',
    'onReset',
    'onInvalid'
]);
const $ac118ceca79b8650$export$a7fed597f4b8afd8 = /*#__PURE__*/ (0, $ijGT7$react).forwardRef(function Form(props, ref) {
    props = (0, $ijGT7$useProviderProps)(props);
    let { children: children, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', isRequired: isRequired, necessityIndicator: necessityIndicator, isQuiet: isQuiet, isEmphasized: isEmphasized, isDisabled: isDisabled, isReadOnly: isReadOnly, validationState: validationState, validationBehavior: validationBehavior, validationErrors: validationErrors, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $ijGT7$useStyleProps)(otherProps);
    let domRef = (0, $ijGT7$useDOMRef)(ref);
    let ctx = {
        labelPosition: labelPosition,
        labelAlign: labelAlign,
        necessityIndicator: necessityIndicator,
        validationBehavior: validationBehavior
    };
    return /*#__PURE__*/ (0, $ijGT7$react).createElement("form", {
        ...(0, $ijGT7$filterDOMProps)(otherProps, {
            labelable: true,
            propNames: $ac118ceca79b8650$var$formPropNames
        }),
        ...styleProps,
        noValidate: validationBehavior !== 'native',
        ref: domRef,
        className: (0, $ijGT7$classNames)((0, ($parcel$interopDefault($ijGT7$fieldlabel_vars_cssmodulejs))), 'spectrum-Form', {
            'spectrum-Form--positionSide': labelPosition === 'side',
            'spectrum-Form--positionTop': labelPosition === 'top'
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $ijGT7$react).createElement($ac118ceca79b8650$var$FormContext.Provider, {
        value: ctx
    }, /*#__PURE__*/ (0, $ijGT7$react).createElement((0, $ijGT7$Provider), {
        isQuiet: isQuiet,
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        validationState: validationState
    }, /*#__PURE__*/ (0, $ijGT7$react).createElement((0, $ijGT7$FormValidationContext).Provider, {
        value: validationErrors || {}
    }, children))));
});


export {$ac118ceca79b8650$export$a6b5be5c6b451665 as useFormProps, $ac118ceca79b8650$export$a7fed597f4b8afd8 as Form};
//# sourceMappingURL=Form.module.js.map
