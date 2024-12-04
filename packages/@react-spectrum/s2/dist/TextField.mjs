import "./TextField.css";
import {FieldErrorIcon as $9afd80978c252040$export$bda0d075e0e342c9, FieldGroup as $9afd80978c252040$export$f0fe469072bc6950, FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414, HelpText as $9afd80978c252040$export$a67c0bc59081311a, Input as $9afd80978c252040$export$f5b8910cec6cf069} from "./Field.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $fsr8S$jsx, jsxs as $fsr8S$jsxs, Fragment as $fsr8S$Fragment} from "react/jsx-runtime";
import {TextField as $fsr8S$TextField, composeRenderProps as $fsr8S$composeRenderProps, InputContext as $fsr8S$InputContext, useSlottedContext as $fsr8S$useSlottedContext, TextAreaContext as $fsr8S$TextAreaContext, TextArea as $fsr8S$TextArea} from "react-aria-components";
import {createContext as $fsr8S$createContext, forwardRef as $fsr8S$forwardRef, useRef as $fsr8S$useRef, useContext as $fsr8S$useContext, useImperativeHandle as $fsr8S$useImperativeHandle} from "react";
import {createFocusableRef as $fsr8S$createFocusableRef} from "@react-spectrum/utils";
import {mergeRefs as $fsr8S$mergeRefs} from "@react-aria/utils";

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







const $d946f50010ba937f$export$2129e27b3ef0d483 = /*#__PURE__*/ (0, $fsr8S$createContext)(null);
const $d946f50010ba937f$export$2c73285ae9390cec = /*#__PURE__*/ (0, $fsr8S$forwardRef)(function TextField(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $d946f50010ba937f$export$2129e27b3ef0d483);
    return /*#__PURE__*/ (0, $fsr8S$jsx)($d946f50010ba937f$export$d22444a338b6e3c2, {
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, $fsr8S$jsx)((0, $9afd80978c252040$export$f5b8910cec6cf069), {})
    });
});
const $d946f50010ba937f$export$2dc6166a7e65358c = /*#__PURE__*/ (0, $fsr8S$createContext)(null);
const $d946f50010ba937f$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, $fsr8S$forwardRef)(function TextArea(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $d946f50010ba937f$export$2dc6166a7e65358c);
    return /*#__PURE__*/ (0, $fsr8S$jsx)($d946f50010ba937f$export$d22444a338b6e3c2, {
        ...props,
        ref: ref,
        fieldGroupCss: " . _1d ka",
        children: /*#__PURE__*/ (0, $fsr8S$jsx)($d946f50010ba937f$var$TextAreaInput, {})
    });
});
const $d946f50010ba937f$export$d22444a338b6e3c2 = /*#__PURE__*/ (0, $fsr8S$forwardRef)(function TextFieldBase(props, ref) {
    let inputRef = (0, $fsr8S$useRef)(null);
    let domRef = (0, $fsr8S$useRef)(null);
    let formContext = (0, $fsr8S$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let { label: label, description: description, errorMessage: errorMessage, necessityIndicator: necessityIndicator, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', fieldGroupCss: fieldGroupCss, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', ...textFieldProps } = props;
    // Expose imperative interface for ref
    (0, $fsr8S$useImperativeHandle)(ref, ()=>({
            ...(0, $fsr8S$createFocusableRef)(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        }));
    return /*#__PURE__*/ (0, $fsr8S$jsx)((0, $fsr8S$TextField), {
        ...textFieldProps,
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
        }, props.styles),
        children: (0, $fsr8S$composeRenderProps)(props.children, (children, { isDisabled: isDisabled, isInvalid: isInvalid })=>/*#__PURE__*/ (0, $fsr8S$jsxs)((0, $fsr8S$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $fsr8S$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                        isDisabled: isDisabled,
                        isRequired: props.isRequired,
                        size: props.size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: props.contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $fsr8S$jsxs)((0, $9afd80978c252040$export$f0fe469072bc6950), {
                        role: "presentation",
                        isDisabled: isDisabled,
                        isInvalid: isInvalid,
                        size: props.size,
                        styles: fieldGroupCss,
                        children: [
                            /*#__PURE__*/ (0, $fsr8S$jsx)((0, $fsr8S$InputContext).Consumer, {
                                children: (ctx)=>/*#__PURE__*/ (0, $fsr8S$jsx)((0, $fsr8S$InputContext).Provider, {
                                        value: {
                                            ...ctx,
                                            ref: (0, $fsr8S$mergeRefs)(ctx?.ref, inputRef)
                                        },
                                        children: children
                                    })
                            }),
                            isInvalid && /*#__PURE__*/ (0, $fsr8S$jsx)((0, $9afd80978c252040$export$bda0d075e0e342c9), {
                                isDisabled: isDisabled
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $fsr8S$jsx)((0, $9afd80978c252040$export$a67c0bc59081311a), {
                        size: props.size,
                        isDisabled: isDisabled,
                        isInvalid: isInvalid,
                        description: description,
                        children: errorMessage
                    })
                ]
            }))
    });
});
function $d946f50010ba937f$var$TextAreaInput() {
    // Force re-render when value changes so we update the height.
    (0, $fsr8S$useSlottedContext)((0, $fsr8S$TextAreaContext));
    let onHeightChange = (input)=>{
        // TODO: only do this if an explicit height is not given?
        if (input) {
            let prevAlignment = input.style.alignSelf;
            let prevOverflow = input.style.overflow;
            // Firefox scroll position is lost when overflow: 'hidden' is applied so we skip applying it.
            // The measure/applied height is also incorrect/reset if we turn on and off
            // overflow: hidden in Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1787062
            let isFirefox = 'MozAppearance' in input.style;
            if (!isFirefox) input.style.overflow = 'hidden';
            input.style.alignSelf = 'start';
            input.style.height = 'auto';
            // offsetHeight - clientHeight accounts for the border/padding.
            input.style.height = `${input.scrollHeight + (input.offsetHeight - input.clientHeight)}px`;
            input.style.overflow = prevOverflow;
            input.style.alignSelf = prevAlignment;
        }
    };
    return /*#__PURE__*/ (0, $fsr8S$jsx)((0, $fsr8S$TextArea), {
        ref: onHeightChange,
        // Workaround for baseline alignment bug in Safari.
        // https://bugs.webkit.org/show_bug.cgi?id=142968
        placeholder: " ",
        className: function anonymous(props) {
            let rules = " .";
            rules += ' Ca';
            rules += ' Da';
            rules += ' E-1dbqcch';
            rules += ' F-1dbqcch';
            rules += ' o-375tou';
            rules += ' __na';
            rules += ' ba';
            rules += ' a-17zqamw';
            rules += ' _c-17zqamw';
            rules += ' _d-17zqamw';
            rules += ' _e-17zqamw';
            rules += ' _f-17zqamw';
            rules += ' _9-3t1y';
            rules += ' qo';
            rules += ' _La';
            rules += ' wf';
            rules += ' __Ia';
            rules += ' __vb';
            if (props.size === "XL") rules += ' -_375tou_o-j';
            else if (props.size === "L") rules += ' -_375tou_o-i';
            else if (props.size === "S") rules += ' -_375tou_o-h';
            else if (props.size === "XS") rules += ' -_375tou_o-g';
            else rules += ' -_375tou_o-f';
            return rules;
        }
    });
}


export {$d946f50010ba937f$export$2129e27b3ef0d483 as TextFieldContext, $d946f50010ba937f$export$2c73285ae9390cec as TextField, $d946f50010ba937f$export$d22444a338b6e3c2 as TextFieldBase, $d946f50010ba937f$export$2dc6166a7e65358c as TextAreaContext, $d946f50010ba937f$export$f5c9f3c2c4054eec as TextArea};
//# sourceMappingURL=TextField.mjs.map
