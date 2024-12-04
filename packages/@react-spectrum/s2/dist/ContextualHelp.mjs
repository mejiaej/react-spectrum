import "./ContextualHelp.css";
import {ActionButton as $da878a05ab4a403e$export$cfc7921d29ef7b80} from "./ActionButton.mjs";
import {ContentContext as $8e847109a6ab556d$export$1cbdd774077931b4, FooterContext as $8e847109a6ab556d$export$5630640b68817ed6, HeadingContext as $8e847109a6ab556d$export$d688439359537581} from "./Content.mjs";
import {dialogInner as $9bbc115952dac5a6$export$6af31f836f9aa6f2} from "./Dialog.mjs";
import {DialogTrigger as $66262086fa190fcb$export$2e1e1122cf0cba88} from "./DialogTrigger.mjs";
import $410bd93c9b5189d7$export$2e2bcd8739ae039 from "../icons/HelpCircle.mjs";
import $4c8f17dac3ecefd9$export$2e2bcd8739ae039 from "../icons/InfoCircle.mjs";
import $bcd4U$intlStringsmjs from "./intlStrings.mjs";
import {mergeStyles as $feb886035e0d4633$export$e618dc39ac9ad607} from "../icons/runtime.mjs";
import {PopoverBase as $88b746eba92c8d0d$export$fde1b04c590741a3} from "./Popover.mjs";
import {useSpectrumContextProps as $5ce63c423902f47d$export$764f6146fadd77f7} from "../icons/useSpectrumContextProps.mjs";
import {jsxs as $bcd4U$jsxs, jsx as $bcd4U$jsx} from "react/jsx-runtime";
import {Dialog as $bcd4U$Dialog, Provider as $bcd4U$Provider, TextContext as $bcd4U$TextContext, DEFAULT_SLOT as $bcd4U$DEFAULT_SLOT} from "react-aria-components";
import {createContext as $bcd4U$createContext, forwardRef as $bcd4U$forwardRef} from "react";
import {useLabels as $bcd4U$useLabels, filterDOMProps as $bcd4U$filterDOMProps, mergeProps as $bcd4U$mergeProps} from "@react-aria/utils";
import {useLocalizedStringFormatter as $bcd4U$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}















const $8e176595bc49ca3f$var$popover = " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh q___U l___U Eh Fh Ch Dh";
const $8e176595bc49ca3f$export$41b9afaaba473494 = /*#__PURE__*/ (0, $bcd4U$createContext)(null);
const $8e176595bc49ca3f$export$7d3cdb256c2ba320 = /*#__PURE__*/ (0, $bcd4U$forwardRef)(function ContextualHelp(props, ref) {
    let stringFormatter = (0, $bcd4U$useLocalizedStringFormatter)((0, ($parcel$interopDefault($bcd4U$intlStringsmjs))), '@react-spectrum/s2');
    [props, ref] = (0, $5ce63c423902f47d$export$764f6146fadd77f7)(props, ref, $8e176595bc49ca3f$export$41b9afaaba473494);
    let { children: children, defaultOpen: defaultOpen, size: // containerPadding = 24, // See popover() above. Issue noted in Popover.tsx.
    size = 'XS', crossOffset: crossOffset, isOpen: isOpen, offset: offset = 8, onOpenChange: onOpenChange, placement: placement = 'bottom start', shouldFlip: shouldFlip, UNSAFE_className: UNSAFE_className, UNSAFE_style: UNSAFE_style, styles: styles, variant: variant = 'help' } = props;
    // In a FieldLabel we're getting the context's aria-labeledby, so we need to
    // manually set the aria-label after useLabels() to keep the order of label
    // then ContextualHelp variant
    let labelProps = (0, $bcd4U$useLabels)(props);
    let label = stringFormatter.format(`contextualhelp.${variant}`);
    labelProps['aria-label'] = labelProps['aria-label'] ? labelProps['aria-label'] + ' ' + label : label;
    let buttonProps = (0, $bcd4U$filterDOMProps)(props, {
        labelable: true
    });
    return /*#__PURE__*/ (0, $bcd4U$jsxs)((0, $66262086fa190fcb$export$2e1e1122cf0cba88), {
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        children: [
            /*#__PURE__*/ (0, $bcd4U$jsx)((0, $da878a05ab4a403e$export$cfc7921d29ef7b80), {
                slot: null,
                ref: ref,
                size: size,
                ...(0, $bcd4U$mergeProps)(buttonProps, labelProps),
                UNSAFE_style: UNSAFE_style,
                UNSAFE_className: UNSAFE_className,
                styles: styles,
                isQuiet: true,
                children: variant === 'info' ? /*#__PURE__*/ (0, $bcd4U$jsx)((0, $4c8f17dac3ecefd9$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $bcd4U$jsx)((0, $410bd93c9b5189d7$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $bcd4U$jsx)((0, $88b746eba92c8d0d$export$fde1b04c590741a3), {
                placement: placement,
                shouldFlip: shouldFlip,
                // not working => containerPadding={containerPadding}
                offset: offset,
                crossOffset: crossOffset,
                hideArrow: true,
                UNSAFE_className: $8e176595bc49ca3f$var$popover,
                children: /*#__PURE__*/ (0, $bcd4U$jsx)((0, $bcd4U$Dialog), {
                    className: (0, $feb886035e0d4633$export$e618dc39ac9ad607)((0, $9bbc115952dac5a6$export$6af31f836f9aa6f2), " . _va _wa _xa _ya AP BP yP zP Eh Fh Ch Dh"),
                    children: /*#__PURE__*/ (0, $bcd4U$jsx)((0, $bcd4U$Provider), {
                        values: [
                            [
                                (0, $bcd4U$TextContext),
                                {
                                    slots: {
                                        [(0, $bcd4U$DEFAULT_SLOT)]: {}
                                    }
                                }
                            ],
                            [
                                (0, $8e847109a6ab556d$export$d688439359537581),
                                {
                                    styles: " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _di _dbj _ee _e-1x99dloe _fa _f-1x99dlob ao Aa B-y6pz8c ya za"
                                }
                            ],
                            [
                                (0, $8e847109a6ab556d$export$1cbdd774077931b4),
                                {
                                    styles: " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _de _dbf _eb _fb _f-1x99dloc an"
                                }
                            ],
                            [
                                (0, $8e847109a6ab556d$export$5630640b68817ed6),
                                {
                                    styles: " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _de _dbf _eb _fb _f-1x99dloc an Af"
                                }
                            ]
                        ],
                        children: children
                    })
                })
            })
        ]
    });
});


export {$8e176595bc49ca3f$export$41b9afaaba473494 as ContextualHelpContext, $8e176595bc49ca3f$export$7d3cdb256c2ba320 as ContextualHelp};
//# sourceMappingURL=ContextualHelp.mjs.map
