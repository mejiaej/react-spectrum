require("./vars.b0351abd.css");
var $5ef39e0c80b682c7$exports = require("./icon_vars_css.main.js");
var $anCtz$reactspectrumutils = require("@react-spectrum/utils");
var $anCtz$reactariautils = require("@react-aria/utils");
var $anCtz$reactspectrumprovider = require("@react-spectrum/provider");
var $anCtz$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "UIIcon", () => $722df481e3c1f593$export$906cc5990ff10700);
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




function $722df481e3c1f593$export$906cc5990ff10700(props) {
    props = (0, $anCtz$reactspectrumutils.useSlotProps)(props, 'icon');
    let { children: children, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $anCtz$reactspectrumutils.useStyleProps)(otherProps);
    let provider;
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        provider = (0, $anCtz$reactspectrumprovider.useProvider)();
    } catch  {
    // ignore
    }
    let scale = 'M';
    if (provider != null) scale = provider.scale === 'large' ? 'L' : 'M';
    if (!ariaHidden) ariaHidden = undefined;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($anCtz$react))).cloneElement(children, {
        ...(0, $anCtz$reactariautils.filterDOMProps)(otherProps),
        ...styleProps,
        scale: scale,
        focusable: 'false',
        'aria-label': ariaLabel,
        'aria-hidden': ariaLabel ? ariaHidden || undefined : true,
        role: 'img',
        className: (0, $anCtz$reactspectrumutils.classNames)((0, ($parcel$interopDefault($5ef39e0c80b682c7$exports))), children.props.className, 'spectrum-Icon', {
            [`spectrum-UIIcon-${children.type['displayName']}`]: children.type['displayName']
        }, styleProps.className)
    });
}


//# sourceMappingURL=UIIcon.main.js.map
