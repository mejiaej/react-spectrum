import {ProgressBarBase as $ddf9337e928b5fe6$export$7c6ed87244065f3a} from "./ProgressBarBase.mjs";
import "./vars.7c2bdd7c.css";
import $b214y$barloader_vars_cssmodulejs from "./barloader_vars_css.mjs";
import {classNames as $b214y$classNames} from "@react-spectrum/utils";
import $b214y$react from "react";
import {useProgressBar as $b214y$useProgressBar} from "@react-aria/progress";


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




const $551ca31cb687f352$export$c17561cb55d4db30 = /*#__PURE__*/ (0, $b214y$react).forwardRef(function ProgressBar(props, ref) {
    let { staticColor: staticColor, variant: variant, ...otherProps } = props;
    const { progressBarProps: progressBarProps, labelProps: labelProps } = (0, $b214y$useProgressBar)(props);
    return /*#__PURE__*/ (0, $b214y$react).createElement((0, $ddf9337e928b5fe6$export$7c6ed87244065f3a), {
        ...otherProps,
        ref: ref,
        barProps: progressBarProps,
        labelProps: labelProps,
        barClassName: (0, $b214y$classNames)((0, ($parcel$interopDefault($b214y$barloader_vars_cssmodulejs))), {
            'spectrum-BarLoader--overBackground': variant === 'overBackground',
            'spectrum-BarLoader--staticWhite': staticColor === 'white',
            'spectrum-BarLoader--staticBlack': staticColor === 'black'
        })
    });
});


export {$551ca31cb687f352$export$c17561cb55d4db30 as ProgressBar};
//# sourceMappingURL=ProgressBar.module.js.map
