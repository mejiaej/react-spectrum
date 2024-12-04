var $338e657e2a59c652$exports = require("./intlStrings.main.js");
require("./vars.c3c1eaaa.css");
var $880edb5e40e39939$exports = require("./dropzone_vars_css.main.js");
var $7vttB$reactspectrumutils = require("@react-spectrum/utils");
var $7vttB$reactariacomponents = require("react-aria-components");
var $7vttB$reactariautils = require("@react-aria/utils");
var $7vttB$react = require("react");
var $7vttB$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DropZone", () => $f7b7e7956f17a6e7$export$3c6489d84dc98b6);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






// Filter out props used by RAC DropZone that we don't want in RSP DropZone for now.
let $f7b7e7956f17a6e7$var$filterProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $f7b7e7956f17a6e7$export$3c6489d84dc98b6 = /*#__PURE__*/ (0, ($parcel$interopDefault($7vttB$react))).forwardRef(function DropZone(props, ref) {
    let { children: children, isFilled: isFilled, replaceMessage: replaceMessage, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $7vttB$reactspectrumutils.useStyleProps)(props);
    let domRef = (0, $7vttB$reactspectrumutils.useDOMRef)(ref);
    let messageId = (0, $7vttB$reactariautils.useId)();
    let headingId = (0, $7vttB$reactariautils.useId)();
    let stringFormatter = (0, $7vttB$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($338e657e2a59c652$exports))), '@react-spectrum/dropzone');
    let ariaLabelledby = isFilled ? `${headingId} ${messageId}` : headingId;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($7vttB$react))).createElement((0, $7vttB$reactariacomponents.Provider), {
        values: [
            [
                (0, $7vttB$reactariacomponents.HeadingContext),
                {
                    id: headingId
                }
            ]
        ]
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7vttB$react))).createElement((0, $7vttB$reactariacomponents.DropZone), {
        ...(0, $7vttB$reactariautils.mergeProps)($f7b7e7956f17a6e7$var$filterProps(otherProps)),
        ...styleProps,
        "aria-labelledby": ariaLabelledby,
        className: (0, $7vttB$reactspectrumutils.classNames)((0, ($parcel$interopDefault($880edb5e40e39939$exports))), 'spectrum-Dropzone', styleProps.className, {
            'spectrum-Dropzone--filled': isFilled
        }),
        ref: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($7vttB$react))).createElement((0, $7vttB$reactspectrumutils.SlotProvider), {
        slots: {
            illustration: {
                UNSAFE_className: (0, $7vttB$reactspectrumutils.classNames)((0, ($parcel$interopDefault($880edb5e40e39939$exports))), 'spectrum-Dropzone-illustratedMessage')
            }
        }
    }, children), /*#__PURE__*/ (0, ($parcel$interopDefault($7vttB$react))).createElement("div", {
        className: (0, $7vttB$reactspectrumutils.classNames)((0, ($parcel$interopDefault($880edb5e40e39939$exports))), 'spectrum-Dropzone-backdrop')
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($7vttB$react))).createElement("div", {
        id: messageId,
        className: (0, $7vttB$reactspectrumutils.classNames)((0, ($parcel$interopDefault($880edb5e40e39939$exports))), 'spectrum-Dropzone-banner', styleProps.className)
    }, replaceMessage ? replaceMessage : stringFormatter.format('replaceMessage'))));
});


//# sourceMappingURL=DropZone.main.js.map
