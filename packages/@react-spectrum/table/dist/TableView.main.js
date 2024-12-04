var $e39c6de4eb69450d$exports = require("./TableViewBase.main.js");
var $3lcIF$react = require("react");
var $3lcIF$reactstatelytable = require("@react-stately/table");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TableView", () => $be8a9c035a82f788$export$b3c27e869d856b7);
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


const $be8a9c035a82f788$export$b3c27e869d856b7 = /*#__PURE__*/ (0, ($parcel$interopDefault($3lcIF$react))).forwardRef(function TableView(props, ref) {
    let { selectionStyle: selectionStyle, dragAndDropHooks: dragAndDropHooks } = props;
    let [showSelectionCheckboxes, setShowSelectionCheckboxes] = (0, $3lcIF$react.useState)(selectionStyle !== 'highlight');
    let isTableDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let state = (0, $3lcIF$reactstatelytable.useTableState)({
        ...props,
        showSelectionCheckboxes: showSelectionCheckboxes,
        showDragButtons: isTableDraggable,
        selectionBehavior: props.selectionStyle === 'highlight' ? 'replace' : 'toggle'
    });
    // If the selection behavior changes in state, we need to update showSelectionCheckboxes here due to the circular dependency...
    let shouldShowCheckboxes = state.selectionManager.selectionBehavior !== 'replace';
    if (shouldShowCheckboxes !== showSelectionCheckboxes) setShowSelectionCheckboxes(shouldShowCheckboxes);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($3lcIF$react))).createElement((0, $e39c6de4eb69450d$exports.TableViewBase), {
        ...props,
        state: state,
        ref: ref
    });
});


//# sourceMappingURL=TableView.main.js.map
