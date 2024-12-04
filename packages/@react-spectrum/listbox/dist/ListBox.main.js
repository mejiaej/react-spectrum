var $60eb4b34c53310cb$exports = require("./ListBoxBase.main.js");
var $kvNjb$react = require("react");
var $kvNjb$reactspectrumutils = require("@react-spectrum/utils");
var $kvNjb$reactstatelylist = require("@react-stately/list");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ListBox", () => $582d86e45be55635$export$41f133550aa26f48);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $582d86e45be55635$export$41f133550aa26f48 = /*#__PURE__*/ (0, ($parcel$interopDefault($kvNjb$react))).forwardRef(function ListBox(props, ref) {
    let state = (0, $kvNjb$reactstatelylist.useListState)(props);
    let layout = (0, $60eb4b34c53310cb$exports.useListBoxLayout)();
    let domRef = (0, $kvNjb$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($kvNjb$react))).createElement((0, $60eb4b34c53310cb$exports.ListBoxBase), {
        ...props,
        ref: domRef,
        state: state,
        layout: layout
    });
});


//# sourceMappingURL=ListBox.main.js.map
