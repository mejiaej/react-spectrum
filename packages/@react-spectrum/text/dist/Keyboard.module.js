import {filterDOMProps as $3NMJ4$filterDOMProps} from "@react-aria/utils";
import $3NMJ4$react, {forwardRef as $3NMJ4$forwardRef} from "react";
import {useSlotProps as $3NMJ4$useSlotProps, useStyleProps as $3NMJ4$useStyleProps, useDOMRef as $3NMJ4$useDOMRef} from "@react-spectrum/utils";

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


const $a42b6b1607b36926$export$16e4d70cc375e707 = /*#__PURE__*/ (0, $3NMJ4$forwardRef)(function Keyboard(props, ref) {
    props = (0, $3NMJ4$useSlotProps)(props, 'keyboard');
    let { children: children, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $3NMJ4$useStyleProps)(otherProps);
    let domRef = (0, $3NMJ4$useDOMRef)(ref);
    return /*#__PURE__*/ (0, $3NMJ4$react).createElement("kbd", {
        ...(0, $3NMJ4$filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef
    }, children);
});


export {$a42b6b1607b36926$export$16e4d70cc375e707 as Keyboard};
//# sourceMappingURL=Keyboard.module.js.map
