var $f5e3df4dc8aa7b54$exports = {};
$f5e3df4dc8aa7b54$exports = {
    "deselectedItem": (args)=>`${args.item} nepasirinkta.`,
    "longPressToSelect": `Nor\u{117}dami \u{12F}jungti pasirinkimo re\u{17E}im\u{105}, paspauskite ir palaikykite.`,
    "select": `Pasirinkti`,
    "selectedAll": `Pasirinkti visi elementai.`,
    "selectedCount": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Nepasirinktas n\u{117} vienas elementas`,
            one: ()=>`Pasirinktas ${formatter.number(args.count)} elementas`,
            other: ()=>`Pasirinkta element\u{173}: ${formatter.number(args.count)}`
        })}.`,
    "selectedItem": (args)=>`Pasirinkta: ${args.item}.`
};


export {$f5e3df4dc8aa7b54$exports as default};
//# sourceMappingURL=lt-LT.module.js.map
