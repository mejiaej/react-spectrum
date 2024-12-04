var $611e93c7b7c0413c$exports = require("./ListBoxContext.main.js");
require("./vars.954cf9f6.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $8xmxv$spectrumiconsuiCheckmarkMedium = require("@spectrum-icons/ui/CheckmarkMedium");
var $8xmxv$reactspectrumutils = require("@react-spectrum/utils");
var $8xmxv$reactariafocus = require("@react-aria/focus");
var $8xmxv$reactspectrumlayout = require("@react-spectrum/layout");
var $8xmxv$reactariainteractions = require("@react-aria/interactions");
var $8xmxv$reactariautils = require("@react-aria/utils");
var $8xmxv$react = require("react");
var $8xmxv$reactspectrumtext = require("@react-spectrum/text");
var $8xmxv$reactarialistbox = require("@react-aria/listbox");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ListBoxOption", () => $2205d250ee1cb1ac$export$feb3b6b552c14a12);
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










function $2205d250ee1cb1ac$export$feb3b6b552c14a12(props) {
    let { item: item } = props;
    let { rendered: rendered, key: key } = item;
    let ElementType = item.props.href ? 'a' : 'div';
    let { state: state, shouldFocusOnHover: shouldFocusOnHover, shouldUseVirtualFocus: shouldUseVirtualFocus } = (0, $8xmxv$react.useContext)((0, $611e93c7b7c0413c$exports.ListBoxContext));
    let ref = (0, $8xmxv$react.useRef)(undefined);
    let { optionProps: optionProps, labelProps: labelProps, descriptionProps: descriptionProps, isSelected: isSelected, isDisabled: isDisabled, isFocused: isFocused } = (0, $8xmxv$reactarialistbox.useOption)({
        'aria-label': item['aria-label'],
        key: key,
        isVirtualized: true
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $8xmxv$reactariainteractions.useHover)({
        ...props,
        isDisabled: isDisabled
    });
    let contents = typeof rendered === 'string' ? /*#__PURE__*/ (0, ($parcel$interopDefault($8xmxv$react))).createElement((0, $8xmxv$reactspectrumtext.Text), null, rendered) : rendered;
    let isKeyboardModality = (0, $8xmxv$reactariainteractions.isFocusVisible)();
    return /*#__PURE__*/ (0, ($parcel$interopDefault($8xmxv$react))).createElement((0, $8xmxv$reactariafocus.FocusRing), {
        focusRingClass: (0, $8xmxv$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8xmxv$react))).createElement(ElementType, {
        ...(0, $8xmxv$reactariautils.mergeProps)(optionProps, shouldFocusOnHover ? {} : hoverProps),
        ref: ref,
        className: (0, $8xmxv$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-item', {
            // If using virtual focus, apply focused styles to the item when the user is interacting with keyboard modality
            'is-focused': shouldUseVirtualFocus && isFocused && isKeyboardModality,
            'is-disabled': isDisabled,
            'is-selected': isSelected,
            'is-selectable': state.selectionManager.selectionMode !== 'none',
            // When shouldFocusOnHover is false, apply hover styles both when hovered with the mouse.
            // Otherwise, apply hover styles when focused using non-keyboard modality.
            'is-hovered': isHovered && !shouldFocusOnHover || isFocused && !isKeyboardModality
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8xmxv$react))).createElement((0, $8xmxv$reactspectrumlayout.Grid), {
        UNSAFE_className: (0, $8xmxv$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-itemGrid')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($8xmxv$react))).createElement((0, $8xmxv$reactspectrumutils.ClearSlots), null, /*#__PURE__*/ (0, ($parcel$interopDefault($8xmxv$react))).createElement((0, $8xmxv$reactspectrumutils.SlotProvider), {
        slots: {
            text: {
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-itemLabel'],
                ...labelProps
            },
            icon: {
                size: 'S',
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-icon']
            },
            avatar: {
                size: 'avatar-size-100',
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-avatar']
            },
            description: {
                UNSAFE_className: (0, ($parcel$interopDefault($3deee0fd2b46e64f$exports)))['spectrum-Menu-description'],
                ...descriptionProps
            }
        }
    }, contents, isSelected && /*#__PURE__*/ (0, ($parcel$interopDefault($8xmxv$react))).createElement((0, ($parcel$interopDefault($8xmxv$spectrumiconsuiCheckmarkMedium))), {
        slot: "checkmark",
        UNSAFE_className: (0, $8xmxv$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-checkmark')
    }))))));
}


//# sourceMappingURL=ListBoxOption.main.js.map
