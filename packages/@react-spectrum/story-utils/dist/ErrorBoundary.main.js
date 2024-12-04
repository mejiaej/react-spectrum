var $hxL0I$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ErrorBoundary", () => $078846cdd3099678$export$e926676385687eaf);
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
class $078846cdd3099678$export$e926676385687eaf extends (0, $hxL0I$react.Component) {
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) // You can render any custom fallback UI
        return /*#__PURE__*/ (0, ($parcel$interopDefault($hxL0I$react))).createElement("div", null, this.props.message);
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
}


//# sourceMappingURL=ErrorBoundary.main.js.map
