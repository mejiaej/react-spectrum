import $1cWtg$react, {Component as $1cWtg$Component} from "react";

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
class $dd28ee303f2d6840$export$e926676385687eaf extends (0, $1cWtg$Component) {
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) // You can render any custom fallback UI
        return /*#__PURE__*/ (0, $1cWtg$react).createElement("div", null, this.props.message);
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
}


export {$dd28ee303f2d6840$export$e926676385687eaf as ErrorBoundary};
//# sourceMappingURL=ErrorBoundary.module.js.map
