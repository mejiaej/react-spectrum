require("./vars.1b9cd276.css");
var $a10e565ec42bcf96$exports = require("./contextualhelp_vars_css.main.js");
require("./vars.ca367765.css");
var $3deee0fd2b46e64f$exports = require("./menu_vars_css.main.js");
var $cac834c4bc0a51d3$exports = require("./context.main.js");
var $63a7dff9cbe2d046$exports = require("./Menu.main.js");
var $hdb2e$reactspectrumutils = require("@react-spectrum/utils");
var $hdb2e$reactariafocus = require("@react-aria/focus");
var $hdb2e$reactariainteractions = require("@react-aria/interactions");
var $hdb2e$reactspectrumoverlays = require("@react-spectrum/overlays");
var $hdb2e$react = require("react");
var $hdb2e$reactdom = require("react-dom");
var $hdb2e$reactariamenu = require("@react-aria/menu");
var $hdb2e$reactstatelymenu = require("@react-stately/menu");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ContextualHelpTrigger", () => $db380858d398b658$export$5413b169fff83e61);
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











function $db380858d398b658$var$ContextualHelpTrigger(props) {
    let { isUnavailable: isUnavailable = false, targetKey: targetKey } = props;
    let triggerRef = (0, $hdb2e$react.useRef)(null);
    let popoverRef = (0, $hdb2e$react.useRef)(null);
    let { popoverContainer: popoverContainer, trayContainerRef: trayContainerRef, rootMenuTriggerState: rootMenuTriggerState, menu: parentMenuRef, state: state } = (0, $cac834c4bc0a51d3$exports.useMenuStateContext)();
    let submenuTriggerState = (0, $hdb2e$reactstatelymenu.useSubmenuTriggerState)({
        triggerKey: targetKey
    }, {
        ...rootMenuTriggerState,
        ...state
    });
    let submenuRef = (0, $hdb2e$reactspectrumutils.unwrapDOMRef)(popoverRef);
    let { submenuTriggerProps: submenuTriggerProps, popoverProps: popoverProps } = (0, $hdb2e$reactariamenu.useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: submenuRef,
        type: 'dialog',
        isDisabled: !isUnavailable
    }, submenuTriggerState, triggerRef);
    let isMobile = (0, $hdb2e$reactspectrumutils.useIsMobileDevice)();
    let [traySubmenuAnimation, setTraySubmenuAnimation] = (0, $hdb2e$react.useState)('');
    (0, $hdb2e$react.useEffect)(()=>{
        if (submenuTriggerState.isOpen) setTraySubmenuAnimation('spectrum-TraySubmenu-enter');
    }, [
        submenuTriggerState.isOpen
    ]);
    let slots = {};
    if (isUnavailable) slots = {
        dialog: {
            UNSAFE_className: (0, $hdb2e$reactspectrumutils.classNames)((0, ($parcel$interopDefault($a10e565ec42bcf96$exports))), 'react-spectrum-ContextualHelp-dialog', {
                'react-spectrum-ContextualHelp-dialog--isMobile': isMobile
            }, (0, $hdb2e$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), {
                'spectrum-Menu-subdialog': !isMobile,
                [traySubmenuAnimation]: isMobile
            }))
        },
        content: {
            UNSAFE_className: (0, ($parcel$interopDefault($a10e565ec42bcf96$exports)))['react-spectrum-ContextualHelp-content']
        },
        footer: {
            UNSAFE_className: (0, ($parcel$interopDefault($a10e565ec42bcf96$exports)))['react-spectrum-ContextualHelp-footer']
        }
    };
    let [trigger] = (0, ($parcel$interopDefault($hdb2e$react))).Children.toArray(props.children);
    let [, content] = props.children;
    let onBlurWithin = (e)=>{
        var _popoverRef_current_UNSAFE_getDOMNode;
        if (e.relatedTarget && popoverRef.current && !((_popoverRef_current_UNSAFE_getDOMNode = popoverRef.current.UNSAFE_getDOMNode()) === null || _popoverRef_current_UNSAFE_getDOMNode === void 0 ? void 0 : _popoverRef_current_UNSAFE_getDOMNode.contains(e.relatedTarget)) && !(e.relatedTarget === triggerRef.current && (0, $hdb2e$reactariainteractions.getInteractionModality)() === 'pointer')) {
            if (submenuTriggerState.isOpen) submenuTriggerState.close();
        }
    };
    let overlay;
    let tray;
    let onBackButtonPress = ()=>{
        setTraySubmenuAnimation('spectrum-TraySubmenu-exit');
        setTimeout(()=>{
            submenuTriggerState.close();
            if (parentMenuRef.current && !parentMenuRef.current.contains(document.activeElement)) parentMenuRef.current.focus();
        }, 220); // Matches transition duration
    };
    if (isMobile) {
        delete submenuTriggerProps.onBlur;
        delete submenuTriggerProps.onHoverChange;
        if (trayContainerRef.current && submenuTriggerState.isOpen) {
            let subDialogKeyDown = (e)=>{
                switch(e.key){
                    case 'Escape':
                        e.stopPropagation();
                        onBackButtonPress();
                        break;
                }
            };
            tray = /*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).createElement((0, $63a7dff9cbe2d046$exports.TrayHeaderWrapper), {
                isSubmenu: true,
                parentMenuTreeState: state,
                rootMenuTriggerState: rootMenuTriggerState,
                wrapperKeyDown: subDialogKeyDown,
                onBackButtonPress: onBackButtonPress
            }, content);
            overlay = /*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$reactdom))).createPortal(tray, trayContainerRef.current);
        }
    } else {
        let onDismissButtonPress = ()=>{
            var _parentMenuRef_current;
            submenuTriggerState.close();
            (_parentMenuRef_current = parentMenuRef.current) === null || _parentMenuRef_current === void 0 ? void 0 : _parentMenuRef_current.focus();
        };
        overlay = /*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).createElement((0, $hdb2e$reactspectrumoverlays.Popover), {
            ...popoverProps,
            UNSAFE_style: {
                clipPath: 'unset',
                overflow: 'visible',
                filter: 'unset',
                borderWidth: '0px'
            },
            UNSAFE_className: (0, $hdb2e$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3deee0fd2b46e64f$exports))), 'spectrum-Submenu-popover'),
            onDismissButtonPress: onDismissButtonPress,
            onBlurWithin: onBlurWithin,
            container: popoverContainer,
            state: submenuTriggerState,
            ref: popoverRef,
            triggerRef: triggerRef,
            placement: "end top",
            containerPadding: 0,
            hideArrow: true,
            enableBothDismissButtons: true
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).createElement((0, $hdb2e$reactariafocus.FocusScope), {
            restoreFocus: true,
            contain: true
        }, content));
    }
    return /*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).createElement((0, ($parcel$interopDefault($hdb2e$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).createElement((0, $cac834c4bc0a51d3$exports.SubmenuTriggerContext).Provider, {
        value: {
            isUnavailable: isUnavailable,
            triggerRef: triggerRef,
            ...submenuTriggerProps
        }
    }, trigger), /*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).createElement((0, $hdb2e$reactspectrumutils.SlotProvider), {
        slots: slots
    }, submenuTriggerState.isOpen && overlay));
}
$db380858d398b658$var$ContextualHelpTrigger.getCollectionNode = function* getCollectionNode(props) {
    let childArray = [];
    (0, ($parcel$interopDefault($hdb2e$react))).Children.forEach(props.children, (child)=>{
        if (/*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).isValidElement(child)) childArray.push(child);
    });
    let [trigger] = childArray;
    let [, content] = props.children;
    yield {
        element: /*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).cloneElement(trigger, {
            ...trigger.props,
            hasChildItems: true,
            isTrigger: true
        }),
        wrapper: (element)=>/*#__PURE__*/ (0, ($parcel$interopDefault($hdb2e$react))).createElement($db380858d398b658$var$ContextualHelpTrigger, {
                key: element.key,
                targetKey: element.key,
                ...props
            }, element, content)
    };
};
let $db380858d398b658$export$5413b169fff83e61 = $db380858d398b658$var$ContextualHelpTrigger;


//# sourceMappingURL=ContextualHelpTrigger.main.js.map
