import {filterDOMProps as $8fLFW$filterDOMProps} from "@react-aria/utils";
import $8fLFW$react, {forwardRef as $8fLFW$forwardRef} from "react";
import {useSlotProps as $8fLFW$useSlotProps, useStyleProps as $8fLFW$useStyleProps, useDOMRef as $8fLFW$useDOMRef} from "@react-spectrum/utils";

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


const $cd449e8defa988f0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, $8fLFW$forwardRef)(function Text(props, ref) {
    props = (0, $8fLFW$useSlotProps)(props, 'text');
    let { children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $8fLFW$useStyleProps)(otherProps);
    let domRef = (0, $8fLFW$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $8fLFW$react).createElement("span", {
        role: "none",
        ...(0, $8fLFW$filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef
    }, children);
});


export {$cd449e8defa988f0$export$5f1af8db9871e1d6 as Text};
//# sourceMappingURL=Text.module.js.map
