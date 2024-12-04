import {Skeleton as $5ad421ec19460c48$export$8f31e4c4a37b8e9c} from "../icons/Skeleton.mjs";
import {jsx as $iRmNJ$jsx} from "react/jsx-runtime";
import {createLeafComponent as $iRmNJ$createLeafComponent} from "@react-aria/collections";

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


let $00cf18afd94ad18c$var$cache = new WeakMap();
const $00cf18afd94ad18c$export$4365333b6bb1c86b = (0, $iRmNJ$createLeafComponent)('skeleton', (props, ref, node)=>{
    // Cache rendering based on node object identity. This allows the children function to randomize
    // its content (e.g. heights) and preserve on re-renders.
    // TODO: do we need a `dependencies` prop here?
    let cached = $00cf18afd94ad18c$var$cache.get(node);
    if (!cached) {
        cached = /*#__PURE__*/ (0, $iRmNJ$jsx)((0, $5ad421ec19460c48$export$8f31e4c4a37b8e9c), {
            isLoading: true,
            children: props.children()
        });
        $00cf18afd94ad18c$var$cache.set(node, cached);
    }
    return cached;
});


export {$00cf18afd94ad18c$export$4365333b6bb1c86b as SkeletonCollection};
//# sourceMappingURL=SkeletonCollection.mjs.map
