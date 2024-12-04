require("./vars.e377bd1e.css");
var $7fdcb1fd1927dca1$exports = require("./rule_vars_css.main.js");
var $40sll$reactspectrumutils = require("@react-spectrum/utils");
var $40sll$react = require("react");
var $40sll$reactariaseparator = require("@react-aria/separator");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Divider", () => $a75f934b8a5939c6$export$2e0a83ec2e27ecbb);
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



let $a75f934b8a5939c6$var$sizeMap = {
    S: 'small',
    M: 'medium',
    L: 'large'
};
const $a75f934b8a5939c6$export$2e0a83ec2e27ecbb = /*#__PURE__*/ (0, ($parcel$interopDefault($40sll$react))).forwardRef(function Divider(props, ref) {
    props = (0, $40sll$reactspectrumutils.useSlotProps)(props, 'divider');
    let { size: size = 'L', orientation: orientation = 'horizontal', ...otherProps } = props;
    let domRef = (0, $40sll$reactspectrumutils.useDOMRef)(ref);
    let { styleProps: styleProps } = (0, $40sll$reactspectrumutils.useStyleProps)(otherProps);
    let weight = $a75f934b8a5939c6$var$sizeMap[size];
    let Element = 'hr';
    if (orientation === 'vertical') Element = 'div';
    let { separatorProps: separatorProps } = (0, $40sll$reactariaseparator.useSeparator)({
        ...props,
        elementType: Element
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($40sll$react))).createElement(Element, {
        ...styleProps,
        className: (0, $40sll$reactspectrumutils.classNames)((0, ($parcel$interopDefault($7fdcb1fd1927dca1$exports))), 'spectrum-Rule', `spectrum-Rule--${weight}`, {
            'spectrum-Rule--vertical': orientation === 'vertical',
            'spectrum-Rule--horizontal': orientation === 'horizontal'
        }, styleProps.className),
        // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28892
        ref: domRef,
        ...separatorProps
    });
});


//# sourceMappingURL=Divider.main.js.map
