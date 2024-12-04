import $4ZPCG$intlStringsmodulejs from "./intlStrings.mjs";
import {Menu as $49b26f4b606348f6$export$d9b273488cd8ce6f} from "./Menu.mjs";
import {MenuTrigger as $aa0b855f135b86e3$export$27d2ad3c5815583e} from "./MenuTrigger.mjs";
import {ActionButton as $4ZPCG$ActionButton} from "@react-spectrum/button";
import {filterDOMProps as $4ZPCG$filterDOMProps} from "@react-aria/utils";
import $4ZPCG$spectrumiconsworkflowMore from "@spectrum-icons/workflow/More";
import $4ZPCG$react, {forwardRef as $4ZPCG$forwardRef} from "react";
import {useLocalizedStringFormatter as $4ZPCG$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useSlotProps as $4ZPCG$useSlotProps} from "@react-spectrum/utils";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $43fa9949e6af393d$export$ed57a210b9d13bb6 = /*#__PURE__*/ (0, $4ZPCG$forwardRef)(function ActionMenu(props, ref) {
    props = (0, $4ZPCG$useSlotProps)(props, 'actionMenu');
    let stringFormatter = (0, $4ZPCG$useLocalizedStringFormatter)((0, ($parcel$interopDefault($4ZPCG$intlStringsmodulejs))), '@react-spectrum/menu');
    let buttonProps = (0, $4ZPCG$filterDOMProps)(props, {
        labelable: true
    });
    if (buttonProps['aria-label'] === undefined) buttonProps['aria-label'] = stringFormatter.format('moreActions');
    return /*#__PURE__*/ (0, $4ZPCG$react).createElement((0, $aa0b855f135b86e3$export$27d2ad3c5815583e), {
        isOpen: props.isOpen,
        defaultOpen: props.defaultOpen,
        onOpenChange: props.onOpenChange,
        align: props.align,
        direction: props.direction,
        shouldFlip: props.shouldFlip
    }, /*#__PURE__*/ (0, $4ZPCG$react).createElement((0, $4ZPCG$ActionButton), {
        ref: ref,
        ...props,
        ...buttonProps
    }, /*#__PURE__*/ (0, $4ZPCG$react).createElement((0, $4ZPCG$spectrumiconsworkflowMore), null)), /*#__PURE__*/ (0, $4ZPCG$react).createElement((0, $49b26f4b606348f6$export$d9b273488cd8ce6f), {
        children: props.children,
        items: props.items,
        disabledKeys: props.disabledKeys,
        onAction: props.onAction
    }));
});


export {$43fa9949e6af393d$export$ed57a210b9d13bb6 as ActionMenu};
//# sourceMappingURL=ActionMenu.module.js.map
