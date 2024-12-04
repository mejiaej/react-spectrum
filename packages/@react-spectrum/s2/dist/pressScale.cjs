var $d7LNk$reactariacomponents = require("react-aria-components");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "pressScale", () => $2061c83559b50a66$export$56e8cba416805d8d);
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
function $2061c83559b50a66$export$56e8cba416805d8d(ref, style) {
    return (0, $d7LNk$reactariacomponents.composeRenderProps)(style, (style, renderProps)=>{
        if (renderProps.isPressed && ref.current) {
            let { width: width = 0, height: height = 0 } = ref.current.getBoundingClientRect() ?? {};
            return {
                ...style,
                willChange: `${style?.willChange ?? ''} transform`,
                transform: `${style?.transform ?? ''} perspective(${Math.max(height, width / 3, 24)}px) translate3d(0, 0, -2px)`
            };
        } else return {
            ...style,
            willChange: `${style?.willChange ?? ''} transform`
        };
    });
}


//# sourceMappingURL=pressScale.cjs.map
