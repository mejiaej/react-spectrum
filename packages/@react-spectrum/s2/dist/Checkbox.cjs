require("./Checkbox.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $dba2b18fc5727f9b$exports = require("./Checkmark.cjs");
var $84c37b7bd5c1374e$exports = require("./Dash.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $gg2RS$reactjsxruntime = require("react/jsx-runtime");
var $gg2RS$reactariacomponents = require("react-aria-components");
var $gg2RS$react = require("react");
var $gg2RS$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CheckboxContext", () => $af04e099a53d3e85$export$b085522c77523c51);
$parcel$export(module.exports, "box", () => $af04e099a53d3e85$export$827f4ee28efc37);
$parcel$export(module.exports, "iconStyles", () => $af04e099a53d3e85$export$2c99b98b77550cb4);
$parcel$export(module.exports, "Checkbox", () => $af04e099a53d3e85$export$48513f6b9f8ce62d);
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









const $af04e099a53d3e85$export$b085522c77523c51 = /*#__PURE__*/ (0, $gg2RS$react.createContext)(null);
const $af04e099a53d3e85$var$wrapper = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    let $__a = false;
    for (let p of matches){
        if (/^\s*l/.test(p)) $l = true;
        if (/^\s*__a/.test(p)) $__a = true;
    }
    rules += ' _Zd';
    rules += ' jF';
    rules += ' _1d';
    if (!$l) rules += ' le';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
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
    rules += ' _eb';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.isDisabled) {
        rules += ' aa_____B';
        rules += ' aj';
    } else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' _Ob';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (!$__a) {
        if (props.isInForm) rules += ' __a-4a7c5l';
    }
    rules += ' __R-yksgrp';
    return rules;
};
const $af04e099a53d3e85$export$827f4ee28efc37 = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    if (props.size === "XL") rules += ' lg';
    else if (props.size === "L") rules += ' lm';
    else if (props.size === "S") rules += ' ll';
    else rules += ' lk';
    if (props.size === "XL") rules += ' kg';
    else if (props.size === "L") rules += ' km';
    else if (props.size === "S") rules += ' kl';
    else rules += ' kk';
    rules += ' _vi';
    rules += ' _wi';
    rules += ' _xi';
    rules += ' _yi';
    rules += ' _8-3t1x';
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' _2d';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    rules += ' __na';
    rules += ' wa';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' _zb';
    if (props.isSelected) {
        if (props.isDisabled) {
            rules += ' ba_____B';
            rules += ' bj';
        } else if (props.isInvalid) {
            rules += ' ba_____C';
            if (props.isPressed) rules += ' bP';
            else if (props.isFocusVisible) rules += ' bP';
            else if (props.isHovered) rules += ' bP';
            else rules += ' bO';
        } else {
            rules += ' ba_____z';
            if (props.isEmphasized) {
                if (props.isPressed) rules += ' bz';
                else if (props.isFocusVisible) rules += ' bz';
                else if (props.isHovered) rules += ' bz';
                else rules += ' by';
            } else {
                if (props.isPressed) rules += ' bo';
                else if (props.isFocusVisible) rules += ' bo';
                else if (props.isHovered) rules += ' bo';
                else rules += ' bn';
            }
        }
    } else {
        rules += ' ba_____u';
        rules += ' bd';
    }
    if (props.isSelected) rules += ' ca';
    else if (props.isDisabled) {
        rules += ' ca_____B';
        rules += ' cj';
    } else if (props.isInvalid) {
        rules += ' ca_____C';
        if (props.isPressed) rules += ' cQ';
        else if (props.isFocusVisible) rules += ' cP';
        else if (props.isHovered) rules += ' cP';
        else rules += ' cO';
    } else {
        rules += ' ca_____v';
        if (props.isPressed) rules += ' co';
        else if (props.isFocusVisible) rules += ' co';
        else if (props.isHovered) rules += ' co';
        else rules += ' cn';
    }
    return rules;
};
const $af04e099a53d3e85$export$2c99b98b77550cb4 = " . -rwx0fg_e-B -rwx0fg_e-a_____Y";
const $af04e099a53d3e85$var$iconSize = {
    S: 'XS',
    M: 'S',
    L: 'M',
    XL: 'L'
};
const $af04e099a53d3e85$export$48513f6b9f8ce62d = /*#__PURE__*/ (0, $gg2RS$react.forwardRef)(function Checkbox({ children: children, ...props }, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $af04e099a53d3e85$export$b085522c77523c51);
    let boxRef = (0, $gg2RS$react.useRef)(null);
    let inputRef = (0, $gg2RS$react.useRef)(null);
    let domRef = (0, $gg2RS$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let isInForm = !!(0, $gg2RS$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let isInCheckboxGroup = !!(0, $gg2RS$react.useContext)((0, $gg2RS$reactariacomponents.CheckboxGroupStateContext));
    let ctx = (0, $gg2RS$reactariacomponents.useSlottedContext)($af04e099a53d3e85$export$b085522c77523c51, props.slot);
    return /*#__PURE__*/ (0, $gg2RS$reactjsxruntime.jsx)((0, $gg2RS$reactariacomponents.Checkbox), {
        ...props,
        ref: domRef,
        inputRef: inputRef,
        style: props.UNSAFE_style,
        className: (renderProps)=>(props.UNSAFE_className || '') + $af04e099a53d3e85$var$wrapper({
                ...renderProps,
                isInForm: isInForm,
                size: props.size || 'M'
            }, props.styles),
        children: (renderProps)=>{
            let checkbox = /*#__PURE__*/ (0, $gg2RS$reactjsxruntime.jsxs)("div", {
                ref: boxRef,
                style: (0, $2061c83559b50a66$exports.pressScale)(boxRef)(renderProps),
                className: $af04e099a53d3e85$export$827f4ee28efc37({
                    ...renderProps,
                    isSelected: renderProps.isSelected || renderProps.isIndeterminate,
                    size: props.size || 'M',
                    isEmphasized: isInCheckboxGroup ? ctx?.isEmphasized : props.isEmphasized
                }),
                children: [
                    renderProps.isIndeterminate && /*#__PURE__*/ (0, $gg2RS$reactjsxruntime.jsx)((0, $84c37b7bd5c1374e$exports.default), {
                        size: $af04e099a53d3e85$var$iconSize[props.size || 'M'],
                        className: $af04e099a53d3e85$export$2c99b98b77550cb4
                    }),
                    renderProps.isSelected && !renderProps.isIndeterminate && /*#__PURE__*/ (0, $gg2RS$reactjsxruntime.jsx)((0, $dba2b18fc5727f9b$exports.default), {
                        size: $af04e099a53d3e85$var$iconSize[props.size || 'M'],
                        className: $af04e099a53d3e85$export$2c99b98b77550cb4
                    })
                ]
            });
            // Only render checkbox without center baseline if no label.
            // This avoids expanding the checkbox height to the font's line height.
            if (!children) return checkbox;
            return /*#__PURE__*/ (0, $gg2RS$reactjsxruntime.jsxs)((0, $gg2RS$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $gg2RS$reactjsxruntime.jsx)((0, $e991cbcdf82ced71$exports.CenterBaseline), {
                        children: checkbox
                    }),
                    children
                ]
            });
        }
    });
});


//# sourceMappingURL=Checkbox.cjs.map
