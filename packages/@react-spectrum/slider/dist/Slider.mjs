import {SliderBase as $39572711324a3b8e$export$9418495bb635ebde} from "./SliderBase.mjs";
import {SliderThumb as $9058ca69d66a724f$export$2c1b491743890dec} from "./SliderThumb.mjs";
import "./vars.fb2ba660.css";
import $i1AIe$slider_vars_cssmodulejs from "./slider_vars_css.mjs";
import {clamp as $i1AIe$clamp} from "@react-aria/utils";
import {classNames as $i1AIe$classNames} from "@react-spectrum/utils";
import $i1AIe$react from "react";
import {useLocale as $i1AIe$useLocale} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $a1251704aa53e1a5$export$472062a354075cee = /*#__PURE__*/ (0, $i1AIe$react).forwardRef(function Slider(props, ref) {
    let { onChange: onChange, onChangeEnd: onChangeEnd, value: value, defaultValue: defaultValue, isFilled: isFilled, fillOffset: fillOffset, trackGradient: trackGradient, getValueLabel: getValueLabel, ...otherProps } = props;
    let baseProps = {
        ...otherProps,
        // Normalize `value: number[]` to `value: number`
        value: value != null ? [
            value
        ] : undefined,
        defaultValue: defaultValue != null ? [
            defaultValue
        ] : undefined,
        onChange: (v)=>{
            onChange === null || onChange === void 0 ? void 0 : onChange(v[0]);
        },
        onChangeEnd: (v)=>{
            onChangeEnd === null || onChangeEnd === void 0 ? void 0 : onChangeEnd(v[0]);
        },
        getValueLabel: getValueLabel ? ([v])=>getValueLabel(v) : undefined
    };
    let { direction: direction } = (0, $i1AIe$useLocale)();
    return /*#__PURE__*/ (0, $i1AIe$react).createElement((0, $39572711324a3b8e$export$9418495bb635ebde), {
        ...baseProps,
        ref: ref,
        classes: {
            'spectrum-Slider--filled': isFilled && fillOffset == null
        },
        style: // @ts-ignore
        {
            '--spectrum-slider-track-gradient': trackGradient && `linear-gradient(to ${direction === 'ltr' ? 'right' : 'left'}, ${trackGradient.join(', ')})`
        }
    }, ({ trackRef: trackRef, inputRef: inputRef, state: state })=>{
        fillOffset = fillOffset != null ? (0, $i1AIe$clamp)(fillOffset, state.getThumbMinValue(0), state.getThumbMaxValue(0)) : fillOffset;
        let cssDirection = direction === 'rtl' ? 'right' : 'left';
        let lowerTrack = /*#__PURE__*/ (0, $i1AIe$react).createElement("div", {
            className: (0, $i1AIe$classNames)((0, ($parcel$interopDefault($i1AIe$slider_vars_cssmodulejs))), 'spectrum-Slider-track'),
            style: {
                width: `${state.getThumbPercent(0) * 100}%`,
                // TODO not sure if it has advantages, but this could also be implemented as CSS calc():
                // .track::before {
                //    background-size: calc((1/ (var(--width)/100)) * 100%);
                //    width: calc(var(--width) * 1%)M
                // }
                // @ts-ignore
                '--spectrum-track-background-size': `${1 / state.getThumbPercent(0) * 100}%`,
                '--spectrum-track-background-position': direction === 'ltr' ? '0' : '100%'
            }
        });
        let upperTrack = /*#__PURE__*/ (0, $i1AIe$react).createElement("div", {
            className: (0, $i1AIe$classNames)((0, ($parcel$interopDefault($i1AIe$slider_vars_cssmodulejs))), 'spectrum-Slider-track'),
            style: {
                width: `${(1 - state.getThumbPercent(0)) * 100}%`,
                // @ts-ignore
                '--spectrum-track-background-size': `${1 / (1 - state.getThumbPercent(0)) * 100}%`,
                '--spectrum-track-background-position': direction === 'ltr' ? '100%' : '0'
            }
        });
        let filledTrack = null;
        if (isFilled && fillOffset != null) {
            let width = state.getThumbPercent(0) - state.getValuePercent(fillOffset);
            let isRightOfOffset = width > 0;
            let offset = isRightOfOffset ? state.getValuePercent(fillOffset) : state.getThumbPercent(0);
            filledTrack = /*#__PURE__*/ (0, $i1AIe$react).createElement("div", {
                className: (0, $i1AIe$classNames)((0, ($parcel$interopDefault($i1AIe$slider_vars_cssmodulejs))), 'spectrum-Slider-fill', {
                    'spectrum-Slider-fill--right': isRightOfOffset
                }),
                style: {
                    [cssDirection]: `${offset * 100}%`,
                    width: `${Math.abs(width) * 100}%`
                }
            });
        }
        return /*#__PURE__*/ (0, $i1AIe$react).createElement((0, $i1AIe$react).Fragment, null, lowerTrack, /*#__PURE__*/ (0, $i1AIe$react).createElement((0, $9058ca69d66a724f$export$2c1b491743890dec), {
            index: 0,
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            inputRef: inputRef,
            state: state,
            name: props.name
        }), filledTrack, upperTrack);
    });
});


export {$a1251704aa53e1a5$export$472062a354075cee as Slider};
//# sourceMappingURL=Slider.module.js.map
