import {Input as $3985021b0ad6602f$export$f5b8910cec6cf069} from "./Input.module.js";
import {useObjectRef as $d1ZE7$useObjectRef, filterDOMProps as $d1ZE7$filterDOMProps} from "@react-aria/utils";
import {PressResponder as $d1ZE7$PressResponder} from "@react-aria/interactions";
import $d1ZE7$react, {forwardRef as $d1ZE7$forwardRef} from "react";

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



const $1e2864c73f66a4da$export$6fb4a10d2c950550 = /*#__PURE__*/ (0, $d1ZE7$forwardRef)(function FileTrigger(props, ref) {
    let { onSelect: onSelect, acceptedFileTypes: acceptedFileTypes, allowsMultiple: allowsMultiple, defaultCamera: defaultCamera, children: children, acceptDirectory: acceptDirectory, ...rest } = props;
    let inputRef = (0, $d1ZE7$useObjectRef)(ref);
    let domProps = (0, $d1ZE7$filterDOMProps)(rest);
    return /*#__PURE__*/ (0, $d1ZE7$react).createElement((0, $d1ZE7$react).Fragment, null, /*#__PURE__*/ (0, $d1ZE7$react).createElement((0, $d1ZE7$PressResponder), {
        onPress: ()=>{
            var _inputRef_current, _inputRef_current1;
            if ((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.value) inputRef.current.value = '';
            (_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.click();
        }
    }, children), /*#__PURE__*/ (0, $d1ZE7$react).createElement((0, $3985021b0ad6602f$export$f5b8910cec6cf069), {
        ...domProps,
        type: "file",
        ref: inputRef,
        style: {
            display: 'none'
        },
        accept: acceptedFileTypes === null || acceptedFileTypes === void 0 ? void 0 : acceptedFileTypes.toString(),
        onChange: (e)=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(e.target.files),
        capture: defaultCamera,
        multiple: allowsMultiple,
        // @ts-expect-error
        webkitdirectory: acceptDirectory ? '' : undefined
    }));
});


export {$1e2864c73f66a4da$export$6fb4a10d2c950550 as FileTrigger};
//# sourceMappingURL=FileTrigger.module.js.map
