import {getScrollLeft as $ce415dc67314b753$export$1389d168952b34b5} from "./utils.mjs";
import {flushSync as $f9kpT$flushSync} from "react-dom";
import $f9kpT$react, {useRef as $f9kpT$useRef, useState as $f9kpT$useState, useCallback as $f9kpT$useCallback, useEffect as $f9kpT$useEffect} from "react";
import {Rect as $f9kpT$Rect} from "@react-stately/virtualizer";
import {useObjectRef as $f9kpT$useObjectRef, useEvent as $f9kpT$useEvent, useEffectEvent as $f9kpT$useEffectEvent, useLayoutEffect as $f9kpT$useLayoutEffect, useResizeObserver as $f9kpT$useResizeObserver} from "@react-aria/utils";
import {useLocale as $f9kpT$useLocale} from "@react-aria/i18n";

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
 */ // @ts-ignore






function $44a6ee657928b002$var$ScrollView(props, ref) {
    ref = (0, $f9kpT$useObjectRef)(ref);
    let { scrollViewProps: scrollViewProps, contentProps: contentProps } = $44a6ee657928b002$export$2ea0c4974da4731b(props, ref);
    return /*#__PURE__*/ (0, $f9kpT$react).createElement("div", {
        role: "presentation",
        ...scrollViewProps,
        ref: ref
    }, /*#__PURE__*/ (0, $f9kpT$react).createElement("div", contentProps, props.children));
}
const $44a6ee657928b002$export$5665e3d6be6adea = /*#__PURE__*/ (0, $f9kpT$react).forwardRef($44a6ee657928b002$var$ScrollView);
function $44a6ee657928b002$export$2ea0c4974da4731b(props, ref) {
    let { contentSize: contentSize, onVisibleRectChange: onVisibleRectChange, innerStyle: innerStyle, onScrollStart: onScrollStart, onScrollEnd: onScrollEnd, scrollDirection: scrollDirection = 'both', ...otherProps } = props;
    let state = (0, $f9kpT$useRef)({
        scrollTop: 0,
        scrollLeft: 0,
        scrollEndTime: 0,
        scrollTimeout: null,
        width: 0,
        height: 0,
        isScrolling: false
    }).current;
    let { direction: direction } = (0, $f9kpT$useLocale)();
    let [isScrolling, setScrolling] = (0, $f9kpT$useState)(false);
    let onScroll = (0, $f9kpT$useCallback)((e)=>{
        if (e.target !== e.currentTarget) return;
        if (props.onScroll) props.onScroll(e);
        (0, $f9kpT$flushSync)(()=>{
            let scrollTop = e.currentTarget.scrollTop;
            let scrollLeft = (0, $ce415dc67314b753$export$1389d168952b34b5)(e.currentTarget, direction);
            // Prevent rubber band scrolling from shaking when scrolling out of bounds
            state.scrollTop = Math.max(0, Math.min(scrollTop, contentSize.height - state.height));
            state.scrollLeft = Math.max(0, Math.min(scrollLeft, contentSize.width - state.width));
            onVisibleRectChange(new (0, $f9kpT$Rect)(state.scrollLeft, state.scrollTop, state.width, state.height));
            if (!state.isScrolling) {
                state.isScrolling = true;
                setScrolling(true);
                // Pause typekit MutationObserver during scrolling.
                window.dispatchEvent(new Event('tk.disconnect-observer'));
                if (onScrollStart) onScrollStart();
            }
            // So we don't constantly call clearTimeout and setTimeout,
            // keep track of the current timeout time and only reschedule
            // the timer when it is getting close.
            let now = Date.now();
            if (state.scrollEndTime <= now + 50) {
                state.scrollEndTime = now + 300;
                if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
                state.scrollTimeout = setTimeout(()=>{
                    state.isScrolling = false;
                    setScrolling(false);
                    state.scrollTimeout = null;
                    window.dispatchEvent(new Event('tk.connect-observer'));
                    if (onScrollEnd) onScrollEnd();
                }, 300);
            }
        });
    }, [
        props,
        direction,
        state,
        contentSize,
        onVisibleRectChange,
        onScrollStart,
        onScrollEnd
    ]);
    // Attach event directly to ref so RAC Virtualizer doesn't need to send props upward.
    (0, $f9kpT$useEvent)(ref, 'scroll', onScroll);
    (0, $f9kpT$useEffect)(()=>{
        return ()=>{
            if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
            if (state.isScrolling) window.dispatchEvent(new Event('tk.connect-observer'));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let isUpdatingSize = (0, $f9kpT$useRef)(false);
    let updateSize = (0, $f9kpT$useEffectEvent)((flush)=>{
        let dom = ref.current;
        if (!dom || isUpdatingSize.current) return;
        // Prevent reentrancy when resize observer fires, triggers re-layout that results in
        // content size update, causing below layout effect to fire. This avoids infinite loops.
        isUpdatingSize.current = true;
        let isTestEnv = false;
        let isClientWidthMocked = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientWidth');
        let isClientHeightMocked = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientHeight');
        let clientWidth = dom.clientWidth;
        let clientHeight = dom.clientHeight;
        let w = isTestEnv && !isClientWidthMocked ? Infinity : clientWidth;
        let h = isTestEnv && !isClientHeightMocked ? Infinity : clientHeight;
        if (state.width !== w || state.height !== h) {
            state.width = w;
            state.height = h;
            flush(()=>{
                onVisibleRectChange(new (0, $f9kpT$Rect)(state.scrollLeft, state.scrollTop, w, h));
            });
            // If the clientWidth or clientHeight changed, scrollbars appeared or disappeared as
            // a result of the layout update. In this case, re-layout again to account for the
            // adjusted space. In very specific cases this might result in the scrollbars disappearing
            // again, resulting in extra padding. We stop after a maximum of two layout passes to avoid
            // an infinite loop. This matches how browsers behavior with native CSS grid layout.
            if (!isTestEnv && clientWidth !== dom.clientWidth || clientHeight !== dom.clientHeight) {
                state.width = dom.clientWidth;
                state.height = dom.clientHeight;
                flush(()=>{
                    onVisibleRectChange(new (0, $f9kpT$Rect)(state.scrollLeft, state.scrollTop, state.width, state.height));
                });
            }
        }
        isUpdatingSize.current = false;
    });
    // Update visible rect when the content size changes, in case scrollbars need to appear or disappear.
    let lastContentSize = (0, $f9kpT$useRef)(null);
    (0, $f9kpT$useLayoutEffect)(()=>{
        if (!isUpdatingSize.current && (lastContentSize.current == null || !contentSize.equals(lastContentSize.current))) {
            // React doesn't allow flushSync inside effects, so queue a microtask.
            // We also need to wait until all refs are set (e.g. when passing a ref down from a parent).
            // If we are in an `act` environment, update immediately without a microtask so you don't need
            // to mock timers in tests. In this case, the update is synchronous already.
            // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
            // https://github.com/reactwg/react-18/discussions/102
            // @ts-ignore
            if (typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined') updateSize((fn)=>fn());
            else queueMicrotask(()=>updateSize((0, $f9kpT$flushSync)));
        }
        lastContentSize.current = contentSize;
    });
    let onResize = (0, $f9kpT$useCallback)(()=>{
        updateSize((0, $f9kpT$flushSync));
    }, [
        updateSize
    ]);
    // Watch border-box instead of of content-box so that we don't go into
    // an infinite loop when scrollbars appear or disappear.
    (0, $f9kpT$useResizeObserver)({
        ref: ref,
        box: 'border-box',
        onResize: onResize
    });
    let style = {
        // Reset padding so that relative positioning works correctly. Padding will be done in JS layout.
        padding: 0,
        ...otherProps.style
    };
    if (scrollDirection === 'horizontal') {
        style.overflowX = 'auto';
        style.overflowY = 'hidden';
    } else if (scrollDirection === 'vertical' || contentSize.width === state.width) {
        // Set overflow-x: hidden if content size is equal to the width of the scroll view.
        // This prevents horizontal scrollbars from flickering during resizing due to resize observer
        // firing slower than the frame rate, which may cause an infinite re-render loop.
        style.overflowY = 'auto';
        style.overflowX = 'hidden';
    } else style.overflow = 'auto';
    innerStyle = {
        width: Number.isFinite(contentSize.width) ? contentSize.width : undefined,
        height: Number.isFinite(contentSize.height) ? contentSize.height : undefined,
        pointerEvents: isScrolling ? 'none' : 'auto',
        position: 'relative',
        ...innerStyle
    };
    return {
        scrollViewProps: {
            ...otherProps,
            style: style
        },
        contentProps: {
            role: 'presentation',
            style: innerStyle
        }
    };
}


export {$44a6ee657928b002$export$2ea0c4974da4731b as useScrollView, $44a6ee657928b002$export$5665e3d6be6adea as ScrollView};
//# sourceMappingURL=ScrollView.module.js.map
