import "./styles.d49f4d83.css";
import $jOVo7$styles_cssmodulejs from "./styles_css.module.js";
import {classNames as $jOVo7$classNames} from "@react-spectrum/utils";
import $jOVo7$react, {useRef as $jOVo7$useRef} from "react";
import {useDateSegment as $jOVo7$useDateSegment} from "@react-aria/datepicker";


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



function $cfa347761f172638$export$6388987c5223b54e({ segment: segment, state: state, ...otherProps }) {
    switch(segment.type){
        // A separator, e.g. punctuation
        case 'literal':
            return /*#__PURE__*/ (0, $jOVo7$react).createElement($cfa347761f172638$var$LiteralSegment, {
                segment: segment
            });
        // Editable segment
        default:
            return /*#__PURE__*/ (0, $jOVo7$react).createElement($cfa347761f172638$var$EditableSegment, {
                segment: segment,
                state: state,
                ...otherProps
            });
    }
}
function $cfa347761f172638$var$LiteralSegment({ segment: segment }) {
    return /*#__PURE__*/ (0, $jOVo7$react).createElement("span", {
        "aria-hidden": "true",
        className: (0, $jOVo7$classNames)((0, ($parcel$interopDefault($jOVo7$styles_cssmodulejs))), 'react-spectrum-Datepicker-literal'),
        "data-testid": segment.type === 'literal' ? undefined : segment.type
    }, segment.text);
}
function $cfa347761f172638$var$EditableSegment({ segment: segment, state: state }) {
    let ref = (0, $jOVo7$useRef)(null);
    let { segmentProps: segmentProps } = (0, $jOVo7$useDateSegment)(segment, state, ref);
    return /*#__PURE__*/ (0, $jOVo7$react).createElement("div", {
        ...segmentProps,
        ref: ref,
        className: (0, $jOVo7$classNames)((0, ($parcel$interopDefault($jOVo7$styles_cssmodulejs))), 'react-spectrum-DatePicker-cell', {
            'is-placeholder': segment.isPlaceholder,
            'is-read-only': !segment.isEditable
        }),
        style: segmentProps.style,
        "data-testid": segment.type
    }, segment.isPlaceholder ? /*#__PURE__*/ (0, $jOVo7$react).createElement("span", {
        "aria-hidden": "true",
        className: (0, $jOVo7$classNames)((0, ($parcel$interopDefault($jOVo7$styles_cssmodulejs))), 'react-spectrum-DatePicker-placeholder')
    }, segment.placeholder) : segment.text);
}


export {$cfa347761f172638$export$6388987c5223b54e as DatePickerSegment};
//# sourceMappingURL=DatePickerSegment.module.js.map
