import "./vars.02438011.css";
import $8eFIe$card_vars_cssmodulejs from "./card_vars_css.mjs";
import {useCardViewContext as $8d180a244893de14$export$fea0b38586ec8f13} from "./CardViewContext.mjs";
import {Checkbox as $8eFIe$Checkbox} from "@react-spectrum/checkbox";
import {useStyleProps as $8eFIe$useStyleProps, useDOMRef as $8eFIe$useDOMRef, useHasChild as $8eFIe$useHasChild, classNames as $8eFIe$classNames, SlotProvider as $8eFIe$SlotProvider} from "@react-spectrum/utils";
import {useResizeObserver as $8eFIe$useResizeObserver, useLayoutEffect as $8eFIe$useLayoutEffect, mergeProps as $8eFIe$mergeProps, filterDOMProps as $8eFIe$filterDOMProps, useSlotId as $8eFIe$useSlotId} from "@react-aria/utils";
import {getFocusableTreeWalker as $8eFIe$getFocusableTreeWalker, FocusRing as $8eFIe$FocusRing} from "@react-aria/focus";
import $8eFIe$react, {useRef as $8eFIe$useRef, useState as $8eFIe$useState, useCallback as $8eFIe$useCallback, useMemo as $8eFIe$useMemo} from "react";
import {useHover as $8eFIe$useHover, useFocusWithin as $8eFIe$useFocusWithin} from "@react-aria/interactions";
import {useProviderProps as $8eFIe$useProviderProps} from "@react-spectrum/provider";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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








const $643dd8fa80926f94$export$7a6ccaf429ad93a8 = /*#__PURE__*/ (0, $8eFIe$react).forwardRef(function CardBase(props, ref) {
    props = (0, $8eFIe$useProviderProps)(props);
    let context = (0, $8d180a244893de14$export$fea0b38586ec8f13)() || {}; // we can call again here, won't change from Card.tsx
    let { state: state } = context;
    let manager = state === null || state === void 0 ? void 0 : state.selectionManager;
    let { isQuiet: isQuiet, orientation: orientation = 'vertical', articleProps: articleProps = {}, item: item, layout: layout, children: children } = props;
    let key = item === null || item === void 0 ? void 0 : item.key;
    let isSelected = manager === null || manager === void 0 ? void 0 : manager.isSelected(key);
    let isDisabled = state === null || state === void 0 ? void 0 : state.disabledKeys.has(key);
    let onChange = ()=>manager === null || manager === void 0 ? void 0 : manager.select(key);
    let { styleProps: styleProps } = (0, $8eFIe$useStyleProps)(props);
    let { cardProps: cardProps, titleProps: titleProps, contentProps: contentProps } = $643dd8fa80926f94$var$useCard(props);
    let domRef = (0, $8eFIe$useDOMRef)(ref);
    let gridRef = (0, $8eFIe$useRef)(undefined);
    let checkboxRef = (0, $8eFIe$useRef)(null);
    // cards are only interactive if there is a selection manager and it allows selection
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $8eFIe$useHover)({
        isDisabled: manager === undefined || (manager === null || manager === void 0 ? void 0 : manager.selectionMode) === 'none' || isDisabled
    });
    let [isFocused, setIsFocused] = (0, $8eFIe$useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, $8eFIe$useFocusWithin)({
        onFocusWithinChange: setIsFocused,
        isDisabled: isDisabled
    });
    // ToDo: see css for comment about avatar under selector .spectrum-Card--noLayout.spectrum-Card--default
    let hasPreviewImage = (0, $8eFIe$useHasChild)(`.${(0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs)))['spectrum-Card-image']}`, gridRef);
    let hasPreviewIllustration = (0, $8eFIe$useHasChild)(`.${(0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs)))['spectrum-Card-illustration']}`, gridRef);
    let hasPreview = hasPreviewImage || hasPreviewIllustration;
    // this is for horizontal cards
    let [height, setHeight] = (0, $8eFIe$useState)(NaN);
    let updateHeight = (0, $8eFIe$useCallback)(()=>{
        if (orientation !== 'horizontal') return;
        let cardHeight = gridRef.current.getBoundingClientRect().height;
        setHeight(cardHeight);
    }, [
        orientation,
        gridRef,
        setHeight
    ]);
    (0, $8eFIe$useResizeObserver)({
        ref: gridRef,
        onResize: updateHeight
    });
    let aspectRatioEnforce = undefined;
    if (orientation === 'horizontal' && !isNaN(height)) aspectRatioEnforce = {
        height: `${height}px`,
        width: `${height}px`
    };
    let slots = (0, $8eFIe$useMemo)(()=>({
            image: {
                UNSAFE_className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-image'),
                objectFit: orientation === 'horizontal' ? 'cover' : 'contain',
                alt: '',
                ...aspectRatioEnforce
            },
            illustration: {
                UNSAFE_className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-illustration'),
                ...aspectRatioEnforce
            },
            avatar: {
                UNSAFE_className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-avatar'),
                size: 'avatar-size-400'
            },
            heading: {
                UNSAFE_className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-heading'),
                ...titleProps
            },
            content: {
                UNSAFE_className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-content'),
                ...contentProps
            },
            detail: {
                UNSAFE_className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-detail')
            }
        }), [
        titleProps,
        contentProps,
        height,
        isQuiet,
        orientation
    ]);
    (0, $8eFIe$useLayoutEffect)(()=>{
        if (gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) {
            let walker = (0, $8eFIe$getFocusableTreeWalker)(gridRef.current);
            let nextNode = walker.nextNode();
            while(nextNode != null){
                if (checkboxRef.current && !checkboxRef.current.UNSAFE_getDOMNode().contains(nextNode)) {
                    console.warn('Card does not support focusable elements, please contact the team regarding your use case.');
                    break;
                }
                nextNode = walker.nextNode();
            }
        }
    }, [
        children
    ]);
    return /*#__PURE__*/ (0, $8eFIe$react).createElement((0, $8eFIe$FocusRing), {
        focusRingClass: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'focus-ring')
    }, /*#__PURE__*/ (0, $8eFIe$react).createElement("article", {
        ...styleProps,
        ...(0, $8eFIe$mergeProps)(cardProps, focusWithinProps, hoverProps, (0, $8eFIe$filterDOMProps)(props), articleProps),
        ref: domRef,
        className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card', {
            'spectrum-Card--default': !isQuiet && orientation !== 'horizontal',
            'spectrum-Card--isQuiet': isQuiet && orientation !== 'horizontal',
            'spectrum-Card--horizontal': orientation === 'horizontal',
            'spectrum-Card--noPreview': !hasPreview,
            'is-hovered': isHovered,
            'is-focused': isFocused,
            'is-selected': isSelected,
            'spectrum-Card--waterfall': layout === 'waterfall',
            'spectrum-Card--gallery': layout === 'gallery',
            'spectrum-Card--grid': layout === 'grid',
            'spectrum-Card--noLayout': layout !== 'waterfall' && layout !== 'gallery' && layout !== 'grid'
        }, styleProps.className)
    }, /*#__PURE__*/ (0, $8eFIe$react).createElement("div", {
        ref: gridRef,
        className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-grid')
    }, manager && manager.selectionMode !== 'none' && /*#__PURE__*/ (0, $8eFIe$react).createElement("div", {
        className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-checkboxWrapper')
    }, /*#__PURE__*/ (0, $8eFIe$react).createElement((0, $8eFIe$Checkbox), {
        ref: checkboxRef,
        isDisabled: isDisabled,
        excludeFromTabOrder: true,
        isSelected: isSelected,
        onChange: onChange,
        UNSAFE_className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-checkbox'),
        isEmphasized: true,
        "aria-label": "select"
    })), /*#__PURE__*/ (0, $8eFIe$react).createElement((0, $8eFIe$SlotProvider), {
        slots: slots
    }, children), /*#__PURE__*/ (0, $8eFIe$react).createElement("div", {
        className: (0, $8eFIe$classNames)((0, ($parcel$interopDefault($8eFIe$card_vars_cssmodulejs))), 'spectrum-Card-decoration')
    }))));
});
function $643dd8fa80926f94$var$useCard(props) {
    let titleId = (0, $8eFIe$useSlotId)();
    let descriptionId = (0, $8eFIe$useSlotId)();
    let titleProps = (0, $8eFIe$useMemo)(()=>({
            id: titleId
        }), [
        titleId
    ]);
    let contentProps = (0, $8eFIe$useMemo)(()=>({
            id: descriptionId
        }), [
        descriptionId
    ]);
    return {
        cardProps: {
            ...(0, $8eFIe$filterDOMProps)(props),
            'aria-labelledby': titleId,
            'aria-describedby': descriptionId,
            tabIndex: 0
        },
        titleProps: titleProps,
        contentProps: contentProps
    };
}


export {$643dd8fa80926f94$export$7a6ccaf429ad93a8 as CardBase};
//# sourceMappingURL=CardBase.module.js.map
