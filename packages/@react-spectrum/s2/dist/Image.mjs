import "./Image.css";
import {DefaultImageGroup as $4b5e069e9e001e8b$export$a37e899304e5fef0} from "./ImageCoordinator.mjs";
import {loadingStyle as $5ad421ec19460c48$export$d2353276f167b21f, useIsSkeleton as $5ad421ec19460c48$export$4f8dc7555740235c, useLoadingAnimation as $5ad421ec19460c48$export$6b288fe07640c94c} from "../icons/Skeleton.mjs";
import {mergeStyles as $feb886035e0d4633$export$e618dc39ac9ad607} from "../icons/runtime.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsxs as $5AH9h$jsxs, jsx as $5AH9h$jsx} from "react/jsx-runtime";
import {createContext as $5AH9h$createContext, forwardRef as $5AH9h$forwardRef, useContext as $5AH9h$useContext, useReducer as $5AH9h$useReducer, useRef as $5AH9h$useRef, useCallback as $5AH9h$useCallback, useMemo as $5AH9h$useMemo} from "react";
import {useLayoutEffect as $5AH9h$useLayoutEffect} from "@react-aria/utils";








const $dbd6f0b2503b938c$export$8151eb379fcf2442 = /*#__PURE__*/ (0, $5AH9h$createContext)(null);
function $dbd6f0b2503b938c$var$createState(src) {
    return {
        state: 'loading',
        src: src,
        startTime: Date.now(),
        loadTime: 0
    };
}
function $dbd6f0b2503b938c$var$reducer(state, action) {
    switch(action.type){
        case 'update':
            return {
                state: 'loading',
                src: action.src,
                startTime: Date.now(),
                loadTime: 0
            };
        case 'loaded':
        case 'error':
            return {
                ...state,
                state: action.type
            };
        case 'revealed':
            return {
                ...state,
                state: 'revealed',
                loadTime: Date.now() - state.startTime
            };
        default:
            return state;
    }
}
const $dbd6f0b2503b938c$var$wrapperStyles = " . bg __vb __wb";
const $dbd6f0b2503b938c$var$imgStyles = function anonymous(props) {
    let rules = " .";
    rules += ' _Za';
    rules += ' lb';
    rules += ' kb';
    rules += ' __N-17zqamw';
    rules += ' __O-17zqamw';
    if (props.isRevealed) rules += ' _K-3t1y';
    else rules += ' _K-3t1x';
    if (props.isTransitioning) rules += ' _Oc';
    else rules += ' _Og';
    rules += ' _Q-3760fu';
    if (props.isTransitioning) rules += ' _Ra';
    else rules += ' _Ra';
    return rules;
};
const $dbd6f0b2503b938c$export$3e431a229df88919 = /*#__PURE__*/ (0, $5AH9h$forwardRef)(function Image(props, domRef) {
    [props, domRef] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, domRef, $dbd6f0b2503b938c$export$8151eb379fcf2442);
    let { src: src = '', styles: styles, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, renderError: renderError, group: group = (0, $4b5e069e9e001e8b$export$a37e899304e5fef0), alt: // TODO
    // srcSet,
    // sizes,
    alt, crossOrigin: crossOrigin, decoding: decoding, loading: loading, referrerPolicy: referrerPolicy, slot: slot } = props;
    let hidden = props.hidden;
    let { revealAll: revealAll, register: register, unregister: unregister, load: load } = (0, $5AH9h$useContext)(group);
    let [{ state: state, src: lastSrc, loadTime: loadTime }, dispatch] = (0, $5AH9h$useReducer)($dbd6f0b2503b938c$var$reducer, src, $dbd6f0b2503b938c$var$createState);
    if (src !== lastSrc && !hidden) dispatch({
        type: 'update',
        src: src
    });
    if (state === 'loaded' && revealAll && !hidden) dispatch({
        type: 'revealed'
    });
    let imgRef = (0, $5AH9h$useRef)(null);
    (0, $5AH9h$useLayoutEffect)(()=>{
        if (hidden) return;
        register(src);
        return ()=>{
            unregister(src);
        };
    }, [
        hidden,
        register,
        unregister,
        src
    ]);
    let onLoad = (0, $5AH9h$useCallback)(()=>{
        load(src);
        dispatch({
            type: 'loaded'
        });
    }, [
        load,
        src
    ]);
    let onError = (0, $5AH9h$useCallback)(()=>{
        dispatch({
            type: 'error'
        });
        unregister(src);
    }, [
        unregister,
        src
    ]);
    let isSkeleton = (0, $5ad421ec19460c48$export$4f8dc7555740235c)();
    let isAnimating = isSkeleton || state === 'loading' || state === 'loaded';
    let animation = (0, $5ad421ec19460c48$export$6b288fe07640c94c)(isAnimating);
    (0, $5AH9h$useLayoutEffect)(()=>{
        if (hidden) return;
        // If the image is already loaded, update state immediately instead of waiting for onLoad.
        if (state === 'loading' && imgRef.current?.complete) // Queue a microtask so we don't hit React's update limit.
        // TODO: is this necessary?
        queueMicrotask(onLoad);
        animation(domRef.current);
    });
    if (props.alt == null) console.warn('The `alt` prop was not provided to an image. Add `alt` text for screen readers, or set `alt=""` prop to indicate that the image is decorative or redundant with displayed text and should not be announced by screen readers.');
    let errorState = !isSkeleton && state === 'error' && renderError?.();
    let isRevealed = state === 'revealed' && !isSkeleton;
    let isTransitioning = isRevealed && loadTime > 200;
    return (0, $5AH9h$useMemo)(()=>hidden ? null : /*#__PURE__*/ (0, $5AH9h$jsxs)("div", {
            ref: domRef,
            slot: slot || undefined,
            style: UNSAFE_style,
            className: UNSAFE_className + (0, $feb886035e0d4633$export$e618dc39ac9ad607)($dbd6f0b2503b938c$var$wrapperStyles, styles) + ' ' + (isAnimating ? (0, $5ad421ec19460c48$export$d2353276f167b21f) : ''),
            children: [
                errorState,
                !errorState && /*#__PURE__*/ (0, $5AH9h$jsx)("img", {
                    src: src,
                    alt: alt,
                    crossOrigin: crossOrigin,
                    decoding: decoding,
                    loading: loading,
                    referrerPolicy: referrerPolicy,
                    ref: imgRef,
                    onLoad: onLoad,
                    onError: onError,
                    className: $dbd6f0b2503b938c$var$imgStyles({
                        isRevealed: isRevealed,
                        isTransitioning: isTransitioning
                    })
                })
            ]
        }), [
        slot,
        hidden,
        domRef,
        UNSAFE_style,
        UNSAFE_className,
        styles,
        isAnimating,
        errorState,
        src,
        alt,
        crossOrigin,
        decoding,
        loading,
        referrerPolicy,
        onLoad,
        onError,
        isRevealed,
        isTransitioning
    ]);
});


export {$dbd6f0b2503b938c$export$8151eb379fcf2442 as ImageContext, $dbd6f0b2503b938c$export$3e431a229df88919 as Image};
//# sourceMappingURL=Image.mjs.map
