import * as React from "react";
import { AbstractComponent2, IProps } from "@blueprintjs/core";
import { ICreateNewItem, IListItemsProps } from "../../common";
export interface IQueryListProps<T> extends IListItemsProps<T> {
    /**
     * Callback invoked when user presses a key, after processing `QueryList`'s own key events
     * (up/down to navigate active item). This callback is passed to `renderer` and (along with
     * `onKeyUp`) can be attached to arbitrary content elements to support keyboard selection.
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
    /**
     * Callback invoked when user releases a key, after processing `QueryList`'s own key events
     * (enter to select active item). This callback is passed to `renderer` and (along with
     * `onKeyDown`) can be attached to arbitrary content elements to support keyboard selection.
     */
    onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
    /**
     * Customize rendering of the component.
     * Receives an object with props that should be applied to elements as necessary.
     */
    renderer: (listProps: IQueryListRendererProps<T>) => JSX.Element;
    /**
     * Whether the list is disabled.
     * @default false
     */
    disabled?: boolean;
}
/**
 * An object describing how to render a `QueryList`.
 * A `QueryList` `renderer` receives this object as its sole argument.
 */
export interface IQueryListRendererProps<T>// Omit `createNewItem`, because it's used strictly for internal tracking.
 extends Pick<IQueryListState<T>, "activeItem" | "filteredItems" | "query">, IProps {
    /**
     * Selection handler that should be invoked when a new item has been chosen,
     * perhaps because the user clicked it.
     */
    handleItemSelect: (item: T, event?: React.SyntheticEvent<HTMLElement>) => void;
    /**
     * Handler that should be invoked when the user pastes one or more values.
     *
     * This callback will use `itemPredicate` with `exactMatch=true` to find a
     * subset of `items` exactly matching the pasted `values` provided, then it
     * will invoke `onItemsPaste` with those found items. Each pasted value that
     * does not exactly match an item will be ignored.
     *
     * If creating items is enabled (by providing both `createNewItemFromQuery`
     * and `createNewItemRenderer`), then pasted values that do not exactly
     * match an existing item will emit a new item as created via
     * `createNewItemFromQuery`.
     *
     * If `itemPredicate` returns multiple matching items for a particular query
     * in `queries`, then only the first matching item will be emitted.
     */
    handlePaste: (queries: string[]) => void;
    /**
     * Keyboard handler for up/down arrow keys to shift the active item.
     * Attach this handler to any element that should support this interaction.
     */
    handleKeyDown: React.KeyboardEventHandler<HTMLElement>;
    /**
     * Keyboard handler for enter key to select the active item.
     * Attach this handler to any element that should support this interaction.
     */
    handleKeyUp: React.KeyboardEventHandler<HTMLElement>;
    /**
     * Change handler for query string. Attach this to an input element to allow
     * `QueryList` to control the query.
     */
    handleQueryChange: React.ChangeEventHandler<HTMLInputElement>;
    /** Rendered elements returned from `itemListRenderer` prop. */
    itemList: React.ReactNode;
}
export interface IQueryListState<T> {
    /** The currently focused item (for keyboard interactions). */
    activeItem: T | ICreateNewItem | null;
    /**
     * The item returned from `createNewItemFromQuery(this.state.query)`, cached
     * to avoid continuous reinstantions within `isCreateItemRendered`, where
     * this element will be used to hide the "Create Item" option if its value
     * matches the current `query`.
     */
    createNewItem: T | undefined;
    /** The original `items` array filtered by `itemListPredicate` or `itemPredicate`. */
    filteredItems: T[];
    /** The current query string. */
    query: string;
}
export declare class QueryList<T> extends AbstractComponent2<IQueryListProps<T>, IQueryListState<T>> {
    static displayName: string;
    static defaultProps: {
        disabled: boolean;
        resetOnQuery: boolean;
    };
    static ofType<T>(): new (props: IQueryListProps<T>) => QueryList<T>;
    private itemsParentRef?;
    private refHandlers;
    /**
     * Flag indicating that we should check whether selected item is in viewport
     * after rendering, typically because of keyboard change. Set to `true` when
     * manipulating state in a way that may cause active item to scroll away.
     */
    private shouldCheckActiveItemInViewport;
    /**
     * The item that we expect to be the next selected active item (based on click
     * or key interactions). When scrollToActiveItem = false, used to detect if
     * an unexpected external change to the active item has been made.
     */
    private expectedNextActiveItem;
    constructor(props: IQueryListProps<T>, context?: any);
    render(): JSX.Element;
    componentDidUpdate(prevProps: IQueryListProps<T>): void;
    scrollActiveItemIntoView(): void;
    setQuery(query: string, resetActiveItem?: boolean | undefined, props?: Readonly<IQueryListProps<T>> & Readonly<{
        children?: React.ReactNode;
    }>): void;
    /** default `itemListRenderer` implementation */
    private renderItemList;
    /** wrapper around `itemRenderer` to inject props */
    private renderItem;
    private renderCreateItemMenuItem;
    private getActiveElement;
    private getActiveIndex;
    private getItemsParentPadding;
    private handleItemCreate;
    private handleItemSelect;
    private handlePaste;
    private handleKeyDown;
    private handleKeyUp;
    private handleQueryChange;
    /**
     * Get the next enabled item, moving in the given direction from the start
     * index. A `null` return value means no suitable item was found.
     * @param direction amount to move in each iteration, typically +/-1
     * @param startIndex item to start iteration
     */
    private getNextActiveItem;
    private setActiveItem;
    private isCreateItemRendered;
    private canCreateItems;
    private wouldCreatedItemMatchSomeExistingItem;
}
/**
 * Get the next enabled item, moving in the given direction from the start
 * index. A `null` return value means no suitable item was found.
 * @param items the list of items
 * @param itemDisabled callback to determine if a given item is disabled
 * @param direction amount to move in each iteration, typically +/-1
 * @param startIndex which index to begin moving from
 */
export declare function getFirstEnabledItem<T>(items: T[], itemDisabled?: keyof T | ((item: T, index: number) => boolean), direction?: number, startIndex?: number): T | ICreateNewItem | null;
