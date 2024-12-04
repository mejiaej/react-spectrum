import "./ColorHandle.css";
import {jsx as $kShzN$jsx, jsxs as $kShzN$jsxs, Fragment as $kShzN$Fragment} from "react/jsx-runtime";
import {useState as $kShzN$useState, cloneElement as $kShzN$cloneElement} from "react";
import {ColorThumb as $kShzN$ColorThumb} from "react-aria-components";
import {createPortal as $kShzN$createPortal} from "react-dom";
import {useId as $kShzN$useId, useLayoutEffect as $kShzN$useLayoutEffect} from "@react-aria/utils";

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




const $b4f7db7c45cd3de9$var$HANDLE_SIZE = 16;
const $b4f7db7c45cd3de9$var$LOUPE_HEIGHT = 64; // Does not include borders
const $b4f7db7c45cd3de9$var$LOUPE_WIDTH = 48;
const $b4f7db7c45cd3de9$var$LOUPE_BORDER_WIDTH = 1;
const $b4f7db7c45cd3de9$var$LOUPE_OFFSET = 12; // Offset from handle to loupe
function $b4f7db7c45cd3de9$export$92862704de639678({ containerRef: containerRef, getPosition: getPosition }) {
    return /*#__PURE__*/ (0, $kShzN$jsx)((0, $kShzN$ColorThumb), {
        className: function anonymous(props) {
            let rules = " .";
            rules += ' _O-1oihi8a';
            rules += ' _Q-375x7f';
            rules += ' _Ra';
            if (props.isFocusVisible) rules += ' lU';
            else rules += ' lE';
            if (props.isFocusVisible) rules += ' kU';
            else rules += ' kE';
            if (props.isDisabled) rules += ' bg';
            rules += ' _vf';
            rules += ' _wf';
            rules += ' _xf';
            rules += ' _yf';
            rules += ' __na';
            rules += ' wa';
            rules += ' uc';
            rules += ' vc';
            rules += ' sc';
            rules += ' tc';
            if (props.isDisabled) rules += ' ci';
            else rules += ' cc';
            rules += ' _Lb';
            rules += ' _Nb';
            rules += ' da_____v';
            rules += ' db42';
            return rules;
        },
        style: ({ defaultStyle: defaultStyle, isDisabled: isDisabled })=>({
                background: isDisabled ? undefined : `linear-gradient(${defaultStyle.backgroundColor}, ${defaultStyle.backgroundColor}), repeating-conic-gradient(#E1E1E1 0% 25%, white 0% 50%) 50% / 16px 16px`,
                backgroundColor: undefined,
                top: defaultStyle.top || '50%',
                left: defaultStyle.left || '50%'
            }),
        children: ({ isDragging: isDragging, color: color })=>/*#__PURE__*/ (0, $kShzN$jsxs)((0, $kShzN$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $kShzN$jsx)("div", {
                        className: " . lb kb _vf _wf _xf _yf __na wa ub vb sb tb cb42 ca_____v"
                    }),
                    /*#__PURE__*/ (0, $kShzN$jsx)($b4f7db7c45cd3de9$var$ColorLoupePortal, {
                        isOpen: isDragging,
                        children: /*#__PURE__*/ (0, $kShzN$jsx)($b4f7db7c45cd3de9$var$ColorLoupe, {
                            containerRef: containerRef,
                            color: color,
                            getPosition: getPosition
                        })
                    })
                ]
            })
    });
}
// ColorLoupe is rendered in a portal so that it breaks out of clipped/scrolling containers (e.g. popovers).
function $b4f7db7c45cd3de9$var$ColorLoupePortal({ isOpen: isOpen, children: children }) {
    let [state, setState] = (0, $kShzN$useState)(isOpen ? 'open' : 'closed');
    if (isOpen && state === 'closed') setState('open');
    if (!isOpen && state === 'open') setState('exiting');
    if (isOpen || state === 'exiting') return /*#__PURE__*/ (0, $kShzN$createPortal)(/*#__PURE__*/ (0, $kShzN$cloneElement)(children, {
        isExiting: state === 'exiting',
        onExited: ()=>setState('closed')
    }), document.body);
    return null;
}
function $b4f7db7c45cd3de9$var$ColorLoupe({ isExiting: isExiting, onExited: onExited, containerRef: containerRef, loupeRef: loupeRef, getPosition: getPosition, color: color }) {
    let patternId = (0, $kShzN$useId)();
    // Get the bounding rectangle of the container (e.g. ColorArea/ColorSlider).
    let [containerRect, setContainerRect] = (0, $kShzN$useState)({
        top: 0,
        left: 0,
        width: 0,
        height: 0
    });
    (0, $kShzN$useLayoutEffect)(()=>{
        let rect = containerRef.current?.getBoundingClientRect();
        setContainerRect({
            top: rect?.top || 0,
            left: rect?.left || 0,
            width: rect?.width || 0,
            height: rect?.height || 0
        });
    }, [
        containerRef
    ]);
    // Compute the pixel position of the thumb.
    let { x: thumbLeft, y: thumbTop } = getPosition();
    thumbTop *= containerRect.height;
    thumbLeft *= containerRect.width;
    let enterAnimation = "-_16byv7u";
    let exitAnimation = "-fqdrzt";
    return /*#__PURE__*/ (0, $kShzN$jsxs)("svg", {
        style: {
            // Position relative to the viewport.
            position: 'fixed',
            top: containerRect.top + thumbTop,
            left: containerRect.left + thumbLeft,
            marginTop: -$b4f7db7c45cd3de9$var$LOUPE_HEIGHT - $b4f7db7c45cd3de9$var$LOUPE_BORDER_WIDTH * 2 - $b4f7db7c45cd3de9$var$HANDLE_SIZE / 2 - $b4f7db7c45cd3de9$var$LOUPE_OFFSET,
            marginLeft: -$b4f7db7c45cd3de9$var$LOUPE_WIDTH / 2 - $b4f7db7c45cd3de9$var$LOUPE_BORDER_WIDTH,
            animationName: isExiting ? exitAnimation : enterAnimation
        },
        className: " . _ub __Ba _T-375x4t _Wb _Ya __Fa",
        onAnimationEnd: (e)=>{
            if (e.animationName === exitAnimation) onExited();
        },
        width: $b4f7db7c45cd3de9$var$LOUPE_WIDTH + $b4f7db7c45cd3de9$var$LOUPE_BORDER_WIDTH * 2,
        height: $b4f7db7c45cd3de9$var$LOUPE_HEIGHT + $b4f7db7c45cd3de9$var$LOUPE_BORDER_WIDTH * 2,
        ref: loupeRef,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, $kShzN$jsxs)("pattern", {
                id: patternId,
                x: "0",
                y: "0",
                width: "16",
                height: "16",
                patternUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0, $kShzN$jsx)("rect", {
                        fill: "white",
                        x: "0",
                        y: "0",
                        width: "16",
                        height: "16"
                    }),
                    /*#__PURE__*/ (0, $kShzN$jsx)("rect", {
                        fill: "#E1E1E1",
                        x: "0",
                        y: "0",
                        width: "8",
                        height: "8"
                    }),
                    /*#__PURE__*/ (0, $kShzN$jsx)("rect", {
                        fill: "#E1E1E1",
                        x: "8",
                        y: "8",
                        width: "8",
                        height: "8"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $kShzN$jsx)("path", {
                d: "M25 1a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z",
                fill: `url(#${patternId})`
            }),
            /*#__PURE__*/ (0, $kShzN$jsx)("path", {
                d: "M25 1a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z",
                fill: color.toString()
            }),
            /*#__PURE__*/ (0, $kShzN$jsx)("path", {
                className: " . xb f_____n fa_____x eA",
                d: "M25 3A21.98 21.98 0 003 25c0 6.2 4 14.794 11.568 24.853A144.233 144.233 0 0025 62.132a144.085 144.085 0 0010.4-12.239C42.99 39.816 47 31.209 47 25A21.98 21.98 0 0025 3m0-2a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z"
            })
        ]
    });
}


export {$b4f7db7c45cd3de9$export$92862704de639678 as ColorHandle};
//# sourceMappingURL=ColorHandle.mjs.map
