import "./Form.css";
import {useIsSkeleton as $5ad421ec19460c48$export$4f8dc7555740235c} from "../icons/Skeleton.mjs";
import {jsx as $i5kLT$jsx} from "react/jsx-runtime";
import {createContext as $i5kLT$createContext, useContext as $i5kLT$useContext, useMemo as $i5kLT$useMemo, forwardRef as $i5kLT$forwardRef} from "react";
import {Form as $i5kLT$Form} from "react-aria-components";
import {useDOMRef as $i5kLT$useDOMRef} from "@react-spectrum/utils";

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $9b916426527cebe7$export$c24727297075ec6a = /*#__PURE__*/ (0, $i5kLT$createContext)(null);
function $9b916426527cebe7$export$a6b5be5c6b451665(props) {
    let ctx = (0, $i5kLT$useContext)($9b916426527cebe7$export$c24727297075ec6a);
    let isSkeleton = (0, $5ad421ec19460c48$export$4f8dc7555740235c)();
    return (0, $i5kLT$useMemo)(()=>{
        let result = props;
        if (ctx || isSkeleton) result = {
            ...props
        };
        if (ctx) {
            // This is a subset of mergeProps. We just need to merge non-undefined values.
            for(let key in ctx)if (result[key] === undefined) result[key] = ctx[key];
        }
        // Skeleton always wins over local props.
        if (isSkeleton) result.isDisabled = true;
        return result;
    }, [
        ctx,
        props,
        isSkeleton
    ]);
}
const $9b916426527cebe7$export$a7fed597f4b8afd8 = /*#__PURE__*/ (0, $i5kLT$forwardRef)(function Form(props, ref) {
    let { labelPosition: labelPosition = 'top', labelAlign: labelAlign, necessityIndicator: necessityIndicator, isRequired: isRequired, isDisabled: isDisabled, isEmphasized: isEmphasized, size: size = 'M', ...formProps } = props;
    let domRef = (0, $i5kLT$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $i5kLT$jsx)((0, $i5kLT$Form), {
        ...formProps,
        ref: domRef,
        style: props.UNSAFE_style,
        className: (props.UNSAFE_className || '') + function anonymous(props, overrides) {
            let rules = " .";
            let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
            rules += matches.join('');
            rules += ' _Zf';
            if (props.labelPosition === "side") rules += ' __h-hgmn7f';
            else if (props.labelPosition === "top") rules += ' __h-nvqmqy';
            if (props.size === "XL") rules += ' il';
            else if (props.size === "L") rules += ' ij';
            else if (props.size === "M") rules += ' ih';
            else if (props.size === "S") rules += ' ig';
            else if (props.size === "XS") rules += ' if';
            rules += ' jF';
            return rules;
        }({
            labelPosition: labelPosition,
            size: size
        }, props.styles),
        children: /*#__PURE__*/ (0, $i5kLT$jsx)($9b916426527cebe7$export$c24727297075ec6a.Provider, {
            value: {
                labelPosition: labelPosition,
                labelAlign: labelAlign,
                necessityIndicator: necessityIndicator,
                isRequired: isRequired,
                isDisabled: isDisabled,
                isEmphasized: isEmphasized,
                size: size
            },
            children: props.children
        })
    });
});


export {$9b916426527cebe7$export$c24727297075ec6a as FormContext, $9b916426527cebe7$export$a6b5be5c6b451665 as useFormProps, $9b916426527cebe7$export$a7fed597f4b8afd8 as Form};
//# sourceMappingURL=Form.mjs.map
