import "./CardView.css";
import {CardContext as $68e4e6fe083e22fd$export$d0b2ee33ebf7d64, InternalCardViewContext as $68e4e6fe083e22fd$export$cb658fed5fefe1d} from "./Card.mjs";
import {ImageCoordinator as $4b5e069e9e001e8b$export$1b926c015f09611d} from "./ImageCoordinator.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $aG2ym$jsx} from "react/jsx-runtime";
import {UNSTABLE_Virtualizer as $aG2ym$UNSTABLE_Virtualizer, GridListItem as $aG2ym$GridListItem, GridList as $aG2ym$GridList} from "react-aria-components";
import {createContext as $aG2ym$createContext, forwardRef as $aG2ym$forwardRef, useMemo as $aG2ym$useMemo, useState as $aG2ym$useState} from "react";
import {Size as $aG2ym$Size, Rect as $aG2ym$Rect, LayoutInfo as $aG2ym$LayoutInfo, Layout as $aG2ym$Layout} from "@react-stately/virtualizer";
import {useDOMRef as $aG2ym$useDOMRef} from "@react-spectrum/utils";
import {useEffectEvent as $aG2ym$useEffectEvent, useResizeObserver as $aG2ym$useResizeObserver, useLayoutEffect as $aG2ym$useLayoutEffect, useLoadMore as $aG2ym$useLoadMore} from "@react-aria/utils";

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








class $bbcff092fe610ff3$var$FlexibleGridLayout extends (0, $aG2ym$Layout) {
    update(invalidationContext) {
        let { minItemSize: minItemSize = new (0, $aG2ym$Size)(200, 200), maxItemSize: maxItemSize = new (0, $aG2ym$Size)(Infinity, Infinity), minSpace: minSpace = new (0, $aG2ym$Size)(18, 18), maxColumns: maxColumns = Infinity } = invalidationContext.layoutOptions || {};
        let visibleWidth = this.virtualizer.visibleRect.width;
        // The max item width is always the entire viewport.
        // If the max item height is infinity, scale in proportion to the max width.
        let maxItemWidth = Math.min(maxItemSize.width, visibleWidth);
        let maxItemHeight = Number.isFinite(maxItemSize.height) ? maxItemSize.height : Math.floor(minItemSize.height / minItemSize.width * maxItemWidth);
        // Compute the number of rows and columns needed to display the content
        let columns = Math.floor(visibleWidth / (minItemSize.width + minSpace.width));
        let numColumns = Math.max(1, Math.min(maxColumns, columns));
        // Compute the available width (minus the space between items)
        let width = visibleWidth - minSpace.width * Math.max(0, numColumns);
        // Compute the item width based on the space available
        let itemWidth = Math.floor(width / numColumns);
        itemWidth = Math.max(minItemSize.width, Math.min(maxItemWidth, itemWidth));
        // Compute the item height, which is proportional to the item width
        let t = (itemWidth - minItemSize.width) / Math.max(1, maxItemWidth - minItemSize.width);
        let itemHeight = minItemSize.height + Math.floor((maxItemHeight - minItemSize.height) * t);
        itemHeight = Math.max(minItemSize.height, Math.min(maxItemHeight, itemHeight));
        // Compute the horizontal spacing and content height
        let horizontalSpacing = Math.floor((visibleWidth - numColumns * itemWidth) / (numColumns + 1));
        let rows = Math.ceil(this.virtualizer.collection.size / numColumns);
        let iterator = this.virtualizer.collection[Symbol.iterator]();
        let y = rows > 0 ? minSpace.height : 0;
        let newLayoutInfos = new Map();
        let skeleton = null;
        let skeletonCount = 0;
        for(let row = 0; row < rows; row++){
            let maxHeight = 0;
            let rowLayoutInfos = [];
            for(let col = 0; col < numColumns; col++){
                // Repeat skeleton until the end of the current row.
                let node = skeleton || iterator.next().value;
                if (!node) break;
                if (node.type === 'skeleton') skeleton = node;
                let key = skeleton ? `${skeleton.key}-${skeletonCount++}` : node.key;
                let content = skeleton ? {
                    ...skeleton
                } : node;
                let x = horizontalSpacing + col * (itemWidth + horizontalSpacing);
                let oldLayoutInfo = this.layoutInfos.get(key);
                let height = itemHeight;
                let estimatedSize = true;
                if (oldLayoutInfo) {
                    height = oldLayoutInfo.rect.height;
                    estimatedSize = invalidationContext.sizeChanged || oldLayoutInfo.estimatedSize || oldLayoutInfo.content !== content;
                }
                let rect = new (0, $aG2ym$Rect)(x, y, itemWidth, height);
                let layoutInfo = new (0, $aG2ym$LayoutInfo)(node.type, key, rect);
                layoutInfo.estimatedSize = estimatedSize;
                layoutInfo.allowOverflow = true;
                layoutInfo.content = content;
                newLayoutInfos.set(key, layoutInfo);
                rowLayoutInfos.push(layoutInfo);
                maxHeight = Math.max(maxHeight, rect.height);
            }
            for (let layoutInfo of rowLayoutInfos)layoutInfo.rect.height = maxHeight;
            y += maxHeight + minSpace.height;
            // Keep adding skeleton rows until we fill the viewport
            if (skeleton && row === rows - 1 && y < this.virtualizer.visibleRect.height) rows++;
        }
        this.layoutInfos = newLayoutInfos;
        this.contentSize = new (0, $aG2ym$Size)(this.virtualizer.visibleRect.width, y);
    }
    getLayoutInfo(key) {
        return this.layoutInfos.get(key);
    }
    getContentSize() {
        return this.contentSize;
    }
    getVisibleLayoutInfos(rect) {
        let layoutInfos = [];
        for (let layoutInfo of this.layoutInfos.values())if (layoutInfo.rect.intersects(rect) || this.virtualizer.isPersistedKey(layoutInfo.key)) layoutInfos.push(layoutInfo);
        return layoutInfos;
    }
    updateItemSize(key, size) {
        let layoutInfo = this.layoutInfos.get(key);
        if (!size || !layoutInfo) return false;
        if (size.height !== layoutInfo.rect.height) {
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height;
            newLayoutInfo.estimatedSize = false;
            this.layoutInfos.set(key, newLayoutInfo);
            return true;
        }
        return false;
    }
    constructor(...args){
        super(...args), this.contentSize = new (0, $aG2ym$Size)(), this.layoutInfos = new Map();
    }
}
class $bbcff092fe610ff3$var$WaterfallLayoutInfo extends (0, $aG2ym$LayoutInfo) {
    copy() {
        let res = super.copy();
        res.column = this.column;
        return res;
    }
    constructor(...args){
        super(...args), this.column = 0;
    }
}
class $bbcff092fe610ff3$var$WaterfallLayout extends (0, $aG2ym$Layout) {
    update(invalidationContext) {
        let { minItemSize: minItemSize = new (0, $aG2ym$Size)(200, 200), maxItemSize: maxItemSize = new (0, $aG2ym$Size)(Infinity, Infinity), minSpace: minSpace = new (0, $aG2ym$Size)(18, 18), maxColumns: maxColumns = Infinity } = invalidationContext.layoutOptions || {};
        let visibleWidth = this.virtualizer.visibleRect.width;
        // The max item width is always the entire viewport.
        // If the max item height is infinity, scale in proportion to the max width.
        let maxItemWidth = Math.min(maxItemSize.width, visibleWidth);
        let maxItemHeight = Number.isFinite(maxItemSize.height) ? maxItemSize.height : Math.floor(minItemSize.height / minItemSize.width * maxItemWidth);
        // Compute the number of rows and columns needed to display the content
        let columns = Math.floor(visibleWidth / (minItemSize.width + minSpace.width));
        let numColumns = Math.max(1, Math.min(maxColumns, columns));
        // Compute the available width (minus the space between items)
        let width = visibleWidth - minSpace.width * Math.max(0, numColumns);
        // Compute the item width based on the space available
        let itemWidth = Math.floor(width / numColumns);
        itemWidth = Math.max(minItemSize.width, Math.min(maxItemWidth, itemWidth));
        // Compute the item height, which is proportional to the item width
        let t = (itemWidth - minItemSize.width) / Math.max(1, maxItemWidth - minItemSize.width);
        let itemHeight = minItemSize.height + Math.floor((maxItemHeight - minItemSize.height) * t);
        itemHeight = Math.max(minItemSize.height, Math.min(maxItemHeight, itemHeight));
        // Compute the horizontal spacing and content height
        let horizontalSpacing = Math.floor((visibleWidth - numColumns * itemWidth) / (numColumns + 1));
        // Setup an array of column heights
        let columnHeights = Array(numColumns).fill(minSpace.height);
        let newLayoutInfos = new Map();
        let addNode = (key, node)=>{
            let oldLayoutInfo = this.layoutInfos.get(key);
            let height = itemHeight;
            let estimatedSize = true;
            if (oldLayoutInfo) {
                height = oldLayoutInfo.rect.height;
                estimatedSize = invalidationContext.sizeChanged || oldLayoutInfo.estimatedSize || oldLayoutInfo.content !== node;
            }
            // Figure out which column to place the item in, and compute its position.
            // Preserve the previous column index so items don't jump around during resizing unless the number of columns changed.
            let prevColumn = numColumns === this.numColumns ? oldLayoutInfo?.column : undefined;
            let column = prevColumn ?? columnHeights.reduce((minIndex, h, i)=>h < columnHeights[minIndex] ? i : minIndex, 0);
            let x = horizontalSpacing + column * (itemWidth + horizontalSpacing);
            let y = columnHeights[column];
            let rect = new (0, $aG2ym$Rect)(x, y, itemWidth, height);
            let layoutInfo = new $bbcff092fe610ff3$var$WaterfallLayoutInfo(node.type, key, rect);
            layoutInfo.estimatedSize = estimatedSize;
            layoutInfo.allowOverflow = true;
            layoutInfo.content = node;
            layoutInfo.column = column;
            newLayoutInfos.set(key, layoutInfo);
            columnHeights[column] += layoutInfo.rect.height + minSpace.height;
        };
        let skeletonCount = 0;
        for (let node of this.virtualizer.collection)if (node.type === 'skeleton') {
            // Add skeleton cards until every column has at least one, and we fill the viewport.
            let startingHeights = [
                ...columnHeights
            ];
            while(!columnHeights.every((h, i)=>h !== startingHeights[i]) || Math.min(...columnHeights) < this.virtualizer.visibleRect.height){
                let key = `${node.key}-${skeletonCount++}`;
                let content = this.layoutInfos.get(key)?.content || {
                    ...node
                };
                addNode(key, content);
            }
            break;
        } else addNode(node.key, node);
        // Reset all columns to the maximum for the next section
        let maxHeight = Math.max(...columnHeights);
        this.contentSize = new (0, $aG2ym$Size)(this.virtualizer.visibleRect.width, maxHeight);
        this.layoutInfos = newLayoutInfos;
        this.numColumns = numColumns;
    }
    getLayoutInfo(key) {
        return this.layoutInfos.get(key);
    }
    getContentSize() {
        return this.contentSize;
    }
    getVisibleLayoutInfos(rect) {
        let layoutInfos = [];
        for (let layoutInfo of this.layoutInfos.values())if (layoutInfo.rect.intersects(rect) || this.virtualizer.isPersistedKey(layoutInfo.key)) layoutInfos.push(layoutInfo);
        return layoutInfos;
    }
    updateItemSize(key, size) {
        let layoutInfo = this.layoutInfos.get(key);
        if (!size || !layoutInfo) return false;
        if (size.height !== layoutInfo.rect.height) {
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height;
            newLayoutInfo.estimatedSize = false;
            this.layoutInfos.set(key, newLayoutInfo);
            return true;
        }
        return false;
    }
    // Override keyboard navigation to work spacially.
    getKeyRightOf(key) {
        let layoutInfo = this.getLayoutInfo(key);
        if (!layoutInfo) return null;
        let rect = new (0, $aG2ym$Rect)(layoutInfo.rect.maxX, layoutInfo.rect.y, this.virtualizer.visibleRect.maxX - layoutInfo.rect.maxX, layoutInfo.rect.height);
        let layoutInfos = this.getVisibleLayoutInfos(rect);
        let bestKey = null;
        let bestDistance = Infinity;
        for (let candidate of layoutInfos){
            if (candidate.key === key) continue;
            // Find the closest item in the x direction with the most overlap in the y direction.
            let deltaX = candidate.rect.x - rect.x;
            let overlapY = Math.min(candidate.rect.maxY, rect.maxY) - Math.max(candidate.rect.y, rect.y);
            let distance = deltaX - overlapY;
            if (distance < bestDistance) {
                bestDistance = distance;
                bestKey = candidate.key;
            }
        }
        return bestKey;
    }
    getKeyLeftOf(key) {
        let layoutInfo = this.getLayoutInfo(key);
        if (!layoutInfo) return null;
        let rect = new (0, $aG2ym$Rect)(0, layoutInfo.rect.y, layoutInfo.rect.x, layoutInfo.rect.height);
        let layoutInfos = this.getVisibleLayoutInfos(rect);
        let bestKey = null;
        let bestDistance = Infinity;
        for (let candidate of layoutInfos){
            if (candidate.key === key) continue;
            // Find the closest item in the x direction with the most overlap in the y direction.
            let deltaX = rect.maxX - candidate.rect.maxX;
            let overlapY = Math.min(candidate.rect.maxY, rect.maxY) - Math.max(candidate.rect.y, rect.y);
            let distance = deltaX - overlapY;
            if (distance < bestDistance) {
                bestDistance = distance;
                bestKey = candidate.key;
            }
        }
        return bestKey;
    }
    // This overrides the default behavior of shift selection to work spacially
    // rather than following the order of the items in the collection (which may appear unpredictable).
    getKeyRange(from, to) {
        let fromLayoutInfo = this.getLayoutInfo(from);
        let toLayoutInfo = this.getLayoutInfo(to);
        if (!fromLayoutInfo || !toLayoutInfo) return [];
        // Find items where half of the area intersects the rectangle
        // formed from the first item to the last item in the range.
        let rect = fromLayoutInfo.rect.union(toLayoutInfo.rect);
        let keys = [];
        for (let layoutInfo of this.layoutInfos.values())if (rect.intersection(layoutInfo.rect).area > layoutInfo.rect.area / 2) keys.push(layoutInfo.key);
        return keys;
    }
    constructor(...args){
        super(...args), this.contentSize = new (0, $aG2ym$Size)(), this.layoutInfos = new Map(), this.numColumns = 0;
    }
}
const $bbcff092fe610ff3$var$layoutOptions = {
    XS: {
        compact: {
            minSpace: new (0, $aG2ym$Size)(6, 6),
            minItemSize: new (0, $aG2ym$Size)(100, 100),
            maxItemSize: new (0, $aG2ym$Size)(140, 140)
        },
        regular: {
            minSpace: new (0, $aG2ym$Size)(8, 8),
            minItemSize: new (0, $aG2ym$Size)(100, 100),
            maxItemSize: new (0, $aG2ym$Size)(140, 140)
        },
        spacious: {
            minSpace: new (0, $aG2ym$Size)(12, 12),
            minItemSize: new (0, $aG2ym$Size)(100, 100),
            maxItemSize: new (0, $aG2ym$Size)(140, 140)
        }
    },
    S: {
        compact: {
            minSpace: new (0, $aG2ym$Size)(8, 8),
            minItemSize: new (0, $aG2ym$Size)(150, 150),
            maxItemSize: new (0, $aG2ym$Size)(210, 210)
        },
        regular: {
            minSpace: new (0, $aG2ym$Size)(12, 12),
            minItemSize: new (0, $aG2ym$Size)(150, 150),
            maxItemSize: new (0, $aG2ym$Size)(210, 210)
        },
        spacious: {
            minSpace: new (0, $aG2ym$Size)(16, 16),
            minItemSize: new (0, $aG2ym$Size)(150, 150),
            maxItemSize: new (0, $aG2ym$Size)(210, 210)
        }
    },
    M: {
        compact: {
            minSpace: new (0, $aG2ym$Size)(12, 12),
            minItemSize: new (0, $aG2ym$Size)(200, 200),
            maxItemSize: new (0, $aG2ym$Size)(280, 280)
        },
        regular: {
            minSpace: new (0, $aG2ym$Size)(16, 16),
            minItemSize: new (0, $aG2ym$Size)(200, 200),
            maxItemSize: new (0, $aG2ym$Size)(280, 280)
        },
        spacious: {
            minSpace: new (0, $aG2ym$Size)(20, 20),
            minItemSize: new (0, $aG2ym$Size)(200, 200),
            maxItemSize: new (0, $aG2ym$Size)(280, 280)
        }
    },
    L: {
        compact: {
            minSpace: new (0, $aG2ym$Size)(16, 16),
            minItemSize: new (0, $aG2ym$Size)(270, 270),
            maxItemSize: new (0, $aG2ym$Size)(370, 370)
        },
        regular: {
            minSpace: new (0, $aG2ym$Size)(20, 20),
            minItemSize: new (0, $aG2ym$Size)(270, 270),
            maxItemSize: new (0, $aG2ym$Size)(370, 370)
        },
        spacious: {
            minSpace: new (0, $aG2ym$Size)(24, 24),
            minItemSize: new (0, $aG2ym$Size)(270, 270),
            maxItemSize: new (0, $aG2ym$Size)(370, 370)
        }
    },
    XL: {
        compact: {
            minSpace: new (0, $aG2ym$Size)(20, 20),
            minItemSize: new (0, $aG2ym$Size)(340, 340),
            maxItemSize: new (0, $aG2ym$Size)(460, 460)
        },
        regular: {
            minSpace: new (0, $aG2ym$Size)(24, 24),
            minItemSize: new (0, $aG2ym$Size)(340, 340),
            maxItemSize: new (0, $aG2ym$Size)(460, 460)
        },
        spacious: {
            minSpace: new (0, $aG2ym$Size)(28, 28),
            minItemSize: new (0, $aG2ym$Size)(340, 340),
            maxItemSize: new (0, $aG2ym$Size)(460, 460)
        }
    }
};
const $bbcff092fe610ff3$var$SIZES = [
    'XS',
    'S',
    'M',
    'L',
    'XL'
];
const $bbcff092fe610ff3$var$cardViewStyles = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    if (props.isLoading) rules += ' __wb';
    else rules += ' __wa';
    if (props.isEmpty) rules += ' _Zd';
    rules += ' _6b';
    rules += ' _1c';
    rules += ' _2d';
    if (props.isEmpty) {
        if (props.isFocusVisible) rules += ' _Lb';
    } else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3hmpw';
    return rules;
};
const $bbcff092fe610ff3$export$64992ac69f286e5c = /*#__PURE__*/ (0, $aG2ym$createContext)(null);
const $bbcff092fe610ff3$export$7e52c821f7b6f422 = /*#__PURE__*/ (0, $aG2ym$forwardRef)(function CardView(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $bbcff092fe610ff3$export$64992ac69f286e5c);
    let { children: children, layout: layoutName = 'grid', size: sizeProp = 'M', density: density = 'regular', variant: variant = 'primary', selectionStyle: selectionStyle = 'checkbox', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, ...otherProps } = props;
    let domRef = (0, $aG2ym$useDOMRef)(ref);
    let layout = (0, $aG2ym$useMemo)(()=>{
        return layoutName === 'waterfall' ? new $bbcff092fe610ff3$var$WaterfallLayout() : new $bbcff092fe610ff3$var$FlexibleGridLayout();
    }, [
        layoutName
    ]);
    // This calculates the maximum t-shirt size where at least two columns fit in the available width.
    let [maxSizeIndex, setMaxSizeIndex] = (0, $aG2ym$useState)($bbcff092fe610ff3$var$SIZES.length - 1);
    let updateSize = (0, $aG2ym$useEffectEvent)(()=>{
        let w = domRef.current?.clientWidth ?? 0;
        let i = $bbcff092fe610ff3$var$SIZES.length - 1;
        while(i > 0){
            let opts = $bbcff092fe610ff3$var$layoutOptions[$bbcff092fe610ff3$var$SIZES[i]][density];
            if (w >= opts.minItemSize.width * 2 + opts.minSpace.width * 3) break;
            i--;
        }
        setMaxSizeIndex(i);
    });
    (0, $aG2ym$useResizeObserver)({
        ref: domRef,
        box: 'border-box',
        onResize: updateSize
    });
    (0, $aG2ym$useLayoutEffect)(()=>{
        updateSize();
    }, [
        updateSize
    ]);
    // The actual rendered t-shirt size is the minimum between the size prop and the maximum possible size.
    let size = $bbcff092fe610ff3$var$SIZES[Math.min(maxSizeIndex, $bbcff092fe610ff3$var$SIZES.indexOf(sizeProp))];
    let options = $bbcff092fe610ff3$var$layoutOptions[size][density];
    (0, $aG2ym$useLoadMore)({
        isLoading: props.loadingState !== 'idle' && props.loadingState !== 'error',
        items: props.items,
        onLoadMore: props.onLoadMore
    }, domRef);
    let ctx = (0, $aG2ym$useMemo)(()=>({
            size: size,
            variant: variant
        }), [
        size,
        variant
    ]);
    return /*#__PURE__*/ (0, $aG2ym$jsx)((0, $aG2ym$UNSTABLE_Virtualizer), {
        layout: layout,
        layoutOptions: options,
        children: /*#__PURE__*/ (0, $aG2ym$jsx)((0, $68e4e6fe083e22fd$export$cb658fed5fefe1d).Provider, {
            value: (0, $aG2ym$GridListItem),
            children: /*#__PURE__*/ (0, $aG2ym$jsx)((0, $68e4e6fe083e22fd$export$d0b2ee33ebf7d64).Provider, {
                value: ctx,
                children: /*#__PURE__*/ (0, $aG2ym$jsx)((0, $4b5e069e9e001e8b$export$1b926c015f09611d), {
                    children: /*#__PURE__*/ (0, $aG2ym$jsx)((0, $aG2ym$GridList), {
                        ref: domRef,
                        ...otherProps,
                        layout: "grid",
                        selectionBehavior: selectionStyle === 'highlight' ? 'replace' : 'toggle',
                        style: {
                            ...UNSAFE_style,
                            scrollPadding: options.minSpace.height
                        },
                        className: (renderProps)=>UNSAFE_className + $bbcff092fe610ff3$var$cardViewStyles({
                                ...renderProps,
                                isLoading: props.loadingState === 'loading'
                            }, styles),
                        children: children
                    })
                })
            })
        })
    });
});


export {$bbcff092fe610ff3$export$64992ac69f286e5c as CardViewContext, $bbcff092fe610ff3$export$7e52c821f7b6f422 as CardView};
//# sourceMappingURL=CardView.mjs.map
