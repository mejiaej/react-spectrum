import {pressElement as $5d1eca18f92ad0e6$export$6ffa3eb717517feb} from "./events.module.js";
import {within as $haOzD$within, act as $haOzD$act} from "@testing-library/react";

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

class $5ca9e9228f508f75$export$93a85aaed9fabd83 {
    // TODO: do we really need this getter? Theoretically the user already has the reference to the gridlist
    get gridlist() {
        return this._gridlist;
    }
    get rows() {
        var _this;
        return (0, $haOzD$within)((_this = this) === null || _this === void 0 ? void 0 : _this.gridlist).queryAllByRole('row');
    }
    get selectedRows() {
        return this.rows.filter((row)=>row.getAttribute('aria-selected') === 'true');
    }
    constructor(opts){
        this.setInteractionType = (type)=>{
            this._interactionType = type;
        };
        // TODO: support long press? This is also pretty much the same as table's toggleRowSelection so maybe can share
        // For now, don't include long press, see if people need it or if we should just expose long press as a separate util if it isn't very common
        // If the current way of passing in the user specified advance timers is ok, then I'd be find including long press
        // Maybe also support an option to force the click to happen on a specific part of the element (checkbox or row). That way
        // the user can test a specific type of interaction?
        this.toggleRowSelection = async (opts = {})=>{
            let { index: index, text: text, interactionType: interactionType = this._interactionType } = opts;
            let row = this.findRow({
                index: index,
                text: text
            });
            let rowCheckbox = (0, $haOzD$within)(row).queryByRole('checkbox');
            if (rowCheckbox) await (0, $5d1eca18f92ad0e6$export$6ffa3eb717517feb)(this.user, rowCheckbox, interactionType);
            else {
                let cell = (0, $haOzD$within)(row).getAllByRole('gridcell')[0];
                await (0, $5d1eca18f92ad0e6$export$6ffa3eb717517feb)(this.user, cell, interactionType);
            }
        };
        // TODO: pretty much the same as table except it uses this.gridlist. Make common between the two by accepting an option for
        // an element?
        this.findRow = (opts)=>{
            let { index: index, text: text } = opts;
            let row;
            if (index != null) row = this.rows[index];
            else if (text != null) {
                var _this;
                row = (0, $haOzD$within)((_this = this) === null || _this === void 0 ? void 0 : _this.gridlist).getByText(text);
                while(row && row.getAttribute('role') !== 'row')row = row.parentElement;
            }
            return row;
        };
        // TODO: There is a more difficult use case where the row has/behaves as link, don't think we have a good way to determine that unless the
        // user specificlly tells us
        this.triggerRowAction = async (opts)=>{
            let { index: index, text: text, needsDoubleClick: needsDoubleClick, interactionType: interactionType = this._interactionType } = opts;
            let row = this.findRow({
                index: index,
                text: text
            });
            if (row) {
                if (needsDoubleClick) await this.user.dblClick(row);
                else if (interactionType === 'keyboard') {
                    (0, $haOzD$act)(()=>row.focus());
                    await this.user.keyboard('[Enter]');
                } else await (0, $5d1eca18f92ad0e6$export$6ffa3eb717517feb)(this.user, row, interactionType);
            }
        };
        this.cells = (opts = {})=>{
            let { element: element } = opts;
            return (0, $haOzD$within)(element || this.gridlist).queryAllByRole('gridcell');
        };
        let { root: root, user: user, interactionType: interactionType } = opts;
        this.user = user;
        this._interactionType = interactionType || 'mouse';
        this._gridlist = root;
    }
}


export {$5ca9e9228f508f75$export$93a85aaed9fabd83 as GridListTester};
//# sourceMappingURL=gridlist.module.js.map
