var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $elu7H$reactjsxruntime = require("react/jsx-runtime");
var $elu7H$reactariacollections = require("@react-aria/collections");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SkeletonCollection", () => $f28b5a582c8ff5e1$export$4365333b6bb1c86b);
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


let $f28b5a582c8ff5e1$var$cache = new WeakMap();
const $f28b5a582c8ff5e1$export$4365333b6bb1c86b = (0, $elu7H$reactariacollections.createLeafComponent)('skeleton', (props, ref, node)=>{
    // Cache rendering based on node object identity. This allows the children function to randomize
    // its content (e.g. heights) and preserve on re-renders.
    // TODO: do we need a `dependencies` prop here?
    let cached = $f28b5a582c8ff5e1$var$cache.get(node);
    if (!cached) {
        cached = /*#__PURE__*/ (0, $elu7H$reactjsxruntime.jsx)((0, $5eb75e0c130e0669$exports.Skeleton), {
            isLoading: true,
            children: props.children()
        });
        $f28b5a582c8ff5e1$var$cache.set(node, cached);
    }
    return cached;
});


//# sourceMappingURL=SkeletonCollection.cjs.map
