require("./vars.0b4b4e4a.css");
var $eb2fc0ee655eff6b$exports = require("./fieldlabel_vars_css.main.js");
var $7HNeW$reactspectrumutils = require("@react-spectrum/utils");
var $7HNeW$reactariautils = require("@react-aria/utils");
var $7HNeW$reactstatelyform = require("@react-stately/form");
var $7HNeW$reactspectrumprovider = require("@react-spectrum/provider");
var $7HNeW$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useFormProps", () => $d981bcab8e24f2f3$export$a6b5be5c6b451665);
$parcel$export(module.exports, "Form", () => $d981bcab8e24f2f3$export$a7fed597f4b8afd8);
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





let $d981bcab8e24f2f3$var$FormContext = /*#__PURE__*/ (0, ($parcel$interopDefault($7HNeW$react))).createContext(null);
function $d981bcab8e24f2f3$export$a6b5be5c6b451665(props) {
    let ctx = (0, $7HNeW$react.useContext)($d981bcab8e24f2f3$var$FormContext);
    if (ctx) return {
        ...ctx,
        ...props
    };
    return props;
}
const $d981bcab8e24f2f3$var$formPropNames = new Set([
    'action',
    'autoComplete',
    'encType',
    'method',
    'target',
    'onSubmit',
    'onReset',
    'onInvalid'
]);
const $d981bcab8e24f2f3$export$a7fed597f4b8afd8 = /*#__PURE__*/ (0, ($parcel$interopDefault($7HNeW$react))).forwardRef(function Form(props, ref) {
    props = (0, $7HNeW$reactspectrumprovider.useProviderProps)(props);
    let { children: children, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', isRequired: isRequired, necessityIndicator: necessityIndicator, isQuiet: isQuiet, isEmphasized: isEmphasized, isDisabled: isDisabled, isReadOnly: isReadOnly, validationState: validationState, validationBehavior: validationBehavior, validationErrors: validationErrors, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $7HNeW$reactspectrumutils.useStyleProps)(otherProps);
    let domRef = (0, $7HNeW$reactspectrumutils.useDOMRef)(ref);
    let ctx = {
        labelPosition: labelPosition,
        labelAlign: labelAlign,
        necessityIndicator: necessityIndicator,
        validationBehavior: validationBehavior
    };
    return /*#__PURE__*/ (0, ($parcel$interopDefault($7HNeW$react))).createElement("form", {
        ...(0, $7HNeW$reactariautils.filterDOMProps)(otherProps, {
            labelable: true,
            propNames: $d981bcab8e24f2f3$var$formPropNames
        }),
        ...styleProps,
        noValidate: validationBehavior !== 'native',
        ref: domRef,
        className: (0, $7HNeW$reactspectrumutils.classNames)((0, ($parcel$interopDefault($eb2fc0ee655eff6b$exports))), 'spectrum-Form', {
            'spectrum-Form--positionSide': labelPosition === 'side',
            'spectrum-Form--positionTop': labelPosition === 'top'
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7HNeW$react))).createElement($d981bcab8e24f2f3$var$FormContext.Provider, {
        value: ctx
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7HNeW$react))).createElement((0, $7HNeW$reactspectrumprovider.Provider), {
        isQuiet: isQuiet,
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isRequired: isRequired,
        validationState: validationState
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7HNeW$react))).createElement((0, $7HNeW$reactstatelyform.FormValidationContext).Provider, {
        value: validationErrors || {}
    }, children))));
});


//# sourceMappingURL=Form.main.js.map
