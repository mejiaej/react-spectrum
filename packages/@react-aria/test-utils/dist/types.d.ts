import { pointerKey } from "@testing-library/user-event/system/pointer/shared";
interface ComboBoxOptions extends UserOpts, BaseTesterOpts {
    user?: any;
    trigger?: HTMLElement;
}
declare class ComboBoxTester {
    constructor(opts: ComboBoxOptions);
    setInteractionType: (type: UserOpts["interactionType"]) => void;
    open: (opts?: {
        triggerBehavior?: "focus" | "manual";
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    selectOption: (opts?: {
        option?: HTMLElement;
        optionText?: string;
        triggerBehavior?: "focus" | "manual";
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    close: () => Promise<void>;
    get combobox(): HTMLElement;
    get trigger(): HTMLElement | undefined;
    get listbox(): HTMLElement | undefined;
    options: (opts?: {
        element?: HTMLElement;
    }) => HTMLElement[] | never[];
    get sections(): HTMLElement[];
    get focusedOption(): HTMLElement | null | undefined;
}
interface GridListOptions extends UserOpts, BaseTesterOpts {
    user?: any;
}
declare class GridListTester {
    constructor(opts: GridListOptions);
    setInteractionType: (type: UserOpts["interactionType"]) => void;
    toggleRowSelection: (opts?: {
        index?: number;
        text?: string;
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    findRow: (opts: {
        index?: number;
        text?: string;
    }) => any;
    triggerRowAction: (opts: {
        index?: number;
        text?: string;
        needsDoubleClick?: boolean;
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    get gridlist(): HTMLElement;
    get rows(): HTMLElement[];
    get selectedRows(): HTMLElement[];
    cells: (opts?: {
        element?: HTMLElement;
    }) => HTMLElement[];
}
interface MenuOptions extends UserOpts, BaseTesterOpts {
    user?: any;
    isSubmenu?: boolean;
}
declare class MenuTester {
    constructor(opts: MenuOptions);
    setInteractionType: (type: UserOpts["interactionType"]) => void;
    open: (opts?: {
        needsLongPress?: boolean;
        interactionType?: UserOpts["interactionType"];
        direction?: "up" | "down";
    }) => Promise<void>;
    selectOption: (opts: {
        option?: HTMLElement;
        optionText?: string;
        menuSelectionMode?: "single" | "multiple";
        needsLongPress?: boolean;
        closesOnSelect?: boolean;
        interactionType?: UserOpts["interactionType"];
        keyboardActivation?: "Space" | "Enter";
    }) => Promise<void>;
    openSubmenu: (opts: {
        submenuTrigger?: HTMLElement;
        submenuTriggerText?: string;
        needsLongPress?: boolean;
        interactionType?: UserOpts["interactionType"];
    }) => Promise<MenuTester | null>;
    keyboardNavigateToOption: (opts: {
        option: HTMLElement;
    }) => Promise<void>;
    close: () => Promise<void>;
    get trigger(): HTMLElement;
    get menu(): HTMLElement | null | undefined;
    get options(): HTMLElement[];
    get sections(): HTMLElement[];
    get submenuTriggers(): HTMLElement[];
}
interface SelectOptions extends UserOpts, BaseTesterOpts {
    user?: any;
}
declare class SelectTester {
    constructor(opts: SelectOptions);
    setInteractionType: (type: UserOpts["interactionType"]) => void;
    open: (opts?: {
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    selectOption: (opts: {
        optionText: string;
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    close: () => Promise<void>;
    get trigger(): HTMLElement;
    get listbox(): HTMLElement | null | undefined;
    get options(): HTMLElement[];
    get sections(): HTMLElement[];
}
interface TableOptions extends UserOpts, BaseTesterOpts {
    user?: any;
    advanceTimer: UserOpts['advanceTimer'];
}
declare class TableTester {
    constructor(opts: TableOptions);
    setInteractionType: (type: UserOpts["interactionType"]) => void;
    toggleRowSelection: (opts?: {
        index?: number;
        text?: string;
        needsLongPress?: boolean;
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    toggleSort: (opts?: {
        index?: number;
        text?: string;
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    triggerRowAction: (opts?: {
        index?: number;
        text?: string;
        needsDoubleClick?: boolean;
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    toggleSelectAll: (opts?: {
        interactionType?: UserOpts["interactionType"];
    }) => Promise<void>;
    findRow: (opts?: {
        index?: number;
        text?: string;
    }) => any;
    findCell: (opts: {
        text: string;
    }) => HTMLElement;
    get table(): HTMLElement;
    get rowGroups(): HTMLElement[];
    get columns(): HTMLElement[];
    get rows(): HTMLElement[];
    get selectedRows(): HTMLElement[];
    get rowHeaders(): HTMLElement[];
    get cells(): HTMLElement[];
}
export interface UserOpts {
    interactionType?: 'mouse' | 'touch' | 'keyboard';
    advanceTimer?: (time?: number) => void | Promise<unknown>;
}
interface BaseTesterOpts {
    root: HTMLElement;
}
declare let keyToUtil: {
    readonly Select: typeof SelectTester;
    readonly Table: typeof TableTester;
    readonly Menu: typeof MenuTester;
    readonly ComboBox: typeof ComboBoxTester;
    readonly GridList: typeof GridListTester;
};
type PatternNames = keyof typeof keyToUtil;
type ObjectType<T> = T extends 'Select' ? SelectTester : T extends 'Table' ? TableTester : T extends 'Menu' ? MenuTester : T extends 'ComboBox' ? ComboBoxTester : T extends 'GridList' ? GridListTester : never;
type ObjectOptionsTypes<T> = T extends 'Select' ? SelectOptions : T extends 'Table' ? TableOptions : T extends 'Menu' ? MenuOptions : T extends 'ComboBox' ? ComboBoxOptions : T extends 'GridList' ? GridListOptions : never;
export class User {
    user: any;
    interactionType: UserOpts['interactionType'];
    advanceTimer: UserOpts['advanceTimer'];
    constructor(opts?: UserOpts);
    createTester<T extends PatternNames>(patternName: T, opts: ObjectOptionsTypes<T>): ObjectType<T>;
}
/**
 * Simulates a "long press" event on a element.
 * @param opts - Options for the long press.
 * @param opts.element - Element to long press.
 * @param opts.advanceTimer - Function that when called advances the timers in your test suite by a specific amount of time(ms).
 * @param opts.pointeropts - Options to pass to the simulated event. Defaults to mouse. See https://testing-library.com/docs/dom-testing-library/api-events/#fireevent for more info.
 */
export function triggerLongPress(opts: {
    element: HTMLElement;
    advanceTimer: (time?: number) => void | Promise<unknown>;
    pointerOpts?: {};
}): Promise<void>;
/**
 * Enables reading pageX/pageY from fireEvent.mouse*(..., {pageX: ..., pageY: ...}).
 */
export function installMouseEvent(): void;
export function installPointerEvent(): void;
export let pointerMap: pointerKey[];

//# sourceMappingURL=types.d.ts.map
