import "./ColorEditor.f85fa1f2.css";
import {ColorArea as $40046aa1a7ccb226$export$b2103f68a961418e} from "./ColorArea.mjs";
import {ColorField as $0077d47e004328f0$export$b865d4358897bb17} from "./ColorField.mjs";
import {ColorSlider as $3870e4ce67ed7ee1$export$44fd664bcca5b6fb} from "./ColorSlider.mjs";
import $3Vio4$intlStringsmodulejs from "./intlStrings.mjs";
import {getColorChannels as $3Vio4$getColorChannels} from "@react-stately/color";
import {Picker as $3Vio4$Picker, Item as $3Vio4$Item} from "@react-spectrum/picker";
import $3Vio4$react, {useState as $3Vio4$useState} from "react";
import {useDOMRef as $3Vio4$useDOMRef} from "@react-spectrum/utils";
import {useLocalizedStringFormatter as $3Vio4$useLocalizedStringFormatter} from "@react-aria/i18n";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}









const $49352c629f2d8349$export$5aa54fd21eb08d23 = /*#__PURE__*/ (0, $3Vio4$react).forwardRef(function ColorEditor(props, ref) {
    let [format, setFormat] = (0, $3Vio4$useState)('hex');
    let domRef = (0, $3Vio4$useDOMRef)(ref);
    let formatter = (0, $3Vio4$useLocalizedStringFormatter)((0, ($parcel$interopDefault($3Vio4$intlStringsmodulejs))), '@react-spectrum/color');
    return /*#__PURE__*/ (0, $3Vio4$react).createElement("div", {
        className: function anonymous(props) {
            let rules = "";
            rules += ' s1-_Ss1-d';
            rules += ' s1-_Zs1-b';
            rules += ' s1-ls1-e';
            rules += ' s1-ms1-e';
            return rules;
        }(),
        ref: domRef
    }, /*#__PURE__*/ (0, $3Vio4$react).createElement("div", {
        className: function anonymous(props) {
            let rules = "";
            rules += ' s1-_Ss1-d';
            rules += ' s1-ls1-e';
            rules += ' s1-ms1-e';
            return rules;
        }()
    }, /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $40046aa1a7ccb226$export$b2103f68a961418e), {
        colorSpace: "hsb",
        xChannel: "saturation",
        yChannel: "brightness"
    }), /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $3870e4ce67ed7ee1$export$44fd664bcca5b6fb), {
        colorSpace: "hsb",
        channel: "hue",
        orientation: "vertical"
    }), !props.hideAlphaChannel && /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $3870e4ce67ed7ee1$export$44fd664bcca5b6fb), {
        channel: "alpha",
        orientation: "vertical"
    })), /*#__PURE__*/ (0, $3Vio4$react).createElement("div", {
        className: function anonymous(props) {
            let rules = "";
            rules += ' s1-_Ss1-d';
            rules += ' s1-ls1-e';
            rules += ' s1-ms1-e';
            return rules;
        }()
    }, /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $3Vio4$Picker), {
        "aria-label": formatter.format('colorFormat'),
        isQuiet: true,
        width: "size-700",
        menuWidth: "size-1000",
        selectedKey: format,
        onSelectionChange: (f)=>setFormat(f)
    }, /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $3Vio4$Item), {
        key: "hex"
    }, formatter.format('hex')), /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $3Vio4$Item), {
        key: "rgb"
    }, formatter.format('rgb')), /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $3Vio4$Item), {
        key: "hsl"
    }, formatter.format('hsl')), /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $3Vio4$Item), {
        key: "hsb"
    }, formatter.format('hsb'))), format === 'hex' ? /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $0077d47e004328f0$export$b865d4358897bb17), {
        isQuiet: true,
        width: "size-1000",
        "aria-label": formatter.format('hex')
    }) : (0, $3Vio4$getColorChannels)(format).map((channel)=>/*#__PURE__*/ (0, $3Vio4$react).createElement((0, $0077d47e004328f0$export$b865d4358897bb17), {
            key: channel,
            colorSpace: format,
            channel: channel,
            isQuiet: true,
            width: "size-400",
            flex: true,
            UNSAFE_style: {
                '--spectrum-textfield-min-width': 0
            }
        })), !props.hideAlphaChannel && /*#__PURE__*/ (0, $3Vio4$react).createElement((0, $0077d47e004328f0$export$b865d4358897bb17), {
        channel: "alpha",
        isQuiet: true,
        width: "size-400",
        flex: true,
        UNSAFE_style: {
            '--spectrum-textfield-min-width': 0
        }
    })));
});


export {$49352c629f2d8349$export$5aa54fd21eb08d23 as ColorEditor};
//# sourceMappingURL=ColorEditor.module.js.map
