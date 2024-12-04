require("./Switch.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $bxoLC$reactjsxruntime = require("react/jsx-runtime");
var $bxoLC$reactariacomponents = require("react-aria-components");
var $bxoLC$react = require("react");
var $bxoLC$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SwitchContext", () => $0bb99ae32af8596c$export$8699e3b644d5a28a);
$parcel$export(module.exports, "Switch", () => $0bb99ae32af8596c$export$b5d5cf8927ab7262);
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







const $0bb99ae32af8596c$export$8699e3b644d5a28a = /*#__PURE__*/ (0, $bxoLC$react.createContext)(null);
const $0bb99ae32af8596c$var$wrapper = function anonymous(props, overrides) {
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
const $0bb99ae32af8596c$var$track = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' -rcxrzo_l--unb2ci';
    if (props.size === "XL") rules += ' -_14pdrm5_k-g';
    else if (props.size === "L") rules += ' -_14pdrm5_k-m';
    else if (props.size === "S") rules += ' -_14pdrm5_k-l';
    else rules += ' -_14pdrm5_k-k';
    rules += ' l-rcxrzo';
    rules += ' k-14pdrm5';
    rules += ' __na';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    rules += ' wa';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' _zb';
    if (props.isSelected) rules += ' ca';
    else if (props.isDisabled) {
        rules += ' ca_____B';
        rules += ' cj';
    } else {
        rules += ' ca_____v';
        if (props.isPressed) rules += ' co';
        else if (props.isFocusVisible) rules += ' co';
        else if (props.isHovered) rules += ' co';
        else rules += ' cn';
    }
    if (props.isSelected) {
        if (props.isDisabled) {
            rules += ' ba_____B';
            rules += ' bj';
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
    } else rules += ' bd';
    return rules;
};
const $0bb99ae32af8596c$var$handle = function anonymous(props) {
    let rules = " .";
    rules += ' kb';
    rules += ' _bb';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    if (props.isSelected) rules += ' bd';
    else if (props.isDisabled) {
        rules += ' ba_____B';
        rules += ' bj';
    } else {
        if (props.isPressed) rules += ' bo';
        else if (props.isFocusVisible) rules += ' bo';
        else if (props.isHovered) rules += ' bo';
        else rules += ' bn';
    }
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    return rules;
};
// Use an inline style to calculate the transform so we can combine it with the press scale.
const $0bb99ae32af8596c$var$transformStyle = ({ isSelected: isSelected })=>({
        // In the default state, the handle is 8px smaller than the track. When selected it grows to 6px smaller than the track.
        // Normally this could be calculated as a scale transform with (trackHeight - 8px) / trackHeight, however,
        // CSS does not allow division with units. To solve this we use a 3d perspective transform. Perspective is the
        // distance from the Z=0 plane to the viewer. Since we want to scale the handle by a fixed amount and we cannot divide
        // by a value with units, we can set the Z translation to a fixed amount and change the perspective in order to achieve
        // the desired effect. Given the following formula:
        //
        //   scale = perspective / (perspective - translateZ)
        //
        // and desired scale factors (accounting for the 2px border on each side of the track):
        //
        //   defaultScale = (trackHeight - 8px) / (trackHeight - 4px)
        //   selectedScale = (trackHeight - 6px) / (trackHeight - 4px)
        //
        // we can solve for the perspective needed in each case where translateZ is hard coded to -4px:
        //
        //    defaultPerspective = trackHeight - 8px
        //    selectedPerspective = 2 * (trackHeight - 6px)
        transform: isSelected ? 'translateX(calc(var(--trackWidth) - 100% - 4px)) perspective(calc(2 * (var(--trackHeight) - 6px))) translateZ(-4px)' : 'perspective(calc(var(--trackHeight) - 8px)) translateZ(-4px)'
    });
const $0bb99ae32af8596c$export$b5d5cf8927ab7262 = /*#__PURE__*/ (0, $bxoLC$react.forwardRef)(function Switch(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $0bb99ae32af8596c$export$8699e3b644d5a28a);
    let { children: children, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style } = props;
    let inputRef = (0, $bxoLC$react.useRef)(null);
    let domRef = (0, $bxoLC$reactspectrumutils.useFocusableRef)(ref, inputRef);
    let handleRef = (0, $bxoLC$react.useRef)(null);
    let isInForm = !!(0, $bxoLC$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    return /*#__PURE__*/ (0, $bxoLC$reactjsxruntime.jsx)((0, $bxoLC$reactariacomponents.Switch), {
        ...props,
        ref: domRef,
        inputRef: inputRef,
        style: UNSAFE_style,
        className: (renderProps)=>UNSAFE_className + $0bb99ae32af8596c$var$wrapper({
                ...renderProps,
                isInForm: isInForm,
                size: props.size || 'M'
            }, props.styles),
        children: (renderProps)=>/*#__PURE__*/ (0, $bxoLC$reactjsxruntime.jsxs)((0, $bxoLC$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $bxoLC$reactjsxruntime.jsx)((0, $e991cbcdf82ced71$exports.CenterBaseline), {
                        children: /*#__PURE__*/ (0, $bxoLC$reactjsxruntime.jsx)("div", {
                            className: $0bb99ae32af8596c$var$track({
                                ...renderProps,
                                size: props.size || 'M',
                                isEmphasized: props.isEmphasized
                            }),
                            children: /*#__PURE__*/ (0, $bxoLC$reactjsxruntime.jsx)("div", {
                                ref: handleRef,
                                style: (0, $2061c83559b50a66$exports.pressScale)(handleRef, $0bb99ae32af8596c$var$transformStyle)(renderProps),
                                className: $0bb99ae32af8596c$var$handle(renderProps)
                            })
                        })
                    }),
                    children
                ]
            })
    });
});


//# sourceMappingURL=Switch.cjs.map
