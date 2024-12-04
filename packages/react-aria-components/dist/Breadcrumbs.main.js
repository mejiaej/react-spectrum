var $3114c2382242bdc0$exports = require("./Collection.main.js");
var $c5ccf687772c0422$exports = require("./utils.main.js");
var $c87397ee936d2bda$exports = require("./Link.main.js");
var $l7mU3$reactaria = require("react-aria");
var $l7mU3$reactariacollections = require("@react-aria/collections");
var $l7mU3$reactariautils = require("@react-aria/utils");
var $l7mU3$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "BreadcrumbsContext", () => $afa44b644f65ed30$export$65596d3621b0a4a0);
$parcel$export(module.exports, "Breadcrumbs", () => $afa44b644f65ed30$export$2dc68d50d56fbbd);
$parcel$export(module.exports, "Breadcrumb", () => $afa44b644f65ed30$export$dabcc1ec9dd9d1cc);
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






const $afa44b644f65ed30$export$65596d3621b0a4a0 = /*#__PURE__*/ (0, $l7mU3$react.createContext)(null);
const $afa44b644f65ed30$export$2dc68d50d56fbbd = /*#__PURE__*/ (0, $l7mU3$react.forwardRef)(function Breadcrumbs(props, ref) {
    [props, ref] = (0, $c5ccf687772c0422$exports.useContextProps)(props, ref, $afa44b644f65ed30$export$65596d3621b0a4a0);
    let { CollectionRoot: CollectionRoot } = (0, $l7mU3$react.useContext)((0, $3114c2382242bdc0$exports.CollectionRendererContext));
    let { navProps: navProps } = (0, $l7mU3$reactaria.useBreadcrumbs)(props);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($l7mU3$react))).createElement((0, $l7mU3$reactariacollections.CollectionBuilder), {
        content: /*#__PURE__*/ (0, ($parcel$interopDefault($l7mU3$react))).createElement((0, $l7mU3$reactariacollections.Collection), props)
    }, (collection)=>{
        var _props_className;
        return /*#__PURE__*/ (0, ($parcel$interopDefault($l7mU3$react))).createElement("ol", {
            ref: ref,
            ...navProps,
            slot: props.slot || undefined,
            style: props.style,
            className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : 'react-aria-Breadcrumbs'
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($l7mU3$react))).createElement($afa44b644f65ed30$export$65596d3621b0a4a0.Provider, {
            value: props
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($l7mU3$react))).createElement(CollectionRoot, {
            collection: collection
        })));
    });
});
const $afa44b644f65ed30$export$dabcc1ec9dd9d1cc = /*#__PURE__*/ (0, $l7mU3$reactariacollections.createLeafComponent)('item', function Breadcrumb(props, ref, node) {
    // Recreating useBreadcrumbItem because we want to use composition instead of having the link builtin.
    let isCurrent = node.nextKey == null;
    let { isDisabled: isDisabled, onAction: onAction } = (0, $c5ccf687772c0422$exports.useSlottedContext)($afa44b644f65ed30$export$65596d3621b0a4a0);
    // why don't we use useBreadcrumbItem?
    let linkProps = {
        'aria-current': isCurrent ? 'page' : null,
        isDisabled: isDisabled || isCurrent,
        onPress: ()=>onAction === null || onAction === void 0 ? void 0 : onAction(node.key)
    };
    let renderProps = (0, $c5ccf687772c0422$exports.useRenderProps)({
        ...node.props,
        children: node.rendered,
        values: {
            isDisabled: isDisabled || isCurrent,
            isCurrent: isCurrent
        },
        defaultClassName: 'react-aria-Breadcrumb'
    });
    return /*#__PURE__*/ (0, ($parcel$interopDefault($l7mU3$react))).createElement("li", {
        ...(0, $l7mU3$reactariautils.filterDOMProps)(props),
        ...renderProps,
        ref: ref,
        "data-disabled": isDisabled || isCurrent || undefined,
        "data-current": isCurrent || undefined
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($l7mU3$react))).createElement((0, $c87397ee936d2bda$exports.LinkContext).Provider, {
        value: linkProps
    }, renderProps.children));
});


//# sourceMappingURL=Breadcrumbs.main.js.map
