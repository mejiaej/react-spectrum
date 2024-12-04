require("./ColorSlider.css");
var $5b07976eb9e358fe$exports = require("./ColorHandle.cjs");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $hkRua$reactjsxruntime = require("react/jsx-runtime");
var $hkRua$reactariacomponents = require("react-aria-components");
var $hkRua$react = require("react");
var $hkRua$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorSliderContext", () => $fdd6f3d03620d438$export$717b2c0a523a0b53);
$parcel$export(module.exports, "ColorSlider", () => $fdd6f3d03620d438$export$44fd664bcca5b6fb);
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






const $fdd6f3d03620d438$export$717b2c0a523a0b53 = /*#__PURE__*/ (0, $hkRua$react.createContext)(null);
const $fdd6f3d03620d438$export$44fd664bcca5b6fb = /*#__PURE__*/ (0, $hkRua$react.forwardRef)(function ColorSlider(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $fdd6f3d03620d438$export$717b2c0a523a0b53);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles } = props;
    let containerRef = (0, $hkRua$reactspectrumutils.useDOMRef)(ref);
    let trackRef = (0, $hkRua$react.useRef)(null);
    let { locale: locale } = (0, $hkRua$reactariacomponents.useLocale)();
    return /*#__PURE__*/ (0, $hkRua$reactjsxruntime.jsx)((0, $hkRua$reactariacomponents.ColorSlider), {
        ...props,
        ref: containerRef,
        style: UNSAFE_style,
        // The visual label is hidden when vertical, so make it an aria-label instead.
        "aria-label": props['aria-label'] || (props.orientation === 'vertical' ? props.label : undefined),
        className: (renderProps)=>UNSAFE_className + function anonymous(props, overrides) {
                let rules = " .";
                let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
                rules += matches.join('');
                let $l = false;
                for (let p of matches)if (/^\s*l/.test(p)) $l = true;
                if (!$l) {
                    if (props.orientation === "horizontal") rules += ' l___u';
                }
                if (props.orientation === "vertical") rules += ' k___u';
                if (props.orientation === "vertical") rules += ' _Za';
                else if (props.orientation === "horizontal") rules += ' _Zf';
                rules += ' __h-1egg2pz';
                rules += ' __j-1roc9nk';
                rules += ' ic';
                return rules;
            }(renderProps, styles),
        children: ({ isDisabled: isDisabled, orientation: orientation, state: state })=>/*#__PURE__*/ (0, $hkRua$reactjsxruntime.jsxs)((0, $hkRua$reactjsxruntime.Fragment), {
                children: [
                    orientation === 'horizontal' && (props.label || props.label === undefined && !props['aria-label'] && !props['aria-labelledby']) && // If no external label, aria-label or aria-labelledby is provided,
                    // default to displaying the localized channel value.
                    // Specifically check if label is undefined. If label is `null` then display no visible label.
                    // A default aria-label is provided by useColorSlider in that case.
                    /*#__PURE__*/ (0, $hkRua$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                        isDisabled: isDisabled,
                        contextualHelp: props.contextualHelp,
                        children: props.label || state.value.getChannelName(props.channel, locale)
                    }),
                    orientation === 'horizontal' && /*#__PURE__*/ (0, $hkRua$reactjsxruntime.jsx)((0, $hkRua$reactariacomponents.SliderOutput), {
                        className: function anonymous(props) {
                            let rules = " .";
                            rules += ' __a-5czzau';
                            rules += ' __b-5czzau';
                            rules += ' __c-5czzau';
                            rules += ' __d-5czzau';
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
                            if (props.isDisabled) rules += ' aj';
                            else {
                                if (props.isPressed) rules += ' an';
                                else if (props.isFocusVisible) rules += ' an';
                                else if (props.isHovered) rules += ' an';
                                else rules += ' am';
                            }
                            rules += ' __Hb';
                            return rules;
                        }
                    }),
                    /*#__PURE__*/ (0, $hkRua$reactjsxruntime.jsx)((0, $hkRua$reactariacomponents.SliderTrack), {
                        ref: trackRef,
                        style: ({ defaultStyle: defaultStyle, isDisabled: isDisabled })=>({
                                background: isDisabled ? undefined : `${defaultStyle.background}, repeating-conic-gradient(#E1E1E1 0% 25%, white 0% 50%) 50% / 16px 16px`
                            }),
                        className: function anonymous(props) {
                            let rules = " .";
                            rules += ' __a-4ka10a';
                            rules += ' __b-4ka10a';
                            rules += ' __c-4ka10a';
                            rules += ' __d-4ka10a';
                            if (props.orientation === "vertical") rules += ' lM';
                            else if (props.orientation === "horizontal") rules += ' lb';
                            if (props.orientation === "vertical") rules += ' kb';
                            else if (props.orientation === "horizontal") rules += ' kM';
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
                        },
                        children: /*#__PURE__*/ (0, $hkRua$reactjsxruntime.jsx)((0, $5b07976eb9e358fe$exports.ColorHandle), {
                            containerRef: trackRef,
                            getPosition: ()=>{
                                let x = state.orientation === 'horizontal' ? state.getThumbPercent(0) : 0.5;
                                let y = state.orientation === 'horizontal' ? 0.5 : 1 - state.getThumbPercent(0);
                                return {
                                    x: x,
                                    y: y
                                };
                            }
                        })
                    })
                ]
            })
    });
});


//# sourceMappingURL=ColorSlider.cjs.map
