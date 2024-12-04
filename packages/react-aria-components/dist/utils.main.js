var $1nknz$reactariautils = require("@react-aria/utils");
var $1nknz$react = require("react");
var $1nknz$reactdom = require("react-dom");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DEFAULT_SLOT", () => $c5ccf687772c0422$export$c62b8e45d58ddad9);
$parcel$export(module.exports, "Provider", () => $c5ccf687772c0422$export$2881499e37b75b9a);
$parcel$export(module.exports, "useRenderProps", () => $c5ccf687772c0422$export$4d86445c2cf5e3);
$parcel$export(module.exports, "composeRenderProps", () => $c5ccf687772c0422$export$c245e6201fed2f75);
$parcel$export(module.exports, "useSlottedContext", () => $c5ccf687772c0422$export$fabf2dc03a41866e);
$parcel$export(module.exports, "useContextProps", () => $c5ccf687772c0422$export$29f1550f4b0d4415);
$parcel$export(module.exports, "useSlot", () => $c5ccf687772c0422$export$9d4c57ee4c6ffdd8);
$parcel$export(module.exports, "useEnterAnimation", () => $c5ccf687772c0422$export$6d3443f2c48bfc20);
$parcel$export(module.exports, "useExitAnimation", () => $c5ccf687772c0422$export$45fda7c47f93fd48);
$parcel$export(module.exports, "removeDataAttributes", () => $c5ccf687772c0422$export$ef03459518577ad4);
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


const $c5ccf687772c0422$export$c62b8e45d58ddad9 = Symbol('default');
function $c5ccf687772c0422$export$2881499e37b75b9a({ values: values, children: children }) {
    for (let [Context, value] of values)// @ts-ignore
    children = /*#__PURE__*/ (0, ($parcel$interopDefault($1nknz$react))).createElement(Context.Provider, {
        value: value
    }, children);
    return children;
}
function $c5ccf687772c0422$export$4d86445c2cf5e3(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, defaultStyle: defaultStyle, values: values } = props;
    return (0, $1nknz$react.useMemo)(()=>{
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
function $c5ccf687772c0422$export$c245e6201fed2f75(// https://stackoverflow.com/questions/60898079/typescript-type-t-or-function-t-usage
value, wrap) {
    return (renderProps)=>wrap(typeof value === 'function' ? value(renderProps) : value, renderProps);
}
function $c5ccf687772c0422$export$fabf2dc03a41866e(context, slot) {
    let ctx = (0, $1nknz$react.useContext)(context);
    if (slot === null) // An explicit `null` slot means don't use context.
    return null;
    if (ctx && typeof ctx === 'object' && 'slots' in ctx && ctx.slots) {
        let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
        if (!slot && !ctx.slots[$c5ccf687772c0422$export$c62b8e45d58ddad9]) throw new Error(`A slot prop is required. Valid slot names are ${availableSlots}.`);
        let slotKey = slot || $c5ccf687772c0422$export$c62b8e45d58ddad9;
        if (!ctx.slots[slotKey]) // @ts-ignore
        throw new Error(`Invalid slot "${slot}". Valid slot names are ${availableSlots}.`);
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function $c5ccf687772c0422$export$29f1550f4b0d4415(props, ref, context) {
    let ctx = $c5ccf687772c0422$export$fabf2dc03a41866e(context, props.slot) || {};
    // @ts-ignore - TS says "Type 'unique symbol' cannot be used as an index type." but not sure why.
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, $1nknz$reactariautils.useObjectRef)((0, $1nknz$react.useMemo)(()=>(0, $1nknz$reactariautils.mergeRefs)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, $1nknz$reactariautils.mergeProps)(contextProps, props);
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
function $c5ccf687772c0422$export$9d4c57ee4c6ffdd8() {
    // Assume we do have the slot in the initial render.
    let [hasSlot, setHasSlot] = (0, $1nknz$react.useState)(true);
    let hasRun = (0, $1nknz$react.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, $1nknz$react.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, $1nknz$reactariautils.useLayoutEffect)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $c5ccf687772c0422$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (0, $1nknz$react.useState)(true);
    $c5ccf687772c0422$var$useAnimation(ref, isEntering && isReady, (0, $1nknz$react.useCallback)(()=>setEntering(false), []));
    return isEntering && isReady;
}
function $c5ccf687772c0422$export$45fda7c47f93fd48(ref, isOpen) {
    // State to trigger a re-render after animation is complete, which causes the element to be removed from the DOM.
    // Ref to track the state we're in, so we don't immediately reset isExiting to true after the animation.
    let [isExiting, setExiting] = (0, $1nknz$react.useState)(false);
    let [exitState, setExitState] = (0, $1nknz$react.useState)('idle');
    // If isOpen becomes false, set isExiting to true.
    if (!isOpen && ref.current && exitState === 'idle') {
        isExiting = true;
        setExiting(true);
        setExitState('exiting');
    }
    // If we exited, and the element has been removed, reset exit state to idle.
    if (!ref.current && exitState === 'exited') setExitState('idle');
    $c5ccf687772c0422$var$useAnimation(ref, isExiting, (0, $1nknz$react.useCallback)(()=>{
        setExitState('exited');
        setExiting(false);
    }, []));
    return isExiting;
}
function $c5ccf687772c0422$var$useAnimation(ref, isActive, onEnd) {
    let prevAnimation = (0, $1nknz$react.useRef)(null);
    if (isActive && ref.current) // This is ok because we only read it in the layout effect below, immediately after the commit phase.
    // We could move this to another effect that runs every render, but this would be unnecessarily slow.
    // We only need the computed style right before the animation becomes active.
    // eslint-disable-next-line rulesdir/pure-render
    prevAnimation.current = window.getComputedStyle(ref.current).animation;
    (0, $1nknz$reactariautils.useLayoutEffect)(()=>{
        if (isActive && ref.current) {
            // Make sure there's actually an animation, and it wasn't there before we triggered the update.
            let computedStyle = window.getComputedStyle(ref.current);
            if (computedStyle.animationName && computedStyle.animationName !== 'none' && computedStyle.animation !== prevAnimation.current) {
                let onAnimationEnd = (e)=>{
                    if (e.target === ref.current) {
                        element.removeEventListener('animationend', onAnimationEnd);
                        (0, ($parcel$interopDefault($1nknz$reactdom))).flushSync(()=>{
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
function $c5ccf687772c0422$export$ef03459518577ad4(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}


//# sourceMappingURL=utils.main.js.map
