require("./CloseButton.css");
var $89dd175101ffc43a$exports = require("./Cross.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $bMS5K$reactjsxruntime = require("react/jsx-runtime");
var $bMS5K$reactariacomponents = require("react-aria-components");
var $bMS5K$react = require("react");
var $bMS5K$reactspectrumutils = require("@react-spectrum/utils");
var $bMS5K$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CloseButton", () => $2f907cb84c6e9e75$export$de65de8213222d10);
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








const $2f907cb84c6e9e75$var$hoverBackground = {
    default: 'gray-100',
    staticColor: {
        white: 'transparent-white-100',
        black: 'transparent-black-100'
    }
};
const $2f907cb84c6e9e75$var$styles = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    let $_8 = false;
    for (let p of matches){
        if (/^\s*l/.test(p)) $l = true;
        if (/^\s*_8/.test(p)) $_8 = true;
    }
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    if (props.staticColor === "black") rules += ' db';
    else if (props.staticColor === "white") rules += ' dc';
    else rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' _2d';
    if (!$l) {
        if (props.size === "XL") rules += ' lj';
        else if (props.size === "L") rules += ' li';
        else if (props.size === "S") rules += ' lh';
        else if (props.size === "XS") rules += ' lg';
        else rules += ' lf';
    }
    if (props.size === "XL") rules += ' kj';
    else if (props.size === "L") rules += ' ki';
    else if (props.size === "S") rules += ' kh';
    else if (props.size === "XS") rules += ' kg';
    else rules += ' kf';
    if (!$_8) rules += ' _8-3t1x';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' Ea';
    rules += ' Fa';
    rules += ' Ca';
    rules += ' Da';
    rules += ' wf';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    if (props.isPressed) {
        if (props.staticColor === "black") rules += ' b_____k';
        else if (props.staticColor === "white") rules += ' b____7';
        else rules += ' bg';
    } else if (props.isFocusVisible) {
        if (props.staticColor === "black") rules += ' b_____k';
        else if (props.staticColor === "white") rules += ' b____7';
        else rules += ' bg';
    } else if (props.isHovered) {
        if (props.staticColor === "black") rules += ' b_____k';
        else if (props.staticColor === "white") rules += ' b____7';
        else rules += ' bg';
    } else rules += ' ba';
    if (props.staticColor === "black") {
        if (props.isDisabled) rules += ' -rwx0fg_a-_____n';
        else {
            if (props.isPressed) rules += ' -rwx0fg_a-_____s';
            else if (props.isFocusVisible) rules += ' -rwx0fg_a-_____s';
            else if (props.isHovered) rules += ' -rwx0fg_a-_____s';
            else rules += ' -rwx0fg_a-_____r';
        }
    } else if (props.staticColor === "white") {
        if (props.isDisabled) rules += ' -rwx0fg_a-_____a';
        else {
            if (props.isPressed) rules += ' -rwx0fg_a-_____f';
            else if (props.isFocusVisible) rules += ' -rwx0fg_a-_____f';
            else if (props.isHovered) rules += ' -rwx0fg_a-_____f';
            else rules += ' -rwx0fg_a-_____e';
        }
    } else if (props.isDisabled) rules += ' -rwx0fg_a-j';
    else {
        if (props.isPressed) rules += ' -rwx0fg_a-o';
        else if (props.isFocusVisible) rules += ' -rwx0fg_a-o';
        else if (props.isHovered) rules += ' -rwx0fg_a-o';
        else rules += ' -rwx0fg_a-n';
    }
    return rules;
};
const $2f907cb84c6e9e75$export$c796eec99a15b55d = /*#__PURE__*/ (0, $bMS5K$react.createContext)(null);
const $2f907cb84c6e9e75$export$de65de8213222d10 = /*#__PURE__*/ (0, $bMS5K$react.forwardRef)(function CloseButton(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $2f907cb84c6e9e75$export$c796eec99a15b55d);
    let { UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '' } = props;
    let domRef = (0, $bMS5K$reactspectrumutils.useFocusableRef)(ref);
    let stringFormatter = (0, $bMS5K$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    return /*#__PURE__*/ (0, $bMS5K$reactjsxruntime.jsx)((0, $bMS5K$reactariacomponents.Button), {
        ...props,
        ref: domRef,
        slot: "close",
        "aria-label": stringFormatter.format('dialog.dismiss'),
        style: (0, $2061c83559b50a66$exports.pressScale)(domRef, UNSAFE_style),
        className: (renderProps)=>UNSAFE_className + $2f907cb84c6e9e75$var$styles({
                ...renderProps,
                staticColor: props.staticColor
            }, props.styles),
        children: /*#__PURE__*/ (0, $bMS5K$reactjsxruntime.jsx)((0, $89dd175101ffc43a$exports.default), {
            size: {
                S: 'L',
                M: 'XL',
                L: 'XXL',
                XL: 'XXXL'
            }[props.size || 'M']
        })
    });
});


//# sourceMappingURL=CloseButton.cjs.map
