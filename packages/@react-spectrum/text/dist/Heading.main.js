var $eaZlr$reactariautils = require("@react-aria/utils");
var $eaZlr$reactariacomponents = require("react-aria-components");
var $eaZlr$react = require("react");
var $eaZlr$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Heading", () => $c7c750c966e80a46$export$a8a3e93435678ff9);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $c7c750c966e80a46$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, $eaZlr$react.forwardRef)(function Heading(props, ref) {
    let domRef = (0, $eaZlr$reactspectrumutils.useDOMRef)(ref);
    props = (0, $eaZlr$reactspectrumutils.useSlotProps)(props, 'heading');
    [props, domRef] = (0, $eaZlr$reactariacomponents.useContextProps)(props, domRef, (0, $eaZlr$reactariacomponents.HeadingContext));
    let { children: children, level: level = 3, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $eaZlr$reactspectrumutils.useStyleProps)(otherProps);
    let HeadingTag = `h${level}`;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($eaZlr$react))).createElement(HeadingTag, {
        ...(0, $eaZlr$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef
    }, children);
});


//# sourceMappingURL=Heading.main.js.map
