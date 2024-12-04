var $3d86ae6a9356cc8a$exports = require("./ProgressBarBase.main.js");
require("./vars.7c2bdd7c.css");
var $9f78a6c009f32d0a$exports = require("./barloader_vars_css.main.js");
var $24n0W$reactspectrumutils = require("@react-spectrum/utils");
var $24n0W$react = require("react");
var $24n0W$reactariaprogress = require("@react-aria/progress");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ProgressBar", () => $08d0cdc7f7a792a7$export$c17561cb55d4db30);
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




const $08d0cdc7f7a792a7$export$c17561cb55d4db30 = /*#__PURE__*/ (0, ($parcel$interopDefault($24n0W$react))).forwardRef(function ProgressBar(props, ref) {
    let { staticColor: staticColor, variant: variant, ...otherProps } = props;
    const { progressBarProps: progressBarProps, labelProps: labelProps } = (0, $24n0W$reactariaprogress.useProgressBar)(props);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($24n0W$react))).createElement((0, $3d86ae6a9356cc8a$exports.ProgressBarBase), {
        ...otherProps,
        ref: ref,
        barProps: progressBarProps,
        labelProps: labelProps,
        barClassName: (0, $24n0W$reactspectrumutils.classNames)((0, ($parcel$interopDefault($9f78a6c009f32d0a$exports))), {
            'spectrum-BarLoader--overBackground': variant === 'overBackground',
            'spectrum-BarLoader--staticWhite': staticColor === 'white',
            'spectrum-BarLoader--staticBlack': staticColor === 'black'
        })
    });
});


//# sourceMappingURL=ProgressBar.main.js.map
