var $3114c2382242bdc0$exports = require("./Collection.main.js");
var $c5ccf687772c0422$exports = require("./utils.main.js");
var $0c2289d253cb4544$exports = require("./DragAndDrop.main.js");
var $c7efb75a1a3fe2d2$exports = require("./Header.main.js");
var $54b202ace195eaa4$exports = require("./Separator.main.js");
var $a8a589c28affdc40$exports = require("./Text.main.js");
var $59TRP$reactaria = require("react-aria");
var $59TRP$reactariacollections = require("@react-aria/collections");
var $59TRP$reactstately = require("react-stately");
var $59TRP$reactariautils = require("@react-aria/utils");
var $59TRP$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ListBoxContext", () => $a03b42240404b420$export$7ff8f37d2d81a48d);
$parcel$export(module.exports, "ListStateContext", () => $a03b42240404b420$export$7c5906fe4f1f2af2);
$parcel$export(module.exports, "ListBox", () => $a03b42240404b420$export$41f133550aa26f48);
$parcel$export(module.exports, "ListBoxSection", () => $a03b42240404b420$export$dca12b0bb56e4fc);
$parcel$export(module.exports, "ListBoxItem", () => $a03b42240404b420$export$a11e76429ed99b4);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 










const $a03b42240404b420$export$7ff8f37d2d81a48d = /*#__PURE__*/ (0, $59TRP$react.createContext)(null);
const $a03b42240404b420$export$7c5906fe4f1f2af2 = /*#__PURE__*/ (0, $59TRP$react.createContext)(null);
const $a03b42240404b420$export$41f133550aa26f48 = /*#__PURE__*/ (0, $59TRP$react.forwardRef)(function ListBox(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $a03b42240404b420$export$7ff8f37d2d81a48d);
    let state = (0, $59TRP$react.useContext)($a03b42240404b420$export$7c5906fe4f1f2af2);
    // The structure of ListBox is a bit strange because it needs to work inside other components like ComboBox and Select.
    // Those components render two copies of their children so that the collection can be built even when the popover is closed.
    // The first copy sends a collection document via context which we render the collection portal into.
    // The second copy sends a ListState object via context which we use to render the ListBox without rebuilding the state.
    // Otherwise, we have a standalone ListBox, so we need to create a collection and state ourselves.
    if (state) return /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement($a03b42240404b420$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: ref
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement((0, $59TRP$reactariacollections.CollectionBuilder), {
        content: /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement((0, $59TRP$reactariacollections.Collection), props)
    }, (collection)=>/*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement($a03b42240404b420$var$StandaloneListBox, {
            props: props,
            listBoxRef: ref,
            collection: collection
        }));
});
function $a03b42240404b420$var$StandaloneListBox({ props: props, listBoxRef: listBoxRef, collection: collection }) {
    props = {
        ...props,
        collection: collection,
        children: null,
        items: null
    };
    let { layoutDelegate: layoutDelegate } = (0, $59TRP$react.useContext)((0, $3114c2382242bdc0$exports.CollectionRendererContext));
    let state = (0, $59TRP$reactstately.useListState)({
        ...props,
        layoutDelegate: layoutDelegate
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement($a03b42240404b420$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: listBoxRef
    });
}
function $a03b42240404b420$var$ListBoxInner({ state: state, props: props, listBoxRef: listBoxRef }) {
    let { dragAndDropHooks: dragAndDropHooks, layout: layout = 'stack', orientation: orientation = 'vertical' } = props;
    let { collection: collection, selectionManager: selectionManager } = state;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let { direction: direction } = (0, $59TRP$reactaria.useLocale)();
    let { disabledBehavior: disabledBehavior, disabledKeys: disabledKeys } = selectionManager;
    let collator = (0, $59TRP$reactaria.useCollator)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { isVirtualized: isVirtualized, layoutDelegate: layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot: CollectionRoot } = (0, $59TRP$react.useContext)((0, $3114c2382242bdc0$exports.CollectionRendererContext));
    let keyboardDelegate = (0, $59TRP$react.useMemo)(()=>props.keyboardDelegate || new (0, $59TRP$reactaria.ListKeyboardDelegate)({
            collection: collection,
            collator: collator,
            ref: listBoxRef,
            disabledKeys: disabledKeys,
            disabledBehavior: disabledBehavior,
            layout: layout,
            orientation: orientation,
            direction: direction,
            layoutDelegate: layoutDelegate
        }), [
        collection,
        collator,
        listBoxRef,
        disabledBehavior,
        disabledKeys,
        orientation,
        direction,
        props.keyboardDelegate,
        layout,
        layoutDelegate
    ]);
    let { listBoxProps: listBoxProps } = (0, $59TRP$reactaria.useListBox)({
        ...props,
        shouldSelectOnPressUp: isListDraggable || props.shouldSelectOnPressUp,
        keyboardDelegate: keyboardDelegate,
        isVirtualized: isVirtualized
    }, state, listBoxRef);
    let dragHooksProvided = (0, $59TRP$react.useRef)(isListDraggable);
    let dropHooksProvided = (0, $59TRP$react.useRef)(isListDroppable);
    (0, $59TRP$react.useEffect)(()=>{
        if (dragHooksProvided.current !== isListDraggable) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== isListDroppable) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, $59TRP$react.useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, listBoxRef);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, listBoxRef, {
            orientation: orientation,
            layout: layout,
            direction: direction
        });
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, listBoxRef);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $59TRP$reactaria.useFocusRing)();
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty: state.collection.size === 0,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        layout: props.layout || 'stack',
        state: state
    };
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        className: props.className,
        style: props.style,
        defaultClassName: 'react-aria-ListBox',
        values: renderValues
    });
    let emptyState = null;
    if (state.collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement("div", {
        // eslint-disable-next-line
        role: "option",
        style: {
            display: 'contents'
        }
    }, props.renderEmptyState(renderValues));
    return /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement((0, $59TRP$reactaria.FocusScope), null, /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement("div", {
        ...(0, $59TRP$reactariautils.filterDOMProps)(props),
        ...(0, $59TRP$reactaria.mergeProps)(listBoxProps, focusProps, droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps),
        ...renderProps,
        ref: listBoxRef,
        slot: props.slot || undefined,
        onScroll: props.onScroll,
        "data-drop-target": isRootDropTarget || undefined,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-layout": props.layout || 'stack',
        "data-orientation": props.orientation || 'vertical'
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                $a03b42240404b420$export$7ff8f37d2d81a48d,
                props
            ],
            [
                $a03b42240404b420$export$7c5906fe4f1f2af2,
                state
            ],
            [
                (0, $0c2289d253cb4544$exports.DragAndDropContext),
                {
                    dragAndDropHooks: dragAndDropHooks,
                    dragState: dragState,
                    dropState: dropState
                }
            ],
            [
                (0, $54b202ace195eaa4$exports.SeparatorContext),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, $0c2289d253cb4544$exports.DropIndicatorContext),
                {
                    render: $a03b42240404b420$var$ListBoxDropIndicatorWrapper
                }
            ],
            [
                (0, $3114c2382242bdc0$exports.SectionContext),
                {
                    name: 'ListBoxSection',
                    render: $a03b42240404b420$var$ListBoxSectionInner
                }
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement(CollectionRoot, {
        collection: collection,
        scrollRef: listBoxRef,
        persistedKeys: (0, $0c2289d253cb4544$exports.useDndPersistedKeys)(selectionManager, dragAndDropHooks, dropState),
        renderDropIndicator: (0, $0c2289d253cb4544$exports.useRenderDropIndicator)(dragAndDropHooks, dropState)
    })), emptyState, dragPreview));
}
function $a03b42240404b420$var$ListBoxSectionInner(props, ref, section, className = 'react-aria-ListBoxSection') {
    let state = (0, $59TRP$react.useContext)($a03b42240404b420$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $59TRP$react.useContext)((0, $0c2289d253cb4544$exports.DragAndDropContext));
    let { CollectionBranch: CollectionBranch } = (0, $59TRP$react.useContext)((0, $3114c2382242bdc0$exports.CollectionRendererContext));
    let [headingRef, heading] = (0, $c5ccf687772c0422$exports.useSlot)();
    var _props_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $59TRP$reactaria.useListBoxSection)({
        heading: heading,
        'aria-label': (_props_arialabel = props['aria-label']) !== null && _props_arialabel !== void 0 ? _props_arialabel : undefined
    });
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        defaultClassName: className,
        className: props.className,
        style: props.style,
        values: {}
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement("section", {
        ...(0, $59TRP$reactariautils.filterDOMProps)(props),
        ...groupProps,
        ...renderProps,
        ref: ref
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement((0, $c7efb75a1a3fe2d2$exports.HeaderContext).Provider, {
        value: {
            ...headingProps,
            ref: headingRef
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section,
        renderDropIndicator: (0, $0c2289d253cb4544$exports.useRenderDropIndicator)(dragAndDropHooks, dropState)
    })));
}
const $a03b42240404b420$export$dca12b0bb56e4fc = /*#__PURE__*/ (0, $59TRP$reactariacollections.createBranchComponent)('section', $a03b42240404b420$var$ListBoxSectionInner);
const $a03b42240404b420$export$a11e76429ed99b4 = /*#__PURE__*/ (0, $59TRP$reactariacollections.createLeafComponent)('item', function ListBoxItem(props, forwardedRef, item) {
    let ref = (0, $59TRP$reactariautils.useObjectRef)(forwardedRef);
    let state = (0, $59TRP$react.useContext)($a03b42240404b420$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, $59TRP$react.useContext)((0, $0c2289d253cb4544$exports.DragAndDropContext));
    let { optionProps: optionProps, labelProps: labelProps, descriptionProps: descriptionProps, ...states } = (0, $59TRP$reactaria.useOption)({
        key: item.key,
        'aria-label': props === null || props === void 0 ? void 0 : props['aria-label']
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $59TRP$reactaria.useHover)({
        isDisabled: !states.allowsSelection && !states.hasAction,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key
    }, dragState);
    let droppableItem = null;
    if (dropState && dragAndDropHooks) droppableItem = dragAndDropHooks.useDroppableItem({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, ref);
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...props,
        id: undefined,
        children: props.children,
        defaultClassName: 'react-aria-ListBoxItem',
        values: {
            ...states,
            isHovered: isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging: isDragging,
            isDropTarget: droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget
        }
    });
    (0, $59TRP$react.useEffect)(()=>{
        if (!item.textValue) console.warn('A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.');
    }, [
        item.textValue
    ]);
    let ElementType = props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement(ElementType, {
        ...(0, $59TRP$reactaria.mergeProps)(optionProps, hoverProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps, droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.dropProps),
        ...renderProps,
        ref: ref,
        "data-allows-dragging": !!dragState || undefined,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": (droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget) || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement((0, $c5ccf687772c0422$exports.Provider), {
        values: [
            [
                (0, $a8a589c28affdc40$exports.TextContext),
                {
                    slots: {
                        [(0, $c5ccf687772c0422$exports.DEFAULT_SLOT)]: labelProps,
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ]
        ]
    }, renderProps.children));
});
function $a03b42240404b420$var$ListBoxDropIndicatorWrapper(props, ref) {
    ref = (0, $59TRP$reactariautils.useObjectRef)(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $59TRP$react.useContext)((0, $0c2289d253cb4544$exports.DragAndDropContext));
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement($a03b42240404b420$var$ListBoxDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        ref: ref
    });
}
function $a03b42240404b420$var$ListBoxDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, ...otherProps } = props;
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($59TRP$react))).createElement("div", {
        ...dropIndicatorProps,
        ...renderProps,
        // eslint-disable-next-line
        role: "option",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    });
}
const $a03b42240404b420$var$ListBoxDropIndicatorForwardRef = /*#__PURE__*/ (0, $59TRP$react.forwardRef)($a03b42240404b420$var$ListBoxDropIndicator);


//# sourceMappingURL=ListBox.main.js.map
