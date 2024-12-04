import {jsx as $7vgZZ$jsx} from "react/jsx-runtime";
import {ModalContext as $7vgZZ$ModalContext, useSlottedContext as $7vgZZ$useSlottedContext} from "react-aria-components";
import $7vgZZ$react, {useState as $7vgZZ$useState} from "react";

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


function $dd7e1b1b86bf720d$export$547754aada6e339f(props) {
    let { children: children, onDismiss: onDismiss } = props;
    let childArray = (0, $7vgZZ$react).Children.toArray(children);
    if (childArray.length > 1) throw new Error('Only a single child can be passed to DialogContainer.');
    let [lastChild, setLastChild] = (0, $7vgZZ$useState)(null);
    // React.Children.toArray mutates the children, and we need them to be stable
    // between renders so that the lastChild comparison works.
    let child = undefined;
    if (Array.isArray(children)) child = children.find((0, $7vgZZ$react).isValidElement);
    else if (/*#__PURE__*/ (0, $7vgZZ$react).isValidElement(children)) child = children;
    if (child && child !== lastChild) setLastChild(child);
    let onOpenChange = (isOpen)=>{
        if (!isOpen) onDismiss();
    };
    return /*#__PURE__*/ (0, $7vgZZ$jsx)((0, $7vgZZ$ModalContext).Provider, {
        value: {
            isOpen: !!child,
            onOpenChange: onOpenChange
        },
        children: lastChild
    });
}
function $dd7e1b1b86bf720d$export$a2f2d8fa6720dab1() {
    let context = (0, $7vgZZ$useSlottedContext)((0, $7vgZZ$ModalContext));
    if (!context) throw new Error('Cannot call useDialogContext outside a <DialogTrigger> or <DialogContainer>.');
    return {
        dismiss () {
            context?.onOpenChange?.(false);
        }
    };
}


export {$dd7e1b1b86bf720d$export$547754aada6e339f as DialogContainer, $dd7e1b1b86bf720d$export$a2f2d8fa6720dab1 as useDialogContainer};
//# sourceMappingURL=DialogContainer.mjs.map
