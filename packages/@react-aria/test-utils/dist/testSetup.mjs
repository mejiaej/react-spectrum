
      var $parcel$global = globalThis;
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
 */ /**
 * Enables reading pageX/pageY from fireEvent.mouse*(..., {pageX: ..., pageY: ...}).
 */ function $68df97871cfb5e33$export$de31e3987c917741() {
    let oldMouseEvent = MouseEvent;
    beforeAll(()=>{
        $parcel$global.MouseEvent = class FakeMouseEvent extends MouseEvent {
            get pageX() {
                return this._init.pageX;
            }
            get pageY() {
                return this._init.pageY;
            }
            constructor(name, init){
                super(name, init);
                this._init = init;
            }
        };
    });
    afterAll(()=>{
        $parcel$global.MouseEvent = oldMouseEvent;
    });
}
function $68df97871cfb5e33$export$82f0b04c1d69a901() {
    beforeAll(()=>{
        // @ts-ignore
        $parcel$global.PointerEvent = class FakePointerEvent extends MouseEvent {
            get pointerType() {
                var _this__init_pointerType;
                return (_this__init_pointerType = this._init.pointerType) !== null && _this__init_pointerType !== void 0 ? _this__init_pointerType : 'mouse';
            }
            get pointerId() {
                return this._init.pointerId;
            }
            get pageX() {
                return this._init.pageX;
            }
            get pageY() {
                return this._init.pageY;
            }
            get width() {
                return this._init.width;
            }
            get height() {
                return this._init.height;
            }
            constructor(name, init){
                super(name, init);
                this._init = init;
            }
        };
    });
    afterAll(()=>{
        // @ts-ignore
        delete $parcel$global.PointerEvent;
    });
}


export {$68df97871cfb5e33$export$de31e3987c917741 as installMouseEvent, $68df97871cfb5e33$export$82f0b04c1d69a901 as installPointerEvent};
//# sourceMappingURL=testSetup.module.js.map
