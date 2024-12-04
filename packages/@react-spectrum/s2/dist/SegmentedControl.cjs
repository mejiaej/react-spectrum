require("./SegmentedControl.css");
var $e991cbcdf82ced71$exports = require("./CenterBaseline.cjs");
var $bde97c91243ed164$exports = require("../icons/Icon.cjs");
var $2061c83559b50a66$exports = require("./pressScale.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $4JHQR$reactjsxruntime = require("react/jsx-runtime");
var $4JHQR$reactariacomponents = require("react-aria-components");
var $4JHQR$react = require("react");
var $4JHQR$reactspectrumutils = require("@react-spectrum/utils");
var $4JHQR$reactariautils = require("@react-aria/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "SegmentedControlContext", () => $e33225559d5e019f$export$c083c44d8a07dd35);
$parcel$export(module.exports, "SegmentedControl", () => $e33225559d5e019f$export$668709c620d0b8e2);
$parcel$export(module.exports, "SegmentedControlItem", () => $e33225559d5e019f$export$4fc12f2742e8cf3f);
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









const $e33225559d5e019f$export$c083c44d8a07dd35 = /*#__PURE__*/ (0, $4JHQR$react.createContext)(null);
const $e33225559d5e019f$var$segmentedControl = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $l = false;
    for (let p of matches)if (/^\s*l/.test(p)) $l = true;
    rules += ' _Zd';
    rules += ' ic';
    rules += ' jc';
    rules += ' bg';
    rules += ' _vc';
    rules += ' _wc';
    rules += ' _xc';
    rules += ' _yc';
    if (!$l) rules += ' le';
    return rules;
};
const $e33225559d5e019f$var$controlItem = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $U = false;
    let $_9 = false;
    let $h = false;
    let $_8 = false;
    let $q = false;
    for (let p of matches){
        if (/^\s*U/.test(p)) $U = true;
        if (/^\s*_9/.test(p)) $_9 = true;
        if (/^\s*h/.test(p)) $h = true;
        if (/^\s*_8/.test(p)) $_8 = true;
        if (/^\s*q/.test(p)) $q = true;
    }
    if (props.isFocusVisible) rules += ' _Lb';
    else rules += ' _La';
    rules += ' da_____z';
    rules += ' dx';
    rules += ' _Nc';
    rules += ' _M-3t1z';
    if (!$U) rules += ' Uc';
    rules += ' _Zd';
    rules += ' _zb';
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
    if (props.isSelected) rules += ' aa_____A';
    else if (props.isDisabled) rules += ' aa_____B';
    else rules += ' aa_____x';
    if (props.isDisabled) rules += ' aj';
    else if (props.isSelected) {
        if (props.isPressed) rules += ' ao';
        else if (props.isFocusVisible) rules += ' ao';
        else if (props.isHovered) rules += ' ao';
        else rules += ' an';
    } else if (props.isHovered) {
        if (props.isPressed) rules += ' an';
        else if (props.isFocusVisible) rules += ' an';
        else if (props.isHovered) rules += ' an';
        else rules += ' am';
    } else rules += ' am';
    rules += ' C-soocic-6njx2e';
    rules += ' CI';
    rules += ' D-soocic-6njx2e';
    rules += ' DI';
    rules += ' k-375toq';
    rules += ' _1c';
    if (!$_9) {
        if (props.isJustified) rules += ' _9-3t1y';
    }
    if (!$h) {
        if (props.isJustified) rules += ' ha';
    }
    if (!$_8) rules += ' _8-3t1x';
    if (!$q) rules += ' qo';
    rules += ' _2d';
    rules += ' _pb';
    rules += ' __R-yksgrp';
    rules += ' __Da';
    rules += ' ba';
    rules += ' wf';
    rules += ' _vc';
    rules += ' _wc';
    rules += ' _xc';
    rules += ' _yc';
    rules += ' -rwx0fg_e-b';
    rules += ' -_375toq_k-U';
    return rules;
};
const $e33225559d5e019f$var$slider = function anonymous(props) {
    let rules = " .";
    if (props.isDisabled) rules += ' ba_____B';
    else rules += ' ba_____z';
    rules += ' bd';
    rules += ' Ya';
    rules += ' lb';
    rules += ' kb';
    rules += ' Ua';
    rules += ' __na';
    rules += ' wa';
    rules += ' uc';
    rules += ' vc';
    rules += ' sc';
    rules += ' tc';
    if (props.isDisabled) rules += ' ca_____B';
    else rules += ' ca_____z';
    if (props.isDisabled) rules += ' ci';
    else rules += ' co';
    rules += ' _vd';
    rules += ' _wd';
    rules += ' _xd';
    rules += ' _yd';
    return rules;
};
const $e33225559d5e019f$var$InternalSegmentedControlContext = /*#__PURE__*/ (0, $4JHQR$react.createContext)({});
const $e33225559d5e019f$export$668709c620d0b8e2 = /*#__PURE__*/ (0, $4JHQR$react.forwardRef)(function SegmentedControl(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $e33225559d5e019f$export$c083c44d8a07dd35);
    let { defaultSelectedKey: defaultSelectedKey, selectedKey: selectedKey, onSelectionChange: onSelectionChange } = props;
    let domRef = (0, $4JHQR$reactspectrumutils.useDOMRef)(ref);
    let prevRef = (0, $4JHQR$react.useRef)(null);
    let currentSelectedRef = (0, $4JHQR$react.useRef)(null);
    let onChange = (values)=>{
        if (currentSelectedRef.current) prevRef.current = currentSelectedRef?.current.getBoundingClientRect();
        if (onSelectionChange) onSelectionChange(values.values().next().value);
    };
    return /*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsx)((0, $4JHQR$reactariacomponents.ToggleButtonGroup), {
        ...props,
        selectedKeys: selectedKey != null ? [
            selectedKey
        ] : undefined,
        defaultSelectedKeys: defaultSelectedKey != null ? [
            defaultSelectedKey
        ] : undefined,
        disallowEmptySelection: true,
        ref: domRef,
        orientation: "horizontal",
        style: props.UNSAFE_style,
        onSelectionChange: onChange,
        className: (props.UNSAFE_className || '') + $e33225559d5e019f$var$segmentedControl(null, props.styles),
        "aria-label": props['aria-label'],
        children: /*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsx)($e33225559d5e019f$var$DefaultSelectionTracker, {
            defaultValue: defaultSelectedKey,
            value: selectedKey,
            prevRef: prevRef,
            currentSelectedRef: currentSelectedRef,
            isJustified: props.isJustified,
            children: props.children
        })
    });
});
function $e33225559d5e019f$var$DefaultSelectionTracker(props) {
    let state = (0, $4JHQR$react.useContext)((0, $4JHQR$reactariacomponents.ToggleGroupStateContext));
    let isRegistered = (0, $4JHQR$react.useRef)(!(props.defaultValue == null && props.value == null));
    // default select the first available item
    let register = (0, $4JHQR$react.useCallback)((value)=>{
        if (state && !isRegistered.current) {
            isRegistered.current = true;
            state.toggleKey(value);
        }
    }, []);
    return /*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsx)((0, $4JHQR$reactariacomponents.Provider), {
        values: [
            [
                $e33225559d5e019f$var$InternalSegmentedControlContext,
                {
                    register: register,
                    prevRef: props.prevRef,
                    currentSelectedRef: props.currentSelectedRef,
                    isJustified: props.isJustified
                }
            ]
        ],
        children: props.children
    });
}
const $e33225559d5e019f$export$4fc12f2742e8cf3f = /*#__PURE__*/ (0, $4JHQR$react.forwardRef)(function SegmentedControlItem(props, ref) {
    let domRef = (0, $4JHQR$reactspectrumutils.useFocusableRef)(ref);
    let divRef = (0, $4JHQR$react.useRef)(null);
    let { register: register, prevRef: prevRef, currentSelectedRef: currentSelectedRef, isJustified: isJustified } = (0, $4JHQR$react.useContext)($e33225559d5e019f$var$InternalSegmentedControlContext);
    let state = (0, $4JHQR$react.useContext)((0, $4JHQR$reactariacomponents.ToggleGroupStateContext));
    let isSelected = state?.selectedKeys.has(props.id);
    // do not apply animation if a user has the prefers-reduced-motion setting
    let isReduced = false;
    if (window?.matchMedia) isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    (0, $4JHQR$reactariautils.useLayoutEffect)(()=>{
        register?.(props.id);
    }, []);
    (0, $4JHQR$reactariautils.useLayoutEffect)(()=>{
        if (isSelected && prevRef?.current && currentSelectedRef?.current && !isReduced) {
            let currentItem = currentSelectedRef?.current.getBoundingClientRect();
            let deltaX = prevRef?.current.left - currentItem?.left;
            currentSelectedRef.current.animate([
                {
                    transform: `translateX(${deltaX}px)`,
                    width: `${prevRef?.current.width}px`
                },
                {
                    transform: 'translateX(0px)',
                    width: `${currentItem.width}px`
                }
            ], {
                duration: 200,
                easing: 'ease-out'
            });
            prevRef.current = null;
        }
    }, [
        isSelected
    ]);
    return /*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsx)((0, $4JHQR$reactariacomponents.ToggleButton), {
        ...props,
        ref: domRef,
        style: props.UNSAFE_style,
        className: (renderProps)=>(props.UNSAFE_className || '') + $e33225559d5e019f$var$controlItem({
                ...renderProps,
                isJustified: isJustified
            }, props.styles),
        children: ({ isSelected: isSelected, isPressed: isPressed, isDisabled: isDisabled })=>/*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsxs)((0, $4JHQR$reactjsxruntime.Fragment), {
                children: [
                    isSelected && /*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsx)("div", {
                        className: $e33225559d5e019f$var$slider({
                            isDisabled: isDisabled
                        }),
                        ref: currentSelectedRef
                    }),
                    /*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsx)((0, $4JHQR$reactariacomponents.Provider), {
                        values: [
                            [
                                (0, $bde97c91243ed164$exports.IconContext),
                                {
                                    render: (0, $e991cbcdf82ced71$exports.centerBaseline)({
                                        slot: 'icon',
                                        styles: " . __A-3t1x _8-3t1x"
                                    })
                                }
                            ],
                            [
                                (0, $4JHQR$reactariacomponents.TextContext),
                                {
                                    slots: {
                                        [(0, $4JHQR$reactariacomponents.DEFAULT_SLOT)]: {}
                                    }
                                }
                            ],
                            [
                                (0, $6367bc87eb7d24ad$exports.TextContext),
                                {
                                    styles: " . __A-3t1y __vb __wb _ma _pb"
                                }
                            ]
                        ],
                        children: /*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsx)("div", {
                            ref: divRef,
                            style: (0, $2061c83559b50a66$exports.pressScale)(divRef)({
                                isPressed: isPressed
                            }),
                            className: " . _Zd iG ibH jG jbH _Oa _Q-375x7f _Ra _1c qo",
                            children: typeof props.children === 'string' ? /*#__PURE__*/ (0, $4JHQR$reactjsxruntime.jsx)((0, $6367bc87eb7d24ad$exports.Text), {
                                children: props.children
                            }) : props.children
                        })
                    })
                ]
            })
    });
});


//# sourceMappingURL=SegmentedControl.cjs.map
