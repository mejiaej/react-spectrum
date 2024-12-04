var $2f9ceea24fba5443$exports = require("./intlStrings.main.js");
var $cac834c4bc0a51d3$exports = require("./context.main.js");
var $1d718563708db5b5$exports = require("./MenuItem.main.js");
var $5793ff412227d2fc$exports = require("./MenuSection.main.js");
require("./vars.ca367765.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $hl8gx$reactspectrumbutton = require("@react-spectrum/button");
var $hl8gx$spectrumiconsuiArrowDownSmall = require("@spectrum-icons/ui/ArrowDownSmall");
var $hl8gx$reactspectrumutils = require("@react-spectrum/utils");
var $hl8gx$reactariafocus = require("@react-aria/focus");
var $hl8gx$reactariautils = require("@react-aria/utils");
var $hl8gx$react = require("react");
var $hl8gx$reactariai18n = require("@react-aria/i18n");
var $hl8gx$reactariamenu = require("@react-aria/menu");
var $hl8gx$reactstatelytree = require("@react-stately/tree");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Menu", () => $63a7dff9cbe2d046$export$d9b273488cd8ce6f);
$parcel$export(module.exports, "TrayHeaderWrapper", () => $63a7dff9cbe2d046$export$3dfe97b5c32d8d8c);
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













const $63a7dff9cbe2d046$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).forwardRef(function Menu(props, ref) {
    let isSubmenu = true;
    let contextProps = (0, $hl8gx$react.useContext)((0, $cac834c4bc0a51d3$exports.MenuContext));
    let parentMenuContext = (0, $cac834c4bc0a51d3$exports.useMenuStateContext)();
    let { rootMenuTriggerState: rootMenuTriggerState, state: parentMenuTreeState } = parentMenuContext || {
        rootMenuTriggerState: contextProps.state
    };
    if (!parentMenuContext) isSubmenu = false;
    let completeProps = {
        ...(0, $hl8gx$reactariautils.mergeProps)(contextProps, props)
    };
    let domRef = (0, $hl8gx$reactspectrumutils.useDOMRef)(ref);
    let [popoverContainer, setPopoverContainer] = (0, $hl8gx$react.useState)(null);
    let trayContainerRef = (0, $hl8gx$react.useRef)(null);
    let state = (0, $hl8gx$reactstatelytree.useTreeState)(completeProps);
    let submenuRef = (0, $hl8gx$react.useRef)(null);
    let { menuProps: menuProps } = (0, $hl8gx$reactariamenu.useMenu)(completeProps, state, domRef);
    let { styleProps: styleProps } = (0, $hl8gx$reactspectrumutils.useStyleProps)(completeProps);
    (0, $hl8gx$reactariautils.useSyncRef)(contextProps, domRef);
    let [leftOffset, setLeftOffset] = (0, $hl8gx$react.useState)({
        left: 0
    });
    let prevPopoverContainer = (0, $hl8gx$react.useRef)(null);
    (0, $hl8gx$react.useEffect)(()=>{
        if (popoverContainer && prevPopoverContainer.current !== popoverContainer && leftOffset.left === 0) {
            prevPopoverContainer.current = popoverContainer;
            let { left: left } = popoverContainer.getBoundingClientRect();
            setLeftOffset({
                left: -1 * left
            });
        }
    }, [
        leftOffset,
        popoverContainer
    ]);
    var _contextProps_submenuLevel;
    let menuLevel = (_contextProps_submenuLevel = contextProps.submenuLevel) !== null && _contextProps_submenuLevel !== void 0 ? _contextProps_submenuLevel : -1;
    let nextMenuLevelKey = rootMenuTriggerState === null || rootMenuTriggerState === void 0 ? void 0 : rootMenuTriggerState.expandedKeysStack[menuLevel + 1];
    let hasOpenSubmenu = false;
    if (nextMenuLevelKey != null) {
        let nextMenuLevel = state.collection.getItem(nextMenuLevelKey);
        hasOpenSubmenu = nextMenuLevel != null;
    }
    return /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement((0, $cac834c4bc0a51d3$exports.MenuStateContext).Provider, {
        value: {
            popoverContainer: popoverContainer,
            trayContainerRef: trayContainerRef,
            menu: domRef,
            submenu: submenuRef,
            rootMenuTriggerState: rootMenuTriggerState,
            state: state
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement("div", {
        style: {
            height: hasOpenSubmenu ? '100%' : undefined
        },
        ref: trayContainerRef
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement((0, $hl8gx$reactariafocus.FocusScope), null, /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement($63a7dff9cbe2d046$export$3dfe97b5c32d8d8c, {
        onBackButtonPress: contextProps.onBackButtonPress,
        hasOpenSubmenu: hasOpenSubmenu,
        isSubmenu: isSubmenu,
        parentMenuTreeState: parentMenuTreeState,
        rootMenuTriggerState: rootMenuTriggerState,
        menuRef: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement("div", {
        ...menuProps,
        style: (0, $hl8gx$reactariautils.mergeProps)(styleProps.style, menuProps.style),
        ref: domRef,
        className: (0, $hl8gx$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu', styleProps.className)
    }, [
        ...state.collection
    ].map((item)=>{
        if (item.type === 'section') return /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement((0, $5793ff412227d2fc$exports.MenuSection), {
            key: item.key,
            item: item,
            state: state
        });
        let menuItem = /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement((0, $1d718563708db5b5$exports.MenuItem), {
            key: item.key,
            item: item,
            state: state
        });
        if (item.wrapper) menuItem = item.wrapper(menuItem);
        return menuItem;
    }))), (rootMenuTriggerState === null || rootMenuTriggerState === void 0 ? void 0 : rootMenuTriggerState.isOpen) && /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement("div", {
        ref: setPopoverContainer,
        style: {
            width: '100vw',
            position: 'absolute',
            top: -5,
            ...leftOffset
        }
    })));
});
function $63a7dff9cbe2d046$export$3dfe97b5c32d8d8c(props) {
    var _parentMenuTreeState_collection_getItem;
    let { children: children, isSubmenu: isSubmenu, hasOpenSubmenu: hasOpenSubmenu, parentMenuTreeState: parentMenuTreeState, rootMenuTriggerState: rootMenuTriggerState, onBackButtonPress: onBackButtonPress, wrapperKeyDown: wrapperKeyDown, menuRef: menuRef } = props;
    let stringFormatter = (0, $hl8gx$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($2f9ceea24fba5443$exports))), '@react-spectrum/menu');
    let backButtonText = parentMenuTreeState === null || parentMenuTreeState === void 0 ? void 0 : (_parentMenuTreeState_collection_getItem = parentMenuTreeState.collection.getItem(rootMenuTriggerState === null || rootMenuTriggerState === void 0 ? void 0 : rootMenuTriggerState.expandedKeysStack.slice(-1)[0])) === null || _parentMenuTreeState_collection_getItem === void 0 ? void 0 : _parentMenuTreeState_collection_getItem.textValue;
    let backButtonLabel = stringFormatter.format('backButton', {
        prevMenuButton: backButtonText
    });
    let headingId = (0, $hl8gx$reactariautils.useSlotId)();
    let isMobile = (0, $hl8gx$reactspectrumutils.useIsMobileDevice)();
    let { direction: direction } = (0, $hl8gx$reactariai18n.useLocale)();
    let [traySubmenuAnimation, setTraySubmenuAnimation] = (0, $hl8gx$react.useState)('');
    (0, $hl8gx$reactariautils.useLayoutEffect)(()=>{
        if (!hasOpenSubmenu) setTraySubmenuAnimation('spectrum-TraySubmenu-enter');
    }, [
        hasOpenSubmenu,
        isMobile
    ]);
    let timeoutRef = (0, $hl8gx$react.useRef)(null);
    let handleBackButtonPress = ()=>{
        setTraySubmenuAnimation('spectrum-TraySubmenu-exit');
        timeoutRef.current = setTimeout(()=>{
            onBackButtonPress();
        }, 220); // Matches transition duration
    };
    (0, $hl8gx$react.useEffect)(()=>{
        return ()=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);
    // When opening submenu in tray, focus the first item in the submenu after animation completes
    // This fixes an issue with iOS VO where the closed submenu was getting focus
    let focusTimeoutRef = (0, $hl8gx$react.useRef)(null);
    (0, $hl8gx$react.useEffect)(()=>{
        if (isMobile && isSubmenu && !hasOpenSubmenu && traySubmenuAnimation === 'spectrum-TraySubmenu-enter') focusTimeoutRef.current = setTimeout(()=>{
            let firstItem = menuRef.current.querySelector('[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]');
            firstItem === null || firstItem === void 0 ? void 0 : firstItem.focus();
        }, 220);
        return ()=>{
            if (focusTimeoutRef.current) clearTimeout(focusTimeoutRef.current);
        };
    }, [
        hasOpenSubmenu,
        isMobile,
        isSubmenu,
        menuRef,
        traySubmenuAnimation
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement((0, ($parcel$interopDefault($hl8gx$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement("div", {
        role: headingId ? 'dialog' : undefined,
        "aria-labelledby": headingId,
        "aria-hidden": isMobile && hasOpenSubmenu,
        "data-testid": "menu-wrapper",
        className: (0, $hl8gx$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Menu-wrapper', {
            'spectrum-Menu-wrapper--isMobile': isMobile,
            'is-expanded': hasOpenSubmenu,
            [traySubmenuAnimation]: isMobile
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement("div", {
        role: "presentation",
        className: (0, $hl8gx$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Submenu-wrapper', {
            'spectrum-Submenu-wrapper--isMobile': isMobile
        }),
        onKeyDown: wrapperKeyDown
    }, isMobile && isSubmenu && !hasOpenSubmenu && /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement("div", {
        className: (0, $hl8gx$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Submenu-headingWrapper')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement((0, $hl8gx$reactspectrumbutton.ActionButton), {
        "aria-label": backButtonLabel,
        isQuiet: true,
        onPress: handleBackButtonPress
    }, direction === 'rtl' ? /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement((0, ($parcel$interopDefault($hl8gx$spectrumiconsuiArrowDownSmall))), {
        UNSAFE_style: {
            rotate: '270deg'
        }
    }) : /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement((0, ($parcel$interopDefault($hl8gx$spectrumiconsuiArrowDownSmall))), {
        UNSAFE_style: {
            rotate: '90deg'
        }
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($hl8gx$react))).createElement("h1", {
        id: headingId,
        className: (0, $hl8gx$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Submenu-heading')
    }, backButtonText)), children)));
}


//# sourceMappingURL=Menu.main.js.map
