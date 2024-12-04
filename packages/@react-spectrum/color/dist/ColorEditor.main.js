require("./ColorEditor.f85fa1f2.css");
var $5f016e950c2dc3a6$exports = require("./ColorArea.main.js");
var $8bdb9bc27ff3debb$exports = require("./ColorField.main.js");
var $4537dec0de08c277$exports = require("./ColorSlider.main.js");
var $5cb66132bfdb0a33$exports = require("./intlStrings.main.js");
var $2H14s$reactstatelycolor = require("@react-stately/color");
var $2H14s$reactspectrumpicker = require("@react-spectrum/picker");
var $2H14s$react = require("react");
var $2H14s$reactspectrumutils = require("@react-spectrum/utils");
var $2H14s$reactariai18n = require("@react-aria/i18n");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ColorEditor", () => $ecaab91cad36cb44$export$5aa54fd21eb08d23);









const $ecaab91cad36cb44$export$5aa54fd21eb08d23 = /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).forwardRef(function ColorEditor(props, ref) {
    let [format, setFormat] = (0, $2H14s$react.useState)('hex');
    let domRef = (0, $2H14s$reactspectrumutils.useDOMRef)(ref);
    let formatter = (0, $2H14s$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($5cb66132bfdb0a33$exports))), '@react-spectrum/color');
    return /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement("div", {
        className: function anonymous(props) {
            let rules = "";
            rules += ' s1-_Ss1-d';
            rules += ' s1-_Zs1-b';
            rules += ' s1-ls1-e';
            rules += ' s1-ms1-e';
            return rules;
        }(),
        ref: domRef
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement("div", {
        className: function anonymous(props) {
            let rules = "";
            rules += ' s1-_Ss1-d';
            rules += ' s1-ls1-e';
            rules += ' s1-ms1-e';
            return rules;
        }()
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $5f016e950c2dc3a6$exports.ColorArea), {
        colorSpace: "hsb",
        xChannel: "saturation",
        yChannel: "brightness"
    }), /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $4537dec0de08c277$exports.ColorSlider), {
        colorSpace: "hsb",
        channel: "hue",
        orientation: "vertical"
    }), !props.hideAlphaChannel && /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $4537dec0de08c277$exports.ColorSlider), {
        channel: "alpha",
        orientation: "vertical"
    })), /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement("div", {
        className: function anonymous(props) {
            let rules = "";
            rules += ' s1-_Ss1-d';
            rules += ' s1-ls1-e';
            rules += ' s1-ms1-e';
            return rules;
        }()
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $2H14s$reactspectrumpicker.Picker), {
        "aria-label": formatter.format('colorFormat'),
        isQuiet: true,
        width: "size-700",
        menuWidth: "size-1000",
        selectedKey: format,
        onSelectionChange: (f)=>setFormat(f)
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $2H14s$reactspectrumpicker.Item), {
        key: "hex"
    }, formatter.format('hex')), /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $2H14s$reactspectrumpicker.Item), {
        key: "rgb"
    }, formatter.format('rgb')), /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $2H14s$reactspectrumpicker.Item), {
        key: "hsl"
    }, formatter.format('hsl')), /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $2H14s$reactspectrumpicker.Item), {
        key: "hsb"
    }, formatter.format('hsb'))), format === 'hex' ? /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $8bdb9bc27ff3debb$exports.ColorField), {
        isQuiet: true,
        width: "size-1000",
        "aria-label": formatter.format('hex')
    }) : (0, $2H14s$reactstatelycolor.getColorChannels)(format).map((channel)=>/*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $8bdb9bc27ff3debb$exports.ColorField), {
            key: channel,
            colorSpace: format,
            channel: channel,
            isQuiet: true,
            width: "size-400",
            flex: true,
            UNSAFE_style: {
                '--spectrum-textfield-min-width': 0
            }
        })), !props.hideAlphaChannel && /*#__PURE__*/ (0, ($parcel$interopDefault($2H14s$react))).createElement((0, $8bdb9bc27ff3debb$exports.ColorField), {
        channel: "alpha",
        isQuiet: true,
        width: "size-400",
        flex: true,
        UNSAFE_style: {
            '--spectrum-textfield-min-width': 0
        }
    })));
});


//# sourceMappingURL=ColorEditor.main.js.map
