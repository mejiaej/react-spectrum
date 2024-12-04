require("./TagGroup.css");
var $6e265ff388155b91$exports = require("./ActionButton.cjs");
var $7e7cdbd2b8ae2467$exports = require("../icons/AlertTriangle.cjs");
var $38071d9ce246d4cf$exports = require("./Avatar.cjs");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $4fb579ecc195bd2b$exports = require("./ClearButton.cjs");
var $a0b996a550bb0891$exports = require("./Field.cjs");
var $bfa4962d90c8af48$exports = require("./Form.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $053b76ed3d29e13b$exports = require("./Image.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $chbGa$reactjsxruntime = require("react/jsx-runtime");
var $chbGa$reactariacomponents = require("react-aria-components");
var $chbGa$reactariacollections = require("@react-aria/collections");
var $chbGa$react = require("react");
var $chbGa$reactdom = require("react-dom");
var $chbGa$reactspectrumutils = require("@react-spectrum/utils");
var $chbGa$reactariautils = require("@react-aria/utils");
var $chbGa$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TagGroupContext", () => $2e3ddd7543f4a901$export$5b07b5dd2cbd96e3);
$parcel$export(module.exports, "TagGroup", () => $2e3ddd7543f4a901$export$67ea30858aaf75e3);
$parcel$export(module.exports, "Tag", () => $2e3ddd7543f4a901$export$3288d34c523a1192);
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




















const $2e3ddd7543f4a901$export$5b07b5dd2cbd96e3 = /*#__PURE__*/ (0, $chbGa$react.createContext)(null);
const $2e3ddd7543f4a901$var$helpTextStyles = function anonymous(props) {
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
const $2e3ddd7543f4a901$var$InternalTagGroupContext = /*#__PURE__*/ (0, $chbGa$react.createContext)({});
const $2e3ddd7543f4a901$export$67ea30858aaf75e3 = /*#__PURE__*/ (0, $chbGa$react.forwardRef)(function TagGroup(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $2e3ddd7543f4a901$export$5b07b5dd2cbd96e3);
    props = (0, $bfa4962d90c8af48$exports.useFormProps)(props);
    let { onRemove: onRemove } = props;
    return /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)($2e3ddd7543f4a901$var$InternalTagGroupContext.Provider, {
        value: {
            onRemove: onRemove
        },
        children: /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $chbGa$reactariacollections.CollectionBuilder), {
            content: /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $chbGa$reactariacollections.Collection), {
                ...props
            }),
            children: (collection)=>/*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)($2e3ddd7543f4a901$var$TagGroupInner, {
                    props: props,
                    forwardedRef: ref,
                    collection: collection
                })
        })
    });
});
function $2e3ddd7543f4a901$var$TagGroupInner({ props: { label: label, description: description, labelPosition: labelPosition = 'top', labelAlign: labelAlign = 'start', isEmphasized: isEmphasized, isInvalid: isInvalid, errorMessage: errorMessage, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, size: size = 'M', ...props1 }, forwardedRef: ref, collection: collection }) {
    let stringFormatter = (0, $chbGa$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    let { maxRows: maxRows, groupActionLabel: groupActionLabel, onGroupAction: onGroupAction, renderEmptyState: renderEmptyState = ()=>stringFormatter.format('tag.noTags'), ...otherProps } = props1;
    let { direction: direction } = (0, $chbGa$reactariacomponents.useLocale)();
    let containerRef = (0, $chbGa$react.useRef)(null);
    let tagsRef = (0, $chbGa$react.useRef)(null);
    let actionsRef = (0, $chbGa$react.useRef)(null);
    let hiddenTagsRef = (0, $chbGa$react.useRef)(null);
    let [tagState, setTagState] = (0, $chbGa$react.useState)({
        visibleTagCount: collection.size,
        showCollapseButton: false
    });
    let [isCollapsed, setIsCollapsed] = (0, $chbGa$react.useState)(maxRows != null);
    let { onRemove: onRemove } = (0, $chbGa$react.useContext)($2e3ddd7543f4a901$var$InternalTagGroupContext);
    let isEmpty = collection.size === 0;
    let showCollapseToggleButton = tagState.showCollapseButton || tagState.visibleTagCount < collection.size;
    let formContext = (0, $chbGa$react.useContext)((0, $bfa4962d90c8af48$exports.FormContext));
    let domRef = (0, $chbGa$reactspectrumutils.useDOMRef)(ref);
    let allItems = (0, $chbGa$react.useMemo)(()=>Array.from(collection), [
        collection
    ]);
    let items = (0, $chbGa$react.useMemo)(()=>Array.from(collection).slice(0, !isCollapsed ? collection.size : tagState.visibleTagCount), [
        collection,
        tagState.visibleTagCount,
        isCollapsed
    ]);
    let updateVisibleTagCount = (0, $chbGa$reactariautils.useEffectEvent)(()=>{
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
            (0, $chbGa$reactdom.flushSync)(()=>{
                setTagState(result);
            });
        }
    });
    (0, $chbGa$reactariautils.useResizeObserver)({
        ref: maxRows != null ? containerRef : undefined,
        onResize: updateVisibleTagCount
    });
    (0, $chbGa$reactariautils.useLayoutEffect)(()=>{
        if (collection.size > 0 && maxRows != null && maxRows > 0) queueMicrotask(updateVisibleTagCount);
    }, [
        collection.size,
        updateVisibleTagCount,
        maxRows
    ]);
    (0, $chbGa$react.useEffect)(()=>{
        // Recalculate visible tags when fonts are loaded.
        document.fonts?.ready.then(()=>updateVisibleTagCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let handlePressCollapse = ()=>{
        setIsCollapsed((prevCollapsed)=>!prevCollapsed);
    };
    let helpText = null;
    if (!isInvalid && description) helpText = /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
        slot: "description",
        styles: $2e3ddd7543f4a901$var$helpTextStyles({
            size: size
        }),
        children: description
    });
    else if (isInvalid) helpText = /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsxs)("div", {
        className: $2e3ddd7543f4a901$var$helpTextStyles({
            size: size,
            isInvalid: isInvalid
        }),
        children: [
            /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $e991cbcdf82ced71$exports.CenterBaseline), {
                children: /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $7e7cdbd2b8ae2467$exports.default), {})
            }),
            /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                slot: "errorMessage",
                children: errorMessage
            })
        ]
    });
    return /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsxs)((0, $chbGa$reactariacomponents.TagGroup), {
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
            /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $a0b996a550bb0891$exports.FieldLabel), {
                size: size,
                labelPosition: labelPosition,
                labelAlign: labelAlign,
                contextualHelp: props1.contextualHelp,
                children: label
            }),
            /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)("div", {
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
                children: /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $bfa4962d90c8af48$exports.FormContext).Provider, {
                    value: {
                        ...formContext,
                        size: size
                    },
                    children: /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsxs)((0, $chbGa$reactariacomponents.Provider), {
                        values: [
                            [
                                (0, $chbGa$reactariacomponents.TextContext),
                                undefined
                            ],
                            [
                                $2e3ddd7543f4a901$export$5b07b5dd2cbd96e3,
                                {
                                    size: size,
                                    isEmphasized: isEmphasized
                                }
                            ]
                        ],
                        children: [
                            maxRows != null && /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)("div", {
                                // @ts-ignore
                                inert: "true",
                                ref: hiddenTagsRef,
                                className: " . _Zc _7a _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh Ua Xa Za __Eb __vb __wb _K-3t1x",
                                children: allItems.map((item)=>{
                                    // pull off individual props as an allow list, don't want refs or other props getting through
                                    return /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)("div", {
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
                            /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $chbGa$reactariacomponents.TagList), {
                                ref: tagsRef,
                                items: items,
                                renderEmptyState: renderEmptyState,
                                className: " . _Zc qb _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _de _dbf _eb _fa _f-1x99dlob an",
                                children: (item)=>/*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)($2e3ddd7543f4a901$export$3288d34c523a1192, {
                                        ...item.props,
                                        id: item.key,
                                        textValue: item.textValue
                                    })
                            }),
                            !isEmpty && (showCollapseToggleButton || groupActionLabel) && /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)($2e3ddd7543f4a901$var$ActionGroup, {
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
function $2e3ddd7543f4a901$var$ActionGroup(props) {
    let stringFormatter = (0, $chbGa$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    let { actionsRef: actionsRef, tagState: tagState, size: size, isCollapsed: isCollapsed, handlePressCollapse: handlePressCollapse, onGroupAction: onGroupAction, groupActionLabel: groupActionLabel, collection: collection, // directly use aria-labelling from the TagGroup because we can't use the id from the TagList
    // and we can't supply an id to the TagList because it'll cause an issue where all the tag ids flip back
    // and forth with their prefix in an infinite loop
    'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy } = props;
    let actionsId = (0, $chbGa$reactariautils.useId)();
    // might need to localize the aria-label which concatenates with this label
    let actionGroupLabel = stringFormatter.format('tag.actions');
    return /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsxs)("div", {
        role: "group",
        ref: actionsRef,
        id: actionsId,
        "aria-label": ariaLabel ? `${ariaLabel} ${actionGroupLabel}` : actionGroupLabel,
        "aria-labelledby": ariaLabelledBy ? ariaLabelledBy : undefined,
        className: " . _Zc",
        children: [
            tagState.showCollapseButton && /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $6e265ff388155b91$exports.ActionButton), {
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
            groupActionLabel && onGroupAction && /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $6e265ff388155b91$exports.ActionButton), {
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
const $2e3ddd7543f4a901$var$tagStyles = function anonymous(props) {
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
const $2e3ddd7543f4a901$var$avatarSize = {
    S: 16,
    M: 20,
    L: 24
};
const $2e3ddd7543f4a901$export$3288d34c523a1192 = /*#__PURE__*/ (0, $chbGa$react.forwardRef)(function Tag({ children: children, textValue: textValue, ...props }, ref) {
    textValue ||= typeof children === 'string' ? children : undefined;
    let ctx = (0, $chbGa$reactariacomponents.useSlottedContext)($2e3ddd7543f4a901$export$5b07b5dd2cbd96e3);
    let isInRealDOM = Boolean(ctx?.size);
    let { size: size, isEmphasized: isEmphasized } = ctx ?? {};
    let domRef = (0, $chbGa$reactspectrumutils.useDOMRef)(ref);
    let backupRef = (0, $chbGa$react.useRef)(null);
    domRef = domRef || backupRef;
    let isLink = props.href != null;
    return /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $chbGa$reactariacomponents.Tag), {
        textValue: textValue,
        ...props,
        ref: domRef,
        style: (0, $2061c83559b50a66$exports.pressScale)(domRef),
        className: (renderProps)=>$2e3ddd7543f4a901$var$tagStyles({
                size: size,
                isEmphasized: isEmphasized,
                isLink: isLink,
                ...renderProps
            }),
        children: (0, $chbGa$reactariacomponents.composeRenderProps)(children, (children, renderProps)=>/*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)($2e3ddd7543f4a901$var$TagWrapper, {
                isInRealDOM: isInRealDOM,
                ...renderProps,
                children: typeof children === 'string' ? /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                    children: children
                }) : children
            }))
    });
});
function $2e3ddd7543f4a901$var$TagWrapper({ children: children, isDisabled: isDisabled, allowsRemoving: allowsRemoving, isInRealDOM: isInRealDOM }) {
    let { size: size = 'M' } = (0, $chbGa$reactariacomponents.useSlottedContext)($2e3ddd7543f4a901$export$5b07b5dd2cbd96e3) ?? {};
    return /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsxs)((0, $chbGa$reactjsxruntime.Fragment), {
        children: [
            isInRealDOM && /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)("div", {
                className: " . _Zd qo _1c iG ibH jG jbH _zb ba",
                children: /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $chbGa$reactariacomponents.Provider), {
                    values: [
                        [
                            (0, $6367bc87eb7d24ad$exports.TextContext),
                            {
                                styles: " . __A-3t1y __vb __wb _ma _pb"
                            }
                        ],
                        [
                            (0, $bde97c91243ed164$exports.IconContext),
                            {
                                render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                                    slot: 'icon',
                                    styles: " . __A-3t1x"
                                }),
                                styles: " . l-1sthc3k k-1sthc3k y-oelgqu _8-3t1x"
                            }
                        ],
                        [
                            (0, $38071d9ce246d4cf$exports.AvatarContext),
                            {
                                size: $2e3ddd7543f4a901$var$avatarSize[size],
                                styles: " . __A-3t1x"
                            }
                        ],
                        [
                            (0, $053b76ed3d29e13b$exports.ImageContext),
                            {
                                styles: " . l-1sthc3k k-1sthc3k _8-3t1x __A-3t1x _bb __Na _vb _wb _xb _yb"
                            }
                        ]
                    ],
                    children: children
                })
            }),
            !isInRealDOM && children,
            allowsRemoving && isInRealDOM && /*#__PURE__*/ (0, $chbGa$reactjsxruntime.jsx)((0, $4fb579ecc195bd2b$exports.ClearButton), {
                slot: "remove",
                size: size,
                isDisabled: isDisabled
            })
        ]
    });
}


//# sourceMappingURL=TagGroup.cjs.map
