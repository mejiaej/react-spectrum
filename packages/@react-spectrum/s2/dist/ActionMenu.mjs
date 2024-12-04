import {ActionButton as $da878a05ab4a403e$export$cfc7921d29ef7b80} from "./ActionButton.mjs";
import $auwyh$intlStringsmjs from "./intlStrings.mjs";
import {Menu as $13afb0ea5f0ed767$export$d9b273488cd8ce6f, MenuTrigger as $13afb0ea5f0ed767$export$27d2ad3c5815583e} from "./Menu.mjs";
import $bd5e39574bf57a38$export$2e2bcd8739ae039 from "../icons/More.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsxs as $auwyh$jsxs, jsx as $auwyh$jsx} from "react/jsx-runtime";
import {createContext as $auwyh$createContext, forwardRef as $auwyh$forwardRef} from "react";
import {filterDOMProps as $auwyh$filterDOMProps} from "@react-aria/utils";
import {useLocalizedStringFormatter as $auwyh$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $8bf3cd2442eb485e$export$7f4b66acaca28bd5 = /*#__PURE__*/ (0, $auwyh$createContext)(null);
const $8bf3cd2442eb485e$export$ed57a210b9d13bb6 = /*#__PURE__*/ (0, $auwyh$forwardRef)(function ActionMenu(props, ref) {
    let stringFormatter = (0, $auwyh$useLocalizedStringFormatter)((0, ($parcel$interopDefault($auwyh$intlStringsmjs))), '@react-spectrum/s2');
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8bf3cd2442eb485e$export$7f4b66acaca28bd5);
    let buttonProps = (0, $auwyh$filterDOMProps)(props, {
        labelable: true
    });
    if (buttonProps['aria-label'] === undefined) buttonProps['aria-label'] = stringFormatter.format('menu.moreActions');
    return /*#__PURE__*/ (0, $auwyh$jsxs)((0, $13afb0ea5f0ed767$export$27d2ad3c5815583e), {
        isOpen: props.isOpen,
        defaultOpen: props.defaultOpen,
        onOpenChange: props.onOpenChange,
        align: props.align,
        direction: props.direction,
        shouldFlip: props.shouldFlip,
        children: [
            /*#__PURE__*/ (0, $auwyh$jsx)((0, $da878a05ab4a403e$export$cfc7921d29ef7b80), {
                ref: ref,
                size: props.size,
                isDisabled: props.isDisabled,
                autoFocus: props.autoFocus,
                isQuiet: props.isQuiet,
                styles: props.styles,
                ...buttonProps,
                children: /*#__PURE__*/ (0, $auwyh$jsx)((0, $bd5e39574bf57a38$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $auwyh$jsx)((0, $13afb0ea5f0ed767$export$d9b273488cd8ce6f), {
                items: props.items,
                disabledKeys: props.disabledKeys,
                onAction: props.onAction,
                size: props.menuSize,
                children: props.children
            })
        ]
    });
});


export {$8bf3cd2442eb485e$export$7f4b66acaca28bd5 as ActionMenuContext, $8bf3cd2442eb485e$export$ed57a210b9d13bb6 as ActionMenu};
//# sourceMappingURL=ActionMenu.mjs.map
