import "./Divider.css";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $5nGzy$jsx} from "react/jsx-runtime";
import {Separator as $5nGzy$Separator} from "react-aria-components";
import {createContext as $5nGzy$createContext, forwardRef as $5nGzy$forwardRef} from "react";
import {useDOMRef as $5nGzy$useDOMRef} from "@react-spectrum/utils";

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




const $bdf52657dac0f070$export$30fbfd376abdf190 = /*#__PURE__*/ (0, $5nGzy$createContext)(null);
const $bdf52657dac0f070$export$e8c9778bf415dd08 = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r)[^\s]+/g) || [];
    rules += matches.join('');
    let $_4 = false;
    let $A = false;
    let $B = false;
    let $y = false;
    let $z = false;
    let $l = false;
    for (let p of matches){
        if (/^\s*_4/.test(p)) $_4 = true;
        if (/^\s*A/.test(p)) $A = true;
        if (/^\s*B/.test(p)) $B = true;
        if (/^\s*y/.test(p)) $y = true;
        if (/^\s*z/.test(p)) $z = true;
        if (/^\s*l/.test(p)) $l = true;
    }
    if (!$_4) rules += ' _4e';
    rules += ' ba_____v';
    if (props.staticColor === "black") {
        if (props.size === "L") rules += ' b_____r';
        else rules += ' b_____l';
    } else if (props.staticColor === "white") {
        if (props.size === "L") rules += ' b_____e';
        else rules += ' b____8';
    } else if (props.size === "L") rules += ' bn';
    else rules += ' bh';
    rules += ' wf';
    rules += ' _vf';
    rules += ' _wf';
    rules += ' _xf';
    rules += ' _yf';
    if (!$A) rules += ' Aa';
    if (!$B) rules += ' Ba';
    if (!$y) rules += ' ya';
    if (!$z) rules += ' za';
    if (props.orientation === "horizontal") {
        if (props.size === "L") rules += ' k-3761a9';
        else if (props.size === "S") rules += ' k-375yri';
        else rules += ' k-375zlr';
    }
    if (!$l) {
        if (props.orientation === "vertical") {
            if (props.size === "L") rules += ' l-3761a9';
            else if (props.size === "S") rules += ' l-375yri';
            else rules += ' l-375zlr';
        }
    }
    return rules;
};
const $bdf52657dac0f070$export$2e0a83ec2e27ecbb = /*#__PURE__*/ (0, $5nGzy$forwardRef)(function Divider(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $bdf52657dac0f070$export$30fbfd376abdf190);
    let domRef = (0, $5nGzy$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $5nGzy$jsx)((0, $5nGzy$Separator), {
        ...props,
        ref: domRef,
        style: props.UNSAFE_style,
        className: (props.UNSAFE_className || '') + $bdf52657dac0f070$export$e8c9778bf415dd08({
            size: props.size || 'M',
            orientation: props.orientation || 'horizontal',
            staticColor: props.staticColor
        }, props.styles)
    });
});


export {$bdf52657dac0f070$export$30fbfd376abdf190 as DividerContext, $bdf52657dac0f070$export$e8c9778bf415dd08 as divider, $bdf52657dac0f070$export$2e0a83ec2e27ecbb as Divider};
//# sourceMappingURL=Divider.mjs.map
