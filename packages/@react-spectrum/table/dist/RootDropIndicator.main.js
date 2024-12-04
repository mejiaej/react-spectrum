var $e39c6de4eb69450d$exports = require("./TableViewBase.main.js");
var $ijPMf$react = require("react");
var $ijPMf$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "RootDropIndicator", () => $4a98adf416b1ae5d$export$d30a7814cfd4033e);
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


function $4a98adf416b1ae5d$export$d30a7814cfd4033e() {
    let { dropState: dropState, dragAndDropHooks: dragAndDropHooks, state: state } = (0, $e39c6de4eb69450d$exports.useTableContext)();
    let ref = (0, $ijPMf$react.useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'root'
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: 'root'
    });
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $ijPMf$reactariavisuallyhidden.useVisuallyHidden)();
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($ijPMf$react))).createElement("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden']
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($ijPMf$react))).createElement("div", {
        role: "gridcell",
        "aria-selected": "false",
        "aria-colspan": state.collection.columns.length
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($ijPMf$react))).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicatorProps,
        ref: ref
    })));
}


//# sourceMappingURL=RootDropIndicator.main.js.map
