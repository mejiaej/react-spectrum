import { AriaAccordionProps } from "@react-types/accordion";
import { ButtonHTMLAttributes } from "react";
import { DOMAttributes, Node, RefObject } from "@react-types/shared";
import { TreeState } from "@react-stately/tree";
/**
 * @deprecated Use useDisclosure from `@react-aria/disclosure` instead.
 */
export interface AccordionAria {
    /** Props for the accordion container element. */
    accordionProps: DOMAttributes;
}
/**
 * @deprecated Use useDisclosure from `@react-aria/disclosure` instead.
 */
export interface AccordionItemAriaProps<T> {
    item: Node<T>;
}
/**
 * @deprecated Use useDisclosure from `@react-aria/disclosure` instead.
 */
export interface AccordionItemAria {
    /** Props for the accordion item button. */
    buttonProps: ButtonHTMLAttributes<HTMLElement>;
    /** Props for the accordion item content element. */
    regionProps: DOMAttributes;
}
/**
 * @deprecated Use useDisclosure from `@react-aria/disclosure` instead.
 */
export function useAccordionItem<T>(props: AccordionItemAriaProps<T>, state: TreeState<T>, ref: RefObject<HTMLButtonElement | null>): AccordionItemAria;
/**
 * @deprecated Use useDisclosure from `@react-aria/disclosure` instead.
 */
export function useAccordion<T>(props: AriaAccordionProps<T>, state: TreeState<T>, ref: RefObject<HTMLDivElement | null>): AccordionAria;
export type { AriaAccordionProps } from '@react-types/accordion';

//# sourceMappingURL=types.d.ts.map
