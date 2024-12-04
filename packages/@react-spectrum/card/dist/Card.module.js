import {CardBase as $643dd8fa80926f94$export$7a6ccaf429ad93a8} from "./CardBase.module.js";
import {useCardViewContext as $8d180a244893de14$export$fea0b38586ec8f13} from "./CardViewContext.module.js";
import $kaPls$react, {forwardRef as $kaPls$forwardRef} from "react";

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


let $d2d1c099b89e366a$var$Card = /*#__PURE__*/ (0, $kaPls$forwardRef)((props, ref)=>{
    let context = (0, $8d180a244893de14$export$fea0b38586ec8f13)();
    if (context !== null) return null;
    else return /*#__PURE__*/ (0, $kaPls$react).createElement((0, $643dd8fa80926f94$export$7a6ccaf429ad93a8), {
        ...props,
        ref: ref
    });
});
// @ts-ignore
$d2d1c099b89e366a$var$Card.getCollectionNode = function* getCollectionNode(props) {
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
let $d2d1c099b89e366a$export$60332b2344f7fe41 = $d2d1c099b89e366a$var$Card;


export {$d2d1c099b89e366a$export$60332b2344f7fe41 as Card};
//# sourceMappingURL=Card.module.js.map
