var $d90ab02c74e9be0c$exports = require("./BreadcrumbItem.main.js");
require("./vars.af72e126.css");
var $3292ef9f328419fc$exports = require("./breadcrumb_vars_css.main.js");
var $lykgu$reactspectrumbutton = require("@react-spectrum/button");
var $lykgu$reactspectrumutils = require("@react-spectrum/utils");
var $lykgu$spectrumiconsuiFolderBreadcrumb = require("@spectrum-icons/ui/FolderBreadcrumb");
var $lykgu$reactspectrummenu = require("@react-spectrum/menu");
var $lykgu$react = require("react");
var $lykgu$reactariabreadcrumbs = require("@react-aria/breadcrumbs");
var $lykgu$reactariautils = require("@react-aria/utils");
var $lykgu$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Breadcrumbs", () => $299bf776d9162a05$export$2dc68d50d56fbbd);
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









const $299bf776d9162a05$var$MIN_VISIBLE_ITEMS = 1;
const $299bf776d9162a05$var$MAX_VISIBLE_ITEMS = 4;
const $299bf776d9162a05$export$2dc68d50d56fbbd = /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).forwardRef(function Breadcrumbs(props, ref) {
    props = (0, $lykgu$reactspectrumprovider.useProviderProps)(props);
    let { size: size = 'L', isMultiline: isMultiline, children: children, showRoot: showRoot, isDisabled: isDisabled, onAction: onAction, autoFocusCurrent: autoFocusCurrent, ...otherProps } = props;
    // Not using React.Children.toArray because it mutates the key prop.
    let childArray = [];
    (0, ($parcel$interopDefault($lykgu$react))).Children.forEach(children, (child, index)=>{
        if (/*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).isValidElement(child)) {
            if (child.key == null) child = /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).cloneElement(child, {
                key: index
            });
            childArray.push(child);
        }
    });
    let domRef = (0, $lykgu$reactspectrumutils.useDOMRef)(ref);
    let listRef = (0, $lykgu$react.useRef)(null);
    let [visibleItems, setVisibleItems] = (0, $lykgu$reactariautils.useValueEffect)(childArray.length);
    let { navProps: navProps } = (0, $lykgu$reactariabreadcrumbs.useBreadcrumbs)(props);
    let { styleProps: styleProps } = (0, $lykgu$reactspectrumutils.useStyleProps)(otherProps);
    let updateOverflow = (0, $lykgu$react.useCallback)(()=>{
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
            let maxVisibleItems = $299bf776d9162a05$var$MAX_VISIBLE_ITEMS;
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
            return Math.max($299bf776d9162a05$var$MIN_VISIBLE_ITEMS, Math.min(maxVisibleItems, newVisibleItems));
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
    (0, $lykgu$reactariautils.useResizeObserver)({
        ref: domRef,
        onResize: updateOverflow
    });
    let lastChildren = (0, $lykgu$react.useRef)(null);
    (0, $lykgu$reactariautils.useLayoutEffect)(()=>{
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
        let menuItem = /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement((0, $d90ab02c74e9be0c$exports.BreadcrumbItem), {
            key: "menu",
            isMenu: true
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement((0, $lykgu$reactspectrummenu.MenuTrigger), null, /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement((0, $lykgu$reactspectrumbutton.ActionButton), {
            UNSAFE_className: (0, $lykgu$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3292ef9f328419fc$exports))), 'spectrum-Breadcrumbs-actionButton'),
            "aria-label": "\u2026",
            isQuiet: true,
            isDisabled: isDisabled
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement((0, ($parcel$interopDefault($lykgu$spectrumiconsuiFolderBreadcrumb))), null)), /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement((0, $lykgu$reactspectrummenu.Menu), {
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
        return /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement("li", {
            key: index,
            className: (0, $lykgu$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3292ef9f328419fc$exports))), 'spectrum-Breadcrumbs-item')
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement((0, $d90ab02c74e9be0c$exports.BreadcrumbItem), {
            ...child.props,
            key: key,
            isCurrent: isCurrent,
            isDisabled: isDisabled,
            onPress: onPress,
            autoFocus: isCurrent && autoFocusCurrent
        }, child.props.children));
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement("nav", {
        ...styleProps,
        ...navProps,
        ref: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($lykgu$react))).createElement("ul", {
        ref: listRef,
        className: (0, $lykgu$reactspectrumutils.classNames)((0, ($parcel$interopDefault($3292ef9f328419fc$exports))), 'spectrum-Breadcrumbs', {
            'spectrum-Breadcrumbs--small': size === 'S',
            'spectrum-Breadcrumbs--medium': size === 'M',
            'spectrum-Breadcrumbs--multiline': isMultiline,
            'spectrum-Breadcrumbs--showRoot': showRoot,
            'is-disabled': isDisabled
        }, styleProps.className)
    }, breadcrumbItems));
});


//# sourceMappingURL=Breadcrumbs.main.js.map
