import {CheckboxGroupContext as $8c8ab388b155237e$export$baf37c4be89255b8} from "./context.mjs";
import "./vars.1be3e4c7.css";
import $8sUxO$fieldgroup_vars_cssmodulejs from "./fieldgroup_vars_css.mjs";
import {useDOMRef as $8sUxO$useDOMRef, classNames as $8sUxO$classNames} from "@react-spectrum/utils";
import {Field as $8sUxO$Field} from "@react-spectrum/label";
import {useProviderProps as $8sUxO$useProviderProps, Provider as $8sUxO$Provider} from "@react-spectrum/provider";
import $8sUxO$react from "react";
import {useCheckboxGroup as $8sUxO$useCheckboxGroup} from "@react-aria/checkbox";
import {useCheckboxGroupState as $8sUxO$useCheckboxGroupState} from "@react-stately/checkbox";
import {useFormProps as $8sUxO$useFormProps} from "@react-spectrum/form";


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








const $73f43ce9d441cc69$export$4aa08d5625cb8ead = /*#__PURE__*/ (0, $8sUxO$react).forwardRef(function CheckboxGroup(props, ref) {
    props = (0, $8sUxO$useProviderProps)(props);
    props = (0, $8sUxO$useFormProps)(props);
    let { isEmphasized: isEmphasized, children: children, orientation: orientation = 'vertical' } = props;
    let domRef = (0, $8sUxO$useDOMRef)(ref);
    let state = (0, $8sUxO$useCheckboxGroupState)(props);
    let { groupProps: groupProps, ...otherProps } = (0, $8sUxO$useCheckboxGroup)(props, state);
    return /*#__PURE__*/ (0, $8sUxO$react).createElement((0, $8sUxO$Field), {
        ...props,
        ...otherProps,
        ref: domRef,
        wrapperClassName: (0, $8sUxO$classNames)((0, ($parcel$interopDefault($8sUxO$fieldgroup_vars_cssmodulejs))), 'spectrum-FieldGroup'),
        elementType: "span",
        includeNecessityIndicatorInAccessibilityName: true
    }, /*#__PURE__*/ (0, $8sUxO$react).createElement("div", {
        ...groupProps,
        className: (0, $8sUxO$classNames)((0, ($parcel$interopDefault($8sUxO$fieldgroup_vars_cssmodulejs))), 'spectrum-FieldGroup-group', {
            'spectrum-FieldGroup-group--horizontal': orientation === 'horizontal'
        })
    }, /*#__PURE__*/ (0, $8sUxO$react).createElement((0, $8sUxO$Provider), {
        isEmphasized: isEmphasized
    }, /*#__PURE__*/ (0, $8sUxO$react).createElement((0, $8c8ab388b155237e$export$baf37c4be89255b8).Provider, {
        value: state
    }, children))));
});


export {$73f43ce9d441cc69$export$4aa08d5625cb8ead as CheckboxGroup};
//# sourceMappingURL=CheckboxGroup.module.js.map
