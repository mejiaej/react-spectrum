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
 */ /**
 * Mocks screen width to simulate mobile experience, useful for testing Tray rendering.
 * @param width Optional width to apply. Automatically clamped to the maximum value allowed for mobile rendering.
 */ function $64c3935c8d6a7115$export$54df5c253b80fcbe(width = 700) {
    jest.spyOn(window.screen, 'width', 'get').mockImplementation(()=>Math.min(Math.max(width, 0), 700));
}
function $64c3935c8d6a7115$export$ff7d7f7ce6432302(width = 701) {
    jest.spyOn(window.screen, 'width', 'get').mockImplementation(()=>Math.max(width, 701));
}


export {$64c3935c8d6a7115$export$54df5c253b80fcbe as simulateMobile, $64c3935c8d6a7115$export$ff7d7f7ce6432302 as simulateDesktop};
//# sourceMappingURL=testSetup.module.js.map
