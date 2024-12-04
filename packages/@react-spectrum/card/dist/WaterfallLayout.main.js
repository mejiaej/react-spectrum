var $5ee605f09afaa4de$exports = require("./BaseLayout.main.js");
var $eKgYB$reactstatelycollections = require("@react-stately/collections");
var $eKgYB$reactstatelyvirtualizer = require("@react-stately/virtualizer");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "WaterfallLayout", () => $632abf8fbf0ad57b$export$e9f7cda058ba8df8);
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


class $632abf8fbf0ad57b$export$e9f7cda058ba8df8 extends (0, $5ee605f09afaa4de$exports.BaseLayout) {
    get layoutType() {
        return 'waterfall';
    }
    buildCollection(invalidationContext) {
        // Compute the number of columns needed to display the content
        let visibleWidth = this.virtualizer.visibleRect.width;
        let availableWidth = visibleWidth - this.margin * 2;
        let columns = Math.floor((availableWidth + this.minSpace.width) / (this.minItemSize.width + this.minSpace.width));
        this.numColumns = Math.max(1, Math.min(this.maxColumns, columns));
        // Compute the available width (minus the space between items)
        let width = availableWidth - this.minSpace.width * (this.numColumns - 1);
        // Compute the item width based on the space available
        let itemWidth = Math.round(width / this.numColumns);
        itemWidth = Math.max(this.minItemSize.width, Math.min(this.maxItemSize.width, itemWidth));
        this.itemWidth = itemWidth;
        // Compute the horizontal spacing
        // if only one column, we cannot divide by zero, so set it to 1
        let horizontalSpacing = Math.round((availableWidth - this.numColumns * itemWidth) / Math.max(1, this.numColumns - 1));
        this.horizontalSpacing = horizontalSpacing;
        // Setup an array of column heights
        let columnHeights = Array(this.numColumns).fill(this.margin);
        for (let node of this.collection){
            let key = node.key;
            // Compute the height of the item. Use the existing height if available,
            // otherwise call the delegate to estimate the size.
            let oldLayoutInfo = this.layoutInfos.get(key);
            let height;
            let estimatedSize = true;
            if (oldLayoutInfo) {
                height = oldLayoutInfo.rect.height;
                estimatedSize = invalidationContext.sizeChanged || oldLayoutInfo.estimatedSize;
            } else if (node.props.width && node.props.height) {
                let nodeWidth = node.props.width;
                let nodeHeight = node.props.height;
                let scaledHeight = Math.round(nodeHeight * (itemWidth / nodeWidth));
                height = Math.max(this.minItemSize.height, Math.min(this.maxItemSize.height, scaledHeight));
            } else height = itemWidth;
            // Figure out which column to place the item in, and compute its position.
            let column = this.getNextColumnIndex(columnHeights);
            let x = this.margin + column * (itemWidth + horizontalSpacing);
            let y = columnHeights[column];
            let rect = new (0, $eKgYB$reactstatelyvirtualizer.Rect)(x, y, itemWidth, height);
            let layoutInfo = new (0, $eKgYB$reactstatelyvirtualizer.LayoutInfo)(node.type, key, rect);
            layoutInfo.estimatedSize = estimatedSize;
            layoutInfo.allowOverflow = true;
            this.layoutInfos.set(key, layoutInfo);
            // TODO: From v2 figure out this bit, when does this get called and what to replace this.collectionView._transaction with?
            // Removing it from v2 doesn't seem to do anything?
            // if (layoutInfo.estimatedSize && !invalidationContext.contentChanged && !this.collectionView._transaction) {
            //   this.updateItemSize(new IndexPath(section, i));
            // }
            columnHeights[column] += layoutInfo.rect.height + this.minSpace.height;
        }
        // Reset all columns to the maximum for the next section
        let maxHeight = Math.max.apply(Math, columnHeights) - this.minSpace.height + this.margin;
        columnHeights.fill(maxHeight);
        let y = columnHeights[0];
        if (this.isLoading) {
            let loaderY = y;
            let loaderHeight = 60;
            // If there aren't any items, make loader take all avaliable room and remove margin from y calculation
            // so it doesn't scroll
            if (this.collection.size === 0) {
                loaderY = 0;
                loaderHeight = this.virtualizer.visibleRect.height || 60;
            }
            let rect = new (0, $eKgYB$reactstatelyvirtualizer.Rect)(0, loaderY, this.virtualizer.visibleRect.width, loaderHeight);
            let loader = new (0, $eKgYB$reactstatelyvirtualizer.LayoutInfo)('loader', 'loader', rect);
            this.layoutInfos.set('loader', loader);
            y = loader.rect.maxY;
        }
        if (this.collection.size === 0 && !this.isLoading) {
            let rect = new (0, $eKgYB$reactstatelyvirtualizer.Rect)(0, 0, this.virtualizer.visibleRect.width, this.virtualizer.visibleRect.height);
            let placeholder = new (0, $eKgYB$reactstatelyvirtualizer.LayoutInfo)('placeholder', 'placeholder', rect);
            this.layoutInfos.set('placeholder', placeholder);
            y = placeholder.rect.maxY;
        }
        this.contentSize = new (0, $eKgYB$reactstatelyvirtualizer.Size)(this.virtualizer.visibleRect.width, y);
    }
    updateItemSize(key, size) {
        let layoutInfo = this.layoutInfos.get(key);
        if (!size || !layoutInfo) return false;
        if (size.height !== layoutInfo.rect.height) {
            // TODO: also not sure about copying layout info vs mutating it. Listlayout does the below
            // but I feel that is because it actually maintained a layoutNode map cache which this doesn't have
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height < 600 ? size.height : 600;
            newLayoutInfo.estimatedSize = false;
            this.layoutInfos.set(key, newLayoutInfo);
            return true;
        }
        return false;
    }
    getNextColumnIndex(columnHeights) {
        let minIndex = 0;
        for(let i = 0; i < columnHeights.length; i++)if (columnHeights[i] < columnHeights[minIndex]) minIndex = i;
        return minIndex;
    }
    getClosestRight(key) {
        var _this__findClosest, _getFirstItem;
        let layoutInfo = this.getLayoutInfo(key);
        // Refactored from v2. Current strategy is to find the closest card in the adjacent column.
        // This prevent the issue where it was possible that the closest layoutInfo would be two columns over due to the middle card being exceptionally tall
        // and thus the top corner to top corner distance was massive.
        // First look for a card to the immediate right of the current card. If we can't find any, look for the nearest card in the entire column to the right of the card
        let rect = new (0, $eKgYB$reactstatelyvirtualizer.Rect)(layoutInfo.rect.maxX + 1, layoutInfo.rect.y, layoutInfo.rect.width + this.horizontalSpacing, layoutInfo.rect.height);
        key = (_this__findClosest = this._findClosest(layoutInfo.rect, rect)) === null || _this__findClosest === void 0 ? void 0 : _this__findClosest.key;
        if (!key) {
            var _this__findClosest1;
            rect = new (0, $eKgYB$reactstatelyvirtualizer.Rect)(layoutInfo.rect.maxX + 1, 0, layoutInfo.rect.width + this.horizontalSpacing, this.virtualizer.contentSize.height);
            key = (_this__findClosest1 = this._findClosest(layoutInfo.rect, rect)) === null || _this__findClosest1 === void 0 ? void 0 : _this__findClosest1.key;
        }
        let item = this.collection.getItem(key);
        return (_getFirstItem = (0, $eKgYB$reactstatelycollections.getFirstItem)((0, $eKgYB$reactstatelycollections.getChildNodes)(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
    }
    getClosestLeft(key) {
        var _this__findClosest, _getFirstItem;
        let layoutInfo = this.getLayoutInfo(key);
        // First look for a card to the immediate left of the current card. If we can't find any, look for the nearest card in the entire column to the left of the card
        let rect = new (0, $eKgYB$reactstatelyvirtualizer.Rect)(layoutInfo.rect.x - layoutInfo.rect.width - this.horizontalSpacing - 1, layoutInfo.rect.y, layoutInfo.rect.width + this.horizontalSpacing, layoutInfo.rect.height);
        key = (_this__findClosest = this._findClosest(layoutInfo.rect, rect)) === null || _this__findClosest === void 0 ? void 0 : _this__findClosest.key;
        if (!key) {
            var _this__findClosest1;
            rect = new (0, $eKgYB$reactstatelyvirtualizer.Rect)(layoutInfo.rect.x - layoutInfo.rect.width - this.horizontalSpacing - 1, 0, layoutInfo.rect.width + this.horizontalSpacing, this.virtualizer.contentSize.height);
            key = (_this__findClosest1 = this._findClosest(layoutInfo.rect, rect)) === null || _this__findClosest1 === void 0 ? void 0 : _this__findClosest1.key;
        }
        let item = this.collection.getItem(key);
        return (_getFirstItem = (0, $eKgYB$reactstatelycollections.getFirstItem)((0, $eKgYB$reactstatelycollections.getChildNodes)(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
    }
    getKeyRightOf(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        return this.direction === 'rtl' ? this.getClosestLeft(parentRowKey) : this.getClosestRight(parentRowKey);
    }
    getKeyLeftOf(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        return this.direction === 'rtl' ? this.getClosestRight(parentRowKey) : this.getClosestLeft(parentRowKey);
    }
    constructor(options = {}){
        // TODO: WaterfallLayout doesn't use card size in v2, but perhaps it should support it? Perhaps it would modify
        // minItemSize defaults or other things
        super(options);
        this.minItemSize = options.minItemSize || new (0, $eKgYB$reactstatelyvirtualizer.Size)(240, 136);
        this.maxItemSize = options.maxItemSize || new (0, $eKgYB$reactstatelyvirtualizer.Size)(Infinity, Infinity);
        this.margin = options.margin != null ? options.margin : 24;
        this.minSpace = options.minSpace || new (0, $eKgYB$reactstatelyvirtualizer.Size)(18, 18);
        this.maxColumns = options.maxColumns || Infinity;
        this.itemWidth = 0;
        this.numColumns = 0;
        this.lastCollection = null;
        this.collator = options.collator;
    }
}


//# sourceMappingURL=WaterfallLayout.main.js.map
