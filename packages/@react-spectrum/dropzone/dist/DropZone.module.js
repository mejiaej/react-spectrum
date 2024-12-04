import $fl6Ye$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.c3c1eaaa.css";
import $fl6Ye$dropzone_vars_cssmodulejs from "./dropzone_vars_css.module.js";
import {useStyleProps as $fl6Ye$useStyleProps, useDOMRef as $fl6Ye$useDOMRef, classNames as $fl6Ye$classNames, SlotProvider as $fl6Ye$SlotProvider} from "@react-spectrum/utils";
import {Provider as $fl6Ye$Provider, HeadingContext as $fl6Ye$HeadingContext, DropZone as $fl6Ye$DropZone} from "react-aria-components";
import {useId as $fl6Ye$useId, mergeProps as $fl6Ye$mergeProps} from "@react-aria/utils";
import $fl6Ye$react from "react";
import {useLocalizedStringFormatter as $fl6Ye$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






// Filter out props used by RAC DropZone that we don't want in RSP DropZone for now.
let $37da9a3796695f28$var$filterProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $37da9a3796695f28$export$3c6489d84dc98b6 = /*#__PURE__*/ (0, $fl6Ye$react).forwardRef(function DropZone(props, ref) {
    let { children: children, isFilled: isFilled, replaceMessage: replaceMessage, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $fl6Ye$useStyleProps)(props);
    let domRef = (0, $fl6Ye$useDOMRef)(ref);
    let messageId = (0, $fl6Ye$useId)();
    let headingId = (0, $fl6Ye$useId)();
    let stringFormatter = (0, $fl6Ye$useLocalizedStringFormatter)((0, ($parcel$interopDefault($fl6Ye$intlStringsmodulejs))), '@react-spectrum/dropzone');
    let ariaLabelledby = isFilled ? `${headingId} ${messageId}` : headingId;
    return /*#__PURE__*/ (0, $fl6Ye$react).createElement((0, $fl6Ye$Provider), {
        values: [
            [
                (0, $fl6Ye$HeadingContext),
                {
                    id: headingId
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $fl6Ye$react).createElement((0, $fl6Ye$DropZone), {
        ...(0, $fl6Ye$mergeProps)($37da9a3796695f28$var$filterProps(otherProps)),
        ...styleProps,
        "aria-labelledby": ariaLabelledby,
        className: (0, $fl6Ye$classNames)((0, ($parcel$interopDefault($fl6Ye$dropzone_vars_cssmodulejs))), 'spectrum-Dropzone', styleProps.className, {
            'spectrum-Dropzone--filled': isFilled
        }),
        ref: domRef
    }, /*#__PURE__*/ (0, $fl6Ye$react).createElement((0, $fl6Ye$SlotProvider), {
        slots: {
            illustration: {
                UNSAFE_className: (0, $fl6Ye$classNames)((0, ($parcel$interopDefault($fl6Ye$dropzone_vars_cssmodulejs))), 'spectrum-Dropzone-illustratedMessage')
            }
        }
    }, children), /*#__PURE__*/ (0, $fl6Ye$react).createElement("div", {
        className: (0, $fl6Ye$classNames)((0, ($parcel$interopDefault($fl6Ye$dropzone_vars_cssmodulejs))), 'spectrum-Dropzone-backdrop')
    }), /*#__PURE__*/ (0, $fl6Ye$react).createElement("div", {
        id: messageId,
        className: (0, $fl6Ye$classNames)((0, ($parcel$interopDefault($fl6Ye$dropzone_vars_cssmodulejs))), 'spectrum-Dropzone-banner', styleProps.className)
    }, replaceMessage ? replaceMessage : stringFormatter.format('replaceMessage'))));
});


export {$37da9a3796695f28$export$3c6489d84dc98b6 as DropZone};
//# sourceMappingURL=DropZone.module.js.map
