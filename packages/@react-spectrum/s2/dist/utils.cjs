var $1ieZL$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useScale", () => $ee7b4c497f520c08$export$a8d2043b2d807f4d);
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
function $ee7b4c497f520c08$export$736bf165441b18c7() {
    return (0, $1ieZL$reactspectrumutils.useMediaQuery)('(max-width: 640px)');
}
function $ee7b4c497f520c08$export$a8d2043b2d807f4d() {
    let matchesFine = (0, $1ieZL$reactspectrumutils.useMediaQuery)('not ((hover: hover) and (pointer: fine))');
    if (matchesFine) return 'large';
    return 'medium';
}


//# sourceMappingURL=utils.cjs.map
