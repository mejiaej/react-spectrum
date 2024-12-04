require("./ColorWheel.css");
var $5b07976eb9e358fe$exports = require("./ColorHandle.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $lMAHP$reactjsxruntime = require("react/jsx-runtime");
var $lMAHP$reactariacomponents = require("react-aria-components");
var $lMAHP$react = require("react");
var $lMAHP$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorWheelContext", () => $0c1e31ce388fe468$export$265015d6dc85bf21);
$parcel$export(module.exports, "ColorWheel", () => $0c1e31ce388fe468$export$f80663f808113381);
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





const $0c1e31ce388fe468$export$265015d6dc85bf21 = /*#__PURE__*/ (0, $lMAHP$react.createContext)(null);
const $0c1e31ce388fe468$export$f80663f808113381 = /*#__PURE__*/ (0, $lMAHP$react.forwardRef)(function ColorWheel(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $0c1e31ce388fe468$export$265015d6dc85bf21);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles = '' } = props;
    let containerRef = (0, $lMAHP$reactspectrumutils.useDOMRef)(ref);
    // TODO: how to do mobile scaling?
    let { size: size = 192 } = props;
    let outerRadius = Math.max(size, 175) / 2;
    let thickness = 24;
    let innerRadius = outerRadius - 24;
    return /*#__PURE__*/ (0, $lMAHP$reactjsxruntime.jsx)((0, $lMAHP$reactariacomponents.ColorWheel), {
        ...props,
        outerRadius: outerRadius,
        innerRadius: innerRadius,
        ref: containerRef,
        style: UNSAFE_style,
        className: UNSAFE_className + styles,
        children: ({ isDisabled: isDisabled, state: state })=>/*#__PURE__*/ (0, $lMAHP$reactjsxruntime.jsxs)((0, $lMAHP$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $lMAHP$reactjsxruntime.jsx)((0, $lMAHP$reactariacomponents.ColorWheelTrack), {
                        style: ({ defaultStyle: defaultStyle, isDisabled: isDisabled })=>({
                                background: isDisabled ? undefined : defaultStyle.background
                            }),
                        className: function anonymous(props) {
                            let rules = " .";
                            rules += ' _vf';
                            rules += ' _wf';
                            rules += ' _xf';
                            rules += ' _yf';
                            rules += ' da_____v';
                            rules += ' dp10';
                            rules += ' _Nb';
                            rules += ' _M-3hmpv';
                            if (props.isDisabled) rules += ' _La';
                            else rules += ' _Lb';
                            if (props.isDisabled) rules += ' bg';
                            return rules;
                        }
                    }),
                    /*#__PURE__*/ (0, $lMAHP$reactjsxruntime.jsx)("div", {
                        className: function anonymous(props) {
                            let rules = " .";
                            rules += ' Ua';
                            rules += ' Xh';
                            rules += ' Zh';
                            rules += ' Vh';
                            rules += ' Wh';
                            rules += ' __Ba';
                            rules += ' _vf';
                            rules += ' _wf';
                            rules += ' _xf';
                            rules += ' _yf';
                            rules += ' da_____v';
                            rules += ' dp10';
                            rules += ' _Nb';
                            if (props.isDisabled) rules += ' _La';
                            else rules += ' _Lb';
                            return rules;
                        }({
                            isDisabled: isDisabled
                        })
                    }),
                    /*#__PURE__*/ (0, $lMAHP$reactjsxruntime.jsx)((0, $5b07976eb9e358fe$exports.ColorHandle), {
                        containerRef: containerRef,
                        getPosition: ()=>{
                            let { x: x, y: y } = state.getThumbPosition(outerRadius - thickness / 2);
                            return {
                                x: (outerRadius + x) / (outerRadius * 2),
                                y: (outerRadius + y) / (outerRadius * 2)
                            };
                        }
                    })
                ]
            })
    });
});


//# sourceMappingURL=ColorWheel.cjs.map
