import {BreadcrumbItem as $2bfa2c84c665c457$export$c13f210c706eb549} from "./BreadcrumbItem.mjs";
import "./vars.af72e126.css";
import $52CM4$breadcrumb_vars_cssmodulejs from "./breadcrumb_vars_css.mjs";
import {ActionButton as $52CM4$ActionButton} from "@react-spectrum/button";
import {useDOMRef as $52CM4$useDOMRef, useStyleProps as $52CM4$useStyleProps, classNames as $52CM4$classNames} from "@react-spectrum/utils";
import $52CM4$spectrumiconsuiFolderBreadcrumb from "@spectrum-icons/ui/FolderBreadcrumb";
import {MenuTrigger as $52CM4$MenuTrigger, Menu as $52CM4$Menu} from "@react-spectrum/menu";
import $52CM4$react, {useRef as $52CM4$useRef, useCallback as $52CM4$useCallback} from "react";
import {useBreadcrumbs as $52CM4$useBreadcrumbs} from "@react-aria/breadcrumbs";
import {useValueEffect as $52CM4$useValueEffect, useResizeObserver as $52CM4$useResizeObserver, useLayoutEffect as $52CM4$useLayoutEffect} from "@react-aria/utils";
import {useProviderProps as $52CM4$useProviderProps} from "@react-spectrum/provider";


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









const $2adaf67aabd3300b$var$MIN_VISIBLE_ITEMS = 1;
const $2adaf67aabd3300b$var$MAX_VISIBLE_ITEMS = 4;
const $2adaf67aabd3300b$export$2dc68d50d56fbbd = /*#__PURE__*/ (0, $52CM4$react).forwardRef(function Breadcrumbs(props, ref) {
    props = (0, $52CM4$useProviderProps)(props);
    let { size: size = 'L', isMultiline: isMultiline, children: children, showRoot: showRoot, isDisabled: isDisabled, onAction: onAction, autoFocusCurrent: autoFocusCurrent, ...otherProps } = props;
    // Not using React.Children.toArray because it mutates the key prop.
    let childArray = [];
    (0, $52CM4$react).Children.forEach(children, (child, index)=>{
        if (/*#__PURE__*/ (0, $52CM4$react).isValidElement(child)) {
            if (child.key == null) child = /*#__PURE__*/ (0, $52CM4$react).cloneElement(child, {
                key: index
            });
            childArray.push(child);
        }
    });
    let domRef = (0, $52CM4$useDOMRef)(ref);
    let listRef = (0, $52CM4$useRef)(null);
    let [visibleItems, setVisibleItems] = (0, $52CM4$useValueEffect)(childArray.length);
    let { navProps: navProps } = (0, $52CM4$useBreadcrumbs)(props);
    let { styleProps: styleProps } = (0, $52CM4$useStyleProps)(otherProps);
    let updateOverflow = (0, $52CM4$useCallback)(()=>{
        let computeVisibleItems = (visibleItems)=>{
            // Refs can be null at runtime.
            let currListRef = listRef.current;
            if (!currListRef) return visibleItems;
            let listItems = Array.from(currListRef.children);
            if (listItems.length <= 0) return visibleItems;
            let containerWidth = currListRef.offsetWidth;
            let isShowingMenu = childArray.length > visibleItems;
            let calculatedWidth = 0;
            let newVisibleItems = 0;
            let maxVisibleItems = $2adaf67aabd3300b$var$MAX_VISIBLE_ITEMS;
            if (showRoot) {
                calculatedWidth += listItems.shift().offsetWidth;
                newVisibleItems++;
            }
            if (isShowingMenu) {
                calculatedWidth += listItems.shift().offsetWidth;
                maxVisibleItems--;
            }
            if (showRoot && calculatedWidth >= containerWidth) newVisibleItems--;
            // TODO: what if multiline and only one breadcrumb??
            if (isMultiline) {
                listItems.pop();
                newVisibleItems++;
            } else if (listItems.length > 0) {
                // Ensure the last breadcrumb isn't truncated when we measure it.
                let last = listItems.pop();
                last.style.overflow = 'visible';
                calculatedWidth += last.offsetWidth;
                if (calculatedWidth < containerWidth) newVisibleItems++;
                last.style.overflow = '';
            }
            for (let breadcrumb of listItems.reverse()){
                calculatedWidth += breadcrumb.offsetWidth;
                if (calculatedWidth < containerWidth) newVisibleItems++;
            }
            return Math.max($2adaf67aabd3300b$var$MIN_VISIBLE_ITEMS, Math.min(maxVisibleItems, newVisibleItems));
        };
        setVisibleItems(function*() {
            // Update to show all items.
            yield childArray.length;
            // Measure, and update to show the items that fit.
            let newVisibleItems = computeVisibleItems(childArray.length);
            yield newVisibleItems;
            // If the number of items is less than the number of children,
            // then update again to ensure that the menu fits.
            if (newVisibleItems < childArray.length && newVisibleItems > 1) yield computeVisibleItems(newVisibleItems);
        });
    }, [
        childArray.length,
        setVisibleItems,
        showRoot,
        isMultiline
    ]);
    (0, $52CM4$useResizeObserver)({
        ref: domRef,
        onResize: updateOverflow
    });
    let lastChildren = (0, $52CM4$useRef)(null);
    (0, $52CM4$useLayoutEffect)(()=>{
        if (children !== lastChildren.current) {
            lastChildren.current = children;
            updateOverflow();
        }
    });
    let contents = childArray;
    if (childArray.length > visibleItems) {
        let selectedItem = childArray[childArray.length - 1];
        var _selectedItem_key;
        let selectedKey = (_selectedItem_key = selectedItem.key) !== null && _selectedItem_key !== void 0 ? _selectedItem_key : childArray.length - 1;
        let onMenuAction = (key)=>{
            // Don't fire onAction when clicking on the last item
            if (key !== selectedKey && onAction) onAction(key);
        };
        let menuItem = /*#__PURE__*/ (0, $52CM4$react).createElement((0, $2bfa2c84c665c457$export$c13f210c706eb549), {
            key: "menu",
            isMenu: true
        }, /*#__PURE__*/ (0, $52CM4$react).createElement((0, $52CM4$MenuTrigger), null, /*#__PURE__*/ (0, $52CM4$react).createElement((0, $52CM4$ActionButton), {
            UNSAFE_className: (0, $52CM4$classNames)((0, ($parcel$interopDefault($52CM4$breadcrumb_vars_cssmodulejs))), 'spectrum-Breadcrumbs-actionButton'),
            "aria-label": "\u2026",
            isQuiet: true,
            isDisabled: isDisabled
        }, /*#__PURE__*/ (0, $52CM4$react).createElement((0, $52CM4$spectrumiconsuiFolderBreadcrumb), null)), /*#__PURE__*/ (0, $52CM4$react).createElement((0, $52CM4$Menu), {
            selectionMode: "single",
            selectedKeys: [
                selectedKey
            ],
            onAction: onMenuAction
        }, childArray)));
        contents = [
            menuItem
        ];
        let breadcrumbs = [
            ...childArray
        ];
        let endItems = visibleItems;
        if (showRoot && visibleItems > 1) {
            let rootItem = breadcrumbs.shift();
            if (rootItem) contents.unshift(rootItem);
            endItems--;
        }
        contents.push(...breadcrumbs.slice(-endItems));
    }
    let lastIndex = contents.length - 1;
    let breadcrumbItems = contents.map((child, index)=>{
        let isCurrent = index === lastIndex;
        var _child_key;
        let key = (_child_key = child.key) !== null && _child_key !== void 0 ? _child_key : index;
        let onPress = ()=>{
            if (onAction) onAction(key);
        };
        return /*#__PURE__*/ (0, $52CM4$react).createElement("li", {
            key: index,
            className: (0, $52CM4$classNames)((0, ($parcel$interopDefault($52CM4$breadcrumb_vars_cssmodulejs))), 'spectrum-Breadcrumbs-item')
        }, /*#__PURE__*/ (0, $52CM4$react).createElement((0, $2bfa2c84c665c457$export$c13f210c706eb549), {
            ...child.props,
            key: key,
            isCurrent: isCurrent,
            isDisabled: isDisabled,
            onPress: onPress,
            autoFocus: isCurrent && autoFocusCurrent
        }, child.props.children));
    });
    return /*#__PURE__*/ (0, $52CM4$react).createElement("nav", {
        ...styleProps,
        ...navProps,
        ref: domRef
    }, /*#__PURE__*/ (0, $52CM4$react).createElement("ul", {
        ref: listRef,
        className: (0, $52CM4$classNames)((0, ($parcel$interopDefault($52CM4$breadcrumb_vars_cssmodulejs))), 'spectrum-Breadcrumbs', {
            'spectrum-Breadcrumbs--small': size === 'S',
            'spectrum-Breadcrumbs--medium': size === 'M',
            'spectrum-Breadcrumbs--multiline': isMultiline,
            'spectrum-Breadcrumbs--showRoot': showRoot,
            'is-disabled': isDisabled
        }, styleProps.className)
    }, breadcrumbItems));
});


export {$2adaf67aabd3300b$export$2dc68d50d56fbbd as Breadcrumbs};
//# sourceMappingURL=Breadcrumbs.module.js.map
