import {hideOthers as $hRMXz$hideOthers} from "aria-hidden";

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
const $0ba7c906f8d7a5d9$var$currentDocument = typeof document !== 'undefined' ? document : undefined;
function $0ba7c906f8d7a5d9$export$11dddb85aae73809(selector = 'body', { document: document1 = $0ba7c906f8d7a5d9$var$currentDocument } = {}) {
    /**
   * Listen for additions to the child list of the selected element (defaults to body). This is where providers render modal portals.
   * When one is added, see if there is a modal inside it, if there is, then hide everything else from screen readers.
   * If there was already a modal open and a new one was added, undo everything that the previous modal had hidden and hide based on the new one.
   *
   * If a modal container is removed, then undo the hiding based on the last hide others. Check if there are any other modals still around, and
   * hide based on the last one added.
   */ if (!document1) return ()=>{};
    let target = document1.querySelector(selector);
    if (!target) return ()=>{};
    let config = {
        childList: true
    };
    let modalContainers = [];
    let undo;
    let observer = new MutationObserver((mutationRecord)=>{
        const liveAnnouncer = document1.querySelector('[data-live-announcer="true"]');
        for (let mutation of mutationRecord){
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                let addNode = Array.from(mutation.addedNodes).find((node)=>{
                    var _node_querySelector;
                    return (_node_querySelector = node.querySelector) === null || _node_querySelector === void 0 ? void 0 : _node_querySelector.call(node, '[aria-modal="true"], [data-ismodal="true"]');
                });
                if (addNode) {
                    modalContainers.push(addNode);
                    let modal = addNode.querySelector('[aria-modal="true"], [data-ismodal="true"]');
                    undo === null || undo === void 0 ? void 0 : undo();
                    let others = [
                        modal,
                        ...liveAnnouncer ? [
                            liveAnnouncer
                        ] : []
                    ];
                    undo = (0, $hRMXz$hideOthers)(others);
                }
            } else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
                let removedNodes = Array.from(mutation.removedNodes);
                let nodeIndexRemove = modalContainers.findIndex((container)=>removedNodes.includes(container));
                if (nodeIndexRemove >= 0) {
                    undo === null || undo === void 0 ? void 0 : undo();
                    modalContainers = modalContainers.filter((val, i)=>i !== nodeIndexRemove);
                    if (modalContainers.length > 0) {
                        let modal = modalContainers[modalContainers.length - 1].querySelector('[aria-modal="true"], [data-ismodal="true"]');
                        let others = [
                            modal,
                            ...liveAnnouncer ? [
                                liveAnnouncer
                            ] : []
                        ];
                        undo = (0, $hRMXz$hideOthers)(others);
                    } else undo = undefined;
                }
            }
        }
    });
    observer.observe(target, config);
    return ()=>{
        undo === null || undo === void 0 ? void 0 : undo();
        observer.disconnect();
    };
}


export {$0ba7c906f8d7a5d9$export$11dddb85aae73809 as watchModals};
//# sourceMappingURL=module.js.map
