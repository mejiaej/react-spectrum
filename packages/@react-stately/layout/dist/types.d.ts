import { DropTarget, DropTargetDelegate, ItemDropTarget, Key, Node, Collection } from "@react-types/shared";
import { Layout, LayoutInfo, Rect, Size, InvalidationContext } from "@react-stately/virtualizer";
import { GridNode } from "@react-types/grid";
import { TableCollection } from "@react-types/table";
export interface GridLayoutOptions {
    /**
     * The minimum item size.
     * @default 200 x 200
     */
    minItemSize?: Size;
    /**
     * The maximum item size.
     * @default Infinity
     */
    maxItemSize?: Size;
    /**
     * The minimum space required between items.
     * @default 18 x 18
     */
    minSpace?: Size;
    /**
     * The maximum number of columns.
     * @default Infinity
     */
    maxColumns?: number;
    /**
     * The thickness of the drop indicator.
     * @default 2
     */
    dropIndicatorThickness?: number;
}
export class GridLayout<T, O = any> extends Layout<Node<T>, O> implements DropTargetDelegate {
    protected minItemSize: Size;
    protected maxItemSize: Size;
    protected minSpace: Size;
    protected maxColumns: number;
    protected dropIndicatorThickness: number;
    protected itemSize: Size;
    protected numColumns: number;
    protected horizontalSpacing: number;
    protected layoutInfos: LayoutInfo[];
    constructor(options: GridLayoutOptions);
    update(): void;
    getVisibleLayoutInfos(rect: Rect): LayoutInfo[];
    protected getIndexAtPoint(x: number, y: number): number;
    getLayoutInfo(key: Key): LayoutInfo | null;
    protected getLayoutInfoForNode(node: Node<T>): LayoutInfo;
    getContentSize(): Size;
    getDropTargetFromPoint(x: number, y: number, isValidDropTarget: (target: DropTarget) => boolean): DropTarget;
    getDropTargetLayoutInfo(target: ItemDropTarget): LayoutInfo;
}
export interface ListLayoutOptions {
    /** The fixed height of a row in px. */
    rowHeight?: number;
    /** The estimated height of a row, when row heights are variable. */
    estimatedRowHeight?: number;
    /** The fixed height of a section header in px. */
    headingHeight?: number;
    /** The estimated height of a section header, when the height is variable. */
    estimatedHeadingHeight?: number;
    /** The fixed height of a loader element in px. This loader is specifically for
     * "load more" elements rendered when loading more rows at the root level or inside nested row/sections.
     */
    loaderHeight?: number;
    /** The thickness of the drop indicator. */
    dropIndicatorThickness?: number;
}
export interface LayoutNode {
    node?: Node<unknown>;
    layoutInfo: LayoutInfo;
    children?: LayoutNode[];
    validRect: Rect;
    index?: number;
}
/**
 * The ListLayout class is an implementation of a virtualizer {@link Layout}.
 * To configure a ListLayout, you can use the properties to define the
 * layouts and/or use the method for defining indentation.
 * The {@link ListKeyboardDelegate} extends the existing virtualizer
 * delegate with an additional method to do this (it uses the same delegate object as
 * the virtualizer itself).
 */
export class ListLayout<T, O = any> extends Layout<Node<T>, O> implements DropTargetDelegate {
    protected rowHeight: number | null;
    protected estimatedRowHeight: number | null;
    protected headingHeight: number | null;
    protected estimatedHeadingHeight: number | null;
    protected loaderHeight: number | null;
    protected dropIndicatorThickness: number;
    protected layoutNodes: Map<Key, LayoutNode>;
    protected contentSize: Size;
    protected lastCollection: Collection<Node<T>> | null;
    protected rootNodes: LayoutNode[];
    /** The rectangle containing currently valid layout infos. */
    protected validRect: Rect;
    /** The rectangle of requested layout infos so far. */
    protected requestedRect: Rect;
    /**
     * Creates a new ListLayout with options. See the list of properties below for a description
     * of the options that can be provided.
     */
    constructor(options?: ListLayoutOptions);
    protected get collection(): Collection<Node<T>>;
    getLayoutInfo(key: Key): LayoutInfo | null;
    getVisibleLayoutInfos(rect: Rect): LayoutInfo[];
    protected layoutIfNeeded(rect: Rect): void;
    protected isVisible(node: LayoutNode, rect: Rect): boolean;
    protected shouldInvalidateEverything(invalidationContext: InvalidationContext<O>): boolean;
    update(invalidationContext: InvalidationContext<O>): void;
    protected buildCollection(y?: number): LayoutNode[];
    protected isValid(node: Node<T>, y: number): boolean | undefined;
    protected buildChild(node: Node<T>, x: number, y: number, parentKey: Key | null): LayoutNode;
    protected buildNode(node: Node<T>, x: number, y: number): LayoutNode;
    protected buildLoader(node: Node<T>, x: number, y: number): LayoutNode;
    protected buildSection(node: Node<T>, x: number, y: number): LayoutNode;
    protected buildSectionHeader(node: Node<T>, x: number, y: number): LayoutNode;
    protected buildItem(node: Node<T>, x: number, y: number): LayoutNode;
    updateItemSize(key: Key, size: Size): boolean;
    getContentSize(): Size;
    getDropTargetFromPoint(x: number, y: number, isValidDropTarget: (target: DropTarget) => boolean): DropTarget | null;
    getDropTargetLayoutInfo(target: ItemDropTarget): LayoutInfo;
}
export interface TableLayoutProps {
    columnWidths?: Map<Key, number>;
}
export class TableLayout<T, O extends TableLayoutProps = TableLayoutProps> extends ListLayout<T, O> {
    protected lastCollection: TableCollection<T> | null;
    constructor(options: ListLayoutOptions);
    protected get collection(): TableCollection<T>;
    update(invalidationContext: InvalidationContext<O>): void;
    protected buildCollection(): LayoutNode[];
    protected buildTableHeader(): LayoutNode;
    protected buildHeaderRow(headerRow: GridNode<T>, x: number, y: number): LayoutNode;
    protected getEstimatedRowHeight(): number;
    protected buildColumn(node: GridNode<T>, x: number, y: number): LayoutNode;
    protected isStickyColumn(node: GridNode<T>): boolean;
    protected buildBody(y: number): LayoutNode;
    protected buildNode(node: GridNode<T>, x: number, y: number): LayoutNode;
    protected buildRow(node: GridNode<T>, x: number, y: number): LayoutNode;
    protected buildCell(node: GridNode<T>, x: number, y: number): LayoutNode;
    getVisibleLayoutInfos(rect: Rect): LayoutInfo[];
    getDropTargetFromPoint(x: number, y: number, isValidDropTarget: (target: DropTarget) => boolean): DropTarget | null;
    getDropTargetLayoutInfo(target: ItemDropTarget): LayoutInfo;
}

//# sourceMappingURL=types.d.ts.map
