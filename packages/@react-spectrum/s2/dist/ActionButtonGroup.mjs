import "./ActionButtonGroup.css";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsx as $aTsYn$jsx} from "react/jsx-runtime";
import {Toolbar as $aTsYn$Toolbar} from "react-aria-components";
import {createContext as $aTsYn$createContext, forwardRef as $aTsYn$forwardRef} from "react";

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



const $10401bdc118cbc90$export$641cbcd1f6f6802f = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    rules += ' _Zd';
    if (props.orientation === "vertical") rules += ' _6b';
    else if (props.orientation === "horizontal") rules += ' _6a';
    if (props.density === "regular") {
        if (props.size === "XL") rules += ' id';
        else if (props.size === "L") rules += ' id';
        else if (props.size === "M") rules += ' id';
        else if (props.size === "S") rules += ' ic';
        else if (props.size === "XS") rules += ' ic';
    } else if (props.density === "compact") rules += ' ib';
    if (props.density === "regular") {
        if (props.size === "XL") rules += ' jd';
        else if (props.size === "L") rules += ' jd';
        else if (props.size === "M") rules += ' jd';
        else if (props.size === "S") rules += ' jc';
        else if (props.size === "XS") rules += ' jc';
    } else if (props.density === "compact") rules += ' jb';
    return rules;
};
const $10401bdc118cbc90$export$33f5f2f2cb85d743 = /*#__PURE__*/ (0, $aTsYn$createContext)(null);
const $10401bdc118cbc90$export$73d695ae27330056 = /*#__PURE__*/ (0, $aTsYn$forwardRef)(function ActionButtonGroup(props, ref) {
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $10401bdc118cbc90$export$33f5f2f2cb85d743);
    let { density: density = 'regular', size: size = 'M', orientation: orientation = 'horizontal', isJustified: isJustified, children: children, UNSAFE_className: UNSAFE_className = '', UNSAFE_style: UNSAFE_style, styles: styles } = props;
    return /*#__PURE__*/ (0, $aTsYn$jsx)((0, $aTsYn$Toolbar), {
        ...props,
        ref: ref,
        style: UNSAFE_style,
        className: UNSAFE_className + $10401bdc118cbc90$export$641cbcd1f6f6802f({
            size: size,
            density: density,
            orientation: orientation,
            isJustified: isJustified
        }, styles),
        children: /*#__PURE__*/ (0, $aTsYn$jsx)($10401bdc118cbc90$export$33f5f2f2cb85d743.Provider, {
            value: props,
            children: children
        })
    });
});


export {$10401bdc118cbc90$export$641cbcd1f6f6802f as actionGroupStyle, $10401bdc118cbc90$export$33f5f2f2cb85d743 as ActionButtonGroupContext, $10401bdc118cbc90$export$73d695ae27330056 as ActionButtonGroup};
//# sourceMappingURL=ActionButtonGroup.mjs.map
