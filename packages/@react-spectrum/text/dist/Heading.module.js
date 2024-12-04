import {filterDOMProps as $loc5r$filterDOMProps} from "@react-aria/utils";
import {useContextProps as $loc5r$useContextProps, HeadingContext as $loc5r$HeadingContext} from "react-aria-components";
import $loc5r$react, {forwardRef as $loc5r$forwardRef} from "react";
import {useDOMRef as $loc5r$useDOMRef, useSlotProps as $loc5r$useSlotProps, useStyleProps as $loc5r$useStyleProps} from "@react-spectrum/utils";

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



const $c382fceb69609a50$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, $loc5r$forwardRef)(function Heading(props, ref) {
    let domRef = (0, $loc5r$useDOMRef)(ref);
    props = (0, $loc5r$useSlotProps)(props, 'heading');
    [props, domRef] = (0, $loc5r$useContextProps)(props, domRef, (0, $loc5r$HeadingContext));
    let { children: children, level: level = 3, ...otherProps } = props;
    let { styleProps: styleProps } = (0, $loc5r$useStyleProps)(otherProps);
    let HeadingTag = `h${level}`;
    return /*#__PURE__*/ (0, $loc5r$react).createElement(HeadingTag, {
        ...(0, $loc5r$filterDOMProps)(otherProps),
        ...styleProps,
        ref: domRef
    }, children);
});


export {$c382fceb69609a50$export$a8a3e93435678ff9 as Heading};
//# sourceMappingURL=Heading.module.js.map
