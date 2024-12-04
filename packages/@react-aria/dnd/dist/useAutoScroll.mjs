import {isScrollable as $2wNms$isScrollable, getScrollParent as $2wNms$getScrollParent, isWebKit as $2wNms$isWebKit, isIOS as $2wNms$isIOS} from "@react-aria/utils";
import {useRef as $2wNms$useRef, useEffect as $2wNms$useEffect, useCallback as $2wNms$useCallback} from "react";

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

const $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE = 20;
function $80d9daea3067eff3$export$6323452ca4533ed8(ref) {
    let scrollableRef = (0, $2wNms$useRef)(null);
    let scrollableX = (0, $2wNms$useRef)(true);
    let scrollableY = (0, $2wNms$useRef)(true);
    (0, $2wNms$useEffect)(()=>{
        if (ref.current) {
            scrollableRef.current = (0, $2wNms$isScrollable)(ref.current) ? ref.current : (0, $2wNms$getScrollParent)(ref.current);
            let style = window.getComputedStyle(scrollableRef.current);
            scrollableX.current = /(auto|scroll)/.test(style.overflowX);
            scrollableY.current = /(auto|scroll)/.test(style.overflowY);
        }
    }, [
        ref
    ]);
    let state = (0, $2wNms$useRef)({
        timer: undefined,
        dx: 0,
        dy: 0
    }).current;
    (0, $2wNms$useEffect)(()=>{
        return ()=>{
            if (state.timer) {
                cancelAnimationFrame(state.timer);
                state.timer = undefined;
            }
        };
    // state will become a new object, so it's ok to use in the dependency array for unmount
    }, [
        state
    ]);
    let scroll = (0, $2wNms$useCallback)(()=>{
        if (scrollableX.current && scrollableRef.current) scrollableRef.current.scrollLeft += state.dx;
        if (scrollableY.current && scrollableRef.current) scrollableRef.current.scrollTop += state.dy;
        if (state.timer) state.timer = requestAnimationFrame(scroll);
    }, [
        scrollableRef,
        state
    ]);
    return {
        move (x, y) {
            // Most browsers auto scroll natively, but WebKit on macOS does not (iOS does 🤷‍♂️).
            // https://bugs.webkit.org/show_bug.cgi?id=222636
            if (!(0, $2wNms$isWebKit)() || (0, $2wNms$isIOS)() || !scrollableRef.current) return;
            let box = scrollableRef.current.getBoundingClientRect();
            let left = $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE;
            let top = $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE;
            let bottom = box.height - $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE;
            let right = box.width - $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE;
            if (x < left || x > right || y < top || y > bottom) {
                if (x < left) state.dx = x - left;
                else if (x > right) state.dx = x - right;
                if (y < top) state.dy = y - top;
                else if (y > bottom) state.dy = y - bottom;
                if (!state.timer) state.timer = requestAnimationFrame(scroll);
            } else this.stop();
        },
        stop () {
            if (state.timer) {
                cancelAnimationFrame(state.timer);
                state.timer = undefined;
            }
        }
    };
}


export {$80d9daea3067eff3$export$6323452ca4533ed8 as useAutoScroll};
//# sourceMappingURL=useAutoScroll.module.js.map
