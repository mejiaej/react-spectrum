require("./vars.27f08d5f.css");
var $982885d0a34882ea$exports = require("./table_vars_css.main.js");
require("./table.11fc8462.css");
var $4afcd54cfd94dbb9$exports = require("./table_css.main.js");
var $4Sj2U$reactspectrumutils = require("@react-spectrum/utils");
var $4Sj2U$reactspectrumlayout = require("@react-spectrum/layout");
var $4Sj2U$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DragPreview", () => $f65d44d222cc509b$export$905ab40ac2179daa);
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




function $f65d44d222cc509b$export$905ab40ac2179daa(props) {
    let { itemText: itemText, itemCount: itemCount, height: height, maxWidth: maxWidth } = props;
    let isDraggingMultiple = itemCount > 1;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($4Sj2U$react))).createElement((0, $4Sj2U$reactspectrumlayout.Flex), {
        justifyContent: "space-between",
        height: height,
        maxWidth: maxWidth,
        UNSAFE_className: (0, $4Sj2U$reactspectrumutils.classNames)((0, ($parcel$interopDefault($982885d0a34882ea$exports))), 'spectrum-Table-row', (0, $4Sj2U$reactspectrumutils.classNames)((0, ($parcel$interopDefault($4afcd54cfd94dbb9$exports))), 'react-spectrum-Table-row', 'react-spectrum-Table-row-dragPreview', {
            'react-spectrum-Table-row-dragPreview--multiple': isDraggingMultiple
        }))
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($4Sj2U$react))).createElement("div", {
        className: (0, $4Sj2U$reactspectrumutils.classNames)((0, ($parcel$interopDefault($982885d0a34882ea$exports))), 'spectrum-Table-cell', (0, $4Sj2U$reactspectrumutils.classNames)((0, ($parcel$interopDefault($4afcd54cfd94dbb9$exports))), 'react-spectrum-Table-cell'))
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($4Sj2U$react))).createElement("span", {
        className: (0, $4Sj2U$reactspectrumutils.classNames)((0, ($parcel$interopDefault($982885d0a34882ea$exports))), 'spectrum-Table-cellContents')
    }, itemText)), isDraggingMultiple && /*#__PURE__*/ (0, ($parcel$interopDefault($4Sj2U$react))).createElement("div", {
        className: (0, $4Sj2U$reactspectrumutils.classNames)((0, ($parcel$interopDefault($4afcd54cfd94dbb9$exports))), 'react-spectrum-Table-row-badge')
    }, itemCount));
}


//# sourceMappingURL=DragPreview.main.js.map
