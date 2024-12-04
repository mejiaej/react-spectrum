module.exports = {
    "actions": `M\u{171}veletek`,
    "actionsAvailable": `M\u{171}veletek \xe1llnak rendelkez\xe9sre.`,
    "clearSelection": `Kijel\xf6l\xe9s t\xf6rl\xe9se`,
    "selected": (args, formatter)=>`${formatter.plural(args.count, {
            "=0": `Egy sincs kijel\xf6lve`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lve`
        })}`,
    "selectedAll": `Mind kijel\xf6lve`
};


//# sourceMappingURL=hu-HU.main.js.map
