import "./TagGroup.css";
import {ActionButton as $da878a05ab4a403e$export$cfc7921d29ef7b80} from "./ActionButton.mjs";
import $e17a4836f4b6cc28$export$2e2bcd8739ae039 from "../icons/AlertTriangle.mjs";
import {AvatarContext as $3ffa2cd930156220$export$a20dad690e1279e2} from "./Avatar.mjs";
import {centerBaseline as $1f4b04be3f24aae3$export$9d7e2342a7e53afa, CenterBaseline as $1f4b04be3f24aae3$export$768dac55bb57081d} from "./CenterBaseline.mjs";
import {ClearButton as $f6a62e6e68437458$export$13ec83e50bf04290} from "./ClearButton.mjs";
import {FieldLabel as $9afd80978c252040$export$1acdcf5a973a8414} from "./Field.mjs";
import {FormContext as $9b916426527cebe7$export$c24727297075ec6a, useFormProps as $9b916426527cebe7$export$a6b5be5c6b451665} from "./Form.mjs";
import {IconContext as $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed} from "../icons/Icon.mjs";
import {ImageContext as $dbd6f0b2503b938c$export$8151eb379fcf2442} from "./Image.mjs";
import $kY5I6$intlStringsmjs from "./intlStrings.mjs";
import {pressScale as $10ea7662e51a285b$export$56e8cba416805d8d} from "./pressScale.mjs";
import {Text as $8e847109a6ab556d$export$5f1af8db9871e1d6, TextContext as $8e847109a6ab556d$export$9afb8bc826b033ea} from "./Content.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $kY5I6$jsx, jsxs as $kY5I6$jsxs, Fragment as $kY5I6$Fragment} from "react/jsx-runtime";
import {useLocale as $kY5I6$useLocale, TagGroup as $kY5I6$TagGroup, Provider as $kY5I6$Provider, TextContext as $kY5I6$TextContext, TagList as $kY5I6$TagList, useSlottedContext as $kY5I6$useSlottedContext, Tag as $kY5I6$Tag, composeRenderProps as $kY5I6$composeRenderProps} from "react-aria-components";
import {CollectionBuilder as $kY5I6$CollectionBuilder, Collection as $kY5I6$Collection} from "@react-aria/collections";
import {createContext as $kY5I6$createContext, forwardRef as $kY5I6$forwardRef, useRef as $kY5I6$useRef, useState as $kY5I6$useState, useContext as $kY5I6$useContext, useMemo as $kY5I6$useMemo, useEffect as $kY5I6$useEffect} from "react";
import {flushSync as $kY5I6$flushSync} from "react-dom";
import {useDOMRef as $kY5I6$useDOMRef} from "@react-spectrum/utils";
import {useEffectEvent as $kY5I6$useEffectEvent, useResizeObserver as $kY5I6$useResizeObserver, useLayoutEffect as $kY5I6$useLayoutEffect, useId as $kY5I6$useId} from "@react-aria/utils";
import {useLocalizedStringFormatter as $kY5I6$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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




















const $1d63bfab43d9ffe1$export$5b07b5dd2cbd96e3 = /*#__PURE__*/ (0, $kY5I6$createContext)(null);
const $1d63bfab43d9ffe1$var$helpTextStyles = function anonymous(props) {
    let rules = " .";
    rules += ' __a-1oa8qr7';
    rules += ' __b-1oa8qr7';
    rules += ' __c-1oa8qr7';
    rules += ' __d-1oa8qr7';
    rules += ' _Zd';
    rules += ' _1d';
    rules += ' ibH';
    rules += ' iG';
    rules += ' jbH';
    rules += ' jG';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
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
    rules += ' _eb';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.isInvalid) {
        if (props.isPressed) rules += ' aP';
        else if (props.isFocusVisible) rules += ' aP';
        else if (props.isHovered) rules += ' aP';
        else rules += ' aO';
    } else {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else if (props.isHovered) rules += ' an';
        else rules += ' am';
    }
    rules += ' -rwx0fg_e-b';
    rules += ' __me';
    rules += ' E-1inj1bc';
    rules += ' __He';
    return rules;
};
const $1d63bfab43d9ffe1$var$InternalTagGroupContext = /*#__PURE__*/ (0, $kY5I6$createContext)({});
const $1d63bfab43d9ffe1$export$67ea30858aaf75e3 = /*#__PURE__*/ (0, $kY5I6$forwardRef)(function TagGroup(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $1d63bfab43d9ffe1$export$5b07b5dd2cbd96e3);
    props = (0, $9b916426527cebe7$export$a6b5be5c6b451665)(props);
    let { onRemove: onRemove } = props;
    return /*#__PURE__*/ (0, $kY5I6$jsx)($1d63bfab43d9ffe1$var$InternalTagGroupContext.Provider, {
        value: {
            onRemove: onRemove
        },
        children: /*#__PURE__*/ (0, $kY5I6$jsx)((0, $kY5I6$CollectionBuilder), {
            content: /*#__PURE__*/ (0, $kY5I6$jsx)((0, $kY5I6$Collection), {
                ...props
            }),
            children: (collection)=>/*#__PURE__*/ (0, $kY5I6$jsx)($1d63bfab43d9ffe1$var$TagGroupInner, {
                    props: props,
                    forwardedRef: ref,
                    collection: collection
                })
        })
    });
});
function $1d63bfab43d9ffe1$var$TagGroupInner({ props: { label: label, description: description, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', isEmphasized: isEmphasized, isInvalid: isInvalid, errorMessage: errorMessage, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, size: size = 'M', ...props1 }, forwardedRef: ref, collection: collection }) {
    let stringFormatter = (0, $kY5I6$useLocalizedStringFormatter)((0, ($parcel$interopDefault($kY5I6$intlStringsmjs))), '@react-spectrum/s2');
    let { maxRows: maxRows, groupActionLabel: groupActionLabel, onGroupAction: onGroupAction, renderEmptyState: renderEmptyState = ()=>stringFormatter.format('tag.noTags'), ...otherProps } = props1;
    let { direction: direction } = (0, $kY5I6$useLocale)();
    let containerRef = (0, $kY5I6$useRef)(null);
    let tagsRef = (0, $kY5I6$useRef)(null);
    let actionsRef = (0, $kY5I6$useRef)(null);
    let hiddenTagsRef = (0, $kY5I6$useRef)(null);
    let [tagState, setTagState] = (0, $kY5I6$useState)({
        visibleTagCount: collection.size,
        showCollapseButton: false
    });
    let [isCollapsed, setIsCollapsed] = (0, $kY5I6$useState)(maxRows != null);
    let { onRemove: onRemove } = (0, $kY5I6$useContext)($1d63bfab43d9ffe1$var$InternalTagGroupContext);
    let isEmpty = collection.size === 0;
    let showCollapseToggleButton = tagState.showCollapseButton || tagState.visibleTagCount < collection.size;
    let formContext = (0, $kY5I6$useContext)((0, $9b916426527cebe7$export$c24727297075ec6a));
    let domRef = (0, $kY5I6$useDOMRef)(ref);
    let allItems = (0, $kY5I6$useMemo)(()=>Array.from(collection), [
        collection
    ]);
    let items = (0, $kY5I6$useMemo)(()=>Array.from(collection).slice(0, !isCollapsed ? collection.size : tagState.visibleTagCount), [
        collection,
        tagState.visibleTagCount,
        isCollapsed
    ]);
    let updateVisibleTagCount = (0, $kY5I6$useEffectEvent)(()=>{
        if (maxRows == null) setTagState({
            visibleTagCount: collection.size,
            showCollapseButton: false
        });
        if (maxRows != null && maxRows > 0) {
            let computeVisibleTagCount = ()=>{
                let currContainerRef = hiddenTagsRef.current;
                let currTagsRef = hiddenTagsRef.current;
                let currActionsRef = actionsRef.current;
                if (!currContainerRef || !currTagsRef || collection.size === 0 || currContainerRef.parentElement == null) return {
                    visibleTagCount: 0,
                    showCollapseButton: false
                };
                // Count rows and show tags until we hit the maxRows.
                // I think this is still a safe assumption, and we don't need to queryAll for role=tag
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
                    if (rowCount > maxRows) break;
                    tagWidths.push(width);
                    index++;
                }
                // Remove tags until there is space for the collapse button and action button (if present) on the last row.
                let buttons = currActionsRef ? [
                    ...currActionsRef.children
                ] : [];
                if (buttons.length > 0 && rowCount >= maxRows) {
                    let buttonsWidth = buttons.reduce((acc, curr)=>acc += curr.getBoundingClientRect().width, 0);
                    let margins = parseFloat(getComputedStyle(buttons[0]).marginInlineStart);
                    buttonsWidth += margins * 2;
                    let end = direction === 'ltr' ? 'right' : 'left';
                    let containerEnd = currContainerRef.parentElement?.getBoundingClientRect()[end] - margins;
                    let lastTagEnd = tags[index - 1]?.getBoundingClientRect()[end];
                    lastTagEnd += margins;
                    let availableWidth = containerEnd - lastTagEnd;
                    while(availableWidth <= buttonsWidth && index > 0){
                        let tagWidth = tagWidths.pop();
                        if (tagWidth != null) availableWidth += tagWidth;
                        index--;
                    }
                }
                return {
                    visibleTagCount: Math.max(index, 1),
                    showCollapseButton: index < collection.size
                };
            };
            let result = computeVisibleTagCount();
            (0, $kY5I6$flushSync)(()=>{
                setTagState(result);
            });
        }
    });
    (0, $kY5I6$useResizeObserver)({
        ref: maxRows != null ? containerRef : undefined,
        onResize: updateVisibleTagCount
    });
    (0, $kY5I6$useLayoutEffect)(()=>{
        if (collection.size > 0 && maxRows != null && maxRows > 0) queueMicrotask(updateVisibleTagCount);
    }, [
        collection.size,
        updateVisibleTagCount,
        maxRows
    ]);
    (0, $kY5I6$useEffect)(()=>{
        // Recalculate visible tags when fonts are loaded.
        document.fonts?.ready.then(()=>updateVisibleTagCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let handlePressCollapse = ()=>{
        setIsCollapsed((prevCollapsed)=>!prevCollapsed);
    };
    let helpText = null;
    if (!isInvalid && description) helpText = /*#__PURE__*/ (0, $kY5I6$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
        slot: "description",
        styles: $1d63bfab43d9ffe1$var$helpTextStyles({
            size: size
        }),
        children: description
    });
    else if (isInvalid) helpText = /*#__PURE__*/ (0, $kY5I6$jsxs)("div", {
        className: $1d63bfab43d9ffe1$var$helpTextStyles({
            size: size,
            isInvalid: isInvalid
        }),
        children: [
            /*#__PURE__*/ (0, $kY5I6$jsx)((0, $1f4b04be3f24aae3$export$768dac55bb57081d), {
                children: /*#__PURE__*/ (0, $kY5I6$jsx)((0, $e17a4836f4b6cc28$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $kY5I6$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                slot: "errorMessage",
                children: errorMessage
            })
        ]
    });
    return /*#__PURE__*/ (0, $kY5I6$jsxs)((0, $kY5I6$TagGroup), {
        ...otherProps,
        ref: domRef,
        style: UNSAFE_style,
        className: UNSAFE_className + function anonymous(props, overrides) {
            let rules = " .";
            let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
            rules += matches.join('');
            let $__a = false;
            let $__b = false;
            for (let p of matches){
                if (/^\s*__a/.test(p)) $__a = true;
                if (/^\s*__b/.test(p)) $__b = true;
            }
            rules += ' _Zf';
            if (!$__a) {
                if (props.isInForm) rules += ' __a-3t1y';
            }
            if (!$__b) {
                if (props.isInForm) {
                    if (props.labelPosition === "side") rules += ' __b-7u9dhl';
                }
            }
            if (props.isInForm) rules += ' __h-1cwd7ud';
            else {
                if (props.labelPosition === "side") rules += ' __h-jyg4vb';
                else if (props.labelPosition === "top") rules += ' __h-375yi6';
            }
            if (props.labelPosition === "side") rules += ' __i-jyg4vb';
            else if (props.labelPosition === "top") rules += ' __i-fdenls';
            if (props.labelPosition === "side") rules += ' __j-5eez8j';
            else if (props.labelPosition === "top") rules += ' __j-xlaqir';
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
            rules += ' _1d';
            rules += ' _f-1x99dlob';
            rules += ' _fa';
            if (props.size === "XL") rules += ' -aqrvqh_k-j';
            else if (props.size === "L") rules += ' -aqrvqh_k-i';
            else if (props.size === "S") rules += ' -aqrvqh_k-h';
            else if (props.size === "XS") rules += ' -aqrvqh_k-g';
            else rules += ' -aqrvqh_k-f';
            rules += ' -_1inj1bc_i--prjw07';
            rules += ' je';
            rules += ' __R-yksgrp';
            return rules;
        }({
            size: size,
            labelPosition: labelPosition,
            isInForm: !!formContext
        }, props1.styles),
        children: [
            /*#__PURE__*/ (0, $kY5I6$jsx)((0, $9afd80978c252040$export$1acdcf5a973a8414), {
                size: size,
                labelPosition: labelPosition,
                labelAlign: labelAlign,
                contextualHelp: props1.contextualHelp,
                children: label
            }),
            /*#__PURE__*/ (0, $kY5I6$jsx)("div", {
                ref: containerRef,
                className: function anonymous(props) {
                    let rules = " .";
                    rules += ' __a-4cfph1';
                    rules += ' __b-4cfph1';
                    rules += ' __c-4cfph1';
                    rules += ' __d-4cfph1';
                    rules += ' qb';
                    if (props.isEmpty) rules += ' ya';
                    else rules += ' yK';
                    if (props.isEmpty) rules += ' za';
                    else rules += ' zc';
                    rules += ' Uc';
                    return rules;
                }({
                    isEmpty: isEmpty
                }),
                children: /*#__PURE__*/ (0, $kY5I6$jsx)((0, $9b916426527cebe7$export$c24727297075ec6a).Provider, {
                    value: {
                        ...formContext,
                        size: size
                    },
                    children: /*#__PURE__*/ (0, $kY5I6$jsxs)((0, $kY5I6$Provider), {
                        values: [
                            [
                                (0, $kY5I6$TextContext),
                                undefined
                            ],
                            [
                                $1d63bfab43d9ffe1$export$5b07b5dd2cbd96e3,
                                {
                                    size: size,
                                    isEmphasized: isEmphasized
                                }
                            ]
                        ],
                        children: [
                            maxRows != null && /*#__PURE__*/ (0, $kY5I6$jsx)("div", {
                                // @ts-ignore
                                inert: "true",
                                ref: hiddenTagsRef,
                                className: " . _Zc _7a _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh Ua Xa Za __Eb __vb __wb _K-3t1x",
                                children: allItems.map((item)=>{
                                    // pull off individual props as an allow list, don't want refs or other props getting through
                                    return /*#__PURE__*/ (0, $kY5I6$jsx)("div", {
                                        style: item.props.UNSAFE_style,
                                        className: item.props.className({
                                            size: size,
                                            allowsRemoving: Boolean(onRemove)
                                        }),
                                        children: item.props.children({
                                            size: size,
                                            allowsRemoving: Boolean(onRemove),
                                            isInCtx: true
                                        })
                                    }, item.key);
                                })
                            }),
                            /*#__PURE__*/ (0, $kY5I6$jsx)((0, $kY5I6$TagList), {
                                ref: tagsRef,
                                items: items,
                                renderEmptyState: renderEmptyState,
                                className: " . _Zc qb _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _de _dbf _eb _fa _f-1x99dlob an",
                                children: (item)=>/*#__PURE__*/ (0, $kY5I6$jsx)($1d63bfab43d9ffe1$export$3288d34c523a1192, {
                                        ...item.props,
                                        id: item.key,
                                        textValue: item.textValue
                                    })
                            }),
                            !isEmpty && (showCollapseToggleButton || groupActionLabel) && /*#__PURE__*/ (0, $kY5I6$jsx)($1d63bfab43d9ffe1$var$ActionGroup, {
                                collection: collection,
                                "aria-label": props1['aria-label'],
                                "aria-labelledby": props1['aria-labelledby'],
                                actionsRef: actionsRef,
                                tagState: tagState,
                                size: size,
                                isCollapsed: isCollapsed,
                                handlePressCollapse: handlePressCollapse,
                                onGroupAction: onGroupAction,
                                groupActionLabel: groupActionLabel
                            })
                        ]
                    })
                })
            }),
            helpText
        ]
    });
}
function $1d63bfab43d9ffe1$var$ActionGroup(props) {
    let stringFormatter = (0, $kY5I6$useLocalizedStringFormatter)((0, ($parcel$interopDefault($kY5I6$intlStringsmjs))), '@react-spectrum/s2');
    let { actionsRef: actionsRef, tagState: tagState, size: size, isCollapsed: isCollapsed, handlePressCollapse: handlePressCollapse, onGroupAction: onGroupAction, groupActionLabel: groupActionLabel, collection: collection, // directly use aria-labelling from the TagGroup because we can't use the id from the TagList
    // and we can't supply an id to the TagList because it'll cause an issue where all the tag ids flip back
    // and forth with their prefix in an infinite loop
    'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy } = props;
    let actionsId = (0, $kY5I6$useId)();
    // might need to localize the aria-label which concatenates with this label
    let actionGroupLabel = stringFormatter.format('tag.actions');
    return /*#__PURE__*/ (0, $kY5I6$jsxs)("div", {
        role: "group",
        ref: actionsRef,
        id: actionsId,
        "aria-label": ariaLabel ? `${ariaLabel} ${actionGroupLabel}` : actionGroupLabel,
        "aria-labelledby": ariaLabelledBy ? ariaLabelledBy : undefined,
        className: " . _Zc",
        children: [
            tagState.showCollapseButton && /*#__PURE__*/ (0, $kY5I6$jsx)((0, $da878a05ab4a403e$export$cfc7921d29ef7b80), {
                isQuiet: true,
                size: size,
                styles: " . Ac Bc yc zc",
                UNSAFE_style: {
                    display: 'inline-flex'
                },
                onPress: handlePressCollapse,
                children: isCollapsed ? stringFormatter.format('tag.showAllButtonLabel', {
                    tagCount: collection.size
                }) : stringFormatter.format('tag.hideButtonLabel')
            }),
            groupActionLabel && onGroupAction && /*#__PURE__*/ (0, $kY5I6$jsx)((0, $da878a05ab4a403e$export$cfc7921d29ef7b80), {
                isQuiet: true,
                size: size,
                styles: " . Ac Bc yc zc",
                UNSAFE_style: {
                    display: 'inline-flex'
                },
                onPress: ()=>onGroupAction?.(),
                children: groupActionLabel
            })
        ]
    });
}
const $1d63bfab43d9ffe1$var$tagStyles = function anonymous(props) {
    let rules = " .";
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    rules += ' _Ze';
    rules += ' __na';
    rules += ' rb';
    rules += ' _kc';
    rules += ' _1c';
    rules += ' _2d';
    rules += ' _c-bc1l9oh';
    rules += ' _c-1uotwbwg';
    rules += ' _c-eo0c6sf';
    rules += ' _c-enzzrge';
    rules += ' _c-enzykdd';
    rules += ' _c-enzwzjc';
    rules += ' _c-enzrfpb';
    rules += ' _ca';
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
    rules += ' _eb';
    rules += ' _f-1x99dlob';
    rules += ' _fa';
    if (props.isDisabled) rules += ' aa_____B';
    else if (props.isSelected) rules += ' aa_____A';
    else rules += ' aa_____x';
    if (props.isDisabled) rules += ' aj';
    else if (props.isSelected) {
        if (props.isEmphasized) rules += ' ac';
        else rules += ' ad';
    } else {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    }
    rules += ' k-375toq';
    rules += ' _Oa';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' qo';
    if (props.isSelected) rules += ' ba_____z';
    else rules += ' ba_____w';
    if (props.isDisabled) rules += ' bg';
    else if (props.isSelected) {
        if (props.isEmphasized) {
            if (props.isPressed) rules += ' b_____F';
            else if (props.isFocusVisible) rules += ' b_____F';
            else if (props.isHovered) rules += ' b_____F';
            else rules += ' b_____E';
        } else {
            if (props.isPressed) rules += ' bo';
            else if (props.isFocusVisible) rules += ' bo';
            else if (props.isHovered) rules += ' bo';
            else rules += ' bn';
        }
    } else if (props.isFocusVisible) rules += ' bh';
    else if (props.isHovered) rules += ' bh';
    else rules += ' bg';
    rules += ' wf';
    rules += ' CI';
    if (props.allowsRemoving) rules += ' Da';
    else rules += ' DI';
    rules += ' Ea';
    rules += ' Fa';
    rules += ' Ac';
    rules += ' Bc';
    rules += ' yc';
    rules += ' zc';
    rules += ' _vh';
    rules += ' _wh';
    rules += ' _xh';
    rules += ' _yh';
    if (props.isLink) rules += ' __Hc';
    else rules += ' __Hb';
    rules += ' -oelgqu_A--177861o';
    rules += ' -rwx0fg_e-b';
    if (props.size === "XL") rules += ' -_375toq_k-j';
    else if (props.size === "L") rules += ' -_375toq_k-i';
    else if (props.size === "S") rules += ' -_375toq_k-h';
    else if (props.size === "XS") rules += ' -_375toq_k-g';
    else rules += ' -_375toq_k-f';
    return rules;
};
const $1d63bfab43d9ffe1$var$avatarSize = {
    S: 16,
    M: 20,
    L: 24
};
const $1d63bfab43d9ffe1$export$3288d34c523a1192 = /*#__PURE__*/ (0, $kY5I6$forwardRef)(function Tag({ children: children, textValue: textValue, ...props }, ref) {
    textValue ||= typeof children === 'string' ? children : undefined;
    let ctx = (0, $kY5I6$useSlottedContext)($1d63bfab43d9ffe1$export$5b07b5dd2cbd96e3);
    let isInRealDOM = Boolean(ctx?.size);
    let { size: size, isEmphasized: isEmphasized } = ctx ?? {};
    let domRef = (0, $kY5I6$useDOMRef)(ref);
    let backupRef = (0, $kY5I6$useRef)(null);
    domRef = domRef || backupRef;
    let isLink = props.href != null;
    return /*#__PURE__*/ (0, $kY5I6$jsx)((0, $kY5I6$Tag), {
        textValue: textValue,
        ...props,
        ref: domRef,
        style: (0, $10ea7662e51a285b$export$56e8cba416805d8d)(domRef),
        className: (renderProps)=>$1d63bfab43d9ffe1$var$tagStyles({
                size: size,
                isEmphasized: isEmphasized,
                isLink: isLink,
                ...renderProps
            }),
        children: (0, $kY5I6$composeRenderProps)(children, (children, renderProps)=>/*#__PURE__*/ (0, $kY5I6$jsx)($1d63bfab43d9ffe1$var$TagWrapper, {
                isInRealDOM: isInRealDOM,
                ...renderProps,
                children: typeof children === 'string' ? /*#__PURE__*/ (0, $kY5I6$jsx)((0, $8e847109a6ab556d$export$5f1af8db9871e1d6), {
                    children: children
                }) : children
            }))
    });
});
function $1d63bfab43d9ffe1$var$TagWrapper({ children: children, isDisabled: isDisabled, allowsRemoving: allowsRemoving, isInRealDOM: isInRealDOM }) {
    let { size: size = 'M' } = (0, $kY5I6$useSlottedContext)($1d63bfab43d9ffe1$export$5b07b5dd2cbd96e3) ?? {};
    return /*#__PURE__*/ (0, $kY5I6$jsxs)((0, $kY5I6$Fragment), {
        children: [
            isInRealDOM && /*#__PURE__*/ (0, $kY5I6$jsx)("div", {
                className: " . _Zd qo _1c iG ibH jG jbH _zb ba",
                children: /*#__PURE__*/ (0, $kY5I6$jsx)((0, $kY5I6$Provider), {
                    values: [
                        [
                            (0, $8e847109a6ab556d$export$9afb8bc826b033ea),
                            {
                                styles: " . __A-3t1y __vb __wb _ma _pb"
                            }
                        ],
                        [
                            (0, $ac8c32e6775ddd1f$export$a49f528ae1a4d0ed),
                            {
                                render: (0, $1f4b04be3f24aae3$export$9d7e2342a7e53afa)({
                                    slot: 'icon',
                                    styles: " . __A-3t1x"
                                }),
                                styles: " . l-1sthc3k k-1sthc3k y-oelgqu _8-3t1x"
                            }
                        ],
                        [
                            (0, $3ffa2cd930156220$export$a20dad690e1279e2),
                            {
                                size: $1d63bfab43d9ffe1$var$avatarSize[size],
                                styles: " . __A-3t1x"
                            }
                        ],
                        [
                            (0, $dbd6f0b2503b938c$export$8151eb379fcf2442),
                            {
                                styles: " . l-1sthc3k k-1sthc3k _8-3t1x __A-3t1x _bb __Na _vb _wb _xb _yb"
                            }
                        ]
                    ],
                    children: children
                })
            }),
            !isInRealDOM && children,
            allowsRemoving && isInRealDOM && /*#__PURE__*/ (0, $kY5I6$jsx)((0, $f6a62e6e68437458$export$13ec83e50bf04290), {
                slot: "remove",
                size: size,
                isDisabled: isDisabled
            })
        ]
    });
}


export {$1d63bfab43d9ffe1$export$5b07b5dd2cbd96e3 as TagGroupContext, $1d63bfab43d9ffe1$export$67ea30858aaf75e3 as TagGroup, $1d63bfab43d9ffe1$export$3288d34c523a1192 as Tag};
//# sourceMappingURL=TagGroup.mjs.map
