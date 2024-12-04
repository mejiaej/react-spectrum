import "./CustomDialog.css";
import {Modal as $c46d159bd615e407$export$2b77a92f1a5ad772} from "./Modal.mjs";
import {jsx as $4wOFe$jsx} from "react/jsx-runtime";
import {Dialog as $4wOFe$Dialog, composeRenderProps as $4wOFe$composeRenderProps, OverlayTriggerStateContext as $4wOFe$OverlayTriggerStateContext} from "react-aria-components";
import {forwardRef as $4wOFe$forwardRef} from "react";
import {useDOMRef as $4wOFe$useDOMRef} from "@react-spectrum/utils";

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




const $6e8e8fdd66697ef1$var$dialogStyle = function anonymous(props, overrides) {
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
    if (props.padding === "none") rules += ' Ea';
    else if (props.padding === "default") {
        rules += ' Ecj';
        rules += ' Eh';
    }
    if (props.padding === "none") rules += ' Fa';
    else if (props.padding === "default") {
        rules += ' Fcj';
        rules += ' Fh';
    }
    if (props.padding === "none") rules += ' Ca';
    else if (props.padding === "default") {
        rules += ' Ccj';
        rules += ' Ch';
    }
    if (props.padding === "none") rules += ' Da';
    else if (props.padding === "default") {
        rules += ' Dcj';
        rules += ' Dh';
    }
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
const $6e8e8fdd66697ef1$export$82e1fa7406db6ec = /*#__PURE__*/ (0, $4wOFe$forwardRef)(function CustomDialog(props, ref) {
    let { size: size, isDismissible: isDismissible, isKeyboardDismissDisabled: isKeyboardDismissDisabled, padding: padding = 'default' } = props;
    let domRef = (0, $4wOFe$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $4wOFe$jsx)((0, $c46d159bd615e407$export$2b77a92f1a5ad772), {
        size: size,
        isDismissable: isDismissible,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        children: /*#__PURE__*/ (0, $4wOFe$jsx)((0, $4wOFe$Dialog), {
            ...props,
            ref: domRef,
            style: props.UNSAFE_style,
            className: (props.UNSAFE_className || '') + $6e8e8fdd66697ef1$var$dialogStyle({
                padding: padding
            }, props.styles),
            children: (0, $4wOFe$composeRenderProps)(props.children, (children)=>// Reset OverlayTriggerStateContext so the buttons inside the dialog don't retain their hover state.
                /*#__PURE__*/ (0, $4wOFe$jsx)((0, $4wOFe$OverlayTriggerStateContext).Provider, {
                    value: null,
                    children: children
                }))
        })
    });
});


export {$6e8e8fdd66697ef1$export$82e1fa7406db6ec as CustomDialog};
//# sourceMappingURL=CustomDialog.mjs.map
