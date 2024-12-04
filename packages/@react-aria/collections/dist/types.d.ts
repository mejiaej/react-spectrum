import { Collection as _Collection1, Key, Node } from "@react-types/shared";
import React, { ReactElement, ReactNode, ForwardedRef, JSX } from "react";
/** An immutable object representing a Node in a Collection. */
export class CollectionNode<T> implements Node<T> {
    readonly type: string;
    readonly key: Key;
    readonly value: T | null;
    readonly level: number;
    readonly hasChildNodes: boolean;
    readonly rendered: ReactNode;
    readonly textValue: string;
    readonly 'aria-label'?: string;
    readonly index: number;
    readonly parentKey: Key | null;
    readonly prevKey: Key | null;
    readonly nextKey: Key | null;
    readonly firstChildKey: Key | null;
    readonly lastChildKey: Key | null;
    readonly props: any;
    readonly render?: (node: Node<any>) => ReactElement;
    constructor(type: string, key: Key);
    get childNodes(): Iterable<Node<T>>;
    clone(): CollectionNode<T>;
}
/**
 * An immutable Collection implementation. Updates are only allowed
 * when it is not marked as frozen. This can be subclassed to implement
 * custom collection behaviors.
 */
export class BaseCollection<T> implements _Collection1<Node<T>> {
    get size(): number;
    getKeys(): IterableIterator<Key>;
    [Symbol.iterator](): Generator<Node<T>, void, unknown>;
    getChildren(key: Key): Iterable<Node<T>>;
    getKeyBefore(key: Key): Key | null;
    getKeyAfter(key: Key): Key | null;
    getFirstKey(): Key | null;
    getLastKey(): Key | null;
    getItem(key: Key): Node<T> | null;
    at(): Node<T>;
    clone(): this;
    addNode(node: CollectionNode<T>): void;
    removeNode(key: Key): void;
    commit(firstKey: Key | null, lastKey: Key | null, isSSR?: boolean): void;
}
export interface CachedChildrenOptions<T> {
    /** Item objects in the collection. */
    items?: Iterable<T>;
    /** The contents of the collection. */
    children?: ReactNode | ((item: T) => ReactNode);
    /** Values that should invalidate the item cache when using dynamic collections. */
    dependencies?: any[];
    /** A scope to prepend to all child item ids to ensure they are unique. */
    idScope?: Key;
    /** Whether to add `id` and `value` props to all child items. */
    addIdAndValue?: boolean;
}
/**
 * Maps over a list of items and renders React elements for them. Each rendered item is
 * cached based on object identity, and React keys are generated from the `key` or `id` property.
 */
export function useCachedChildren<T extends object>(props: CachedChildrenOptions<T>): ReactNode;
/** Creates a component that forwards its ref and returns null if it is in a hidden subtree. */
export function createHideableComponent<T, P = {}>(fn: (props: P, ref: React.Ref<T>) => ReactElement | null): (props: P & React.RefAttributes<T>) => ReactElement | null;
/** Returns whether the component is in a hidden subtree. */
export function useIsHidden(): boolean;
export interface CollectionBuilderProps<C extends BaseCollection<object>> {
    content: ReactNode;
    children: (collection: C) => ReactNode;
    createCollection?: () => C;
}
/**
 * Builds a `Collection` from the children provided to the `content` prop, and passes it to the child render prop function.
 */
export function CollectionBuilder<C extends BaseCollection<object>>(props: CollectionBuilderProps<C>): ReactElement;
export function createLeafComponent<T extends object, P extends object, E extends Element>(type: string, render: (props: P, ref: ForwardedRef<E>) => ReactElement): (props: P & React.RefAttributes<T>) => ReactElement | null;
export function createLeafComponent<T extends object, P extends object, E extends Element>(type: string, render: (props: P, ref: ForwardedRef<E>, node: Node<T>) => ReactElement): (props: P & React.RefAttributes<T>) => ReactElement | null;
export function createBranchComponent<T extends object, P extends {
    children?: any;
}, E extends Element>(type: string, render: (props: P, ref: ForwardedRef<E>, node: Node<T>) => ReactElement, useChildren?: (props: P) => ReactNode): (props: P & React.RefAttributes<E>) => React.ReactElement | null;
export interface CollectionProps<T> extends CachedChildrenOptions<T> {
}
/** A Collection renders a list of items, automatically managing caching and keys. */
export function Collection<T extends object>(props: CollectionProps<T>): JSX.Element;

//# sourceMappingURL=types.d.ts.map
