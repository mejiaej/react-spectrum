import {within as $7v0pZ$within, act as $7v0pZ$act, waitFor as $7v0pZ$waitFor} from "@testing-library/react";

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
class $4350df3e19e40e36$export$d1859707465446a9 {
    get trigger() {
        return this._trigger;
    }
    get listbox() {
        let listBoxId = this.trigger.getAttribute('aria-controls');
        return listBoxId ? document.getElementById(listBoxId) : undefined;
    }
    get options() {
        let listbox = this.listbox;
        return listbox ? (0, $7v0pZ$within)(listbox).queryAllByRole('option') : [];
    }
    get sections() {
        let listbox = this.listbox;
        return listbox ? (0, $7v0pZ$within)(listbox).queryAllByRole('group') : [];
    }
    constructor(opts){
        this.setInteractionType = (type)=>{
            this._interactionType = type;
        };
        this.open = async (opts = {})=>{
            let { interactionType: interactionType = this._interactionType } = opts;
            let trigger = this.trigger;
            let isDisabled = trigger.hasAttribute('disabled');
            if (interactionType === 'mouse') await this.user.click(this._trigger);
            else if (interactionType === 'keyboard') {
                (0, $7v0pZ$act)(()=>trigger.focus());
                await this.user.keyboard('[Enter]');
            } else if (interactionType === 'touch') await this.user.pointer({
                target: this._trigger,
                keys: '[TouchA]'
            });
            await (0, $7v0pZ$waitFor)(()=>{
                if (!isDisabled && trigger.getAttribute('aria-controls') == null) throw new Error('No aria-controls found on select element trigger.');
                else return true;
            });
            let listBoxId = trigger.getAttribute('aria-controls');
            await (0, $7v0pZ$waitFor)(()=>{
                if (!isDisabled && (!listBoxId || document.getElementById(listBoxId) == null)) throw new Error(`ListBox with id of ${listBoxId} not found in document.`);
                else return true;
            });
        };
        this.selectOption = async (opts)=>{
            let { optionText: optionText, interactionType: interactionType = this._interactionType } = opts || {};
            let trigger = this.trigger;
            if (!trigger.getAttribute('aria-controls')) await this.open();
            let listbox = this.listbox;
            if (listbox) {
                let option = (0, $7v0pZ$within)(listbox).getByText(optionText);
                if (interactionType === 'keyboard') {
                    if (document.activeElement !== listbox || !listbox.contains(document.activeElement)) (0, $7v0pZ$act)(()=>listbox.focus());
                    // TODO: this simulates typeahead, do we want to add a helper util for that? Not sure if users would really need that for
                    // their test
                    await this.user.keyboard(optionText);
                    await this.user.keyboard('[Enter]');
                } else // TODO: what if the user needs to scroll the list to find the option? What if there are multiple matches for text (hopefully the picker options are pretty unique)
                if (interactionType === 'mouse') await this.user.click(option);
                else await this.user.pointer({
                    target: option,
                    keys: '[TouchA]'
                });
                if (option.getAttribute('href') == null) {
                    await (0, $7v0pZ$waitFor)(()=>{
                        if (document.activeElement !== this._trigger) throw new Error(`Expected the document.activeElement after selecting an option to be the select component trigger but got ${document.activeElement}`);
                        else return true;
                    });
                    if (document.contains(listbox)) throw new Error('Expected select element listbox to not be in the document after selecting an option');
                }
            }
        };
        this.close = async ()=>{
            let listbox = this.listbox;
            if (listbox) {
                (0, $7v0pZ$act)(()=>listbox.focus());
                await this.user.keyboard('[Escape]');
            }
            await (0, $7v0pZ$waitFor)(()=>{
                if (document.activeElement !== this._trigger) throw new Error(`Expected the document.activeElement after closing the select dropdown to be the select component trigger but got ${document.activeElement}`);
                else return true;
            });
            if (listbox && document.contains(listbox)) throw new Error('Expected the select element listbox to not be in the document after closing the dropdown.');
        };
        let { root: root, user: user, interactionType: interactionType } = opts;
        this.user = user;
        this._interactionType = interactionType || 'mouse';
        // Handle case where the wrapper element is provided rather than the Select's button (aka RAC)
        let triggerButton = (0, $7v0pZ$within)(root).queryByRole('button');
        if (triggerButton == null) triggerButton = root;
        this._trigger = triggerButton;
    }
}


export {$4350df3e19e40e36$export$d1859707465446a9 as SelectTester};
//# sourceMappingURL=select.module.js.map
