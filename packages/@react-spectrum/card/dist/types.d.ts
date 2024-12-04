import { Direction, Key, KeyboardDelegate, Node, Orientation, DOMRef, DOMRefValue, ItemProps } from "@react-types/shared";
import { GridCollection } from "@react-stately/grid";
import { InvalidationContext, Layout, LayoutInfo, Rect, Size } from "@react-stately/virtualizer";
import { Scale } from "@react-types/provider";
import { ReactElement, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";
import { SpectrumCardViewProps, SpectrumCardProps } from "@react-types/card";
interface BaseLayoutOptions {
    collator?: Intl.Collator;
    scale?: Scale;
    /**
     * The margin around the grid view between the edges and the items.
     * @default 24
     */
    margin?: number;
}
interface CardViewLayoutOptions {
    isLoading: boolean;
    direction: Direction;
}
declare class BaseLayout<T> extends Layout<Node<T>, CardViewLayoutOptions> implements KeyboardDelegate {
    protected contentSize: Size;
    protected layoutInfos: Map<Key, LayoutInfo>;
    protected collator: Intl.Collator;
    protected lastCollection: GridCollection<T>;
    collection: GridCollection<T>;
    isLoading: boolean;
    disabledKeys: Set<Key>;
    direction: Direction;
    scale: Scale;
    margin: number;
    constructor(options?: BaseLayoutOptions);
    update(invalidationContext: InvalidationContext<CardViewLayoutOptions>): void;
    buildCollection(invalidationContext?: InvalidationContext): void;
    getContentSize(): Size;
    getLayoutInfo(key: Key): LayoutInfo;
    getVisibleLayoutInfos(rect: Rect, excludePersistedKeys?: boolean): LayoutInfo[];
    isVisible(layoutInfo: LayoutInfo, rect: Rect, excludePersistedKeys: boolean): boolean;
    _findClosestLayoutInfo(target: Rect, rect: Rect): null;
    _findClosest(target: Rect, rect: Rect): null;
    getKeyBelow(key: Key): Key | undefined;
    getKeyAbove(key: Key): Key | undefined;
    getKeyRightOf(key: Key): Key | undefined;
    getKeyLeftOf(key: Key): Key | undefined;
    getFirstKey(): Key | undefined;
    getLastKey(): Key | undefined;
    getKeyPageAbove(key: Key): Key | undefined;
    getKeyPageBelow(key: Key): Key | undefined;
    getKeyForSearch(search: string, fromKey?: Key): Key | null | undefined;
}
export interface GalleryLayoutOptions extends BaseLayoutOptions {
    /**
     * The the default row height. Note this must be larger than the min item height.
     * @default 208
     */
    idealRowHeight?: number;
    /**
     * The spacing between items.
     * @default 18 x 18
     */
    itemSpacing?: Size;
    /**
     * The vertical padding for an item.
     * @default 78
     */
    itemPadding?: number;
    /**
     * Minimum size for a item in the grid.
     * @default 136 x 136
     */
    minItemSize?: Size;
    /**
     * Target for adding extra weight to elements during linear partitioning. Anything with an aspect ratio smaler than this value
     * will be targeted.
     * @type {number}
     */
    threshold?: number;
}
export class GalleryLayout<T> extends BaseLayout<T> {
    protected idealRowHeight: number;
    protected itemSpacing: Size;
    itemPadding: number;
    protected minItemSize: Size;
    protected threshold: number;
    constructor(options?: GalleryLayoutOptions);
    get layoutType(): string;
    /**
     * Takes a row of widths and if there are any widths smaller than the min-width, leech width starting from
     * the widest in the row until it can't give anymore, then move to the second widest and so forth.
     * Do this until all assets meet the min-width.
     * */
    _distributeWidths(widths: any): boolean;
    buildCollection(): void;
}
export interface GridLayoutOptions extends BaseLayoutOptions {
    /**
     * The minimum item size.
     * @default 208 x 208 for horizontal card orientation. 102 x 102 for vertical card orientation.
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
     * The additional padding along the card's main axis. Affects the sizing of the content area following the card image.
     * @default 95
     */
    itemPadding?: number;
    /**
     * The orientation of the cards withn the grid.
     * @default vertical
     */
    cardOrientation?: Orientation;
}
export class GridLayout<T> extends BaseLayout<T> {
    protected minItemSize: Size;
    protected maxItemSize: Size;
    protected minSpace: Size;
    protected maxColumns: number;
    itemPadding: number;
    cardOrientation: Orientation;
    protected itemSize: Size;
    protected numColumns: number;
    protected numRows: number;
    protected horizontalSpacing: number;
    constructor(options?: GridLayoutOptions);
    get layoutType(): string;
    getIndexAtPoint(x: any, y: any, allowInsertingAtEnd?: boolean): number;
    buildCollection(): void;
    buildChild(node: Node<T>, y: number, index: number): LayoutInfo;
    getKeyBelow(key: Key): Key | null | undefined;
    getKeyAbove(key: Key): Key | null | undefined;
}
export interface WaterfallLayoutOptions extends BaseLayoutOptions {
    /**
     * The minimum item size.
     * @default 240 x 136
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
}
export class WaterfallLayout<T> extends BaseLayout<T> implements KeyboardDelegate {
    protected minItemSize: Size;
    protected maxItemSize: Size;
    protected minSpace: Size;
    protected maxColumns: number;
    protected numColumns: number;
    protected itemWidth: number;
    protected horizontalSpacing: number;
    constructor(options?: WaterfallLayoutOptions);
    get layoutType(): string;
    buildCollection(invalidationContext: InvalidationContext): void;
    updateItemSize(key: Key, size: Size): boolean;
    getNextColumnIndex(columnHeights: any): number;
    getClosestRight(key: Key): Key | undefined;
    getClosestLeft(key: Key): Key | undefined;
    getKeyRightOf(key: Key): Key | undefined;
    getKeyLeftOf(key: Key): Key | undefined;
}
/**
 * TODO: Add description of component here.
 */
export const CardView: <T>(props: SpectrumCardViewProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
export let Card: ForwardRefExoticComponent<ItemProps<SpectrumCardProps> & PropsWithoutRef<SpectrumCardProps> & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export type { SpectrumCardViewProps } from '@react-types/card';

//# sourceMappingURL=types.d.ts.map
