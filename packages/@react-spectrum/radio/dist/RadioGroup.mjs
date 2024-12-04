import {RadioContext as $f394bff9e10389a0$export$b118023277d4a5c3} from "./context.mjs";
import "./vars.1aed80f4.css";
import $ah3ae$fieldgroup_vars_cssmodulejs from "./fieldgroup_vars_css.mjs";
import {useDOMRef as $ah3ae$useDOMRef, classNames as $ah3ae$classNames} from "@react-spectrum/utils";
import {Field as $ah3ae$Field} from "@react-spectrum/label";
import $ah3ae$react from "react";
import {useFormProps as $ah3ae$useFormProps} from "@react-spectrum/form";
import {useProviderProps as $ah3ae$useProviderProps} from "@react-spectrum/provider";
import {useRadioGroup as $ah3ae$useRadioGroup} from "@react-aria/radio";
import {useRadioGroupState as $ah3ae$useRadioGroupState} from "@react-stately/radio";


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








const $ac9b96486fc4badf$export$a98f0dcb43a68a25 = /*#__PURE__*/ (0, $ah3ae$react).forwardRef(function RadioGroup(props, ref) {
    props = (0, $ah3ae$useProviderProps)(props);
    props = (0, $ah3ae$useFormProps)(props);
    let { isEmphasized: isEmphasized, children: children, orientation: orientation = 'vertical' } = props;
    let domRef = (0, $ah3ae$useDOMRef)(ref);
    let state = (0, $ah3ae$useRadioGroupState)(props);
    let { radioGroupProps: radioGroupProps, ...otherProps } = (0, $ah3ae$useRadioGroup)(props, state);
    return /*#__PURE__*/ (0, $ah3ae$react).createElement((0, $ah3ae$Field), {
        ...props,
        ...otherProps,
        ref: domRef,
        wrapperClassName: (0, $ah3ae$classNames)((0, ($parcel$interopDefault($ah3ae$fieldgroup_vars_cssmodulejs))), 'spectrum-FieldGroup'),
        elementType: "span"
    }, /*#__PURE__*/ (0, $ah3ae$react).createElement("div", {
        ...radioGroupProps,
        className: (0, $ah3ae$classNames)((0, ($parcel$interopDefault($ah3ae$fieldgroup_vars_cssmodulejs))), 'spectrum-FieldGroup-group', {
            'spectrum-FieldGroup-group--horizontal': orientation === 'horizontal'
        })
    }, /*#__PURE__*/ (0, $ah3ae$react).createElement((0, $f394bff9e10389a0$export$b118023277d4a5c3).Provider, {
        value: {
            isEmphasized: isEmphasized,
            state: state
        }
    }, children)));
});


export {$ac9b96486fc4badf$export$a98f0dcb43a68a25 as RadioGroup};
//# sourceMappingURL=RadioGroup.module.js.map
