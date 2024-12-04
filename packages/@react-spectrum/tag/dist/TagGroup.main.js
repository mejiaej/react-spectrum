var $a85da3418799ba7d$exports = require("./intlStrings.main.js");
require("./vars.c840a2b4.css");
var $ed889f8f1f091fc8$exports = require("./tags_vars_css.main.js");
var $dd2c5d00108c1840$exports = require("./Tag.main.js");
var $gBwi7$reactspectrumbutton = require("@react-spectrum/button");
var $gBwi7$reactariatag = require("@react-aria/tag");
var $gBwi7$reactspectrumutils = require("@react-spectrum/utils");
var $gBwi7$reactspectrumlabel = require("@react-spectrum/label");
var $gBwi7$reactariafocus = require("@react-aria/focus");
var $gBwi7$reactstatelylist = require("@react-stately/list");
var $gBwi7$reactariaselection = require("@react-aria/selection");
var $gBwi7$reactspectrumprovider = require("@react-spectrum/provider");
var $gBwi7$react = require("react");
var $gBwi7$reactspectrumform = require("@react-spectrum/form");
var $gBwi7$reactariautils = require("@react-aria/utils");
var $gBwi7$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TagGroup", () => $e7b72d8874e98cd4$export$67ea30858aaf75e3);
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














const $e7b72d8874e98cd4$var$TAG_STYLES = {
    medium: {
        height: 24,
        margin: 4
    },
    large: {
        height: 30,
        margin: 5
    }
};
const $e7b72d8874e98cd4$export$67ea30858aaf75e3 = /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).forwardRef(function TagGroup(props, ref) {
    props = (0, $gBwi7$reactspectrumprovider.useProviderProps)(props);
    props = (0, $gBwi7$reactspectrumform.useFormProps)(props);
    let { maxRows: maxRows, children: children, actionLabel: actionLabel, onAction: onAction, labelPosition: labelPosition, renderEmptyState: renderEmptyState = ()=>stringFormatter.format('noTags') } = props;
    let domRef = (0, $gBwi7$reactspectrumutils.useDOMRef)(ref);
    let containerRef = (0, $gBwi7$react.useRef)(null);
    let tagsRef = (0, $gBwi7$react.useRef)(null);
    let { direction: direction } = (0, $gBwi7$reactariai18n.useLocale)();
    let { scale: scale } = (0, $gBwi7$reactspectrumprovider.useProvider)();
    let stringFormatter = (0, $gBwi7$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($a85da3418799ba7d$exports))), '@react-spectrum/tag');
    let [isCollapsed, setIsCollapsed] = (0, $gBwi7$react.useState)(maxRows != null);
    let state = (0, $gBwi7$reactstatelylist.useListState)(props);
    let [tagState, setTagState] = (0, $gBwi7$reactariautils.useValueEffect)({
        visibleTagCount: state.collection.size,
        showCollapseButton: false
    });
    let keyboardDelegate = (0, $gBwi7$react.useMemo)(()=>{
        let collection = isCollapsed ? new (0, $gBwi7$reactstatelylist.ListCollection)([
            ...state.collection
        ].slice(0, tagState.visibleTagCount)) : new (0, $gBwi7$reactstatelylist.ListCollection)([
            ...state.collection
        ]);
        return new (0, $gBwi7$reactariaselection.ListKeyboardDelegate)({
            collection: collection,
            ref: domRef,
            direction: direction,
            orientation: 'horizontal'
        });
    }, [
        direction,
        isCollapsed,
        state.collection,
        tagState.visibleTagCount,
        domRef
    ]);
    // Remove onAction from props so it doesn't make it into useGridList.
    delete props.onAction;
    let { gridProps: gridProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $gBwi7$reactariatag.useTagGroup)({
        ...props,
        keyboardDelegate: keyboardDelegate
    }, state, tagsRef);
    let actionsId = (0, $gBwi7$reactariautils.useId)();
    let actionsRef = (0, $gBwi7$react.useRef)(null);
    let updateVisibleTagCount = (0, $gBwi7$react.useCallback)(()=>{
        if (maxRows && maxRows > 0) {
            let computeVisibleTagCount = ()=>{
                // Refs can be null at runtime.
                let currContainerRef = containerRef.current;
                let currTagsRef = tagsRef.current;
                let currActionsRef = actionsRef.current;
                if (!currContainerRef || !currTagsRef || !currActionsRef || state.collection.size === 0) return {
                    visibleTagCount: 0,
                    showCollapseButton: false
                };
                // Count rows and show tags until we hit the maxRows.
                let tags = [
                    ...currTagsRef.children
                ];
                let currY = -Infinity;
                let rowCount = 0;
                let index = 0;
                let tagWidths = [];
                for (let tag of tags){
                    let { width: width, y: y } = tag.getBoundingClientRect();
                    if (y !== currY) {
                        currY = y;
                        rowCount++;
                    }
                    if (maxRows && rowCount > maxRows) break;
                    tagWidths.push(width);
                    index++;
                }
                // Remove tags until there is space for the collapse button and action button (if present) on the last row.
                let buttons = [
                    ...currActionsRef.children
                ];
                if (maxRows && buttons.length > 0 && rowCount >= maxRows && currContainerRef.parentElement) {
                    var _tags_;
                    let buttonsWidth = buttons.reduce((acc, curr)=>acc += curr.getBoundingClientRect().width, 0);
                    buttonsWidth += $e7b72d8874e98cd4$var$TAG_STYLES[scale].margin * 2 * buttons.length;
                    let end = direction === 'ltr' ? 'right' : 'left';
                    let containerEnd = currContainerRef.parentElement.getBoundingClientRect()[end];
                    let lastTagEnd = (_tags_ = tags[index - 1]) === null || _tags_ === void 0 ? void 0 : _tags_.getBoundingClientRect()[end];
                    lastTagEnd += $e7b72d8874e98cd4$var$TAG_STYLES[scale].margin;
                    let availableWidth = containerEnd - lastTagEnd;
                    while(availableWidth < buttonsWidth && index > 0){
                        availableWidth += tagWidths.pop();
                        index--;
                    }
                }
                return {
                    visibleTagCount: Math.max(index, 1),
                    showCollapseButton: index < state.collection.size
                };
            };
            setTagState(function*() {
                // Update to show all items.
                yield {
                    visibleTagCount: state.collection.size,
                    showCollapseButton: true
                };
                // Measure, and update to show the items until maxRows is reached.
                yield computeVisibleTagCount();
            });
        }
    }, [
        maxRows,
        setTagState,
        direction,
        scale,
        state.collection.size
    ]);
    (0, $gBwi7$reactariautils.useResizeObserver)({
        ref: containerRef,
        onResize: updateVisibleTagCount
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, $gBwi7$reactariautils.useLayoutEffect)(updateVisibleTagCount, [
        children
    ]);
    (0, $gBwi7$react.useEffect)(()=>{
        var // Recalculate visible tags when fonts are loaded.
        _document_fonts;
        (_document_fonts = document.fonts) === null || _document_fonts === void 0 ? void 0 : _document_fonts.ready.then(()=>updateVisibleTagCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let visibleTags = (0, $gBwi7$react.useMemo)(()=>[
            ...state.collection
        ].slice(0, isCollapsed ? tagState.visibleTagCount : state.collection.size), [
        isCollapsed,
        state.collection,
        tagState.visibleTagCount
    ]);
    let handlePressCollapse = ()=>{
        // Prevents button from losing focus if focusedKey got collapsed.
        state.selectionManager.setFocusedKey(null);
        setIsCollapsed((prevCollapsed)=>!prevCollapsed);
    };
    let showActions = tagState.showCollapseButton || actionLabel && onAction;
    let isEmpty = state.collection.size === 0;
    let containerStyle = (0, $gBwi7$react.useMemo)(()=>{
        if (maxRows == null || !isCollapsed || isEmpty) return undefined;
        let maxHeight = ($e7b72d8874e98cd4$var$TAG_STYLES[scale].height + $e7b72d8874e98cd4$var$TAG_STYLES[scale].margin * 2) * maxRows;
        return {
            maxHeight: maxHeight,
            overflow: 'hidden'
        };
    }, [
        isCollapsed,
        maxRows,
        isEmpty,
        scale
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement((0, $gBwi7$reactariafocus.FocusScope), null, /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement((0, $gBwi7$reactspectrumlabel.Field), {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        showErrorIcon: true,
        ref: domRef,
        elementType: "span",
        wrapperClassName: (0, $gBwi7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tags-fieldWrapper', {
            'spectrum-Tags-fieldWrapper--positionSide': labelPosition === 'side'
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement("div", {
        ref: containerRef,
        style: containerStyle,
        className: (0, $gBwi7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tags-container', {
            'spectrum-Tags-container--empty': isEmpty
        })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement((0, $gBwi7$reactariafocus.FocusRing), {
        focusRingClass: (0, $gBwi7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement("div", {
        ref: tagsRef,
        ...gridProps,
        className: (0, $gBwi7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tags')
    }, visibleTags.map((item)=>/*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement((0, $dd2c5d00108c1840$exports.Tag), {
            ...item.props,
            key: item.key,
            item: item,
            state: state
        }, item.rendered)), isEmpty && /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement("div", {
        className: (0, $gBwi7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tags-empty-state')
    }, renderEmptyState()))), showActions && !isEmpty && /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement((0, $gBwi7$reactspectrumprovider.Provider), {
        isDisabled: false
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement("div", {
        role: "group",
        ref: actionsRef,
        id: actionsId,
        "aria-label": stringFormatter.format('actions'),
        "aria-labelledby": `${gridProps.id} ${actionsId}`,
        className: (0, $gBwi7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tags-actions')
    }, tagState.showCollapseButton && /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement((0, $gBwi7$reactspectrumbutton.ActionButton), {
        isQuiet: true,
        onPress: handlePressCollapse,
        UNSAFE_className: (0, $gBwi7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tags-actionButton')
    }, isCollapsed ? stringFormatter.format('showAllButtonLabel', {
        tagCount: state.collection.size
    }) : stringFormatter.format('hideButtonLabel')), actionLabel && onAction && /*#__PURE__*/ (0, ($parcel$interopDefault($gBwi7$react))).createElement((0, $gBwi7$reactspectrumbutton.ActionButton), {
        isQuiet: true,
        onPress: ()=>onAction === null || onAction === void 0 ? void 0 : onAction(),
        UNSAFE_className: (0, $gBwi7$reactspectrumutils.classNames)((0, ($parcel$interopDefault($ed889f8f1f091fc8$exports))), 'spectrum-Tags-actionButton')
    }, actionLabel))))));
});


//# sourceMappingURL=TagGroup.main.js.map
