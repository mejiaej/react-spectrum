import { AriaLabelingProps, DisabledBehavior, DOMProps, DOMRef, Key, SpectrumSelectionProps, StyleProps } from "@react-types/shared";
import { ColumnSize, TableProps, SpectrumColumnProps } from "@react-types/table";
import { DragAndDropHooks } from "@react-spectrum/dnd";
import { JSX, ReactElement } from "react";
export interface SpectrumTableProps<T> extends TableProps<T>, SpectrumSelectionProps, DOMProps, AriaLabelingProps, StyleProps {
    /**
     * Sets the amount of vertical padding within each cell.
     * @default 'regular'
     */
    density?: 'compact' | 'regular' | 'spacious';
    /**
     * Sets the overflow behavior for the cell contents.
     * @default 'truncate'
     */
    overflowMode?: 'wrap' | 'truncate';
    /** Whether the TableView should be displayed with a quiet style. */
    isQuiet?: boolean;
    /** Sets what the TableView should render when there is no content to display. */
    renderEmptyState?: () => JSX.Element;
    /**
     * Whether `disabledKeys` applies to all interactions, or only selection.
     * @default "selection"
     */
    disabledBehavior?: DisabledBehavior;
    /** Handler that is called when a user performs an action on a row. */
    onAction?: (key: Key) => void;
    /**
     * Handler that is called when a user starts a column resize.
     */
    onResizeStart?: (widths: Map<Key, ColumnSize>) => void;
    /**
     * Handler that is called when a user performs a column resize.
     * Can be used with the width property on columns to put the column widths into
     * a controlled state.
     */
    onResize?: (widths: Map<Key, ColumnSize>) => void;
    /**
     * Handler that is called after a user performs a column resize.
     * Can be used to store the widths of columns for another future session.
     */
    onResizeEnd?: (widths: Map<Key, ColumnSize>) => void;
    /**
     * The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the TableView.
     * @version beta
     */
    dragAndDropHooks?: DragAndDropHooks['dragAndDropHooks'];
    /**
     * Whether the TableView should support expandable rows. Requires the feature flag to be enabled first, see https://react-spectrum.adobe.com/react-spectrum/TableView.html#expandable-rows.
     * @version alpha
     * @private
     */
    UNSTABLE_allowsExpandableRows?: boolean;
    /**
     * The currently expanded keys in the collection (controlled). Requires the feature flag to be
     * enabled along with UNSTABLE_allowsExpandableRows, see https://react-spectrum.adobe.com/react-spectrum/TableView.html#expandable-rows.
     * @version alpha
     * @private
     */
    UNSTABLE_expandedKeys?: 'all' | Iterable<Key>;
    /**
     * The initial expanded keys in the collection (uncontrolled). Requires the feature flag to be
     * enabled along with UNSTABLE_allowsExpandableRows, see https://react-spectrum.adobe.com/react-spectrum/TableView.html#expandable-rows.
     * @version alpha
     * @private
     */
    UNSTABLE_defaultExpandedKeys?: 'all' | Iterable<Key>;
    /**
     * Handler that is called when items are expanded or collapsed. Requires the feature flag to be
     * enabled along with UNSTABLE_allowsExpandableRows, see https://react-spectrum.adobe.com/react-spectrum/TableView.html#expandable-rows.
     * @version alpha
     * @private
     */
    UNSTABLE_onExpandedChange?: (keys: Set<Key>) => any;
}
/**
 * Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.
 */
export const TableView: <T>(props: SpectrumTableProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
export const Column: <T>(props: SpectrumColumnProps<T>) => JSX.Element;
export { TableHeader, TableBody, Section, Row, Cell } from '@react-stately/table';
export type { SpectrumColumnProps, TableHeaderProps, TableBodyProps, RowProps, CellProps } from '@react-types/table';

//# sourceMappingURL=types.d.ts.map
