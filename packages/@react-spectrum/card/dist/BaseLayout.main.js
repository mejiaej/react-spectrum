var $kQhHy$reactstatelycollections = require("@react-stately/collections");
var $kQhHy$reactstatelyvirtualizer = require("@react-stately/virtualizer");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "BaseLayout", () => $5ee605f09afaa4de$export$64943d2e59d72a29);
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

class $5ee605f09afaa4de$export$64943d2e59d72a29 extends (0, $kQhHy$reactstatelyvirtualizer.Layout) {
    update(invalidationContext) {
        var _invalidationContext_layoutOptions, _invalidationContext_layoutOptions1;
        this.collection = this.virtualizer.collection;
        this.isLoading = ((_invalidationContext_layoutOptions = invalidationContext.layoutOptions) === null || _invalidationContext_layoutOptions === void 0 ? void 0 : _invalidationContext_layoutOptions.isLoading) || false;
        this.direction = ((_invalidationContext_layoutOptions1 = invalidationContext.layoutOptions) === null || _invalidationContext_layoutOptions1 === void 0 ? void 0 : _invalidationContext_layoutOptions1.direction) || 'ltr';
        this.buildCollection(invalidationContext);
        // Remove layout info that doesn't exist in new collection
        if (this.lastCollection) {
            for (let key of this.lastCollection.getKeys())if (!this.collection.getItem(key)) this.layoutInfos.delete(key);
            if (!this.isLoading) this.layoutInfos.delete('loader');
            if (this.collection.size > 0) this.layoutInfos.delete('placeholder');
        }
        this.lastCollection = this.collection;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildCollection(invalidationContext) {}
    getContentSize() {
        return this.contentSize;
    }
    getLayoutInfo(key) {
        return this.layoutInfos.get(key);
    }
    getVisibleLayoutInfos(rect, excludePersistedKeys = false) {
        let res = [];
        for (let layoutInfo of this.layoutInfos.values())if (this.isVisible(layoutInfo, rect, excludePersistedKeys)) res.push(layoutInfo);
        return res;
    }
    isVisible(layoutInfo, rect, excludePersistedKeys) {
        if (layoutInfo.rect.intersects(rect)) return true;
        if (!excludePersistedKeys) return this.virtualizer.isPersistedKey(layoutInfo.key);
        return false;
    }
    _findClosestLayoutInfo(target, rect) {
        let layoutInfos = this.getVisibleLayoutInfos(rect, true);
        let best = null;
        let bestDistance = Infinity;
        // Calculates distance as the distance between the center of 2 rects.
        for (let cur of layoutInfos)if (cur.type === 'item') {
            let curRect = cur.rect;
            let targetMidX = (target.x + target.maxX) / 2;
            let targetMidY = (target.y + target.maxY) / 2;
            let curMidX = (curRect.x + curRect.maxX) / 2;
            let curMidY = (curRect.y + curRect.maxY) / 2;
            let dist = Math.pow(targetMidX - curMidX, 2) + Math.pow(targetMidY - curMidY, 2);
            if (dist < bestDistance) {
                best = cur;
                bestDistance = dist;
            }
        }
        return best;
    }
    _findClosest(target, rect) {
        let best = this._findClosestLayoutInfo(target, rect);
        return best || null;
    }
    getKeyBelow(key) {
        var _this__findClosest, _getFirstItem;
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let layoutInfo = this.getLayoutInfo(parentRowKey);
        let rect = new (0, $kQhHy$reactstatelyvirtualizer.Rect)(layoutInfo.rect.x, layoutInfo.rect.maxY + 1, layoutInfo.rect.width, this.virtualizer.visibleRect.height);
        let closestRow = this.collection.getItem((_this__findClosest = this._findClosest(layoutInfo.rect, rect)) === null || _this__findClosest === void 0 ? void 0 : _this__findClosest.key);
        return (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(closestRow, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
    }
    getKeyAbove(key) {
        var _this__findClosest, _getFirstItem;
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let layoutInfo = this.getLayoutInfo(parentRowKey);
        let rect = new (0, $kQhHy$reactstatelyvirtualizer.Rect)(layoutInfo.rect.x, 0, layoutInfo.rect.width, layoutInfo.rect.y - 1);
        let closestRow = this.collection.getItem((_this__findClosest = this._findClosest(layoutInfo.rect, rect)) === null || _this__findClosest === void 0 ? void 0 : _this__findClosest.key);
        return (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(closestRow, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
    }
    getKeyRightOf(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        key = this.direction === 'rtl' ? this.collection.getKeyBefore(parentRowKey) : this.collection.getKeyAfter(parentRowKey);
        while(key != null){
            var _getFirstItem;
            let item = this.collection.getItem(key);
            // Don't check if item is disabled because we want to be able to focus disabled items in a grid (double check this)
            if (item.type === 'item') return (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
            key = this.direction === 'rtl' ? this.collection.getKeyBefore(key) : this.collection.getKeyAfter(key);
        }
    }
    getKeyLeftOf(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        key = this.direction === 'rtl' ? this.collection.getKeyAfter(parentRowKey) : this.collection.getKeyBefore(parentRowKey);
        while(key != null){
            var _getFirstItem;
            let item = this.collection.getItem(key);
            // Don't check if item is disabled because we want to be able to focus disabled items in a grid (double check this)
            if (item.type === 'item') return (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
            key = this.direction === 'rtl' ? this.collection.getKeyAfter(key) : this.collection.getKeyBefore(key);
        }
    }
    getFirstKey() {
        var _getFirstItem;
        let firstRow = this.collection.getItem(this.collection.getFirstKey());
        return (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(firstRow, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
    }
    getLastKey() {
        var _getFirstItem;
        let lastRow = this.collection.getItem(this.collection.getLastKey());
        return (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(lastRow, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
    }
    // TODO: pretty unwieldy because it needs to bounce back and forth between the parent key and the child key
    // Perhaps have layoutInfo store childKey as well so we don't need to do this? Or maybe make the layoutInfos be the cells instead of the rows?
    getKeyPageAbove(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let layoutInfo = this.getLayoutInfo(parentRowKey);
        if (layoutInfo) {
            var _this_collection_getItem;
            let pageY = Math.max(0, layoutInfo.rect.y + layoutInfo.rect.height - this.virtualizer.visibleRect.height);
            // If the node is so large that it spans multiple page heights, return the key of the item immediately above
            // Otherwise keep going up until we exceed a single page height worth of nodes
            let keyAbove = (_this_collection_getItem = this.collection.getItem(this.getKeyAbove(key))) === null || _this_collection_getItem === void 0 ? void 0 : _this_collection_getItem.parentKey;
            layoutInfo = this.getLayoutInfo(keyAbove);
            if (layoutInfo && layoutInfo.rect.y > pageY) while(layoutInfo && layoutInfo.rect.y > pageY){
                var _getFirstItem, _this_collection_getItem1;
                let childKey = (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(this.collection.getItem(layoutInfo.key), this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
                let keyAbove = (_this_collection_getItem1 = this.collection.getItem(this.getKeyAbove(childKey))) === null || _this_collection_getItem1 === void 0 ? void 0 : _this_collection_getItem1.parentKey;
                layoutInfo = this.getLayoutInfo(keyAbove);
            }
            if (layoutInfo) {
                var _getFirstItem1;
                let childKey = (_getFirstItem1 = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(this.collection.getItem(layoutInfo.key), this.collection))) === null || _getFirstItem1 === void 0 ? void 0 : _getFirstItem1.key;
                return childKey;
            }
        }
        return this.getFirstKey();
    }
    // TODO: pretty unwieldy because it needs to bounce back and forth between the parent key and the child key
    // Perhaps have layoutInfo store childKey as well so we don't need to do this?
    getKeyPageBelow(key) {
        // Expected key is the currently focused cell so we need the parent row key
        let parentRowKey = this.collection.getItem(key).parentKey;
        let layoutInfo = this.getLayoutInfo(parentRowKey);
        if (layoutInfo) {
            var _this_collection_getItem;
            let pageY = Math.min(this.virtualizer.contentSize.height, layoutInfo.rect.y - layoutInfo.rect.height + this.virtualizer.visibleRect.height);
            // If the node is so large that it spans multiple page heights, return the key of the item immediately below
            // Otherwise keep going up until we exceed a single page height worth of nodes
            let keyBelow = (_this_collection_getItem = this.collection.getItem(this.getKeyBelow(key))) === null || _this_collection_getItem === void 0 ? void 0 : _this_collection_getItem.parentKey;
            layoutInfo = this.getLayoutInfo(keyBelow);
            if (layoutInfo && layoutInfo.rect.y < pageY) while(layoutInfo && layoutInfo.rect.y < pageY){
                var _getFirstItem, _this_collection_getItem1;
                let childKey = (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(this.collection.getItem(layoutInfo.key), this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
                let keyBelow = (_this_collection_getItem1 = this.collection.getItem(this.getKeyBelow(childKey))) === null || _this_collection_getItem1 === void 0 ? void 0 : _this_collection_getItem1.parentKey;
                layoutInfo = this.getLayoutInfo(keyBelow);
            }
            if (layoutInfo) {
                var _getFirstItem1;
                let childKey = (_getFirstItem1 = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(this.collection.getItem(layoutInfo.key), this.collection))) === null || _getFirstItem1 === void 0 ? void 0 : _getFirstItem1.key;
                return childKey;
            }
        }
        return this.getLastKey();
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey !== null && fromKey !== void 0 ? fromKey : this.getFirstKey();
        let startItem = collection.getItem(key);
        key = startItem.parentKey;
        while(key != null){
            let item = collection.getItem(key);
            if (item.textValue) {
                var _getFirstItem;
                let substring = item.textValue.slice(0, search.length);
                if (this.collator.compare(substring, search) === 0) return (_getFirstItem = (0, $kQhHy$reactstatelycollections.getFirstItem)((0, $kQhHy$reactstatelycollections.getChildNodes)(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
            }
            key = this.collection.getKeyAfter(key);
        }
        return null;
    }
    constructor(options = {}){
        super(), this.disabledKeys = new Set();
        this.layoutInfos = new Map();
        this.collator = options.collator;
        this.lastCollection = null;
        this.scale = options.scale || 'medium';
        this.margin = options.margin || 24;
    }
}


//# sourceMappingURL=BaseLayout.main.js.map
