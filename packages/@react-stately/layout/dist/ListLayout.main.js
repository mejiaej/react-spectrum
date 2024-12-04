var $iId4j$reactstatelycollections = require("@react-stately/collections");
var $iId4j$reactstatelyvirtualizer = require("@react-stately/virtualizer");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ListLayout", () => $fe69e47e38ed0ac4$export$cacbb3924155d68e);
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

const $fe69e47e38ed0ac4$var$DEFAULT_HEIGHT = 48;
class $fe69e47e38ed0ac4$export$cacbb3924155d68e extends (0, $iId4j$reactstatelyvirtualizer.Layout) {
    // Backward compatibility for subclassing.
    get collection() {
        return this.virtualizer.collection;
    }
    getLayoutInfo(key) {
        var _this_layoutNodes_get;
        this.ensureLayoutInfo(key);
        return ((_this_layoutNodes_get = this.layoutNodes.get(key)) === null || _this_layoutNodes_get === void 0 ? void 0 : _this_layoutNodes_get.layoutInfo) || null;
    }
    getVisibleLayoutInfos(rect) {
        // Adjust rect to keep number of visible rows consistent.
        // (only if height > 1 for getDropTargetFromPoint)
        if (rect.height > 1) {
            var _this_rowHeight, _ref;
            let rowHeight = (_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $fe69e47e38ed0ac4$var$DEFAULT_HEIGHT;
            rect.y = Math.floor(rect.y / rowHeight) * rowHeight;
            rect.height = Math.ceil(rect.height / rowHeight) * rowHeight;
        }
        // If layout hasn't yet been done for the requested rect, union the
        // new rect with the existing valid rect, and recompute.
        this.layoutIfNeeded(rect);
        let res = [];
        let addNodes = (nodes)=>{
            for (let node of nodes)if (this.isVisible(node, rect)) {
                res.push(node.layoutInfo);
                if (node.children) addNodes(node.children);
            }
        };
        addNodes(this.rootNodes);
        return res;
    }
    layoutIfNeeded(rect) {
        if (!this.lastCollection) return;
        if (!this.requestedRect.containsRect(rect)) {
            this.requestedRect = this.requestedRect.union(rect);
            this.rootNodes = this.buildCollection();
        }
        // Ensure all of the persisted keys are available.
        for (let key of this.virtualizer.persistedKeys){
            if (this.ensureLayoutInfo(key)) return;
        }
    }
    ensureLayoutInfo(key) {
        // If the layout info wasn't found, it might be outside the bounds of the area that we've
        // computed layout for so far. This can happen when accessing a random key, e.g pressing Home/End.
        // Compute the full layout and try again.
        if (!this.layoutNodes.has(key) && this.requestedRect.area < this.contentSize.area && this.lastCollection) {
            this.requestedRect = new (0, $iId4j$reactstatelyvirtualizer.Rect)(0, 0, Infinity, Infinity);
            this.rootNodes = this.buildCollection();
            this.requestedRect = new (0, $iId4j$reactstatelyvirtualizer.Rect)(0, 0, this.contentSize.width, this.contentSize.height);
            return true;
        }
        return false;
    }
    isVisible(node, rect) {
        return node.layoutInfo.rect.intersects(rect) || node.layoutInfo.isSticky || node.layoutInfo.type === 'header' || this.virtualizer.isPersistedKey(node.layoutInfo.key);
    }
    shouldInvalidateEverything(invalidationContext) {
        // Invalidate cache if the size of the collection changed.
        // In this case, we need to recalculate the entire layout.
        return invalidationContext.sizeChanged || false;
    }
    update(invalidationContext) {
        let collection = this.virtualizer.collection;
        // Reset valid rect if we will have to invalidate everything.
        // Otherwise we can reuse cached layout infos outside the current visible rect.
        this.invalidateEverything = this.shouldInvalidateEverything(invalidationContext);
        if (this.invalidateEverything) {
            this.requestedRect = this.virtualizer.visibleRect.copy();
            this.layoutNodes.clear();
        }
        this.rootNodes = this.buildCollection();
        // Remove deleted layout nodes
        if (this.lastCollection && collection !== this.lastCollection) {
            for (let key of this.lastCollection.getKeys())if (!collection.getItem(key)) {
                let layoutNode = this.layoutNodes.get(key);
                if (layoutNode) this.layoutNodes.delete(key);
            }
        }
        this.lastWidth = this.virtualizer.visibleRect.width;
        this.lastCollection = collection;
        this.invalidateEverything = false;
        this.validRect = this.requestedRect.copy();
    }
    buildCollection(y = 0) {
        let collection = this.virtualizer.collection;
        let skipped = 0;
        let nodes = [];
        for (let node of collection){
            var _this_rowHeight, _ref;
            let rowHeight = (_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $fe69e47e38ed0ac4$var$DEFAULT_HEIGHT;
            // Skip rows before the valid rectangle unless they are already cached.
            if (node.type === 'item' && y + rowHeight < this.requestedRect.y && !this.isValid(node, y)) {
                y += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.buildChild(node, 0, y, null);
            y = layoutNode.layoutInfo.rect.maxY;
            nodes.push(layoutNode);
            if (node.type === 'item' && y > this.requestedRect.maxY) {
                y += (collection.size - (nodes.length + skipped)) * rowHeight;
                break;
            }
        }
        this.contentSize = new (0, $iId4j$reactstatelyvirtualizer.Size)(this.virtualizer.visibleRect.width, y);
        return nodes;
    }
    isValid(node, y) {
        let cached = this.layoutNodes.get(node.key);
        return !this.invalidateEverything && cached && cached.node === node && y === cached.layoutInfo.rect.y && cached.layoutInfo.rect.intersects(this.validRect) && cached.validRect.containsRect(cached.layoutInfo.rect.intersection(this.requestedRect));
    }
    buildChild(node, x, y, parentKey) {
        if (this.isValid(node, y)) return this.layoutNodes.get(node.key);
        let layoutNode = this.buildNode(node, x, y);
        layoutNode.layoutInfo.parentKey = parentKey !== null && parentKey !== void 0 ? parentKey : null;
        this.layoutNodes.set(node.key, layoutNode);
        return layoutNode;
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'section':
                return this.buildSection(node, x, y);
            case 'item':
                return this.buildItem(node, x, y);
            case 'header':
                return this.buildSectionHeader(node, x, y);
            case 'loader':
                return this.buildLoader(node, x, y);
            default:
                throw new Error('Unsupported node type: ' + node.type);
        }
    }
    buildLoader(node, x, y) {
        let rect = new (0, $iId4j$reactstatelyvirtualizer.Rect)(x, y, 0, 0);
        let layoutInfo = new (0, $iId4j$reactstatelyvirtualizer.LayoutInfo)('loader', node.key, rect);
        rect.width = this.virtualizer.contentSize.width;
        rect.height = this.loaderHeight || this.rowHeight || this.estimatedRowHeight || $fe69e47e38ed0ac4$var$DEFAULT_HEIGHT;
        return {
            layoutInfo: layoutInfo,
            validRect: rect.intersection(this.requestedRect)
        };
    }
    buildSection(node, x, y) {
        let collection = this.virtualizer.collection;
        let width = this.virtualizer.visibleRect.width;
        let rect = new (0, $iId4j$reactstatelyvirtualizer.Rect)(0, y, width, 0);
        let layoutInfo = new (0, $iId4j$reactstatelyvirtualizer.LayoutInfo)(node.type, node.key, rect);
        let startY = y;
        let skipped = 0;
        let children = [];
        for (let child of (0, $iId4j$reactstatelycollections.getChildNodes)(node, collection)){
            var _this_rowHeight, _ref;
            let rowHeight = (_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $fe69e47e38ed0ac4$var$DEFAULT_HEIGHT;
            // Skip rows before the valid rectangle unless they are already cached.
            if (y + rowHeight < this.requestedRect.y && !this.isValid(node, y)) {
                y += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.buildChild(child, x, y, layoutInfo.key);
            y = layoutNode.layoutInfo.rect.maxY;
            children.push(layoutNode);
            if (y > this.requestedRect.maxY) {
                // Estimate the remaining height for rows that we don't need to layout right now.
                y += ([
                    ...(0, $iId4j$reactstatelycollections.getChildNodes)(node, collection)
                ].length - (children.length + skipped)) * rowHeight;
                break;
            }
        }
        rect.height = y - startY;
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node: node
        };
    }
    buildSectionHeader(node, x, y) {
        let width = this.virtualizer.visibleRect.width;
        let rectHeight = this.headingHeight;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            let previousLayoutInfo = previousLayoutNode === null || previousLayoutNode === void 0 ? void 0 : previousLayoutNode.layoutInfo;
            if (previousLayoutInfo) {
                let curNode = this.virtualizer.collection.getItem(node.key);
                let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
                rectHeight = previousLayoutInfo.rect.height;
                isEstimated = width !== this.lastWidth || curNode !== lastNode || previousLayoutInfo.estimatedSize;
            } else {
                rectHeight = node.rendered ? this.estimatedHeadingHeight : 0;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = $fe69e47e38ed0ac4$var$DEFAULT_HEIGHT;
        let headerRect = new (0, $iId4j$reactstatelyvirtualizer.Rect)(0, y, width, rectHeight);
        let header = new (0, $iId4j$reactstatelyvirtualizer.LayoutInfo)('header', node.key, headerRect);
        header.estimatedSize = isEstimated;
        return {
            layoutInfo: header,
            children: [],
            validRect: header.rect.intersection(this.requestedRect),
            node: node
        };
    }
    buildItem(node, x, y) {
        let width = this.virtualizer.visibleRect.width;
        let rectHeight = this.rowHeight;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                rectHeight = previousLayoutNode.layoutInfo.rect.height;
                isEstimated = width !== this.lastWidth || node !== previousLayoutNode.node || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                rectHeight = this.estimatedRowHeight;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = $fe69e47e38ed0ac4$var$DEFAULT_HEIGHT;
        let rect = new (0, $iId4j$reactstatelyvirtualizer.Rect)(x, y, width - x, rectHeight);
        let layoutInfo = new (0, $iId4j$reactstatelyvirtualizer.LayoutInfo)(node.type, node.key, rect);
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo,
            children: [],
            validRect: layoutInfo.rect,
            node: node
        };
    }
    updateItemSize(key, size) {
        let layoutNode = this.layoutNodes.get(key);
        // If no layoutInfo, item has been deleted/removed.
        if (!layoutNode) return false;
        let collection = this.virtualizer.collection;
        let layoutInfo = layoutNode.layoutInfo;
        layoutInfo.estimatedSize = false;
        if (layoutInfo.rect.height !== size.height) {
            // Copy layout info rather than mutating so that later caches are invalidated.
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height;
            layoutNode.layoutInfo = newLayoutInfo;
            // Items after this layoutInfo will need to be repositioned to account for the new height.
            // Adjust the validRect so that only items above remain valid.
            this.validRect.height = Math.min(this.validRect.height, layoutInfo.rect.y - this.validRect.y);
            // The requestedRect also needs to be adjusted to account for the height difference.
            this.requestedRect.height += newLayoutInfo.rect.height - layoutInfo.rect.height;
            // Invalidate layout for this layout node and all parents
            this.updateLayoutNode(key, layoutInfo, newLayoutInfo);
            let node = layoutInfo.parentKey != null ? collection.getItem(layoutInfo.parentKey) : null;
            while(node){
                this.updateLayoutNode(node.key, layoutInfo, newLayoutInfo);
                node = node.parentKey != null ? collection.getItem(node.parentKey) : null;
            }
            return true;
        }
        return false;
    }
    updateLayoutNode(key, oldLayoutInfo, newLayoutInfo) {
        let n = this.layoutNodes.get(key);
        if (n) {
            // Invalidate by intersecting the validRect of this node with the overall validRect.
            n.validRect = n.validRect.intersection(this.validRect);
            // Replace layout info in LayoutNode
            if (n.layoutInfo === oldLayoutInfo) n.layoutInfo = newLayoutInfo;
        }
    }
    getContentSize() {
        return this.contentSize;
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        x += this.virtualizer.visibleRect.x;
        y += this.virtualizer.visibleRect.y;
        let key = this.virtualizer.keyAtPoint(new (0, $iId4j$reactstatelyvirtualizer.Point)(x, y));
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
        let layoutInfo = this.getLayoutInfo(target.key);
        let rect;
        if (target.dropPosition === 'before') rect = new (0, $iId4j$reactstatelyvirtualizer.Rect)(layoutInfo.rect.x, layoutInfo.rect.y - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
        else if (target.dropPosition === 'after') rect = new (0, $iId4j$reactstatelyvirtualizer.Rect)(layoutInfo.rect.x, layoutInfo.rect.maxY - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
        else rect = layoutInfo.rect;
        return new (0, $iId4j$reactstatelyvirtualizer.LayoutInfo)('dropIndicator', target.key + ':' + target.dropPosition, rect);
    }
    /**
   * Creates a new ListLayout with options. See the list of properties below for a description
   * of the options that can be provided.
   */ constructor(options = {}){
        super();
        var _options_rowHeight;
        this.rowHeight = (_options_rowHeight = options.rowHeight) !== null && _options_rowHeight !== void 0 ? _options_rowHeight : null;
        var _options_estimatedRowHeight;
        this.estimatedRowHeight = (_options_estimatedRowHeight = options.estimatedRowHeight) !== null && _options_estimatedRowHeight !== void 0 ? _options_estimatedRowHeight : null;
        var _options_headingHeight;
        this.headingHeight = (_options_headingHeight = options.headingHeight) !== null && _options_headingHeight !== void 0 ? _options_headingHeight : null;
        var _options_estimatedHeadingHeight;
        this.estimatedHeadingHeight = (_options_estimatedHeadingHeight = options.estimatedHeadingHeight) !== null && _options_estimatedHeadingHeight !== void 0 ? _options_estimatedHeadingHeight : null;
        var _options_loaderHeight;
        this.loaderHeight = (_options_loaderHeight = options.loaderHeight) !== null && _options_loaderHeight !== void 0 ? _options_loaderHeight : null;
        this.dropIndicatorThickness = options.dropIndicatorThickness || 2;
        this.layoutNodes = new Map();
        this.rootNodes = [];
        this.lastWidth = 0;
        this.lastCollection = null;
        this.invalidateEverything = false;
        this.validRect = new (0, $iId4j$reactstatelyvirtualizer.Rect)();
        this.requestedRect = new (0, $iId4j$reactstatelyvirtualizer.Rect)();
        this.contentSize = new (0, $iId4j$reactstatelyvirtualizer.Size)();
    }
}


//# sourceMappingURL=ListLayout.main.js.map
