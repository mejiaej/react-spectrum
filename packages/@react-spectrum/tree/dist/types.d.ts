import { AriaTreeGridListProps } from "@react-aria/tree";
import { TreeItemProps } from "react-aria-components";
import { DOMRef, Expandable, Key, SpectrumSelectionProps, StyleProps } from "@react-types/shared";
import { JSX, ReactElement, ReactNode } from "react";
export interface SpectrumTreeViewProps<T> extends Omit<AriaTreeGridListProps<T>, 'children'>, StyleProps, SpectrumSelectionProps, Expandable {
    /** Provides content to display when there are no items in the tree. */
    renderEmptyState?: () => JSX.Element;
    /**
     * Handler that is called when a user performs an action on an item. The exact user event depends on
     * the collection's `selectionStyle` prop and the interaction modality.
     */
    onAction?: (key: Key) => void;
    /**
     * The contents of the tree.
     */
    children?: ReactNode | ((item: T) => ReactNode);
}
export interface SpectrumTreeViewItemProps<T extends object = object> extends Omit<TreeItemProps, 'className' | 'style' | 'value' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange'> {
    /** Rendered contents of the tree item or child items. */
    children: ReactNode;
    /** Whether this item has children, even if not loaded yet. */
    hasChildItems?: boolean;
    /** A list of child tree item objects used when dynamically rendering the tree item children. */
    childItems?: Iterable<T>;
}
/**
 * A tree view provides users with a way to navigate nested hierarchical information.
 */
export const TreeView: <T>(props: SpectrumTreeViewProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
export const TreeViewItem: <T extends object>(props: SpectrumTreeViewItemProps<T>) => JSX.Element;

//# sourceMappingURL=types.d.ts.map
