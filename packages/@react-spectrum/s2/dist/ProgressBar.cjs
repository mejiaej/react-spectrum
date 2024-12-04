require("./ProgressBar.css");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $308b180f49d82d28$exports = require("../icons/runtime.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $gIpiX$reactjsxruntime = require("react/jsx-runtime");
var $gIpiX$reactariacomponents = require("react-aria-components");
var $gIpiX$react = require("react");
var $gIpiX$reactspectrumutils = require("@react-spectrum/utils");
var $gIpiX$reactariai18n = require("@react-aria/i18n");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ProgressBarContext", () => $83e59061dd392311$export$e9f3bf65a26ce129);
$parcel$export(module.exports, "ProgressBar", () => $83e59061dd392311$export$c17561cb55d4db30);
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







const $83e59061dd392311$export$e9f3bf65a26ce129 = /*#__PURE__*/ (0, $gIpiX$react.createContext)(null);
const $83e59061dd392311$var$indeterminateLTR = "-vliq1d";
const $83e59061dd392311$var$indeterminateRTL = "-_167g35";
const $83e59061dd392311$var$wrapper = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $q = false;
    let $r = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*q/.test(p)) $q = true;
        if (/^\s*r/.test(p)) $r = true;
    }
    if (!$U) rules += ' Uc';
    rules += ' _Zf';
    if (props.isIndeterminate) {
        if (props.labelPosition === "side") rules += ' __h-jyg4vb';
        else if (props.labelPosition === "top") rules += ' __h-375yi6';
    } else {
        if (props.labelPosition === "side") rules += ' __h-jyg4vb';
        else if (props.labelPosition === "top") rules += ' __h-1egg2pz';
    }
    if (props.isIndeterminate) {
        if (props.labelPosition === "side") rules += ' __j-1uh5wa';
        else if (props.labelPosition === "top") rules += ' __j-h9yogq';
    } else {
        if (props.labelPosition === "side") rules += ' __j-7y9rdj';
        else if (props.labelPosition === "top") rules += ' __j-6w8ip8';
    }
    rules += ' _1d';
    rules += ' __Fa';
    if (!$q) rules += ' q_a';
    if (!$r) rules += ' r____________N';
    if (props.size === "XL") rules += ' -aqrvqh_k-j';
    else if (props.size === "L") rules += ' -aqrvqh_k-i';
    else if (props.size === "S") rules += ' -aqrvqh_k-h';
    else if (props.size === "XS") rules += ' -aqrvqh_k-g';
    else rules += ' -aqrvqh_k-f';
    rules += ' -_1urhtf5_k-s';
    rules += ' -_1inj1bc_i--q18lfg';
    rules += ' je';
    return rules;
};
const $83e59061dd392311$var$valueStyles = function anonymous(props) {
    let rules = " .";
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
    rules += ' aa_____x';
    if (props.staticColor === "black") rules += ' a_____s';
    else if (props.staticColor === "white") rules += ' a_____d';
    else if (props.isDisabled) rules += ' aj';
    else {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else if (props.isHovered) rules += ' an';
        else rules += ' am';
    }
    rules += ' __Hb';
    rules += ' __a-4lc1fm';
    rules += ' __b-4lc1fm';
    rules += ' __c-4lc1fm';
    rules += ' __d-4lc1fm';
    return rules;
};
const $83e59061dd392311$var$trackStyles = function anonymous(props) {
    let rules = " .";
    rules += ' __a-3773ju';
    rules += ' __b-3773ju';
    rules += ' __c-3773ju';
    rules += ' __d-3773ju';
    if (props.size === "XL") rules += ' qj';
    else if (props.size === "L") rules += ' qi';
    else if (props.size === "S") rules += ' qh';
    else if (props.size === "XS") rules += ' qg';
    else rules += ' qf';
    if (props.isQuiet) rules += ' __ma';
    else rules += ' __m-1s8glxue';
    if (props.size === "XL") rules += ' -usygro_l-____g';
    else if (props.size === "L") rules += ' -usygro_l-___0';
    else if (props.size === "S") rules += ' -usygro_l-___u';
    else rules += ' -usygro_l-___K';
    rules += ' m-rwozxi';
    rules += ' __vb';
    rules += ' __wb';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' ba_____w';
    if (props.staticColor === "black") rules += ' b_____n';
    else if (props.staticColor === "white") rules += ' b____7';
    else rules += ' bi';
    rules += ' _Nab';
    rules += ' _Na';
    rules += ' _Lab';
    rules += ' _La';
    rules += ' da_____x';
    rules += ' da';
    rules += ' __Q-3t1y';
    if (props.size === "XL") rules += ' ky';
    else if (props.size === "L") rules += ' kw';
    else if (props.size === "M") rules += ' ku';
    else if (props.size === "S") rules += ' ks';
    else rules += ' ku';
    return rules;
};
const $83e59061dd392311$var$fill = function anonymous(props) {
    let rules = " .";
    rules += ' kb';
    rules += ' wf';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' ba_____x';
    if (props.staticColor === "black") rules += ' b_____s';
    else if (props.staticColor === "white") rules += ' b_____f';
    else {
        if (props.isPressed) rules += ' b_____F';
        else if (props.isFocusVisible) rules += ' b_____F';
        else if (props.isHovered) rules += ' b_____F';
        else rules += ' b_____E';
    }
    if (props.isIndeterminate) rules += ' lb';
    if (props.isIndeterminate) rules += ' __Gh';
    return rules;
};
const $83e59061dd392311$var$indeterminateAnimation = function anonymous(props) {
    let rules = " .";
    if (props.direction === "rtl") rules += ' _S-2vmxa6';
    else if (props.direction === "ltr") rules += ' _S-1aanztv';
    rules += ' _T-yjb9nq';
    rules += ' _Ya';
    rules += ' _X-twzmrf';
    rules += ' __Pd';
    rules += ' Uc';
    return rules;
};
const $83e59061dd392311$export$c17561cb55d4db30 = /*#__PURE__*/ (0, $gIpiX$react.forwardRef)(function ProgressBar(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $83e59061dd392311$export$e9f3bf65a26ce129);
    let { label: label, size: size = 'M', staticColor: staticColor, isIndeterminate: isIndeterminate, labelPosition: labelPosition = 'top', UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '' } = props;
    let domRef = (0, $gIpiX$reactspectrumutils.useDOMRef)(ref);
    let { direction: direction } = (0, $gIpiX$reactariai18n.useLocale)();
    return /*#__PURE__*/ (0, $gIpiX$reactjsxruntime.jsx)((0, $gIpiX$reactariacomponents.ProgressBar), {
        ...props,
        ref: domRef,
        style: UNSAFE_style,
        className: UNSAFE_className + $83e59061dd392311$var$wrapper({
            ...props,
            size: size,
            labelPosition: labelPosition
        }, props.styles),
        children: ({ percentage: percentage, valueText: valueText })=>/*#__PURE__*/ (0, $gIpiX$reactjsxruntime.jsxs)((0, $gIpiX$reactjsxruntime.Fragment), {
                children: [
                    label && /*#__PURE__*/ (0, $gIpiX$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                        size: size,
                        labelAlign: "start",
                        labelPosition: labelPosition,
                        staticColor: staticColor,
                        children: label
                    }),
                    label && !isIndeterminate && /*#__PURE__*/ (0, $gIpiX$reactjsxruntime.jsx)("span", {
                        className: $83e59061dd392311$var$valueStyles({
                            size: size,
                            labelAlign: 'end',
                            staticColor: staticColor
                        }),
                        children: valueText
                    }),
                    /*#__PURE__*/ (0, $gIpiX$reactjsxruntime.jsx)("div", {
                        className: $83e59061dd392311$var$trackStyles({
                            ...props
                        }),
                        children: /*#__PURE__*/ (0, $gIpiX$reactjsxruntime.jsx)("div", {
                            className: (0, $308b180f49d82d28$exports.mergeStyles)($83e59061dd392311$var$fill({
                                ...props,
                                staticColor: staticColor
                            }), isIndeterminate ? $83e59061dd392311$var$indeterminateAnimation({
                                direction: direction
                            }) : null),
                            style: {
                                width: isIndeterminate ? undefined : percentage + '%'
                            }
                        })
                    })
                ]
            })
    });
});


//# sourceMappingURL=ProgressBar.cjs.map
