import { InvalidationContext } from "@react-stately/virtualizer";
import { LayoutNode, ListLayout, ListLayoutOptions } from "@react-stately/layout";
import { Node, AriaLabelingProps, DOMProps, FocusStrategy, RefObject, StyleProps, DOMRef } from "@react-types/shared";
import { AriaListBoxOptions } from "@react-aria/listbox";
import { ListState } from "@react-stately/list";
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { SpectrumListBoxProps } from "@react-types/listbox";
interface ListBoxLayoutProps {
    isLoading?: boolean;
}
interface ListBoxLayoutOptions extends ListLayoutOptions {
    placeholderHeight: number;
    padding: number;
}
declare class ListBoxLayout<T> extends ListLayout<T, ListBoxLayoutProps> {
    constructor(opts: ListBoxLayoutOptions);
    update(invalidationContext: InvalidationContext<ListBoxLayoutProps>): void;
    protected buildCollection(): LayoutNode[];
    protected buildSection(node: Node<T>, x: number, y: number): LayoutNode;
}
interface ListBoxBaseProps<T> extends AriaListBoxOptions<T>, DOMProps, AriaLabelingProps, StyleProps {
    layout: ListBoxLayout<T>;
    state: ListState<T>;
    autoFocus?: boolean | FocusStrategy;
    shouldFocusWrap?: boolean;
    shouldSelectOnPressUp?: boolean;
    focusOnPointerEnter?: boolean;
    domProps?: HTMLAttributes<HTMLElement>;
    disallowEmptySelection?: boolean;
    shouldUseVirtualFocus?: boolean;
    isLoading?: boolean;
    showLoadingSpinner?: boolean;
    onLoadMore?: () => void;
    renderEmptyState?: () => ReactNode;
    onScroll?: () => void;
}
/** @private */
export function useListBoxLayout<T>(): ListBoxLayout<T>;
/** @private */
export const ListBoxBase: <T>(props: ListBoxBaseProps<T> & {
    ref?: RefObject<HTMLDivElement | null>;
}) => ReactElement;
/**
 * A list of options that can allow selection of one or more.
 */
export const ListBox: <T>(props: SpectrumListBoxProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
export { Item, Section } from '@react-stately/collections';
export type { SpectrumListBoxProps } from '@react-types/listbox';

//# sourceMappingURL=types.d.ts.map
