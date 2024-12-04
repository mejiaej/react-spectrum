import "./vars.b1947143.css";
import $i4ryj$illustratedmessage_vars_cssmodulejs from "./illustratedmessage_vars_css.module.js";
import {useSlotProps as $i4ryj$useSlotProps, useStyleProps as $i4ryj$useStyleProps, classNames as $i4ryj$classNames, ClearSlots as $i4ryj$ClearSlots, SlotProvider as $i4ryj$SlotProvider} from "@react-spectrum/utils";
import {filterDOMProps as $i4ryj$filterDOMProps} from "@react-aria/utils";
import {Flex as $i4ryj$Flex} from "@react-spectrum/layout";
import $i4ryj$react, {forwardRef as $i4ryj$forwardRef} from "react";


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




const $ccaf5c86c16f58c0$export$406dbc84c317ece0 = /*#__PURE__*/ (0, $i4ryj$forwardRef)(function IllustratedMessage(props, ref) {
    props = (0, $i4ryj$useSlotProps)(props, 'illustration');
    let { children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $i4ryj$useStyleProps)(otherProps);
    let headingClassName = (0, $i4ryj$classNames)((0, ($parcel$interopDefault($i4ryj$illustratedmessage_vars_cssmodulejs))), 'spectrum-IllustratedMessage-heading');
    let contentClassName = (0, $i4ryj$classNames)((0, ($parcel$interopDefault($i4ryj$illustratedmessage_vars_cssmodulejs))), 'spectrum-IllustratedMessage-description');
    let slots = {
        heading: {
            UNSAFE_className: headingClassName
        },
        content: {
            UNSAFE_className: contentClassName
        }
    };
    return /*#__PURE__*/ (0, $i4ryj$react).createElement((0, $i4ryj$Flex), {
        ...(0, $i4ryj$filterDOMProps)(otherProps),
        UNSAFE_style: styleProps.style,
        isHidden: styleProps.hidden,
        UNSAFE_className: (0, $i4ryj$classNames)((0, ($parcel$interopDefault($i4ryj$illustratedmessage_vars_cssmodulejs))), 'spectrum-IllustratedMessage', styleProps.className),
        ref: ref
    }, /*#__PURE__*/ (0, $i4ryj$react).createElement((0, $i4ryj$ClearSlots), null, /*#__PURE__*/ (0, $i4ryj$react).createElement((0, $i4ryj$SlotProvider), {
        slots: slots
    }, children)));
});


export {$ccaf5c86c16f58c0$export$406dbc84c317ece0 as IllustratedMessage};
//# sourceMappingURL=IllustratedMessage.module.js.map
