import {filledTrack as $8128d8480e67c400$export$847ceef3bc944d02, SliderBase as $8128d8480e67c400$export$9418495bb635ebde, thumb as $8128d8480e67c400$export$becc9140d0e846f8, thumbContainer as $8128d8480e67c400$export$7814bee2738c4c3, thumbHitArea as $8128d8480e67c400$export$f120a3c6038107a5, track as $8128d8480e67c400$export$6b2a7d5132615086, upperTrack as $8128d8480e67c400$export$1e1dc99b6e2204f1} from "./Slider.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import $DNS9q$intlStringsmjs from "./intlStrings.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $DNS9q$jsx, jsxs as $DNS9q$jsxs, Fragment as $DNS9q$Fragment} from "react/jsx-runtime";
import {SliderTrack as $DNS9q$SliderTrack, SliderThumb as $DNS9q$SliderThumb} from "react-aria-components";
import {createContext as $DNS9q$createContext, forwardRef as $DNS9q$forwardRef, useContext as $DNS9q$useContext, useRef as $DNS9q$useRef} from "react";
import {useFocusableRef as $DNS9q$useFocusableRef} from "@react-spectrum/utils";
import {useLocalizedStringFormatter as $DNS9q$useLocalizedStringFormatter, useLocale as $DNS9q$useLocale} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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









const $c683c8ad68e59901$export$9e0b46d8c4f4c18f = /*#__PURE__*/ (0, $DNS9q$createContext)(null);
const $c683c8ad68e59901$export$826424dabc3dd705 = /*#__PURE__*/ (0, $DNS9q$forwardRef)(function RangeSlider(props, ref) {
    let stringFormatter = (0, $DNS9q$useLocalizedStringFormatter)((0, ($parcel$interopDefault($DNS9q$intlStringsmjs))), '@react-spectrum/s2');
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $c683c8ad68e59901$export$9e0b46d8c4f4c18f);
    let formContext = (0, $DNS9q$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let { labelPosition: labelPosition = 'top', size: size = 'M', isEmphasized: isEmphasized, trackStyle: trackStyle = 'thin', thumbStyle: thumbStyle = 'default' } = props;
    let lowerThumbRef = (0, $DNS9q$useRef)(null);
    let upperThumbRef = (0, $DNS9q$useRef)(null);
    let inputRef = (0, $DNS9q$useRef)(null); // TODO: need to pass inputRef to SliderThumb when we release the next version of RAC 1.3.0
    let domRef = (0, $DNS9q$useFocusableRef)(ref, inputRef);
    let { direction: direction } = (0, $DNS9q$useLocale)();
    let cssDirection = direction === 'rtl' ? 'right' : 'left';
    return /*#__PURE__*/ (0, $DNS9q$jsx)((0, $8128d8480e67c400$export$9418495bb635ebde), {
        ...props,
        value: props.value ? [
            props.value.start,
            props.value.end
        ] : undefined,
        defaultValue: props.defaultValue ? [
            props.defaultValue.start,
            props.defaultValue.end
        ] : [
            props.minValue ?? 0,
            props.maxValue ?? 100
        ],
        onChange: (v)=>props.onChange?.({
                start: v[0],
                end: v[1]
            }),
        onChangeEnd: (v)=>props.onChangeEnd?.({
                start: v[0],
                end: v[1]
            }),
        sliderRef: domRef,
        children: /*#__PURE__*/ (0, $DNS9q$jsx)((0, $DNS9q$SliderTrack), {
            className: (0, $8128d8480e67c400$export$6b2a7d5132615086)({
                size: size,
                labelPosition: labelPosition,
                isInForm: !!formContext
            }),
            children: ({ state: state, isDisabled: isDisabled })=>/*#__PURE__*/ (0, $DNS9q$jsxs)((0, $DNS9q$Fragment), {
                    children: [
                        /*#__PURE__*/ (0, $DNS9q$jsx)("div", {
                            className: (0, $8128d8480e67c400$export$1e1dc99b6e2204f1)({
                                isDisabled: isDisabled,
                                trackStyle: trackStyle
                            })
                        }),
                        /*#__PURE__*/ (0, $DNS9q$jsx)("div", {
                            style: {
                                width: `${Math.abs(state.getThumbPercent(0) - state.getThumbPercent(1)) * 100}%`,
                                [cssDirection]: `${state.getThumbPercent(0) * 100}%`
                            },
                            className: (0, $8128d8480e67c400$export$847ceef3bc944d02)({
                                isDisabled: isDisabled,
                                isEmphasized: isEmphasized,
                                trackStyle: trackStyle
                            })
                        }),
                        /*#__PURE__*/ (0, $DNS9q$jsx)((0, $DNS9q$SliderThumb), {
                            className: (0, $8128d8480e67c400$export$7814bee2738c4c3),
                            index: 0,
                            name: props.startName,
                            "aria-label": stringFormatter.format('slider.minimum'),
                            ref: lowerThumbRef,
                            style: (renderProps)=>(0, $10ea7662e51a285b$export$56e8cba416805d8d)(lowerThumbRef, {
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: state.getThumbPercent(0) === 1 ? 1 : undefined
                                })({
                                    ...renderProps,
                                    isPressed: renderProps.isDragging
                                }),
                            children: (renderProps)=>/*#__PURE__*/ (0, $DNS9q$jsx)("div", {
                                    className: (0, $8128d8480e67c400$export$f120a3c6038107a5)({
                                        size: size
                                    }),
                                    children: /*#__PURE__*/ (0, $DNS9q$jsx)("div", {
                                        className: (0, $8128d8480e67c400$export$becc9140d0e846f8)({
                                            ...renderProps,
                                            size: size,
                                            thumbStyle: thumbStyle
                                        })
                                    })
                                })
                        }),
                        /*#__PURE__*/ (0, $DNS9q$jsx)((0, $DNS9q$SliderThumb), {
                            className: (0, $8128d8480e67c400$export$7814bee2738c4c3),
                            index: 1,
                            name: props.endName,
                            "aria-label": stringFormatter.format('slider.maximum'),
                            ref: upperThumbRef,
                            style: (renderProps)=>(0, $10ea7662e51a285b$export$56e8cba416805d8d)(upperThumbRef, {
                                    transform: 'translate(-50%, -50%)'
                                })({
                                    ...renderProps,
                                    isPressed: renderProps.isDragging
                                }),
                            children: (renderProps)=>/*#__PURE__*/ (0, $DNS9q$jsx)("div", {
                                    className: (0, $8128d8480e67c400$export$f120a3c6038107a5)({
                                        size: size
                                    }),
                                    children: /*#__PURE__*/ (0, $DNS9q$jsx)("div", {
                                        className: (0, $8128d8480e67c400$export$becc9140d0e846f8)({
                                            ...renderProps,
                                            size: size,
                                            thumbStyle: thumbStyle
                                        })
                                    })
                                })
                        })
                    ]
                })
        })
    });
});


export {$c683c8ad68e59901$export$9e0b46d8c4f4c18f as RangeSliderContext, $c683c8ad68e59901$export$826424dabc3dd705 as RangeSlider};
//# sourceMappingURL=RangeSlider.mjs.map
