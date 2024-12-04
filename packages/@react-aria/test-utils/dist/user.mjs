import {ComboBoxTester as $dab75f394483aa9c$export$f97e14e96d71ab3b} from "./combobox.mjs";
import {GridListTester as $5ca9e9228f508f75$export$93a85aaed9fabd83} from "./gridlist.mjs";
import {MenuTester as $74b93f0617179929$export$f73bbc9212ed861e} from "./menu.mjs";
import {pointerMap as $50ecfb18069ec897$export$7dbde2c4caaa8d35} from "./userEventMaps.mjs";
import {SelectTester as $4350df3e19e40e36$export$d1859707465446a9} from "./select.mjs";
import {TableTester as $6d1e4cf220920c37$export$4c6a9d6ae3b0086} from "./table.mjs";
import $gmkhN$testinglibraryuserevent from "@testing-library/user-event";

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






let $0d71b4e9cc4df40a$var$keyToUtil = {
    'Select': (0, $4350df3e19e40e36$export$d1859707465446a9),
    'Table': (0, $6d1e4cf220920c37$export$4c6a9d6ae3b0086),
    'Menu': (0, $74b93f0617179929$export$f73bbc9212ed861e),
    'ComboBox': (0, $dab75f394483aa9c$export$f97e14e96d71ab3b),
    'GridList': (0, $5ca9e9228f508f75$export$93a85aaed9fabd83)
};
let $0d71b4e9cc4df40a$var$defaultAdvanceTimer = async (waitTime)=>await new Promise((resolve)=>setTimeout(resolve, waitTime));
class $0d71b4e9cc4df40a$export$1f44aaf2ec115b54 {
    createTester(patternName, opts) {
        return new $0d71b4e9cc4df40a$var$keyToUtil[patternName]({
            user: this.user,
            interactionType: this.interactionType,
            advanceTimer: this.advanceTimer,
            ...opts
        });
    }
    constructor(opts = {}){
        let { interactionType: interactionType, advanceTimer: advanceTimer } = opts;
        this.user = (0, $gmkhN$testinglibraryuserevent).setup({
            delay: null,
            pointerMap: $50ecfb18069ec897$export$7dbde2c4caaa8d35
        });
        this.interactionType = interactionType;
        this.advanceTimer = advanceTimer || $0d71b4e9cc4df40a$var$defaultAdvanceTimer;
    }
}


export {$0d71b4e9cc4df40a$export$1f44aaf2ec115b54 as User};
//# sourceMappingURL=user.module.js.map
