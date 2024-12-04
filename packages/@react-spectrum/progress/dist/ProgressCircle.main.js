require("./vars.74a64330.css");
var $f4d8d13edf2d3ca2$exports = require("./circleloader_vars_css.main.js");
var $eahRj$reactariautils = require("@react-aria/utils");
var $eahRj$reactspectrumutils = require("@react-spectrum/utils");
var $eahRj$react = require("react");
var $eahRj$reactariaprogress = require("@react-aria/progress");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ProgressCircle", () => $365887133501f5a1$export$c79b9d6b4cc92af7);
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




const $365887133501f5a1$export$c79b9d6b4cc92af7 = /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).forwardRef(function ProgressCircle(props, ref) {
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, size: size = 'M', staticColor: staticColor, variant: variant, isIndeterminate: isIndeterminate = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, ...otherProps } = props;
    let domRef = (0, $eahRj$reactspectrumutils.useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $eahRj$reactspectrumutils.useStyleProps)(otherProps);
    value = (0, $eahRj$reactariautils.clamp)(value, minValue, maxValue);
    let { progressBarProps: progressBarProps } = (0, $eahRj$reactariaprogress.useProgressBar)({
        ...props,
        value: value
    });
    let subMask1Style = {};
    let subMask2Style = {};
    if (!isIndeterminate) {
        let percentage = (value - minValue) / (maxValue - minValue) * 100;
        let angle;
        if (percentage > 0 && percentage <= 50) {
            angle = -180 + percentage / 50 * 180;
            subMask1Style.transform = `rotate(${angle}deg)`;
            subMask2Style.transform = 'rotate(-180deg)';
        } else if (percentage > 50) {
            angle = -180 + (percentage - 50) / 50 * 180;
            subMask1Style.transform = 'rotate(0deg)';
            subMask2Style.transform = `rotate(${angle}deg)`;
        }
    }
    if (!ariaLabel && !ariaLabelledby) console.warn('ProgressCircle requires an aria-label or aria-labelledby attribute for accessibility');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        ...styleProps,
        ...progressBarProps,
        ref: domRef,
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader', {
            'spectrum-CircleLoader--indeterminate': isIndeterminate,
            'spectrum-CircleLoader--small': size === 'S',
            'spectrum-CircleLoader--large': size === 'L',
            'spectrum-CircleLoader--overBackground': variant === 'overBackground',
            'spectrum-CircleLoader--staticWhite': staticColor === 'white',
            'spectrum-CircleLoader--staticBlack': staticColor === 'black'
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader-track')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader-fills')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader-fillMask1')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader-fillSubMask1'),
        "data-testid": "fillSubMask1",
        style: subMask1Style
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader-fill')
    }))), /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader-fillMask2')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader-fillSubMask2'),
        "data-testid": "fillSubMask2",
        style: subMask2Style
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($eahRj$react))).createElement("div", {
        className: (0, $eahRj$reactspectrumutils.classNames)((0, ($parcel$interopDefault($f4d8d13edf2d3ca2$exports))), 'spectrum-CircleLoader-fill')
    })))));
});


//# sourceMappingURL=ProgressCircle.main.js.map
