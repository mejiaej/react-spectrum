require("./SearchField.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $4fb579ecc195bd2b$exports = require("./ClearButton.cjs");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $7218fc0a0ade65d7$exports = require("../icons/Search.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $fsjBd$reactjsxruntime = require("react/jsx-runtime");
var $fsjBd$reactariacomponents = require("react-aria-components");
var $fsjBd$react = require("react");
var $fsjBd$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SearchFieldContext", () => $f0dfe14258307d4b$export$d1c4e4c63cb03a11);
$parcel$export(module.exports, "SearchField", () => $f0dfe14258307d4b$export$b94867ecbd698f21);
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










const $f0dfe14258307d4b$export$d1c4e4c63cb03a11 = /*#__PURE__*/ (0, $fsjBd$react.createContext)(null);
const $f0dfe14258307d4b$export$b94867ecbd698f21 = /*#__PURE__*/ (0, $fsjBd$react.forwardRef)(function SearchField(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $f0dfe14258307d4b$export$d1c4e4c63cb03a11);
    let formContext = (0, $fsjBd$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let { label: label, description: description, errorMessage: errorMessage, necessityIndicator: necessityIndicator, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, ...searchFieldProps } = props;
    let domRef = (0, $fsjBd$react.useRef)(null);
    let inputRef = (0, $fsjBd$react.useRef)(null);
    // Expose imperative interface for ref
    (0, $fsjBd$react.useImperativeHandle)(ref, ()=>({
            ...(0, $fsjBd$reactspectrumutils.createFocusableRef)(domRef, inputRef),
            select () {
                if (inputRef.current) inputRef.current.select();
            },
            getInputElement () {
                return inputRef.current;
            }
        }));
    return /*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsx)((0, $fsjBd$reactariacomponents.SearchField), {
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
        children: ({ isDisabled: isDisabled, isInvalid: isInvalid, isEmpty: isEmpty })=>/*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsxs)((0, $fsjBd$reactjsxruntime.Fragment), {
                children: [
                    label && /*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                        isDisabled: isDisabled,
                        isRequired: props.isRequired,
                        size: props.size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: props.contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsxs)((0, $a0b996a550bb0891$exports.FieldGroup), {
                        isDisabled: isDisabled,
                        size: props.size,
                        styles: " . _vf _wf _xf _yf CJ Da",
                        children: [
                            /*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsx)((0, $fsjBd$reactariacomponents.Provider), {
                                values: [
                                    [
                                        (0, $bde97c91243ed164$exports.IconContext),
                                        {
                                            render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                                                slot: 'icon',
                                                styles: " . _8-3t1x zG zbH -rwx0fg_e-b"
                                            }),
                                            styles: " . l-1sthc3k k-1sthc3k y-oelgqu"
                                        }
                                    ]
                                ],
                                children: /*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsx)((0, $7218fc0a0ade65d7$exports.default), {})
                            }),
                            /*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.Input), {
                                ref: inputRef,
                                UNSAFE_className: "-_1wbkwcp"
                            }),
                            !isEmpty && !searchFieldProps.isReadOnly && /*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsx)((0, $4fb579ecc195bd2b$exports.ClearButton), {
                                size: props.size
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $fsjBd$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.HelpText), {
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


//# sourceMappingURL=SearchField.cjs.map
