import "./ColorField.css";
import {FieldErrorIcon as $9afd80978c252040$export$bda0d075e0e342c9, FieldGroup as $9afd80978c252040$export$f0fe469072bc6950, FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414, HelpText as $9afd80978c252040$export$a67c0bc59081311a, Input as $9afd80978c252040$export$f5b8910cec6cf069} from "./Field.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $Y0ll1$jsx, jsxs as $Y0ll1$jsxs, Fragment as $Y0ll1$Fragment} from "react/jsx-runtime";
import {ColorField as $Y0ll1$ColorField} from "react-aria-components";
import {createContext as $Y0ll1$createContext, forwardRef as $Y0ll1$forwardRef, useContext as $Y0ll1$useContext, useRef as $Y0ll1$useRef, useImperativeHandle as $Y0ll1$useImperativeHandle} from "react";
import {createFocusableRef as $Y0ll1$createFocusableRef} from "@react-spectrum/utils";

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






const $9c5ed7ec0bc126af$export$44644b8a16031b5b = /*#__PURE__*/ (0, $Y0ll1$createContext)(null);
const $9c5ed7ec0bc126af$export$b865d4358897bb17 = /*#__PURE__*/ (0, $Y0ll1$forwardRef)(function ColorField(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $9c5ed7ec0bc126af$export$44644b8a16031b5b);
    let formContext = (0, $Y0ll1$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let { label: label, description: description, errorMessage: errorMessage, necessityIndicator: necessityIndicator, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', styles: styles, ...fieldProps } = props;
    // Expose imperative interface for ref
    let domRef = (0, $Y0ll1$useRef)(null);
    let inputRef = (0, $Y0ll1$useRef)(null);
    (0, $Y0ll1$useImperativeHandle)(ref, ()=>({
            ...(0, $Y0ll1$createFocusableRef)(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        }));
    return /*#__PURE__*/ (0, $Y0ll1$jsx)((0, $Y0ll1$ColorField), {
        ...fieldProps,
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
            rules += ' -_1inj1bc_i--prjw07';
            rules += ' je';
            rules += ' __R-yksgrp';
            return rules;
        }({
            size: props.size,
            labelPosition: labelPosition,
            isInForm: !!formContext
        }, styles),
        children: ({ isDisabled: isDisabled, isInvalid: isInvalid })=>/*#__PURE__*/ (0, $Y0ll1$jsxs)((0, $Y0ll1$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $Y0ll1$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                        isDisabled: isDisabled,
                        isRequired: props.isRequired,
                        size: props.size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: props.contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $Y0ll1$jsxs)((0, $9afd80978c252040$export$f0fe469072bc6950), {
                        role: "presentation",
                        isDisabled: isDisabled,
                        isInvalid: isInvalid,
                        size: props.size,
                        children: [
                            /*#__PURE__*/ (0, $Y0ll1$jsx)((0, $9afd80978c252040$export$f5b8910cec6cf069), {
                                ref: inputRef
                            }),
                            isInvalid && /*#__PURE__*/ (0, $Y0ll1$jsx)((0, $9afd80978c252040$export$bda0d075e0e342c9), {
                                isDisabled: isDisabled
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $Y0ll1$jsx)((0, $9afd80978c252040$export$a67c0bc59081311a), {
                        size: props.size,
                        isDisabled: isDisabled,
                        isInvalid: isInvalid,
                        description: description,
                        children: errorMessage
                    })
                ]
            })
    });
});


export {$9c5ed7ec0bc126af$export$44644b8a16031b5b as ColorFieldContext, $9c5ed7ec0bc126af$export$b865d4358897bb17 as ColorField};
//# sourceMappingURL=ColorField.mjs.map
