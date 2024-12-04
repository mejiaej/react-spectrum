import React, { JSX, ReactElement } from "react";
import { SpectrumMenuTriggerProps, SpectrumMenuProps, SpectrumActionMenuProps } from "@react-types/menu";
import { DOMRefValue, Key, DOMRef, FocusableRef } from "@react-types/shared";
/**
 * The MenuTrigger serves as a wrapper around a Menu and its associated trigger,
 * linking the Menu's open state with the trigger's press state.
 */
export const MenuTrigger: React.ForwardRefExoticComponent<SpectrumMenuTriggerProps & React.RefAttributes<DOMRefValue<HTMLElement>>>;
interface SubmenuTriggerProps {
    /**
     * The contents of the SubmenuTrigger - an Item and a Menu.
     */
    children: ReactElement<any>[];
    targetKey: Key;
}
export interface SpectrumSubmenuTriggerProps extends Omit<SubmenuTriggerProps, 'targetKey'> {
}
export let SubmenuTrigger: (props: SpectrumSubmenuTriggerProps) => JSX.Element;
/**
 * Menus display a list of actions or options that a user can choose.
 */
export const Menu: <T>(props: SpectrumMenuProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
/**
 * ActionMenu combines an ActionButton with a Menu for simple "more actions" use cases.
 */
export const ActionMenu: <T>(props: SpectrumActionMenuProps<T> & {
    ref?: FocusableRef<HTMLButtonElement>;
}) => ReactElement;
interface MenuDialogTriggerProps {
    /** Whether the menu item is currently unavailable. */
    isUnavailable?: boolean;
    /** The triggering Item and the Dialog, respectively. */
    children: [ReactElement, ReactElement];
}
export interface SpectrumMenuDialogTriggerProps extends MenuDialogTriggerProps {
}
export let ContextualHelpTrigger: (props: SpectrumMenuDialogTriggerProps) => JSX.Element;
export { Item, Section } from '@react-stately/collections';
export type { SpectrumActionMenuProps, SpectrumMenuProps, SpectrumMenuTriggerProps } from '@react-types/menu';

//# sourceMappingURL=types.d.ts.map
