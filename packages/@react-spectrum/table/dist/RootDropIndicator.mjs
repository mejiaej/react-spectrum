import {useTableContext as $bd013581c0a4b065$export$3cb274deb6c2d854} from "./TableViewBase.mjs";
import $6tvhl$react, {useRef as $6tvhl$useRef} from "react";
import {useVisuallyHidden as $6tvhl$useVisuallyHidden} from "@react-aria/visually-hidden";

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


function $4e6fc36ba71ba405$export$d30a7814cfd4033e() {
    let { dropState: dropState, dragAndDropHooks: dragAndDropHooks, state: state } = (0, $bd013581c0a4b065$export$3cb274deb6c2d854)();
    let ref = (0, $6tvhl$useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'root'
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: 'root'
    });
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $6tvhl$useVisuallyHidden)();
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, $6tvhl$react).createElement("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden']
    }, /*#__PURE__*/ (0, $6tvhl$react).createElement("div", {
        role: "gridcell",
        "aria-selected": "false",
        "aria-colspan": state.collection.columns.length
    }, /*#__PURE__*/ (0, $6tvhl$react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicatorProps,
        ref: ref
    })));
}


export {$4e6fc36ba71ba405$export$d30a7814cfd4033e as RootDropIndicator};
//# sourceMappingURL=RootDropIndicator.module.js.map
