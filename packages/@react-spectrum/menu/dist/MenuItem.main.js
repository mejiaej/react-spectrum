var $2f9ceea24fba5443$exports = require("./intlStrings.main.js");
require("./vars.ca367765.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $cac834c4bc0a51d3$exports = require("./context.main.js");
var $8PAEC$spectrumiconsuiCheckmarkMedium = require("@spectrum-icons/ui/CheckmarkMedium");
var $8PAEC$spectrumiconsworkflowChevronLeft = require("@spectrum-icons/workflow/ChevronLeft");
var $8PAEC$spectrumiconsworkflowChevronRight = require("@spectrum-icons/workflow/ChevronRight");
var $8PAEC$reactspectrumutils = require("@react-spectrum/utils");
var $8PAEC$reactariafocus = require("@react-aria/focus");
var $8PAEC$reactspectrumlayout = require("@react-spectrum/layout");
var $8PAEC$spectrumiconsworkflowInfoOutline = require("@spectrum-icons/workflow/InfoOutline");
var $8PAEC$reactariautils = require("@react-aria/utils");
var $8PAEC$react = require("react");
var $8PAEC$reactspectrumtext = require("@react-spectrum/text");
var $8PAEC$reactariai18n = require("@react-aria/i18n");
var $8PAEC$reactariamenu = require("@react-aria/menu");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "MenuItem", () => $1d718563708db5b5$export$2ce376c2cc3355c8);
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














function $1d718563708db5b5$export$2ce376c2cc3355c8(props) {
    let { item: item, state: state, isVirtualized: isVirtualized } = props;
    let { closeOnSelect: closeOnSelect } = (0, $cac834c4bc0a51d3$exports.useMenuContext)();
    let { rendered: rendered, key: key } = item;
    let stringFormatter = (0, $8PAEC$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($2f9ceea24fba5443$exports))), '@react-spectrum/menu');
    let { direction: direction } = (0, $8PAEC$reactariai18n.useLocale)();
    let submenuTriggerContext = (0, $cac834c4bc0a51d3$exports.useSubmenuTriggerContext)();
    let { triggerRef: triggerRef, ...submenuTriggerProps } = submenuTriggerContext || {};
    let isSubmenuTrigger = !!submenuTriggerContext;
    let isUnavailable;
    let ElementType = item.props.href ? 'a' : 'div';
    if (isSubmenuTrigger) isUnavailable = submenuTriggerContext.isUnavailable;
    let isDisabled = state.disabledKeys.has(key);
    let isSelectable = !isSubmenuTrigger && state.selectionManager.selectionMode !== 'none';
    let isSelected = isSelectable && state.selectionManager.isSelected(key);
    let itemref = (0, $8PAEC$react.useRef)(null);
    let ref = (0, $8PAEC$reactariautils.useObjectRef)((0, $8PAEC$react.useMemo)(()=>(0, $8PAEC$reactariautils.mergeRefs)(itemref, triggerRef), [
        itemref,
        triggerRef
    ]));
    let { menuItemProps: menuItemProps, labelProps: labelProps, descriptionProps: descriptionProps, keyboardShortcutProps: keyboardShortcutProps } = (0, $8PAEC$reactariamenu.useMenuItem)({
        isSelected: isSelected,
        isDisabled: isDisabled,
        'aria-label': item['aria-label'],
        key: key,
        closeOnSelect: closeOnSelect,
        isVirtualized: isVirtualized,
        ...submenuTriggerProps
    }, state, ref);
    let endId = (0, $8PAEC$reactariautils.useSlotId)();
    let endProps = {};
    if (endId) {
        endProps.id = endId;
        menuItemProps['aria-describedby'] = [
            menuItemProps['aria-describedby'],
            endId
        ].filter(Boolean).join(' ');
    }
    let contents = typeof rendered === 'string' ? /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, $8PAEC$reactspectrumtext.Text), null, rendered) : rendered;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, $8PAEC$reactariafocus.FocusRing), {
        focusRingClass: (0, $8PAEC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement(ElementType, {
        ...menuItemProps,
        ref: ref,
        className: (0, $8PAEC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-item', {
            'is-disabled': isDisabled,
            'is-selected': isSelected,
            'is-selectable': isSelectable,
            'is-open': submenuTriggerProps.isOpen
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, $8PAEC$reactspectrumlayout.Grid), {
        UNSAFE_className: (0, $8PAEC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-itemGrid')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, $8PAEC$reactspectrumutils.ClearSlots), null, /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, $8PAEC$reactspectrumutils.SlotProvider), {
        slots: {
            text: {
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-itemLabel'],
                ...labelProps
            },
            end: {
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-end'],
                ...endProps
            },
            icon: {
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-icon'],
                size: 'S'
            },
            description: {
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-description'],
                ...descriptionProps
            },
            keyboard: {
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-keyboard'],
                ...keyboardShortcutProps
            },
            chevron: {
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-chevron'],
                size: 'S'
            }
        }
    }, contents, isSelected && /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, ($parcel$interopDefault($8PAEC$spectrumiconsuiCheckmarkMedium))), {
        slot: "checkmark",
        UNSAFE_className: (0, $8PAEC$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-checkmark')
    }), isUnavailable && /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, ($parcel$interopDefault($8PAEC$spectrumiconsworkflowInfoOutline))), {
        slot: "end",
        size: "XS",
        alignSelf: "center",
        "aria-label": stringFormatter.format('unavailable')
    }), isUnavailable == null && isSubmenuTrigger && (direction === 'rtl' ? /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, ($parcel$interopDefault($8PAEC$spectrumiconsworkflowChevronLeft))), {
        slot: "chevron"
    }) : /*#__PURE__*/ (0, ($parcel$interopDefault($8PAEC$react))).createElement((0, ($parcel$interopDefault($8PAEC$spectrumiconsworkflowChevronRight))), {
        slot: "chevron"
    })))))));
}


//# sourceMappingURL=MenuItem.main.js.map
