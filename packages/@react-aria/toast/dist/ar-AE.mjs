var $ff9177efc58547ad$exports = {};
$ff9177efc58547ad$exports = {
    "close": `\u{625}\u{63A}\u{644}\u{627}\u{642}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{625}\u{634}\u{639}\u{627}\u{631}`,
            other: ()=>`${formatter.number(args.count)} \u{625}\u{634}\u{639}\u{627}\u{631}\u{627}\u{62A}`
        })}.`
};


export {$ff9177efc58547ad$exports as default};
//# sourceMappingURL=ar-AE.module.js.map
