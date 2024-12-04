import "./ClearButton.css";
import $bd983341bd35d639$export$2e2bcd8739ae039 from "./Cross.mjs";
import {jsx as $9qqo3$jsx} from "react/jsx-runtime";
import {Button as $9qqo3$Button} from "react-aria-components";
import {forwardRef as $9qqo3$forwardRef} from "react";
import {useFocusableRef as $9qqo3$useFocusableRef} from "@react-spectrum/utils";

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




const $f6a62e6e68437458$export$13ec83e50bf04290 = /*#__PURE__*/ (0, $9qqo3$forwardRef)(function ClearButton(props, ref) {
    let domRef = (0, $9qqo3$useFocusableRef)(ref);
    return /*#__PURE__*/ (0, $9qqo3$jsx)((0, $9qqo3$Button), {
        ...props,
        ref: domRef,
        className: (renderProps)=>(function anonymous(props) {
                let rules = " .";
                rules += ' _Zd';
                rules += ' _1c';
                rules += ' _2d';
                rules += ' kb';
                if (props.size === "XL") rules += ' lj';
                else if (props.size === "L") rules += ' li';
                else if (props.size === "S") rules += ' lh';
                else if (props.size === "XS") rules += ' lg';
                else rules += ' lf';
                rules += ' _8-3t1x';
                rules += ' wf';
                rules += ' _La';
                rules += ' ba';
                rules += ' Ea';
                rules += ' Fa';
                rules += ' Ca';
                rules += ' Da';
                rules += ' a-17zqamw';
                rules += ' -rwx0fg_e-b';
                return rules;
            })({
                ...renderProps,
                size: props.size || 'M'
            }),
        children: /*#__PURE__*/ (0, $9qqo3$jsx)((0, $bd983341bd35d639$export$2e2bcd8739ae039), {
            size: props.size || 'M'
        })
    });
});


export {$f6a62e6e68437458$export$13ec83e50bf04290 as ClearButton};
//# sourceMappingURL=ClearButton.mjs.map
