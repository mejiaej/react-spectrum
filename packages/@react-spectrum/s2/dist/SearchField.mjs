import "./SearchField.css";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa} from "./CenterBaseline.mjs";
import {ClearButton as $f6a62e6e68437458$export$13ec83e50bf04290} from "./ClearButton.mjs";
import {FieldGroup as $9afd80978c252040$export$f0fe469072bc6950, FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414, HelpText as $9afd80978c252040$export$a67c0bc59081311a, Input as $9afd80978c252040$export$f5b8910cec6cf069} from "./Field.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import $279039872474ccc7$export$2e2bcd8739ae039 from "../icons/Search.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $iu0JR$jsx, jsxs as $iu0JR$jsxs, Fragment as $iu0JR$Fragment} from "react/jsx-runtime";
import {SearchField as $iu0JR$SearchField, Provider as $iu0JR$Provider} from "react-aria-components";
import {createContext as $iu0JR$createContext, forwardRef as $iu0JR$forwardRef, useContext as $iu0JR$useContext, useRef as $iu0JR$useRef, useImperativeHandle as $iu0JR$useImperativeHandle} from "react";
import {createFocusableRef as $iu0JR$createFocusableRef} from "@react-spectrum/utils";

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










const $e3d0f3db0eb61b92$export$d1c4e4c63cb03a11 = /*#__PURE__*/ (0, $iu0JR$createContext)(null);
const $e3d0f3db0eb61b92$export$b94867ecbd698f21 = /*#__PURE__*/ (0, $iu0JR$forwardRef)(function SearchField(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $e3d0f3db0eb61b92$export$d1c4e4c63cb03a11);
    let formContext = (0, $iu0JR$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let { label: label, description: description, errorMessage: errorMessage, necessityIndicator: necessityIndicator, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, ...searchFieldProps } = props;
    let domRef = (0, $iu0JR$useRef)(null);
    let inputRef = (0, $iu0JR$useRef)(null);
    // Expose imperative interface for ref
    (0, $iu0JR$useImperativeHandle)(ref, ()=>({
            ...(0, $iu0JR$createFocusableRef)(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        }));
    return /*#__PURE__*/ (0, $iu0JR$jsx)((0, $iu0JR$SearchField), {
        ...searchFieldProps,
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
            rules += ' -oelgqu_A--177861o';
            if (props.isDisabled) {
                rules += ' aa_____B';
                rules += ' aj';
            } else {
                if (props.isPressed) rules += ' ao';
                else if (props.isFocusVisible) rules += ' ao';
                else if (props.isHovered) rules += ' ao';
                else rules += ' an';
            }
            return rules;
        }({
            size: props.size,
            labelPosition: labelPosition,
            isInForm: !!formContext
        }, props.styles),
        children: ({ isDisabled: isDisabled, isInvalid: isInvalid, isEmpty: isEmpty })=>/*#__PURE__*/ (0, $iu0JR$jsxs)((0, $iu0JR$Fragment), {
                children: [
                    label && /*#__PURE__*/ (0, $iu0JR$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                        isDisabled: isDisabled,
                        isRequired: props.isRequired,
                        size: props.size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: props.contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $iu0JR$jsxs)((0, $9afd80978c252040$export$f0fe469072bc6950), {
                        isDisabled: isDisabled,
                        size: props.size,
                        styles: " . _vf _wf _xf _yf CJ Da",
                        children: [
                            /*#__PURE__*/ (0, $iu0JR$jsx)((0, $iu0JR$Provider), {
                                values: [
                                    [
                                        (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                                        {
                                            render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                                                slot: 'icon',
                                                styles: " . _8-3t1x zG zbH -rwx0fg_e-b"
                                            }),
                                            styles: " . l-1sthc3k k-1sthc3k y-oelgqu"
                                        }
                                    ]
                                ],
                                children: /*#__PURE__*/ (0, $iu0JR$jsx)((0, $279039872474ccc7$export$2e2bcd8739ae039), {})
                            }),
                            /*#__PURE__*/ (0, $iu0JR$jsx)((0, $9afd80978c252040$export$f5b8910cec6cf069), {
                                ref: inputRef,
                                UNSAFE_className: "-_1wbkwcp"
                            }),
                            !isEmpty && !searchFieldProps.isReadOnly && /*#__PURE__*/ (0, $iu0JR$jsx)((0, $f6a62e6e68437458$export$13ec83e50bf04290), {
                                size: props.size
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iu0JR$jsx)((0, $9afd80978c252040$export$a67c0bc59081311a), {
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


export {$e3d0f3db0eb61b92$export$d1c4e4c63cb03a11 as SearchFieldContext, $e3d0f3db0eb61b92$export$b94867ecbd698f21 as SearchField};
//# sourceMappingURL=SearchField.mjs.map
