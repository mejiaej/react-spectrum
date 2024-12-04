require("./Accordion.css");
var $4e301a98f0cc4e4f$exports = require("./Disclosure.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $etdk1$reactjsxruntime = require("react/jsx-runtime");
var $etdk1$reactariacomponents = require("react-aria-components");
var $etdk1$react = require("react");
var $etdk1$reactspectrumutils = require("@react-spectrum/utils");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "AccordionContext", () => $152a25dfd79f123a$export$6bd5bb82c987ab74);
$parcel$export(module.exports, "Accordion", () => $152a25dfd79f123a$export$a766cd26d0d69044);
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





const $152a25dfd79f123a$var$accordion = function anonymous(props, overrides) {
    let rules = " .";
    let matches = (overrides || '').match(/(?:^|\s)(?:y|z|A|B|_9|_8|h|_5|_4|__A|__c|__d|__a|__b|U|__Q|X|Z|V|W|l|q|r|k|o|p)[^\s]+/g) || [];
    rules += matches.join('');
    rules += ' _Zd';
    rules += ' _6b';
    return rules;
};
const $152a25dfd79f123a$export$6bd5bb82c987ab74 = /*#__PURE__*/ (0, $etdk1$react.createContext)(null);
const $152a25dfd79f123a$export$a766cd26d0d69044 = /*#__PURE__*/ (0, $etdk1$react.forwardRef)(function Accordion(props, ref) {
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $152a25dfd79f123a$export$6bd5bb82c987ab74);
    let domRef = (0, $etdk1$reactspectrumutils.useDOMRef)(ref);
    let { UNSAFE_style: UNSAFE_style, UNSAFE_className: UNSAFE_className = '', size: size = 'M', density: density = 'regular', isQuiet: isQuiet } = props;
    return /*#__PURE__*/ (0, $etdk1$reactjsxruntime.jsx)((0, $4e301a98f0cc4e4f$exports.DisclosureContext).Provider, {
        value: {
            size: size,
            isQuiet: isQuiet,
            density: density
        },
        children: /*#__PURE__*/ (0, $etdk1$reactjsxruntime.jsx)((0, $etdk1$reactariacomponents.DisclosureGroup), {
            ...props,
            ref: domRef,
            style: UNSAFE_style,
            className: (UNSAFE_className ?? '') + $152a25dfd79f123a$var$accordion(null, props.styles),
            children: props.children
        })
    });
});


//# sourceMappingURL=Accordion.cjs.map
