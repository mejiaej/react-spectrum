var $15e4b71f2b6c4964$exports = require("./combobox.main.js");
var $30ee8e379774bea4$exports = require("./gridlist.main.js");
var $31965f39292c8e99$exports = require("./menu.main.js");
var $0e568517a25183a7$exports = require("./userEventMaps.main.js");
var $b97d5a42df7c75b2$exports = require("./select.main.js");
var $80a9def682ac1297$exports = require("./table.main.js");
var $iYqJR$testinglibraryuserevent = require("@testing-library/user-event");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "User", () => $4168d511756883ff$export$1f44aaf2ec115b54);
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






let $4168d511756883ff$var$keyToUtil = {
    'Select': (0, $b97d5a42df7c75b2$exports.SelectTester),
    'Table': (0, $80a9def682ac1297$exports.TableTester),
    'Menu': (0, $31965f39292c8e99$exports.MenuTester),
    'ComboBox': (0, $15e4b71f2b6c4964$exports.ComboBoxTester),
    'GridList': (0, $30ee8e379774bea4$exports.GridListTester)
};
let $4168d511756883ff$var$defaultAdvanceTimer = async (waitTime)=>await new Promise((resolve)=>setTimeout(resolve, waitTime));
class $4168d511756883ff$export$1f44aaf2ec115b54 {
    createTester(patternName, opts) {
        return new $4168d511756883ff$var$keyToUtil[patternName]({
            user: this.user,
            interactionType: this.interactionType,
            advanceTimer: this.advanceTimer,
            ...opts
        });
    }
    constructor(opts = {}){
        let { interactionType: interactionType, advanceTimer: advanceTimer } = opts;
        this.user = (0, ($parcel$interopDefault($iYqJR$testinglibraryuserevent))).setup({
            delay: null,
            pointerMap: $0e568517a25183a7$exports.pointerMap
        });
        this.interactionType = interactionType;
        this.advanceTimer = advanceTimer || $4168d511756883ff$var$defaultAdvanceTimer;
    }
}


//# sourceMappingURL=user.main.js.map
