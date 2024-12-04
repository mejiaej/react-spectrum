import "./CheckboxGroup.css";
import {CheckboxContext as $9b405e0f8095dce0$export$b085522c77523c51} from "./Checkbox.mjs";
import {FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414, HelpText as $9afd80978c252040$export$a67c0bc59081311a} from "./Field.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $2n9bC$jsx, jsxs as $2n9bC$jsxs, Fragment as $2n9bC$Fragment} from "react/jsx-runtime";
import {CheckboxGroup as $2n9bC$CheckboxGroup} from "react-aria-components";
import {createContext as $2n9bC$createContext, forwardRef as $2n9bC$forwardRef, useContext as $2n9bC$useContext} from "react";
import {useDOMRef as $2n9bC$useDOMRef} from "@react-spectrum/utils";

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







const $4f43ac2b11e2df05$export$baf37c4be89255b8 = /*#__PURE__*/ (0, $2n9bC$createContext)(null);
const $4f43ac2b11e2df05$export$4aa08d5625cb8ead = /*#__PURE__*/ (0, $2n9bC$forwardRef)(function CheckboxGroup(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $4f43ac2b11e2df05$export$baf37c4be89255b8);
    let formContext = (0, $2n9bC$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let { label: label, description: description, errorMessage: errorMessage, children: children, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', necessityIndicator: necessityIndicator = 'icon', size: size = 'M', orientation: orientation = 'vertical', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, isEmphasized: isEmphasized, ...groupProps } = props;
    let domRef = (0, $2n9bC$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $2n9bC$jsx)((0, $2n9bC$CheckboxGroup), {
        ...groupProps,
        ref: domRef,
        style: UNSAFE_style,
        className: UNSAFE_className + function anonymous(props, overrides) {
            let rules = " .";
            let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
            rules += matches.join('');
            let $__a = false;
            let $__b = false;
            for (let p of matches){
                if (/^\s*__a/.test(p)) $__a = true;
                if (/^\s*__b/.test(p)) $__b = true;
            }
            rules += ' _Zf';
            if (!$__a) {
                if (props.isInForm) rules += ' __a-3t1y';
            }
            if (!$__b) {
                if (props.isInForm) {
                    if (props.labelPosition === "side") rules += ' __b-7u9dhl';
                }
            }
            if (props.isInForm) rules += ' __h-1cwd7ud';
            else {
                if (props.labelPosition === "side") rules += ' __h-jyg4vb';
                else if (props.labelPosition === "top") rules += ' __h-375yi6';
            }
            if (props.labelPosition === "side") rules += ' __i-jyg4vb';
            else if (props.labelPosition === "top") rules += ' __i-fdenls';
            if (props.labelPosition === "side") rules += ' __j-5eez8j';
            else if (props.labelPosition === "top") rules += ' __j-xlaqir';
            if (props.size === "XL") {
                rules += ' _dbj';
                rules += ' _di';
            } else if (props.size === "L") {
                rules += ' _dbh';
                rules += ' _dg';
            } else if (props.size === "S") {
                rules += ' _dbd';
                rules += ' _dc';
            } else if (props.size === "XS") {
                rules += ' _dbb';
                rules += ' _da';
            } else {
                rules += ' _dbf';
                rules += ' _de';
            }
            rules += ' _1d';
            rules += ' _f-1x99dlob';
            rules += ' _fa';
            if (props.size === "XL") rules += ' -aqrvqh_k-j';
            else if (props.size === "L") rules += ' -aqrvqh_k-i';
            else if (props.size === "S") rules += ' -aqrvqh_k-h';
            else if (props.size === "XS") rules += ' -aqrvqh_k-g';
            else rules += ' -aqrvqh_k-f';
            rules += ' -_1inj1bc_i--vfy389';
            rules += ' je';
            rules += ' __R-yksgrp';
            return rules;
        }({
            size: props.size,
            labelPosition: labelPosition,
            isInForm: !!formContext
        }, props.styles),
        children: ({ isDisabled: isDisabled, isInvalid: isInvalid })=>/*#__PURE__*/ (0, $2n9bC$jsxs)((0, $2n9bC$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $2n9bC$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                        isDisabled: isDisabled,
                        isRequired: props.isRequired,
                        size: size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: props.contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $2n9bC$jsx)("div", {
                        className: function anonymous(props) {
                            let rules = " .";
                            rules += ' __a-4cfph1';
                            rules += ' __b-4cfph1';
                            rules += ' __c-4cfph1';
                            rules += ' __d-4cfph1';
                            rules += ' _Zd';
                            if (props.orientation === "horizontal") rules += ' _6a';
                            else if (props.orientation === "vertical") rules += ' _6b';
                            rules += ' _f-1x99dlob';
                            rules += ' _fa';
                            rules += ' i-1inj1bc';
                            rules += ' jf';
                            rules += ' _7a';
                            return rules;
                        }({
                            orientation: orientation
                        }),
                        children: /*#__PURE__*/ (0, $2n9bC$jsx)((0, $9b916426527cebe7$export$c24727297075ec6a).Provider, {
                            value: {
                                ...formContext,
                                size: size
                            },
                            children: /*#__PURE__*/ (0, $2n9bC$jsx)((0, $9b405e0f8095dce0$export$b085522c77523c51).Provider, {
                                value: {
                                    isEmphasized: isEmphasized
                                },
                                children: children
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $2n9bC$jsx)((0, $9afd80978c252040$export$a67c0bc59081311a), {
                        size: size,
                        isDisabled: isDisabled,
                        isInvalid: isInvalid,
                        description: description,
                        showErrorIcon: true,
                        children: errorMessage
                    })
                ]
            })
    });
});


export {$4f43ac2b11e2df05$export$baf37c4be89255b8 as CheckboxGroupContext, $4f43ac2b11e2df05$export$4aa08d5625cb8ead as CheckboxGroup};
//# sourceMappingURL=CheckboxGroup.mjs.map
