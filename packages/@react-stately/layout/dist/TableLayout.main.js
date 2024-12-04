var $fe69e47e38ed0ac4$exports = require("./ListLayout.main.js");
var $9lycG$reactstatelycollections = require("@react-stately/collections");
var $9lycG$reactstatelyvirtualizer = require("@react-stately/virtualizer");
var $9lycG$reactstatelytable = require("@react-stately/table");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TableLayout", () => $67c493497dcda343$export$62444c3c724b1b20);
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



const $67c493497dcda343$var$DEFAULT_ROW_HEIGHT = 48;
class $67c493497dcda343$export$62444c3c724b1b20 extends (0, $fe69e47e38ed0ac4$exports.ListLayout) {
    // Backward compatibility for subclassing.
    get collection() {
        return this.virtualizer.collection;
    }
    columnsChanged(newCollection, oldCollection) {
        return !oldCollection || newCollection.columns !== oldCollection.columns && newCollection.columns.length !== oldCollection.columns.length || newCollection.columns.some((c, i)=>c.key !== oldCollection.columns[i].key || c.props.width !== oldCollection.columns[i].props.width || c.props.minWidth !== oldCollection.columns[i].props.minWidth || c.props.maxWidth !== oldCollection.columns[i].props.maxWidth);
    }
    update(invalidationContext) {
        var _invalidationContext_layoutOptions;
        let newCollection = this.virtualizer.collection;
        // If columnWidths were provided via layoutOptions, update those.
        // Otherwise, calculate column widths ourselves.
        if ((_invalidationContext_layoutOptions = invalidationContext.layoutOptions) === null || _invalidationContext_layoutOptions === void 0 ? void 0 : _invalidationContext_layoutOptions.columnWidths) {
            if (invalidationContext.layoutOptions.columnWidths !== this.columnWidths) {
                this.columnWidths = invalidationContext.layoutOptions.columnWidths;
                invalidationContext.sizeChanged = true;
            }
        } else if (invalidationContext.sizeChanged || this.columnsChanged(newCollection, this.lastCollection)) {
            let columnLayout = new (0, $9lycG$reactstatelytable.TableColumnLayout)({});
            this.columnWidths = columnLayout.buildColumnWidths(this.virtualizer.visibleRect.width, newCollection, new Map());
            invalidationContext.sizeChanged = true;
        }
        super.update(invalidationContext);
    }
    buildCollection() {
        this.stickyColumnIndices = [];
        let collection = this.virtualizer.collection;
        for (let column of collection.columns)// The selection cell and any other sticky columns always need to be visible.
        // In addition, row headers need to be in the DOM for accessibility labeling.
        if (this.isStickyColumn(column) || collection.rowHeaderColumnKeys.has(column.key)) this.stickyColumnIndices.push(column.index);
        let header = this.buildTableHeader();
        this.layoutNodes.set(header.layoutInfo.key, header);
        let body = this.buildBody(header.layoutInfo.rect.height);
        this.lastPersistedKeys = null;
        body.layoutInfo.rect.width = Math.max(header.layoutInfo.rect.width, body.layoutInfo.rect.width);
        this.contentSize = new (0, $9lycG$reactstatelyvirtualizer.Size)(body.layoutInfo.rect.width, body.layoutInfo.rect.maxY);
        return [
            header,
            body
        ];
    }
    buildTableHeader() {
        var _collection_head;
        let collection = this.virtualizer.collection;
        let rect = new (0, $9lycG$reactstatelyvirtualizer.Rect)(0, 0, 0, 0);
        var _collection_head_key;
        let layoutInfo = new (0, $9lycG$reactstatelyvirtualizer.LayoutInfo)('header', (_collection_head_key = (_collection_head = collection.head) === null || _collection_head === void 0 ? void 0 : _collection_head.key) !== null && _collection_head_key !== void 0 ? _collection_head_key : 'header', rect);
        layoutInfo.isSticky = true;
        layoutInfo.zIndex = 1;
        let y = 0;
        let width = 0;
        let children = [];
        for (let headerRow of collection.headerRows){
            let layoutNode = this.buildChild(headerRow, 0, y, layoutInfo.key);
            layoutNode.layoutInfo.parentKey = layoutInfo.key;
            y = layoutNode.layoutInfo.rect.maxY;
            width = Math.max(width, layoutNode.layoutInfo.rect.width);
            layoutNode.index = children.length;
            children.push(layoutNode);
        }
        rect.width = width;
        rect.height = y;
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: layoutInfo.rect,
            node: collection.head
        };
    }
    buildHeaderRow(headerRow, x, y) {
        let rect = new (0, $9lycG$reactstatelyvirtualizer.Rect)(0, y, 0, 0);
        let row = new (0, $9lycG$reactstatelyvirtualizer.LayoutInfo)('headerrow', headerRow.key, rect);
        let height = 0;
        let columns = [];
        for (let cell of (0, $9lycG$reactstatelycollections.getChildNodes)(headerRow, this.virtualizer.collection)){
            let layoutNode = this.buildChild(cell, x, y, row.key);
            layoutNode.layoutInfo.parentKey = row.key;
            x = layoutNode.layoutInfo.rect.maxX;
            height = Math.max(height, layoutNode.layoutInfo.rect.height);
            layoutNode.index = columns.length;
            columns.push(layoutNode);
        }
        for (let [i, layout] of columns.entries())layout.layoutInfo.zIndex = columns.length - i + 1;
        this.setChildHeights(columns, height);
        rect.height = height;
        rect.width = x;
        return {
            layoutInfo: row,
            children: columns,
            validRect: rect,
            node: headerRow
        };
    }
    setChildHeights(children, height) {
        for (let child of children)if (child.layoutInfo.rect.height !== height) {
            // Need to copy the layout info before we mutate it.
            child.layoutInfo = child.layoutInfo.copy();
            child.layoutInfo.rect.height = height;
        }
    }
    // used to get the column widths when rendering to the DOM
    getRenderedColumnWidth(node) {
        let collection = this.virtualizer.collection;
        var _node_colspan;
        let colspan = (_node_colspan = node.colspan) !== null && _node_colspan !== void 0 ? _node_colspan : 1;
        var _node_colIndex;
        let colIndex = (_node_colIndex = node.colIndex) !== null && _node_colIndex !== void 0 ? _node_colIndex : node.index;
        let width = 0;
        for(let i = colIndex; i < colIndex + colspan; i++){
            let column = collection.columns[i];
            var _this_columnWidths_get;
            if ((column === null || column === void 0 ? void 0 : column.key) != null) width += (_this_columnWidths_get = this.columnWidths.get(column.key)) !== null && _this_columnWidths_get !== void 0 ? _this_columnWidths_get : 0;
        }
        return width;
    }
    getEstimatedHeight(node, width, height, estimatedHeight) {
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (height == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall collection view changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                height = previousLayoutNode.layoutInfo.rect.height;
                isEstimated = node !== previousLayoutNode.node || width !== previousLayoutNode.layoutInfo.rect.width || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                height = estimatedHeight !== null && estimatedHeight !== void 0 ? estimatedHeight : $67c493497dcda343$var$DEFAULT_ROW_HEIGHT;
                isEstimated = true;
            }
        }
        return {
            height: height,
            isEstimated: isEstimated
        };
    }
    getEstimatedRowHeight() {
        var _this_rowHeight, _ref;
        return (_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $67c493497dcda343$var$DEFAULT_ROW_HEIGHT;
    }
    buildColumn(node, x, y) {
        let width = this.getRenderedColumnWidth(node);
        var _this_headingHeight, _this_estimatedHeadingHeight;
        let { height: height, isEstimated: isEstimated } = this.getEstimatedHeight(node, width, (_this_headingHeight = this.headingHeight) !== null && _this_headingHeight !== void 0 ? _this_headingHeight : this.rowHeight, (_this_estimatedHeadingHeight = this.estimatedHeadingHeight) !== null && _this_estimatedHeadingHeight !== void 0 ? _this_estimatedHeadingHeight : this.estimatedRowHeight);
        let rect = new (0, $9lycG$reactstatelyvirtualizer.Rect)(x, y, width, height);
        let layoutInfo = new (0, $9lycG$reactstatelyvirtualizer.LayoutInfo)(node.type, node.key, rect);
        layoutInfo.isSticky = this.isStickyColumn(node);
        layoutInfo.zIndex = layoutInfo.isSticky ? 2 : 1;
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo,
            children: [],
            validRect: layoutInfo.rect,
            node: node
        };
    }
    // For subclasses.
    // eslint-disable-next-line
    isStickyColumn(node) {
        return false;
    }
    buildBody(y) {
        let collection = this.virtualizer.collection;
        let rect = new (0, $9lycG$reactstatelyvirtualizer.Rect)(0, y, 0, 0);
        let layoutInfo = new (0, $9lycG$reactstatelyvirtualizer.LayoutInfo)('rowgroup', collection.body.key, rect);
        let startY = y;
        let skipped = 0;
        let width = 0;
        let children = [];
        let rowHeight = this.getEstimatedRowHeight();
        for (let node of (0, $9lycG$reactstatelycollections.getChildNodes)(collection.body, collection)){
            // Skip rows before the valid rectangle unless they are already cached.
            if (y + rowHeight < this.requestedRect.y && !this.isValid(node, y)) {
                y += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.buildChild(node, 0, y, layoutInfo.key);
            layoutNode.layoutInfo.parentKey = layoutInfo.key;
            layoutNode.index = children.length;
            y = layoutNode.layoutInfo.rect.maxY;
            width = Math.max(width, layoutNode.layoutInfo.rect.width);
            children.push(layoutNode);
            if (y > this.requestedRect.maxY) {
                // Estimate the remaining height for rows that we don't need to layout right now.
                y += (collection.size - (skipped + children.length)) * rowHeight;
                break;
            }
        }
        if (children.length === 0) y = this.virtualizer.visibleRect.maxY;
        rect.width = width;
        rect.height = y - startY;
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node: collection.body
        };
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'headerrow':
                return this.buildHeaderRow(node, x, y);
            case 'item':
                return this.buildRow(node, x, y);
            case 'column':
            case 'placeholder':
                return this.buildColumn(node, x, y);
            case 'cell':
                return this.buildCell(node, x, y);
            case 'loader':
                return this.buildLoader(node, x, y);
            default:
                throw new Error('Unknown node type ' + node.type);
        }
    }
    buildRow(node, x, y) {
        var _collection_head;
        let collection = this.virtualizer.collection;
        let rect = new (0, $9lycG$reactstatelyvirtualizer.Rect)(x, y, 0, 0);
        let layoutInfo = new (0, $9lycG$reactstatelyvirtualizer.LayoutInfo)('row', node.key, rect);
        let children = [];
        let height = 0;
        for (let child of (0, $9lycG$reactstatelycollections.getChildNodes)(node, collection))if (child.type === 'cell') {
            if (x > this.requestedRect.maxX) {
                // Adjust existing cached layoutInfo to ensure that it is out of view.
                // This can happen due to column resizing.
                let layoutNode = this.layoutNodes.get(child.key);
                if (layoutNode) {
                    layoutNode.layoutInfo.rect.x = x;
                    x += layoutNode.layoutInfo.rect.width;
                } else break;
            } else {
                let layoutNode = this.buildChild(child, x, y, layoutInfo.key);
                x = layoutNode.layoutInfo.rect.maxX;
                height = Math.max(height, layoutNode.layoutInfo.rect.height);
                layoutNode.index = children.length;
                children.push(layoutNode);
            }
        }
        this.setChildHeights(children, height);
        var _collection_head_key;
        rect.width = this.layoutNodes.get((_collection_head_key = (_collection_head = collection.head) === null || _collection_head === void 0 ? void 0 : _collection_head.key) !== null && _collection_head_key !== void 0 ? _collection_head_key : 'header').layoutInfo.rect.width;
        rect.height = height;
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: rect.intersection(this.requestedRect),
            node: node
        };
    }
    buildCell(node, x, y) {
        let width = this.getRenderedColumnWidth(node);
        let { height: height, isEstimated: isEstimated } = this.getEstimatedHeight(node, width, this.rowHeight, this.estimatedRowHeight);
        let rect = new (0, $9lycG$reactstatelyvirtualizer.Rect)(x, y, width, height);
        let layoutInfo = new (0, $9lycG$reactstatelyvirtualizer.LayoutInfo)(node.type, node.key, rect);
        layoutInfo.isSticky = this.isStickyColumn(node);
        layoutInfo.zIndex = layoutInfo.isSticky ? 2 : 1;
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo,
            children: [],
            validRect: rect,
            node: node
        };
    }
    getVisibleLayoutInfos(rect) {
        // Adjust rect to keep number of visible rows consistent.
        // (only if height > 1 for getDropTargetFromPoint)
        if (rect.height > 1) {
            let rowHeight = this.getEstimatedRowHeight();
            rect.y = Math.floor(rect.y / rowHeight) * rowHeight;
            rect.height = Math.ceil(rect.height / rowHeight) * rowHeight;
        }
        // If layout hasn't yet been done for the requested rect, union the
        // new rect with the existing valid rect, and recompute.
        this.layoutIfNeeded(rect);
        let res = [];
        this.buildPersistedIndices();
        for (let node of this.rootNodes){
            res.push(node.layoutInfo);
            this.addVisibleLayoutInfos(res, node, rect);
        }
        return res;
    }
    addVisibleLayoutInfos(res, node, rect) {
        if (!node.children || node.children.length === 0) return;
        switch(node.layoutInfo.type){
            case 'header':
                for (let child of node.children){
                    res.push(child.layoutInfo);
                    this.addVisibleLayoutInfos(res, child, rect);
                }
                break;
            case 'rowgroup':
                {
                    let firstVisibleRow = this.binarySearch(node.children, rect.topLeft, 'y');
                    let lastVisibleRow = this.binarySearch(node.children, rect.bottomRight, 'y');
                    // Add persisted rows before the visible rows.
                    let persistedRowIndices = this.persistedIndices.get(node.layoutInfo.key);
                    let persistIndex = 0;
                    while(persistedRowIndices && persistIndex < persistedRowIndices.length && persistedRowIndices[persistIndex] < firstVisibleRow){
                        let idx = persistedRowIndices[persistIndex];
                        if (idx < node.children.length) {
                            res.push(node.children[idx].layoutInfo);
                            this.addVisibleLayoutInfos(res, node.children[idx], rect);
                        }
                        persistIndex++;
                    }
                    for(let i = firstVisibleRow; i <= lastVisibleRow; i++){
                        // Skip persisted rows that overlap with visible cells.
                        while(persistedRowIndices && persistIndex < persistedRowIndices.length && persistedRowIndices[persistIndex] < i)persistIndex++;
                        res.push(node.children[i].layoutInfo);
                        this.addVisibleLayoutInfos(res, node.children[i], rect);
                    }
                    // Add persisted rows after the visible rows.
                    while(persistedRowIndices && persistIndex < persistedRowIndices.length){
                        let idx = persistedRowIndices[persistIndex++];
                        if (idx < node.children.length) {
                            res.push(node.children[idx].layoutInfo);
                            this.addVisibleLayoutInfos(res, node.children[idx], rect);
                        }
                    }
                    break;
                }
            case 'headerrow':
            case 'row':
                {
                    let firstVisibleCell = this.binarySearch(node.children, rect.topLeft, 'x');
                    let lastVisibleCell = this.binarySearch(node.children, rect.topRight, 'x');
                    let stickyIndex = 0;
                    // Add persisted/sticky cells before the visible cells.
                    let persistedCellIndices = this.persistedIndices.get(node.layoutInfo.key) || this.stickyColumnIndices;
                    while(stickyIndex < persistedCellIndices.length && persistedCellIndices[stickyIndex] < firstVisibleCell){
                        let idx = persistedCellIndices[stickyIndex];
                        if (idx < node.children.length) res.push(node.children[idx].layoutInfo);
                        stickyIndex++;
                    }
                    for(let i = firstVisibleCell; i <= lastVisibleCell; i++){
                        // Skip sticky cells that overlap with visible cells.
                        while(stickyIndex < persistedCellIndices.length && persistedCellIndices[stickyIndex] < i)stickyIndex++;
                        res.push(node.children[i].layoutInfo);
                    }
                    // Add any remaining sticky cells after the visible cells.
                    while(stickyIndex < persistedCellIndices.length){
                        let idx = persistedCellIndices[stickyIndex++];
                        if (idx < node.children.length) res.push(node.children[idx].layoutInfo);
                    }
                    break;
                }
            default:
                throw new Error('Unknown node type ' + node.layoutInfo.type);
        }
    }
    binarySearch(items, point, axis) {
        let low = 0;
        let high = items.length - 1;
        while(low <= high){
            let mid = low + high >> 1;
            let item = items[mid];
            if (axis === 'x' && item.layoutInfo.rect.maxX <= point.x || axis === 'y' && item.layoutInfo.rect.maxY <= point.y) low = mid + 1;
            else if (axis === 'x' && item.layoutInfo.rect.x > point.x || axis === 'y' && item.layoutInfo.rect.y > point.y) high = mid - 1;
            else return mid;
        }
        return Math.max(0, Math.min(items.length - 1, low));
    }
    buildPersistedIndices() {
        if (this.virtualizer.persistedKeys === this.lastPersistedKeys) return;
        this.lastPersistedKeys = this.virtualizer.persistedKeys;
        this.persistedIndices.clear();
        // Build a map of parentKey => indices of children to persist.
        for (let key of this.virtualizer.persistedKeys){
            var _this_layoutNodes_get;
            let layoutInfo = (_this_layoutNodes_get = this.layoutNodes.get(key)) === null || _this_layoutNodes_get === void 0 ? void 0 : _this_layoutNodes_get.layoutInfo;
            // Walk up ancestors so parents are also persisted if children are.
            while(layoutInfo && layoutInfo.parentKey){
                var _this_layoutNodes_get1, _this_layoutNodes_get2;
                let collectionNode = this.virtualizer.collection.getItem(layoutInfo.key);
                let indices = this.persistedIndices.get(layoutInfo.parentKey);
                if (!indices) {
                    // stickyColumnIndices are always persisted along with any cells from persistedKeys.
                    indices = (collectionNode === null || collectionNode === void 0 ? void 0 : collectionNode.type) === 'cell' || (collectionNode === null || collectionNode === void 0 ? void 0 : collectionNode.type) === 'column' ? [
                        ...this.stickyColumnIndices
                    ] : [];
                    this.persistedIndices.set(layoutInfo.parentKey, indices);
                }
                let index = (_this_layoutNodes_get1 = this.layoutNodes.get(layoutInfo.key)) === null || _this_layoutNodes_get1 === void 0 ? void 0 : _this_layoutNodes_get1.index;
                if (index != null && !indices.includes(index)) indices.push(index);
                layoutInfo = (_this_layoutNodes_get2 = this.layoutNodes.get(layoutInfo.parentKey)) === null || _this_layoutNodes_get2 === void 0 ? void 0 : _this_layoutNodes_get2.layoutInfo;
            }
        }
        for (let indices of this.persistedIndices.values())indices.sort((a, b)=>a - b);
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        x += this.virtualizer.visibleRect.x;
        y += this.virtualizer.visibleRect.y;
        // Custom variation of this.virtualizer.keyAtPoint that ignores body
        let key = null;
        let point = new (0, $9lycG$reactstatelyvirtualizer.Point)(x, y);
        let rectAtPoint = new (0, $9lycG$reactstatelyvirtualizer.Rect)(point.x, point.y, 1, 1);
        let layoutInfos = this.virtualizer.layout.getVisibleLayoutInfos(rectAtPoint).filter((info)=>info.type === 'row');
        // Layout may return multiple layout infos in the case of
        // persisted keys, so find the first one that actually intersects.
        for (let layoutInfo of layoutInfos)if (layoutInfo.rect.intersects(rectAtPoint)) key = layoutInfo.key;
        if (key == null || this.virtualizer.collection.size === 0) return {
            type: 'root'
        };
        let layoutInfo = this.getLayoutInfo(key);
        if (!layoutInfo) return null;
        let rect = layoutInfo.rect;
        let target = {
            type: 'item',
            key: layoutInfo.key,
            dropPosition: 'on'
        };
        // If dropping on the item isn't accepted, try the target before or after depending on the y position.
        // Otherwise, if dropping on the item is accepted, still try the before/after positions if within 10px
        // of the top or bottom of the item.
        if (!isValidDropTarget(target)) {
            if (y <= rect.y + rect.height / 2 && isValidDropTarget({
                ...target,
                dropPosition: 'before'
            })) target.dropPosition = 'before';
            else if (isValidDropTarget({
                ...target,
                dropPosition: 'after'
            })) target.dropPosition = 'after';
        } else if (y <= rect.y + 10 && isValidDropTarget({
            ...target,
            dropPosition: 'before'
        })) target.dropPosition = 'before';
        else if (y >= rect.maxY - 10 && isValidDropTarget({
            ...target,
            dropPosition: 'after'
        })) target.dropPosition = 'after';
        return target;
    }
    getDropTargetLayoutInfo(target) {
        let layoutInfo = super.getDropTargetLayoutInfo(target);
        layoutInfo.parentKey = this.virtualizer.collection.body.key;
        return layoutInfo;
    }
    constructor(options){
        super(options), this.lastCollection = null, this.columnWidths = new Map(), this.lastPersistedKeys = null, this.persistedIndices = new Map();
        this.stickyColumnIndices = [];
    }
}


//# sourceMappingURL=TableLayout.main.js.map
