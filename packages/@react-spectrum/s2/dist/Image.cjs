require("./Image.css");
var $a4f1585b527b9b7a$exports = require("./ImageCoordinator.cjs");
var $5eb75e0c130e0669$exports = require("../icons/Skeleton.cjs");
var $308b180f49d82d28$exports = require("../icons/runtime.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $kwMay$reactjsxruntime = require("react/jsx-runtime");
var $kwMay$react = require("react");
var $kwMay$reactariautils = require("@react-aria/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ImageContext", () => $053b76ed3d29e13b$export$8151eb379fcf2442);
$parcel$export(module.exports, "Image", () => $053b76ed3d29e13b$export$3e431a229df88919);







const $053b76ed3d29e13b$export$8151eb379fcf2442 = /*#__PURE__*/ (0, $kwMay$react.createContext)(null);
function $053b76ed3d29e13b$var$createState(src) {
    return {
        state: 'loading',
        src: src,
        startTime: Date.now(),
        loadTime: 0
    };
}
function $053b76ed3d29e13b$var$reducer(state, action) {
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
const $053b76ed3d29e13b$var$wrapperStyles = " . bg __vb __wb";
const $053b76ed3d29e13b$var$imgStyles = function anonymous(props) {
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
const $053b76ed3d29e13b$export$3e431a229df88919 = /*#__PURE__*/ (0, $kwMay$react.forwardRef)(function Image(props, domRef) {
    [props, domRef] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, domRef, $053b76ed3d29e13b$export$8151eb379fcf2442);
    let { src: src = '', styles: styles, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, renderError: renderError, group: group = (0, $a4f1585b527b9b7a$exports.DefaultImageGroup), alt: // TODO
    // srcSet,
    // sizes,
    alt, crossOrigin: crossOrigin, decoding: decoding, loading: loading, referrerPolicy: referrerPolicy, slot: slot } = props;
    let hidden = props.hidden;
    let { revealAll: revealAll, register: register, unregister: unregister, load: load } = (0, $kwMay$react.useContext)(group);
    let [{ state: state, src: lastSrc, loadTime: loadTime }, dispatch] = (0, $kwMay$react.useReducer)($053b76ed3d29e13b$var$reducer, src, $053b76ed3d29e13b$var$createState);
    if (src !== lastSrc && !hidden) dispatch({
        type: 'update',
        src: src
    });
    if (state === 'loaded' && revealAll && !hidden) dispatch({
        type: 'revealed'
    });
    let imgRef = (0, $kwMay$react.useRef)(null);
    (0, $kwMay$reactariautils.useLayoutEffect)(()=>{
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
    let onLoad = (0, $kwMay$react.useCallback)(()=>{
        load(src);
        dispatch({
            type: 'loaded'
        });
    }, [
        load,
        src
    ]);
    let onError = (0, $kwMay$react.useCallback)(()=>{
        dispatch({
            type: 'error'
        });
        unregister(src);
    }, [
        unregister,
        src
    ]);
    let isSkeleton = (0, $5eb75e0c130e0669$exports.useIsSkeleton)();
    let isAnimating = isSkeleton || state === 'loading' || state === 'loaded';
    let animation = (0, $5eb75e0c130e0669$exports.useLoadingAnimation)(isAnimating);
    (0, $kwMay$reactariautils.useLayoutEffect)(()=>{
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
    return (0, $kwMay$react.useMemo)(()=>hidden ? null : /*#__PURE__*/ (0, $kwMay$reactjsxruntime.jsxs)("div", {
            ref: domRef,
            slot: slot || undefined,
            style: UNSAFE_style,
            className: UNSAFE_className + (0, $308b180f49d82d28$exports.mergeStyles)($053b76ed3d29e13b$var$wrapperStyles, styles) + ' ' + (isAnimating ? (0, $5eb75e0c130e0669$exports.loadingStyle) : ''),
            children: [
                errorState,
                !errorState && /*#__PURE__*/ (0, $kwMay$reactjsxruntime.jsx)("img", {
                    src: src,
                    alt: alt,
                    crossOrigin: crossOrigin,
                    decoding: decoding,
                    loading: loading,
                    referrerPolicy: referrerPolicy,
                    ref: imgRef,
                    onLoad: onLoad,
                    onError: onError,
                    className: $053b76ed3d29e13b$var$imgStyles({
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


//# sourceMappingURL=Image.cjs.map
