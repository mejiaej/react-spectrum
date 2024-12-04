require("./CheckboxGroup.css");
var $af04e099a53d3e85$exports = require("./Checkbox.cjs");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $7mIZM$reactjsxruntime = require("react/jsx-runtime");
var $7mIZM$reactariacomponents = require("react-aria-components");
var $7mIZM$react = require("react");
var $7mIZM$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CheckboxGroupContext", () => $883687908275b504$export$baf37c4be89255b8);
$parcel$export(module.exports, "CheckboxGroup", () => $883687908275b504$export$4aa08d5625cb8ead);
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







const $883687908275b504$export$baf37c4be89255b8 = /*#__PURE__*/ (0, $7mIZM$react.createContext)(null);
const $883687908275b504$export$4aa08d5625cb8ead = /*#__PURE__*/ (0, $7mIZM$react.forwardRef)(function CheckboxGroup(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $883687908275b504$export$baf37c4be89255b8);
    let formContext = (0, $7mIZM$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let { label: label, description: description, errorMessage: errorMessage, children: children, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', necessityIndicator: necessityIndicator = 'icon', size: size = 'M', orientation: orientation = 'vertical', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, isEmphasized: isEmphasized, ...groupProps } = props;
    let domRef = (0, $7mIZM$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $7mIZM$reactjsxruntime.jsx)((0, $7mIZM$reactariacomponents.CheckboxGroup), {
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
        children: ({ isDisabled: isDisabled, isInvalid: isInvalid })=>/*#__PURE__*/ (0, $7mIZM$reactjsxruntime.jsxs)((0, $7mIZM$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $7mIZM$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                        isDisabled: isDisabled,
                        isRequired: props.isRequired,
                        size: size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: props.contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $7mIZM$reactjsxruntime.jsx)("div", {
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
                        children: /*#__PURE__*/ (0, $7mIZM$reactjsxruntime.jsx)((0, $bfa4962d90c8af48$exports.FormContext).Provider, {
                            value: {
                                ...formContext,
                                size: size
                            },
                            children: /*#__PURE__*/ (0, $7mIZM$reactjsxruntime.jsx)((0, $af04e099a53d3e85$exports.CheckboxContext).Provider, {
                                value: {
                                    isEmphasized: isEmphasized
                                },
                                children: children
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $7mIZM$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.HelpText), {
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


//# sourceMappingURL=CheckboxGroup.cjs.map
