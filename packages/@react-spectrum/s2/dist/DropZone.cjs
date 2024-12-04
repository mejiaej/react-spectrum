require("./DropZone.css");
var $55f1b8940d3e02db$exports = require("./IllustratedMessage.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $faaBC$reactjsxruntime = require("react/jsx-runtime");
var $faaBC$reactariacomponents = require("react-aria-components");
var $faaBC$react = require("react");
var $faaBC$reactspectrumutils = require("@react-spectrum/utils");
var $faaBC$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DropZoneContext", () => $797cda10ca96fc86$export$14a72053295ff9a6);
$parcel$export(module.exports, "DropZone", () => $797cda10ca96fc86$export$3c6489d84dc98b6);
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







const $797cda10ca96fc86$export$14a72053295ff9a6 = /*#__PURE__*/ (0, $faaBC$react.createContext)(null);
const $797cda10ca96fc86$var$dropzone = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    for (let p of matches)if (/^\s*U/.test(p)) $U = true;
    rules += ' _Zd';
    rules += ' _2d';
    rules += ' _1c';
    if (!$U) rules += ' Uc';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' ao';
    if (props.isDropTarget) rules += ' wa';
    else rules += ' wb';
    if (props.isDropTarget) rules += ' br';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    if (props.isFocusVisible) rules += ' cx';
    else if (props.isDropTarget) rules += ' cx';
    else rules += ' ci';
    rules += ' _vd';
    rules += ' _wd';
    rules += ' _xd';
    rules += ' _yd';
    rules += ' Eh';
    rules += ' Fh';
    rules += ' Ch';
    rules += ' Dh';
    return rules;
};
const $797cda10ca96fc86$var$banner = function anonymous(props) {
    let rules = " .";
    rules += ' Ua';
    rules += ' Ya';
    rules += ' _aa';
    rules += ' y_d';
    rules += ' z_d';
    rules += ' _Zd';
    rules += ' _1c';
    rules += ' _2d';
    rules += ' o-375tou';
    rules += ' le';
    if (props.size === "L") rules += ' r___L';
    else if (props.size === "S") rules += ' r__Z';
    else rules += ' r___v';
    if (props.isPressed) rules += ' b_____F';
    else if (props.isFocusVisible) rules += ' b_____F';
    else if (props.isHovered) rules += ' b_____F';
    else rules += ' b_____E';
    rules += ' _vc';
    rules += ' _wc';
    rules += ' _xc';
    rules += ' _yc';
    rules += ' ac';
    rules += ' _ed';
    rules += ' E-17c1d5h';
    rules += ' F-17c1d5h';
    rules += ' C-17c1d5h';
    rules += ' D-17c1d5h';
    rules += ' -_375tou_o-I';
    return rules;
};
const $797cda10ca96fc86$export$3c6489d84dc98b6 = /*#__PURE__*/ (0, $faaBC$react.forwardRef)(function DropZone(props, ref) {
    let stringFormatter = (0, $faaBC$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $797cda10ca96fc86$export$14a72053295ff9a6);
    let { size: size = 'M' } = props;
    let domRef = (0, $faaBC$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $faaBC$reactjsxruntime.jsx)((0, $faaBC$reactariacomponents.DropZone), {
        ...props,
        ref: domRef,
        style: props.UNSAFE_style,
        className: (renderProps)=>(props.UNSAFE_className || '') + $797cda10ca96fc86$var$dropzone(renderProps, props.styles),
        children: (renderProps)=>/*#__PURE__*/ (0, $faaBC$reactjsxruntime.jsxs)((0, $faaBC$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $faaBC$reactjsxruntime.jsx)((0, $55f1b8940d3e02db$exports.IllustratedMessageContext).Provider, {
                        value: {
                            isInDropZone: true,
                            isDropTarget: renderProps.isDropTarget,
                            size: size
                        },
                        children: props.children
                    }),
                    renderProps.isDropTarget && props.isFilled && /*#__PURE__*/ (0, $faaBC$reactjsxruntime.jsx)("div", {
                        className: $797cda10ca96fc86$var$banner({
                            size: size
                        }),
                        children: /*#__PURE__*/ (0, $faaBC$reactjsxruntime.jsx)("span", {
                            children: props.replaceMessage ? props.replaceMessage : stringFormatter.format('dropzone.replaceMessage')
                        })
                    })
                ]
            })
    });
});


//# sourceMappingURL=DropZone.cjs.map
