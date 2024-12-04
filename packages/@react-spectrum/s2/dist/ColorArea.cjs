require("./ColorArea.css");
var $5b07976eb9e358fe$exports = require("./ColorHandle.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $lfrPf$reactjsxruntime = require("react/jsx-runtime");
var $lfrPf$reactariacomponents = require("react-aria-components");
var $lfrPf$react = require("react");
var $lfrPf$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorAreaContext", () => $4c6639e34959fe36$export$ebe63fadcdce34ed);
$parcel$export(module.exports, "ColorArea", () => $4c6639e34959fe36$export$b2103f68a961418e);
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





const $4c6639e34959fe36$export$ebe63fadcdce34ed = /*#__PURE__*/ (0, $lfrPf$react.createContext)(null);
const $4c6639e34959fe36$export$b2103f68a961418e = /*#__PURE__*/ (0, $lfrPf$react.forwardRef)(function ColorArea(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $4c6639e34959fe36$export$ebe63fadcdce34ed);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles } = props;
    let containerRef = (0, $lfrPf$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $lfrPf$reactjsxruntime.jsx)((0, $lfrPf$reactariacomponents.ColorArea), {
        ...props,
        ref: containerRef,
        style: ({ defaultStyle: defaultStyle, isDisabled: isDisabled })=>({
                ...defaultStyle,
                background: isDisabled ? undefined : defaultStyle.background,
                // Move position: relative to style macro so it can be overridden.
                position: undefined,
                ...UNSAFE_style
            }),
        className: (renderProps)=>UNSAFE_className + function anonymous(props, overrides) {
                let rules = " .";
                let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
                rules += matches.join('');
                let $U = false;
                let $l = false;
                let $k = false;
                let $q = false;
                let $o = false;
                for (let p of matches){
                    if (/^\s*U/.test(p)) $U = true;
                    if (/^\s*l/.test(p)) $l = true;
                    if (/^\s*k/.test(p)) $k = true;
                    if (/^\s*q/.test(p)) $q = true;
                    if (/^\s*o/.test(p)) $o = true;
                }
                if (!$U) rules += ' Uc';
                if (!$l) rules += ' l___u';
                if (!$k) rules += ' k___u';
                if (!$q) rules += ' q_q';
                if (!$o) rules += ' o_q';
                rules += ' _vc';
                rules += ' _wc';
                rules += ' _xc';
                rules += ' _yc';
                rules += ' da_____v';
                rules += ' dp10';
                rules += ' _Nb';
                rules += ' _M-3hmpv';
                if (props.isDisabled) rules += ' _La';
                else rules += ' _Lb';
                if (props.isDisabled) rules += ' bg';
                return rules;
            }(renderProps, styles),
        children: ({ state: state })=>/*#__PURE__*/ (0, $lfrPf$reactjsxruntime.jsx)((0, $5b07976eb9e358fe$exports.ColorHandle), {
                containerRef: containerRef,
                getPosition: ()=>state.getThumbPosition()
            })
    });
});


//# sourceMappingURL=ColorArea.cjs.map
