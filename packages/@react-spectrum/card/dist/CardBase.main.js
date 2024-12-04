require("./vars.02438011.css");
var $71570f0038472fa2$exports = require("./card_vars_css.main.js");
var $e57ab98cef2f01a5$exports = require("./CardViewContext.main.js");
var $1rjnI$reactspectrumcheckbox = require("@react-spectrum/checkbox");
var $1rjnI$reactspectrumutils = require("@react-spectrum/utils");
var $1rjnI$reactariautils = require("@react-aria/utils");
var $1rjnI$reactariafocus = require("@react-aria/focus");
var $1rjnI$react = require("react");
var $1rjnI$reactariainteractions = require("@react-aria/interactions");
var $1rjnI$reactspectrumprovider = require("@react-spectrum/provider");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "CardBase", () => $7888205ff7de382f$export$7a6ccaf429ad93a8);
// @ts-nocheck
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $7888205ff7de382f$export$7a6ccaf429ad93a8 = /*#__PURE__*/ (0, ($parcel$interopDefault($1rjnI$react))).forwardRef(function CardBase(props, ref) {
    props = (0, $1rjnI$reactspectrumprovider.useProviderProps)(props);
    let context = (0, $e57ab98cef2f01a5$exports.useCardViewContext)() || {}; // we can call again here, won't change from Card.tsx
    let { state: state } = context;
    let manager = state === null || state === void 0 ? void 0 : state.selectionManager;
    let { isQuiet: isQuiet, orientation: orientation = 'vertical', articleProps: articleProps = {}, item: item, layout: layout, children: children } = props;
    let key = item === null || item === void 0 ? void 0 : item.key;
    let isSelected = manager === null || manager === void 0 ? void 0 : manager.isSelected(key);
    let isDisabled = state === null || state === void 0 ? void 0 : state.disabledKeys.has(key);
    let onChange = ()=>manager === null || manager === void 0 ? void 0 : manager.select(key);
    let { styleProps: styleProps } = (0, $1rjnI$reactspectrumutils.useStyleProps)(props);
    let { cardProps: cardProps, titleProps: titleProps, contentProps: contentProps } = $7888205ff7de382f$var$useCard(props);
    let domRef = (0, $1rjnI$reactspectrumutils.useDOMRef)(ref);
    let gridRef = (0, $1rjnI$react.useRef)(undefined);
    let checkboxRef = (0, $1rjnI$react.useRef)(null);
    // cards are only interactive if there is a selection manager and it allows selection
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $1rjnI$reactariainteractions.useHover)({
        isDisabled: manager === undefined || (manager === null || manager === void 0 ? void 0 : manager.selectionMode) === 'none' || isDisabled
    });
    let [isFocused, setIsFocused] = (0, $1rjnI$react.useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, $1rjnI$reactariainteractions.useFocusWithin)({
        onFocusWithinChange: setIsFocused,
        isDisabled: isDisabled
    });
    // ToDo: see css for comment about avatar under selector .spectrum-Card--noLayout.spectrum-Card--default
    let hasPreviewImage = (0, $1rjnI$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($71570f0038472fa2$exports)))['spectrum-Card-image']}`, gridRef);
    let hasPreviewIllustration = (0, $1rjnI$reactspectrumutils.useHasChild)(`.${(0, ($parcel$interopDefault($71570f0038472fa2$exports)))['spectrum-Card-illustration']}`, gridRef);
    let hasPreview = hasPreviewImage || hasPreviewIllustration;
    // this is for horizontal cards
    let [height, setHeight] = (0, $1rjnI$react.useState)(NaN);
    let updateHeight = (0, $1rjnI$react.useCallback)(()=>{
        if (orientation !== 'horizontal') return;
        let cardHeight = gridRef.current.getBoundingClientRect().height;
        setHeight(cardHeight);
    }, [
        orientation,
        gridRef,
        setHeight
    ]);
    (0, $1rjnI$reactariautils.useResizeObserver)({
        ref: gridRef,
        onResize: updateHeight
    });
    let aspectRatioEnforce = undefined;
    if (orientation === 'horizontal' && !isNaN(height)) aspectRatioEnforce = {
        height: `${height}px`,
        width: `${height}px`
    };
    let slots = (0, $1rjnI$react.useMemo)(()=>({
            image: {
                UNSAFE_className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-image'),
                objectFit: orientation === 'horizontal' ? 'cover' : 'contain',
                alt: '',
                ...aspectRatioEnforce
            },
            illustration: {
                UNSAFE_className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-illustration'),
                ...aspectRatioEnforce
            },
            avatar: {
                UNSAFE_className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-avatar'),
                size: 'avatar-size-400'
            },
            heading: {
                UNSAFE_className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-heading'),
                ...titleProps
            },
            content: {
                UNSAFE_className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-content'),
                ...contentProps
            },
            detail: {
                UNSAFE_className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-detail')
            }
        }), [
        titleProps,
        contentProps,
        height,
        isQuiet,
        orientation
    ]);
    (0, $1rjnI$reactariautils.useLayoutEffect)(()=>{
        if (gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) {
            let walker = (0, $1rjnI$reactariafocus.getFocusableTreeWalker)(gridRef.current);
            let nextNode = walker.nextNode();
            while(nextNode != null){
                if (checkboxRef.current && !checkboxRef.current.UNSAFE_getDOMNode().contains(nextNode)) {
                    console.warn('Card does not support focusable elements, please contact the team regarding your use case.');
                    break;
                }
                nextNode = walker.nextNode();
            }
        }
    }, [
        children
    ]);
    return /*#__PURE__*/ (0, ($parcel$interopDefault($1rjnI$react))).createElement((0, $1rjnI$reactariafocus.FocusRing), {
        focusRingClass: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'focus-ring')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1rjnI$react))).createElement("article", {
        ...styleProps,
        ...(0, $1rjnI$reactariautils.mergeProps)(cardProps, focusWithinProps, hoverProps, (0, $1rjnI$reactariautils.filterDOMProps)(props), articleProps),
        ref: domRef,
        className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card', {
            'spectrum-Card--default': !isQuiet && orientation !== 'horizontal',
            'spectrum-Card--isQuiet': isQuiet && orientation !== 'horizontal',
            'spectrum-Card--horizontal': orientation === 'horizontal',
            'spectrum-Card--noPreview': !hasPreview,
            'is-hovered': isHovered,
            'is-focused': isFocused,
            'is-selected': isSelected,
            'spectrum-Card--waterfall': layout === 'waterfall',
            'spectrum-Card--gallery': layout === 'gallery',
            'spectrum-Card--grid': layout === 'grid',
            'spectrum-Card--noLayout': layout !== 'waterfall' && layout !== 'gallery' && layout !== 'grid'
        }, styleProps.className)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1rjnI$react))).createElement("div", {
        ref: gridRef,
        className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-grid')
    }, manager && manager.selectionMode !== 'none' && /*#__PURE__*/ (0, ($parcel$interopDefault($1rjnI$react))).createElement("div", {
        className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-checkboxWrapper')
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($1rjnI$react))).createElement((0, $1rjnI$reactspectrumcheckbox.Checkbox), {
        ref: checkboxRef,
        isDisabled: isDisabled,
        excludeFromTabOrder: true,
        isSelected: isSelected,
        onChange: onChange,
        UNSAFE_className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-checkbox'),
        isEmphasized: true,
        "aria-label": "select"
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($1rjnI$react))).createElement((0, $1rjnI$reactspectrumutils.SlotProvider), {
        slots: slots
    }, children), /*#__PURE__*/ (0, ($parcel$interopDefault($1rjnI$react))).createElement("div", {
        className: (0, $1rjnI$reactspectrumutils.classNames)((0, ($parcel$interopDefault($71570f0038472fa2$exports))), 'spectrum-Card-decoration')
    }))));
});
function $7888205ff7de382f$var$useCard(props) {
    let titleId = (0, $1rjnI$reactariautils.useSlotId)();
    let descriptionId = (0, $1rjnI$reactariautils.useSlotId)();
    let titleProps = (0, $1rjnI$react.useMemo)(()=>({
            id: titleId
        }), [
        titleId
    ]);
    let contentProps = (0, $1rjnI$react.useMemo)(()=>({
            id: descriptionId
        }), [
        descriptionId
    ]);
    return {
        cardProps: {
            ...(0, $1rjnI$reactariautils.filterDOMProps)(props),
            'aria-labelledby': titleId,
            'aria-describedby': descriptionId,
            tabIndex: 0
        },
        titleProps: titleProps,
        contentProps: contentProps
    };
}


//# sourceMappingURL=CardBase.main.js.map
