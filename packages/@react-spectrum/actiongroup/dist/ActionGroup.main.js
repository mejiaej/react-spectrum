require("./vars.607ca801.css");
var $afc5a4514aca2340$exports = require("./button_vars_css.main.js");
require("./vars.fc4aa55a.css");
var $d9f76447f7a8d3f9$exports = require("./actiongroup_vars_css.main.js");
var $2RJq8$reactspectrumbutton = require("@react-spectrum/button");
var $2RJq8$spectrumiconsuiChevronDownMedium = require("@spectrum-icons/ui/ChevronDownMedium");
var $2RJq8$reactspectrumutils = require("@react-spectrum/utils");
var $2RJq8$reactariautils = require("@react-aria/utils");
var $2RJq8$reactariafocus = require("@react-aria/focus");
var $2RJq8$reactspectrummenu = require("@react-spectrum/menu");
var $2RJq8$reactstatelylist = require("@react-stately/list");
var $2RJq8$spectrumiconsworkflowMore = require("@spectrum-icons/workflow/More");
var $2RJq8$reactariainteractions = require("@react-aria/interactions");
var $2RJq8$reactspectrumprovider = require("@react-spectrum/provider");
var $2RJq8$react = require("react");
var $2RJq8$reactspectrumtext = require("@react-spectrum/text");
var $2RJq8$reactspectrumtooltip = require("@react-spectrum/tooltip");
var $2RJq8$reactariaactiongroup = require("@react-aria/actiongroup");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ActionGroup", () => $9f46a6387592b67c$export$c21a5597f732a168);
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















const $9f46a6387592b67c$export$c21a5597f732a168 = /*#__PURE__*/ (0, $2RJq8$react.forwardRef)(function ActionGroup(props, ref) {
    props = (0, $2RJq8$reactspectrumprovider.useProviderProps)(props);
    props = (0, $2RJq8$reactspectrumutils.useSlotProps)(props, 'actionGroup');
    let { isEmphasized: isEmphasized, density: density, isJustified: isJustified, isDisabled: isDisabled, orientation: orientation = 'horizontal', isQuiet: isQuiet, staticColor: staticColor, overflowMode: overflowMode = 'wrap', onAction: onAction, buttonLabelBehavior: buttonLabelBehavior, summaryIcon: summaryIcon, ...otherProps } = props;
    let domRef = (0, $2RJq8$reactspectrumutils.useDOMRef)(ref);
    let wrapperRef = (0, $2RJq8$react.useRef)(null);
    let state = (0, $2RJq8$reactstatelylist.useListState)({
        ...props,
        suppressTextValueWarning: true
    });
    let { actionGroupProps: actionGroupProps } = (0, $2RJq8$reactariaactiongroup.useActionGroup)(props, state, domRef);
    let isVertical = orientation === 'vertical';
    let providerProps = {
        isEmphasized: isEmphasized,
        isDisabled: isDisabled,
        isQuiet: isQuiet
    };
    let { styleProps: styleProps } = (0, $2RJq8$reactspectrumutils.useStyleProps)(props);
    // Only hide button text if every item contains more than just plain text (we assume an icon).
    let isIconCollapsible = (0, $2RJq8$react.useMemo)(()=>[
            ...state.collection
        ].every((item)=>typeof item.rendered !== 'string'), [
        state.collection
    ]);
    let [{ visibleItems: visibleItems, hideButtonText: hideButtonText, isMeasuring: isMeasuring }, setVisibleItems] = (0, $2RJq8$reactariautils.useValueEffect)({
        visibleItems: state.collection.size,
        hideButtonText: buttonLabelBehavior === 'hide' && isIconCollapsible,
        isMeasuring: false
    });
    let selectionMode = state.selectionManager.selectionMode;
    let updateOverflow = (0, $2RJq8$react.useCallback)(()=>{
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
                    if (item) calculatedSize += orientation === 'horizontal' ? $9f46a6387592b67c$var$outerWidth(item, false, true) : $9f46a6387592b67c$var$outerHeight(item, false, true);
                }
                for (let [i, item] of listItems.entries()){
                    calculatedSize += orientation === 'horizontal' ? $9f46a6387592b67c$var$outerWidth(item, i === 0, i === listItems.length - 1) : $9f46a6387592b67c$var$outerHeight(item, i === 0, i === listItems.length - 1);
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
    let parentRef = (0, $2RJq8$react.useMemo)(()=>({
            get current () {
                var _wrapperRef_current;
                return (_wrapperRef_current = wrapperRef.current) === null || _wrapperRef_current === void 0 ? void 0 : _wrapperRef_current.parentElement;
            }
        }), [
        wrapperRef
    ]);
    (0, $2RJq8$reactariautils.useResizeObserver)({
        ref: overflowMode !== 'wrap' ? parentRef : undefined,
        onResize: updateOverflow
    });
    (0, $2RJq8$reactariautils.useLayoutEffect)(updateOverflow, [
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
        menuProps = (0, $2RJq8$reactariautils.filterDOMProps)(props, {
            labelable: true
        });
        actionGroupProps = {};
    }
    if (overflowMode === 'collapse' && visibleItems < state.collection.size) {
        let menuChildren = children.slice(visibleItems);
        children = children.slice(0, visibleItems);
        menuItem = /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement($9f46a6387592b67c$var$ActionGroupMenu, {
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
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactariafocus.FocusScope), null, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement("div", {
        ...styleProps,
        style: style,
        className: (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d9f76447f7a8d3f9$exports))), 'flex-container', styleProps.className),
        ref: wrapperRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement("div", {
        ...actionGroupProps,
        ref: domRef,
        className: (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d9f76447f7a8d3f9$exports))), 'flex-gap', 'spectrum-ActionGroup', {
            'spectrum-ActionGroup--quiet': isQuiet,
            'spectrum-ActionGroup--vertical': isVertical,
            'spectrum-ActionGroup--compact': density === 'compact',
            'spectrum-ActionGroup--justified': isJustified && !isMeasuring,
            'spectrum-ActionGroup--overflowCollapse': overflowMode === 'collapse'
        }, otherProps.UNSAFE_className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumprovider.Provider), providerProps, children.map((item)=>/*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement($9f46a6387592b67c$var$ActionGroupItem, {
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
function $9f46a6387592b67c$var$ActionGroupItem({ item: item, state: state, isDisabled: isDisabled, isEmphasized: isEmphasized, staticColor: staticColor, onAction: onAction, hideButtonText: hideButtonText, orientation: orientation }) {
    let ref = (0, $2RJq8$react.useRef)(null);
    let { buttonProps: buttonProps } = (0, $2RJq8$reactariaactiongroup.useActionGroupItem)({
        key: item.key
    }, state);
    isDisabled = isDisabled || state.disabledKeys.has(item.key);
    let isSelected = state.selectionManager.isSelected(item.key);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $2RJq8$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    let domProps = (0, $2RJq8$reactariautils.filterDOMProps)(item.props);
    if (onAction && !isDisabled) buttonProps = (0, $2RJq8$reactariautils.mergeProps)(buttonProps, {
        onPress: ()=>onAction(item.key)
    });
    // If button text is hidden, we need to show it as a tooltip instead, so
    // go find the text element in the DOM after rendering.
    let textId = (0, $2RJq8$reactariautils.useId)();
    let [textContent, setTextContent] = (0, $2RJq8$react.useState)('');
    (0, $2RJq8$reactariautils.useLayoutEffect)(()=>{
        var _document_getElementById;
        if (hideButtonText) setTextContent((_document_getElementById = document.getElementById(textId)) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.textContent);
    }, [
        hideButtonText,
        item.rendered,
        textId
    ]);
    let button = // Use a PressResponder to send DOM props through.
    // ActionButton doesn't allow overriding the role by default.
    /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactariainteractions.PressResponder), (0, $2RJq8$reactariautils.mergeProps)(buttonProps, hoverProps, domProps), /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumutils.ClearSlots), null, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumutils.SlotProvider), {
        slots: {
            text: {
                id: hideButtonText ? textId : null,
                isHidden: hideButtonText
            }
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumbutton.ActionButton), {
        ref: ref,
        // @ts-ignore (private)
        hideButtonText: hideButtonText,
        UNSAFE_className: (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d9f76447f7a8d3f9$exports))), 'spectrum-ActionGroup-item', {
            'is-selected': isSelected,
            'is-hovered': isHovered,
            'spectrum-ActionGroup-item--iconOnly': hideButtonText,
            'spectrum-ActionGroup-item--isDisabled': isDisabled
        }, (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), {
            'spectrum-ActionButton--emphasized': isEmphasized,
            'is-selected': isSelected
        })),
        isDisabled: isDisabled,
        staticColor: staticColor,
        "aria-label": item['aria-label'],
        "aria-labelledby": item['aria-label'] == null && hideButtonText ? textId : undefined
    }, item.rendered))));
    if (hideButtonText && textContent) button = /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumtooltip.TooltipTrigger), {
        placement: orientation === 'vertical' ? 'end' : 'top'
    }, button, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumtooltip.Tooltip), null, textContent));
    if (item.wrapper) button = item.wrapper(button);
    return button;
}
function $9f46a6387592b67c$var$ActionGroupMenu({ state: state, isDisabled: isDisabled, isEmphasized: isEmphasized, staticColor: staticColor, items: items, onAction: onAction, summaryIcon: summaryIcon, hideButtonText: hideButtonText, isOnlyItem: isOnlyItem, orientation: orientation, ...otherProps }) {
    // Use the key of the first item within the menu as the key of the button.
    // The key must actually exist in the collection for focus to work correctly.
    let key = items[0].key;
    let { buttonProps: buttonProps } = (0, $2RJq8$reactariaactiongroup.useActionGroupItem)({
        key: key
    }, state);
    // The menu button shouldn't act like an actual action group item.
    delete buttonProps.onPress;
    delete buttonProps.role;
    delete buttonProps['aria-checked'];
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $2RJq8$reactariainteractions.useHover)({
        isDisabled: isDisabled
    });
    // If no aria-label or aria-labelledby is given, provide a default one.
    let ariaLabel = otherProps['aria-label'] || (otherProps['aria-labelledby'] ? undefined : "\u2026");
    let ariaLabelledby = otherProps['aria-labelledby'];
    let textId = (0, $2RJq8$reactariautils.useId)();
    let id = (0, $2RJq8$reactariautils.useId)();
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
            if (typeof summaryIcon === 'string') summaryIcon = /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumtext.Text), null, summaryIcon);
            iconOnly = !!hideButtonText;
            ariaLabelledby = `${ariaLabelledby !== null && ariaLabelledby !== void 0 ? ariaLabelledby : id} ${textId}`;
        }
    }
    if (summaryIcon) // If there's a custom summary icon, also add a chevron.
    summaryIcon = /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, ($parcel$interopDefault($2RJq8$react))).Fragment, null, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, ($parcel$interopDefault($2RJq8$spectrumiconsuiChevronDownMedium))), {
        UNSAFE_className: (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d9f76447f7a8d3f9$exports))), 'spectrum-ActionGroup-menu-chevron')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement("span", {
        className: (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d9f76447f7a8d3f9$exports))), 'spectrum-ActionGroup-menu-contents', {
            'spectrum-ActionGroup-item--iconOnly': iconOnly
        })
    }, summaryIcon));
    return(// Use a PressResponder to send DOM props through.
    /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrummenu.MenuTrigger), {
        align: isOnlyItem ? 'start' : 'end',
        direction: orientation === 'vertical' ? 'end' : 'bottom'
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumutils.SlotProvider), {
        slots: {
            text: {
                id: hideButtonText ? textId : null,
                isHidden: hideButtonText,
                UNSAFE_className: (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d9f76447f7a8d3f9$exports))), 'spectrum-ActionGroup-menu-text')
            }
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactariainteractions.PressResponder), (0, $2RJq8$reactariautils.mergeProps)(buttonProps, hoverProps), /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrumbutton.ActionButton), {
        ...otherProps,
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        UNSAFE_className: (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($d9f76447f7a8d3f9$exports))), 'spectrum-ActionGroup-item', 'spectrum-ActionGroup-menu', {
            'is-hovered': isHovered,
            'is-selected': isSelected
        }, (0, $2RJq8$reactspectrumutils.classNames)((0, ($parcel$interopDefault($afc5a4514aca2340$exports))), {
            'is-selected': isSelected,
            'spectrum-ActionButton--emphasized': isEmphasized
        })),
        isDisabled: isDisabled,
        staticColor: staticColor
    }, summaryIcon || /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, ($parcel$interopDefault($2RJq8$spectrumiconsworkflowMore))), null)))), /*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrummenu.Menu), {
        items: items,
        disabledKeys: state.disabledKeys,
        selectionMode: state.selectionManager.selectionMode,
        selectedKeys: state.selectionManager.selectedKeys,
        disallowEmptySelection: state.selectionManager.disallowEmptySelection,
        onSelectionChange: (keys)=>state.selectionManager.setSelectedKeys(keys),
        onAction: onAction
    }, (node)=>/*#__PURE__*/ (0, ($parcel$interopDefault($2RJq8$react))).createElement((0, $2RJq8$reactspectrummenu.Item), {
            textValue: node.textValue,
            ...(0, $2RJq8$reactariautils.filterDOMProps)(node.props)
        }, node.rendered))));
}
function $9f46a6387592b67c$var$outerWidth(element, ignoreLeftMargin, ignoreRightMargin) {
    let style = window.getComputedStyle(element);
    return element.getBoundingClientRect().width + (ignoreLeftMargin ? 0 : $9f46a6387592b67c$var$toNumber(style.marginLeft)) + (ignoreRightMargin ? 0 : $9f46a6387592b67c$var$toNumber(style.marginRight));
}
function $9f46a6387592b67c$var$outerHeight(element, ignoreTopMargin, ignoreBottomMargin) {
    let style = window.getComputedStyle(element);
    return element.getBoundingClientRect().height + (ignoreTopMargin ? 0 : $9f46a6387592b67c$var$toNumber(style.marginTop)) + (ignoreBottomMargin ? 0 : $9f46a6387592b67c$var$toNumber(style.marginBottom));
}
function $9f46a6387592b67c$var$toNumber(value) {
    let parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
}


//# sourceMappingURL=ActionGroup.main.js.map
