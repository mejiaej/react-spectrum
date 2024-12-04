import {TableViewBase as $bd013581c0a4b065$export$517e02184d273d69} from "./TableViewBase.mjs";
import $9W9sm$react, {useState as $9W9sm$useState} from "react";
import {useTableState as $9W9sm$useTableState} from "@react-stately/table";

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


const $d14697b14e638114$export$b3c27e869d856b7 = /*#__PURE__*/ (0, $9W9sm$react).forwardRef(function TableView(props, ref) {
    let { selectionStyle: selectionStyle, dragAndDropHooks: dragAndDropHooks } = props;
    let [showSelectionCheckboxes, setShowSelectionCheckboxes] = (0, $9W9sm$useState)(selectionStyle !== 'highlight');
    let isTableDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let state = (0, $9W9sm$useTableState)({
        ...props,
        showSelectionCheckboxes: showSelectionCheckboxes,
        showDragButtons: isTableDraggable,
        selectionBehavior: props.selectionStyle === 'highlight' ? 'replace' : 'toggle'
    });
    // If the selection behavior changes in state, we need to update showSelectionCheckboxes here due to the circular dependency...
    let shouldShowCheckboxes = state.selectionManager.selectionBehavior !== 'replace';
    if (shouldShowCheckboxes !== showSelectionCheckboxes) setShowSelectionCheckboxes(shouldShowCheckboxes);
    return /*#__PURE__*/ (0, $9W9sm$react).createElement((0, $bd013581c0a4b065$export$517e02184d273d69), {
        ...props,
        state: state,
        ref: ref
    });
});


export {$d14697b14e638114$export$b3c27e869d856b7 as TableView};
//# sourceMappingURL=TableView.module.js.map
