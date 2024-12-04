import {CollectionRendererContext as $7135fc7d473fd974$export$4feb769f8ddf26c5} from "./Collection.mjs";
import {useContextProps as $64fa3d84918910a7$export$29f1550f4b0d4415, useRenderProps as $64fa3d84918910a7$export$4d86445c2cf5e3, useSlottedContext as $64fa3d84918910a7$export$fabf2dc03a41866e} from "./utils.mjs";
import {LinkContext as $4f118338184dc1d9$export$e2509388b49734e7} from "./Link.mjs";
import {useBreadcrumbs as $c5cc5$useBreadcrumbs} from "react-aria";
import {CollectionBuilder as $c5cc5$CollectionBuilder, Collection as $c5cc5$Collection, createLeafComponent as $c5cc5$createLeafComponent} from "@react-aria/collections";
import {filterDOMProps as $c5cc5$filterDOMProps} from "@react-aria/utils";
import $c5cc5$react, {createContext as $c5cc5$createContext, forwardRef as $c5cc5$forwardRef, useContext as $c5cc5$useContext} from "react";

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $778035c5624f61e7$export$65596d3621b0a4a0 = /*#__PURE__*/ (0, $c5cc5$createContext)(null);
const $778035c5624f61e7$export$2dc68d50d56fbbd = /*#__PURE__*/ (0, $c5cc5$forwardRef)(function Breadcrumbs(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $778035c5624f61e7$export$65596d3621b0a4a0);
    let { CollectionRoot: CollectionRoot } = (0, $c5cc5$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let { navProps: navProps } = (0, $c5cc5$useBreadcrumbs)(props);
    return /*#__PURE__*/ (0, $c5cc5$react).createElement((0, $c5cc5$CollectionBuilder), {
        content: /*#__PURE__*/ (0, $c5cc5$react).createElement((0, $c5cc5$Collection), props)
    }, (collection)=>{
        var _props_className;
        return /*#__PURE__*/ (0, $c5cc5$react).createElement("ol", {
            ref: ref,
            ...navProps,
            slot: props.slot || undefined,
            style: props.style,
            className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : 'react-aria-Breadcrumbs'
        }, /*#__PURE__*/ (0, $c5cc5$react).createElement($778035c5624f61e7$export$65596d3621b0a4a0.Provider, {
            value: props
        }, /*#__PURE__*/ (0, $c5cc5$react).createElement(CollectionRoot, {
            collection: collection
        })));
    });
});
const $778035c5624f61e7$export$dabcc1ec9dd9d1cc = /*#__PURE__*/ (0, $c5cc5$createLeafComponent)('item', function Breadcrumb(props, ref, node) {
    // Recreating useBreadcrumbItem because we want to use composition instead of having the link builtin.
    let isCurrent = node.nextKey == null;
    let { isDisabled: isDisabled, onAction: onAction } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)($778035c5624f61e7$export$65596d3621b0a4a0);
    // why don't we use useBreadcrumbItem?
    let linkProps = {
        'aria-current': isCurrent ? 'page' : null,
        isDisabled: isDisabled || isCurrent,
        onPress: ()=>onAction === null || onAction === void 0 ? void 0 : onAction(node.key)
    };
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...node.props,
        children: node.rendered,
        values: {
            isDisabled: isDisabled || isCurrent,
            isCurrent: isCurrent
        },
        defaultClassName: 'react-aria-Breadcrumb'
    });
    return /*#__PURE__*/ (0, $c5cc5$react).createElement("li", {
        ...(0, $c5cc5$filterDOMProps)(props),
        ...renderProps,
        ref: ref,
        "data-disabled": isDisabled || isCurrent || undefined,
        "data-current": isCurrent || undefined
    }, /*#__PURE__*/ (0, $c5cc5$react).createElement((0, $4f118338184dc1d9$export$e2509388b49734e7).Provider, {
        value: linkProps
    }, renderProps.children));
});


export {$778035c5624f61e7$export$65596d3621b0a4a0 as BreadcrumbsContext, $778035c5624f61e7$export$2dc68d50d56fbbd as Breadcrumbs, $778035c5624f61e7$export$dabcc1ec9dd9d1cc as Breadcrumb};
//# sourceMappingURL=Breadcrumbs.module.js.map
