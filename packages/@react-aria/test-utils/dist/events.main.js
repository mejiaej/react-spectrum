var $jxdbS$testinglibraryreact = require("@testing-library/react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "triggerLongPress", () => $5a8bfe1663b8366d$export$3a22a5a9bc0fd3b);
$parcel$export(module.exports, "pressElement", () => $5a8bfe1663b8366d$export$6ffa3eb717517feb);
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
const $5a8bfe1663b8366d$export$4bd1d2d5ba6f5eaf = 500;
async function $5a8bfe1663b8366d$export$3a22a5a9bc0fd3b(opts) {
    // TODO: note that this only works if the code from installPointerEvent is called somewhere in the test BEFORE the
    // render. Perhaps we should rely on the user setting that up since I'm not sure there is a great way to set that up here in the
    // util before first render. Will need to document it well
    let { element: element, advanceTimer: advanceTimer, pointerOpts: pointerOpts = {} } = opts;
    await (0, $jxdbS$testinglibraryreact.fireEvent).pointerDown(element, {
        pointerType: 'mouse',
        ...pointerOpts
    });
    await (0, $jxdbS$testinglibraryreact.act)(async ()=>await advanceTimer($5a8bfe1663b8366d$export$4bd1d2d5ba6f5eaf));
    await (0, $jxdbS$testinglibraryreact.fireEvent).pointerUp(element, {
        pointerType: 'mouse',
        ...pointerOpts
    });
}
async function $5a8bfe1663b8366d$export$6ffa3eb717517feb(user, element, interactionType) {
    if (interactionType === 'mouse') await user.click(element);
    else if (interactionType === 'keyboard') {
        // TODO: For the keyboard flow, I wonder if it would be reasonable to just do fireEvent directly on the obtained row node or if we should
        // stick to simulting an actual user's keyboard operations as closely as possible
        // There are problems when using this approach though, actions like trying to trigger the select all checkbox and stuff behave oddly.
        (0, $jxdbS$testinglibraryreact.act)(()=>element.focus());
        await user.keyboard('[Space]');
    } else if (interactionType === 'touch') await user.pointer({
        target: element,
        keys: '[TouchA]'
    });
}


//# sourceMappingURL=events.main.js.map
