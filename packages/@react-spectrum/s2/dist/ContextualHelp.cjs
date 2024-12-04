require("./ContextualHelp.css");
var $6e265ff388155b91$exports = require("./ActionButton.cjs");
var $6367bc87eb7d24ad$exports = require("./Content.cjs");
var $0f4636c7093b9233$exports = require("./Dialog.cjs");
var $1ed1734de3fc1075$exports = require("./DialogTrigger.cjs");
var $4a13db583e3ec6e0$exports = require("../icons/HelpCircle.cjs");
var $0ed6e07b499b9797$exports = require("../icons/InfoCircle.cjs");
var $4526404114e78c80$exports = require("./intlStrings.cjs");
var $308b180f49d82d28$exports = require("../icons/runtime.cjs");
var $493371ef39bf7a55$exports = require("./Popover.cjs");
var $ac757a4c2bd72aee$exports = require("../icons/useSpectrumContextProps.cjs");
var $44GE8$reactjsxruntime = require("react/jsx-runtime");
var $44GE8$reactariacomponents = require("react-aria-components");
var $44GE8$react = require("react");
var $44GE8$reactariautils = require("@react-aria/utils");
var $44GE8$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ContextualHelpContext", () => $bab829476f85a155$export$41b9afaaba473494);
$parcel$export(module.exports, "ContextualHelp", () => $bab829476f85a155$export$7d3cdb256c2ba320);















const $bab829476f85a155$var$popover = " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh q___U l___U Eh Fh Ch Dh";
const $bab829476f85a155$export$41b9afaaba473494 = /*#__PURE__*/ (0, $44GE8$react.createContext)(null);
const $bab829476f85a155$export$7d3cdb256c2ba320 = /*#__PURE__*/ (0, $44GE8$react.forwardRef)(function ContextualHelp(props, ref) {
    let stringFormatter = (0, $44GE8$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($4526404114e78c80$exports))), '@react-spectrum/s2');
    [props, ref] = (0, $ac757a4c2bd72aee$exports.useSpectrumContextProps)(props, ref, $bab829476f85a155$export$41b9afaaba473494);
    let { children: children, defaultOpen: defaultOpen, size: // containerPadding = 24, // See popover() above. Issue noted in Popover.tsx.
    size = 'XS', crossOffset: crossOffset, isOpen: isOpen, offset: offset = 8, onOpenChange: onOpenChange, placement: placement = 'bottom start', shouldFlip: shouldFlip, UNSAFE_className: UNSAFE_className, UNSAFE_style: UNSAFE_style, styles: styles, variant: variant = 'help' } = props;
    // In a FieldLabel we're getting the context's aria-labeledby, so we need to
    // manually set the aria-label after useLabels() to keep the order of label
    // then ContextualHelp variant
    let labelProps = (0, $44GE8$reactariautils.useLabels)(props);
    let label = stringFormatter.format(`contextualhelp.${variant}`);
    labelProps['aria-label'] = labelProps['aria-label'] ? labelProps['aria-label'] + ' ' + label : label;
    let buttonProps = (0, $44GE8$reactariautils.filterDOMProps)(props, {
        labelable: true
    });
    return /*#__PURE__*/ (0, $44GE8$reactjsxruntime.jsxs)((0, $1ed1734de3fc1075$exports.DialogTrigger), {
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        children: [
            /*#__PURE__*/ (0, $44GE8$reactjsxruntime.jsx)((0, $6e265ff388155b91$exports.ActionButton), {
                slot: null,
                ref: ref,
                size: size,
                ...(0, $44GE8$reactariautils.mergeProps)(buttonProps, labelProps),
                UNSAFE_style: UNSAFE_style,
                UNSAFE_className: UNSAFE_className,
                styles: styles,
                isQuiet: true,
                children: variant === 'info' ? /*#__PURE__*/ (0, $44GE8$reactjsxruntime.jsx)((0, $0ed6e07b499b9797$exports.default), {}) : /*#__PURE__*/ (0, $44GE8$reactjsxruntime.jsx)((0, $4a13db583e3ec6e0$exports.default), {})
            }),
            /*#__PURE__*/ (0, $44GE8$reactjsxruntime.jsx)((0, $493371ef39bf7a55$exports.PopoverBase), {
                placement: placement,
                shouldFlip: shouldFlip,
                // not working => containerPadding={containerPadding}
                offset: offset,
                crossOffset: crossOffset,
                hideArrow: true,
                UNSAFE_className: $bab829476f85a155$var$popover,
                children: /*#__PURE__*/ (0, $44GE8$reactjsxruntime.jsx)((0, $44GE8$reactariacomponents.Dialog), {
                    className: (0, $308b180f49d82d28$exports.mergeStyles)((0, $0f4636c7093b9233$exports.dialogInner), " . _va _wa _xa _ya AP BP yP zP Eh Fh Ch Dh"),
                    children: /*#__PURE__*/ (0, $44GE8$reactjsxruntime.jsx)((0, $44GE8$reactariacomponents.Provider), {
                        values: [
                            [
                                (0, $44GE8$reactariacomponents.TextContext),
                                {
                                    slots: {
                                        [(0, $44GE8$reactariacomponents.DEFAULT_SLOT)]: {}
                                    }
                                }
                            ],
                            [
                                (0, $6367bc87eb7d24ad$exports.HeadingContext),
                                {
                                    styles: " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _di _dbj _ee _e-1x99dloe _fa _f-1x99dlob ao Aa B-y6pz8c ya za"
                                }
                            ],
                            [
                                (0, $6367bc87eb7d24ad$exports.ContentContext),
                                {
                                    styles: " . _ca _c-enzrfpb _c-enzwzjc _c-enzykdd _c-enzzrge _c-eo0c6sf _c-1uotwbwg _c-bc1l9oh _de _dbf _eb _fb _f-1x99dloc an"
                                }
                            ],
                            [
                                (0, $6367bc87eb7d24ad$exports.FooterContext),
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


//# sourceMappingURL=ContextualHelp.cjs.map
