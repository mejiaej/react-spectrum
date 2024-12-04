import {ListBoxBase as $3247d4a89e6094e9$export$1afdcf349979fb7e, useListBoxLayout as $3247d4a89e6094e9$export$25768ea656ae32a7} from "./ListBoxBase.mjs";
import $7rJGh$react from "react";
import {useDOMRef as $7rJGh$useDOMRef} from "@react-spectrum/utils";
import {useListState as $7rJGh$useListState} from "@react-stately/list";

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



const $3136257018b1a220$export$41f133550aa26f48 = /*#__PURE__*/ (0, $7rJGh$react).forwardRef(function ListBox(props, ref) {
    let state = (0, $7rJGh$useListState)(props);
    let layout = (0, $3247d4a89e6094e9$export$25768ea656ae32a7)();
    let domRef = (0, $7rJGh$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $7rJGh$react).createElement((0, $3247d4a89e6094e9$export$1afdcf349979fb7e), {
        ...props,
        ref: domRef,
        state: state,
        layout: layout
    });
});


export {$3136257018b1a220$export$41f133550aa26f48 as ListBox};
//# sourceMappingURL=ListBox.module.js.map
