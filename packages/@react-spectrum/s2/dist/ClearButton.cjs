require("./ClearButton.css");
var $89dd175101ffc43a$exports = require("./Cross.cjs");
var $ae1Ho$reactjsxruntime = require("react/jsx-runtime");
var $ae1Ho$reactariacomponents = require("react-aria-components");
var $ae1Ho$react = require("react");
var $ae1Ho$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ClearButton", () => $4fb579ecc195bd2b$export$13ec83e50bf04290);
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




const $4fb579ecc195bd2b$export$13ec83e50bf04290 = /*#__PURE__*/ (0, $ae1Ho$react.forwardRef)(function ClearButton(props, ref) {
    let domRef = (0, $ae1Ho$reactspectrumutils.useFocusableRef)(ref);
    return /*#__PURE__*/ (0, $ae1Ho$reactjsxruntime.jsx)((0, $ae1Ho$reactariacomponents.Button), {
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
        children: /*#__PURE__*/ (0, $ae1Ho$reactjsxruntime.jsx)((0, $89dd175101ffc43a$exports.default), {
            size: props.size || 'M'
        })
    });
});


//# sourceMappingURL=ClearButton.cjs.map
