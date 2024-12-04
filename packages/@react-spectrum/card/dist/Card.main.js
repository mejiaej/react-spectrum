var $7888205ff7de382f$exports = require("./CardBase.main.js");
var $e57ab98cef2f01a5$exports = require("./CardViewContext.main.js");
var $495a5$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Card", () => $6b630ac4b78ba7f3$export$60332b2344f7fe41);
// @ts-nocheck
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


let $6b630ac4b78ba7f3$var$Card = /*#__PURE__*/ (0, $495a5$react.forwardRef)((props, ref)=>{
    let context = (0, $e57ab98cef2f01a5$exports.useCardViewContext)();
    if (context !== null) return null;
    else return /*#__PURE__*/ (0, ($parcel$interopDefault($495a5$react))).createElement((0, $7888205ff7de382f$exports.CardBase), {
        ...props,
        ref: ref
    });
});
// @ts-ignore
$6b630ac4b78ba7f3$var$Card.getCollectionNode = function* getCollectionNode(props) {
    let { children: children, textValue: textValue } = props;
    yield {
        type: 'item',
        props: props,
        rendered: children,
        'aria-label': props['aria-label'],
        hasChildNodes: false,
        textValue: textValue
    };
};
let $6b630ac4b78ba7f3$export$60332b2344f7fe41 = $6b630ac4b78ba7f3$var$Card;


//# sourceMappingURL=Card.main.js.map
