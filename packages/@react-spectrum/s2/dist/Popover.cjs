require("./Popover.css");
var $914a06b3a1c679bc$exports = require("./Provider.cjs");
var $308b180f49d82d28$exports = require("../icons/runtime.cjs");
var $16fRD$reactjsxruntime = require("react/jsx-runtime");
var $16fRD$reactariacomponents = require("react-aria-components");
var $16fRD$react = require("react");
var $16fRD$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "PopoverBase", () => $493371ef39bf7a55$export$fde1b04c590741a3);
$parcel$export(module.exports, "Popover", () => $493371ef39bf7a55$export$5b6b19405a83ff9d);
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





const $493371ef39bf7a55$var$fadeKeyframes = "-_1llqja1";
const $493371ef39bf7a55$var$slideUpKeyframes = "-xohm13";
const $493371ef39bf7a55$var$slideDownKeyframes = "-_2hjlm";
const $493371ef39bf7a55$var$slideRightKeyframes = "-_1s1guk8";
const $493371ef39bf7a55$var$slideLeftKeyframes = "-_1dp80kl";
let $493371ef39bf7a55$var$popover = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    let $r = false;
    for (let p of matches){
        if (/^\s*l/.test(p)) $l = true;
        if (/^\s*r/.test(p)) $r = true;
    }
    if (props.colorScheme === "dark") rules += ' _Ab';
    else if (props.colorScheme === "light") rules += ' _Aa';
    else if (props.colorScheme === "light dark") rules += ' _Ac';
    else rules += ' _A-10jn6wd';
    rules += ' -_1de2x0q_b-______k';
    rules += ' b-1de2x0q';
    rules += ' _vd';
    rules += ' _wd';
    rules += ' _xd';
    rules += ' _yd';
    if (props.isArrowShown) rules += ' _ub';
    if (props.isArrowShown) rules += ' _td';
    else rules += ' _tb';
    rules += ' wa';
    rules += ' ub';
    rules += ' vb';
    rules += ' sb';
    rules += ' tb';
    rules += ' ca_____v';
    rules += ' ch';
    if (!$l) {
        if (props.size === "L") rules += ' l_________G';
        else if (props.size === "M") rules += ' l______6';
        else if (props.size === "S") rules += ' l_____O';
    }
    if (!$r) rules += ' r-rtptky';
    rules += ' __na';
    if (props.placement === "top") {
        if (props.isArrowShown) rules += ' QG';
    } else if (props.placement === "bottom") {
        if (props.isArrowShown) rules += ' Qd';
    }
    if (props.placement === "right") {
        if (props.isArrowShown) rules += ' Pd';
    } else if (props.placement === "left") {
        if (props.isArrowShown) rules += ' PG';
    }
    if (props.isSubmenu) {
        if (props.isExiting) rules += ' _S-1nys8p3';
        else if (props.isEntering) rules += ' _S-1nys8p3';
    } else if (props.placement === "right") {
        if (props.isExiting) rules += ' _S-tlelkz';
        else if (props.isEntering) rules += ' _S-tlelkz';
    } else if (props.placement === "left") {
        if (props.isExiting) rules += ' _S-1hbwyb';
        else if (props.isEntering) rules += ' _S-1hbwyb';
    } else if (props.placement === "bottom") {
        if (props.isExiting) rules += ' _S-crq4zk';
        else if (props.isEntering) rules += ' _S-crq4zk';
    } else if (props.placement === "top") {
        if (props.isExiting) rules += ' _S-17xx2vw';
        else if (props.isEntering) rules += ' _S-17xx2vw';
    }
    if (props.isExiting) rules += ' _T-375xx3';
    else if (props.isEntering) rules += ' _T-375xx3';
    if (props.isExiting) rules += ' _Yc';
    if (props.isExiting) rules += ' _Vb';
    else if (props.isEntering) rules += ' _Va';
    rules += ' _O-19n1ox2';
    rules += ' _Q-375x7f';
    rules += ' _Ra';
    rules += ' __P-19n1ox2';
    rules += ' __Fa';
    if (props.isExiting) rules += ' __Ba';
    return rules;
};
// TODO: animations and real Popover Arrow
let $493371ef39bf7a55$var$arrow = function anonymous(props) {
    let rules = " .";
    rules += ' _Za';
    rules += ' e-1de2x0q';
    if (props.placement === "right") rules += ' R-3hn0u';
    else if (props.placement === "left") rules += ' R-375ty3';
    else if (props.placement === "bottom") rules += ' R-375xa6';
    else if (props.placement === "top") rules += ' R-3t1x';
    else rules += ' R-375xa6';
    if (props.placement === "right") rules += ' Pc';
    else if (props.placement === "left") rules += ' PF';
    rules += ' xb';
    rules += ' fa_____x';
    rules += ' fj';
    return rules;
};
const $493371ef39bf7a55$export$fde1b04c590741a3 = /*#__PURE__*/ (0, $16fRD$react.forwardRef)(function PopoverBase(props, ref) {
    let { hideArrow: hideArrow = false, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles, size: size } = props;
    let domRef = (0, $16fRD$reactspectrumutils.useDOMRef)(ref);
    let colorScheme = (0, $16fRD$react.useContext)((0, $914a06b3a1c679bc$exports.ColorSchemeContext));
    let { locale: locale, direction: direction } = (0, $16fRD$reactariacomponents.useLocale)();
    // TODO: should we pass through lang and dir props in RAC?
    let popoverRef = (0, $16fRD$react.useCallback)((el)=>{
        domRef.current = el;
        if (el) {
            el.lang = locale;
            el.dir = direction;
        }
    }, [
        locale,
        direction,
        domRef
    ]);
    // On small devices, show a modal (or eventually a tray) instead of a popover.
    // TODO: reverted this until we have trays.
    // let isMobile = useIsMobileDevice();
    // if (isMobile && process.env.NODE_ENV !== 'test') {
    //   let mappedChildren = typeof children === 'function'
    //     ? (renderProps: ModalRenderProps) => children({...renderProps, defaultChildren: null, trigger, placement: 'bottom'})
    //     : children;
    //   return (
    //     <Modal size={size} isDismissable>
    //       {composeRenderProps(mappedChildren, (children, {state}) => (
    //         <>
    //           {children}
    //           {/* Add additional dismiss button at the end to match popovers. */}
    //           <DismissButton onDismiss={state.close} />
    //         </>
    //       ))}
    //     </Modal>
    //   );
    // }
    // TODO: this still isn't the final popover 'tip', copying various ones out of the designs files yields different results
    // containerPadding not working as expected
    return /*#__PURE__*/ (0, $16fRD$reactjsxruntime.jsx)((0, $16fRD$reactariacomponents.Popover), {
        ...props,
        ref: popoverRef,
        style: {
            ...UNSAFE_style,
            // Override default z-index from useOverlayPosition. We use isolation: isolate instead.
            zIndex: undefined
        },
        className: (renderProps)=>UNSAFE_className + (0, $308b180f49d82d28$exports.mergeStyles)($493371ef39bf7a55$var$popover({
                ...renderProps,
                size: size,
                isArrowShown: !hideArrow,
                colorScheme: colorScheme,
                isSubmenu: renderProps.trigger === 'SubmenuTrigger'
            }), styles),
        children: (0, $16fRD$reactariacomponents.composeRenderProps)(props.children, (children, renderProps)=>/*#__PURE__*/ (0, $16fRD$reactjsxruntime.jsxs)((0, $16fRD$reactjsxruntime.Fragment), {
                children: [
                    !hideArrow && /*#__PURE__*/ (0, $16fRD$reactjsxruntime.jsx)((0, $16fRD$reactariacomponents.OverlayArrow), {
                        children: /*#__PURE__*/ (0, $16fRD$reactjsxruntime.jsx)("svg", {
                            width: 18,
                            height: 9,
                            viewBox: "0 0 18 10",
                            className: $493371ef39bf7a55$var$arrow(renderProps),
                            children: /*#__PURE__*/ (0, $16fRD$reactjsxruntime.jsx)("path", {
                                transform: "translate(0 -1)",
                                d: "M1 1L7.93799 8.52588C8.07224 8.67448 8.23607 8.79362 8.41895 8.87524C8.60182 8.95687 8.79973 8.9993 9 9C9.19984 8.99882 9.39724 8.95606 9.57959 8.87427C9.76193 8.79248 9.9253 8.67336 10.0591 8.5249L17 1"
                            })
                        })
                    }),
                    children
                ]
            }))
    });
});
const $493371ef39bf7a55$var$dialogStyle = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $l = false;
    let $k = false;
    let $r = false;
    let $p = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*l/.test(p)) $l = true;
        if (/^\s*k/.test(p)) $k = true;
        if (/^\s*r/.test(p)) $r = true;
        if (/^\s*p/.test(p)) $p = true;
    }
    rules += ' Ed';
    rules += ' Fd';
    rules += ' Cd';
    rules += ' Dd';
    rules += ' __na';
    rules += ' _La';
    rules += ' _v-17zqamw';
    rules += ' _w-17zqamw';
    rules += ' _x-17zqamw';
    rules += ' _y-17zqamw';
    rules += ' __va';
    rules += ' __wa';
    if (!$U) rules += ' Uc';
    if (!$l) rules += ' lb';
    if (!$k) rules += ' kb';
    if (!$r) rules += ' r-17zqamw';
    if (!$p) rules += ' p-17zqamw';
    return rules;
};
const $493371ef39bf7a55$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, $16fRD$react.forwardRef)(function Popover(props, ref) {
    let domRef = (0, $16fRD$reactspectrumutils.useDOMRef)(ref);
    return /*#__PURE__*/ (0, $16fRD$reactjsxruntime.jsx)($493371ef39bf7a55$export$fde1b04c590741a3, {
        size: props.size,
        hideArrow: props.hideArrow,
        placement: props.placement,
        shouldFlip: props.shouldFlip,
        containerPadding: props.containerPadding,
        offset: props.offset,
        crossOffset: props.crossOffset,
        children: /*#__PURE__*/ (0, $16fRD$reactjsxruntime.jsx)((0, $16fRD$reactariacomponents.Dialog), {
            ...props,
            ref: domRef,
            style: props.UNSAFE_style,
            className: (props.UNSAFE_className || '') + $493371ef39bf7a55$var$dialogStyle(null, props.styles),
            children: (0, $16fRD$reactariacomponents.composeRenderProps)(props.children, (children)=>// Reset OverlayTriggerStateContext so the buttons inside the dialog don't retain their hover state.
                /*#__PURE__*/ (0, $16fRD$reactjsxruntime.jsx)((0, $16fRD$reactariacomponents.OverlayTriggerStateContext).Provider, {
                    value: null,
                    children: children
                }))
        })
    });
});


//# sourceMappingURL=Popover.cjs.map
