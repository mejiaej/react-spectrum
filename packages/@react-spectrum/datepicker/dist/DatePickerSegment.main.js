require("./styles.d49f4d83.css");
var $91c3db8c6a21ca71$exports = require("./styles_css.main.js");
var $9PhAi$reactspectrumutils = require("@react-spectrum/utils");
var $9PhAi$react = require("react");
var $9PhAi$reactariadatepicker = require("@react-aria/datepicker");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DatePickerSegment", () => $edac158d20ebe4a9$export$6388987c5223b54e);
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



function $edac158d20ebe4a9$export$6388987c5223b54e({ segment: segment, state: state, ...otherProps }) {
    switch(segment.type){
        // A separator, e.g. punctuation
        case 'literal':
            return /*#__PURE__*/ (0, ($parcel$interopDefault($9PhAi$react))).createElement($edac158d20ebe4a9$var$LiteralSegment, {
                segment: segment
            });
        // Editable segment
        default:
            return /*#__PURE__*/ (0, ($parcel$interopDefault($9PhAi$react))).createElement($edac158d20ebe4a9$var$EditableSegment, {
                segment: segment,
                state: state,
                ...otherProps
            });
    }
}
function $edac158d20ebe4a9$var$LiteralSegment({ segment: segment }) {
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9PhAi$react))).createElement("span", {
        "aria-hidden": "true",
        className: (0, $9PhAi$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-Datepicker-literal'),
        "data-testid": segment.type === 'literal' ? undefined : segment.type
    }, segment.text);
}
function $edac158d20ebe4a9$var$EditableSegment({ segment: segment, state: state }) {
    let ref = (0, $9PhAi$react.useRef)(null);
    let { segmentProps: segmentProps } = (0, $9PhAi$reactariadatepicker.useDateSegment)(segment, state, ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($9PhAi$react))).createElement("div", {
        ...segmentProps,
        ref: ref,
        className: (0, $9PhAi$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-DatePicker-cell', {
            'is-placeholder': segment.isPlaceholder,
            'is-read-only': !segment.isEditable
        }),
        style: segmentProps.style,
        "data-testid": segment.type
    }, segment.isPlaceholder ? /*#__PURE__*/ (0, ($parcel$interopDefault($9PhAi$react))).createElement("span", {
        "aria-hidden": "true",
        className: (0, $9PhAi$reactspectrumutils.classNames)((0, ($parcel$interopDefault($91c3db8c6a21ca71$exports))), 'react-spectrum-DatePicker-placeholder')
    }, segment.placeholder) : segment.text);
}


//# sourceMappingURL=DatePickerSegment.main.js.map
