var $a8b5f113a6a8e4d8$exports = require("./intlStrings.main.js");
var $ec6ca573d82152ff$exports = require("./SliderBase.main.js");
var $77acc7fb8bfd13d6$exports = require("./SliderThumb.main.js");
require("./vars.fb2ba660.css");
var $57893a49ef34c169$exports = require("./slider_vars_css.main.js");
var $5TzYf$reactspectrumutils = require("@react-spectrum/utils");
var $5TzYf$react = require("react");
var $5TzYf$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "RangeSlider", () => $f166b52c7f82645c$export$826424dabc3dd705);
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






const $f166b52c7f82645c$export$826424dabc3dd705 = /*#__PURE__*/ (0, ($parcel$interopDefault($5TzYf$react))).forwardRef(function RangeSlider(props, ref) {
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
    let stringFormatter = (0, $5TzYf$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($a8b5f113a6a8e4d8$exports))), '@react-spectrum/slider');
    let { direction: direction } = (0, $5TzYf$reactariai18n.useLocale)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($5TzYf$react))).createElement((0, $ec6ca573d82152ff$exports.SliderBase), {
        ...baseProps,
        classes: 'spectrum-Slider--range',
        ref: ref
    }, ({ trackRef: trackRef, inputRef: inputRef, state: state })=>{
        let cssDirection = direction === 'rtl' ? 'right' : 'left';
        return /*#__PURE__*/ (0, ($parcel$interopDefault($5TzYf$react))).createElement((0, ($parcel$interopDefault($5TzYf$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($5TzYf$react))).createElement("div", {
            className: (0, $5TzYf$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-track'),
            style: {
                width: `${state.getThumbPercent(0) * 100}%`
            }
        }), /*#__PURE__*/ (0, ($parcel$interopDefault($5TzYf$react))).createElement((0, $77acc7fb8bfd13d6$exports.SliderThumb), {
            index: 0,
            "aria-label": stringFormatter.format('minimum'),
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            inputRef: inputRef,
            state: state,
            name: props.startName
        }), /*#__PURE__*/ (0, ($parcel$interopDefault($5TzYf$react))).createElement("div", {
            className: (0, $5TzYf$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-track'),
            style: {
                [cssDirection]: `${state.getThumbPercent(0) * 100}%`,
                width: `${Math.abs(state.getThumbPercent(0) - state.getThumbPercent(1)) * 100}%`
            }
        }), /*#__PURE__*/ (0, ($parcel$interopDefault($5TzYf$react))).createElement((0, $77acc7fb8bfd13d6$exports.SliderThumb), {
            index: 1,
            "aria-label": stringFormatter.format('maximum'),
            isDisabled: props.isDisabled,
            trackRef: trackRef,
            state: state,
            name: props.endName
        }), /*#__PURE__*/ (0, ($parcel$interopDefault($5TzYf$react))).createElement("div", {
            className: (0, $5TzYf$reactspectrumutils.classNames)((0, ($parcel$interopDefault($57893a49ef34c169$exports))), 'spectrum-Slider-track'),
            style: {
                width: `${(1 - state.getThumbPercent(1)) * 100}%`
            }
        }));
    });
});


//# sourceMappingURL=RangeSlider.main.js.map
