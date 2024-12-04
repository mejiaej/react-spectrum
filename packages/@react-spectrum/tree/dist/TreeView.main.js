require("./TreeView.1fe1dbfb.css");
var $6Q8R1$reactariacomponents = require("react-aria-components");
var $6Q8R1$reactspectrumcheckbox = require("@react-spectrum/checkbox");
var $6Q8R1$spectrumiconsuiChevronLeftMedium = require("@spectrum-icons/ui/ChevronLeftMedium");
var $6Q8R1$spectrumiconsuiChevronRightMedium = require("@spectrum-icons/ui/ChevronRightMedium");
var $6Q8R1$reactariautils = require("@react-aria/utils");
var $6Q8R1$react = require("react");
var $6Q8R1$reactspectrumutils = require("@react-spectrum/utils");
var $6Q8R1$reactspectrumtext = require("@react-spectrum/text");
var $6Q8R1$reactariabutton = require("@react-aria/button");
var $6Q8R1$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TreeView", () => $9b0dbe0a88ecfa3f$export$6940b0d9c820eca7);
$parcel$export(module.exports, "TreeViewItem", () => $9b0dbe0a88ecfa3f$export$6e77ea6719814e9c);
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









const $9b0dbe0a88ecfa3f$var$TreeRendererContext = /*#__PURE__*/ (0, $6Q8R1$react.createContext)({});
function $9b0dbe0a88ecfa3f$var$useTreeRendererContext() {
    return (0, $6Q8R1$react.useContext)($9b0dbe0a88ecfa3f$var$TreeRendererContext);
}
// TODO: add animations for rows appearing and disappearing
// TODO: the below is needed so the borders of the top and bottom row isn't cut off if the TreeView is wrapped within a container by always reserving the 2px needed for the
// keyboard focus ring. Perhaps find a different way of rendering the outlines since the top of the item doesn't
// scroll into view due to how the ring is offset. Alternatively, have the tree render the top/bottom outline like it does in Listview
const $9b0dbe0a88ecfa3f$var$tree = function anonymous(props) {
    let rules = "";
    rules += ' s1-ws1-c';
    rules += ' s1-xs1-c';
    rules += ' s1-us1-a';
    rules += ' s1-vs1-a';
    rules += ' s1-__ks1-a';
    rules += ' s1-As1-a';
    rules += ' s1-cs1-as1-___y';
    rules += ' s1-cs1-a';
    if (props.isEmpty) rules += ' s1-_Vs1-d';
    if (props.isEmpty) rules += ' s1-_Us1-c';
    if (props.isEmpty) rules += ' s1-os1-Y';
    if (props.isEmpty) rules += ' s1-ns1-Y';
    if (props.isEmpty) rules += ' s1-_Ss1-d';
    return rules;
};
const $9b0dbe0a88ecfa3f$export$6940b0d9c820eca7 = /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).forwardRef(function TreeView(props, ref) {
    let { children: children, selectionStyle: selectionStyle } = props;
    let renderer;
    if (typeof children === 'function') renderer = children;
    let { styleProps: styleProps } = (0, $6Q8R1$reactspectrumutils.useStyleProps)(props);
    let domRef = (0, $6Q8R1$reactspectrumutils.useDOMRef)(ref);
    let selectionBehavior = selectionStyle === 'highlight' ? 'replace' : 'toggle';
    return /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement($9b0dbe0a88ecfa3f$var$TreeRendererContext.Provider, {
        value: {
            renderer: renderer
        }
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, $6Q8R1$reactariacomponents.UNSTABLE_Tree), {
        ...props,
        ...styleProps,
        className: ({ isEmpty: isEmpty })=>$9b0dbe0a88ecfa3f$var$tree({
                isEmpty: isEmpty
            }),
        selectionBehavior: selectionBehavior,
        ref: domRef
    }, props.children));
});
const $9b0dbe0a88ecfa3f$var$treeRow = function anonymous(props) {
    let rules = "";
    rules += ' s1-Xs1-c';
    rules += ' s1-_Ss1-d';
    rules += ' s1-ns1-k';
    rules += ' s1-os1-Y';
    rules += ' s1-__ks1-a';
    rules += ' s1-6s1-c';
    rules += ' s1-7s1-d';
    rules += ' s1-9s1-b';
    rules += ' s1-as1-___K';
    rules += ' s1-_Es1-a';
    if (props.isLink) rules += ' s1-__Es1-c';
    else rules += ' s1-__Es1-b';
    if (props.isSelected) rules += ' s1-b-7vr0l1';
    else if (props.isPressed) rules += ' s1-b-1t6gvb8';
    else if (props.isFocusVisibleWithin) rules += ' s1-b-ml9cvk';
    else if (props.isHovered) rules += ' s1-b-ml9cvk';
    return rules;
};
const $9b0dbe0a88ecfa3f$var$treeCellGrid = function anonymous(props) {
    let rules = "";
    rules += ' s1-_Ss1-f';
    rules += ' s1-os1-Y';
    rules += ' s1-_Us1-c';
    rules += ' s1-__d-1nxidkl-1nxidkl-1nxidkl-3hmti-1nxidkl-375yi6-1nxidkl-ykdwf2';
    rules += ' s1-__e-375yi6';
    rules += ' s1-__f-1qk85yo';
    if (props.isDisabled) {
        rules += ' s1-as1-as1-___F';
        rules += ' s1-as1-i';
    }
    return rules;
};
// TODO: These styles lose against the spectrum class names, so I've did unsafe for the ones that get overridden
const $9b0dbe0a88ecfa3f$var$treeCheckbox = function anonymous(props) {
    let rules = "";
    rules += ' s1-__g-4wahvw';
    rules += ' s1-_J-37nn5o';
    rules += ' s1-Cs1-d';
    rules += ' s1-Ds1-a';
    return rules;
};
const $9b0dbe0a88ecfa3f$var$treeIcon = function anonymous(props) {
    let rules = "";
    rules += ' s1-__g-ykjmzy';
    rules += ' s1-Ds1-c';
    return rules;
};
const $9b0dbe0a88ecfa3f$var$treeContent = function anonymous(props) {
    let rules = "";
    rules += ' s1-__g-1mod4sg';
    rules += ' s1-_gs1-a';
    rules += ' s1-_ks1-b';
    rules += ' s1-__ss1-b';
    rules += ' s1-__ts1-b';
    return rules;
};
const $9b0dbe0a88ecfa3f$var$treeActions = function anonymous(props) {
    let rules = "";
    rules += ' s1-__g-8ayfo6';
    rules += ' s1-_3-3t1x';
    rules += ' s1-_2-3t1x';
    rules += ' s1-Cs1-F';
    rules += ' s1-Ds1-b';
    return rules;
};
const $9b0dbe0a88ecfa3f$var$treeActionMenu = function anonymous(props) {
    let rules = "";
    rules += ' s1-__g-wit6hk';
    rules += ' s1-os1-i';
    return rules;
};
const $9b0dbe0a88ecfa3f$var$treeRowOutline = function anonymous(props) {
    let rules = "";
    rules += ' s1-_Ss1-a';
    rules += ' s1-Xs1-a';
    rules += ' s1-Ys1-a';
    rules += ' s1-Zs1-a';
    if (props.isSelected) {
        if (props.isFocusVisible) rules += ' s1-0-yj8a3w';
        else rules += ' s1-0-yj899n';
    } else if (props.isFocusVisible) rules += ' s1-0-yj8a3w';
    else rules += ' s1-0s1-a';
    rules += ' s1-2s1-a';
    rules += ' s1-__ys1-a';
    rules += ' s1-_ts1-b';
    if (props.isSelected) {
        if (props.isFocusVisible) rules += ' s1-_os1-a-4bhpmf';
        else rules += ' s1-_os1-a-zlnqab';
    } else if (props.isFocusVisible) rules += ' s1-_os1-a-4bhpmf';
    if (props.isSelected) {
        if (props.isFocusVisible) rules += ' s1-_o-ba5uxf';
        else rules += ' s1-_o-1ytnijz';
    } else if (props.isFocusVisible) rules += ' s1-_o-ba5uxf';
    return rules;
};
const $9b0dbe0a88ecfa3f$export$6e77ea6719814e9c = (props)=>{
    let { children: children, childItems: childItems, hasChildItems: hasChildItems, href: href } = props;
    let content;
    let nestedRows;
    let { renderer: renderer } = $9b0dbe0a88ecfa3f$var$useTreeRendererContext();
    // TODO alternative api is that we have a separate prop for the TreeItems contents and expect the child to then be
    // a nested tree item
    if (typeof children === 'string') content = /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, $6Q8R1$reactspectrumtext.Text), null, children);
    else {
        content = [];
        nestedRows = [];
        (0, ($parcel$interopDefault($6Q8R1$react))).Children.forEach(children, (node)=>{
            if (/*#__PURE__*/ (0, $6Q8R1$react.isValidElement)(node) && node.type === $9b0dbe0a88ecfa3f$export$6e77ea6719814e9c) nestedRows.push(node);
            else content.push(node);
        });
    }
    if (childItems != null && renderer) nestedRows = /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, $6Q8R1$reactariacomponents.Collection), {
        items: childItems
    }, renderer);
    return(// TODO right now all the tree rows have the various data attributes applied on their dom nodes, should they? Doesn't feel very useful
    /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, $6Q8R1$reactariacomponents.UNSTABLE_TreeItem), {
        ...props,
        className: (renderProps)=>$9b0dbe0a88ecfa3f$var$treeRow({
                ...renderProps,
                isLink: !!href
            })
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, $6Q8R1$reactariacomponents.UNSTABLE_TreeItemContent), null, ({ isExpanded: isExpanded, hasChildRows: hasChildRows, level: level, selectionMode: selectionMode, selectionBehavior: selectionBehavior, isDisabled: isDisabled, isSelected: isSelected, isFocusVisible: isFocusVisible })=>/*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement("div", {
            className: $9b0dbe0a88ecfa3f$var$treeCellGrid({
                isDisabled: isDisabled
            })
        }, selectionMode !== 'none' && selectionBehavior === 'toggle' && // TODO: add transition?
        /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, $6Q8R1$reactspectrumcheckbox.Checkbox), {
            isEmphasized: true,
            UNSAFE_className: $9b0dbe0a88ecfa3f$var$treeCheckbox(),
            UNSAFE_style: {
                paddingInlineEnd: '0px'
            },
            slot: "selection"
        }), /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement("div", {
            style: {
                gridArea: 'level-padding',
                marginInlineEnd: `calc(${level - 1} * var(--spectrum-global-dimension-size-200))`
            }
        }), (hasChildRows || hasChildItems) && /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement($9b0dbe0a88ecfa3f$var$ExpandableRowChevron, {
            isDisabled: isDisabled,
            isExpanded: isExpanded
        }), /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, $6Q8R1$reactspectrumutils.SlotProvider), {
            slots: {
                text: {
                    UNSAFE_className: $9b0dbe0a88ecfa3f$var$treeContent({
                        isDisabled: isDisabled
                    })
                },
                // Note there is also an issue here where these icon props are making into the action menu's icon. Resolved by 8ab0ffb276ff437a65b365c9a3be0323a1b24656
                // but could crop up later for other components
                icon: {
                    UNSAFE_className: $9b0dbe0a88ecfa3f$var$treeIcon(),
                    size: 'S'
                },
                actionButton: {
                    UNSAFE_className: $9b0dbe0a88ecfa3f$var$treeActions(),
                    isQuiet: true
                },
                actionGroup: {
                    UNSAFE_className: $9b0dbe0a88ecfa3f$var$treeActions(),
                    isQuiet: true,
                    density: 'compact',
                    buttonLabelBehavior: 'hide',
                    isDisabled: isDisabled,
                    overflowMode: 'collapse'
                },
                actionMenu: {
                    UNSAFE_className: $9b0dbe0a88ecfa3f$var$treeActionMenu(),
                    UNSAFE_style: {
                        marginInlineEnd: '.5rem'
                    },
                    isQuiet: true
                }
            }
        }, content), /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement("div", {
            className: $9b0dbe0a88ecfa3f$var$treeRowOutline({
                isFocusVisible: isFocusVisible,
                isSelected: isSelected
            })
        }))), nestedRows));
};
const $9b0dbe0a88ecfa3f$var$expandButton = function anonymous(props) {
    let rules = "";
    rules += ' s1-__g-pn4rxq';
    rules += ' s1-ns1-Y';
    rules += ' s1-4s1-b';
    rules += ' s1-_Ss1-d';
    rules += ' s1-_0s1-a';
    rules += ' s1-_Ts1-b';
    rules += ' s1-_Vs1-d';
    rules += ' s1-_Es1-a';
    if (props.isExpanded) {
        if (props.isRTL) rules += ' s1-W-negfvv';
        else rules += ' s1-W-10b8jr2';
    }
    rules += ' s1-_H-1o2fh9e';
    return rules;
};
function $9b0dbe0a88ecfa3f$var$ExpandableRowChevron(props) {
    let expandButtonRef = (0, $6Q8R1$react.useRef)(null);
    let [fullProps, ref] = (0, $6Q8R1$reactariacomponents.useContextProps)({
        ...props,
        slot: 'chevron'
    }, expandButtonRef, (0, $6Q8R1$reactariacomponents.ButtonContext));
    let { isExpanded: isExpanded, isDisabled: isDisabled } = fullProps;
    let { direction: direction } = (0, $6Q8R1$reactariai18n.useLocale)();
    // Will need to keep the chevron as a button for iOS VO at all times since VO doesn't focus the cell. Also keep as button if cellAction is defined by the user in the future
    let { buttonProps: buttonProps } = (0, $6Q8R1$reactariabutton.useButton)({
        ...fullProps,
        elementType: 'span'
    }, ref);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement("span", {
        ...buttonProps,
        ref: ref,
        // Override tabindex so that grid keyboard nav skips over it. Needs -1 so android talkback can actually "focus" it
        tabIndex: (0, $6Q8R1$reactariautils.isAndroid)() && !isDisabled ? -1 : undefined,
        className: $9b0dbe0a88ecfa3f$var$expandButton({
            isExpanded: isExpanded,
            isDisabled: isDisabled,
            isRTL: direction === 'rtl'
        })
    }, direction === 'ltr' ? /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, ($parcel$interopDefault($6Q8R1$spectrumiconsuiChevronRightMedium))), null) : /*#__PURE__*/ (0, ($parcel$interopDefault($6Q8R1$react))).createElement((0, ($parcel$interopDefault($6Q8R1$spectrumiconsuiChevronLeftMedium))), null));
}


//# sourceMappingURL=TreeView.main.js.map
