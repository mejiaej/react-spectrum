require("./CardView.css");
var $230078a1c4ce81d8$exports = require("./Card.cjs");
var $a4f1585b527b9b7a$exports = require("./ImageCoordinator.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $gDulG$reactjsxruntime = require("react/jsx-runtime");
var $gDulG$reactariacomponents = require("react-aria-components");
var $gDulG$react = require("react");
var $gDulG$reactstatelyvirtualizer = require("@react-stately/virtualizer");
var $gDulG$reactspectrumutils = require("@react-spectrum/utils");
var $gDulG$reactariautils = require("@react-aria/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CardViewContext", () => $1aaf8931044a97bd$export$64992ac69f286e5c);
$parcel$export(module.exports, "CardView", () => $1aaf8931044a97bd$export$7e52c821f7b6f422);
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








class $1aaf8931044a97bd$var$FlexibleGridLayout extends (0, $gDulG$reactstatelyvirtualizer.Layout) {
    update(invalidationContext) {
        let { minItemSize: minItemSize = new (0, $gDulG$reactstatelyvirtualizer.Size)(200, 200), maxItemSize: maxItemSize = new (0, $gDulG$reactstatelyvirtualizer.Size)(Infinity, Infinity), minSpace: minSpace = new (0, $gDulG$reactstatelyvirtualizer.Size)(18, 18), maxColumns: maxColumns = Infinity } = invalidationContext.layoutOptions || {};
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
                let rect = new (0, $gDulG$reactstatelyvirtualizer.Rect)(x, y, itemWidth, height);
                let layoutInfo = new (0, $gDulG$reactstatelyvirtualizer.LayoutInfo)(node.type, key, rect);
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
        this.contentSize = new (0, $gDulG$reactstatelyvirtualizer.Size)(this.virtualizer.visibleRect.width, y);
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
        super(...args), this.contentSize = new (0, $gDulG$reactstatelyvirtualizer.Size)(), this.layoutInfos = new Map();
    }
}
class $1aaf8931044a97bd$var$WaterfallLayoutInfo extends (0, $gDulG$reactstatelyvirtualizer.LayoutInfo) {
    copy() {
        let res = super.copy();
        res.column = this.column;
        return res;
    }
    constructor(...args){
        super(...args), this.column = 0;
    }
}
class $1aaf8931044a97bd$var$WaterfallLayout extends (0, $gDulG$reactstatelyvirtualizer.Layout) {
    update(invalidationContext) {
        let { minItemSize: minItemSize = new (0, $gDulG$reactstatelyvirtualizer.Size)(200, 200), maxItemSize: maxItemSize = new (0, $gDulG$reactstatelyvirtualizer.Size)(Infinity, Infinity), minSpace: minSpace = new (0, $gDulG$reactstatelyvirtualizer.Size)(18, 18), maxColumns: maxColumns = Infinity } = invalidationContext.layoutOptions || {};
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
            let rect = new (0, $gDulG$reactstatelyvirtualizer.Rect)(x, y, itemWidth, height);
            let layoutInfo = new $1aaf8931044a97bd$var$WaterfallLayoutInfo(node.type, key, rect);
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
        this.contentSize = new (0, $gDulG$reactstatelyvirtualizer.Size)(this.virtualizer.visibleRect.width, maxHeight);
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
        let rect = new (0, $gDulG$reactstatelyvirtualizer.Rect)(layoutInfo.rect.maxX, layoutInfo.rect.y, this.virtualizer.visibleRect.maxX - layoutInfo.rect.maxX, layoutInfo.rect.height);
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
        let rect = new (0, $gDulG$reactstatelyvirtualizer.Rect)(0, layoutInfo.rect.y, layoutInfo.rect.x, layoutInfo.rect.height);
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
        super(...args), this.contentSize = new (0, $gDulG$reactstatelyvirtualizer.Size)(), this.layoutInfos = new Map(), this.numColumns = 0;
    }
}
const $1aaf8931044a97bd$var$layoutOptions = {
    XS: {
        compact: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(6, 6),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(100, 100),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(140, 140)
        },
        regular: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(8, 8),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(100, 100),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(140, 140)
        },
        spacious: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(12, 12),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(100, 100),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(140, 140)
        }
    },
    S: {
        compact: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(8, 8),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(150, 150),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(210, 210)
        },
        regular: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(12, 12),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(150, 150),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(210, 210)
        },
        spacious: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(16, 16),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(150, 150),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(210, 210)
        }
    },
    M: {
        compact: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(12, 12),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(200, 200),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(280, 280)
        },
        regular: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(16, 16),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(200, 200),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(280, 280)
        },
        spacious: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(20, 20),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(200, 200),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(280, 280)
        }
    },
    L: {
        compact: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(16, 16),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(270, 270),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(370, 370)
        },
        regular: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(20, 20),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(270, 270),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(370, 370)
        },
        spacious: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(24, 24),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(270, 270),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(370, 370)
        }
    },
    XL: {
        compact: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(20, 20),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(340, 340),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(460, 460)
        },
        regular: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(24, 24),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(340, 340),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(460, 460)
        },
        spacious: {
            minSpace: new (0, $gDulG$reactstatelyvirtualizer.Size)(28, 28),
            minItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(340, 340),
            maxItemSize: new (0, $gDulG$reactstatelyvirtualizer.Size)(460, 460)
        }
    }
};
const $1aaf8931044a97bd$var$SIZES = [
    'XS',
    'S',
    'M',
    'L',
    'XL'
];
const $1aaf8931044a97bd$var$cardViewStyles = function anonymous(props, overrides) {
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
const $1aaf8931044a97bd$export$64992ac69f286e5c = /*#__PURE__*/ (0, $gDulG$react.createContext)(null);
const $1aaf8931044a97bd$export$7e52c821f7b6f422 = /*#__PURE__*/ (0, $gDulG$react.forwardRef)(function CardView(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $1aaf8931044a97bd$export$64992ac69f286e5c);
    let { children: children, layout: layoutName = 'grid', size: sizeProp = 'M', density: density = 'regular', variant: variant = 'primary', selectionStyle: selectionStyle = 'checkbox', UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, ...otherProps } = props;
    let domRef = (0, $gDulG$reactspectrumutils.useDOMRef)(ref);
    let layout = (0, $gDulG$react.useMemo)(()=>{
        return layoutName === 'waterfall' ? new $1aaf8931044a97bd$var$WaterfallLayout() : new $1aaf8931044a97bd$var$FlexibleGridLayout();
    }, [
        layoutName
    ]);
    // This calculates the maximum t-shirt size where at least two columns fit in the available width.
    let [maxSizeIndex, setMaxSizeIndex] = (0, $gDulG$react.useState)($1aaf8931044a97bd$var$SIZES.length - 1);
    let updateSize = (0, $gDulG$reactariautils.useEffectEvent)(()=>{
        let w = domRef.current?.clientWidth ?? 0;
        let i = $1aaf8931044a97bd$var$SIZES.length - 1;
        while(i > 0){
            let opts = $1aaf8931044a97bd$var$layoutOptions[$1aaf8931044a97bd$var$SIZES[i]][density];
            if (w >= opts.minItemSize.width * 2 + opts.minSpace.width * 3) break;
            i--;
        }
        setMaxSizeIndex(i);
    });
    (0, $gDulG$reactariautils.useResizeObserver)({
        ref: domRef,
        box: 'border-box',
        onResize: updateSize
    });
    (0, $gDulG$reactariautils.useLayoutEffect)(()=>{
        updateSize();
    }, [
        updateSize
    ]);
    // The actual rendered t-shirt size is the minimum between the size prop and the maximum possible size.
    let size = $1aaf8931044a97bd$var$SIZES[Math.min(maxSizeIndex, $1aaf8931044a97bd$var$SIZES.indexOf(sizeProp))];
    let options = $1aaf8931044a97bd$var$layoutOptions[size][density];
    (0, $gDulG$reactariautils.useLoadMore)({
        isLoading: props.loadingState !== 'idle' && props.loadingState !== 'error',
        items: props.items,
        onLoadMore: props.onLoadMore
    }, domRef);
    let ctx = (0, $gDulG$react.useMemo)(()=>({
            size: size,
            variant: variant
        }), [
        size,
        variant
    ]);
    return /*#__PURE__*/ (0, $gDulG$reactjsxruntime.jsx)((0, $gDulG$reactariacomponents.UNSTABLE_Virtualizer), {
        layout: layout,
        layoutOptions: options,
        children: /*#__PURE__*/ (0, $gDulG$reactjsxruntime.jsx)((0, $230078a1c4ce81d8$exports.InternalCardViewContext).Provider, {
            value: (0, $gDulG$reactariacomponents.GridListItem),
            children: /*#__PURE__*/ (0, $gDulG$reactjsxruntime.jsx)((0, $230078a1c4ce81d8$exports.CardContext).Provider, {
                value: ctx,
                children: /*#__PURE__*/ (0, $gDulG$reactjsxruntime.jsx)((0, $a4f1585b527b9b7a$exports.ImageCoordinator), {
                    children: /*#__PURE__*/ (0, $gDulG$reactjsxruntime.jsx)((0, $gDulG$reactariacomponents.GridList), {
                        ref: domRef,
                        ...otherProps,
                        layout: "grid",
                        selectionBehavior: selectionStyle === 'highlight' ? 'replace' : 'toggle',
                        style: {
                            ...UNSAFE_style,
                            scrollPadding: options.minSpace.height
                        },
                        className: (renderProps)=>UNSAFE_className + $1aaf8931044a97bd$var$cardViewStyles({
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


//# sourceMappingURL=CardView.cjs.map
