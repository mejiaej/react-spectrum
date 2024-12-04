require("./ColorField.css");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $4UooL$reactjsxruntime = require("react/jsx-runtime");
var $4UooL$reactariacomponents = require("react-aria-components");
var $4UooL$react = require("react");
var $4UooL$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorFieldContext", () => $c7ab41f1e9757931$export$44644b8a16031b5b);
$parcel$export(module.exports, "ColorField", () => $c7ab41f1e9757931$export$b865d4358897bb17);
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






const $c7ab41f1e9757931$export$44644b8a16031b5b = /*#__PURE__*/ (0, $4UooL$react.createContext)(null);
const $c7ab41f1e9757931$export$b865d4358897bb17 = /*#__PURE__*/ (0, $4UooL$react.forwardRef)(function ColorField(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $c7ab41f1e9757931$export$44644b8a16031b5b);
    let formContext = (0, $4UooL$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let { label: label, description: description, errorMessage: errorMessage, necessityIndicator: necessityIndicator, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', styles: styles, ...fieldProps } = props;
    // Expose imperative interface for ref
    let domRef = (0, $4UooL$react.useRef)(null);
    let inputRef = (0, $4UooL$react.useRef)(null);
    (0, $4UooL$react.useImperativeHandle)(ref, ()=>({
            ...(0, $4UooL$reactspectrumutils.createFocusableRef)(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        }));
    return /*#__PURE__*/ (0, $4UooL$reactjsxruntime.jsx)((0, $4UooL$reactariacomponents.ColorField), {
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
        children: ({ isDisabled: isDisabled, isInvalid: isInvalid })=>/*#__PURE__*/ (0, $4UooL$reactjsxruntime.jsxs)((0, $4UooL$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $4UooL$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                        isDisabled: isDisabled,
                        isRequired: props.isRequired,
                        size: props.size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: props.contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $4UooL$reactjsxruntime.jsxs)((0, $a0b996a550bb0891$exports.FieldGroup), {
                        role: "presentation",
                        isDisabled: isDisabled,
                        isInvalid: isInvalid,
                        size: props.size,
                        children: [
                            /*#__PURE__*/ (0, $4UooL$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.Input), {
                                ref: inputRef
                            }),
                            isInvalid && /*#__PURE__*/ (0, $4UooL$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldErrorIcon), {
                                isDisabled: isDisabled
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4UooL$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.HelpText), {
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


//# sourceMappingURL=ColorField.cjs.map
