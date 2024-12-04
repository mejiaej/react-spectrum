import "./styles.ad343ab0.css";
import $asbps$styles_cssmodulejs from "./styles_css.mjs";
import {ListViewContext as $f85fb77f9d4cbc6c$export$870039b0abfe3de0} from "./ListView.mjs";
import {Checkbox as $asbps$Checkbox} from "@react-spectrum/checkbox";
import $asbps$spectrumiconsuiChevronLeftMedium from "@spectrum-icons/ui/ChevronLeftMedium";
import $asbps$spectrumiconsuiChevronRightMedium from "@spectrum-icons/ui/ChevronRightMedium";
import {useHasChild as $asbps$useHasChild, classNames as $asbps$classNames, SlotProvider as $asbps$SlotProvider, ClearSlots as $asbps$ClearSlots} from "@react-spectrum/utils";
import {CSSTransition as $asbps$CSSTransition} from "react-transition-group";
import {useFocusRing as $asbps$useFocusRing, FocusRing as $asbps$FocusRing} from "@react-aria/focus";
import {Grid as $asbps$Grid} from "@react-spectrum/layout";
import {useHover as $asbps$useHover, isFocusVisible as $asbps$isFocusVisible} from "@react-aria/interactions";
import $asbps$spectrumiconsuiListGripper from "@spectrum-icons/ui/ListGripper";
import {mergeProps as $asbps$mergeProps} from "@react-aria/utils";
import {Provider as $asbps$Provider} from "@react-spectrum/provider";
import $asbps$react, {useContext as $asbps$useContext, useRef as $asbps$useRef} from "react";
import {Text as $asbps$Text} from "@react-spectrum/text";
import {useButton as $asbps$useButton} from "@react-aria/button";
import {useGridListItem as $asbps$useGridListItem, useGridListSelectionCheckbox as $asbps$useGridListSelectionCheckbox} from "@react-aria/gridlist";
import {useLocale as $asbps$useLocale} from "@react-aria/i18n";
import {useVisuallyHidden as $asbps$useVisuallyHidden} from "@react-aria/visually-hidden";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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


















function $d7c07ca2efc5ba02$export$c6bde0c04b033c0e(props) {
    var _dragAndDropHooks_isVirtualDragging, _layout_getContentSize, _layout_virtualizer;
    let { item: item, isEmphasized: isEmphasized } = props;
    let { state: state, dragState: dragState, dropState: dropState, isListDraggable: isListDraggable, isListDroppable: isListDroppable, layout: layout, dragAndDropHooks: dragAndDropHooks, loadingState: loadingState } = (0, $asbps$useContext)((0, $f85fb77f9d4cbc6c$export$870039b0abfe3de0));
    let { direction: direction } = (0, $asbps$useLocale)();
    let rowRef = (0, $asbps$useRef)(null);
    let checkboxWrapperRef = (0, $asbps$useRef)(null);
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, $asbps$useFocusRing)({
        within: true
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $asbps$useFocusRing)();
    let { rowProps: rowProps, gridCellProps: gridCellProps, isPressed: isPressed, descriptionProps: descriptionProps, isSelected: isSelected, isDisabled: isDisabled, allowsSelection: allowsSelection, hasAction: hasAction } = (0, $asbps$useGridListItem)({
        node: item,
        isVirtualized: true,
        shouldSelectOnPressUp: isListDraggable
    }, state, rowRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $asbps$useHover)({
        isDisabled: !allowsSelection && !hasAction
    });
    let { checkboxProps: checkboxProps } = (0, $asbps$useGridListSelectionCheckbox)({
        key: item.key
    }, state);
    let hasDescription = (0, $asbps$useHasChild)(`.${(0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-description']}`, rowRef);
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
    let dropIndicatorRef = (0, $asbps$useRef)(null);
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
    let dragButtonRef = (0, $asbps$react).useRef(null);
    let { buttonProps: buttonProps } = (0, $asbps$useButton)({
        ...draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragButtonProps,
        elementType: 'div'
    }, dragButtonRef);
    let chevron = direction === 'ltr' ? /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$spectrumiconsuiChevronRightMedium), {
        "aria-hidden": "true",
        UNSAFE_className: (0, $asbps$classNames)((0, ($parcel$interopDefault($asbps$styles_cssmodulejs))), 'react-spectrum-ListViewItem-parentIndicator', {
            'react-spectrum-ListViewItem-parentIndicator--hasChildItems': item.props.hasChildItems,
            'is-disabled': !hasAction
        })
    }) : /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$spectrumiconsuiChevronLeftMedium), {
        "aria-hidden": "true",
        UNSAFE_className: (0, $asbps$classNames)((0, ($parcel$interopDefault($asbps$styles_cssmodulejs))), 'react-spectrum-ListViewItem-parentIndicator', {
            'react-spectrum-ListViewItem-parentIndicator--hasChildItems': item.props.hasChildItems,
            'is-disabled': !hasAction
        })
    });
    let showCheckbox = state.selectionManager.selectionMode !== 'none' && state.selectionManager.selectionBehavior === 'toggle';
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $asbps$useVisuallyHidden)();
    const mergedProps = (0, $asbps$mergeProps)(rowProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps, hoverProps, focusWithinProps, focusProps);
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
    let roundTops = !(item.prevKey != null && state.selectionManager.isSelected(item.prevKey)) && (state.selectionManager.focusedKey !== item.prevKey || !((0, $asbps$isFocusVisible)() && state.selectionManager.isFocused));
    let roundBottoms = !(item.nextKey != null && state.selectionManager.isSelected(item.nextKey)) && (state.selectionManager.focusedKey !== item.nextKey || !((0, $asbps$isFocusVisible)() && state.selectionManager.isFocused));
    let content = typeof item.rendered === 'string' ? /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$Text), null, item.rendered) : item.rendered;
    if (isDisabled) content = /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$Provider), {
        isDisabled: true
    }, content);
    return /*#__PURE__*/ (0, $asbps$react).createElement("div", {
        ...mergedProps,
        className: (0, $asbps$classNames)((0, ($parcel$interopDefault($asbps$styles_cssmodulejs))), 'react-spectrum-ListView-row', {
            'focus-ring': isFocusVisible,
            'round-tops': roundTops || isHovered && !isSelected && state.selectionManager.focusedKey !== item.key,
            'round-bottoms': roundBottoms || isHovered && !isSelected && state.selectionManager.focusedKey !== item.key
        }),
        ref: rowRef
    }, /*#__PURE__*/ (0, $asbps$react).createElement("div", {
        // TODO: refactor the css here now that we are focusing the row?
        className: (0, $asbps$classNames)((0, ($parcel$interopDefault($asbps$styles_cssmodulejs))), 'react-spectrum-ListViewItem', {
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
    }, /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$Grid), {
        UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-grid']
    }, isListDraggable && /*#__PURE__*/ (0, $asbps$react).createElement("div", {
        className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-draghandle-container']
    }, !isDisabled && /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$FocusRing), {
        focusRingClass: (0, $asbps$classNames)((0, ($parcel$interopDefault($asbps$styles_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $asbps$react).createElement("div", {
        ...buttonProps,
        className: (0, $asbps$classNames)((0, ($parcel$interopDefault($asbps$styles_cssmodulejs))), 'react-spectrum-ListViewItem-draghandle-button'),
        style: !isFocusVisibleWithin ? {
            ...visuallyHiddenProps.style
        } : {},
        ref: dragButtonRef,
        draggable: "true"
    }, /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$spectrumiconsuiListGripper), null)))), isListDroppable && !(dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isHidden) && /*#__PURE__*/ (0, $asbps$react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.dropIndicatorProps,
        ref: dropIndicatorRef
    }), /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$CSSTransition), {
        in: showCheckbox,
        unmountOnExit: true,
        classNames: {
            enter: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-checkbox--enter'],
            enterActive: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-checkbox--enterActive'],
            exit: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-checkbox--exit'],
            exitActive: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-checkbox--exitActive']
        },
        timeout: 160,
        nodeRef: checkboxWrapperRef
    }, /*#__PURE__*/ (0, $asbps$react).createElement("div", {
        ref: checkboxWrapperRef,
        className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-checkboxWrapper']
    }, /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$Checkbox), {
        ...checkboxProps,
        UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-checkbox'],
        isEmphasized: isEmphasized
    }))), /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$SlotProvider), {
        slots: {
            text: {
                UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-content']
            },
            description: {
                UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-description'],
                ...descriptionProps
            },
            illustration: {
                UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-thumbnail']
            },
            image: {
                UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-thumbnail']
            },
            actionButton: {
                UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-actions'],
                isQuiet: true
            },
            actionGroup: {
                UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-actions'],
                isQuiet: true,
                density: 'compact'
            },
            actionMenu: {
                UNSAFE_className: (0, ($parcel$interopDefault($asbps$styles_cssmodulejs)))['react-spectrum-ListViewItem-actionmenu'],
                isQuiet: true
            }
        }
    }, content, /*#__PURE__*/ (0, $asbps$react).createElement((0, $asbps$ClearSlots), null, chevron)))));
}


export {$d7c07ca2efc5ba02$export$c6bde0c04b033c0e as ListViewItem};
//# sourceMappingURL=ListViewItem.module.js.map
