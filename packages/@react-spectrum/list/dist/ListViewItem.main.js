require("./styles.ad343ab0.css");
var $279507a6f189e509$exports = require("./styles_css.main.js");
var $60684b441be8e84c$exports = require("./ListView.main.js");
var $5Mbbg$reactspectrumcheckbox = require("@react-spectrum/checkbox");
var $5Mbbg$spectrumiconsuiChevronLeftMedium = require("@spectrum-icons/ui/ChevronLeftMedium");
var $5Mbbg$spectrumiconsuiChevronRightMedium = require("@spectrum-icons/ui/ChevronRightMedium");
var $5Mbbg$reactspectrumutils = require("@react-spectrum/utils");
var $5Mbbg$reacttransitiongroup = require("react-transition-group");
var $5Mbbg$reactariafocus = require("@react-aria/focus");
var $5Mbbg$reactspectrumlayout = require("@react-spectrum/layout");
var $5Mbbg$reactariainteractions = require("@react-aria/interactions");
var $5Mbbg$spectrumiconsuiListGripper = require("@spectrum-icons/ui/ListGripper");
var $5Mbbg$reactariautils = require("@react-aria/utils");
var $5Mbbg$reactspectrumprovider = require("@react-spectrum/provider");
var $5Mbbg$react = require("react");
var $5Mbbg$reactspectrumtext = require("@react-spectrum/text");
var $5Mbbg$reactariabutton = require("@react-aria/button");
var $5Mbbg$reactariagridlist = require("@react-aria/gridlist");
var $5Mbbg$reactariai18n = require("@react-aria/i18n");
var $5Mbbg$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ListViewItem", () => $9eae7a1cb1535a6b$export$c6bde0c04b033c0e);
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


















function $9eae7a1cb1535a6b$export$c6bde0c04b033c0e(props) {
    var _dragAndDropHooks_isVirtualDragging, _layout_getContentSize, _layout_virtualizer;
    let { item: item, isEmphasized: isEmphasized } = props;
    let { state: state, dragState: dragState, dropState: dropState, isListDraggable: isListDraggable, isListDroppable: isListDroppable, layout: layout, dragAndDropHooks: dragAndDropHooks, loadingState: loadingState } = (0, $5Mbbg$react.useContext)((0, $60684b441be8e84c$exports.ListViewContext));
    let { direction: direction } = (0, $5Mbbg$reactariai18n.useLocale)();
    let rowRef = (0, $5Mbbg$react.useRef)(null);
    let checkboxWrapperRef = (0, $5Mbbg$react.useRef)(null);
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, $5Mbbg$reactariafocus.useFocusRing)({
        within: true
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $5Mbbg$reactariafocus.useFocusRing)();
    let { rowProps: rowProps, gridCellProps: gridCellProps, isPressed: isPressed, descriptionProps: descriptionProps, isSelected: isSelected, isDisabled: isDisabled, allowsSelection: allowsSelection, hasAction: hasAction } = (0, $5Mbbg$reactariagridlist.useGridListItem)({
        node: item,
        isVirtualized: true,
        shouldSelectOnPressUp: isListDraggable
    }, state, rowRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $5Mbbg$reactariainteractions.useHover)({
        isDisabled: !allowsSelection && !hasAction
    });
    let { checkboxProps: checkboxProps } = (0, $5Mbbg$reactariagridlist.useGridListSelectionCheckbox)({
        key: item.key
    }, state);
    let hasDescription = (0, $5Mbbg$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-description']}`, rowRef);
    let draggableItem = null;
    if (isListDraggable && dragAndDropHooks && dragState) {
        draggableItem = dragAndDropHooks.useDraggableItem({
            key: item.key,
            hasDragButton: true
        }, dragState);
        if (isDisabled) draggableItem = null;
    }
    let isDropTarget = false;
    let dropIndicator = null;
    let dropIndicatorRef = (0, $5Mbbg$react.useRef)(null);
    if (isListDroppable && dragAndDropHooks && dropState) {
        let target = {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        };
        isDropTarget = dropState.isDropTarget(target);
        dropIndicator = dragAndDropHooks.useDropIndicator({
            target: target
        }, dropState, dropIndicatorRef);
    }
    let dragButtonRef = (0, ($parcel$interopDefault($5Mbbg$react))).useRef(null);
    let { buttonProps: buttonProps } = (0, $5Mbbg$reactariabutton.useButton)({
        ...draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragButtonProps,
        elementType: 'div'
    }, dragButtonRef);
    let chevron = direction === 'ltr' ? /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, ($parcel$interopDefault($5Mbbg$spectrumiconsuiChevronRightMedium))), {
        "aria-hidden": "true",
        UNSAFE_className: (0, $5Mbbg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'react-spectrum-ListViewItem-parentIndicator', {
            'react-spectrum-ListViewItem-parentIndicator--hasChildItems': item.props.hasChildItems,
            'is-disabled': !hasAction
        })
    }) : /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, ($parcel$interopDefault($5Mbbg$spectrumiconsuiChevronLeftMedium))), {
        "aria-hidden": "true",
        UNSAFE_className: (0, $5Mbbg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'react-spectrum-ListViewItem-parentIndicator', {
            'react-spectrum-ListViewItem-parentIndicator--hasChildItems': item.props.hasChildItems,
            'is-disabled': !hasAction
        })
    });
    let showCheckbox = state.selectionManager.selectionMode !== 'none' && state.selectionManager.selectionBehavior === 'toggle';
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $5Mbbg$reactariavisuallyhidden.useVisuallyHidden)();
    const mergedProps = (0, $5Mbbg$reactariautils.mergeProps)(rowProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps, hoverProps, focusWithinProps, focusProps);
    // Remove tab index from list row if performing a screenreader drag. This prevents TalkBack from focusing the row,
    // allowing for single swipe navigation between row drop indicator
    if (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks)) mergedProps.tabIndex = undefined;
    let isFirstRow = item.prevKey == null;
    let isLastRow = item.nextKey == null;
    // Figure out if the ListView content is equal or greater in height to the container. If so, we'll need to round the bottom
    // border corners of the last row when selected and we can get rid of the bottom border if it isn't selected to avoid border overlap
    // with bottom border
    let isFlushWithContainerBottom = false;
    var _layout_virtualizer_visibleRect_height;
    if (isLastRow && loadingState !== 'loadingMore') {
        if (((_layout_getContentSize = layout.getContentSize()) === null || _layout_getContentSize === void 0 ? void 0 : _layout_getContentSize.height) >= ((_layout_virtualizer_visibleRect_height = (_layout_virtualizer = layout.virtualizer) === null || _layout_virtualizer === void 0 ? void 0 : _layout_virtualizer.visibleRect.height) !== null && _layout_virtualizer_visibleRect_height !== void 0 ? _layout_virtualizer_visibleRect_height : 0)) isFlushWithContainerBottom = true;
    }
    // previous item isn't selected
    // and the previous item isn't focused or, if it is focused, then if focus globally isn't visible or just focus isn't in the listview
    let roundTops = !(item.prevKey != null && state.selectionManager.isSelected(item.prevKey)) && (state.selectionManager.focusedKey !== item.prevKey || !((0, $5Mbbg$reactariainteractions.isFocusVisible)() && state.selectionManager.isFocused));
    let roundBottoms = !(item.nextKey != null && state.selectionManager.isSelected(item.nextKey)) && (state.selectionManager.focusedKey !== item.nextKey || !((0, $5Mbbg$reactariainteractions.isFocusVisible)() && state.selectionManager.isFocused));
    let content = typeof item.rendered === 'string' ? /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, $5Mbbg$reactspectrumtext.Text), null, item.rendered) : item.rendered;
    if (isDisabled) content = /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, $5Mbbg$reactspectrumprovider.Provider), {
        isDisabled: true
    }, content);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement("div", {
        ...mergedProps,
        className: (0, $5Mbbg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'react-spectrum-ListView-row', {
            'focus-ring': isFocusVisible,
            'round-tops': roundTops || isHovered && !isSelected && state.selectionManager.focusedKey !== item.key,
            'round-bottoms': roundBottoms || isHovered && !isSelected && state.selectionManager.focusedKey !== item.key
        }),
        ref: rowRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement("div", {
        // TODO: refactor the css here now that we are focusing the row?
        className: (0, $5Mbbg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'react-spectrum-ListViewItem', {
            'is-active': isPressed,
            'is-focused': isFocusVisibleWithin,
            'focus-ring': isFocusVisible,
            'is-hovered': isHovered,
            'is-selected': isSelected,
            'is-disabled': isDisabled,
            'is-prev-selected': item.prevKey != null && state.selectionManager.isSelected(item.prevKey),
            'is-next-selected': item.nextKey != null && state.selectionManager.isSelected(item.nextKey),
            'react-spectrum-ListViewItem--highlightSelection': state.selectionManager.selectionBehavior === 'replace' && (isSelected || item.nextKey != null && state.selectionManager.isSelected(item.nextKey)),
            'react-spectrum-ListViewItem--dropTarget': !!isDropTarget,
            'react-spectrum-ListViewItem--firstRow': isFirstRow,
            'react-spectrum-ListViewItem--lastRow': isLastRow,
            'react-spectrum-ListViewItem--isFlushBottom': isFlushWithContainerBottom,
            'react-spectrum-ListViewItem--hasDescription': hasDescription
        }),
        ...gridCellProps
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, $5Mbbg$reactspectrumlayout.Grid), {
        UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-grid']
    }, isListDraggable && /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement("div", {
        className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-draghandle-container']
    }, !isDisabled && /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, $5Mbbg$reactariafocus.FocusRing), {
        focusRingClass: (0, $5Mbbg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement("div", {
        ...buttonProps,
        className: (0, $5Mbbg$reactspectrumutils.classNames)((0, ($parcel$interopDefault($279507a6f189e509$exports))), 'react-spectrum-ListViewItem-draghandle-button'),
        style: !isFocusVisibleWithin ? {
            ...visuallyHiddenProps.style
        } : {},
        ref: dragButtonRef,
        draggable: "true"
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, ($parcel$interopDefault($5Mbbg$spectrumiconsuiListGripper))), null)))), isListDroppable && !(dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isHidden) && /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.dropIndicatorProps,
        ref: dropIndicatorRef
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, $5Mbbg$reacttransitiongroup.CSSTransition), {
        in: showCheckbox,
        unmountOnExit: true,
        classNames: {
            enter: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-checkbox--enter'],
            enterActive: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-checkbox--enterActive'],
            exit: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-checkbox--exit'],
            exitActive: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-checkbox--exitActive']
        },
        timeout: 160,
        nodeRef: checkboxWrapperRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement("div", {
        ref: checkboxWrapperRef,
        className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-checkboxWrapper']
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, $5Mbbg$reactspectrumcheckbox.Checkbox), {
        ...checkboxProps,
        UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-checkbox'],
        isEmphasized: isEmphasized
    }))), /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, $5Mbbg$reactspectrumutils.SlotProvider), {
        slots: {
            text: {
                UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-content']
            },
            description: {
                UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-description'],
                ...descriptionProps
            },
            illustration: {
                UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-thumbnail']
            },
            image: {
                UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-thumbnail']
            },
            actionButton: {
                UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-actions'],
                isQuiet: true
            },
            actionGroup: {
                UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-actions'],
                isQuiet: true,
                density: 'compact'
            },
            actionMenu: {
                UNSAFE_className: (0, ($parcel$interopDefault($279507a6f189e509$exports)))['react-spectrum-ListViewItem-actionmenu'],
                isQuiet: true
            }
        }
    }, content, /*#__PURE__*/ (0, ($parcel$interopDefault($5Mbbg$react))).createElement((0, $5Mbbg$reactspectrumutils.ClearSlots), null, chevron)))));
}


//# sourceMappingURL=ListViewItem.main.js.map
