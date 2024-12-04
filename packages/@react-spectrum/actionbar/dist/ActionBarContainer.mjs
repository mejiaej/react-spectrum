import "./actionbar.bdfe7eee.css";
import $cNmre$actionbar_cssmodulejs from "./actionbar_css.mjs";
import {useStyleProps as $cNmre$useStyleProps, useDOMRef as $cNmre$useDOMRef, classNames as $cNmre$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $cNmre$filterDOMProps} from "@react-aria/utils";
import $cNmre$react from "react";
import {useProviderProps as $cNmre$useProviderProps} from "@react-spectrum/provider";


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




const $2f6c8b20aa071c6d$export$ac2eb07f267e434c = /*#__PURE__*/ (0, $cNmre$react).forwardRef(function ActionBarContainer(props, ref) {
    // Grabs specific props from the closest Provider (see https://react-spectrum.adobe.com/react-spectrum/Provider.html#property-groups). Remove if your component doesn't support any of the listed props.
    props = (0, $cNmre$useProviderProps)(props);
    let { children: children } = props;
    let { styleProps: styleProps } = (0, $cNmre$useStyleProps)(props);
    let domRef = (0, $cNmre$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $cNmre$react).createElement("div", {
        ...(0, $cNmre$filterDOMProps)(props),
        ...styleProps,
        ref: domRef,
        className: (0, $cNmre$classNames)((0, ($parcel$interopDefault($cNmre$actionbar_cssmodulejs))), 'ActionBarContainer', styleProps.className)
    }, children);
});


export {$2f6c8b20aa071c6d$export$ac2eb07f267e434c as ActionBarContainer};
//# sourceMappingURL=ActionBarContainer.module.js.map
