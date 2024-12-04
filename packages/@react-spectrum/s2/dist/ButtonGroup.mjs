import "./ButtonGroup.css";
import {ButtonContext as $067ea9f64ccd4e8e$export$24d547caef80ccd1, LinkButtonContext as $067ea9f64ccd4e8e$export$1c1a176f3b9e48d3} from "./Button.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $bnJX2$jsx} from "react/jsx-runtime";
import {Provider as $bnJX2$Provider} from "react-aria-components";
import {createContext as $bnJX2$createContext, forwardRef as $bnJX2$forwardRef, useCallback as $bnJX2$useCallback, useRef as $bnJX2$useRef} from "react";
import {useDOMRef as $bnJX2$useDOMRef, useResizeObserver as $bnJX2$useResizeObserver} from "@react-spectrum/utils";
import {useValueEffect as $bnJX2$useValueEffect, useLayoutEffect as $bnJX2$useLayoutEffect} from "@react-aria/utils";

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






const $472eaa9a9b344b9a$export$4c574c91bb0be0e2 = /*#__PURE__*/ (0, $bnJX2$createContext)({});
const $472eaa9a9b344b9a$var$buttongroup = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    for (let p of matches)if (/^\s*U/.test(p)) $U = true;
    rules += ' _Ze';
    if (!$U) rules += ' Uc';
    if (props.size === "XL") rules += ' ie';
    else if (props.size === "L") rules += ' ie';
    else if (props.size === "M") rules += ' ie';
    else if (props.size === "S") rules += ' id';
    if (props.size === "XL") rules += ' je';
    else if (props.size === "L") rules += ' je';
    else if (props.size === "M") rules += ' je';
    else if (props.size === "S") rules += ' jd';
    if (props.orientation === "vertical") rules += ' _6b';
    else rules += ' _6a';
    if (props.orientation === "vertical") {
        if (props.align === "center") rules += ' _1c';
        else if (props.align === "end") rules += ' _1b';
        else rules += ' _1a';
    } else rules += ' _1c';
    if (props.orientation === "vertical") {
        if (props.align === "center") rules += ' _2d';
        else if (props.align === "end") rules += ' _2c';
        else rules += ' _2b';
    }
    return rules;
};
const $472eaa9a9b344b9a$export$69b1032f2ecdf404 = /*#__PURE__*/ (0, $bnJX2$forwardRef)(function ButtonGroup(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $472eaa9a9b344b9a$export$4c574c91bb0be0e2);
    let domRef = (0, $bnJX2$useDOMRef)(ref);
    let { size: size = 'M', orientation: orientation = 'horizontal', align: align = 'start', children: children, isDisabled: isDisabled } = props;
    let [hasOverflow, setHasOverflow] = (0, $bnJX2$useValueEffect)(false);
    let checkForOverflow = (0, $bnJX2$useCallback)(()=>{
        let computeHasOverflow = ()=>{
            if (domRef.current && orientation === 'horizontal') {
                let buttonGroupChildren = Array.from(domRef.current.children);
                let maxX = domRef.current.offsetWidth + 1; // + 1 to account for rounding errors
                // If any buttons have negative X positions (align="end") or extend beyond
                // the width of the button group (align="start"), then switch to vertical.
                if (buttonGroupChildren.some((child)=>child.offsetLeft < 0 || child.offsetLeft + child.offsetWidth > maxX)) return true;
                return false;
            }
        };
        if (orientation === 'horizontal') setHasOverflow(function*() {
            // Force to horizontal for measurement.
            yield false;
            // Measure, and update if there is overflow.
            yield computeHasOverflow();
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        domRef,
        orientation,
        setHasOverflow,
        children
    ]);
    // There are two main reasons we need to remeasure:
    // 1. Internal changes: Check for initial overflow or when orientation/scale/children change (from checkForOverflow dep array)
    (0, $bnJX2$useLayoutEffect)(()=>{
        checkForOverflow();
    }, [
        checkForOverflow
    ]);
    // 2. External changes: buttongroup won't change size due to any parents changing size, so listen to its container for size changes to figure out if we should remeasure
    let parent = (0, $bnJX2$useRef)(null);
    (0, $bnJX2$useLayoutEffect)(()=>{
        if (domRef.current) parent.current = domRef.current.parentElement;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        domRef.current
    ]);
    (0, $bnJX2$useResizeObserver)({
        ref: parent,
        onResize: checkForOverflow
    });
    if (props.isHidden) return null;
    let context = {
        styles: " . _8-3t1x",
        size: size,
        isDisabled: isDisabled
    };
    return /*#__PURE__*/ (0, $bnJX2$jsx)("div", {
        ref: domRef,
        style: props.UNSAFE_style,
        className: (props.UNSAFE_className || '') + $472eaa9a9b344b9a$var$buttongroup({
            align: align,
            orientation: orientation === 'vertical' || hasOverflow ? 'vertical' : 'horizontal',
            size: size
        }, props.styles),
        children: /*#__PURE__*/ (0, $bnJX2$jsx)((0, $bnJX2$Provider), {
            values: [
                [
                    (0, $067ea9f64ccd4e8e$export$24d547caef80ccd1),
                    context
                ],
                [
                    (0, $067ea9f64ccd4e8e$export$1c1a176f3b9e48d3),
                    context
                ]
            ],
            children: children
        })
    });
});


export {$472eaa9a9b344b9a$export$4c574c91bb0be0e2 as ButtonGroupContext, $472eaa9a9b344b9a$export$69b1032f2ecdf404 as ButtonGroup};
//# sourceMappingURL=ButtonGroup.mjs.map
