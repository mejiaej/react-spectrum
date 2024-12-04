var $33gII$reactjsxruntime = require("react/jsx-runtime");
var $33gII$reactariacomponents = require("react-aria-components");
var $33gII$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "DialogContainer", () => $fc196655d58ce18c$export$547754aada6e339f);
$parcel$export(module.exports, "useDialogContainer", () => $fc196655d58ce18c$export$a2f2d8fa6720dab1);
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


function $fc196655d58ce18c$export$547754aada6e339f(props) {
    let { children: children, onDismiss: onDismiss } = props;
    let childArray = (0, ($parcel$interopDefault($33gII$react))).Children.toArray(children);
    if (childArray.length > 1) throw new Error('Only a single child can be passed to DialogContainer.');
    let [lastChild, setLastChild] = (0, $33gII$react.useState)(null);
    // React.Children.toArray mutates the children, and we need them to be stable
    // between renders so that the lastChild comparison works.
    let child = undefined;
    if (Array.isArray(children)) child = children.find((0, ($parcel$interopDefault($33gII$react))).isValidElement);
    else if (/*#__PURE__*/ (0, ($parcel$interopDefault($33gII$react))).isValidElement(children)) child = children;
    if (child && child !== lastChild) setLastChild(child);
    let onOpenChange = (isOpen)=>{
        if (!isOpen) onDismiss();
    };
    return /*#__PURE__*/ (0, $33gII$reactjsxruntime.jsx)((0, $33gII$reactariacomponents.ModalContext).Provider, {
        value: {
            isOpen: !!child,
            onOpenChange: onOpenChange
        },
        children: lastChild
    });
}
function $fc196655d58ce18c$export$a2f2d8fa6720dab1() {
    let context = (0, $33gII$reactariacomponents.useSlottedContext)((0, $33gII$reactariacomponents.ModalContext));
    if (!context) throw new Error('Cannot call useDialogContext outside a <DialogTrigger> or <DialogContainer>.');
    return {
        dismiss () {
            context?.onOpenChange?.(false);
        }
    };
}


//# sourceMappingURL=DialogContainer.cjs.map
