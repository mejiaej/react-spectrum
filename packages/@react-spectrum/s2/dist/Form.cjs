require("./Form.css");
var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $hYK64$reactjsxruntime = require("react/jsx-runtime");
var $hYK64$react = require("react");
var $hYK64$reactariacomponents = require("react-aria-components");
var $hYK64$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "FormContext", () => $bfa4962d90c8af48$export$c24727297075ec6a);
$parcel$export(module.exports, "useFormProps", () => $bfa4962d90c8af48$export$a6b5be5c6b451665);
$parcel$export(module.exports, "Form", () => $bfa4962d90c8af48$export$a7fed597f4b8afd8);
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




const $bfa4962d90c8af48$export$c24727297075ec6a = /*#__PURE__*/ (0, $hYK64$react.createContext)(null);
function $bfa4962d90c8af48$export$a6b5be5c6b451665(props) {
    let ctx = (0, $hYK64$react.useContext)($bfa4962d90c8af48$export$c24727297075ec6a);
    let isSkeleton = (0, $5eb75e0c130e0669$exports.useIsSkeleton)();
    return (0, $hYK64$react.useMemo)(()=>{
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
const $bfa4962d90c8af48$export$a7fed597f4b8afd8 = /*#__PURE__*/ (0, $hYK64$react.forwardRef)(function Form(props, ref) {
    let { labelPosition: labelPosition = 'top', labelAlign: labelAlign, necessityIndicator: necessityIndicator, isRequired: isRequired, isDisabled: isDisabled, isEmphasized: isEmphasized, size: size = 'M', ...formProps } = props;
    let domRef = (0, $hYK64$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $hYK64$reactjsxruntime.jsx)((0, $hYK64$reactariacomponents.Form), {
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
        children: /*#__PURE__*/ (0, $hYK64$reactjsxruntime.jsx)($bfa4962d90c8af48$export$c24727297075ec6a.Provider, {
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


//# sourceMappingURL=Form.cjs.map
