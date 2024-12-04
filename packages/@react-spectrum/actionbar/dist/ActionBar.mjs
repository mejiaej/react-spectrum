import $c4Nes$intlStringsmodulejs from "./intlStrings.mjs";
import "./actionbar.bdfe7eee.css";
import $c4Nes$actionbar_cssmodulejs from "./actionbar_css.mjs";
import {ActionButton as $c4Nes$ActionButton} from "@react-spectrum/button";
import {ActionGroup as $c4Nes$ActionGroup} from "@react-spectrum/actiongroup";
import {announce as $c4Nes$announce} from "@react-aria/live-announcer";
import {useDOMRef as $c4Nes$useDOMRef, useStyleProps as $c4Nes$useStyleProps, classNames as $c4Nes$classNames} from "@react-spectrum/utils";
import $c4Nes$spectrumiconsuiCrossLarge from "@spectrum-icons/ui/CrossLarge";
import {filterDOMProps as $c4Nes$filterDOMProps} from "@react-aria/utils";
import {FocusScope as $c4Nes$FocusScope} from "@react-aria/focus";
import {OpenTransition as $c4Nes$OpenTransition} from "@react-spectrum/overlays";
import $c4Nes$react, {useState as $c4Nes$useState, useRef as $c4Nes$useRef, useEffect as $c4Nes$useEffect} from "react";
import {Text as $c4Nes$Text} from "@react-spectrum/text";
import {useKeyboard as $c4Nes$useKeyboard} from "@react-aria/interactions";
import {useLocalizedStringFormatter as $c4Nes$useLocalizedStringFormatter} from "@react-aria/i18n";
import {useProviderProps as $c4Nes$useProviderProps} from "@react-spectrum/provider";


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














const $a4e665fbd087d71e$export$e213cebad6250b4a = /*#__PURE__*/ (0, $c4Nes$react).forwardRef(function ActionBar(props, ref) {
    let isOpen = props.selectedItemCount !== 0;
    let domRef = (0, $c4Nes$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $c4Nes$react).createElement((0, $c4Nes$OpenTransition), {
        nodeRef: domRef,
        in: isOpen,
        mountOnEnter: true,
        unmountOnExit: true
    }, /*#__PURE__*/ (0, $c4Nes$react).createElement($a4e665fbd087d71e$var$ActionBarInnerWithRef, {
        ...props,
        ref: domRef
    }));
});
function $a4e665fbd087d71e$var$ActionBarInner(props, ref) {
    props = (0, $c4Nes$useProviderProps)(props);
    let { children: children, isEmphasized: isEmphasized, onAction: onAction, onClearSelection: onClearSelection, selectedItemCount: selectedItemCount, isOpen: isOpen, buttonLabelBehavior: buttonLabelBehavior = 'collapse', items: items, disabledKeys: disabledKeys } = props;
    let { styleProps: styleProps } = (0, $c4Nes$useStyleProps)(props);
    let stringFormatter = (0, $c4Nes$useLocalizedStringFormatter)((0, ($parcel$interopDefault($c4Nes$intlStringsmodulejs))), '@react-spectrum/actionbar');
    // Store the last count greater than zero in a ref so that we can retain it while rendering the fade-out animation.
    let [lastCount, setLastCount] = (0, $c4Nes$useState)(selectedItemCount);
    if ((selectedItemCount === 'all' || selectedItemCount > 0) && selectedItemCount !== lastCount) setLastCount(selectedItemCount);
    let { keyboardProps: keyboardProps } = (0, $c4Nes$useKeyboard)({
        onKeyDown (e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClearSelection();
            }
        }
    });
    // Announce "actions available" on mount.
    let isInitial = (0, $c4Nes$useRef)(true);
    (0, $c4Nes$useEffect)(()=>{
        if (isInitial.current) {
            isInitial.current = false;
            (0, $c4Nes$announce)(stringFormatter.format('actionsAvailable'));
        }
    }, [
        stringFormatter
    ]);
    return /*#__PURE__*/ (0, $c4Nes$react).createElement((0, $c4Nes$FocusScope), {
        restoreFocus: true
    }, /*#__PURE__*/ (0, $c4Nes$react).createElement("div", {
        ...(0, $c4Nes$filterDOMProps)(props),
        ...styleProps,
        ...keyboardProps,
        ref: ref,
        className: (0, $c4Nes$classNames)((0, ($parcel$interopDefault($c4Nes$actionbar_cssmodulejs))), 'react-spectrum-ActionBar', {
            'react-spectrum-ActionBar--emphasized': isEmphasized,
            'is-open': isOpen
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $c4Nes$react).createElement("div", {
        className: (0, $c4Nes$classNames)((0, ($parcel$interopDefault($c4Nes$actionbar_cssmodulejs))), 'react-spectrum-ActionBar-bar')
    }, /*#__PURE__*/ (0, $c4Nes$react).createElement((0, $c4Nes$ActionGroup), {
        items: items,
        "aria-label": stringFormatter.format('actions'),
        isQuiet: true,
        staticColor: isEmphasized ? 'white' : undefined,
        overflowMode: "collapse",
        buttonLabelBehavior: buttonLabelBehavior,
        onAction: onAction,
        disabledKeys: disabledKeys,
        UNSAFE_className: (0, $c4Nes$classNames)((0, ($parcel$interopDefault($c4Nes$actionbar_cssmodulejs))), 'react-spectrum-ActionBar-actionGroup')
    }, children), /*#__PURE__*/ (0, $c4Nes$react).createElement((0, $c4Nes$ActionButton), {
        gridArea: (0, ($parcel$interopDefault($c4Nes$actionbar_cssmodulejs))).clear,
        "aria-label": stringFormatter.format('clearSelection'),
        onPress: ()=>onClearSelection(),
        isQuiet: true,
        staticColor: isEmphasized ? 'white' : undefined
    }, /*#__PURE__*/ (0, $c4Nes$react).createElement((0, $c4Nes$spectrumiconsuiCrossLarge), null)), /*#__PURE__*/ (0, $c4Nes$react).createElement((0, $c4Nes$Text), {
        UNSAFE_className: (0, $c4Nes$classNames)((0, ($parcel$interopDefault($c4Nes$actionbar_cssmodulejs))), 'react-spectrum-ActionBar-selectedCount')
    }, lastCount === 'all' ? stringFormatter.format('selectedAll') : stringFormatter.format('selected', {
        count: lastCount
    })))));
}
const $a4e665fbd087d71e$var$ActionBarInnerWithRef = /*#__PURE__*/ (0, $c4Nes$react).forwardRef($a4e665fbd087d71e$var$ActionBarInner);


export {$a4e665fbd087d71e$export$e213cebad6250b4a as ActionBar};
//# sourceMappingURL=ActionBar.module.js.map
