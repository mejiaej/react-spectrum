import "./vars.607ca801.css";
import $lajJX$button_vars_cssmodulejs from "./button_vars_css.module.js";
import "./vars.fc4aa55a.css";
import $lajJX$actiongroup_vars_cssmodulejs from "./actiongroup_vars_css.module.js";
import {ActionButton as $lajJX$ActionButton} from "@react-spectrum/button";
import $lajJX$spectrumiconsuiChevronDownMedium from "@spectrum-icons/ui/ChevronDownMedium";
import {useSlotProps as $lajJX$useSlotProps, useDOMRef as $lajJX$useDOMRef, useStyleProps as $lajJX$useStyleProps, classNames as $lajJX$classNames, ClearSlots as $lajJX$ClearSlots, SlotProvider as $lajJX$SlotProvider} from "@react-spectrum/utils";
import {useValueEffect as $lajJX$useValueEffect, useResizeObserver as $lajJX$useResizeObserver, useLayoutEffect as $lajJX$useLayoutEffect, filterDOMProps as $lajJX$filterDOMProps, mergeProps as $lajJX$mergeProps, useId as $lajJX$useId} from "@react-aria/utils";
import {FocusScope as $lajJX$FocusScope} from "@react-aria/focus";
import {MenuTrigger as $lajJX$MenuTrigger, Menu as $lajJX$Menu, Item as $lajJX$Item} from "@react-spectrum/menu";
import {useListState as $lajJX$useListState} from "@react-stately/list";
import $lajJX$spectrumiconsworkflowMore from "@spectrum-icons/workflow/More";
import {useHover as $lajJX$useHover, PressResponder as $lajJX$PressResponder} from "@react-aria/interactions";
import {useProviderProps as $lajJX$useProviderProps, Provider as $lajJX$Provider} from "@react-spectrum/provider";
import $lajJX$react, {forwardRef as $lajJX$forwardRef, useRef as $lajJX$useRef, useMemo as $lajJX$useMemo, useCallback as $lajJX$useCallback, useState as $lajJX$useState} from "react";
import {Text as $lajJX$Text} from "@react-spectrum/text";
import {TooltipTrigger as $lajJX$TooltipTrigger, Tooltip as $lajJX$Tooltip} from "@react-spectrum/tooltip";
import {useActionGroup as $lajJX$useActionGroup, useActionGroupItem as $lajJX$useActionGroupItem} from "@react-aria/actiongroup";


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















const $a04ee251ffcc2690$export$c21a5597f732a168 = /*#__PURE__*/ (0, $lajJX$forwardRef)(function ActionGroup(props, ref) {
    props = (0, $lajJX$useProviderProps)(props);
    props = (0, $lajJX$useSlotProps)(props, 'actionGroup');
    let { isEmphasized: isEmphasized, density: density, isJustified: isJustified, isDisabled: isDisabled, orientation: orientation = 'horizontal', isQuiet: isQuiet, staticColor: staticColor, overflowMode: overflowMode = 'wrap', onAction: onAction, buttonLabelBehavior: buttonLabelBehavior, summaryIcon: summaryIcon, ...otherProps } = props;
    let domRef = (0, $lajJX$useDOMRef)(ref);
    let wrapperRef = (0, $lajJX$useRef)(null);
    let state = (0, $lajJX$useListState)({
        ...props,
        suppressTextValueWarning: true
    });
    let { actionGroupProps: actionGroupProps } = (0, $lajJX$useActionGroup)(props, state, domRef);
    let isVertical = orientation === 'vertical';
    let providerProps = {
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isQuiet: isQuiet
    };
    let { styleProps: styleProps } = (0, $lajJX$useStyleProps)(props);
    // Only hide button text if every item contains more than just plain text (we assume an icon).
    let isIconCollapsible = (0, $lajJX$useMemo)(()=>[
            ...state.collection
        ].every((item)=>typeof item.rendered !== 'string'), [
        state.collection
    ]);
    let [{ visibleItems: visibleItems, hideButtonText: hideButtonText, isMeasuring: isMeasuring }, setVisibleItems] = (0, $lajJX$useValueEffect)({
        visibleItems: state.collection.size,
        hideButtonText: buttonLabelBehavior === 'hide' && isIconCollapsible,
        isMeasuring: false
    });
    let selectionMode = state.selectionManager.selectionMode;
    let updateOverflow = (0, $lajJX$useCallback)(()=>{
        if (overflowMode === 'wrap') return;
        if (orientation === 'vertical' && selectionMode !== 'none') // Collapsing vertical action groups with selection is currently unsupported by Spectrum.
        return;
        let computeVisibleItems = (visibleItems)=>{
            if (domRef.current && wrapperRef.current) {
                let listItems = Array.from(domRef.current.children);
                let containerSize = orientation === 'horizontal' ? wrapperRef.current.getBoundingClientRect().width : wrapperRef.current.getBoundingClientRect().height;
                let isShowingMenu = visibleItems < state.collection.size;
                let calculatedSize = 0;
                let newVisibleItems = 0;
                if (isShowingMenu) {
                    let item = listItems.pop();
                    if (item) calculatedSize += orientation === 'horizontal' ? $a04ee251ffcc2690$var$outerWidth(item, false, true) : $a04ee251ffcc2690$var$outerHeight(item, false, true);
                }
                for (let [i, item] of listItems.entries()){
                    calculatedSize += orientation === 'horizontal' ? $a04ee251ffcc2690$var$outerWidth(item, i === 0, i === listItems.length - 1) : $a04ee251ffcc2690$var$outerHeight(item, i === 0, i === listItems.length - 1);
                    if (Math.round(calculatedSize) <= Math.round(containerSize)) newVisibleItems++;
                    else break;
                }
                // If selection is enabled, and not all of the items fit, collapse all of them into a dropdown
                // immediately rather than having some visible and some not.
                if (selectionMode !== 'none' && newVisibleItems < state.collection.size) return 0;
                return newVisibleItems;
            }
            return visibleItems;
        };
        setVisibleItems(function*() {
            let hideButtonText = buttonLabelBehavior === 'hide' && isIconCollapsible;
            // Update to show all items.
            yield {
                visibleItems: state.collection.size,
                hideButtonText: hideButtonText,
                isMeasuring: true
            };
            // Measure, and update to show the items that fit.
            let newVisibleItems = computeVisibleItems(state.collection.size);
            let isMeasuring = newVisibleItems < state.collection.size && newVisibleItems > 0;
            // If not all of the buttons fit, and buttonLabelBehavior is 'collapse', then first try hiding
            // the button text and only showing icons. Only if that still doesn't fit collapse into a menu.
            if (newVisibleItems < state.collection.size && buttonLabelBehavior === 'collapse' && isIconCollapsible) {
                yield {
                    visibleItems: state.collection.size,
                    hideButtonText: true,
                    isMeasuring: true
                };
                newVisibleItems = computeVisibleItems(state.collection.size);
                isMeasuring = newVisibleItems < state.collection.size && newVisibleItems > 0;
                hideButtonText = true;
            }
            yield {
                visibleItems: newVisibleItems,
                hideButtonText: hideButtonText,
                isMeasuring: isMeasuring
            };
            // If the number of items is less than the number of children,
            // then update again to ensure that the menu fits.
            if (isMeasuring) yield {
                visibleItems: computeVisibleItems(newVisibleItems),
                hideButtonText: hideButtonText,
                isMeasuring: false
            };
        });
    }, [
        domRef,
        state.collection,
        setVisibleItems,
        overflowMode,
        selectionMode,
        buttonLabelBehavior,
        isIconCollapsible,
        orientation
    ]);
    // Watch the parent element for size changes. Watching only the action group itself may not work
    // in all scenarios because it may not shrink when available space is reduced.
    let parentRef = (0, $lajJX$useMemo)(()=>({
            get current () {
                var _wrapperRef_current;
                return (_wrapperRef_current = wrapperRef.current) === null || _wrapperRef_current === void 0 ? void 0 : _wrapperRef_current.parentElement;
            }
        }), [
        wrapperRef
    ]);
    (0, $lajJX$useResizeObserver)({
        ref: overflowMode !== 'wrap' ? parentRef : undefined,
        onResize: updateOverflow
    });
    (0, $lajJX$useLayoutEffect)(updateOverflow, [
        updateOverflow,
        state.collection
    ]);
    let children = [
        ...state.collection
    ];
    let menuItem = null;
    let menuProps = {};
    // If there are no visible items, don't apply any props to the action group container
    // and pass all aria labeling props through to the menu button.
    if (overflowMode === 'collapse' && visibleItems === 0) {
        menuProps = (0, $lajJX$filterDOMProps)(props, {
            labelable: true
        });
        actionGroupProps = {};
    }
    if (overflowMode === 'collapse' && visibleItems < state.collection.size) {
        let menuChildren = children.slice(visibleItems);
        children = children.slice(0, visibleItems);
        menuItem = /*#__PURE__*/ (0, $lajJX$react).createElement($a04ee251ffcc2690$var$ActionGroupMenu, {
            ...menuProps,
            items: menuChildren,
            onAction: onAction,
            isDisabled: isDisabled,
            isEmphasized: isEmphasized,
            staticColor: staticColor,
            state: state,
            summaryIcon: summaryIcon,
            hideButtonText: hideButtonText,
            isOnlyItem: visibleItems === 0,
            orientation: orientation
        });
    }
    let style = {
        ...styleProps.style,
        // While measuring, take up as much space as possible.
        flexBasis: isMeasuring ? '100%' : undefined
    };
    return /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$FocusScope), null, /*#__PURE__*/ (0, $lajJX$react).createElement("div", {
        ...styleProps,
        style: style,
        className: (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$actiongroup_vars_cssmodulejs))), 'flex-container', styleProps.className),
        ref: wrapperRef
    }, /*#__PURE__*/ (0, $lajJX$react).createElement("div", {
        ...actionGroupProps,
        ref: domRef,
        className: (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$actiongroup_vars_cssmodulejs))), 'flex-gap', 'spectrum-ActionGroup', {
            'spectrum-ActionGroup--quiet': isQuiet,
            'spectrum-ActionGroup--vertical': isVertical,
            'spectrum-ActionGroup--compact': density === 'compact',
            'spectrum-ActionGroup--justified': isJustified && !isMeasuring,
            'spectrum-ActionGroup--overflowCollapse': overflowMode === 'collapse'
        }, otherProps.UNSAFE_className)
    }, /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$Provider), providerProps, children.map((item)=>/*#__PURE__*/ (0, $lajJX$react).createElement($a04ee251ffcc2690$var$ActionGroupItem, {
            key: item.key,
            onAction: onAction,
            isDisabled: isDisabled,
            isEmphasized: isEmphasized,
            staticColor: staticColor,
            item: item,
            state: state,
            hideButtonText: hideButtonText,
            orientation: orientation
        })), menuItem))));
});
function $a04ee251ffcc2690$var$ActionGroupItem({ item: item, state: state, isDisabled: isDisabled, isEmphasized: isEmphasized, staticColor: staticColor, onAction: onAction, hideButtonText: hideButtonText, orientation: orientation }) {
    let ref = (0, $lajJX$useRef)(null);
    let { buttonProps: buttonProps } = (0, $lajJX$useActionGroupItem)({
        key: item.key
    }, state);
    isDisabled = isDisabled || state.disabledKeys.has(item.key);
    let isSelected = state.selectionManager.isSelected(item.key);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $lajJX$useHover)({
        isDisabled: isDisabled
    });
    let domProps = (0, $lajJX$filterDOMProps)(item.props);
    if (onAction && !isDisabled) buttonProps = (0, $lajJX$mergeProps)(buttonProps, {
        onPress: ()=>onAction(item.key)
    });
    // If button text is hidden, we need to show it as a tooltip instead, so
    // go find the text element in the DOM after rendering.
    let textId = (0, $lajJX$useId)();
    let [textContent, setTextContent] = (0, $lajJX$useState)('');
    (0, $lajJX$useLayoutEffect)(()=>{
        var _document_getElementById;
        if (hideButtonText) setTextContent((_document_getElementById = document.getElementById(textId)) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.textContent);
    }, [
        hideButtonText,
        item.rendered,
        textId
    ]);
    let button = // Use a PressResponder to send DOM props through.
    // ActionButton doesn't allow overriding the role by default.
    /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$PressResponder), (0, $lajJX$mergeProps)(buttonProps, hoverProps, domProps), /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$ClearSlots), null, /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$SlotProvider), {
        slots: {
            text: {
                id: hideButtonText ? textId : null,
                isHidden: hideButtonText
            }
        }
    }, /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$ActionButton), {
        ref: ref,
        // @ts-ignore (private)
        hideButtonText: hideButtonText,
        UNSAFE_className: (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$actiongroup_vars_cssmodulejs))), 'spectrum-ActionGroup-item', {
            'is-selected': isSelected,
            'is-hovered': isHovered,
            'spectrum-ActionGroup-item--iconOnly': hideButtonText,
            'spectrum-ActionGroup-item--isDisabled': isDisabled
        }, (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$button_vars_cssmodulejs))), {
            'spectrum-ActionButton--emphasized': isEmphasized,
            'is-selected': isSelected
        })),
        isDisabled: isDisabled,
        staticColor: staticColor,
        "aria-label": item['aria-label'],
        "aria-labelledby": item['aria-label'] == null && hideButtonText ? textId : undefined
    }, item.rendered))));
    if (hideButtonText && textContent) button = /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$TooltipTrigger), {
        placement: orientation === 'vertical' ? 'end' : 'top'
    }, button, /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$Tooltip), null, textContent));
    if (item.wrapper) button = item.wrapper(button);
    return button;
}
function $a04ee251ffcc2690$var$ActionGroupMenu({ state: state, isDisabled: isDisabled, isEmphasized: isEmphasized, staticColor: staticColor, items: items, onAction: onAction, summaryIcon: summaryIcon, hideButtonText: hideButtonText, isOnlyItem: isOnlyItem, orientation: orientation, ...otherProps }) {
    // Use the key of the first item within the menu as the key of the button.
    // The key must actually exist in the collection for focus to work correctly.
    let key = items[0].key;
    let { buttonProps: buttonProps } = (0, $lajJX$useActionGroupItem)({
        key: key
    }, state);
    // The menu button shouldn't act like an actual action group item.
    delete buttonProps.onPress;
    delete buttonProps.role;
    delete buttonProps['aria-checked'];
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $lajJX$useHover)({
        isDisabled: isDisabled
    });
    // If no aria-label or aria-labelledby is given, provide a default one.
    let ariaLabel = otherProps['aria-label'] || (otherProps['aria-labelledby'] ? undefined : "\u2026");
    let ariaLabelledby = otherProps['aria-labelledby'];
    let textId = (0, $lajJX$useId)();
    let id = (0, $lajJX$useId)();
    // Summary icon only applies when selection is enabled.
    if (state.selectionManager.selectionMode === 'none') summaryIcon = null;
    let iconOnly = false;
    // If there is a selection, show the selected state on the menu button.
    let isSelected = state.selectionManager.selectionMode !== 'none' && !state.selectionManager.isEmpty;
    // If single selection and empty selection is not allowed, swap the contents of the button to the selected item (like a Picker).
    if (!summaryIcon && state.selectionManager.selectionMode === 'single' && state.selectionManager.disallowEmptySelection && state.selectionManager.firstSelectedKey != null) {
        let selectedItem = state.collection.getItem(state.selectionManager.firstSelectedKey);
        if (selectedItem) {
            summaryIcon = selectedItem.rendered;
            if (typeof summaryIcon === 'string') summaryIcon = /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$Text), null, summaryIcon);
            iconOnly = !!hideButtonText;
            ariaLabelledby = `${ariaLabelledby !== null && ariaLabelledby !== void 0 ? ariaLabelledby : id} ${textId}`;
        }
    }
    if (summaryIcon) // If there's a custom summary icon, also add a chevron.
    summaryIcon = /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$react).Fragment, null, /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$spectrumiconsuiChevronDownMedium), {
        UNSAFE_className: (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$actiongroup_vars_cssmodulejs))), 'spectrum-ActionGroup-menu-chevron')
    }), /*#__PURE__*/ (0, $lajJX$react).createElement("span", {
        className: (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$actiongroup_vars_cssmodulejs))), 'spectrum-ActionGroup-menu-contents', {
            'spectrum-ActionGroup-item--iconOnly': iconOnly
        })
    }, summaryIcon));
    return(// Use a PressResponder to send DOM props through.
    /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$MenuTrigger), {
        align: isOnlyItem ? 'start' : 'end',
        direction: orientation === 'vertical' ? 'end' : 'bottom'
    }, /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$SlotProvider), {
        slots: {
            text: {
                id: hideButtonText ? textId : null,
                isHidden: hideButtonText,
                UNSAFE_className: (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$actiongroup_vars_cssmodulejs))), 'spectrum-ActionGroup-menu-text')
            }
        }
    }, /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$PressResponder), (0, $lajJX$mergeProps)(buttonProps, hoverProps), /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$ActionButton), {
        ...otherProps,
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        UNSAFE_className: (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$actiongroup_vars_cssmodulejs))), 'spectrum-ActionGroup-item', 'spectrum-ActionGroup-menu', {
            'is-hovered': isHovered,
            'is-selected': isSelected
        }, (0, $lajJX$classNames)((0, ($parcel$interopDefault($lajJX$button_vars_cssmodulejs))), {
            'is-selected': isSelected,
            'spectrum-ActionButton--emphasized': isEmphasized
        })),
        isDisabled: isDisabled,
        staticColor: staticColor
    }, summaryIcon || /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$spectrumiconsworkflowMore), null)))), /*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$Menu), {
        items: items,
        disabledKeys: state.disabledKeys,
        selectionMode: state.selectionManager.selectionMode,
        selectedKeys: state.selectionManager.selectedKeys,
        disallowEmptySelection: state.selectionManager.disallowEmptySelection,
        onSelectionChange: (keys)=>state.selectionManager.setSelectedKeys(keys),
        onAction: onAction
    }, (node)=>/*#__PURE__*/ (0, $lajJX$react).createElement((0, $lajJX$Item), {
            textValue: node.textValue,
            ...(0, $lajJX$filterDOMProps)(node.props)
        }, node.rendered))));
}
function $a04ee251ffcc2690$var$outerWidth(element, ignoreLeftMargin, ignoreRightMargin) {
    let style = window.getComputedStyle(element);
    return element.getBoundingClientRect().width + (ignoreLeftMargin ? 0 : $a04ee251ffcc2690$var$toNumber(style.marginLeft)) + (ignoreRightMargin ? 0 : $a04ee251ffcc2690$var$toNumber(style.marginRight));
}
function $a04ee251ffcc2690$var$outerHeight(element, ignoreTopMargin, ignoreBottomMargin) {
    let style = window.getComputedStyle(element);
    return element.getBoundingClientRect().height + (ignoreTopMargin ? 0 : $a04ee251ffcc2690$var$toNumber(style.marginTop)) + (ignoreBottomMargin ? 0 : $a04ee251ffcc2690$var$toNumber(style.marginBottom));
}
function $a04ee251ffcc2690$var$toNumber(value) {
    let parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
}


export {$a04ee251ffcc2690$export$c21a5597f732a168 as ActionGroup};
//# sourceMappingURL=ActionGroup.module.js.map
