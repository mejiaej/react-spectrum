import { RefObject, DOMProps as _DOMProps1, ValidationResult, HoverEvents as _HoverEvents1, InputDOMProps, CollectionBase, DropTargetDelegate, ItemDropTarget, Key, LayoutDelegate, DraggableCollectionProps, DroppableCollectionProps, LinkDOMProps, AriaLabelingProps, ValueBase, MultipleSelection, Node as _Node1, Orientation as _Orientation2, DisabledBehavior as _DisabledBehavior1, Expandable } from "@react-types/shared";
import React, { Context, CSSProperties, ForwardedRef, JSX, ReactNode, UIEvent, HTMLAttributes, LabelHTMLAttributes, InputHTMLAttributes, OutputHTMLAttributes, ReactElement, TextareaHTMLAttributes } from "react";
import { FormProps as _FormProps1 } from "@react-types/form";
import { AriaCheckboxGroupProps, AriaCheckboxProps, HoverEvents, AriaSliderProps, AriaSliderThumbProps, Orientation, AriaLinkOptions, AriaBreadcrumbsProps, AriaProgressBarProps, AriaButtonProps, AriaCalendarProps, AriaRangeCalendarProps, DateValue, DropIndicatorProps as _DropIndicatorProps1, DraggableCollectionOptions, DraggableItemProps, DraggableItemResult, DragItem, DragPreview, DropIndicatorAria, DroppableCollectionOptions, DroppableCollectionResult, DroppableItemOptions, DroppableItemResult, DropTarget, DropTargetDelegate as _DropTargetDelegate1, ListDropTargetDelegate, SeparatorProps as _SeparatorProps1, AriaListBoxProps, HoverProps, PlacementAxis, AriaPopoverProps, PositionProps, AriaMenuProps, AriaDialogProps, AriaComboBoxProps, AriaDateFieldProps, AriaTimeFieldProps, TimeValue, AriaDatePickerProps, AriaDateRangePickerProps, DropOptions, AriaGridListProps, AriaMeterProps, AriaModalOverlayProps, AriaNumberFieldProps, AriaRadioGroupProps, AriaRadioProps, AriaSearchFieldProps, AriaSelectProps, AriaSwitchProps, Key as _Key1, AriaTabListProps, AriaTabPanelProps, AriaTagGroupProps, AriaTextFieldProps, AriaToggleButtonGroupProps, AriaToggleButtonProps, AriaPositionProps, Placement } from "react-aria";
import { CheckboxGroupState, SliderState, Collection, Node, SelectionBehavior, SelectionMode, SectionProps as _SectionProps1, CalendarState, RangeCalendarState, DraggableCollectionState, DraggableCollectionStateOptions, DroppableCollectionState, DroppableCollectionStateOptions, ListState, Orientation as _Orientation1, OverlayTriggerProps, MenuTriggerProps as _MenuTriggerProps1, TreeState, OverlayTriggerState, ComboBoxState, DateFieldState, DateSegmentType, DateSegment as _DateSegment1, TimeFieldState, DatePickerState, DatePickerStateOptions, DateRangePickerState, DateRangePickerStateOptions, NumberFieldState, RadioGroupState, SearchFieldState, SelectState, ToggleState, DisabledBehavior, SortDirection, TableState, TabListState, ToggleGroupState, TooltipTriggerProps, TooltipTriggerState } from "react-stately";
import { Color, AriaColorAreaProps, ColorChannel, ColorSpace, AriaColorSliderProps } from "@react-types/color";
import { ColorAreaState, ColorFieldState, ColorSliderState, ColorWheelState, Color as _Color1, ColorPickerState, ColorPickerProps as _ColorPickerProps1 } from "@react-stately/color";
import { AriaColorFieldProps, AriaColorWheelOptions, AriaColorSwatchProps } from "@react-aria/color";
import { CalendarDate, DateDuration } from "@internationalized/date";
import { RootMenuTriggerState } from "@react-stately/menu";
import { AriaDisclosureProps } from "@react-aria/disclosure";
import { DisclosureGroupState, DisclosureState, DisclosureGroupProps as _DisclosureGroupProps1 } from "@react-stately/disclosure";
import { TableColumnResizeState } from "@react-stately/table";
import { ColumnSize, ColumnStaticSize, TableProps as _TableProps1 } from "@react-types/table";
import { Layout } from "@react-stately/virtualizer";
import { TableLayout, TableLayoutProps } from "@react-stately/layout";
import { AriaToolbarProps } from "@react-aria/toolbar";
import { AriaTreeGridListProps } from "@react-aria/tree";
export const DEFAULT_SLOT: unique symbol;
interface SlottedValue<T> {
    slots?: Record<string | symbol, T>;
}
type SlottedContextValue<T> = SlottedValue<T> | T | null | undefined;
export type ContextValue<T, E> = SlottedContextValue<WithRef<T, E>>;
type ProviderValue<T> = [Context<T>, T];
type ProviderValues<A, B, C, D, E, F, G, H, I, J, K> = [ProviderValue<A>] | [ProviderValue<A>, ProviderValue<B>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>, ProviderValue<E>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>, ProviderValue<E>, ProviderValue<F>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>, ProviderValue<E>, ProviderValue<F>, ProviderValue<G>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>, ProviderValue<E>, ProviderValue<F>, ProviderValue<G>, ProviderValue<H>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>, ProviderValue<E>, ProviderValue<F>, ProviderValue<G>, ProviderValue<H>, ProviderValue<I>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>, ProviderValue<E>, ProviderValue<F>, ProviderValue<G>, ProviderValue<H>, ProviderValue<I>, ProviderValue<J>] | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>, ProviderValue<E>, ProviderValue<F>, ProviderValue<G>, ProviderValue<H>, ProviderValue<I>, ProviderValue<J>, ProviderValue<K>];
interface ProviderProps<A, B, C, D, E, F, G, H, I, J, K> {
    values: ProviderValues<A, B, C, D, E, F, G, H, I, J, K>;
    children: ReactNode;
}
export function Provider<A, B, C, D, E, F, G, H, I, J, K>({ values, children }: ProviderProps<A, B, C, D, E, F, G, H, I, J, K>): JSX.Element;
interface StyleProps {
    /** The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. */
    className?: string;
    /** The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. */
    style?: CSSProperties;
}
interface DOMProps extends StyleProps, _DOMProps1 {
    /** The children of the component. */
    children?: ReactNode;
}
interface ScrollableProps<T extends Element> {
    /** Handler that is called when a user scrolls. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event). */
    onScroll?: (e: UIEvent<T>) => void;
}
interface StyleRenderProps<T> {
    /** The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state. */
    className?: string | ((values: T & {
        defaultClassName: string | undefined;
    }) => string);
    /** The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state. */
    style?: CSSProperties | ((values: T & {
        defaultStyle: CSSProperties;
    }) => CSSProperties | undefined);
}
interface RenderProps<T> extends StyleRenderProps<T> {
    /** The children of the component. A function may be provided to alter the children based on component state. */
    children?: ReactNode | ((values: T & {
        defaultChildren: ReactNode | undefined;
    }) => ReactNode);
}
/**
 * A helper function that accepts a user-provided render prop value (either a static value or a function),
 * and combines it with another value to create a final result.
 */
export function composeRenderProps<T, U, V extends T>(value: T extends any ? (T | ((renderProps: U) => V)) : never, wrap: (prevValue: T, renderProps: U) => V): (renderProps: U) => V;
type WithRef<T, E> = T & {
    ref?: ForwardedRef<E>;
};
export interface SlotProps {
    /**
     * A slot name for the component. Slots allow the component to receive props from a parent component.
     * An explicit `null` value indicates that the local props completely override all props received from a parent.
     */
    slot?: string | null;
}
export function useSlottedContext<T>(context: Context<SlottedContextValue<T>>, slot?: string | null): T | null | undefined;
export function useContextProps<T, U extends SlotProps, E extends Element>(props: T & SlotProps, ref: ForwardedRef<E>, context: Context<ContextValue<U, E>>): [T, RefObject<E | null>];
interface RACValidation {
    /**
     * Whether to use native HTML form validation to prevent form submission
     * when the value is missing or invalid, or mark the field as required
     * or invalid via ARIA.
     * @default 'native'
     */
    validationBehavior?: 'native' | 'aria';
}
export interface TextProps extends HTMLAttributes<HTMLElement> {
    elementType?: string;
}
export const TextContext: React.Context<ContextValue<TextProps, HTMLElement>>;
export const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLElement>>;
export const FieldErrorContext: React.Context<ValidationResult | null>;
export interface FieldErrorRenderProps extends ValidationResult {
}
export interface FieldErrorProps extends RenderProps<FieldErrorRenderProps>, _DOMProps1 {
}
/**
 * A FieldError displays validation errors for a form field.
 */
export const FieldError: React.ForwardRefExoticComponent<FieldErrorProps & React.RefAttributes<HTMLElement>>;
export interface FormProps extends _FormProps1, DOMProps {
    /**
     * Whether to use native HTML form validation to prevent form submission
     * when a field value is missing or invalid, or mark fields as required
     * or invalid via ARIA.
     * @default 'native'
     */
    validationBehavior?: 'aria' | 'native';
}
export const FormContext: React.Context<ContextValue<FormProps, HTMLFormElement>>;
/**
 * A form is a group of inputs that allows users to submit data to a server,
 * with support for providing field validation errors.
 */
export const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    elementType?: string;
}
export const LabelContext: React.Context<ContextValue<LabelProps, HTMLLabelElement>>;
export const Label: (props: LabelProps & React.RefAttributes<HTMLLabelElement>) => React.ReactElement | null;
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children' | 'label' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, RenderProps<CheckboxGroupRenderProps>, SlotProps {
}
export interface CheckboxProps extends Omit<AriaCheckboxProps, 'children' | 'validationState' | 'validationBehavior'>, HoverEvents, RACValidation, RenderProps<CheckboxRenderProps>, SlotProps {
    /**
     * A ref for the HTML input element.
     */
    inputRef?: RefObject<HTMLInputElement | null>;
}
export interface CheckboxGroupRenderProps {
    /**
     * Whether the checkbox group is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the checkbox group is read only.
     * @selector [data-readonly]
     */
    isReadOnly: boolean;
    /**
     * Whether the checkbox group is required.
     * @selector [data-required]
     */
    isRequired: boolean;
    /**
     * Whether the checkbox group is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * State of the checkbox group.
     */
    state: CheckboxGroupState;
}
export interface CheckboxRenderProps {
    /**
     * Whether the checkbox is selected.
     * @selector [data-selected]
     */
    isSelected: boolean;
    /**
     * Whether the checkbox is indeterminate.
     * @selector [data-indeterminate]
     */
    isIndeterminate: boolean;
    /**
     * Whether the checkbox is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the checkbox is currently in a pressed state.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the checkbox is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the checkbox is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the checkbox is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the checkbox is read only.
     * @selector [data-readonly]
     */
    isReadOnly: boolean;
    /**
     * Whether the checkbox invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * Whether the checkbox is required.
     * @selector [data-required]
     */
    isRequired: boolean;
}
export const CheckboxGroupContext: React.Context<ContextValue<CheckboxGroupProps, HTMLDivElement>>;
export const CheckboxGroupStateContext: React.Context<CheckboxGroupState | null>;
/**
 * A checkbox group allows a user to select multiple items from a list of options.
 */
export const CheckboxGroup: (props: CheckboxGroupProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A checkbox allows a user to select multiple items from a list of individual items, or
 * to mark one individual item as selected.
 */
export const Checkbox: (props: CheckboxProps & React.RefAttributes<HTMLLabelElement>) => React.ReactElement | null;
export interface ColorThumbRenderProps {
    /**
     * The selected color, excluding the alpha channel.
     */
    color: Color;
    /**
     * Whether this thumb is currently being dragged.
     * @selector [data-dragging]
     */
    isDragging: boolean;
    /**
     * Whether the thumb is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the thumb is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the thumb is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the thumb is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
}
export interface ColorThumbProps extends _HoverEvents1, RenderProps<ColorThumbRenderProps> {
}
/**
 * A color thumb appears within a ColorArea, ColorSlider, or ColorWheel and allows a user to drag to adjust the color value.
 */
export const ColorThumb: React.ForwardRefExoticComponent<ColorThumbProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorAreaRenderProps {
    /**
     * Whether the color area is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * State of the color area.
     */
    state: ColorAreaState;
}
export interface ColorAreaProps extends AriaColorAreaProps, RenderProps<ColorAreaRenderProps>, SlotProps {
}
export const ColorAreaStateContext: React.Context<ColorAreaState | null>;
/**
 * A color area allows users to adjust two channels of an RGB, HSL or HSB color value against a two-dimensional gradient background.
 */
export const ColorArea: React.ForwardRefExoticComponent<ColorAreaProps & React.RefAttributes<HTMLDivElement>>;
export interface InputRenderProps {
    /**
     * Whether the input is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the input is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the input is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the input is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the input is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
}
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style'>, HoverEvents, StyleRenderProps<InputRenderProps> {
}
export const InputContext: React.Context<ContextValue<InputProps, HTMLInputElement>>;
/**
 * An input allows a user to input text.
 */
export const Input: (props: InputProps & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
export interface ColorFieldRenderProps {
    /**
     * Whether the color field is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the color field is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * The color channel that this field edits, or "hex" if no `channel` prop is set.
     * @selector [data-channel="hex | hue | saturation | ..."]
     */
    channel: ColorChannel | 'hex';
    /**
     * State of the color field.
     */
    state: ColorFieldState;
}
export interface ColorFieldProps extends Omit<AriaColorFieldProps, 'label' | 'placeholder' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, InputDOMProps, RenderProps<ColorFieldRenderProps>, SlotProps {
    /**
     * The color channel that this field edits. If not provided,
     * the color is edited as a hex value.
     */
    channel?: ColorChannel;
    /**
     * The color space that the color field operates in if a `channel` prop is provided.
     * If no `channel` is provided, the color field always displays the color as an RGB hex value.
     */
    colorSpace?: ColorSpace;
}
export const ColorFieldStateContext: React.Context<ColorFieldState | null>;
/**
 * A color field allows users to edit a hex color or individual color channel value.
 */
export const ColorField: React.ForwardRefExoticComponent<ColorFieldProps & React.RefAttributes<HTMLDivElement>>;
export interface SliderProps<T = number | number[]> extends Omit<AriaSliderProps<T>, 'label'>, RenderProps<SliderRenderProps>, SlotProps {
    /**
     * The display format of the value label.
     */
    formatOptions?: Intl.NumberFormatOptions;
}
export const SliderContext: React.Context<ContextValue<SliderProps<number | number[]>, HTMLDivElement>>;
export const SliderStateContext: React.Context<SliderState | null>;
export const SliderTrackContext: React.Context<ContextValue<SliderTrackContextValue, HTMLDivElement>>;
export const SliderOutputContext: React.Context<ContextValue<SliderOutputContextValue, HTMLOutputElement>>;
export interface SliderRenderProps {
    /**
     * The orientation of the slider.
     * @selector [data-orientation="horizontal | vertical"]
     */
    orientation: Orientation;
    /**
     * Whether the slider is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * State of the slider.
     */
    state: SliderState;
}
/**
 * A slider allows a user to select one or more values within a range.
 */
export const Slider: <T extends number | number[]>(props: SliderProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface SliderOutputProps extends RenderProps<SliderRenderProps> {
}
interface SliderOutputContextValue extends Omit<OutputHTMLAttributes<HTMLOutputElement>, 'children' | 'className' | 'style'>, SliderOutputProps {
}
/**
 * A slider output displays the current value of a slider as text.
 */
export const SliderOutput: (props: SliderOutputProps & React.RefAttributes<HTMLOutputElement>) => React.ReactElement | null;
export interface SliderTrackRenderProps extends SliderRenderProps {
    /**
     * Whether the slider track is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
}
export interface SliderTrackProps extends HoverEvents, RenderProps<SliderTrackRenderProps> {
}
interface SliderTrackContextValue extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'className' | 'style'>, SliderTrackProps {
}
/**
 * A slider track is a container for one or more slider thumbs.
 */
export const SliderTrack: (props: SliderTrackProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface SliderThumbRenderProps {
    /**
     * State of the slider.
     */
    state: SliderState;
    /**
     * Whether this thumb is currently being dragged.
     * @selector [data-dragging]
     */
    isDragging: boolean;
    /**
     * Whether the thumb is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the thumb is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the thumb is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the thumb is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
}
export interface SliderThumbProps extends Omit<AriaSliderThumbProps, 'label' | 'validationState'>, HoverEvents, RenderProps<SliderThumbRenderProps> {
    /**
     * A ref for the HTML input element.
     */
    inputRef?: RefObject<HTMLInputElement | null>;
}
/**
 * A slider thumb represents an individual value that the user can adjust within a slider track.
 */
export const SliderThumb: (props: SliderThumbProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface ColorSliderRenderProps {
    /**
     * The orientation of the color slider.
     * @selector [data-orientation="horizontal | vertical"]
     */
    orientation: Orientation;
    /**
     * Whether the color slider is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * State of the color slider.
     */
    state: ColorSliderState;
}
export interface ColorSliderProps extends Omit<AriaColorSliderProps, 'label'>, RenderProps<ColorSliderRenderProps>, SlotProps {
}
export const ColorSliderStateContext: React.Context<ColorSliderState | null>;
/**
 * A color slider allows users to adjust an individual channel of a color value.
 */
export const ColorSlider: React.ForwardRefExoticComponent<ColorSliderProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorWheelRenderProps {
    /**
     * Whether the color wheel is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * State of the color color wheel.
     */
    state: ColorWheelState;
}
export interface ColorWheelProps extends AriaColorWheelOptions, RenderProps<ColorWheelRenderProps>, SlotProps {
}
export const ColorWheelStateContext: React.Context<ColorWheelState | null>;
/**
 * A color wheel allows users to adjust the hue of an HSL or HSB color value on a circular track.
 */
export const ColorWheel: React.ForwardRefExoticComponent<ColorWheelProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorWheelTrackRenderProps extends ColorWheelRenderProps {
}
export interface ColorWheelTrackProps extends StyleRenderProps<ColorWheelTrackRenderProps> {
}
interface ColorWheelTrackContextValue extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'className' | 'style'>, ColorWheelTrackProps {
}
export const ColorWheelTrackContext: React.Context<ContextValue<ColorWheelTrackContextValue, HTMLDivElement>>;
/**
 * A color wheel track renders a circular gradient track.
 */
export const ColorWheelTrack: React.ForwardRefExoticComponent<ColorWheelTrackProps & React.RefAttributes<HTMLDivElement>>;
export interface HeadingProps extends HTMLAttributes<HTMLElement> {
    level?: number;
}
export const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
export const CheckboxContext: Context<ContextValue<CheckboxProps, HTMLLabelElement>>;
export const ColorAreaContext: Context<ContextValue<Partial<ColorAreaProps>, HTMLDivElement>>;
export const ColorFieldContext: Context<ContextValue<ColorFieldProps, HTMLDivElement>>;
export const ColorSliderContext: Context<ContextValue<Partial<ColorSliderProps>, HTMLDivElement>>;
export const ColorWheelContext: Context<ContextValue<Partial<ColorWheelProps>, HTMLDivElement>>;
export const HeadingContext: Context<ContextValue<HeadingProps, HTMLHeadingElement>>;
interface CollectionProps<T> extends Omit<CollectionBase<T>, 'children'> {
    /** The contents of the collection. */
    children?: ReactNode | ((item: T) => ReactNode);
    /** Values that should invalidate the item cache when using dynamic collections. */
    dependencies?: any[];
}
interface ItemRenderProps {
    /**
     * Whether the item is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the item is currently in a pressed state.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the item is currently selected.
     * @selector [data-selected]
     */
    isSelected: boolean;
    /**
     * Whether the item is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the item is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the item is non-interactive, i.e. both selection and actions are disabled and the item may
     * not be focused. Dependent on `disabledKeys` and `disabledBehavior`.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * The type of selection that is allowed in the collection.
     * @selector [data-selection-mode="single | multiple"]
     */
    selectionMode: SelectionMode;
    /** The selection behavior for the collection. */
    selectionBehavior: SelectionBehavior;
    /**
     * Whether the item allows dragging.
     * @note This property is only available in collection components that support drag and drop.
     * @selector [data-allows-dragging]
     */
    allowsDragging?: boolean;
    /**
     * Whether the item is currently being dragged.
     * @note This property is only available in collection components that support drag and drop.
     * @selector [data-dragging]
     */
    isDragging?: boolean;
    /**
     * Whether the item is currently an active drop target.
     * @note This property is only available in collection components that support drag and drop.
     * @selector [data-drop-target]
     */
    isDropTarget?: boolean;
}
export interface SectionProps<T> extends Omit<_SectionProps1<T>, 'children' | 'title'>, StyleProps {
    /** The unique id of the section. */
    id?: Key;
    /** The object value that this section represents. When using dynamic collections, this is set automatically. */
    value?: T;
    /** Static child items or a function to render children. */
    children?: ReactNode | ((item: T) => ReactElement);
    /** Values that should invalidate the item cache when using dynamic collections. */
    dependencies?: any[];
}
/** @deprecated */
export const Section: <T extends object>(props: SectionProps<T> & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
interface CollectionBranchProps {
    /** The collection of items to render. */
    collection: Collection<Node<unknown>>;
    /** The parent node of the items to render. */
    parent: Node<unknown>;
    /** A function that renders a drop indicator between items. */
    renderDropIndicator?: (target: ItemDropTarget) => ReactNode;
}
interface CollectionRootProps extends HTMLAttributes<HTMLElement> {
    /** The collection of items to render. */
    collection: Collection<Node<unknown>>;
    /** A set of keys for items that should always be persisted in the DOM. */
    persistedKeys?: Set<Key> | null;
    /** A ref to the scroll container for the collection. */
    scrollRef?: RefObject<HTMLElement | null>;
    /** A function that renders a drop indicator between items. */
    renderDropIndicator?: (target: ItemDropTarget) => ReactNode;
}
export interface CollectionRenderer {
    /** Whether this is a virtualized collection. */
    isVirtualized?: boolean;
    /** A delegate object that provides layout information for items in the collection. */
    layoutDelegate?: LayoutDelegate;
    /** A delegate object that provides drop targets for pointer coordinates within the collection. */
    dropTargetDelegate?: DropTargetDelegate;
    /** A component that renders the root collection items. */
    CollectionRoot: React.ComponentType<CollectionRootProps>;
    /** A component that renders the child collection items. */
    CollectionBranch: React.ComponentType<CollectionBranchProps>;
}
export const UNSTABLE_DefaultCollectionRenderer: CollectionRenderer;
export const UNSTABLE_CollectionRendererContext: React.Context<CollectionRenderer>;
export interface LinkProps extends Omit<AriaLinkOptions, 'elementType'>, HoverEvents, RenderProps<LinkRenderProps>, SlotProps {
}
export interface LinkRenderProps {
    /**
     * Whether the link is the current item within a list.
     * @selector [data-current]
     */
    isCurrent: boolean;
    /**
     * Whether the link is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the link is currently in a pressed state.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the link is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the link is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the link is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
}
export const LinkContext: React.Context<ContextValue<LinkProps, HTMLAnchorElement>>;
/**
 * A link allows a user to navigate to another page or resource within a web page
 * or application.
 */
export const Link: (props: LinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null;
export interface BreadcrumbsProps<T> extends Omit<CollectionProps<T>, 'disabledKeys'>, AriaBreadcrumbsProps, StyleProps, SlotProps {
    /** Whether the breadcrumbs are disabled. */
    isDisabled?: boolean;
    /** Handler that is called when a breadcrumb is clicked. */
    onAction?: (key: Key) => void;
}
export const BreadcrumbsContext: React.Context<ContextValue<BreadcrumbsProps<any>, HTMLOListElement>>;
/**
 * Breadcrumbs display a hierarchy of links to the current page or resource in an application.
 */
export const Breadcrumbs: <T extends object>(props: BreadcrumbsProps<T> & React.RefAttributes<HTMLOListElement>) => React.ReactElement | null;
export interface BreadcrumbRenderProps {
    /**
     * Whether the breadcrumb is for the current page.
     * @selector [data-current]
     */
    isCurrent: boolean;
    /**
     * Whether the breadcrumb is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
}
export interface BreadcrumbProps extends RenderProps<BreadcrumbRenderProps> {
    /** A unique id for the breadcrumb, which will be passed to `onAction` when the breadcrumb is pressed. */
    id?: Key;
}
/**
 * A Breadcrumb represents an individual item in a `<Breadcrumbs>` list.
 */
export const Breadcrumb: (props: BreadcrumbProps & React.RefAttributes<object>) => React.ReactElement | null;
export interface ProgressBarProps extends Omit<AriaProgressBarProps, 'label'>, RenderProps<ProgressBarRenderProps>, SlotProps {
}
export interface ProgressBarRenderProps {
    /**
     * The value as a percentage between the minimum and maximum.
     */
    percentage?: number;
    /**
     * A formatted version of the value.
     * @selector [aria-valuetext]
     */
    valueText: string | undefined;
    /**
     * Whether the progress bar is indeterminate.
     * @selector :not([aria-valuenow])
     */
    isIndeterminate: boolean;
}
export const ProgressBarContext: React.Context<ContextValue<ProgressBarProps, HTMLDivElement>>;
/**
 * Progress bars show either determinate or indeterminate progress of an operation
 * over time.
 */
export const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
export interface ButtonRenderProps {
    /**
     * Whether the button is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the button is currently in a pressed state.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the button is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the button is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the button is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the button is currently in a pending state.
     * @selector [data-pending]
     */
    isPending: boolean;
}
export interface ButtonProps extends Omit<AriaButtonProps, 'children' | 'href' | 'target' | 'rel' | 'elementType'>, HoverEvents, SlotProps, RenderProps<ButtonRenderProps> {
    /**
     * The `<form>` element to associate the button with.
     * The value of this attribute must be the id of a `<form>` in the same document.
     */
    form?: string;
    /**
     * The URL that processes the information submitted by the button.
     * Overrides the action attribute of the button's form owner.
     */
    formAction?: string;
    /** Indicates how to encode the form data that is submitted. */
    formEncType?: string;
    /** Indicates the HTTP method used to submit the form. */
    formMethod?: string;
    /** Indicates that the form is not to be validated when it is submitted. */
    formNoValidate?: boolean;
    /** Overrides the target attribute of the button's form owner. */
    formTarget?: string;
    /** Submitted as a pair with the button's value as part of the form data. */
    name?: string;
    /** The value associated with the button's name when it's submitted with the form data. */
    value?: string;
    /**
     * Whether the button is in a pending state. This disables press and hover events
     * while retaining focusability, and announces the pending state to screen readers.
     */
    isPending?: boolean;
}
interface ButtonContextValue extends ButtonProps {
    isPressed?: boolean;
}
export const ButtonContext: React.Context<ContextValue<ButtonContextValue, HTMLButtonElement>>;
/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 */
export const Button: (props: ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
export interface CalendarRenderProps {
    /**
     * Whether the calendar is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * State of the calendar.
     */
    state: CalendarState;
    /**
     * Whether the calendar is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
}
export interface RangeCalendarRenderProps extends Omit<CalendarRenderProps, 'state'> {
    /**
     * State of the range calendar.
     */
    state: RangeCalendarState;
}
export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'errorMessage' | 'validationState'>, RenderProps<CalendarRenderProps>, SlotProps {
    /**
     * The amount of days that will be displayed at once. This affects how pagination works.
     * @default {months: 1}
     */
    visibleDuration?: DateDuration;
}
export interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, 'errorMessage' | 'validationState'>, RenderProps<RangeCalendarRenderProps>, SlotProps {
    /**
     * The amount of days that will be displayed at once. This affects how pagination works.
     * @default {months: 1}
     */
    visibleDuration?: DateDuration;
}
export const CalendarContext: React.Context<ContextValue<CalendarProps<any>, HTMLDivElement>>;
export const RangeCalendarContext: React.Context<ContextValue<RangeCalendarProps<any>, HTMLDivElement>>;
export const CalendarStateContext: React.Context<CalendarState | null>;
export const RangeCalendarStateContext: React.Context<RangeCalendarState | null>;
/**
 * A calendar displays one or more date grids and allows users to select a single date.
 */
export const Calendar: <T extends DateValue>(props: CalendarProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A range calendar displays one or more date grids and allows users to select a contiguous range of dates.
 */
export const RangeCalendar: <T extends DateValue>(props: RangeCalendarProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface CalendarCellRenderProps {
    /** The date that the cell represents. */
    date: CalendarDate;
    /** The day number formatted according to the current locale. */
    formattedDate: string;
    /**
     * Whether the cell is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the cell is currently being pressed.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the cell is selected.
     * @selector [data-selected]
     */
    isSelected: boolean;
    /**
     * Whether the cell is the first date in a range selection.
     * @selector [data-selection-start]
     */
    isSelectionStart: boolean;
    /**
     * Whether the cell is the last date in a range selection.
     * @selector [data-selection-end]
     */
    isSelectionEnd: boolean;
    /**
     * Whether the cell is focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the cell is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the cell is disabled, according to the calendar's `minValue`, `maxValue`, and `isDisabled` props.
     * Disabled dates are not focusable, and cannot be selected by the user. They are typically
     * displayed with a dimmed appearance.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the cell is outside the visible range of the calendar.
     * For example, dates before the first day of a month in the same week.
     * @selector [data-outside-visible-range]
     */
    isOutsideVisibleRange: boolean;
    /**
     * Whether the cell is outside the current month.
     * @selector [data-outside-month]
     */
    isOutsideMonth: boolean;
    /**
     * Whether the cell is unavailable, according to the calendar's `isDateUnavailable` prop. Unavailable dates remain
     * focusable, but cannot be selected by the user. They should be displayed with a visual affordance to indicate they
     * are unavailable, such as a different color or a strikethrough.
     *
     * Note that because they are focusable, unavailable dates must meet a 4.5:1 color contrast ratio,
     * [as defined by WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).
     *
     * @selector [data-unavailable]
     */
    isUnavailable: boolean;
    /**
     * Whether the cell is part of an invalid selection.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
}
export interface CalendarGridProps extends StyleProps {
    /**
     * Either a function to render calendar cells for each date in the month,
     * or children containing a `<CalendarGridHeader>`` and `<CalendarGridBody>`
     * when additional customization is needed.
     */
    children?: ReactElement | ReactElement[] | ((date: CalendarDate) => ReactElement);
    /**
     * An offset from the beginning of the visible date range that this
     * CalendarGrid should display. Useful when displaying more than one
     * month at a time.
     */
    offset?: DateDuration;
    /**
     * The style of weekday names to display in the calendar grid header,
     * e.g. single letter, abbreviation, or full day name.
     * @default "narrow"
     */
    weekdayStyle?: 'narrow' | 'short' | 'long';
}
/**
 * A calendar grid displays a single grid of days within a calendar or range calendar which
 * can be keyboard navigated and selected by the user.
 */
export const CalendarGrid: (props: CalendarGridProps & React.RefAttributes<HTMLTableElement>) => React.ReactElement | null;
export interface CalendarGridHeaderProps extends StyleProps {
    /** A function to render a `<CalendarHeaderCell>` for a weekday name. */
    children: (day: string) => ReactElement;
}
/**
 * A calendar grid header displays a row of week day names at the top of a month.
 */
export const CalendarGridHeader: (props: CalendarGridHeaderProps & React.RefAttributes<HTMLTableSectionElement>) => React.ReactElement | null;
export interface CalendarHeaderCellProps extends DOMProps {
}
/**
 * A calendar header cell displays a week day name at the top of a column within a calendar.
 */
export const CalendarHeaderCell: React.ForwardRefExoticComponent<CalendarHeaderCellProps & React.RefAttributes<HTMLTableCellElement>>;
export interface CalendarGridBodyProps extends StyleProps {
    /** A function to render a `<CalendarCell>` for a given date. */
    children: (date: CalendarDate) => ReactElement;
}
/**
 * A calendar grid body displays a grid of calendar cells within a month.
 */
export const CalendarGridBody: (props: CalendarGridBodyProps & React.RefAttributes<HTMLTableSectionElement>) => React.ReactElement | null;
export interface CalendarCellProps extends RenderProps<CalendarCellRenderProps>, _HoverEvents1 {
    /** The date to render in the cell. */
    date: CalendarDate;
}
/**
 * A calendar cell displays a date cell within a calendar grid which can be selected by the user.
 */
export const CalendarCell: (props: CalendarCellProps & React.RefAttributes<HTMLTableCellElement>) => React.ReactElement | null;
export interface ColorSwatchRenderProps {
    /** The color of the swatch. */
    color: Color;
}
export interface ColorSwatchProps extends AriaColorSwatchProps, StyleRenderProps<ColorSwatchRenderProps>, SlotProps {
}
export const ColorSwatchContext: React.Context<ContextValue<ColorSwatchProps, HTMLDivElement>>;
/**
 * A ColorSwatch displays a preview of a selected color.
 */
export const ColorSwatch: React.ForwardRefExoticComponent<ColorSwatchProps & React.RefAttributes<HTMLDivElement>>;
interface DraggableCollectionStateOpts extends Omit<DraggableCollectionStateOptions, 'getItems'> {
}
interface DragHooks {
    useDraggableCollectionState?: (props: DraggableCollectionStateOpts) => DraggableCollectionState;
    useDraggableCollection?: (props: DraggableCollectionOptions, state: DraggableCollectionState, ref: RefObject<HTMLElement | null>) => void;
    useDraggableItem?: (props: DraggableItemProps, state: DraggableCollectionState) => DraggableItemResult;
    DragPreview?: typeof DragPreview;
    renderDragPreview?: (items: DragItem[]) => JSX.Element;
    isVirtualDragging?: () => boolean;
}
interface DropHooks {
    useDroppableCollectionState?: (props: DroppableCollectionStateOptions) => DroppableCollectionState;
    useDroppableCollection?: (props: DroppableCollectionOptions, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>) => DroppableCollectionResult;
    useDroppableItem?: (options: DroppableItemOptions, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>) => DroppableItemResult;
    useDropIndicator?: (props: _DropIndicatorProps1, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>) => DropIndicatorAria;
    renderDropIndicator?: (target: DropTarget) => JSX.Element;
    dropTargetDelegate?: _DropTargetDelegate1;
    ListDropTargetDelegate: typeof ListDropTargetDelegate;
}
export type DragAndDropHooks = DragHooks & DropHooks;
interface DragAndDrop {
    /** Drag and drop hooks for the collection element.  */
    dragAndDropHooks: DragAndDropHooks;
}
export interface DragAndDropOptions extends Omit<DraggableCollectionProps, 'preview' | 'getItems'>, DroppableCollectionProps {
    /**
     * A function that returns the items being dragged. If not specified, we assume that the collection is not draggable.
     * @default () => []
     */
    getItems?: (keys: Set<Key>) => DragItem[];
    /**
     * A function that renders a drag preview, which is shown under the user's cursor while dragging.
     * By default, a copy of the dragged element is rendered.
     */
    renderDragPreview?: (items: DragItem[]) => JSX.Element;
    /**
     * A function that renders a drop indicator element between two items in a collection.
     * This should render a `<DropIndicator>` element. If this function is not provided, a
     * default DropIndicator is provided.
     */
    renderDropIndicator?: (target: DropTarget) => JSX.Element;
    /** A custom delegate object that provides drop targets for pointer coordinates within the collection. */
    dropTargetDelegate?: _DropTargetDelegate1;
    /** Whether the drag and drop events should be disabled. */
    isDisabled?: boolean;
}
/**
 * Provides the hooks required to enable drag and drop behavior for a drag and drop compatible collection component.
 */
export function useDragAndDrop(options: DragAndDropOptions): DragAndDrop;
interface DragAndDropContextValue {
    dragAndDropHooks?: DragAndDropHooks;
    dragState?: DraggableCollectionState;
    dropState?: DroppableCollectionState;
}
export const DragAndDropContext: React.Context<DragAndDropContextValue>;
export const DropIndicatorContext: React.Context<DropIndicatorContextValue | null>;
interface DropIndicatorRenderProps {
    /**
     * Whether the drop indicator is currently the active drop target.
     * @selector [data-drop-target]
     */
    isDropTarget: boolean;
}
export interface DropIndicatorProps extends _DropIndicatorProps1, RenderProps<DropIndicatorRenderProps> {
}
interface DropIndicatorContextValue {
    render: (props: DropIndicatorProps, ref: ForwardedRef<HTMLElement>) => ReactNode;
}
/**
 * A DropIndicator is rendered between items in a collection to indicate where dropped data will be inserted.
 */
export const DropIndicator: React.ForwardRefExoticComponent<DropIndicatorProps & React.RefAttributes<HTMLElement>>;
export const HeaderContext: React.Context<ContextValue<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
export const Header: (props: React.HTMLAttributes<HTMLElement> & React.RefAttributes<object>) => React.ReactElement | null;
export interface SeparatorProps extends _SeparatorProps1, StyleProps, SlotProps {
}
export const SeparatorContext: React.Context<ContextValue<SeparatorProps, HTMLElement>>;
export const Separator: (props: SeparatorProps & React.RefAttributes<object>) => React.ReactElement | null;
export interface ListBoxRenderProps {
    /**
     * Whether the listbox has no items and should display its empty state.
     * @selector [data-empty]
     */
    isEmpty: boolean;
    /**
     * Whether the listbox is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the listbox is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the listbox is currently the active drop target.
     * @selector [data-drop-target]
     */
    isDropTarget: boolean;
    /**
     * Whether the items are arranged in a stack or grid.
     * @selector [data-layout="stack | grid"]
     */
    layout: 'stack' | 'grid';
    /**
     * State of the listbox.
     */
    state: ListState<unknown>;
}
export interface ListBoxProps<T> extends Omit<AriaListBoxProps<T>, 'children' | 'label'>, CollectionProps<T>, StyleRenderProps<ListBoxRenderProps>, SlotProps, ScrollableProps<HTMLDivElement> {
    /** How multiple selection should behave in the collection. */
    selectionBehavior?: SelectionBehavior;
    /** The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the ListBox. */
    dragAndDropHooks?: DragAndDropHooks;
    /** Provides content to display when there are no items in the list. */
    renderEmptyState?: (props: ListBoxRenderProps) => ReactNode;
    /**
     * Whether the items are arranged in a stack or grid.
     * @default 'stack'
     */
    layout?: 'stack' | 'grid';
    /**
     * The primary orientation of the items. Usually this is the
     * direction that the collection scrolls.
     * @default 'vertical'
     */
    orientation?: _Orientation1;
}
export const ListBoxContext: React.Context<ContextValue<ListBoxProps<any>, HTMLDivElement>>;
export const ListStateContext: React.Context<ListState<any> | null>;
/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 */
export const ListBox: <T extends object>(props: ListBoxProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface ListBoxSectionProps<T> extends SectionProps<T> {
}
/**
 * A ListBoxSection represents a section within a ListBox.
 */
export const ListBoxSection: <T extends object>(props: ListBoxSectionProps<T> & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
export interface ListBoxItemRenderProps extends ItemRenderProps {
}
export interface ListBoxItemProps<T = object> extends RenderProps<ListBoxItemRenderProps>, LinkDOMProps, _HoverEvents1 {
    /** The unique id of the item. */
    id?: Key;
    /** The object value that this item represents. When using dynamic collections, this is set automatically. */
    value?: T;
    /** A string representation of the item's contents, used for features like typeahead. */
    textValue?: string;
    /** An accessibility label for this item. */
    'aria-label'?: string;
    /** Whether the item is disabled. */
    isDisabled?: boolean;
    /**
     * Handler that is called when a user performs an action on the item. The exact user event depends on
     * the collection's `selectionBehavior` prop and the interaction modality.
     */
    onAction?: () => void;
}
/**
 * A ListBoxItem represents an individual option in a ListBox.
 */
export const ListBoxItem: <T extends object>(props: ListBoxItemProps<T> & React.RefAttributes<T>) => React.ReactElement | null;
export interface ColorSwatchPickerRenderProps extends Omit<ListBoxRenderProps, 'isDropTarget'> {
}
export interface ColorSwatchPickerProps extends ValueBase<string | _Color1, _Color1>, AriaLabelingProps, StyleRenderProps<ColorSwatchPickerRenderProps> {
    /** The children of the ColorSwatchPicker. */
    children?: ReactNode;
    /**
     * Whether the items are arranged in a stack or grid.
     * @default 'grid'
     */
    layout?: 'grid' | 'stack';
}
export const ColorSwatchPickerContext: React.Context<ContextValue<ColorSwatchPickerProps, HTMLDivElement>>;
/**
 * A ColorSwatchPicker displays a list of color swatches and allows a user to select one of them.
 */
export const ColorSwatchPicker: React.ForwardRefExoticComponent<ColorSwatchPickerProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorSwatchPickerItemRenderProps extends Omit<ListBoxItemRenderProps, 'selectionMode' | 'selectionBehavior'> {
    /** The color of the swatch. */
    color: _Color1;
}
export interface ColorSwatchPickerItemProps extends RenderProps<ColorSwatchPickerItemRenderProps>, _HoverEvents1 {
    /** The color of the swatch. */
    color: string | _Color1;
    /** Whether the color swatch is disabled. */
    isDisabled?: boolean;
}
export const ColorSwatchPickerItem: React.ForwardRefExoticComponent<ColorSwatchPickerItemProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorPickerRenderProps {
    /** The currently selected color. */
    color: Color;
}
export interface ColorPickerProps extends _ColorPickerProps1, SlotProps, Pick<RenderProps<ColorPickerRenderProps>, 'children'> {
}
export const ColorPickerContext: React.Context<SlottedContextValue<ColorPickerProps>>;
export const ColorPickerStateContext: React.Context<ColorPickerState | null>;
/**
 * A ColorPicker synchronizes a color value between multiple React Aria color components.
 * It simplifies building color pickers with customizable layouts via composition.
 */
export function ColorPicker(props: ColorPickerProps): React.JSX.Element;
export interface GroupRenderProps {
    /**
     * Whether the group is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether an element within the group is focused, either via a mouse or keyboard.
     * @selector [data-focus-within]
     */
    isFocusWithin: boolean;
    /**
     * Whether an element within the group is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the group is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the group is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
}
export interface GroupProps extends AriaLabelingProps, Omit<HTMLAttributes<HTMLElement>, 'children' | 'className' | 'style' | 'role' | 'slot'>, _DOMProps1, HoverProps, RenderProps<GroupRenderProps>, SlotProps {
    /** Whether the group is disabled. */
    isDisabled?: boolean;
    /** Whether the group is invalid. */
    isInvalid?: boolean;
    /**
     * An accessibility role for the group. By default, this is set to `'group'`.
     * Use `'region'` when the contents of the group is important enough to be
     * included in the page table of contents. Use `'presentation'` if the group
     * is visual only and does not represent a semantic grouping of controls.
     * @default 'group'
     */
    role?: 'group' | 'region' | 'presentation';
}
export const GroupContext: React.Context<ContextValue<GroupProps, HTMLDivElement>>;
/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 */
export const Group: (props: GroupProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface OverlayArrowProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style' | 'children'>, RenderProps<OverlayArrowRenderProps> {
}
export interface OverlayArrowRenderProps {
    /**
     * The placement of the overlay relative to the trigger.
     * @selector [data-placement="left | right | top | bottom"]
     */
    placement: PlacementAxis | null;
}
/**
 * An OverlayArrow renders a custom arrow element relative to an overlay element
 * such as a popover or tooltip such that it aligns with a trigger element.
 */
export const OverlayArrow: (props: OverlayArrowProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface PopoverProps extends Omit<PositionProps, 'isOpen'>, Omit<AriaPopoverProps, 'popoverRef' | 'triggerRef' | 'offset' | 'arrowSize'>, OverlayTriggerProps, RenderProps<PopoverRenderProps>, SlotProps {
    /**
     * The name of the component that triggered the popover. This is reflected on the element
     * as the `data-trigger` attribute, and can be used to provide specific
     * styles for the popover depending on which element triggered it.
     */
    trigger?: string;
    /**
     * The ref for the element which the popover positions itself with respect to.
     *
     * When used within a trigger component such as DialogTrigger, MenuTrigger, Select, etc.,
     * this is set automatically. It is only required when used standalone.
     */
    triggerRef?: RefObject<Element | null>;
    /**
     * Whether the popover is currently performing an entry animation.
     */
    isEntering?: boolean;
    /**
     * Whether the popover is currently performing an exit animation.
     */
    isExiting?: boolean;
    /**
     * The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.
     * @default document.body
     */
    UNSTABLE_portalContainer?: Element;
    /**
     * The additional offset applied along the main axis between the element and its
     * anchor element.
     * @default 8
     */
    offset?: number;
}
export interface PopoverRenderProps {
    /**
     * The name of the component that triggered the popover, e.g. "DialogTrigger" or "ComboBox".
     * @selector [data-trigger="..."]
     */
    trigger: string | null;
    /**
     * The placement of the popover relative to the trigger.
     * @selector [data-placement="left | right | top | bottom"]
     */
    placement: PlacementAxis | null;
    /**
     * Whether the popover is currently entering. Use this to apply animations.
     * @selector [data-entering]
     */
    isEntering: boolean;
    /**
     * Whether the popover is currently exiting. Use this to apply animations.
     * @selector [data-exiting]
     */
    isExiting: boolean;
}
export const PopoverContext: React.Context<ContextValue<PopoverProps, HTMLElement>>;
/**
 * A popover is an overlay element positioned relative to a trigger.
 */
export const Popover: (props: PopoverProps & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
export const KeyboardContext: React.Context<ContextValue<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
export const Keyboard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
export const MenuContext: React.Context<ContextValue<MenuProps<any>, HTMLDivElement>>;
export const MenuStateContext: React.Context<TreeState<any> | null>;
export const RootMenuTriggerStateContext: React.Context<RootMenuTriggerState | null>;
export interface MenuTriggerProps extends _MenuTriggerProps1 {
    children: ReactNode;
}
export function MenuTrigger(props: MenuTriggerProps): React.JSX.Element;
export interface SubmenuTriggerProps {
    /**
     * The contents of the SubmenuTrigger. The first child should be an Item (the trigger) and the second child should be the Popover (for the submenu).
     */
    children: ReactElement[];
    /**
     * The delay time in milliseconds for the submenu to appear after hovering over the trigger.
     * @default 200
     */
    delay?: number;
}
/**
 * A submenu trigger is used to wrap a submenu's trigger item and the submenu itself.
 *
 * @version alpha
 */
export const SubmenuTrigger: (props: SubmenuTriggerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface MenuProps<T> extends Omit<AriaMenuProps<T>, 'children'>, CollectionProps<T>, StyleProps, SlotProps, ScrollableProps<HTMLDivElement> {
}
/**
 * A menu displays a list of actions or options that a user can choose.
 */
export const Menu: <T extends object>(props: MenuProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface MenuSectionProps<T> extends SectionProps<T>, MultipleSelection {
}
/**
 * A MenuSection represents a section within a Menu.
 */
export const MenuSection: <T extends object>(props: MenuSectionProps<T> & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
export interface MenuItemRenderProps extends ItemRenderProps {
    /**
     * Whether the item has a submenu.
     *
     * @selector [data-has-submenu]
     */
    hasSubmenu: boolean;
    /**
     * Whether the item's submenu is open.
     *
     * @selector [data-open]
     */
    isOpen: boolean;
}
export interface MenuItemProps<T = object> extends RenderProps<MenuItemRenderProps>, LinkDOMProps, _HoverEvents1 {
    /** The unique id of the item. */
    id?: Key;
    /** The object value that this item represents. When using dynamic collections, this is set automatically. */
    value?: T;
    /** A string representation of the item's contents, used for features like typeahead. */
    textValue?: string;
    /** An accessibility label for this item. */
    'aria-label'?: string;
    /** Whether the item is disabled. */
    isDisabled?: boolean;
    /** Handler that is called when the item is selected. */
    onAction?: () => void;
}
/**
 * A MenuItem represents an individual action in a Menu.
 */
export const MenuItem: <T extends object>(props: MenuItemProps<T> & React.RefAttributes<T>) => React.ReactElement | null;
export interface DialogTriggerProps extends OverlayTriggerProps {
    children: ReactNode;
}
interface DialogRenderProps {
    close: () => void;
}
export interface DialogProps extends AriaDialogProps, StyleProps, SlotProps {
    /** Children of the dialog. A function may be provided to access a function to close the dialog. */
    children?: ReactNode | ((opts: DialogRenderProps) => ReactNode);
}
export const DialogContext: React.Context<ContextValue<DialogProps, HTMLElement>>;
export const OverlayTriggerStateContext: React.Context<OverlayTriggerState | null>;
/**
 * A DialogTrigger opens a dialog when a trigger element is pressed.
 */
export function DialogTrigger(props: DialogTriggerProps): React.JSX.Element;
/**
 * A dialog is an overlay shown above other content in an application.
 */
export const Dialog: (props: DialogProps & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
export interface ComboBoxRenderProps {
    /**
     * Whether the combobox is currently open.
     * @selector [data-open]
     */
    isOpen: boolean;
    /**
     * Whether the combobox is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the combobox is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * Whether the combobox is required.
     * @selector [data-required]
     */
    isRequired: boolean;
}
export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, 'children' | 'placeholder' | 'label' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, RenderProps<ComboBoxRenderProps>, SlotProps {
    /** The filter function used to determine if a option should be included in the combo box list. */
    defaultFilter?: (textValue: string, inputValue: string) => boolean;
    /**
     * Whether the text or key of the selected item is submitted as part of an HTML form.
     * When `allowsCustomValue` is `true`, this option does not apply and the text is always submitted.
     * @default 'key'
     */
    formValue?: 'text' | 'key';
    /** Whether the combo box allows the menu to be open when the collection is empty. */
    allowsEmptyCollection?: boolean;
}
export const ComboBoxContext: React.Context<ContextValue<ComboBoxProps<any>, HTMLDivElement>>;
export const ComboBoxStateContext: React.Context<ComboBoxState<any> | null>;
/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 */
export const ComboBox: <T extends object>(props: ComboBoxProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface DateFieldRenderProps {
    /**
     * State of the date field.
     */
    state: DateFieldState;
    /**
     * Whether the date field is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * Whether the date field is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
}
export interface DateFieldProps<T extends DateValue> extends Omit<AriaDateFieldProps<T>, 'label' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, RenderProps<DateFieldRenderProps>, SlotProps {
}
export interface TimeFieldProps<T extends TimeValue> extends Omit<AriaTimeFieldProps<T>, 'label' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, RenderProps<DateFieldRenderProps>, SlotProps {
}
export const DateFieldContext: React.Context<ContextValue<DateFieldProps<any>, HTMLDivElement>>;
export const TimeFieldContext: React.Context<ContextValue<TimeFieldProps<any>, HTMLDivElement>>;
export const DateFieldStateContext: React.Context<DateFieldState | null>;
export const TimeFieldStateContext: React.Context<TimeFieldState | null>;
/**
 * A date field allows users to enter and edit date and time values using a keyboard.
 * Each part of a date value is displayed in an individually editable segment.
 */
export const DateField: <T extends DateValue>(props: DateFieldProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A time field allows users to enter and edit time values using a keyboard.
 * Each part of a time value is displayed in an individually editable segment.
 */
export const TimeField: <T extends TimeValue>(props: TimeFieldProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface DateInputRenderProps {
    /**
     * Whether the date input is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether an element within the date input is focused, either via a mouse or keyboard.
     * @selector [data-focus-within]
     */
    isFocusWithin: boolean;
    /**
     * Whether an element within the date input is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the date input is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the date input is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
}
export interface DateInputProps extends SlotProps, StyleRenderProps<DateInputRenderProps> {
    children: (segment: _DateSegment1) => ReactElement;
}
/**
 * A date input groups the editable date segments within a date field.
 */
export const DateInput: (props: DateInputProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface DateSegmentRenderProps extends Omit<_DateSegment1, 'isEditable'> {
    /**
     * Whether the segment is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the segment is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the segment is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the value is a placeholder.
     * @selector [data-placeholder]
     */
    isPlaceholder: boolean;
    /**
     * Whether the segment is read only.
     * @selector [data-readonly]
     */
    isReadOnly: boolean;
    /**
     * Whether the date field is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the date field is in an invalid state.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * The type of segment. Values include `literal`, `year`, `month`, `day`, etc.
     * @selector [data-type="..."]
     */
    type: DateSegmentType;
}
export interface DateSegmentProps extends RenderProps<DateSegmentRenderProps>, HoverEvents {
    segment: _DateSegment1;
}
/**
 * A date segment displays an individual unit of a date and time, and allows users to edit
 * the value by typing or using the arrow keys to increment and decrement.
 */
export const DateSegment: (props: DateSegmentProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface DatePickerRenderProps {
    /**
     * Whether an element within the date picker is focused, either via a mouse or keyboard.
     * @selector [data-focus-within]
     */
    isFocusWithin: boolean;
    /**
     * Whether an element within the date picker is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the date picker is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the date picker is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * Whether the date picker's popover is currently open.
     * @selector [data-open]
     */
    isOpen: boolean;
    /**
     * State of the date picker.
     */
    state: DatePickerState;
}
export interface DateRangePickerRenderProps extends Omit<DatePickerRenderProps, 'state'> {
    /**
     * State of the date range picker.
     */
    state: DateRangePickerState;
}
export interface DatePickerProps<T extends DateValue> extends Omit<AriaDatePickerProps<T>, 'label' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, Pick<DatePickerStateOptions<T>, 'shouldCloseOnSelect'>, RACValidation, RenderProps<DatePickerRenderProps>, SlotProps {
}
export interface DateRangePickerProps<T extends DateValue> extends Omit<AriaDateRangePickerProps<T>, 'label' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, Pick<DateRangePickerStateOptions<T>, 'shouldCloseOnSelect'>, RACValidation, RenderProps<DateRangePickerRenderProps>, SlotProps {
}
export const DatePickerContext: React.Context<ContextValue<DatePickerProps<any>, HTMLDivElement>>;
export const DateRangePickerContext: React.Context<ContextValue<DateRangePickerProps<any>, HTMLDivElement>>;
export const DatePickerStateContext: React.Context<DatePickerState | null>;
export const DateRangePickerStateContext: React.Context<DateRangePickerState | null>;
/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 */
export const DatePicker: <T extends DateValue>(props: DatePickerProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A date range picker combines two DateFields and a RangeCalendar popover to allow
 * users to enter or select a date and time range.
 */
export const DateRangePicker: <T extends DateValue>(props: DateRangePickerProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface DisclosureGroupProps extends _DisclosureGroupProps1, RenderProps<DisclosureGroupRenderProps>, _DOMProps1 {
}
export interface DisclosureGroupRenderProps {
    /**
     * Whether the disclosure group is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * State of the disclosure group.
     */
    state: DisclosureGroupState;
}
export const DisclosureGroupStateContext: React.Context<DisclosureGroupState | null>;
/**
 * A DisclosureGroup is a grouping of related disclosures, sometimes called an accordion.
 * It supports both single and multiple expanded items.
 */
export const DisclosureGroup: React.ForwardRefExoticComponent<DisclosureGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface DisclosureProps extends Omit<AriaDisclosureProps, 'children'>, RenderProps<DisclosureRenderProps>, SlotProps {
    /** An id for the disclosure when used within a DisclosureGroup, matching the id used in `expandedKeys`. */
    id?: Key;
}
export interface DisclosureRenderProps {
    /**
     * Whether the disclosure is expanded.
     * @selector [data-expanded]
     */
    isExpanded: boolean;
    /**
     * Whether the disclosure has keyboard focus.
     * @selector [data-focus-visible-within]
     */
    isFocusVisibleWithin: boolean;
    /**
     * Whether the disclosure is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * State of the disclosure.
     */
    state: DisclosureState;
}
export const DisclosureContext: React.Context<ContextValue<DisclosureProps, HTMLDivElement>>;
export const DisclosureStateContext: React.Context<DisclosureState | null>;
/**
 * A disclosure is a collapsible section of content. It is composed of a a header with a heading and trigger button, and a panel that contains the content.
 */
export const Disclosure: (props: DisclosureProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface DisclosurePanelRenderProps {
    /**
     * Whether keyboard focus is within the disclosure panel.
     * @selector [data-focus-visible-within]
     */
    isFocusVisibleWithin: boolean;
}
export interface DisclosurePanelProps extends RenderProps<DisclosurePanelRenderProps>, _DOMProps1 {
    /**
     * The accessibility role for the disclosure's panel.
     * @default 'group'
     */
    role?: 'group' | 'region';
    /**
     * The children of the component.
     */
    children: ReactNode;
}
/**
 * A DisclosurePanel provides the content for a disclosure.
 */
export const DisclosurePanel: (props: DisclosurePanelProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface DropZoneRenderProps {
    /**
     * Whether the dropzone is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the dropzone is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the dropzone is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the dropzone is the drop target.
     * @selector [data-drop-target]
     */
    isDropTarget: boolean;
    /**
     * Whether the dropzone is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
}
export interface DropZoneProps extends Omit<DropOptions, 'getDropOperationForPoint' | 'ref' | 'hasDropButton'>, _HoverEvents1, RenderProps<DropZoneRenderProps>, SlotProps, AriaLabelingProps {
}
export const DropZoneContext: React.Context<ContextValue<DropZoneProps, HTMLDivElement>>;
/**
 * A drop zone is an area into which one or multiple objects can be dragged and dropped.
 */
export const DropZone: React.ForwardRefExoticComponent<DropZoneProps & React.RefAttributes<HTMLDivElement>>;
export interface FileTriggerProps {
    /**
     * Specifies what mime type of files are allowed.
     */
    acceptedFileTypes?: Array<string>;
    /**
     * Whether multiple files can be selected.
     */
    allowsMultiple?: boolean;
    /**
     * Specifies the use of a media capture mechanism to capture the media on the spot.
     */
    defaultCamera?: 'user' | 'environment';
    /**
     * Handler when a user selects a file.
     */
    onSelect?: (files: FileList | null) => void;
    /**
     * The children of the component.
     */
    children?: ReactNode;
    /**
     * Enables the selection of directories instead of individual files.
     */
    acceptDirectory?: boolean;
}
/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */
export const FileTrigger: React.ForwardRefExoticComponent<FileTriggerProps & React.RefAttributes<HTMLInputElement>>;
export interface GridListRenderProps {
    /**
     * Whether the list has no items and should display its empty state.
     * @selector [data-empty]
     */
    isEmpty: boolean;
    /**
     * Whether the grid list is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the grid list is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the grid list is currently the active drop target.
     * @selector [data-drop-target]
     */
    isDropTarget: boolean;
    /**
     * Whether the items are arranged in a stack or grid.
     * @selector [data-layout="stack | grid"]
     */
    layout: 'stack' | 'grid';
    /**
     * State of the grid list.
     */
    state: ListState<unknown>;
}
export interface GridListProps<T> extends Omit<AriaGridListProps<T>, 'children'>, CollectionProps<T>, StyleRenderProps<GridListRenderProps>, SlotProps, ScrollableProps<HTMLDivElement> {
    /** How multiple selection should behave in the collection. */
    selectionBehavior?: SelectionBehavior;
    /** The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the GridList. */
    dragAndDropHooks?: DragAndDropHooks;
    /** Provides content to display when there are no items in the list. */
    renderEmptyState?: (props: GridListRenderProps) => ReactNode;
    /**
     * Whether the items are arranged in a stack or grid.
     * @default 'stack'
     */
    layout?: 'stack' | 'grid';
}
export const GridListContext: React.Context<ContextValue<GridListProps<any>, HTMLDivElement>>;
/**
 * A grid list displays a list of interactive items, with support for keyboard navigation,
 * single or multiple selection, and row actions.
 */
export const GridList: <T extends object>(props: GridListProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface GridListItemRenderProps extends ItemRenderProps {
}
export interface GridListItemProps<T = object> extends RenderProps<GridListItemRenderProps>, LinkDOMProps, _HoverEvents1 {
    /** The unique id of the item. */
    id?: Key;
    /** The object value that this item represents. When using dynamic collections, this is set automatically. */
    value?: T;
    /** A string representation of the item's contents, used for features like typeahead. */
    textValue?: string;
    /** Whether the item is disabled. */
    isDisabled?: boolean;
    /**
     * Handler that is called when a user performs an action on the item. The exact user event depends on
     * the collection's `selectionBehavior` prop and the interaction modality.
     */
    onAction?: () => void;
}
/**
 * A GridListItem represents an individual item in a GridList.
 */
export const GridListItem: <T extends object>(props: GridListItemProps<T> & React.RefAttributes<T>) => React.ReactElement | null;
export interface MeterProps extends Omit<AriaMeterProps, 'label'>, RenderProps<MeterRenderProps>, SlotProps {
}
export interface MeterRenderProps {
    /**
     * The value as a percentage between the minimum and maximum.
     */
    percentage: number;
    /**
     * A formatted version of the value.
     * @selector [aria-valuetext]
     */
    valueText: string | undefined;
}
export const MeterContext: React.Context<ContextValue<MeterProps, HTMLDivElement>>;
/**
 * A meter represents a quantity within a known range, or a fractional value.
 */
export const Meter: (props: MeterProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface ModalOverlayProps extends AriaModalOverlayProps, OverlayTriggerProps, RenderProps<ModalRenderProps>, SlotProps {
    /**
     * Whether the modal is currently performing an entry animation.
     */
    isEntering?: boolean;
    /**
     * Whether the modal is currently performing an exit animation.
     */
    isExiting?: boolean;
    /**
     * The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.
     * @default document.body
     */
    UNSTABLE_portalContainer?: Element;
}
export const ModalContext: React.Context<ContextValue<ModalOverlayProps, HTMLDivElement>>;
export interface ModalRenderProps {
    /**
     * Whether the modal is currently entering. Use this to apply animations.
     * @selector [data-entering]
     */
    isEntering: boolean;
    /**
     * Whether the modal is currently exiting. Use this to apply animations.
     * @selector [data-exiting]
     */
    isExiting: boolean;
    /**
     * State of the modal.
     */
    state: OverlayTriggerState;
}
/**
 * A modal is an overlay element which blocks interaction with elements outside it.
 */
export const Modal: (props: ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A ModalOverlay is a wrapper for a Modal which allows customizing the backdrop element.
 */
export const ModalOverlay: (props: ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface NumberFieldRenderProps {
    /**
     * Whether the number field is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the number field is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * State of the number field.
     */
    state: NumberFieldState;
}
export interface NumberFieldProps extends Omit<AriaNumberFieldProps, 'label' | 'placeholder' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, InputDOMProps, RenderProps<NumberFieldRenderProps>, SlotProps {
}
export const NumberFieldContext: React.Context<ContextValue<NumberFieldProps, HTMLDivElement>>;
export const NumberFieldStateContext: React.Context<NumberFieldState | null>;
/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
 */
export const NumberField: (props: NumberFieldProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'children' | 'label' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, RenderProps<RadioGroupRenderProps>, SlotProps {
}
export interface RadioProps extends Omit<AriaRadioProps, 'children'>, HoverEvents, RenderProps<RadioRenderProps>, SlotProps {
    /**
     * A ref for the HTML input element.
     */
    inputRef?: RefObject<HTMLInputElement | null>;
}
export interface RadioGroupRenderProps {
    /**
     * The orientation of the radio group.
     * @selector [data-orientation="horizontal | vertical"]
     */
    orientation: Orientation;
    /**
     * Whether the radio group is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the radio group is read only.
     * @selector [data-readonly]
     */
    isReadOnly: boolean;
    /**
     * Whether the radio group is required.
     * @selector [data-required]
     */
    isRequired: boolean;
    /**
     * Whether the radio group is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * State of the radio group.
     */
    state: RadioGroupState;
}
export interface RadioRenderProps {
    /**
     * Whether the radio is selected.
     * @selector [data-selected]
     */
    isSelected: boolean;
    /**
     * Whether the radio is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the radio is currently in a pressed state.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the radio is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the radio is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the radio is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the radio is read only.
     * @selector [data-readonly]
     */
    isReadOnly: boolean;
    /**
     * Whether the radio is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * Whether the checkbox is required.
     * @selector [data-required]
     */
    isRequired: boolean;
}
export const RadioGroupContext: React.Context<ContextValue<RadioGroupProps, HTMLDivElement>>;
export const RadioContext: React.Context<ContextValue<Partial<RadioProps>, HTMLLabelElement>>;
export const RadioGroupStateContext: React.Context<RadioGroupState | null>;
/**
 * A radio group allows a user to select a single item from a list of mutually exclusive options.
 */
export const RadioGroup: (props: RadioGroupProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A radio represents an individual option within a radio group.
 */
export const Radio: (props: RadioProps & React.RefAttributes<HTMLLabelElement>) => React.ReactElement | null;
export interface SearchFieldRenderProps {
    /**
     * Whether the search field is empty.
     * @selector [data-empty]
     */
    isEmpty: boolean;
    /**
     * Whether the search field is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the search field is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * State of the search field.
     */
    state: SearchFieldState;
}
export interface SearchFieldProps extends Omit<AriaSearchFieldProps, 'label' | 'placeholder' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, RenderProps<SearchFieldRenderProps>, SlotProps {
}
export const SearchFieldContext: React.Context<ContextValue<SearchFieldProps, HTMLDivElement>>;
/**
 * A search field allows a user to enter and clear a search query.
 */
export const SearchField: (props: SearchFieldProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface SelectRenderProps {
    /**
     * Whether the select is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the select is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the select is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the select is currently open.
     * @selector [data-open]
     */
    isOpen: boolean;
    /**
     * Whether the select is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * Whether the select is required.
     * @selector [data-required]
     */
    isRequired: boolean;
}
export interface SelectProps<T extends object = {}> extends Omit<AriaSelectProps<T>, 'children' | 'label' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior' | 'items'>, RACValidation, RenderProps<SelectRenderProps>, SlotProps {
}
export const SelectContext: React.Context<ContextValue<SelectProps<any>, HTMLDivElement>>;
export const SelectStateContext: React.Context<SelectState<unknown> | null>;
/**
 * A select displays a collapsible list of options and allows a user to select one of them.
 */
export const Select: <T extends object = {}>(props: SelectProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface SelectValueRenderProps<T> {
    /**
     * Whether the value is a placeholder.
     * @selector [data-placeholder]
     */
    isPlaceholder: boolean;
    /** The object value of the currently selected item. */
    selectedItem: T | null;
    /** The textValue of the currently selected item. */
    selectedText: string | null;
}
export interface SelectValueProps<T extends object> extends Omit<HTMLAttributes<HTMLElement>, keyof RenderProps<unknown>>, RenderProps<SelectValueRenderProps<T>> {
}
export const SelectValueContext: React.Context<ContextValue<SelectValueProps<any>, HTMLSpanElement>>;
/**
 * SelectValue renders the current value of a Select, or a placeholder if no value is selected.
 * It is usually placed within the button element.
 */
export const SelectValue: <T extends object>(props: SelectValueProps<T> & React.RefAttributes<HTMLSpanElement>) => React.ReactElement | null;
export interface SwitchProps extends Omit<AriaSwitchProps, 'children'>, HoverEvents, RenderProps<SwitchRenderProps>, SlotProps {
    /**
     * A ref for the HTML input element.
     */
    inputRef?: RefObject<HTMLInputElement | null>;
}
export interface SwitchRenderProps {
    /**
     * Whether the switch is selected.
     * @selector [data-selected]
     */
    isSelected: boolean;
    /**
     * Whether the switch is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the switch is currently in a pressed state.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the switch is focused, either via a mouse or keyboard.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the switch is keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the switch is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the switch is read only.
     * @selector [data-readonly]
     */
    isReadOnly: boolean;
    /**
     * State of the switch.
     */
    state: ToggleState;
}
export const SwitchContext: React.Context<ContextValue<SwitchProps, HTMLLabelElement>>;
/**
 * A switch allows a user to turn a setting on or off.
 */
export const Switch: (props: SwitchProps & React.RefAttributes<HTMLLabelElement>) => React.ReactElement | null;
export interface ResizableTableContainerProps extends DOMProps, ScrollableProps<HTMLDivElement> {
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
}
export const ResizableTableContainer: React.ForwardRefExoticComponent<ResizableTableContainerProps & React.RefAttributes<HTMLDivElement>>;
export const TableContext: React.Context<ContextValue<TableProps, HTMLTableElement>>;
export const TableStateContext: React.Context<TableState<any> | null>;
export const TableColumnResizeStateContext: React.Context<TableColumnResizeState<unknown> | null>;
export interface TableRenderProps {
    /**
     * Whether the table is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the table is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the table is currently the active drop target.
     * @selector [data-drop-target]
     */
    isDropTarget: boolean;
    /**
     * State of the table.
     */
    state: TableState<unknown>;
}
export interface TableProps extends Omit<_TableProps1<any>, 'children'>, StyleRenderProps<TableRenderProps>, SlotProps, AriaLabelingProps, ScrollableProps<HTMLTableElement> {
    /** The elements that make up the table. Includes the TableHeader, TableBody, Columns, and Rows. */
    children?: ReactNode;
    /**
     * How multiple selection should behave in the collection.
     * @default "toggle"
     */
    selectionBehavior?: SelectionBehavior;
    /**
     * Whether `disabledKeys` applies to all interactions, or only selection.
     * @default "selection"
     */
    disabledBehavior?: DisabledBehavior;
    /** Handler that is called when a user performs an action on the row. */
    onRowAction?: (key: Key) => void;
    /** The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the Table. */
    dragAndDropHooks?: DragAndDropHooks;
}
/**
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys,
 * and optionally supports row selection and sorting.
 */
export const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
interface TableOptionsContextValue {
    /** The type of selection that is allowed in the table. */
    selectionMode: SelectionMode;
    /** The selection behavior for the table. If selectionMode is `"none"`, this will be `null`. */
    selectionBehavior: SelectionBehavior | null;
    /** Whether the table allows empty selection. */
    disallowEmptySelection: boolean;
    /** Whether the table allows rows to be dragged. */
    allowsDragging: boolean;
}
/**
 * Returns options from the parent `<Table>` component.
 */
export function useTableOptions(): TableOptionsContextValue;
interface TableHeaderRenderProps {
    /**
     * Whether the table header is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
}
export interface TableHeaderProps<T> extends StyleRenderProps<TableHeaderRenderProps>, _HoverEvents1 {
    /** A list of table columns. */
    columns?: T[];
    /** A list of `Column(s)` or a function. If the latter, a list of columns must be provided using the `columns` prop. */
    children?: ReactNode | ((item: T) => ReactElement);
    /** Values that should invalidate the column cache when using dynamic collections. */
    dependencies?: any[];
}
/**
 * A header within a `<Table>`, containing the table columns.
 */
export const TableHeader: <T extends object>(props: TableHeaderProps<T> & React.RefAttributes<HTMLTableSectionElement>) => React.ReactElement | null;
export interface ColumnRenderProps {
    /**
     * Whether the item is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the item is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the item is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the column allows sorting.
     * @selector [data-allows-sorting]
     */
    allowsSorting: boolean;
    /**
     * The current sort direction.
     * @selector [data-sort-direction="ascending | descending"]
     */
    sortDirection: SortDirection | undefined;
    /**
     * Whether the column is currently being resized.
     * @selector [data-resizing]
     */
    isResizing: boolean;
    /**
     * Triggers sorting for this column in the given direction.
     */
    sort(direction: SortDirection): void;
    /**
     * Starts column resizing if the table is contained in a `<ResizableTableContainer>` element.
     */
    startResize(): void;
}
export interface ColumnProps extends RenderProps<ColumnRenderProps> {
    /** The unique id of the column. */
    id?: Key;
    /** Whether the column allows sorting. */
    allowsSorting?: boolean;
    /** Whether a column is a [row header](https://www.w3.org/TR/wai-aria-1.1/#rowheader) and should be announced by assistive technology during row navigation. */
    isRowHeader?: boolean;
    /** A string representation of the column's contents, used for accessibility announcements. */
    textValue?: string;
    /** The width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`. */
    width?: ColumnSize | null;
    /** The default width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`. */
    defaultWidth?: ColumnSize | null;
    /** The minimum width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`. */
    minWidth?: ColumnStaticSize | null;
    /** The maximum width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`. */
    maxWidth?: ColumnStaticSize | null;
}
/**
 * A column within a `<Table>`.
 */
export const Column: (props: ColumnProps & React.RefAttributes<object>) => React.ReactElement | null;
export interface ColumnResizerRenderProps {
    /**
     * Whether the resizer is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the resizer is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the resizer is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the resizer is currently being resized.
     * @selector [data-resizing]
     */
    isResizing: boolean;
    /**
     * The direction that the column is currently resizable.
     * @selector [data-resizable-direction="right | left | both"]
     */
    resizableDirection: 'right' | 'left' | 'both';
}
export interface ColumnResizerProps extends _HoverEvents1, RenderProps<ColumnResizerRenderProps> {
    /** A custom accessibility label for the resizer. */
    'aria-label'?: string;
}
export const ColumnResizer: React.ForwardRefExoticComponent<ColumnResizerProps & React.RefAttributes<HTMLDivElement>>;
export interface TableBodyRenderProps {
    /**
     * Whether the table body has no rows and should display its empty state.
     * @selector [data-empty]
     */
    isEmpty: boolean;
    /**
     * Whether the Table is currently the active drop target.
     * @selector [data-drop-target]
     */
    isDropTarget: boolean;
}
export interface TableBodyProps<T> extends CollectionProps<T>, StyleRenderProps<TableBodyRenderProps> {
    /** Provides content to display when there are no rows in the table. */
    renderEmptyState?: (props: TableBodyRenderProps) => ReactNode;
}
/**
 * The body of a `<Table>`, containing the table rows.
 */
export const TableBody: <T extends object>(props: TableBodyProps<T> & React.RefAttributes<HTMLTableSectionElement>) => React.ReactElement | null;
export interface RowRenderProps extends ItemRenderProps {
    /** Whether the row's children have keyboard focus. */
    isFocusVisibleWithin: boolean;
}
export interface RowProps<T> extends StyleRenderProps<RowRenderProps>, LinkDOMProps, _HoverEvents1 {
    /** The unique id of the row. */
    id?: Key;
    /** A list of columns used when dynamically rendering cells. */
    columns?: Iterable<T>;
    /** The cells within the row. Supports static items or a function for dynamic rendering. */
    children?: ReactNode | ((item: T) => ReactElement);
    /** The object value that this row represents. When using dynamic collections, this is set automatically. */
    value?: T;
    /** Values that should invalidate the cell cache when using dynamic collections. */
    dependencies?: any[];
    /** A string representation of the row's contents, used for features like typeahead. */
    textValue?: string;
    /** Whether the row is disabled. */
    isDisabled?: boolean;
    /**
     * Handler that is called when a user performs an action on the row. The exact user event depends on
     * the collection's `selectionBehavior` prop and the interaction modality.
     */
    onAction?: () => void;
}
/**
 * A row within a `<Table>`.
 */
export const Row: <T extends object>(props: RowProps<T> & React.RefAttributes<HTMLTableRowElement>) => React.ReactElement | null;
export interface CellRenderProps {
    /**
     * Whether the cell is currently in a pressed state.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the cell is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the cell is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the cell is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
}
export interface CellProps extends RenderProps<CellRenderProps> {
    /** The unique id of the cell. */
    id?: Key;
    /** A string representation of the cell's contents, used for features like typeahead. */
    textValue?: string;
}
/**
 * A cell within a table row.
 */
export const Cell: (props: CellProps & React.RefAttributes<object>) => React.ReactElement | null;
interface TableLoadingIndicatorProps extends StyleProps {
    children?: ReactNode;
}
export const UNSTABLE_TableLoadingIndicator: <T extends object>(props: TableLoadingIndicatorProps & React.RefAttributes<T>) => React.ReactElement | null;
interface LayoutOptionsDelegate<O> {
    useLayoutOptions?(): O;
}
interface ILayout<O> extends Layout<_Node1<unknown>, O>, Partial<DropTargetDelegate>, LayoutOptionsDelegate<O> {
}
export interface VirtualizerProps<O> {
    /** The child collection to virtualize (e.g. ListBox, GridList, or Table). */
    children: ReactNode;
    /** The layout object that determines the position and size of the visible elements. */
    layout: ILayout<O>;
    /** Options for the layout. */
    layoutOptions?: O;
}
export function UNSTABLE_Virtualizer<O>(props: VirtualizerProps<O>): React.JSX.Element;
export class UNSTABLE_TableLayout<T> extends TableLayout<T> implements LayoutOptionsDelegate<TableLayoutProps> {
    useLayoutOptions(): {
        columnWidths: Map<_Key1, number> | undefined;
    };
}
export interface TabsProps extends Omit<AriaTabListProps<any>, 'items' | 'children'>, RenderProps<TabsRenderProps>, SlotProps {
}
export interface TabsRenderProps {
    /**
     * The orientation of the tabs.
     * @selector [data-orientation="horizontal | vertical"]
     */
    orientation: Orientation;
}
export interface TabListProps<T> extends StyleRenderProps<TabListRenderProps>, AriaLabelingProps, Omit<CollectionProps<T>, 'disabledKeys'> {
}
export interface TabListRenderProps {
    /**
     * The orientation of the tab list.
     * @selector [data-orientation="horizontal | vertical"]
     */
    orientation: Orientation;
    /**
     * State of the tab list.
     */
    state: TabListState<unknown>;
}
export interface TabProps extends RenderProps<TabRenderProps>, AriaLabelingProps, LinkDOMProps, _HoverEvents1 {
    /** The unique id of the tab. */
    id?: Key;
    /** Whether the tab is disabled. */
    isDisabled?: boolean;
}
export interface TabRenderProps {
    /**
     * Whether the tab is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
    /**
     * Whether the tab is currently in a pressed state.
     * @selector [data-pressed]
     */
    isPressed: boolean;
    /**
     * Whether the tab is currently selected.
     * @selector [data-selected]
     */
    isSelected: boolean;
    /**
     * Whether the tab is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the tab is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the tab is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
}
export interface TabPanelProps extends AriaTabPanelProps, RenderProps<TabPanelRenderProps> {
    /**
     * Whether to mount the tab panel in the DOM even when it is not currently selected.
     * Inactive tab panels are inert and cannot be interacted with. They must be styled appropriately so this is clear to the user visually.
     * @default false
     */
    shouldForceMount?: boolean;
}
export interface TabPanelRenderProps {
    /**
     * Whether the tab panel is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the tab panel is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * Whether the tab panel is currently non-interactive. This occurs when the
     * `shouldForceMount` prop is true, and the corresponding tab is not selected.
     * @selector [data-inert]
     */
    isInert: boolean;
    /**
     * State of the tab list.
     */
    state: TabListState<unknown>;
}
export const TabsContext: React.Context<ContextValue<TabsProps, HTMLDivElement>>;
export const TabListStateContext: React.Context<TabListState<object> | null>;
/**
 * Tabs organize content into multiple sections and allow users to navigate between them.
 */
export const Tabs: (props: TabsProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A TabList is used within Tabs to group tabs that a user can switch between.
 * The ids of the items within the <TabList> must match up with a corresponding item inside the <TabPanels>.
 */
export const TabList: <T extends object>(props: TabListProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A Tab provides a title for an individual item within a TabList.
 */
export const Tab: (props: TabProps & React.RefAttributes<object>) => React.ReactElement | null;
/**
 * A TabPanel provides the content for a tab.
 */
export const TabPanel: (props: TabPanelProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface TagGroupProps extends Omit<AriaTagGroupProps<unknown>, 'children' | 'items' | 'label' | 'description' | 'errorMessage' | 'keyboardDelegate'>, DOMProps, SlotProps {
}
export interface TagListRenderProps {
    /**
     * Whether the tag list has no items and should display its empty state.
     * @selector [data-empty]
     */
    isEmpty: boolean;
    /**
     * Whether the tag list is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the tag list is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * State of the TagGroup.
     */
    state: ListState<unknown>;
}
export interface TagListProps<T> extends Omit<CollectionProps<T>, 'disabledKeys'>, StyleRenderProps<TagListRenderProps> {
    /** Provides content to display when there are no items in the tag list. */
    renderEmptyState?: (props: TagListRenderProps) => ReactNode;
}
export const TagGroupContext: React.Context<ContextValue<TagGroupProps, HTMLDivElement>>;
export const TagListContext: React.Context<ContextValue<TagListProps<any>, HTMLDivElement>>;
/**
 * A tag group is a focusable list of labels, categories, keywords, filters, or other items, with support for keyboard navigation, selection, and removal.
 */
export const TagGroup: (props: TagGroupProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
/**
 * A tag list is a container for tags within a TagGroup.
 */
export const TagList: <T extends object>(props: TagListProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface TagRenderProps extends Omit<ItemRenderProps, 'allowsDragging' | 'isDragging' | 'isDropTarget'> {
    /**
     * Whether the tag group allows items to be removed.
     * @selector [data-allows-removing]
     */
    allowsRemoving: boolean;
}
export interface TagProps extends RenderProps<TagRenderProps>, LinkDOMProps, _HoverEvents1 {
    /** A unique id for the tag. */
    id?: Key;
    /**
     * A string representation of the tags's contents, used for accessibility.
     * Required if children is not a plain text string.
     */
    textValue?: string;
    /** Whether the tag is disabled. */
    isDisabled?: boolean;
}
/**
 * A Tag is an individual item within a TagList.
 */
export const Tag: (props: TagProps & React.RefAttributes<object>) => React.ReactElement | null;
export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style'>, HoverEvents, StyleRenderProps<InputRenderProps> {
}
export const TextAreaContext: React.Context<ContextValue<TextAreaProps, HTMLTextAreaElement>>;
/**
 * A textarea allows a user to input mult-line text.
 */
export const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export interface TextFieldRenderProps {
    /**
     * Whether the text field is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * Whether the value is invalid.
     * @selector [data-invalid]
     */
    isInvalid: boolean;
    /**
     * Whether the text field is read only.
     * @selector [data-readonly]
     */
    isReadOnly: boolean;
    /**
     * Whether the text field is required.
     * @selector [data-required]
     */
    isRequired: boolean;
}
export interface TextFieldProps extends Omit<AriaTextFieldProps, 'label' | 'placeholder' | 'description' | 'errorMessage' | 'validationState' | 'validationBehavior'>, RACValidation, Omit<DOMProps, 'style' | 'className' | 'children'>, SlotProps, RenderProps<TextFieldRenderProps> {
    /** Whether the value is invalid. */
    isInvalid?: boolean;
}
export const TextFieldContext: React.Context<ContextValue<TextFieldProps, HTMLDivElement>>;
/**
 * A text field allows a user to enter a plain text value with a keyboard.
 */
export const TextField: (props: TextFieldProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface ToggleButtonGroupRenderProps {
    /**
     * Whether the toggle button group is disabled.
     * @selector [data-disabled]
     */
    isDisabled: boolean;
    /**
     * State of the toggle button group.
     */
    state: ToggleGroupState;
}
export interface ToggleButtonGroupProps extends AriaToggleButtonGroupProps, RenderProps<ToggleButtonGroupRenderProps>, SlotProps {
}
export const ToggleButtonGroupContext: React.Context<ContextValue<ToggleButtonGroupProps, HTMLDivElement>>;
export const ToggleGroupStateContext: React.Context<ToggleGroupState | null>;
/**
 * A toggle button group allows a user to toggle multiple options, with single or multiple selection.
 */
export const ToggleButtonGroup: (props: ToggleButtonGroupProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface ToggleButtonRenderProps extends Omit<ButtonRenderProps, 'isPending'> {
    /**
     * Whether the button is currently selected.
     * @selector [data-selected]
     */
    isSelected: boolean;
    /**
     * State of the toggle button.
     */
    state: ToggleState;
}
export interface ToggleButtonProps extends Omit<AriaToggleButtonProps, 'children' | 'elementType' | 'id'>, HoverEvents, SlotProps, RenderProps<ToggleButtonRenderProps> {
    /** When used in a ToggleButtonGroup, an identifier for the item in `selectedKeys`. When used standalone, a DOM id. */
    id?: Key;
}
export const ToggleButtonContext: React.Context<ContextValue<ToggleButtonProps, HTMLButtonElement>>;
/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 */
export const ToggleButton: (props: ToggleButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
export interface ToolbarRenderProps {
    /**
     * The current orientation of the toolbar.
     * @selector [data-orientation]
     */
    orientation: _Orientation2;
}
export interface ToolbarProps extends AriaToolbarProps, SlotProps, RenderProps<ToolbarRenderProps> {
}
export const ToolbarContext: React.Context<ContextValue<ToolbarProps, HTMLDivElement>>;
/**
 * A toolbar is a container for a set of interactive controls, such as buttons, dropdown menus, or checkboxes,
 * with arrow key navigation.
 */
export const Toolbar: (props: ToolbarProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface TooltipTriggerComponentProps extends TooltipTriggerProps {
    children: ReactNode;
}
export interface TooltipProps extends PositionProps, Pick<AriaPositionProps, 'arrowBoundaryOffset'>, OverlayTriggerProps, AriaLabelingProps, RenderProps<TooltipRenderProps> {
    /**
     * The ref for the element which the tooltip positions itself with respect to.
     *
     * When used within a TooltipTrigger this is set automatically. It is only required when used standalone.
     */
    triggerRef?: RefObject<Element | null>;
    /**
     * Whether the tooltip is currently performing an entry animation.
     */
    isEntering?: boolean;
    /**
     * Whether the tooltip is currently performing an exit animation.
     */
    isExiting?: boolean;
    /**
     * The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.
     * @default document.body
     */
    UNSTABLE_portalContainer?: Element;
    /**
     * The placement of the tooltip with respect to the trigger.
     * @default 'top'
     */
    placement?: Placement;
}
export interface TooltipRenderProps {
    /**
     * The placement of the tooltip relative to the trigger.
     * @selector [data-placement="left | right | top | bottom"]
     */
    placement: PlacementAxis | null;
    /**
     * Whether the tooltip is currently entering. Use this to apply animations.
     * @selector [data-entering]
     */
    isEntering: boolean;
    /**
     * Whether the tooltip is currently exiting. Use this to apply animations.
     * @selector [data-exiting]
     */
    isExiting: boolean;
    /**
     * State of the tooltip.
     */
    state: TooltipTriggerState;
}
export const TooltipTriggerStateContext: React.Context<TooltipTriggerState | null>;
export const TooltipContext: React.Context<ContextValue<TooltipProps, HTMLDivElement>>;
/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */
export function TooltipTrigger(props: TooltipTriggerComponentProps): React.JSX.Element;
/**
 * A tooltip displays a description of an element on hover or focus.
 */
export const Tooltip: (props: TooltipProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface TreeRenderProps {
    /**
     * Whether the tree has no items and should display its empty state.
     * @selector [data-empty]
     */
    isEmpty: boolean;
    /**
     * Whether the tree is currently focused.
     * @selector [data-focused]
     */
    isFocused: boolean;
    /**
     * Whether the tree is currently keyboard focused.
     * @selector [data-focus-visible]
     */
    isFocusVisible: boolean;
    /**
     * State of the tree.
     */
    state: TreeState<unknown>;
}
interface TreeEmptyStateRenderProps extends Omit<TreeRenderProps, 'isEmpty'> {
}
export interface TreeProps<T> extends Omit<AriaTreeGridListProps<T>, 'children'>, CollectionProps<T>, StyleRenderProps<TreeRenderProps>, SlotProps, ScrollableProps<HTMLDivElement>, Expandable {
    /** How multiple selection should behave in the tree. */
    selectionBehavior?: SelectionBehavior;
    /** Provides content to display when there are no items in the list. */
    renderEmptyState?: (props: TreeEmptyStateRenderProps) => ReactNode;
    /**
     * Whether `disabledKeys` applies to all interactions, or only selection.
     * @default 'selection'
     */
    disabledBehavior?: _DisabledBehavior1;
}
export const UNSTABLE_TreeContext: React.Context<ContextValue<TreeProps<any>, HTMLDivElement>>;
export const UNSTABLE_TreeStateContext: React.Context<TreeState<any> | null>;
/**
 * A tree provides users with a way to navigate nested hierarchical information, with support for keyboard navigation
 * and selection.
 */
export const UNSTABLE_Tree: <T extends object>(props: TreeProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export interface TreeItemRenderProps extends Omit<ItemRenderProps, 'allowsDragging' | 'isDragging' | 'isDropTarget'> {
    /** Whether the tree item is expanded. */
    isExpanded: boolean;
    /** Whether the tree item's children have keyboard focus. */
    isFocusVisibleWithin: boolean;
}
export interface TreeItemContentRenderProps extends ItemRenderProps {
    isExpanded: boolean;
    hasChildRows: boolean;
    level: number;
    isFocusVisibleWithin: boolean;
}
export interface TreeItemContentProps extends Pick<RenderProps<TreeItemContentRenderProps>, 'children'> {
}
export const UNSTABLE_TreeItemContent: (props: TreeItemContentProps & React.RefAttributes<object>) => React.ReactElement | null;
export interface TreeItemProps<T = object> extends StyleRenderProps<TreeItemRenderProps>, LinkDOMProps, _HoverEvents1 {
    /** The unique id of the tree row. */
    id?: Key;
    /** The object value that this tree item represents. When using dynamic collections, this is set automatically. */
    value?: T;
    /** A string representation of the tree item's contents, used for features like typeahead. */
    textValue: string;
    /** An accessibility label for this tree item. */
    'aria-label'?: string;
    /** The content of the tree item along with any nested children. Supports static nested tree items or use of a Collection to dynamically render nested tree items. */
    children: ReactNode;
}
/**
 * A TreeItem represents an individual item in a Tree.
 */
export const UNSTABLE_TreeItem: <T extends object>(props: TreeItemProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
interface TreeLoadingIndicatorRenderProps {
    /**
     * What level the tree item has within the tree.
     * @selector [data-level]
     */
    level: number;
}
interface TreeLoaderProps extends RenderProps<TreeLoadingIndicatorRenderProps>, StyleRenderProps<TreeLoadingIndicatorRenderProps> {
}
export const UNSTABLE_TreeLoadingIndicator: <T extends object>(props: TreeLoaderProps & React.RefAttributes<T>) => React.ReactElement | null;
export { Collection, createLeafComponent as UNSTABLE_createLeafComponent, createBranchComponent as UNSTABLE_createBranchComponent, CollectionBuilder as UNSTABLE_CollectionBuilder } from '@react-aria/collections';
export { DIRECTORY_DRAG_TYPE, isDirectoryDropItem, isFileDropItem, isTextDropItem, SSRProvider, RouterProvider, I18nProvider, useLocale } from 'react-aria';
export { FormValidationContext } from 'react-stately';
export { parseColor, getColorChannels } from '@react-stately/color';
export { ListLayout as UNSTABLE_ListLayout, GridLayout as UNSTABLE_GridLayout } from '@react-stately/layout';
export type { DateValue, DateRange, TimeValue } from 'react-aria';
export type { DirectoryDropItem, DraggableCollectionEndEvent, DraggableCollectionMoveEvent, DraggableCollectionStartEvent, DragPreviewRenderer, DragTypes, DropItem, DropOperation, DroppableCollectionDropEvent, DroppableCollectionEnterEvent, DroppableCollectionExitEvent, DroppableCollectionInsertDropEvent, DroppableCollectionMoveEvent, DroppableCollectionOnItemDropEvent, DroppableCollectionReorderEvent, DroppableCollectionRootDropEvent, DropPosition, DropTarget, FileDropItem, ItemDropTarget, RootDropTarget, TextDropItem, PressEvent } from 'react-aria';
export type { Key, Selection, SortDescriptor, SortDirection, SelectionMode } from 'react-stately';
export type { ValidationResult, RouterConfig } from '@react-types/shared';
export type { Color, ColorSpace, ColorFormat } from '@react-types/color';
export type { ListLayoutOptions, GridLayoutOptions } from '@react-stately/layout';

//# sourceMappingURL=types.d.ts.map
