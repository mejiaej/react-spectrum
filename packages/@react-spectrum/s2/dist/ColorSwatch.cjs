require("./ColorSwatch.css");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $7Qhsa$reactjsxruntime = require("react/jsx-runtime");
var $7Qhsa$reactariacomponents = require("react-aria-components");
var $7Qhsa$react = require("react");
var $7Qhsa$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorSwatchContext", () => $8b1ea085cefae738$export$83cc445538396800);
$parcel$export(module.exports, "InternalColorSwatchContext", () => $8b1ea085cefae738$export$2d9e1fe7b5c0ceb6);
$parcel$export(module.exports, "ColorSwatch", () => $8b1ea085cefae738$export$cae13e90592f246a);
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




const $8b1ea085cefae738$export$83cc445538396800 = /*#__PURE__*/ (0, $7Qhsa$react.createContext)(null);
const $8b1ea085cefae738$export$2d9e1fe7b5c0ceb6 = /*#__PURE__*/ (0, $7Qhsa$react.createContext)(null);
const $8b1ea085cefae738$export$cae13e90592f246a = /*#__PURE__*/ (0, $7Qhsa$react.forwardRef)(function ColorSwatch(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $8b1ea085cefae738$export$83cc445538396800);
    let domRef = (0, $7Qhsa$reactspectrumutils.useDOMRef)(ref);
    let ctx = (0, $7Qhsa$react.useContext)($8b1ea085cefae738$export$2d9e1fe7b5c0ceb6);
    let { size: size = ctx?.size || 'M', rounding: rounding = ctx?.rounding || 'default', color: color } = props;
    let nonNullValue = color || '#fff0';
    color = (0, $7Qhsa$react.useMemo)(()=>typeof nonNullValue === 'string' ? (0, $7Qhsa$reactariacomponents.parseColor)(nonNullValue) : nonNullValue, [
        nonNullValue
    ]);
    let swatch = /*#__PURE__*/ (0, $7Qhsa$reactjsxruntime.jsx)((0, $7Qhsa$reactariacomponents.ColorSwatch), {
        ...props,
        color: color,
        ref: domRef,
        style: ({ color: color })=>({
                // TODO: should there be a distinction between transparent and no value (e.g. null)?
                background: color.getChannelValue('alpha') > 0 ? `linear-gradient(${color}, ${color}), repeating-conic-gradient(#e6e6e6 0% 25%, white 0% 50%) 0% 50% / 16px 16px` : 'linear-gradient(to bottom right, transparent calc(50% - 2px), var(--slash-color) calc(50% - 2px) calc(50% + 2px), transparent calc(50% + 2px)) no-repeat'
            }),
        className: function anonymous(props, overrides) {
            let rules = " .";
            let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
            rules += matches.join('');
            let $l = false;
            let $k = false;
            for (let p of matches){
                if (/^\s*l/.test(p)) $l = true;
                if (/^\s*k/.test(p)) $k = true;
            }
            if (!$l) {
                if (props.size === "L") rules += ' l2';
                else if (props.size === "M") rules += ' lU';
                else if (props.size === "S") rules += ' lM';
                else if (props.size === "XS") rules += ' lE';
            }
            if (!$k) {
                if (props.size === "L") rules += ' k2';
                else if (props.size === "M") rules += ' kU';
                else if (props.size === "S") rules += ' kM';
                else if (props.size === "XS") rules += ' kE';
            }
            if (props.rounding === "full") rules += ' _vf';
            else if (props.rounding === "none") rules += ' _va';
            else if (props.rounding === "default") rules += ' _vb';
            if (props.rounding === "full") rules += ' _wf';
            else if (props.rounding === "none") rules += ' _wa';
            else if (props.rounding === "default") rules += ' _wb';
            if (props.rounding === "full") rules += ' _xf';
            else if (props.rounding === "none") rules += ' _xa';
            else if (props.rounding === "default") rules += ' _xb';
            if (props.rounding === "full") rules += ' _yf';
            else if (props.rounding === "none") rules += ' _ya';
            else if (props.rounding === "default") rules += ' _yb';
            rules += ' cp42';
            rules += ' ub';
            rules += ' vb';
            rules += ' sb';
            rules += ' tb';
            rules += ' wa';
            rules += ' __na';
            rules += ' _zb';
            rules += ' -_14u0212_a-O';
            return rules;
        }({
            size: size,
            rounding: rounding
        }, props.styles)
    });
    // ColorSwatchPicker needs to wrap the swatch in a ListBoxItem.
    if (ctx) return ctx.useWrapper(swatch, color, rounding);
    return swatch;
});


//# sourceMappingURL=ColorSwatch.cjs.map
