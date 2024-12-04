var $cac834c4bc0a51d3$exports = require("./context.main.js");
require("./vars.ca367765.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $6doGq$reactspectrumutils = require("@react-spectrum/utils");
var $6doGq$reactspectrumoverlays = require("@react-spectrum/overlays");
var $6doGq$reactariainteractions = require("@react-aria/interactions");
var $6doGq$react = require("react");
var $6doGq$reactariamenu = require("@react-aria/menu");
var $6doGq$reactstatelymenu = require("@react-stately/menu");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "MenuTrigger", () => $e56311f7204399c7$export$27d2ad3c5815583e);
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







const $e56311f7204399c7$export$27d2ad3c5815583e = /*#__PURE__*/ (0, $6doGq$react.forwardRef)(function MenuTrigger(props, ref) {
    let triggerRef = (0, $6doGq$react.useRef)(null);
    let domRef = (0, $6doGq$reactspectrumutils.useDOMRef)(ref);
    let menuTriggerRef = domRef || triggerRef;
    let menuRef = (0, $6doGq$react.useRef)(null);
    let { children: children, align: align = 'start', shouldFlip: shouldFlip = true, direction: direction = 'bottom', closeOnSelect: closeOnSelect, trigger: trigger = 'press' } = props;
    let [menuTrigger, menu] = (0, ($parcel$interopDefault($6doGq$react))).Children.toArray(children);
    let state = (0, $6doGq$reactstatelymenu.useMenuTriggerState)(props);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, $6doGq$reactariamenu.useMenuTrigger)({
        trigger: trigger
    }, state, menuTriggerRef);
    let initialPlacement;
    switch(direction){
        case 'left':
        case 'right':
        case 'start':
        case 'end':
            initialPlacement = `${direction} ${align === 'end' ? 'bottom' : 'top'}`;
            break;
        case 'bottom':
        case 'top':
        default:
            initialPlacement = `${direction} ${align}`;
    }
    let isMobile = (0, $6doGq$reactspectrumutils.useIsMobileDevice)();
    let menuContext = {
        ...menuProps,
        ref: menuRef,
        onClose: state.close,
        closeOnSelect: closeOnSelect,
        autoFocus: state.focusStrategy || true,
        UNSAFE_style: isMobile ? {
            width: '100%',
            maxHeight: 'inherit'
        } : undefined,
        UNSAFE_className: (0, $6doGq$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), {
            'spectrum-Menu-popover': !isMobile
        }),
        state: state
    };
    // Close when clicking outside the root menu when a submenu is open.
    let rootOverlayRef = (0, $6doGq$react.useRef)(null);
    let rootOverlayDomRef = (0, $6doGq$reactspectrumutils.unwrapDOMRef)(rootOverlayRef);
    (0, $6doGq$reactariainteractions.useInteractOutside)({
        ref: rootOverlayDomRef,
        onInteractOutside: ()=>{
            state === null || state === void 0 ? void 0 : state.close();
        },
        isDisabled: !state.isOpen || state.expandedKeysStack.length === 0
    });
    // On small screen devices, the menu is rendered in a tray, otherwise a popover.
    let overlay;
    if (isMobile) overlay = /*#__PURE__*/ (0, ($parcel$interopDefault($6doGq$react))).createElement((0, $6doGq$reactspectrumoverlays.Tray), {
        state: state,
        isFixedHeight: true,
        ref: rootOverlayRef
    }, menu);
    else overlay = /*#__PURE__*/ (0, ($parcel$interopDefault($6doGq$react))).createElement((0, $6doGq$reactspectrumoverlays.Popover), {
        ref: rootOverlayRef,
        UNSAFE_style: {
            clipPath: 'unset',
            overflow: 'visible',
            filter: 'unset',
            borderWidth: '0px'
        },
        state: state,
        triggerRef: menuTriggerRef,
        scrollRef: menuRef,
        placement: initialPlacement,
        hideArrow: true,
        shouldFlip: shouldFlip
    }, menu);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($6doGq$react))).createElement((0, $6doGq$react.Fragment), null, /*#__PURE__*/ (0, ($parcel$interopDefault($6doGq$react))).createElement((0, $6doGq$reactspectrumutils.SlotProvider), {
        slots: {
            actionButton: {
                holdAffordance: trigger === 'longPress'
            }
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6doGq$react))).createElement((0, $6doGq$reactariainteractions.PressResponder), {
        ...menuTriggerProps,
        ref: menuTriggerRef,
        isPressed: state.isOpen
    }, menuTrigger)), /*#__PURE__*/ (0, ($parcel$interopDefault($6doGq$react))).createElement((0, $cac834c4bc0a51d3$exports.MenuContext).Provider, {
        value: menuContext
    }, overlay));
});


//# sourceMappingURL=MenuTrigger.main.js.map
