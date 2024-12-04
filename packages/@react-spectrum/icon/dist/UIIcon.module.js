import "./vars.b0351abd.css";
import $g4kmm$icon_vars_cssmodulejs from "./icon_vars_css.module.js";
import {useSlotProps as $g4kmm$useSlotProps, useStyleProps as $g4kmm$useStyleProps, classNames as $g4kmm$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $g4kmm$filterDOMProps} from "@react-aria/utils";
import {useProvider as $g4kmm$useProvider} from "@react-spectrum/provider";
import $g4kmm$react from "react";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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




function $9ba43a63383852e3$export$906cc5990ff10700(props) {
    props = (0, $g4kmm$useSlotProps)(props, 'icon');
    let { children: children, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $g4kmm$useStyleProps)(otherProps);
    let provider;
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        provider = (0, $g4kmm$useProvider)();
    } catch  {
    // ignore
    }
    let scale = 'M';
    if (provider != null) scale = provider.scale === 'large' ? 'L' : 'M';
    if (!ariaHidden) ariaHidden = undefined;
    return /*#__PURE__*/ (0, $g4kmm$react).cloneElement(children, {
        ...(0, $g4kmm$filterDOMProps)(otherProps),
        ...styleProps,
        scale: scale,
        focusable: 'false',
        'aria-label': ariaLabel,
        'aria-hidden': ariaLabel ? ariaHidden || undefined : true,
        role: 'img',
        className: (0, $g4kmm$classNames)((0, ($parcel$interopDefault($g4kmm$icon_vars_cssmodulejs))), children.props.className, 'spectrum-Icon', {
            [`spectrum-UIIcon-${children.type['displayName']}`]: children.type['displayName']
        }, styleProps.className)
    });
}


export {$9ba43a63383852e3$export$906cc5990ff10700 as UIIcon};
//# sourceMappingURL=UIIcon.module.js.map
