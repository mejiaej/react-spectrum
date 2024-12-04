var $cac834c4bc0a51d3$exports = require("./context.main.js");
require("./vars.ca367765.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $esjnM$reactspectrumutils = require("@react-spectrum/utils");
var $esjnM$reactariautils = require("@react-aria/utils");
var $esjnM$reactspectrumoverlays = require("@react-spectrum/overlays");
var $esjnM$react = require("react");
var $esjnM$reactdom = require("react-dom");
var $esjnM$reactariai18n = require("@react-aria/i18n");
var $esjnM$reactariamenu = require("@react-aria/menu");
var $esjnM$reactstatelymenu = require("@react-stately/menu");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SubmenuTrigger", () => $86ed235c4695ff3f$export$ecabc99eeffab7ca);
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









function $86ed235c4695ff3f$var$SubmenuTrigger(props) {
    let triggerRef = (0, $esjnM$react.useRef)(null);
    let { children: children, targetKey: targetKey } = props;
    let [menuTrigger, menu] = (0, ($parcel$interopDefault($esjnM$react))).Children.toArray(children);
    let { popoverContainer: popoverContainer, trayContainerRef: trayContainerRef, menu: parentMenuRef, submenu: menuRef, rootMenuTriggerState: rootMenuTriggerState } = (0, $cac834c4bc0a51d3$exports.useMenuStateContext)();
    let submenuTriggerState = (0, $esjnM$reactstatelymenu.useSubmenuTriggerState)({
        triggerKey: targetKey
    }, rootMenuTriggerState);
    let { submenuTriggerProps: submenuTriggerProps, submenuProps: submenuProps, popoverProps: popoverProps } = (0, $esjnM$reactariamenu.useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: menuRef
    }, submenuTriggerState, triggerRef);
    let isMobile = (0, $esjnM$reactspectrumutils.useIsMobileDevice)();
    let onBackButtonPress = ()=>{
        submenuTriggerState.close();
        if (parentMenuRef.current && !parentMenuRef.current.contains(document.activeElement)) parentMenuRef.current.focus();
    };
    let { direction: direction } = (0, $esjnM$reactariai18n.useLocale)();
    let mobileSubmenuKeyDown = (e)=>{
        switch(e.key){
            case 'ArrowLeft':
                var _triggerRef_current;
                if (direction === 'ltr') (_triggerRef_current = triggerRef.current) === null || _triggerRef_current === void 0 ? void 0 : _triggerRef_current.focus();
                break;
            case 'ArrowRight':
                var _triggerRef_current1;
                if (direction === 'rtl') (_triggerRef_current1 = triggerRef.current) === null || _triggerRef_current1 === void 0 ? void 0 : _triggerRef_current1.focus();
                break;
        }
    };
    let overlay;
    if (isMobile) {
        var _submenuProps;
        delete submenuTriggerProps.onBlur;
        delete submenuTriggerProps.onHoverChange;
        var _autoFocus;
        (_autoFocus = (_submenuProps = submenuProps).autoFocus) !== null && _autoFocus !== void 0 ? _autoFocus : _submenuProps.autoFocus = true;
        if (trayContainerRef.current && submenuTriggerState.isOpen) overlay = /*#__PURE__*/ (0, ($parcel$interopDefault($esjnM$reactdom))).createPortal(menu, trayContainerRef.current);
    } else {
        let onDismissButtonPress = ()=>{
            var _parentMenuRef_current;
            submenuTriggerState.close();
            (_parentMenuRef_current = parentMenuRef.current) === null || _parentMenuRef_current === void 0 ? void 0 : _parentMenuRef_current.focus();
        };
        overlay = /*#__PURE__*/ (0, ($parcel$interopDefault($esjnM$react))).createElement((0, $esjnM$reactspectrumoverlays.Popover), {
            ...popoverProps,
            onDismissButtonPress: onDismissButtonPress,
            UNSAFE_className: (0, $esjnM$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Submenu-popover'),
            container: popoverContainer,
            containerPadding: 0,
            enableBothDismissButtons: true,
            UNSAFE_style: {
                clipPath: 'unset',
                overflow: 'visible',
                borderWidth: '0px'
            },
            state: submenuTriggerState,
            triggerRef: triggerRef,
            scrollRef: menuRef,
            placement: "end top",
            hideArrow: true
        }, menu);
    }
    let menuContext = {
        ...(0, $esjnM$reactariautils.mergeProps)(submenuProps, {
            ref: menuRef,
            UNSAFE_style: isMobile ? {
                width: '100%',
                maxHeight: 'inherit'
            } : undefined,
            UNSAFE_className: (0, $esjnM$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), {
                'spectrum-Menu-popover': !isMobile
            }),
            ...isMobile && {
                onBackButtonPress: onBackButtonPress,
                onKeyDown: mobileSubmenuKeyDown
            }
        })
    };
    return /*#__PURE__*/ (0, ($parcel$interopDefault($esjnM$react))).createElement((0, ($parcel$interopDefault($esjnM$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($esjnM$react))).createElement((0, $cac834c4bc0a51d3$exports.SubmenuTriggerContext).Provider, {
        value: {
            triggerRef: triggerRef,
            ...submenuTriggerProps
        }
    }, menuTrigger), /*#__PURE__*/ (0, ($parcel$interopDefault($esjnM$react))).createElement((0, $cac834c4bc0a51d3$exports.MenuContext).Provider, {
        value: menuContext
    }, overlay));
}
$86ed235c4695ff3f$var$SubmenuTrigger.getCollectionNode = function*(props) {
    let childArray = [];
    (0, ($parcel$interopDefault($esjnM$react))).Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ (0, ($parcel$interopDefault($esjnM$react))).isValidElement(child)) childArray.push(child);
    });
    let [trigger] = childArray;
    let [, content] = props.children;
    yield {
        element: /*#__PURE__*/ (0, ($parcel$interopDefault($esjnM$react))).cloneElement(trigger, {
            ...trigger.props,
            hasChildItems: true,
            isTrigger: true
        }),
        wrapper: (element)=>/*#__PURE__*/ (0, ($parcel$interopDefault($esjnM$react))).createElement($86ed235c4695ff3f$var$SubmenuTrigger, {
                key: element.key,
                targetKey: element.key,
                ...props
            }, element, content)
    };
};
let $86ed235c4695ff3f$export$ecabc99eeffab7ca = $86ed235c4695ff3f$var$SubmenuTrigger;


//# sourceMappingURL=SubmenuTrigger.main.js.map
