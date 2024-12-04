require("./TableView.css");
var $af04e099a53d3e85$exports = require("./Checkbox.cjs");
var $1df9f1c9262ce5df$exports = require("./Chevron.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $e741ea6b88ce4866$exports = require("./Menu.cjs");
var $308b180f49d82d28$exports = require("../icons/runtime.cjs");
var $23350f45c699333e$exports = require("./S2_MoveHorizontalTableWidget.cjs");
var $1c116ea4b0d2d023$exports = require("./ProgressCircle.cjs");
var $22bf2407c3628a21$exports = require("../icons/SortDown.cjs");
var $2197830b90e71c31$exports = require("../icons/SortUp.cjs");
var $ee7b4c497f520c08$exports = require("./utils.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $iLVc8$reactjsxruntime = require("react/jsx-runtime");
var $iLVc8$reactariacomponents = require("react-aria-components");
var $iLVc8$react = require("react");
var $iLVc8$reactstatelyvirtualizer = require("@react-stately/virtualizer");
var $iLVc8$reactspectrumutils = require("@react-spectrum/utils");
var $iLVc8$reactariautils = require("@react-aria/utils");
var $iLVc8$reactariai18n = require("@react-aria/i18n");
var $iLVc8$reactaria = require("react-aria");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TableContext", () => $bed37377ec7a3a9e$export$93e4b0b2cc49b648);
$parcel$export(module.exports, "TableView", () => $bed37377ec7a3a9e$export$b3c27e869d856b7);
$parcel$export(module.exports, "TableBody", () => $bed37377ec7a3a9e$export$76ccd210b9029917);
$parcel$export(module.exports, "Column", () => $bed37377ec7a3a9e$export$816b5d811295e6bc);
$parcel$export(module.exports, "TableHeader", () => $bed37377ec7a3a9e$export$f850895b287ef28e);
$parcel$export(module.exports, "Cell", () => $bed37377ec7a3a9e$export$f6f0c3fe4ec306ea);
$parcel$export(module.exports, "Row", () => $bed37377ec7a3a9e$export$b59bdbef9ce70de2);
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



















let $bed37377ec7a3a9e$var$InternalTableContext = /*#__PURE__*/ (0, $iLVc8$react.createContext)({});
const $bed37377ec7a3a9e$var$tableWrapper = " . oo qo _Zd __Fa __R-yksgrp";
const $bed37377ec7a3a9e$var$table = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    let $o = false;
    let $q = false;
    for (let p of matches){
        if (/^\s*l/.test(p)) $l = true;
        if (/^\s*o/.test(p)) $o = true;
        if (/^\s*q/.test(p)) $q = true;
    }
    if (!$l) rules += ' lb';
    rules += ' __Da';
    if (!$o) rules += ' oo';
    if (!$q) rules += ' qo';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' _eb';
    rules += ' __va';
    rules += ' __wa';
    rules += ' ba_____u';
    if (props.isQuiet) rules += ' ba';
    else rules += ' bd';
    rules += ' da_____v';
    if (props.isFocusVisible) rules += ' dx';
    else rules += ' di';
    if (props.isFocusVisible) rules += ' _Nc';
    else if (props.isQuiet) rules += ' _Na';
    else rules += ' _Nb';
    rules += ' _Lb';
    if (props.isQuiet) rules += ' _va';
    else rules += ' _v-3762yr';
    if (props.isQuiet) rules += ' _wa';
    else rules += ' _w-3762yr';
    if (props.isQuiet) rules += ' _xa';
    else rules += ' _x-3762yr';
    if (props.isQuiet) rules += ' _ya';
    else rules += ' _y-3762yr';
    rules += ' Mj';
    if (props.isCheckboxSelection) rules += ' Kl';
    return rules;
};
// component-height-100
const $bed37377ec7a3a9e$var$DEFAULT_HEADER_HEIGHT = {
    medium: 32,
    large: 40
};
const $bed37377ec7a3a9e$var$ROW_HEIGHTS = {
    compact: {
        medium: 32,
        large: 40
    },
    regular: {
        medium: 40,
        large: 50
    },
    spacious: {
        medium: 48,
        large: 60
    }
};
class $bed37377ec7a3a9e$export$4e03bdf0174fd602 extends (0, $iLVc8$reactariacomponents.UNSTABLE_TableLayout) {
    constructor(options){
        super({
            ...options,
            loaderHeight: 60
        });
    }
    isStickyColumn(node) {
        return node.props.isSticky;
    }
    buildCollection() {
        let [header, body] = super.buildCollection();
        let { children: children, layoutInfo: layoutInfo } = body;
        // TableLayout's buildCollection always sets the body width to the max width between the header width, but
        // we want the body to be sticky and only as wide as the table so it is always in view if loading/empty
        if (children?.length === 0) layoutInfo.rect.width = this.virtualizer.visibleRect.width - 80;
        return [
            header,
            body
        ];
    }
    buildLoader(node, x, y) {
        let layoutNode = super.buildLoader(node, x, y);
        let { layoutInfo: layoutInfo } = layoutNode;
        layoutInfo.allowOverflow = true;
        layoutInfo.rect.width = this.virtualizer.visibleRect.width;
        layoutInfo.isSticky = true;
        return layoutNode;
    }
    buildBody(y) {
        let layoutNode = super.buildBody(y);
        let { children: children, layoutInfo: layoutInfo } = layoutNode;
        // Needs overflow for sticky loader
        layoutInfo.allowOverflow = true;
        // If loading or empty, we'll want the body to be sticky and centered
        if (children?.length === 0) {
            layoutInfo.rect = new (0, $iLVc8$reactstatelyvirtualizer.Rect)(40, 40, this.virtualizer.visibleRect.width - 80, this.virtualizer.visibleRect.height - 80);
            layoutInfo.isSticky = true;
        }
        return {
            ...layoutNode,
            layoutInfo: layoutInfo
        };
    }
    buildRow(node, x, y) {
        let layoutNode = super.buildRow(node, x, y);
        layoutNode.layoutInfo.allowOverflow = true;
        // Needs overflow for sticky selection/drag cells
        return layoutNode;
    }
    buildTableHeader() {
        let layoutNode = super.buildTableHeader();
        // Needs overflow for sticky selection/drag column
        layoutNode.layoutInfo.allowOverflow = true;
        return layoutNode;
    }
    buildColumn(node, x, y) {
        let layoutNode = super.buildColumn(node, x, y);
        // Needs overflow for the resize handle
        layoutNode.layoutInfo.allowOverflow = true;
        return layoutNode;
    }
}
const $bed37377ec7a3a9e$export$93e4b0b2cc49b648 = /*#__PURE__*/ (0, $iLVc8$react.createContext)(null);
const $bed37377ec7a3a9e$export$b3c27e869d856b7 = /*#__PURE__*/ (0, $iLVc8$react.forwardRef)(function TableView(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $bed37377ec7a3a9e$export$93e4b0b2cc49b648);
    let { UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className, isQuiet: isQuiet = false, density: density = 'regular', overflowMode: overflowMode = 'truncate', styles: styles, loadingState: loadingState, onLoadMore: onLoadMore, onResize: propsOnResize, onResizeStart: propsOnResizeStart, onResizeEnd: propsOnResizeEnd, onAction: onAction, ...otherProps } = props;
    let domRef = (0, $iLVc8$reactspectrumutils.useDOMRef)(ref);
    let scale = (0, $ee7b4c497f520c08$exports.useScale)();
    let layout = (0, $iLVc8$react.useMemo)(()=>{
        return new $bed37377ec7a3a9e$export$4e03bdf0174fd602({
            rowHeight: overflowMode === 'wrap' ? undefined : $bed37377ec7a3a9e$var$ROW_HEIGHTS[density][scale],
            estimatedRowHeight: overflowMode === 'wrap' ? $bed37377ec7a3a9e$var$ROW_HEIGHTS[density][scale] : undefined,
            // No need for estimated headingHeight since the headers aren't affected by overflow mode: wrap
            headingHeight: $bed37377ec7a3a9e$var$DEFAULT_HEADER_HEIGHT[scale]
        });
    }, [
        overflowMode,
        density,
        scale
    ]);
    // Starts when the user selects resize from the menu, ends when resizing ends
    // used to control the visibility of the resizer Nubbin
    let [isInResizeMode, setIsInResizeMode] = (0, $iLVc8$react.useState)(false);
    let onResizeStart = (0, $iLVc8$react.useCallback)((widths)=>{
        propsOnResizeStart?.(widths);
    }, [
        propsOnResizeStart
    ]);
    let onResizeEnd = (0, $iLVc8$react.useCallback)((widths)=>{
        setIsInResizeMode(false);
        propsOnResizeEnd?.(widths);
    }, [
        propsOnResizeEnd,
        setIsInResizeMode
    ]);
    let context = (0, $iLVc8$react.useMemo)(()=>({
            isQuiet: isQuiet,
            density: density,
            overflowMode: overflowMode,
            loadingState: loadingState,
            isInResizeMode: isInResizeMode,
            setIsInResizeMode: setIsInResizeMode
        }), [
        isQuiet,
        density,
        overflowMode,
        loadingState,
        isInResizeMode,
        setIsInResizeMode
    ]);
    let isLoading = loadingState === 'loading' || loadingState === 'loadingMore';
    let scrollRef = (0, $iLVc8$react.useRef)(null);
    let memoedLoadMoreProps = (0, $iLVc8$react.useMemo)(()=>({
            isLoading: isLoading,
            onLoadMore: onLoadMore
        }), [
        isLoading,
        onLoadMore
    ]);
    (0, $iLVc8$reactariautils.useLoadMore)(memoedLoadMoreProps, scrollRef);
    let isCheckboxSelection = props.selectionMode === 'multiple' || props.selectionMode === 'single';
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.ResizableTableContainer), {
        // TODO: perhaps this ref should be attached to the RACTable but it expects a table type ref which isn't true in the virtualized case
        ref: domRef,
        onResize: propsOnResize,
        onResizeEnd: onResizeEnd,
        onResizeStart: onResizeStart,
        className: (UNSAFE_className || '') + (0, $308b180f49d82d28$exports.mergeStyles)($bed37377ec7a3a9e$var$tableWrapper, styles),
        style: UNSAFE_style,
        children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.UNSTABLE_Virtualizer), {
            layout: layout,
            children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$InternalTableContext.Provider, {
                value: context,
                children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Table), {
                    ref: scrollRef,
                    // Fix webkit bug where scrollbars appear above the checkboxes/other table elements
                    style: {
                        WebkitTransform: 'translateZ(0)'
                    },
                    className: (renderProps)=>$bed37377ec7a3a9e$var$table({
                            ...renderProps,
                            isCheckboxSelection: isCheckboxSelection,
                            isQuiet: isQuiet
                        }),
                    selectionBehavior: "toggle",
                    onRowAction: onAction,
                    ...otherProps
                })
            })
        })
    });
});
const $bed37377ec7a3a9e$var$centeredWrapper = " . _Zd _1c _2d lb kb";
const $bed37377ec7a3a9e$export$76ccd210b9029917 = /*#__PURE__*/ (0, $iLVc8$react.forwardRef)(function TableBody(props, ref) {
    let { items: items, renderEmptyState: renderEmptyState, children: children } = props;
    let domRef = (0, $iLVc8$reactspectrumutils.useDOMRef)(ref);
    let { loadingState: loadingState } = (0, $iLVc8$react.useContext)($bed37377ec7a3a9e$var$InternalTableContext);
    let emptyRender;
    let renderer = children;
    let stringFormatter = (0, $iLVc8$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    let loadMoreSpinner = /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.UNSTABLE_TableLoadingIndicator), {
        className: " . kb lb",
        children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("div", {
            className: $bed37377ec7a3a9e$var$centeredWrapper,
            children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $1c116ea4b0d2d023$exports.ProgressCircle), {
                isIndeterminate: true,
                "aria-label": stringFormatter.format('table.loadingMore')
            })
        })
    });
    // If the user is rendering their rows in dynamic fashion, wrap their render function in Collection so we can inject
    // the loader. Otherwise it is a static renderer and thus we can simply add the table loader after
    // TODO: this assumes that the user isn't providing their children in some wrapper though and/or isn't doing a map of children
    // (though I guess they wouldn't provide items then so the check for this is still valid in the latter case)...
    if (typeof children === 'function' && items) renderer = /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Collection), {
                items: items,
                children: children
            }),
            loadingState === 'loadingMore' && loadMoreSpinner
        ]
    });
    else renderer = /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactjsxruntime.Fragment), {
        children: [
            children,
            loadingState === 'loadingMore' && loadMoreSpinner
        ]
    });
    if (renderEmptyState != null && loadingState !== 'loading') emptyRender = (props)=>/*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("div", {
            className: $bed37377ec7a3a9e$var$centeredWrapper,
            children: renderEmptyState(props)
        });
    else if (loadingState === 'loading') emptyRender = ()=>/*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("div", {
            className: $bed37377ec7a3a9e$var$centeredWrapper,
            children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $1c116ea4b0d2d023$exports.ProgressCircle), {
                isIndeterminate: true,
                "aria-label": stringFormatter.format('table.loading')
            })
        });
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.TableBody), {
        // @ts-ignore
        ref: domRef,
        className: " . kb",
        ...props,
        renderEmptyState: emptyRender,
        dependencies: [
            loadingState
        ],
        children: renderer
    });
});
const $bed37377ec7a3a9e$var$cellFocus = {
    outlineStyle: {
        default: 'none',
        isFocusVisible: 'solid'
    },
    outlineOffset: -2,
    outlineWidth: 2,
    outlineColor: 'focus-ring',
    borderRadius: '[6px]'
};
function $bed37377ec7a3a9e$var$CellFocusRing() {
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("div", {
        role: "presentation",
        className: function anonymous(props) {
            let rules = " .";
            if (props.isFocusVisible) rules += ' _Lb';
            else rules += ' _La';
            rules += ' _M-3hmpw';
            rules += ' _Nc';
            rules += ' da_____z';
            rules += ' dx';
            rules += ' _v-3762yr';
            rules += ' _w-3762yr';
            rules += ' _x-3762yr';
            rules += ' _y-3762yr';
            rules += ' Ua';
            rules += ' Xa';
            rules += ' Za';
            rules += ' Va';
            rules += ' Wa';
            return rules;
        }({
            isFocusVisible: true
        })
    });
}
const $bed37377ec7a3a9e$var$columnStyles = function anonymous(props) {
    let rules = " .";
    rules += ' k-17zqamw';
    rules += ' __na';
    rules += ' aa_____x';
    if (props.isPressed) rules += ' ao';
    else if (props.isFocusVisible) rules += ' ao';
    else if (props.isHovered) rules += ' ao';
    else rules += ' an';
    if (props.isColumnResizable) rules += ' Ca';
    else rules += ' Cf';
    if (props.isColumnResizable) rules += ' Da';
    else rules += ' Df';
    if (props.align === "end") rules += ' _jc';
    else if (props.align === "center") rules += ' _jb';
    else if (props.align === "start") rules += ' _ja';
    rules += ' _La';
    rules += ' Uc';
    if (props.size === "XL") {
        rules += ' _dbj';
        rules += ' _di';
    } else if (props.size === "L") {
        rules += ' _dbh';
        rules += ' _dg';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "XS") {
        rules += ' _dbb';
        rules += ' _da';
    } else {
        rules += ' _dbf';
        rules += ' _de';
    }
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' _ed';
    rules += ' _Zd';
    rules += ' ca_____v';
    rules += ' ci';
    if (props.isQuiet) rules += ' ub';
    else rules += ' ua';
    rules += ' vb';
    rules += ' sa';
    if (props.isColumnResizable) rules += ' tb';
    else rules += ' ta';
    rules += ' wa';
    rules += ' _zb';
    return rules;
};
const $bed37377ec7a3a9e$export$816b5d811295e6bc = /*#__PURE__*/ (0, $iLVc8$react.forwardRef)(function Column(props, ref) {
    let { isHeaderRowHovered: isHeaderRowHovered } = (0, $iLVc8$react.useContext)($bed37377ec7a3a9e$var$InternalTableHeaderContext);
    let { isQuiet: isQuiet } = (0, $iLVc8$react.useContext)($bed37377ec7a3a9e$var$InternalTableContext);
    let { allowsResizing: allowsResizing, children: children, align: align = 'start' } = props;
    let domRef = (0, $iLVc8$reactspectrumutils.useDOMRef)(ref);
    let isColumnResizable = allowsResizing;
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Column), {
        ...props,
        ref: domRef,
        style: {
            borderInlineEndColor: 'transparent'
        },
        className: (renderProps)=>$bed37377ec7a3a9e$var$columnStyles({
                ...renderProps,
                isColumnResizable: isColumnResizable,
                align: align,
                isQuiet: isQuiet
            }),
        children: ({ allowsSorting: allowsSorting, sortDirection: sortDirection, isFocusVisible: isFocusVisible, sort: sort, startResize: startResize, isHovered: isHovered })=>/*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactjsxruntime.Fragment), {
                children: [
                    isFocusVisible && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$CellFocusRing, {}),
                    isColumnResizable ? /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$ResizableColumnContents, {
                        allowsSorting: allowsSorting,
                        sortDirection: sortDirection,
                        sort: sort,
                        startResize: startResize,
                        isHovered: isHeaderRowHovered || isHovered,
                        align: align,
                        children: children
                    }) : /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$ColumnContents, {
                        allowsSorting: allowsSorting,
                        sortDirection: sortDirection,
                        children: children
                    })
                ]
            })
    });
});
const $bed37377ec7a3a9e$var$columnContentWrapper = " . qo _Zd _1c lb";
const $bed37377ec7a3a9e$var$sortIcon = function anonymous(props) {
    let rules = " .";
    rules += ' l-1wikn8b';
    rules += ' k-1wikn8b';
    rules += ' _8-3t1x';
    if (props.isButton) {
        rules += ' zbH';
        rules += ' zG';
    } else rules += ' zd';
    if (props.isButton) rules += ' _kundefined';
    else rules += ' _kd';
    rules += ' -rwx0fg_e-b';
    return rules;
};
function $bed37377ec7a3a9e$var$ColumnContents(props) {
    let { allowsSorting: allowsSorting, sortDirection: sortDirection, children: children } = props;
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)("div", {
        className: $bed37377ec7a3a9e$var$columnContentWrapper,
        children: [
            allowsSorting && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Provider), {
                values: [
                    [
                        (0, $bde97c91243ed164$exports.IconContext),
                        {
                            styles: $bed37377ec7a3a9e$var$sortIcon({})
                        }
                    ]
                ],
                children: sortDirection != null && (sortDirection === 'ascending' ? /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $2197830b90e71c31$exports.default), {}) : /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $22bf2407c3628a21$exports.default), {}))
            }),
            /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("span", {
                className: " . __vb __wb _ma _pb lb",
                children: children
            })
        ]
    });
}
const $bed37377ec7a3a9e$var$resizableMenuButtonWrapper = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' _M-3hmpw';
    rules += ' _Nc';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _v-3762yr';
    rules += ' _w-3762yr';
    rules += ' _x-3762yr';
    rules += ' _y-3762yr';
    rules += ' an';
    rules += ' lb';
    rules += ' Uc';
    rules += ' _Zd';
    rules += ' _1c';
    if (props.align === "end") rules += ' _2c';
    else if (props.align === "center") rules += ' _2d';
    else if (props.align === "default") rules += ' _2b';
    rules += ' Cf';
    rules += ' Df';
    rules += ' ba';
    rules += ' wf';
    if (props.size === "XL") {
        rules += ' _dbj';
        rules += ' _di';
    } else if (props.size === "L") {
        rules += ' _dbh';
        rules += ' _dg';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "XS") {
        rules += ' _dbb';
        rules += ' _da';
    } else {
        rules += ' _dbf';
        rules += ' _de';
    }
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
    rules += ' _ed';
    return rules;
};
const $bed37377ec7a3a9e$var$resizerHandleContainer = function anonymous(props) {
    let rules = " .";
    if (props.isHovered) rules += ' _Za';
    else if (props.isResizing) rules += ' _Za';
    else rules += ' _Zj';
    rules += ' lA';
    rules += ' kb';
    rules += ' Ua';
    rules += ' Xa';
    rules += ' W-2al4ab';
    if (props.resizableDirection === "both") rules += ' __HD';
    else if (props.resizableDirection === "right") rules += ' __Hz';
    else if (props.resizableDirection === "left") rules += ' __Hx';
    else rules += ' __Hi';
    return rules;
};
const $bed37377ec7a3a9e$var$resizerHandle = function anonymous(props) {
    let rules = " .";
    if (props.isResizing) rules += ' ba_____z';
    else if (props.isFocusVisible) rules += ' ba_____z';
    else if (props.isHovered) rules += ' ba_____v';
    else rules += ' ba_____u';
    if (props.isResizing) rules += ' b-14crvkh';
    else if (props.isFocusVisible) rules += ' b-14crvkh';
    else if (props.isHovered) rules += ' bi';
    else rules += ' ba';
    if (props.isResizing) rules += ' kn';
    else rules += ' kb';
    if (props.isResizing) rules += ' lq';
    else rules += ' lp';
    rules += ' Ua';
    rules += ' V-6njx2e';
    return rules;
};
const $bed37377ec7a3a9e$var$columnHeaderText = " . __vb __wb _ma _pb q-1wikn8b _9-3t1x _8-3t1y hF";
const $bed37377ec7a3a9e$var$chevronIcon = " . R-3hn0u yG ybH q-1wikn8b _8-3t1x -rwx0fg_e-b";
const $bed37377ec7a3a9e$var$nubbin = " . Ua Xa V-avx9c1 l-1wikn8b k-1wikn8b e-14crvkh ea_____X -rwx0fg_e-A -rwx0fg_e-a_____Y";
function $bed37377ec7a3a9e$var$ResizableColumnContents(props) {
    let { allowsSorting: allowsSorting, sortDirection: sortDirection, sort: sort, startResize: startResize, children: children, isHovered: isHovered, align: align } = props;
    let { setIsInResizeMode: setIsInResizeMode, isInResizeMode: isInResizeMode } = (0, $iLVc8$react.useContext)($bed37377ec7a3a9e$var$InternalTableContext);
    let stringFormatter = (0, $iLVc8$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    const onMenuSelect = (key)=>{
        switch(key){
            case 'sort-asc':
                sort('ascending');
                break;
            case 'sort-desc':
                sort('descending');
                break;
            case 'resize':
                setIsInResizeMode?.(true);
                startResize();
                break;
        }
    };
    let items = (0, $iLVc8$react.useMemo)(()=>{
        let options = [
            {
                label: stringFormatter.format('table.resizeColumn'),
                id: 'resize'
            }
        ];
        if (allowsSorting) options = [
            {
                label: stringFormatter.format('table.sortAscending'),
                id: 'sort-asc'
            },
            {
                label: stringFormatter.format('table.sortDescending'),
                id: 'sort-desc'
            },
            ...options
        ];
        return options;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        allowsSorting
    ]);
    let buttonAlignment = 'start';
    let menuAlign = 'start';
    if (align === 'center') buttonAlignment = 'center';
    else if (align === 'end') {
        buttonAlignment = 'end';
        menuAlign = 'end';
    }
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $e741ea6b88ce4866$exports.MenuTrigger), {
                align: menuAlign,
                children: [
                    /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactariacomponents.Button), {
                        className: (renderProps)=>$bed37377ec7a3a9e$var$resizableMenuButtonWrapper({
                                ...renderProps,
                                align: buttonAlignment
                            }),
                        children: [
                            allowsSorting && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Provider), {
                                values: [
                                    [
                                        (0, $bde97c91243ed164$exports.IconContext),
                                        {
                                            styles: $bed37377ec7a3a9e$var$sortIcon({
                                                isButton: true
                                            })
                                        }
                                    ]
                                ],
                                children: sortDirection != null && (sortDirection === 'ascending' ? /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $2197830b90e71c31$exports.default), {}) : /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $22bf2407c3628a21$exports.default), {}))
                            }),
                            /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("div", {
                                className: $bed37377ec7a3a9e$var$columnHeaderText,
                                children: children
                            }),
                            /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $1df9f1c9262ce5df$exports.default), {
                                size: "M",
                                className: $bed37377ec7a3a9e$var$chevronIcon
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $e741ea6b88ce4866$exports.Menu), {
                        onAction: onMenuSelect,
                        items: items,
                        styles: " . q__s",
                        children: (item)=>/*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $e741ea6b88ce4866$exports.MenuItem), {
                                children: item?.label
                            })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("div", {
                "data-react-aria-prevent-focus": "true",
                children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.ColumnResizer), {
                    "data-react-aria-prevent-focus": "true",
                    className: ({ resizableDirection: resizableDirection, isResizing: isResizing })=>$bed37377ec7a3a9e$var$resizerHandleContainer({
                            resizableDirection: resizableDirection,
                            isResizing: isResizing,
                            isHovered: isInResizeMode || isHovered
                        }),
                    children: ({ isFocusVisible: isFocusVisible, isResizing: isResizing })=>/*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactjsxruntime.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$ResizerIndicator, {
                                    isInResizeMode: isInResizeMode,
                                    isFocusVisible: isFocusVisible,
                                    isHovered: isHovered,
                                    isResizing: isResizing
                                }),
                                (isFocusVisible || isInResizeMode) && isResizing && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("div", {
                                    className: $bed37377ec7a3a9e$var$nubbin,
                                    children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $23350f45c699333e$exports.default), {})
                                })
                            ]
                        })
                })
            })
        ]
    });
}
function $bed37377ec7a3a9e$var$ResizerIndicator({ isFocusVisible: isFocusVisible, isHovered: isHovered, isResizing: isResizing, isInResizeMode: isInResizeMode }) {
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("div", {
        className: $bed37377ec7a3a9e$var$resizerHandle({
            isFocusVisible: isFocusVisible,
            isHovered: isHovered || isInResizeMode,
            isResizing: isResizing
        })
    });
}
const $bed37377ec7a3a9e$var$tableHeader = " . kb lb bf A-yj899n";
const $bed37377ec7a3a9e$var$selectAllCheckbox = " . yf";
const $bed37377ec7a3a9e$var$selectAllCheckboxColumn = function anonymous(props) {
    let rules = " .";
    rules += ' Ea';
    rules += ' Fa';
    rules += ' Ca';
    rules += ' Da';
    rules += ' kb';
    rules += ' __na';
    rules += ' _La';
    rules += ' Uc';
    rules += ' _0b';
    rules += ' ca_____v';
    rules += ' ci';
    rules += ' sa';
    rules += ' ta';
    if (props.isQuiet) rules += ' ub';
    else rules += ' ua';
    rules += ' vb';
    rules += ' wa';
    rules += ' bf';
    return rules;
};
let $bed37377ec7a3a9e$var$InternalTableHeaderContext = /*#__PURE__*/ (0, $iLVc8$react.createContext)({
    isHeaderRowHovered: false
});
const $bed37377ec7a3a9e$export$f850895b287ef28e = /*#__PURE__*/ (0, $iLVc8$react.forwardRef)(function TableHeader({ columns: columns, children: children }, ref) {
    let scale = (0, $ee7b4c497f520c08$exports.useScale)();
    let { selectionBehavior: selectionBehavior, selectionMode: selectionMode } = (0, $iLVc8$reactariacomponents.useTableOptions)();
    let { isQuiet: isQuiet } = (0, $iLVc8$react.useContext)($bed37377ec7a3a9e$var$InternalTableContext);
    let [isHeaderRowHovered, setHeaderRowHovered] = (0, $iLVc8$react.useState)(false);
    let domRef = (0, $iLVc8$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$InternalTableHeaderContext.Provider, {
        value: {
            isHeaderRowHovered: isHeaderRowHovered
        },
        children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactariacomponents.TableHeader), {
            // @ts-ignore
            ref: domRef,
            onHoverChange: setHeaderRowHovered,
            className: $bed37377ec7a3a9e$var$tableHeader,
            children: [
                selectionBehavior === 'toggle' && // Also isSticky prop is applied just for the layout, will decide what the RAC api should be later
                // @ts-ignore
                /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Column), {
                    isSticky: true,
                    width: scale === 'medium' ? 40 : 52,
                    minWidth: scale === 'medium' ? 40 : 52,
                    className: $bed37377ec7a3a9e$var$selectAllCheckboxColumn({
                        isQuiet: isQuiet
                    }),
                    children: ({ isFocusVisible: isFocusVisible })=>/*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactjsxruntime.Fragment), {
                            children: [
                                selectionMode === 'single' && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactjsxruntime.Fragment), {
                                    children: [
                                        isFocusVisible && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$CellFocusRing, {}),
                                        /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$VisuallyHiddenSelectAllLabel, {})
                                    ]
                                }),
                                selectionMode === 'multiple' && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $af04e099a53d3e85$exports.Checkbox), {
                                    isEmphasized: true,
                                    styles: $bed37377ec7a3a9e$var$selectAllCheckbox,
                                    slot: "selection"
                                })
                            ]
                        })
                }),
                /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Collection), {
                    items: columns,
                    children: children
                })
            ]
        })
    });
});
function $bed37377ec7a3a9e$var$VisuallyHiddenSelectAllLabel() {
    let checkboxProps = (0, $iLVc8$reactariacomponents.useSlottedContext)((0, $iLVc8$reactariacomponents.CheckboxContext), 'selection');
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactaria.VisuallyHidden), {
        children: checkboxProps?.['aria-label']
    });
}
const $bed37377ec7a3a9e$var$commonCellStyles = {
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderXWidth: 0,
    borderStyle: 'solid',
    position: 'relative',
    color: {
        default: 'gray-800',
        forcedColors: 'ButtonText'
    },
    outlineStyle: 'none',
    paddingX: 16 // table-edge-to-content
};
const $bed37377ec7a3a9e$var$cell = function anonymous(props) {
    let rules = " .";
    rules += ' ca_____v';
    rules += ' ci';
    rules += ' v-375tp1';
    rules += ' u-375tp0';
    rules += ' sa';
    if (props.isDivider) rules += ' tb';
    else rules += ' ta';
    if (props.isDivider) rules += ' wa';
    else rules += ' wf';
    rules += ' Uc';
    if (props.isPressed) rules += ' ao';
    else if (props.isFocusVisible) rules += ' ao';
    else if (props.isHovered) rules += ' ao';
    else rules += ' an';
    rules += ' _La';
    rules += ' Cf';
    rules += ' Df';
    rules += ' E-1dbqcch';
    rules += ' F-1dbqcch';
    rules += ' o-375tou';
    rules += ' __na';
    rules += ' kb';
    rules += ' lb';
    if (props.size === "XL") {
        rules += ' _dbj';
        rules += ' _di';
    } else if (props.size === "L") {
        rules += ' _dbh';
        rules += ' _dg';
    } else if (props.size === "S") {
        rules += ' _dbd';
        rules += ' _dc';
    } else if (props.size === "XS") {
        rules += ' _dbb';
        rules += ' _da';
    } else {
        rules += ' _dbf';
        rules += ' _de';
    }
    rules += ' _1c';
    rules += ' _Zd';
    if (props.density === "spacious") rules += ' -_375tou_o-_a';
    else if (props.density === "compact") rules += ' -_375tou_o-U';
    else rules += ' -_375tou_o-2';
    rules += ' -_375tp0_u-a';
    rules += ' -_375tp1_v-b';
    return rules;
};
const $bed37377ec7a3a9e$var$stickyCell = {
    backgroundColor: 'gray-25'
};
const $bed37377ec7a3a9e$var$checkboxCellStyle = " . ca va ua sa ta wa Uc an aa_____x _La Cf Df b-19jpv4m _0b k-1xrzxd1";
const $bed37377ec7a3a9e$var$cellContent = function anonymous(props) {
    let rules = " .";
    rules += ' __vb';
    rules += ' __wb';
    rules += ' _ma';
    if (props.overflowMode === "wrap") rules += ' _pa';
    else rules += ' _pb';
    if (props.align === "end") rules += ' _jc';
    else if (props.align === "center") rules += ' _jb';
    else if (props.align === "start") rules += ' _ja';
    rules += ' lb';
    rules += ' __Fa';
    if (props.isSticky) rules += ' Ea';
    else rules += ' Ec';
    if (props.isSticky) rules += ' Fa';
    else rules += ' Fc';
    if (props.isSticky) rules += ' Ca';
    else rules += ' Cc';
    if (props.isSticky) rules += ' Da';
    else rules += ' Dc';
    if (props.isSticky) rules += ' Aa';
    else rules += ' AK';
    if (props.isSticky) rules += ' Ba';
    else rules += ' BK';
    if (props.isSticky) rules += ' ya';
    else rules += ' yK';
    if (props.isSticky) rules += ' za';
    else rules += ' zK';
    if (props.isSticky) rules += ' b-19jpv4m';
    else rules += ' ba';
    return rules;
};
const $bed37377ec7a3a9e$export$f6f0c3fe4ec306ea = /*#__PURE__*/ (0, $iLVc8$react.forwardRef)(function Cell(props, ref) {
    let { children: children, isSticky: isSticky, showDivider: showDivider = false, align: align, textValue: textValue, ...otherProps } = props;
    let domRef = (0, $iLVc8$reactspectrumutils.useDOMRef)(ref);
    let tableVisualOptions = (0, $iLVc8$react.useContext)($bed37377ec7a3a9e$var$InternalTableContext);
    textValue ||= typeof children === 'string' ? children : undefined;
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Cell), {
        ref: domRef,
        // Also isSticky prop is applied just for the layout, will decide what the RAC api should be later
        // @ts-ignore
        isSticky: isSticky,
        className: (renderProps)=>$bed37377ec7a3a9e$var$cell({
                ...renderProps,
                ...tableVisualOptions,
                isDivider: showDivider
            }),
        textValue: textValue,
        ...otherProps,
        children: ({ isFocusVisible: isFocusVisible })=>/*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactjsxruntime.Fragment), {
                children: [
                    isFocusVisible && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$var$CellFocusRing, {}),
                    /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)("span", {
                        className: $bed37377ec7a3a9e$var$cellContent({
                            ...tableVisualOptions,
                            isSticky: isSticky,
                            align: align || 'start'
                        }),
                        children: children
                    })
                ]
            })
    });
});
// Use color-mix instead of transparency so sticky cells work correctly.
const $bed37377ec7a3a9e$var$selectedBackground = "[light-dark(color-mix(in srgb, light-dark(rgb(255, 255, 255), rgb(17, 17, 17)), light-dark(rgb(59, 99, 251), rgb(86, 129, 255)) 10%), color-mix(in srgb, light-dark(rgb(255, 255, 255), rgb(17, 17, 17)), light-dark(rgb(93, 137, 255), rgb(52, 91, 248)) 10%))]";
const $bed37377ec7a3a9e$var$selectedActiveBackground = "[light-dark(color-mix(in srgb, light-dark(rgb(255, 255, 255), rgb(17, 17, 17)), light-dark(rgb(59, 99, 251), rgb(86, 129, 255)) 15%), color-mix(in srgb, light-dark(rgb(255, 255, 255), rgb(17, 17, 17)), light-dark(rgb(93, 137, 255), rgb(52, 91, 248)) 15%))]";
const $bed37377ec7a3a9e$var$rowBackgroundColor = {
    default: {
        default: 'gray-25',
        isQuiet: '--s2-container-bg'
    },
    isFocusVisibleWithin: "[color-mix(in srgb, light-dark(rgb(255, 255, 255), rgb(17, 17, 17)), light-dark(rgb(19, 19, 19), rgb(242, 242, 242)) 7%)]",
    isHovered: "[color-mix(in srgb, light-dark(rgb(255, 255, 255), rgb(17, 17, 17)), light-dark(rgb(19, 19, 19), rgb(242, 242, 242)) 7%)]",
    isPressed: "[color-mix(in srgb, light-dark(rgb(255, 255, 255), rgb(17, 17, 17)), light-dark(rgb(19, 19, 19), rgb(242, 242, 242)) 10%)]",
    isSelected: {
        default: $bed37377ec7a3a9e$var$selectedBackground,
        isFocusVisibleWithin: $bed37377ec7a3a9e$var$selectedActiveBackground,
        isHovered: $bed37377ec7a3a9e$var$selectedActiveBackground,
        isPressed: $bed37377ec7a3a9e$var$selectedActiveBackground // table-selected-row-background-color, opacity /15
    },
    forcedColors: {
        default: 'Background'
    }
};
const $bed37377ec7a3a9e$var$row = function anonymous(props) {
    let rules = " .";
    rules += ' kb';
    rules += ' Uc';
    rules += ' __na';
    rules += ' b-19jpv4m';
    rules += ' -_19jpv4m_b-a_____u';
    if (props.isSelected) {
        if (props.isPressed) rules += ' -_19jpv4m_b--1hocwbr';
        else if (props.isHovered) rules += ' -_19jpv4m_b--1hocwbr';
        else if (props.isFocusVisibleWithin) rules += ' -_19jpv4m_b--1hocwbr';
        else rules += ' -_19jpv4m_b--sogeql';
    } else if (props.isPressed) rules += ' -_19jpv4m_b--17nxj1';
    else if (props.isHovered) rules += ' -_19jpv4m_b--26tcdv';
    else if (props.isFocusVisibleWithin) rules += ' -_19jpv4m_b--26tcdv';
    else if (props.isQuiet) rules += ' -_19jpv4m_b--1de2x0q';
    else rules += ' -_19jpv4m_b-d';
    rules += ' -oorfdf_d-a_____z';
    rules += ' -oorfdf_d-x';
    rules += ' _La';
    rules += ' ua';
    rules += ' vb';
    rules += ' sa';
    rules += ' ta';
    rules += ' wa';
    rules += ' ca_____v';
    rules += ' ci';
    rules += ' _zb';
    return rules;
};
const $bed37377ec7a3a9e$export$b59bdbef9ce70de2 = /*#__PURE__*/ (0, $iLVc8$react.forwardRef)(function Row({ id: id, columns: columns, children: children, ...otherProps }, ref) {
    let { selectionBehavior: selectionBehavior, selectionMode: selectionMode } = (0, $iLVc8$reactariacomponents.useTableOptions)();
    let tableVisualOptions = (0, $iLVc8$react.useContext)($bed37377ec7a3a9e$var$InternalTableContext);
    let domRef = (0, $iLVc8$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsxs)((0, $iLVc8$reactariacomponents.Row), {
        // @ts-ignore
        ref: domRef,
        id: id,
        className: (renderProps)=>$bed37377ec7a3a9e$var$row({
                ...renderProps,
                ...tableVisualOptions
            }) + (renderProps.isFocusVisible && " -zwoa9h"),
        ...otherProps,
        children: [
            selectionMode !== 'none' && selectionBehavior === 'toggle' && /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)($bed37377ec7a3a9e$export$f6f0c3fe4ec306ea, {
                isSticky: true,
                className: $bed37377ec7a3a9e$var$checkboxCellStyle,
                children: /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $af04e099a53d3e85$exports.Checkbox), {
                    isEmphasized: true,
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ (0, $iLVc8$reactjsxruntime.jsx)((0, $iLVc8$reactariacomponents.Collection), {
                items: columns,
                children: children
            })
        ]
    });
});


//# sourceMappingURL=TableView.cjs.map
