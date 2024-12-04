import {useMediaQuery as $cqUHD$useMediaQuery} from "@react-spectrum/utils";

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
function $859432f3b3573fcb$export$736bf165441b18c7() {
    return (0, $cqUHD$useMediaQuery)('(max-width: 640px)');
}
function $859432f3b3573fcb$export$a8d2043b2d807f4d() {
    let matchesFine = (0, $cqUHD$useMediaQuery)('not ((hover: hover) and (pointer: fine))');
    if (matchesFine) return 'large';
    return 'medium';
}


export {$859432f3b3573fcb$export$736bf165441b18c7 as useIsMobileDevice, $859432f3b3573fcb$export$a8d2043b2d807f4d as useScale};
//# sourceMappingURL=utils.mjs.map
