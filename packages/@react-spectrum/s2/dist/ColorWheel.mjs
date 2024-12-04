import "./ColorWheel.css";
import {ColorHandle as $b4f7db7c45cd3de9$export$92862704de639678} from "./ColorHandle.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $j8ecy$jsx, jsxs as $j8ecy$jsxs, Fragment as $j8ecy$Fragment} from "react/jsx-runtime";
import {ColorWheel as $j8ecy$ColorWheel, ColorWheelTrack as $j8ecy$ColorWheelTrack} from "react-aria-components";
import {createContext as $j8ecy$createContext, forwardRef as $j8ecy$forwardRef} from "react";
import {useDOMRef as $j8ecy$useDOMRef} from "@react-spectrum/utils";

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





const $4a6afc95235907f0$export$265015d6dc85bf21 = /*#__PURE__*/ (0, $j8ecy$createContext)(null);
const $4a6afc95235907f0$export$f80663f808113381 = /*#__PURE__*/ (0, $j8ecy$forwardRef)(function ColorWheel(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $4a6afc95235907f0$export$265015d6dc85bf21);
    let { UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles = '' } = props;
    let containerRef = (0, $j8ecy$useDOMRef)(ref);
    // TODO: how to do mobile scaling?
    let { size: size = 192 } = props;
    let outerRadius = Math.max(size, 175) / 2;
    let thickness = 24;
    let innerRadius = outerRadius - 24;
    return /*#__PURE__*/ (0, $j8ecy$jsx)((0, $j8ecy$ColorWheel), {
        ...props,
        outerRadius: outerRadius,
        innerRadius: innerRadius,
        ref: containerRef,
        style: UNSAFE_style,
        className: UNSAFE_className + styles,
        children: ({ isDisabled: isDisabled, state: state })=>/*#__PURE__*/ (0, $j8ecy$jsxs)((0, $j8ecy$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $j8ecy$jsx)((0, $j8ecy$ColorWheelTrack), {
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
                    /*#__PURE__*/ (0, $j8ecy$jsx)("div", {
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
                    /*#__PURE__*/ (0, $j8ecy$jsx)((0, $b4f7db7c45cd3de9$export$92862704de639678), {
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


export {$4a6afc95235907f0$export$265015d6dc85bf21 as ColorWheelContext, $4a6afc95235907f0$export$f80663f808113381 as ColorWheel};
//# sourceMappingURL=ColorWheel.mjs.map
