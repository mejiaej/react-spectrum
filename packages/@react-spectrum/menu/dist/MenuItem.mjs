import $bVyMs$intlStringsmodulejs from "./intlStrings.mjs";
import "./vars.ca367765.css";
import $bVyMs$menu_vars_cssmodulejs from "./menu_vars_css.mjs";
import {useMenuContext as $d94604d52c3e3feb$export$21c7ab35b39f78ec, useSubmenuTriggerContext as $d94604d52c3e3feb$export$dc2161044aa0b36d} from "./context.mjs";
import $bVyMs$spectrumiconsuiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import $bVyMs$spectrumiconsworkflowChevronLeft from "@spectrum-icons/workflow/ChevronLeft";
import $bVyMs$spectrumiconsworkflowChevronRight from "@spectrum-icons/workflow/ChevronRight";
import {classNames as $bVyMs$classNames, ClearSlots as $bVyMs$ClearSlots, SlotProvider as $bVyMs$SlotProvider} from "@react-spectrum/utils";
import {FocusRing as $bVyMs$FocusRing} from "@react-aria/focus";
import {Grid as $bVyMs$Grid} from "@react-spectrum/layout";
import $bVyMs$spectrumiconsworkflowInfoOutline from "@spectrum-icons/workflow/InfoOutline";
import {useObjectRef as $bVyMs$useObjectRef, mergeRefs as $bVyMs$mergeRefs, useSlotId as $bVyMs$useSlotId} from "@react-aria/utils";
import $bVyMs$react, {useRef as $bVyMs$useRef, useMemo as $bVyMs$useMemo} from "react";
import {Text as $bVyMs$Text} from "@react-spectrum/text";
import {useLocalizedStringFormatter as $bVyMs$useLocalizedStringFormatter, useLocale as $bVyMs$useLocale} from "@react-aria/i18n";
import {useMenuItem as $bVyMs$useMenuItem} from "@react-aria/menu";


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














function $48fb8f5e1202c980$export$2ce376c2cc3355c8(props) {
    let { item: item, state: state, isVirtualized: isVirtualized } = props;
    let { closeOnSelect: closeOnSelect } = (0, $d94604d52c3e3feb$export$21c7ab35b39f78ec)();
    let { rendered: rendered, key: key } = item;
    let stringFormatter = (0, $bVyMs$useLocalizedStringFormatter)((0, ($parcel$interopDefault($bVyMs$intlStringsmodulejs))), '@react-spectrum/menu');
    let { direction: direction } = (0, $bVyMs$useLocale)();
    let submenuTriggerContext = (0, $d94604d52c3e3feb$export$dc2161044aa0b36d)();
    let { triggerRef: triggerRef, ...submenuTriggerProps } = submenuTriggerContext || {};
    let isSubmenuTrigger = !!submenuTriggerContext;
    let isUnavailable;
    let ElementType = item.props.href ? 'a' : 'div';
    if (isSubmenuTrigger) isUnavailable = submenuTriggerContext.isUnavailable;
    let isDisabled = state.disabledKeys.has(key);
    let isSelectable = !isSubmenuTrigger && state.selectionManager.selectionMode !== 'none';
    let isSelected = isSelectable && state.selectionManager.isSelected(key);
    let itemref = (0, $bVyMs$useRef)(null);
    let ref = (0, $bVyMs$useObjectRef)((0, $bVyMs$useMemo)(()=>(0, $bVyMs$mergeRefs)(itemref, triggerRef), [
        itemref,
        triggerRef
    ]));
    let { menuItemProps: menuItemProps, labelProps: labelProps, descriptionProps: descriptionProps, keyboardShortcutProps: keyboardShortcutProps } = (0, $bVyMs$useMenuItem)({
        isSelected: isSelected,
        isDisabled: isDisabled,
        'aria-label': item['aria-label'],
        key: key,
        closeOnSelect: closeOnSelect,
        isVirtualized: isVirtualized,
        ...submenuTriggerProps
    }, state, ref);
    let endId = (0, $bVyMs$useSlotId)();
    let endProps = {};
    if (endId) {
        endProps.id = endId;
        menuItemProps['aria-describedby'] = [
            menuItemProps['aria-describedby'],
            endId
        ].filter(Boolean).join(' ');
    }
    let contents = typeof rendered === 'string' ? /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$Text), null, rendered) : rendered;
    return /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$FocusRing), {
        focusRingClass: (0, $bVyMs$classNames)((0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $bVyMs$react).createElement(ElementType, {
        ...menuItemProps,
        ref: ref,
        className: (0, $bVyMs$classNames)((0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs))), 'spectrum-Menu-item', {
            'is-disabled': isDisabled,
            'is-selected': isSelected,
            'is-selectable': isSelectable,
            'is-open': submenuTriggerProps.isOpen
        })
    }, /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$Grid), {
        UNSAFE_className: (0, $bVyMs$classNames)((0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs))), 'spectrum-Menu-itemGrid')
    }, /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$ClearSlots), null, /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$SlotProvider), {
        slots: {
            text: {
                UNSAFE_className: (0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs)))['spectrum-Menu-itemLabel'],
                ...labelProps
            },
            end: {
                UNSAFE_className: (0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs)))['spectrum-Menu-end'],
                ...endProps
            },
            icon: {
                UNSAFE_className: (0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs)))['spectrum-Menu-icon'],
                size: 'S'
            },
            description: {
                UNSAFE_className: (0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs)))['spectrum-Menu-description'],
                ...descriptionProps
            },
            keyboard: {
                UNSAFE_className: (0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs)))['spectrum-Menu-keyboard'],
                ...keyboardShortcutProps
            },
            chevron: {
                UNSAFE_className: (0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs)))['spectrum-Menu-chevron'],
                size: 'S'
            }
        }
    }, contents, isSelected && /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$spectrumiconsuiCheckmarkMedium), {
        slot: "checkmark",
        UNSAFE_className: (0, $bVyMs$classNames)((0, ($parcel$interopDefault($bVyMs$menu_vars_cssmodulejs))), 'spectrum-Menu-checkmark')
    }), isUnavailable && /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$spectrumiconsworkflowInfoOutline), {
        slot: "end",
        size: "XS",
        alignSelf: "center",
        "aria-label": stringFormatter.format('unavailable')
    }), isUnavailable == null && isSubmenuTrigger && (direction === 'rtl' ? /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$spectrumiconsworkflowChevronLeft), {
        slot: "chevron"
    }) : /*#__PURE__*/ (0, $bVyMs$react).createElement((0, $bVyMs$spectrumiconsworkflowChevronRight), {
        slot: "chevron"
    })))))));
}


export {$48fb8f5e1202c980$export$2ce376c2cc3355c8 as MenuItem};
//# sourceMappingURL=MenuItem.module.js.map
