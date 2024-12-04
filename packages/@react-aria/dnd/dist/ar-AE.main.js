module.exports = {
    "dragDescriptionKeyboard": `\u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionKeyboardAlt": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + Enter \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionLongPress": `\u{627}\u{636}\u{63A}\u{637} \u{628}\u{627}\u{633}\u{62A}\u{645}\u{631}\u{627}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionTouch": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionVirtual": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragItem": (args)=>`\u{627}\u{633}\u{62D}\u{628} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{627}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`,
            other: ()=>`${formatter.number(args.count)} \u{639}\u{646}\u{627}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}\u{629}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Enter \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D}\u{64A} Alt + Enter \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{628}\u{627}\u{633}\u{62A}\u{645}\u{631}\u{627}\u{631} \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragStartedKeyboard": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} Tab \u{644}\u{644}\u{627}\u{646}\u{62A}\u{642}\u{627}\u{644} \u{625}\u{644}\u{649} \u{645}\u{648}\u{636}\u{639} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} Escape \u{644}\u{644}\u{625}\u{644}\u{63A}\u{627}\u{621}.`,
    "dragStartedTouch": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{62A}\u{642}\u{644} \u{625}\u{644}\u{649} \u{645}\u{648}\u{636}\u{639} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dragStartedVirtual": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{62A}\u{642}\u{644} \u{625}\u{644}\u{649} \u{645}\u{643}\u{627}\u{646} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{646}\u{642}\u{631} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropCanceled": `\u{62A}\u{645} \u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropComplete": `\u{627}\u{643}\u{62A}\u{645}\u{644} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropDescriptionKeyboard": `\u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}. \u{627}\u{636}\u{63A}\u{637} Escape \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dropDescriptionTouch": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropDescriptionVirtual": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropIndicator": `\u{645}\u{624}\u{634}\u{631} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}`,
    "dropOnItem": (args)=>`\u{625}\u{641}\u{644}\u{627}\u{62A} ${args.itemText}`,
    "dropOnRoot": `\u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}`,
    "endDragKeyboard": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "endDragTouch": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "endDragVirtual": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{642}\u{631} \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "insertAfter": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{628}\u{639}\u{62F} ${args.itemText}`,
    "insertBefore": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{642}\u{628}\u{644} ${args.itemText}`,
    "insertBetween": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{628}\u{64A}\u{646} ${args.beforeItemText} \u{648} ${args.afterItemText}`
};


//# sourceMappingURL=ar-AE.main.js.map
