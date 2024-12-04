require("./vars.c1062b60.css");
var $9f78a6c009f32d0a$exports = require("./barloader_vars_css.main.js");
var $9BUL5$reactspectrumutils = require("@react-spectrum/utils");
var $9BUL5$reactspectrumprogress = require("@react-spectrum/progress");
var $9BUL5$react = require("react");
var $9BUL5$reactariameter = require("@react-aria/meter");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Meter", () => $fc7fd823390a6f61$export$62e3ae2a4090b879);
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




const $fc7fd823390a6f61$export$62e3ae2a4090b879 = /*#__PURE__*/ (0, ($parcel$interopDefault($9BUL5$react))).forwardRef(function Meter(props, ref) {
    let { variant: variant = 'informative', ...otherProps } = props;
    const { meterProps: meterProps, labelProps: labelProps } = (0, $9BUL5$reactariameter.useMeter)(props);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9BUL5$react))).createElement((0, $9BUL5$reactspectrumprogress.ProgressBarBase), {
        ...otherProps,
        ref: ref,
        barProps: meterProps,
        labelProps: labelProps,
        barClassName: (0, $9BUL5$reactspectrumutils.classNames)((0, ($parcel$interopDefault($9f78a6c009f32d0a$exports))), {
            'is-positive': variant === 'positive',
            'is-warning': variant === 'warning',
            'is-critical': variant === 'critical'
        })
    });
});


//# sourceMappingURL=Meter.main.js.map
