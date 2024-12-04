import "./vars.c1062b60.css";
import $gnWwJ$barloader_vars_cssmodulejs from "./barloader_vars_css.mjs";
import {classNames as $gnWwJ$classNames} from "@react-spectrum/utils";
import {ProgressBarBase as $gnWwJ$ProgressBarBase} from "@react-spectrum/progress";
import $gnWwJ$react from "react";
import {useMeter as $gnWwJ$useMeter} from "@react-aria/meter";


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




const $559585cb28581b56$export$62e3ae2a4090b879 = /*#__PURE__*/ (0, $gnWwJ$react).forwardRef(function Meter(props, ref) {
    let { variant: variant = 'informative', ...otherProps } = props;
    const { meterProps: meterProps, labelProps: labelProps } = (0, $gnWwJ$useMeter)(props);
    return /*#__PURE__*/ (0, $gnWwJ$react).createElement((0, $gnWwJ$ProgressBarBase), {
        ...otherProps,
        ref: ref,
        barProps: meterProps,
        labelProps: labelProps,
        barClassName: (0, $gnWwJ$classNames)((0, ($parcel$interopDefault($gnWwJ$barloader_vars_cssmodulejs))), {
            'is-positive': variant === 'positive',
            'is-warning': variant === 'warning',
            'is-critical': variant === 'critical'
        })
    });
});


export {$559585cb28581b56$export$62e3ae2a4090b879 as Meter};
//# sourceMappingURL=Meter.module.js.map
