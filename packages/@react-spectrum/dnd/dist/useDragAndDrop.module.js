import {useDraggableCollection as $ejrPO$useDraggableCollection, useDraggableItem as $ejrPO$useDraggableItem, DragPreview as $ejrPO$DragPreview, useDroppableItem as $ejrPO$useDroppableItem, useDroppableCollection as $ejrPO$useDroppableCollection, useDropIndicator as $ejrPO$useDropIndicator, isVirtualDragging as $ejrPO$isVirtualDragging} from "@react-aria/dnd";
import {useDraggableCollectionState as $ejrPO$useDraggableCollectionState, useDroppableCollectionState as $ejrPO$useDroppableCollectionState} from "@react-stately/dnd";
import {useMemo as $ejrPO$useMemo} from "react";

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


function $8d44a09a765f4c9c$export$2cfc5be7a55829f6(options) {
    let dragAndDropHooks = (0, $ejrPO$useMemo)(()=>{
        let { onDrop: onDrop, onInsert: onInsert, onItemDrop: onItemDrop, onReorder: onReorder, onRootDrop: onRootDrop, getItems: getItems, renderPreview: renderPreview } = options;
        let isDraggable = !!getItems;
        let isDroppable = !!(onDrop || onInsert || onItemDrop || onReorder || onRootDrop);
        let hooks = {};
        if (isDraggable) {
            hooks.useDraggableCollectionState = function useDraggableCollectionStateOverride(props) {
                return (0, $ejrPO$useDraggableCollectionState)({
                    ...props,
                    ...options,
                    getItems: options.getItems
                });
            };
            hooks.useDraggableCollection = (0, $ejrPO$useDraggableCollection);
            hooks.useDraggableItem = (0, $ejrPO$useDraggableItem);
            hooks.DragPreview = (0, $ejrPO$DragPreview);
            hooks.renderPreview = renderPreview;
        }
        if (isDroppable) {
            hooks.useDroppableCollectionState = function useDroppableCollectionStateOverride(props) {
                return (0, $ejrPO$useDroppableCollectionState)({
                    ...props,
                    ...options
                });
            };
            hooks.useDroppableItem = (0, $ejrPO$useDroppableItem);
            hooks.useDroppableCollection = function useDroppableCollectionOverride(props, state, ref) {
                return (0, $ejrPO$useDroppableCollection)({
                    ...props,
                    ...options
                }, state, ref);
            };
            hooks.useDropIndicator = (0, $ejrPO$useDropIndicator);
        }
        if (isDraggable || isDroppable) hooks.isVirtualDragging = (0, $ejrPO$isVirtualDragging);
        return hooks;
    }, [
        options
    ]);
    return {
        dragAndDropHooks: dragAndDropHooks
    };
}


export {$8d44a09a765f4c9c$export$2cfc5be7a55829f6 as useDragAndDrop};
//# sourceMappingURL=useDragAndDrop.module.js.map
