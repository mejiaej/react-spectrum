import {useObjectRef as $iETbY$useObjectRef, mergeRefs as $iETbY$mergeRefs, mergeProps as $iETbY$mergeProps, useLayoutEffect as $iETbY$useLayoutEffect} from "@react-aria/utils";
import $iETbY$react, {useMemo as $iETbY$useMemo, useContext as $iETbY$useContext, useState as $iETbY$useState, useRef as $iETbY$useRef, useCallback as $iETbY$useCallback} from "react";
import $iETbY$reactdom from "react-dom";

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $64fa3d84918910a7$export$c62b8e45d58ddad9 = Symbol('default');
function $64fa3d84918910a7$export$2881499e37b75b9a({ values: values, children: children }) {
    for (let [Context, value] of values)// @ts-ignore
    children = /*#__PURE__*/ (0, $iETbY$react).createElement(Context.Provider, {
        value: value
    }, children);
    return children;
}
function $64fa3d84918910a7$export$4d86445c2cf5e3(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, defaultStyle: defaultStyle, values: values } = props;
    return (0, $iETbY$useMemo)(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === 'function') computedClassName = className({
            ...values,
            defaultClassName: defaultClassName
        });
        else computedClassName = className;
        if (typeof style === 'function') computedStyle = style({
            ...values,
            defaultStyle: defaultStyle || {}
        });
        else computedStyle = style;
        if (typeof children === 'function') computedChildren = children({
            ...values,
            defaultChildren: defaultChildren
        });
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName !== null && computedClassName !== void 0 ? computedClassName : defaultClassName,
            style: computedStyle || defaultStyle ? {
                ...defaultStyle,
                ...computedStyle
            } : undefined,
            children: computedChildren !== null && computedChildren !== void 0 ? computedChildren : defaultChildren,
            'data-rac': ''
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        defaultStyle,
        values
    ]);
}
function $64fa3d84918910a7$export$c245e6201fed2f75(// https://stackoverflow.com/questions/60898079/typescript-type-t-or-function-t-usage
value, wrap) {
    return (renderProps)=>wrap(typeof value === 'function' ? value(renderProps) : value, renderProps);
}
function $64fa3d84918910a7$export$fabf2dc03a41866e(context, slot) {
    let ctx = (0, $iETbY$useContext)(context);
    if (slot === null) // An explicit `null` slot means don't use context.
    return null;
    if (ctx && typeof ctx === 'object' && 'slots' in ctx && ctx.slots) {
        let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
        if (!slot && !ctx.slots[$64fa3d84918910a7$export$c62b8e45d58ddad9]) throw new Error(`A slot prop is required. Valid slot names are ${availableSlots}.`);
        let slotKey = slot || $64fa3d84918910a7$export$c62b8e45d58ddad9;
        if (!ctx.slots[slotKey]) // @ts-ignore
        throw new Error(`Invalid slot "${slot}". Valid slot names are ${availableSlots}.`);
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function $64fa3d84918910a7$export$29f1550f4b0d4415(props, ref, context) {
    let ctx = $64fa3d84918910a7$export$fabf2dc03a41866e(context, props.slot) || {};
    // @ts-ignore - TS says "Type 'unique symbol' cannot be used as an index type." but not sure why.
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, $iETbY$useObjectRef)((0, $iETbY$useMemo)(()=>(0, $iETbY$mergeRefs)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, $iETbY$mergeProps)(contextProps, props);
    // mergeProps does not merge `style`. Adding this there might be a breaking change.
    if ('style' in contextProps && contextProps.style && 'style' in props && props.style) {
        if (typeof contextProps.style === 'function' || typeof props.style === 'function') // @ts-ignore
        mergedProps.style = (renderProps)=>{
            let contextStyle = typeof contextProps.style === 'function' ? contextProps.style(renderProps) : contextProps.style;
            let defaultStyle = {
                ...renderProps.defaultStyle,
                ...contextStyle
            };
            let style = typeof props.style === 'function' ? props.style({
                ...renderProps,
                defaultStyle: defaultStyle
            }) : props.style;
            return {
                ...defaultStyle,
                ...style
            };
        };
        else // @ts-ignore
        mergedProps.style = {
            ...contextProps.style,
            ...props.style
        };
    }
    return [
        mergedProps,
        mergedRef
    ];
}
function $64fa3d84918910a7$export$9d4c57ee4c6ffdd8() {
    // Assume we do have the slot in the initial render.
    let [hasSlot, setHasSlot] = (0, $iETbY$useState)(true);
    let hasRun = (0, $iETbY$useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, $iETbY$useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, $iETbY$useLayoutEffect)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $64fa3d84918910a7$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (0, $iETbY$useState)(true);
    $64fa3d84918910a7$var$useAnimation(ref, isEntering && isReady, (0, $iETbY$useCallback)(()=>setEntering(false), []));
    return isEntering && isReady;
}
function $64fa3d84918910a7$export$45fda7c47f93fd48(ref, isOpen) {
    // State to trigger a re-render after animation is complete, which causes the element to be removed from the DOM.
    // Ref to track the state we're in, so we don't immediately reset isExiting to true after the animation.
    let [isExiting, setExiting] = (0, $iETbY$useState)(false);
    let [exitState, setExitState] = (0, $iETbY$useState)('idle');
    // If isOpen becomes false, set isExiting to true.
    if (!isOpen && ref.current && exitState === 'idle') {
        isExiting = true;
        setExiting(true);
        setExitState('exiting');
    }
    // If we exited, and the element has been removed, reset exit state to idle.
    if (!ref.current && exitState === 'exited') setExitState('idle');
    $64fa3d84918910a7$var$useAnimation(ref, isExiting, (0, $iETbY$useCallback)(()=>{
        setExitState('exited');
        setExiting(false);
    }, []));
    return isExiting;
}
function $64fa3d84918910a7$var$useAnimation(ref, isActive, onEnd) {
    let prevAnimation = (0, $iETbY$useRef)(null);
    if (isActive && ref.current) // This is ok because we only read it in the layout effect below, immediately after the commit phase.
    // We could move this to another effect that runs every render, but this would be unnecessarily slow.
    // We only need the computed style right before the animation becomes active.
    // eslint-disable-next-line rulesdir/pure-render
    prevAnimation.current = window.getComputedStyle(ref.current).animation;
    (0, $iETbY$useLayoutEffect)(()=>{
        if (isActive && ref.current) {
            // Make sure there's actually an animation, and it wasn't there before we triggered the update.
            let computedStyle = window.getComputedStyle(ref.current);
            if (computedStyle.animationName && computedStyle.animationName !== 'none' && computedStyle.animation !== prevAnimation.current) {
                let onAnimationEnd = (e)=>{
                    if (e.target === ref.current) {
                        element.removeEventListener('animationend', onAnimationEnd);
                        (0, $iETbY$reactdom).flushSync(()=>{
                            onEnd();
                        });
                    }
                };
                let element = ref.current;
                element.addEventListener('animationend', onAnimationEnd);
                return ()=>{
                    element.removeEventListener('animationend', onAnimationEnd);
                };
            } else onEnd();
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}
function $64fa3d84918910a7$export$ef03459518577ad4(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}


export {$64fa3d84918910a7$export$c62b8e45d58ddad9 as DEFAULT_SLOT, $64fa3d84918910a7$export$2881499e37b75b9a as Provider, $64fa3d84918910a7$export$4d86445c2cf5e3 as useRenderProps, $64fa3d84918910a7$export$c245e6201fed2f75 as composeRenderProps, $64fa3d84918910a7$export$fabf2dc03a41866e as useSlottedContext, $64fa3d84918910a7$export$29f1550f4b0d4415 as useContextProps, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8 as useSlot, $64fa3d84918910a7$export$6d3443f2c48bfc20 as useEnterAnimation, $64fa3d84918910a7$export$45fda7c47f93fd48 as useExitAnimation, $64fa3d84918910a7$export$ef03459518577ad4 as removeDataAttributes};
//# sourceMappingURL=utils.module.js.map
