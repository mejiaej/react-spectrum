import {triggerLongPress as $5d1eca18f92ad0e6$export$3a22a5a9bc0fd3b} from "./events.mjs";
import {within as $gS6KO$within, act as $gS6KO$act, waitFor as $gS6KO$waitFor} from "@testing-library/react";

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

class $74b93f0617179929$export$f73bbc9212ed861e {
    get trigger() {
        if (!this._trigger) throw new Error('No trigger element found for menu.');
        return this._trigger;
    }
    get menu() {
        let menuId = this.trigger.getAttribute('aria-controls');
        return menuId ? document.getElementById(menuId) : undefined;
    }
    get options() {
        let menu = this.menu;
        let options = [];
        if (menu) {
            options = (0, $gS6KO$within)(menu).queryAllByRole('menuitem');
            if (options.length === 0) {
                options = (0, $gS6KO$within)(menu).queryAllByRole('menuitemradio');
                if (options.length === 0) options = (0, $gS6KO$within)(menu).queryAllByRole('menuitemcheckbox');
            }
        }
        return options;
    }
    get sections() {
        let menu = this.menu;
        if (menu) return (0, $gS6KO$within)(menu).queryAllByRole('group');
        else return [];
    }
    get submenuTriggers() {
        let options = this.options;
        if (options.length > 0) return this.options.filter((item)=>item.getAttribute('aria-haspopup') != null);
        return [];
    }
    constructor(opts){
        this._isSubmenu = false;
        this.setInteractionType = (type)=>{
            this._interactionType = type;
        };
        // TODO: this has been common to select as well, maybe make select use it? Or make a generic method. Will need to make error messages generic
        // One difference will be that it supports long press as well
        this.open = async (opts = {})=>{
            let { needsLongPress: needsLongPress, interactionType: interactionType = this._interactionType, direction: direction } = opts;
            let trigger = this.trigger;
            let isDisabled = trigger.hasAttribute('disabled');
            if (interactionType === 'mouse' || interactionType === 'touch') {
                if (needsLongPress) {
                    if (this._advanceTimer == null) throw new Error('No advanceTimers provided for long press.');
                    let pointerType = interactionType === 'mouse' ? 'mouse' : 'touch';
                    await (0, $5d1eca18f92ad0e6$export$3a22a5a9bc0fd3b)({
                        element: trigger,
                        advanceTimer: this._advanceTimer,
                        pointerOpts: {
                            pointerType: pointerType
                        }
                    });
                } else if (interactionType === 'mouse') await this.user.click(trigger);
                else await this.user.pointer({
                    target: trigger,
                    keys: '[TouchA]'
                });
            } else if (interactionType === 'keyboard' && !isDisabled) {
                if (direction === 'up') {
                    (0, $gS6KO$act)(()=>trigger.focus());
                    await this.user.keyboard('[ArrowUp]');
                } else if (direction === 'down') {
                    (0, $gS6KO$act)(()=>trigger.focus());
                    await this.user.keyboard('[ArrowDown]');
                } else {
                    (0, $gS6KO$act)(()=>trigger.focus());
                    await this.user.keyboard('[Enter]');
                }
            }
            await (0, $gS6KO$waitFor)(()=>{
                if (trigger.getAttribute('aria-controls') == null && !isDisabled) throw new Error('No aria-controls found on menu trigger element.');
                else return true;
            });
            if (!isDisabled) {
                let menuId = trigger.getAttribute('aria-controls');
                await (0, $gS6KO$waitFor)(()=>{
                    if (!menuId || document.getElementById(menuId) == null) throw new Error(`Menu with id of ${menuId} not found in document.`);
                    else return true;
                });
            }
        };
        // TODO: also very similar to select, barring potential long press support
        // Close on select is also kinda specific?
        this.selectOption = async (opts)=>{
            let { optionText: optionText, menuSelectionMode: menuSelectionMode = 'single', needsLongPress: needsLongPress, closesOnSelect: closesOnSelect = true, option: option, interactionType: interactionType = this._interactionType, keyboardActivation: keyboardActivation = 'Enter' } = opts;
            let trigger = this.trigger;
            if (!trigger.getAttribute('aria-controls') && !trigger.hasAttribute('aria-expanded')) await this.open({
                needsLongPress: needsLongPress
            });
            let menu = this.menu;
            if (menu) {
                if (!option && optionText) option = (0, $gS6KO$within)(menu).getByText(optionText).closest('[role=menuitem], [role=menuitemradio], [role=menuitemcheckbox]');
                if (!option) throw new Error('No option found in the menu.');
                if (interactionType === 'keyboard') {
                    if (document.activeElement !== menu || !menu.contains(document.activeElement)) (0, $gS6KO$act)(()=>menu.focus());
                    await this.keyboardNavigateToOption({
                        option: option
                    });
                    await this.user.keyboard(`[${keyboardActivation}]`);
                } else if (interactionType === 'mouse') await this.user.click(option);
                else await this.user.pointer({
                    target: option,
                    keys: '[TouchA]'
                });
                (0, $gS6KO$act)(()=>{
                    jest.runAllTimers();
                });
                if (option && option.getAttribute('href') == null && option.getAttribute('aria-haspopup') == null && menuSelectionMode === 'single' && closesOnSelect && keyboardActivation !== 'Space' && !this._isSubmenu) {
                    await (0, $gS6KO$waitFor)(()=>{
                        if (document.activeElement !== trigger) throw new Error(`Expected the document.activeElement after selecting an option to be the menu trigger but got ${document.activeElement}`);
                        else return true;
                    });
                    if (document.contains(menu)) throw new Error('Expected menu element to not be in the document after selecting an option');
                }
            } else throw new Error("Attempted to select a option in the menu, but menu wasn't found.");
        };
        // TODO: update this to remove needsLongPress if we wanna make the user call open first always
        this.openSubmenu = async (opts)=>{
            let { submenuTrigger: submenuTrigger, submenuTriggerText: submenuTriggerText, needsLongPress: needsLongPress, interactionType: interactionType = this._interactionType } = opts;
            let trigger = this.trigger;
            let isDisabled = trigger.hasAttribute('disabled');
            if (!trigger.getAttribute('aria-controls') && !isDisabled) await this.open({
                needsLongPress: needsLongPress
            });
            if (!isDisabled) {
                let menu = this.menu;
                if (menu) {
                    let submenu;
                    if (submenuTrigger) submenu = submenuTrigger;
                    else if (submenuTriggerText) submenu = (0, $gS6KO$within)(menu).getByText(submenuTriggerText);
                    let submenuTriggerTester = new $74b93f0617179929$export$f73bbc9212ed861e({
                        user: this.user,
                        interactionType: this._interactionType,
                        root: submenu,
                        isSubmenu: true
                    });
                    if (interactionType === 'mouse') {
                        await this.user.pointer({
                            target: submenu
                        });
                        (0, $gS6KO$act)(()=>{
                            jest.runAllTimers();
                        });
                    } else if (interactionType === 'keyboard') {
                        await this.keyboardNavigateToOption({
                            option: submenu
                        });
                        await this.user.keyboard('[ArrowRight]');
                        (0, $gS6KO$act)(()=>{
                            jest.runAllTimers();
                        });
                    } else await submenuTriggerTester.open();
                    return submenuTriggerTester;
                }
            }
            return null;
        };
        this.keyboardNavigateToOption = async (opts)=>{
            let { option: option } = opts;
            let options = this.options;
            let targetIndex = options.indexOf(option);
            if (targetIndex === -1) throw new Error('Option provided is not in the menu');
            if (document.activeElement === this.menu) await this.user.keyboard('[ArrowDown]');
            let currIndex = options.indexOf(document.activeElement);
            if (targetIndex === -1) throw new Error('ActiveElement is not in the menu');
            let direction = targetIndex > currIndex ? 'down' : 'up';
            for(let i = 0; i < Math.abs(targetIndex - currIndex); i++)await this.user.keyboard(`[${direction === 'down' ? 'ArrowDown' : 'ArrowUp'}]`);
        };
        this.close = async ()=>{
            let menu = this.menu;
            if (menu) {
                (0, $gS6KO$act)(()=>menu.focus());
                await this.user.keyboard('[Escape]');
                await (0, $gS6KO$waitFor)(()=>{
                    if (document.activeElement !== this.trigger) throw new Error(`Expected the document.activeElement after closing the menu to be the menu trigger but got ${document.activeElement}`);
                    else return true;
                });
                if (document.contains(menu)) throw new Error('Expected the menu to not be in the document after closing it.');
            }
        };
        let { root: root, user: user, interactionType: interactionType, advanceTimer: advanceTimer, isSubmenu: isSubmenu } = opts;
        this.user = user;
        this._interactionType = interactionType || 'mouse';
        this._advanceTimer = advanceTimer;
        // Handle case where a submenu trigger is provided to the tester
        if (root.getAttribute('role') === 'menuitem') this._trigger = root;
        else {
            // Handle case where element provided is a wrapper of the trigger button
            let trigger = (0, $gS6KO$within)(root).queryByRole('button');
            if (trigger) this._trigger = trigger;
            else this._trigger = root;
        }
        this._isSubmenu = isSubmenu || false;
    }
}


export {$74b93f0617179929$export$f73bbc9212ed861e as MenuTester};
//# sourceMappingURL=menu.module.js.map
