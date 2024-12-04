import "./Slider.css";
import {FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414} from "./Field.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {mergeStyles as $feb886035e0d4633$export$e618dc39ac9ad607} from "../icons/runtime.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $c5w2x$jsx, jsxs as $c5w2x$jsxs, Fragment as $c5w2x$Fragment} from "react/jsx-runtime";
import {Slider as $c5w2x$Slider, SliderOutput as $c5w2x$SliderOutput, SliderTrack as $c5w2x$SliderTrack, SliderThumb as $c5w2x$SliderThumb} from "react-aria-components";
import {clamp as $c5w2x$clamp} from "@react-aria/utils";
import {createContext as $c5w2x$createContext, useContext as $c5w2x$useContext, forwardRef as $c5w2x$forwardRef, useRef as $c5w2x$useRef} from "react";
import {useFocusableRef as $c5w2x$useFocusableRef} from "@react-spectrum/utils";
import {useNumberFormatter as $c5w2x$useNumberFormatter, useLocale as $c5w2x$useLocale} from "@react-aria/i18n";

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










const $8128d8480e67c400$export$e99164f0030f3bff = /*#__PURE__*/ (0, $c5w2x$createContext)(null);
const $8128d8480e67c400$var$slider = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
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
    if (props.labelPosition === "side") rules += ' _1c';
    if (props.isInForm) rules += ' je';
    else if (props.size === "XL") rules += ' jh';
    else if (props.size === "L") rules += ' jg';
    else if (props.size === "M") rules += ' jf';
    else if (props.size === "S") rules += ' jf';
    return rules;
};
const $8128d8480e67c400$var$labelContainer = function anonymous(props) {
    let rules = " .";
    if (props.labelPosition === "top") rules += ' _Zf';
    rules += ' __a-4e9m05';
    rules += ' __b-4e9m05';
    rules += ' __c-4e9m05';
    rules += ' __d-4e9m05';
    rules += ' lb';
    if (props.labelPosition === "top") rules += ' __j-qdp51y';
    if (props.labelPosition === "top") rules += ' __h-u2tns7';
    if (props.labelPosition === "side") {
        if (props.labelAlign === "end") rules += ' _jc';
        else if (props.labelAlign === "start") rules += ' _ja';
    }
    rules += ' -_1inj1bc_F-a';
    return rules;
};
const $8128d8480e67c400$var$output = function anonymous(props) {
    let rules = " .";
    rules += ' __a-5czzau';
    rules += ' __b-5czzau';
    rules += ' __c-5czzau';
    rules += ' __d-5czzau';
    if (props.labelPosition === "side") {
        if (props.isInForm) rules += ' _jc';
        else if (props.direction === "rtl") rules += ' _jc';
        else if (props.direction === "ltr") rules += ' _ja';
    } else if (props.labelPosition === "top") {
        if (props.direction === "rtl") rules += ' _ja';
        else if (props.direction === "ltr") rules += ' _jc';
    }
    return rules;
};
let $8128d8480e67c400$export$6b2a7d5132615086 = function anonymous(props) {
    let rules = " .";
    rules += ' __a-4ka10a';
    rules += ' __b-4ka10a';
    rules += ' __c-4ka10a';
    rules += ' __d-4ka10a';
    rules += ' Uc';
    rules += ' lb';
    if (props.size === "XL") rules += ' k_a';
    else if (props.size === "L") rules += ' k2';
    else if (props.size === "M") rules += ' kU';
    else if (props.size === "S") rules += ' kM';
    return rules;
};
let $8128d8480e67c400$export$7814bee2738c4c3 = function anonymous(props) {
    let rules = " .";
    if (props.size === "XL") rules += ' lM';
    else if (props.size === "L") rules += ' lK';
    else if (props.size === "M") rules += ' lI';
    else if (props.size === "S") rules += ' lG';
    if (props.size === "XL") rules += ' kM';
    else if (props.size === "L") rules += ' kK';
    else if (props.size === "M") rules += ' kI';
    else if (props.size === "S") rules += ' kG';
    rules += ' _Zb';
    rules += ' Ua';
    rules += ' X-3760fj';
    return rules;
};
let $8128d8480e67c400$export$f120a3c6038107a5 = function anonymous(props) {
    let rules = " .";
    if (props.thumbStyle === "precise") {
        if (props.size === "XL") rules += ' lO';
        else if (props.size === "L") rules += ' lM';
        else if (props.size === "M") rules += ' lK';
        else if (props.size === "S") rules += ' lI';
    } else if (props.thumbStyle === "default") {
        if (props.size === "XL") rules += ' lM';
        else if (props.size === "L") rules += ' lK';
        else if (props.size === "M") rules += ' lI';
        else if (props.size === "S") rules += ' lG';
    }
    if (props.thumbStyle === "precise") {
        if (props.size === "XL") rules += ' kO';
        else if (props.size === "L") rules += ' kM';
        else if (props.size === "M") rules += ' kK';
        else if (props.size === "S") rules += ' kI';
    } else if (props.thumbStyle === "default") {
        if (props.size === "XL") rules += ' kM';
        else if (props.size === "L") rules += ' kK';
        else if (props.size === "M") rules += ' kI';
        else if (props.size === "S") rules += ' kG';
    }
    return rules;
};
let $8128d8480e67c400$export$becc9140d0e846f8 = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _Zb';
    rules += ' __na';
    rules += ' Ua';
    rules += ' X-3760fj';
    rules += ' Y-3760fj';
    rules += ' T-s83jgi';
    if (props.thumbStyle === "precise") rules += ' lu';
    else if (props.thumbStyle === "default") {
        if (props.size === "XL") rules += ' lM';
        else if (props.size === "L") rules += ' lK';
        else if (props.size === "M") rules += ' lI';
        else if (props.size === "S") rules += ' lG';
    }
    if (props.thumbStyle === "precise") {
        if (props.size === "XL") rules += ' kO';
        else if (props.size === "L") rules += ' kM';
        else if (props.size === "M") rules += ' kK';
        else if (props.size === "S") rules += ' kI';
    } else if (props.thumbStyle === "default") {
        if (props.size === "XL") rules += ' kM';
        else if (props.size === "L") rules += ' kK';
        else if (props.size === "M") rules += ' kI';
        else if (props.size === "S") rules += ' kG';
    }
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    rules += ' wa';
    rules += ' u-375zlr';
    rules += ' v-375zlr';
    rules += ' s-375zlr';
    rules += ' t-375zlr';
    if (props.isDisabled) rules += ' ca_____B';
    if (props.isDisabled) rules += ' ci';
    else if (props.isDragging) rules += ' co';
    else if (props.isHovered) rules += ' co';
    else rules += ' cn';
    rules += ' bd';
    return rules;
};
const $8128d8480e67c400$var$trackStyling = {
    height: {
        trackStyle: {
            thin: 4,
            thick: 16
        }
    },
    top: '[50%]',
    borderRadius: {
        trackStyle: {
            thin: 'lg',
            thick: 'sm'
        }
    }
};
let $8128d8480e67c400$export$1e1dc99b6e2204f1 = function anonymous(props) {
    let rules = " .";
    if (props.trackStyle === "thick") rules += ' kE';
    else if (props.trackStyle === "thin") rules += ' ks';
    rules += ' X-3760fj';
    if (props.trackStyle === "thick") rules += ' _vb';
    else if (props.trackStyle === "thin") rules += ' _vd';
    if (props.trackStyle === "thick") rules += ' _wb';
    else if (props.trackStyle === "thin") rules += ' _wd';
    if (props.trackStyle === "thick") rules += ' _xb';
    else if (props.trackStyle === "thin") rules += ' _xd';
    if (props.trackStyle === "thick") rules += ' _yb';
    else if (props.trackStyle === "thin") rules += ' _yd';
    rules += ' Ua';
    if (props.isDisabled) rules += ' bg';
    else rules += ' bi';
    rules += ' Q-yj8axo';
    rules += ' lb';
    rules += ' __na';
    rules += ' wa';
    rules += ' u-yj94cw';
    rules += ' v-yj94cw';
    rules += ' s-yj94cw';
    rules += ' t-yj94cw';
    if (props.isDisabled) rules += ' ca_____B';
    else rules += ' ca_____x';
    rules += ' ca';
    return rules;
};
let $8128d8480e67c400$export$847ceef3bc944d02 = function anonymous(props) {
    let rules = " .";
    if (props.trackStyle === "thick") rules += ' kE';
    else if (props.trackStyle === "thin") rules += ' ks';
    rules += ' X-3760fj';
    if (props.trackStyle === "thick") rules += ' _vb';
    else if (props.trackStyle === "thin") rules += ' _vd';
    if (props.trackStyle === "thick") rules += ' _wb';
    else if (props.trackStyle === "thin") rules += ' _wd';
    if (props.trackStyle === "thick") rules += ' _xb';
    else if (props.trackStyle === "thin") rules += ' _xd';
    if (props.trackStyle === "thick") rules += ' _yb';
    else if (props.trackStyle === "thin") rules += ' _yd';
    rules += ' Ua';
    if (props.isDisabled) rules += ' ba_____B';
    else rules += ' ba_____z';
    if (props.isDisabled) rules += ' bg';
    else if (props.isEmphasized) rules += ' by';
    else rules += ' bm';
    rules += ' __na';
    rules += ' wa';
    rules += ' u-yj94cw';
    rules += ' v-yj94cw';
    rules += ' s-yj94cw';
    rules += ' t-yj94cw';
    if (props.isDisabled) rules += ' ca_____B';
    else rules += ' ca_____x';
    rules += ' ca';
    rules += ' Q-yj8axo';
    return rules;
};
function $8128d8480e67c400$export$9418495bb635ebde(props1) {
    let formContext = (0, $c5w2x$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props1 = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props1);
    let { label: label, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', size: size = 'M', minValue: minValue = 0, maxValue: maxValue = 100, formatOptions: formatOptions } = props1;
    let formatter = (0, $c5w2x$useNumberFormatter)(formatOptions);
    let { direction: direction } = (0, $c5w2x$useLocale)();
    return /*#__PURE__*/ (0, $c5w2x$jsx)((0, $c5w2x$Slider), {
        ...props1,
        ref: props1.sliderRef,
        className: (renderProps)=>(props1.UNSAFE_className || '') + (0, $feb886035e0d4633$export$e618dc39ac9ad607)(function anonymous(props) {
                let rules = " .";
                rules += ' _Zf';
                if (props.isInForm) rules += ' __a-3t1y';
                if (props.isInForm) {
                    if (props.labelPosition === "side") rules += ' __b-7u9dhl';
                }
                if (props.isInForm) rules += ' __h-1cwd7ud';
                else {
                    if (props.labelPosition === "side") rules += ' __h-jyg4vb';
                    else if (props.labelPosition === "top") rules += ' __h-375yi6';
                }
                if (props.labelPosition === "side") rules += ' __i-jyg4vb';
                else if (props.labelPosition === "top") rules += ' __i-fdenls';
                if (props.labelPosition === "side") rules += ' __j-5eez8j';
                else if (props.labelPosition === "top") rules += ' __j-xlaqir';
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
                rules += ' _1d';
                rules += ' _f-1x99dlob';
                rules += ' _fa';
                if (props.size === "XL") rules += ' -aqrvqh_k-j';
                else if (props.size === "L") rules += ' -aqrvqh_k-i';
                else if (props.size === "S") rules += ' -aqrvqh_k-h';
                else if (props.size === "XS") rules += ' -aqrvqh_k-g';
                else rules += ' -aqrvqh_k-f';
                rules += ' -_1inj1bc_i--prjw07';
                rules += ' je';
                rules += ' __R-yksgrp';
                return rules;
            }({
                labelPosition: labelPosition,
                isInForm: !!formContext
            }), $8128d8480e67c400$var$slider({
                ...renderProps,
                labelPosition: labelPosition,
                size: size,
                isInForm: !!formContext
            }, props1.styles)),
        children: ({ state: state })=>{
            let maxLabelLength = Math.max([
                ...formatter.format(minValue)
            ].length, [
                ...formatter.format(maxValue)
            ].length);
            switch(state.values.length){
                case 1:
                    break;
                case 2:
                    // This should really use the NumberFormat#formatRange proposal...
                    // https://github.com/tc39/ecma402/issues/393
                    // https://github.com/tc39/proposal-intl-numberformat-v3#formatrange-ecma-402-393
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
                    maxLabelLength = 3 + 2 * Math.max(maxLabelLength, [
                        ...formatter.format(minValue)
                    ].length, [
                        ...formatter.format(maxValue)
                    ].length);
                    break;
                default:
                    throw new Error('Only sliders with 1 or 2 handles are supported!');
            }
            let outputValue = /*#__PURE__*/ (0, $c5w2x$jsx)((0, $c5w2x$SliderOutput), {
                style: {
                    width: `${maxLabelLength}ch`,
                    minWidth: `${maxLabelLength}ch`,
                    fontVariantNumeric: 'tabular-nums'
                },
                className: $8128d8480e67c400$var$output({
                    direction: direction,
                    labelPosition: labelPosition,
                    isInForm: !!formContext
                }),
                children: ({ state: state })=>state.values.map((_, i)=>state.getThumbValueLabel(i)).join(" \u2013 ")
            });
            return /*#__PURE__*/ (0, $c5w2x$jsxs)((0, $c5w2x$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $c5w2x$jsxs)("div", {
                        className: $8128d8480e67c400$var$labelContainer({
                            labelPosition: labelPosition,
                            labelAlign: labelAlign
                        }),
                        children: [
                            /*#__PURE__*/ (0, $c5w2x$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                                isDisabled: props1.isDisabled,
                                size: props1.size,
                                labelPosition: labelPosition,
                                labelAlign: labelAlign,
                                contextualHelp: props1.contextualHelp,
                                children: label
                            }),
                            labelPosition === 'top' && outputValue
                        ]
                    }),
                    /*#__PURE__*/ (0, $c5w2x$jsxs)("div", {
                        className: function anonymous(props) {
                            let rules = " .";
                            rules += ' __a-4cfph1';
                            rules += ' __b-4cfph1';
                            rules += ' __c-4cfph1';
                            rules += ' __d-4cfph1';
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
                            rules += ' _Ze';
                            rules += ' _1c';
                            if (props.size === "XL") rules += ' ih';
                            else if (props.size === "L") rules += ' ig';
                            else rules += ' if';
                            if (props.size === "XL") rules += ' jh';
                            else if (props.size === "L") rules += ' jg';
                            else rules += ' jf';
                            return rules;
                        }({
                            size: size
                        }),
                        children: [
                            props1.children,
                            labelPosition === 'side' && outputValue
                        ]
                    })
                ]
            });
        }
    });
}
const $8128d8480e67c400$export$472062a354075cee = /*#__PURE__*/ (0, $c5w2x$forwardRef)(function Slider(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8128d8480e67c400$export$e99164f0030f3bff);
    let formContext = (0, $c5w2x$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let { labelPosition: labelPosition = 'top', size: size = 'M', fillOffset: fillOffset, isEmphasized: isEmphasized, trackStyle: trackStyle = 'thin', thumbStyle: thumbStyle = 'default' } = props;
    let thumbRef = (0, $c5w2x$useRef)(null);
    let inputRef = (0, $c5w2x$useRef)(null); // TODO: need to pass inputRef to SliderThumb when we release the next version of RAC 1.3.0
    let domRef = (0, $c5w2x$useFocusableRef)(ref, inputRef);
    let { direction: direction } = (0, $c5w2x$useLocale)();
    let cssDirection = direction === 'rtl' ? 'right' : 'left';
    return /*#__PURE__*/ (0, $c5w2x$jsx)($8128d8480e67c400$export$9418495bb635ebde, {
        ...props,
        sliderRef: domRef,
        children: /*#__PURE__*/ (0, $c5w2x$jsx)((0, $c5w2x$SliderTrack), {
            className: $8128d8480e67c400$export$6b2a7d5132615086({
                size: size,
                labelPosition: labelPosition,
                isInForm: !!formContext
            }),
            children: ({ state: state, isDisabled: isDisabled })=>{
                fillOffset = fillOffset !== undefined ? (0, $c5w2x$clamp)(fillOffset, state.getThumbMinValue(0), state.getThumbMaxValue(0)) : state.getThumbMinValue(0);
                let fillWidth = state.getThumbPercent(0) - state.getValuePercent(fillOffset);
                let isRightOfOffset = fillWidth > 0;
                let offset = isRightOfOffset ? state.getValuePercent(fillOffset) : state.getThumbPercent(0);
                return /*#__PURE__*/ (0, $c5w2x$jsxs)((0, $c5w2x$Fragment), {
                    children: [
                        /*#__PURE__*/ (0, $c5w2x$jsx)("div", {
                            className: $8128d8480e67c400$export$1e1dc99b6e2204f1({
                                isDisabled: isDisabled,
                                trackStyle: trackStyle
                            })
                        }),
                        /*#__PURE__*/ (0, $c5w2x$jsx)("div", {
                            style: {
                                width: `${Math.abs(fillWidth) * 100}%`,
                                [cssDirection]: `${offset * 100}%`
                            },
                            className: $8128d8480e67c400$export$847ceef3bc944d02({
                                isDisabled: isDisabled,
                                isEmphasized: isEmphasized,
                                trackStyle: trackStyle
                            })
                        }),
                        /*#__PURE__*/ (0, $c5w2x$jsx)((0, $c5w2x$SliderThumb), {
                            className: $8128d8480e67c400$export$7814bee2738c4c3,
                            index: 0,
                            name: props.name,
                            ref: thumbRef,
                            style: (renderProps)=>(0, $10ea7662e51a285b$export$56e8cba416805d8d)(thumbRef, {
                                    transform: 'translate(-50%, -50%)'
                                })({
                                    ...renderProps,
                                    isPressed: renderProps.isDragging
                                }),
                            children: (renderProps)=>/*#__PURE__*/ (0, $c5w2x$jsx)("div", {
                                    className: $8128d8480e67c400$export$f120a3c6038107a5({
                                        size: size
                                    }),
                                    children: /*#__PURE__*/ (0, $c5w2x$jsx)("div", {
                                        className: $8128d8480e67c400$export$becc9140d0e846f8({
                                            ...renderProps,
                                            size: size,
                                            thumbStyle: thumbStyle
                                        })
                                    })
                                })
                        })
                    ]
                });
            }
        })
    });
});


export {$8128d8480e67c400$export$e99164f0030f3bff as SliderContext, $8128d8480e67c400$export$6b2a7d5132615086 as track, $8128d8480e67c400$export$7814bee2738c4c3 as thumbContainer, $8128d8480e67c400$export$f120a3c6038107a5 as thumbHitArea, $8128d8480e67c400$export$becc9140d0e846f8 as thumb, $8128d8480e67c400$export$1e1dc99b6e2204f1 as upperTrack, $8128d8480e67c400$export$847ceef3bc944d02 as filledTrack, $8128d8480e67c400$export$9418495bb635ebde as SliderBase, $8128d8480e67c400$export$472062a354075cee as Slider};
//# sourceMappingURL=Slider.mjs.map
