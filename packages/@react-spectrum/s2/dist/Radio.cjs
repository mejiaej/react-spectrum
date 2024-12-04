require("./Radio.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $fd22C$reactjsxruntime = require("react/jsx-runtime");
var $fd22C$reactariacomponents = require("react-aria-components");
var $fd22C$react = require("react");
var $fd22C$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Radio", () => $49f41f366ec3019f$export$d7b12c4107be0d61);
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






const $49f41f366ec3019f$var$wrapper = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $__a = false;
    for (let p of matches)if (/^\s*__a/.test(p)) $__a = true;
    rules += ' _Zd';
    rules += ' jF';
    rules += ' _1d';
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
const $49f41f366ec3019f$var$circle = function anonymous(props) {
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
    rules += ' k-375toq';
    rules += ' _8-3t1x';
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' _2d';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' wa';
    rules += ' __na';
    if (props.isSelected) rules += ' u-uyu8pk';
    else rules += ' uc';
    if (props.isSelected) rules += ' v-uyu8pk';
    else rules += ' vc';
    if (props.isSelected) rules += ' s-uyu8pk';
    else rules += ' sc';
    if (props.isSelected) rules += ' t-uyu8pk';
    else rules += ' tc';
    rules += ' _zb';
    rules += ' bd';
    if (props.isDisabled) {
        rules += ' ca_____B';
        rules += ' cj';
    } else if (props.isInvalid) {
        rules += ' ca_____C';
        if (props.isPressed) rules += ' cQ';
        else if (props.isFocusVisible) rules += ' cP';
        else if (props.isHovered) rules += ' cP';
        else rules += ' cO';
    } else if (props.isSelected) {
        rules += ' ca_____z';
        if (props.isEmphasized) {
            if (props.isPressed) rules += ' cz';
            else if (props.isFocusVisible) rules += ' cz';
            else if (props.isHovered) rules += ' cz';
            else rules += ' cy';
        }
    } else {
        rules += ' ca_____v';
        if (props.isPressed) rules += ' co';
        else if (props.isFocusVisible) rules += ' co';
        else if (props.isHovered) rules += ' co';
        else rules += ' cn';
    }
    if (props.size === "XL") rules += ' -_375toq_k-g';
    else if (props.size === "L") rules += ' -_375toq_k-m';
    else if (props.size === "S") rules += ' -_375toq_k-l';
    else rules += ' -_375toq_k-k';
    return rules;
};
const $49f41f366ec3019f$export$d7b12c4107be0d61 = /*#__PURE__*/ (0, $fd22C$react.forwardRef)(function Radio(props, ref) {
    let { children: children, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style } = props;
    let circleRef = (0, $fd22C$react.useRef)(null);
    let inputRef = (0, $fd22C$react.useRef)(null);
    let domRef = (0, $fd22C$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let isInForm = !!(0, $fd22C$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    let { size: size = 'M', ...allProps } = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    return /*#__PURE__*/ (0, $fd22C$reactjsxruntime.jsx)((0, $fd22C$reactariacomponents.Radio), {
        ...allProps,
        ref: domRef,
        inputRef: inputRef,
        style: UNSAFE_style,
        className: (renderProps)=>UNSAFE_className + $49f41f366ec3019f$var$wrapper({
                ...renderProps,
                isInForm: isInForm,
                size: size
            }, allProps.styles),
        children: (renderProps)=>/*#__PURE__*/ (0, $fd22C$reactjsxruntime.jsxs)((0, $fd22C$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $fd22C$reactjsxruntime.jsx)((0, $e991cbcdf82ced71$exports.CenterBaseline), {
                        children: /*#__PURE__*/ (0, $fd22C$reactjsxruntime.jsx)("div", {
                            ref: circleRef,
                            style: (0, $2061c83559b50a66$exports.pressScale)(circleRef)(renderProps),
                            className: $49f41f366ec3019f$var$circle({
                                ...renderProps,
                                isEmphasized: allProps.isEmphasized,
                                isSelected: renderProps.isSelected,
                                size: size
                            })
                        })
                    }),
                    children
                ]
            })
    });
});


//# sourceMappingURL=Radio.cjs.map
