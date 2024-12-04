import $jTkY3$intlStringsmodulejs from "./intlStrings.module.js";
import "./vars.c840a2b4.css";
import $jTkY3$tags_vars_cssmodulejs from "./tags_vars_css.module.js";
import {Tag as $b5f5ee35d3b6b95c$export$3288d34c523a1192} from "./Tag.module.js";
import {ActionButton as $jTkY3$ActionButton} from "@react-spectrum/button";
import {useTagGroup as $jTkY3$useTagGroup} from "@react-aria/tag";
import {useDOMRef as $jTkY3$useDOMRef, classNames as $jTkY3$classNames} from "@react-spectrum/utils";
import {Field as $jTkY3$Field} from "@react-spectrum/label";
import {FocusScope as $jTkY3$FocusScope, FocusRing as $jTkY3$FocusRing} from "@react-aria/focus";
import {useListState as $jTkY3$useListState, ListCollection as $jTkY3$ListCollection} from "@react-stately/list";
import {ListKeyboardDelegate as $jTkY3$ListKeyboardDelegate} from "@react-aria/selection";
import {useProviderProps as $jTkY3$useProviderProps, useProvider as $jTkY3$useProvider, Provider as $jTkY3$Provider} from "@react-spectrum/provider";
import $jTkY3$react, {useRef as $jTkY3$useRef, useState as $jTkY3$useState, useMemo as $jTkY3$useMemo, useCallback as $jTkY3$useCallback, useEffect as $jTkY3$useEffect} from "react";
import {useFormProps as $jTkY3$useFormProps} from "@react-spectrum/form";
import {useValueEffect as $jTkY3$useValueEffect, useId as $jTkY3$useId, useResizeObserver as $jTkY3$useResizeObserver, useLayoutEffect as $jTkY3$useLayoutEffect} from "@react-aria/utils";
import {useLocale as $jTkY3$useLocale, useLocalizedStringFormatter as $jTkY3$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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














const $880d112c7a588209$var$TAG_STYLES = {
    medium: {
        height: 24,
        margin: 4
    },
    large: {
        height: 30,
        margin: 5
    }
};
const $880d112c7a588209$export$67ea30858aaf75e3 = /*#__PURE__*/ (0, $jTkY3$react).forwardRef(function TagGroup(props, ref) {
    props = (0, $jTkY3$useProviderProps)(props);
    props = (0, $jTkY3$useFormProps)(props);
    let { maxRows: maxRows, children: children, actionLabel: actionLabel, onAction: onAction, labelPosition: labelPosition, renderEmptyState: renderEmptyState = ()=>stringFormatter.format('noTags') } = props;
    let domRef = (0, $jTkY3$useDOMRef)(ref);
    let containerRef = (0, $jTkY3$useRef)(null);
    let tagsRef = (0, $jTkY3$useRef)(null);
    let { direction: direction } = (0, $jTkY3$useLocale)();
    let { scale: scale } = (0, $jTkY3$useProvider)();
    let stringFormatter = (0, $jTkY3$useLocalizedStringFormatter)((0, ($parcel$interopDefault($jTkY3$intlStringsmodulejs))), '@react-spectrum/tag');
    let [isCollapsed, setIsCollapsed] = (0, $jTkY3$useState)(maxRows != null);
    let state = (0, $jTkY3$useListState)(props);
    let [tagState, setTagState] = (0, $jTkY3$useValueEffect)({
        visibleTagCount: state.collection.size,
        showCollapseButton: false
    });
    let keyboardDelegate = (0, $jTkY3$useMemo)(()=>{
        let collection = isCollapsed ? new (0, $jTkY3$ListCollection)([
            ...state.collection
        ].slice(0, tagState.visibleTagCount)) : new (0, $jTkY3$ListCollection)([
            ...state.collection
        ]);
        return new (0, $jTkY3$ListKeyboardDelegate)({
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
    let { gridProps: gridProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $jTkY3$useTagGroup)({
        ...props,
        keyboardDelegate: keyboardDelegate
    }, state, tagsRef);
    let actionsId = (0, $jTkY3$useId)();
    let actionsRef = (0, $jTkY3$useRef)(null);
    let updateVisibleTagCount = (0, $jTkY3$useCallback)(()=>{
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
                    buttonsWidth += $880d112c7a588209$var$TAG_STYLES[scale].margin * 2 * buttons.length;
                    let end = direction === 'ltr' ? 'right' : 'left';
                    let containerEnd = currContainerRef.parentElement.getBoundingClientRect()[end];
                    let lastTagEnd = (_tags_ = tags[index - 1]) === null || _tags_ === void 0 ? void 0 : _tags_.getBoundingClientRect()[end];
                    lastTagEnd += $880d112c7a588209$var$TAG_STYLES[scale].margin;
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
    (0, $jTkY3$useResizeObserver)({
        ref: containerRef,
        onResize: updateVisibleTagCount
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, $jTkY3$useLayoutEffect)(updateVisibleTagCount, [
        children
    ]);
    (0, $jTkY3$useEffect)(()=>{
        var // Recalculate visible tags when fonts are loaded.
        _document_fonts;
        (_document_fonts = document.fonts) === null || _document_fonts === void 0 ? void 0 : _document_fonts.ready.then(()=>updateVisibleTagCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let visibleTags = (0, $jTkY3$useMemo)(()=>[
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
    let containerStyle = (0, $jTkY3$useMemo)(()=>{
        if (maxRows == null || !isCollapsed || isEmpty) return undefined;
        let maxHeight = ($880d112c7a588209$var$TAG_STYLES[scale].height + $880d112c7a588209$var$TAG_STYLES[scale].margin * 2) * maxRows;
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
    return /*#__PURE__*/ (0, $jTkY3$react).createElement((0, $jTkY3$FocusScope), null, /*#__PURE__*/ (0, $jTkY3$react).createElement((0, $jTkY3$Field), {
        ...props,
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        showErrorIcon: true,
        ref: domRef,
        elementType: "span",
        wrapperClassName: (0, $jTkY3$classNames)((0, ($parcel$interopDefault($jTkY3$tags_vars_cssmodulejs))), 'spectrum-Tags-fieldWrapper', {
            'spectrum-Tags-fieldWrapper--positionSide': labelPosition === 'side'
        })
    }, /*#__PURE__*/ (0, $jTkY3$react).createElement("div", {
        ref: containerRef,
        style: containerStyle,
        className: (0, $jTkY3$classNames)((0, ($parcel$interopDefault($jTkY3$tags_vars_cssmodulejs))), 'spectrum-Tags-container', {
            'spectrum-Tags-container--empty': isEmpty
        })
    }, /*#__PURE__*/ (0, $jTkY3$react).createElement((0, $jTkY3$FocusRing), {
        focusRingClass: (0, $jTkY3$classNames)((0, ($parcel$interopDefault($jTkY3$tags_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $jTkY3$react).createElement("div", {
        ref: tagsRef,
        ...gridProps,
        className: (0, $jTkY3$classNames)((0, ($parcel$interopDefault($jTkY3$tags_vars_cssmodulejs))), 'spectrum-Tags')
    }, visibleTags.map((item)=>/*#__PURE__*/ (0, $jTkY3$react).createElement((0, $b5f5ee35d3b6b95c$export$3288d34c523a1192), {
            ...item.props,
            key: item.key,
            item: item,
            state: state
        }, item.rendered)), isEmpty && /*#__PURE__*/ (0, $jTkY3$react).createElement("div", {
        className: (0, $jTkY3$classNames)((0, ($parcel$interopDefault($jTkY3$tags_vars_cssmodulejs))), 'spectrum-Tags-empty-state')
    }, renderEmptyState()))), showActions && !isEmpty && /*#__PURE__*/ (0, $jTkY3$react).createElement((0, $jTkY3$Provider), {
        isDisabled: false
    }, /*#__PURE__*/ (0, $jTkY3$react).createElement("div", {
        role: "group",
        ref: actionsRef,
        id: actionsId,
        "aria-label": stringFormatter.format('actions'),
        "aria-labelledby": `${gridProps.id} ${actionsId}`,
        className: (0, $jTkY3$classNames)((0, ($parcel$interopDefault($jTkY3$tags_vars_cssmodulejs))), 'spectrum-Tags-actions')
    }, tagState.showCollapseButton && /*#__PURE__*/ (0, $jTkY3$react).createElement((0, $jTkY3$ActionButton), {
        isQuiet: true,
        onPress: handlePressCollapse,
        UNSAFE_className: (0, $jTkY3$classNames)((0, ($parcel$interopDefault($jTkY3$tags_vars_cssmodulejs))), 'spectrum-Tags-actionButton')
    }, isCollapsed ? stringFormatter.format('showAllButtonLabel', {
        tagCount: state.collection.size
    }) : stringFormatter.format('hideButtonLabel')), actionLabel && onAction && /*#__PURE__*/ (0, $jTkY3$react).createElement((0, $jTkY3$ActionButton), {
        isQuiet: true,
        onPress: ()=>onAction === null || onAction === void 0 ? void 0 : onAction(),
        UNSAFE_className: (0, $jTkY3$classNames)((0, ($parcel$interopDefault($jTkY3$tags_vars_cssmodulejs))), 'spectrum-Tags-actionButton')
    }, actionLabel))))));
});


export {$880d112c7a588209$export$67ea30858aaf75e3 as TagGroup};
//# sourceMappingURL=TagGroup.module.js.map
