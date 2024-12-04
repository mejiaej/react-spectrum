require("./Avatar.css");
var $053b76ed3d29e13b$exports = require("./Image.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $1YWJ0$reactjsxruntime = require("react/jsx-runtime");
var $1YWJ0$react = require("react");
var $1YWJ0$reactariautils = require("@react-aria/utils");
var $1YWJ0$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "AvatarContext", () => $38071d9ce246d4cf$export$a20dad690e1279e2);
$parcel$export(module.exports, "Avatar", () => $38071d9ce246d4cf$export$e2255cf6045e8d47);
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





const $38071d9ce246d4cf$var$imageStyles = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W)[^\s]+/g) || [];
    rules += matches.join('');
    let $_8 = false;
    let $_9 = false;
    for (let p of matches){
        if (/^\s*_8/.test(p)) $_8 = true;
        if (/^\s*_9/.test(p)) $_9 = true;
    }
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' lI';
    rules += ' kI';
    if (!$_8) rules += ' _8-3t1x';
    if (!$_9) rules += ' _9-3t1x';
    rules += ' __R-yksgrp';
    if (props.isOverBackground) rules += ' _Lb';
    else rules += ' _La';
    rules += ' d-1de2x0q';
    if (props.isLarge) rules += ' _Nc';
    else rules += ' _Nb';
    return rules;
};
const $38071d9ce246d4cf$export$a20dad690e1279e2 = /*#__PURE__*/ (0, $1YWJ0$react.createContext)(null);
const $38071d9ce246d4cf$export$e2255cf6045e8d47 = /*#__PURE__*/ (0, $1YWJ0$react.forwardRef)(function Avatar(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $38071d9ce246d4cf$export$a20dad690e1279e2);
    let domRef = (0, $1YWJ0$reactspectrumutils.useDOMRef)(ref);
    let { alt: alt = '', src: src, UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', size: size = 24, isOverBackground: isOverBackground, slot: slot = 'avatar', ...otherProps } = props;
    const domProps = (0, $1YWJ0$reactariautils.filterDOMProps)(otherProps);
    let remSize = size / 16 + 'rem';
    let isLarge = size >= 64;
    return /*#__PURE__*/ (0, $1YWJ0$reactjsxruntime.jsx)((0, $053b76ed3d29e13b$exports.Image), {
        ...domProps,
        ref: domRef,
        slot: slot,
        alt: alt,
        UNSAFE_style: {
            ...UNSAFE_style,
            width: remSize,
            height: remSize
        },
        UNSAFE_className: UNSAFE_className,
        styles: $38071d9ce246d4cf$var$imageStyles({
            isOverBackground: isOverBackground,
            isLarge: isLarge
        }, props.styles),
        src: src
    });
});


//# sourceMappingURL=Avatar.cjs.map
