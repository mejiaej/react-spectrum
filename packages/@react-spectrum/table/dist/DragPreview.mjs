import "./vars.27f08d5f.css";
import $9Othb$table_vars_cssmodulejs from "./table_vars_css.mjs";
import "./table.11fc8462.css";
import $9Othb$table_cssmodulejs from "./table_css.mjs";
import {classNames as $9Othb$classNames} from "@react-spectrum/utils";
import {Flex as $9Othb$Flex} from "@react-spectrum/layout";
import $9Othb$react from "react";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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




function $daa6ead3d9d3506a$export$905ab40ac2179daa(props) {
    let { itemText: itemText, itemCount: itemCount, height: height, maxWidth: maxWidth } = props;
    let isDraggingMultiple = itemCount > 1;
    return /*#__PURE__*/ (0, $9Othb$react).createElement((0, $9Othb$Flex), {
        justifyContent: "space-between",
        height: height,
        maxWidth: maxWidth,
        UNSAFE_className: (0, $9Othb$classNames)((0, ($parcel$interopDefault($9Othb$table_vars_cssmodulejs))), 'spectrum-Table-row', (0, $9Othb$classNames)((0, ($parcel$interopDefault($9Othb$table_cssmodulejs))), 'react-spectrum-Table-row', 'react-spectrum-Table-row-dragPreview', {
            'react-spectrum-Table-row-dragPreview--multiple': isDraggingMultiple
        }))
    }, /*#__PURE__*/ (0, $9Othb$react).createElement("div", {
        className: (0, $9Othb$classNames)((0, ($parcel$interopDefault($9Othb$table_vars_cssmodulejs))), 'spectrum-Table-cell', (0, $9Othb$classNames)((0, ($parcel$interopDefault($9Othb$table_cssmodulejs))), 'react-spectrum-Table-cell'))
    }, /*#__PURE__*/ (0, $9Othb$react).createElement("span", {
        className: (0, $9Othb$classNames)((0, ($parcel$interopDefault($9Othb$table_vars_cssmodulejs))), 'spectrum-Table-cellContents')
    }, itemText)), isDraggingMultiple && /*#__PURE__*/ (0, $9Othb$react).createElement("div", {
        className: (0, $9Othb$classNames)((0, ($parcel$interopDefault($9Othb$table_cssmodulejs))), 'react-spectrum-Table-row-badge')
    }, itemCount));
}


export {$daa6ead3d9d3506a$export$905ab40ac2179daa as DragPreview};
//# sourceMappingURL=DragPreview.module.js.map
