import {within as $1n52X$within, act as $1n52X$act, waitFor as $1n52X$waitFor} from "@testing-library/react";

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
class $dab75f394483aa9c$export$f97e14e96d71ab3b {
    get combobox() {
        return this._combobox;
    }
    get trigger() {
        return this._trigger;
    }
    get listbox() {
        let listBoxId = this.combobox.getAttribute('aria-controls');
        return listBoxId ? document.getElementById(listBoxId) || undefined : undefined;
    }
    get sections() {
        let listbox = this.listbox;
        if (listbox) return (0, $1n52X$within)(listbox).queryAllByRole('group');
        else return [];
    }
    get focusedOption() {
        let focusedOptionId = this.combobox.getAttribute('aria-activedescendant');
        return focusedOptionId ? document.getElementById(focusedOptionId) : undefined;
    }
    constructor(opts){
        this.setInteractionType = (type)=>{
            this._interactionType = type;
        };
        this.open = async (opts = {})=>{
            let { triggerBehavior: triggerBehavior = 'manual', interactionType: interactionType = this._interactionType } = opts;
            let trigger = this.trigger;
            let combobox = this.combobox;
            let isDisabled = trigger.hasAttribute('disabled');
            if (interactionType === 'mouse') {
                if (triggerBehavior === 'focus') await this.user.click(combobox);
                else await this.user.click(trigger);
            } else if (interactionType === 'keyboard' && this._trigger != null) {
                (0, $1n52X$act)(()=>this._trigger.focus());
                if (triggerBehavior !== 'focus') await this.user.keyboard('{ArrowDown}');
            } else if (interactionType === 'touch') {
                if (triggerBehavior === 'focus') await this.user.pointer({
                    target: combobox,
                    keys: '[TouchA]'
                });
                else await this.user.pointer({
                    target: trigger,
                    keys: '[TouchA]'
                });
            }
            await (0, $1n52X$waitFor)(()=>{
                if (!isDisabled && combobox.getAttribute('aria-controls') == null) throw new Error('No aria-controls found on combobox trigger element.');
                else return true;
            });
            let listBoxId = combobox.getAttribute('aria-controls');
            await (0, $1n52X$waitFor)(()=>{
                if (!isDisabled && (!listBoxId || document.getElementById(listBoxId) == null)) throw new Error(`Listbox with id of ${listBoxId} not found in document.`);
                else return true;
            });
        };
        this.selectOption = async (opts = {})=>{
            let { optionText: optionText, option: option, triggerBehavior: triggerBehavior, interactionType: interactionType = this._interactionType } = opts;
            if (!this.combobox.getAttribute('aria-controls')) await this.open({
                triggerBehavior: triggerBehavior
            });
            let listbox = this.listbox;
            if (listbox) {
                if (!option && optionText) option = (0, $1n52X$within)(listbox).getByText(optionText);
                // TODO: keyboard method of selecting the the option is a bit tricky unless I simply simulate the user pressing the down arrow
                // the required amount of times to reach the option. For now just click the option even in keyboard mode
                if (interactionType === 'mouse' || interactionType === 'keyboard') await this.user.click(option);
                else await this.user.pointer({
                    target: option,
                    keys: '[TouchA]'
                });
                if (option && option.getAttribute('href') == null) await (0, $1n52X$waitFor)(()=>{
                    if (document.contains(listbox)) throw new Error('Expected listbox element to not be in the document after selecting an option');
                    else return true;
                });
            } else throw new Error("Attempted to select a option in the combobox, but the listbox wasn't found.");
        };
        this.close = async ()=>{
            let listbox = this.listbox;
            if (listbox) {
                (0, $1n52X$act)(()=>this.combobox.focus());
                await this.user.keyboard('[Escape]');
                await (0, $1n52X$waitFor)(()=>{
                    if (document.contains(listbox)) throw new Error('Expected listbox element to not be in the document after selecting an option');
                    else return true;
                });
            }
        };
        this.options = (opts = {})=>{
            let { element: element } = opts;
            element = element || this.listbox;
            let options = [];
            if (element) options = (0, $1n52X$within)(element).queryAllByRole('option');
            return options;
        };
        let { root: root, trigger: trigger, user: user, interactionType: interactionType } = opts;
        this.user = user;
        this._interactionType = interactionType || 'mouse';
        // Handle case where element provided is a wrapper around the combobox. The expectation is that the user at least uses a ref/data attribute to
        // query their combobox/combobox wrapper (in the case of RSP) which they then pass to thhis
        this._combobox = root;
        let combobox = (0, $1n52X$within)(root).queryByRole('combobox');
        if (combobox) this._combobox = combobox;
        // This is for if user need to directly set the trigger button element (aka the element provided in setElement was the combobox input or the trigger is somewhere unexpected)
        if (trigger) this._trigger = trigger;
        else {
            let trigger = (0, $1n52X$within)(root).queryByRole('button', {
                hidden: true
            });
            if (trigger) this._trigger = trigger;
            else // For cases like https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/ where the combobox
            // is also the trigger button
            this._trigger = this._combobox;
        }
    }
}


export {$dab75f394483aa9c$export$f97e14e96d71ab3b as ComboBoxTester};
//# sourceMappingURL=combobox.module.js.map
