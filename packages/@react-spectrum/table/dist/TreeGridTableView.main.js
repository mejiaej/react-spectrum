var $e39c6de4eb69450d$exports = require("./TableViewBase.main.js");
var $5aNwD$react = require("react");
var $5aNwD$reactstatelytable = require("@react-stately/table");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TreeGridTableView", () => $e770cde7e93c7e49$export$5669566ac2c90964);
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


const $e770cde7e93c7e49$export$5669566ac2c90964 = /*#__PURE__*/ (0, ($parcel$interopDefault($5aNwD$react))).forwardRef(function TreeGridTableView(props, ref) {
    let { selectionStyle: selectionStyle, dragAndDropHooks: dragAndDropHooks } = props;
    let [showSelectionCheckboxes, setShowSelectionCheckboxes] = (0, $5aNwD$react.useState)(selectionStyle !== 'highlight');
    let isTableDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let state = (0, $5aNwD$reactstatelytable.UNSTABLE_useTreeGridState)({
        ...props,
        showSelectionCheckboxes: showSelectionCheckboxes,
        showDragButtons: isTableDraggable,
        selectionBehavior: props.selectionStyle === 'highlight' ? 'replace' : 'toggle'
    });
    // If the selection behavior changes in state, we need to update showSelectionCheckboxes here due to the circular dependency...
    let shouldShowCheckboxes = state.selectionManager.selectionBehavior !== 'replace';
    if (shouldShowCheckboxes !== showSelectionCheckboxes) setShowSelectionCheckboxes(shouldShowCheckboxes);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($5aNwD$react))).createElement((0, $e39c6de4eb69450d$exports.TableViewBase), {
        ...props,
        state: state,
        ref: ref
    });
});


//# sourceMappingURL=TreeGridTableView.main.js.map
