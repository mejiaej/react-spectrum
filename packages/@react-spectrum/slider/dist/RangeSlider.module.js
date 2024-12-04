import $bc8Se$intlStringsmodulejs from "./intlStrings.module.js";
import {SliderBase as $39572711324a3b8e$export$9418495bb635ebde} from "./SliderBase.module.js";
import {SliderThumb as $9058ca69d66a724f$export$2c1b491743890dec} from "./SliderThumb.module.js";
import "./vars.fb2ba660.css";
import $bc8Se$slider_vars_cssmodulejs from "./slider_vars_css.module.js";
import {classNames as $bc8Se$classNames} from "@react-spectrum/utils";
import $bc8Se$react from "react";
import {useLocalizedStringFormatter as $bc8Se$useLocalizedStringFormatter, useLocale as $bc8Se$useLocale} from "@react-aria/i18n";


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






const $d42a197b273dc031$export$826424dabc3dd705 = /*#__PURE__*/ (0, $bc8Se$react).forwardRef(function RangeSlider(props, ref) {
    let { onChange: onChange, onChangeEnd: onChangeEnd, value: value, defaultValue: defaultValue, getValueLabel: getValueLabel, ...otherProps } = props;
    var _props_minValue, _props_maxValue;
    let baseProps = {
        ...otherProps,
        value: value != null ? [
            value.start,
            value.end
        ] : undefined,
        defaultValue: defaultValue != null ? [
            defaultValue.start,
            defaultValue.end
        ] : [
            (_props_minValue = props.minValue) !== null && _props_minValue !== void 0 ? _props_minValue : 0,
            (_props_maxValue = props.maxValue) !== null && _props_maxValue !== void 0 ? _props_maxValue : 100
        ],
        onChange (v) {
            onChange === null || onChange === void 0 ? void 0 : onChange({
                start: v[0],
                end: v[1]
            });
        },
        onChangeEnd (v) {
            onChangeEnd === null || onChangeEnd === void 0 ? void 0 : onChangeEnd({
                start: v[0],
                end: v[1]
            });
        },
        getValueLabel: getValueLabel ? ([start, end])=>getValueLabel({
                start: start,
                end: end
            }) : undefined
    };
    let stringFormatter = (0, $bc8Se$useLocalizedStringFormatter)((0, ($parcel$interopDefault($bc8Se$intlStringsmodulejs))), '@react-spectrum/slider');
    let { direction: direction } = (0, $bc8Se$useLocale)();
    return /*#__PURE__*/ (0, $bc8Se$react).createElement((0, $39572711324a3b8e$export$9418495bb635ebde), {
        ...baseProps,
        classes: 'spectrum-Slider--range',
        ref: ref
    }, ({ trackRef: trackRef, inputRef: inputRef, state: state })=>{
        let cssDirection = direction === 'rtl' ? 'right' : 'left';
        return /*#__PURE__*/ (0, $bc8Se$react).createElement((0, $bc8Se$react).Fragment, null, /*#__PURE__*/ (0, $bc8Se$react).createElement("div", {
            className: (0, $bc8Se$classNames)((0, ($parcel$interopDefault($bc8Se$slider_vars_cssmodulejs))), 'spectrum-Slider-track'),
            style: {
                width: `${state.getThumbPercent(0) * 100}%`
            }
        }), /*#__PURE__*/ (0, $bc8Se$react).createElement((0, $9058ca69d66a724f$export$2c1b491743890dec), {
            index: 0,
            "aria-label": stringFormatter.format('minimum'),
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            inputRef: inputRef,
            state: state,
            name: props.startName
        }), /*#__PURE__*/ (0, $bc8Se$react).createElement("div", {
            className: (0, $bc8Se$classNames)((0, ($parcel$interopDefault($bc8Se$slider_vars_cssmodulejs))), 'spectrum-Slider-track'),
            style: {
                [cssDirection]: `${state.getThumbPercent(0) * 100}%`,
                width: `${Math.abs(state.getThumbPercent(0) - state.getThumbPercent(1)) * 100}%`
            }
        }), /*#__PURE__*/ (0, $bc8Se$react).createElement((0, $9058ca69d66a724f$export$2c1b491743890dec), {
            index: 1,
            "aria-label": stringFormatter.format('maximum'),
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            state: state,
            name: props.endName
        }), /*#__PURE__*/ (0, $bc8Se$react).createElement("div", {
            className: (0, $bc8Se$classNames)((0, ($parcel$interopDefault($bc8Se$slider_vars_cssmodulejs))), 'spectrum-Slider-track'),
            style: {
                width: `${(1 - state.getThumbPercent(1)) * 100}%`
            }
        }));
    });
});


export {$d42a197b273dc031$export$826424dabc3dd705 as RangeSlider};
//# sourceMappingURL=RangeSlider.module.js.map
