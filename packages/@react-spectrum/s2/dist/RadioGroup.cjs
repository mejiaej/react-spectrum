require("./RadioGroup.css");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $ijW5U$reactjsxruntime = require("react/jsx-runtime");
var $ijW5U$reactariacomponents = require("react-aria-components");
var $ijW5U$react = require("react");
var $ijW5U$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "RadioGroupContext", () => $10d624be839a1d01$export$a79eda4ff50e30b6);
$parcel$export(module.exports, "RadioGroup", () => $10d624be839a1d01$export$a98f0dcb43a68a25);
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






const $10d624be839a1d01$export$a79eda4ff50e30b6 = /*#__PURE__*/ (0, $ijW5U$react.createContext)(null);
const $10d624be839a1d01$export$a98f0dcb43a68a25 = /*#__PURE__*/ (0, $ijW5U$react.forwardRef)(function RadioGroup(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $10d624be839a1d01$export$a79eda4ff50e30b6);
    let formContext = (0, $ijW5U$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let domRef = (0, $ijW5U$reactspectrumutils.useDOMRef)(ref);
    let { label: label, description: description, errorMessage: errorMessage, children: children, isEmphasized: isEmphasized, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', necessityIndicator: necessityIndicator = 'icon', size: size = 'M', orientation: orientation = 'vertical', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, ...groupProps } = props;
    return /*#__PURE__*/ (0, $ijW5U$reactjsxruntime.jsx)((0, $ijW5U$reactariacomponents.RadioGroup), {
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
            size: size,
            labelPosition: labelPosition,
            isInForm: !!formContext
        }, props.styles),
        children: ({ isDisabled: isDisabled, isInvalid: isInvalid })=>/*#__PURE__*/ (0, $ijW5U$reactjsxruntime.jsxs)((0, $ijW5U$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $ijW5U$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                        isDisabled: isDisabled,
                        isRequired: props.isRequired,
                        size: size,
                        labelPosition: labelPosition,
                        labelAlign: labelAlign,
                        necessityIndicator: necessityIndicator,
                        contextualHelp: props.contextualHelp,
                        children: label
                    }),
                    /*#__PURE__*/ (0, $ijW5U$reactjsxruntime.jsx)("div", {
                        className: function anonymous(props) {
                            let rules = " .";
                            rules += ' __a-4cfph1';
                            rules += ' __b-4cfph1';
                            rules += ' __c-4cfph1';
                            rules += ' __d-4cfph1';
                            rules += ' _Zd';
                            if (props.orientation === "horizontal") rules += ' _6a';
                            else if (props.orientation === "vertical") rules += ' _6b';
                            rules += ' _7a';
                            rules += ' jf';
                            rules += ' i-1inj1bc';
                            return rules;
                        }({
                            orientation: orientation
                        }),
                        children: /*#__PURE__*/ (0, $ijW5U$reactjsxruntime.jsx)((0, $bfa4962d90c8af48$exports.FormContext).Provider, {
                            value: {
                                ...formContext,
                                size: size,
                                isEmphasized: isEmphasized
                            },
                            children: children
                        })
                    }),
                    /*#__PURE__*/ (0, $ijW5U$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.HelpText), {
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


//# sourceMappingURL=RadioGroup.cjs.map
