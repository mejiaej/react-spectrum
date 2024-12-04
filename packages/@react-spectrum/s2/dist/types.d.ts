import React, { CSSProperties, ReactNode, Context, RefAttributes, ForwardRefExoticComponent, JSXElementConstructor, ReactElement, ReactPortal, JSX, HTMLAttributeReferrerPolicy, ComponentType, FunctionComponent, SVGProps, RefObject } from "react";
import { ContextValue, SlotProps, FormProps as _FormProps1, ButtonProps as _ButtonProps1, DisclosurePanelProps as _DisclosurePanelProps1, DisclosureProps as _DisclosureProps1, DisclosureGroupProps, CheckboxProps as _CheckboxProps1, SeparatorProps, PopoverProps as _PopoverProps1, DialogProps as _DialogProps1, MenuItemProps as _MenuItemProps1, MenuProps as _MenuProps1, MenuSectionProps as _MenuSectionProps1, MenuTriggerProps as _MenuTriggerProps1, SubmenuTriggerProps as _SubmenuTriggerProps1, ProgressBarProps as _ProgressBarProps1, LinkProps as _LinkProps1, BreadcrumbsProps as _BreadcrumbsProps1, GridListItemProps, GridListProps, DialogTriggerProps as _DialogTriggerProps1, CheckboxGroupProps as _CheckboxGroupProps1, ColorAreaProps as _ColorAreaProps1, ColorFieldProps as _ColorFieldProps1, ColorSliderProps as _ColorSliderProps1, ColorSwatchProps as _ColorSwatchProps1, ColorWheelProps as _ColorWheelProps1, SelectProps, ListBoxItemProps, ListBoxProps, SectionProps, ComboBoxProps as _ComboBoxProps1, DropZoneProps as _DropZoneProps1, MeterProps as _MeterProps1, NumberFieldProps as _NumberFieldProps1, RadioProps as _RadioProps1, RadioGroupProps as _RadioGroupProps1, SliderProps as _SliderProps1, SearchFieldProps as _SearchFieldProps1, SwitchProps as _SwitchProps1, Key as _Key1, CellProps as _CellProps1, ColumnProps as _ColumnProps1, RowProps as _RowProps1, TableBodyProps as _TableBodyProps1, TableHeaderProps as _TableHeaderProps1, TableProps, TabListProps as _TabListProps1, TabPanelProps as _TabPanelProps1, TabProps as _TabProps1, TabsProps as _TabsProps1, TagGroupProps as _TagGroupProps1, TagProps as _TagProps1, TagListProps, TextFieldProps as _TextFieldProps1, ToggleButtonGroupProps as _ToggleButtonGroupProps1, ToggleButtonProps as _ToggleButtonProps1, TooltipProps as _TooltipProps1, TooltipTriggerComponentProps } from "react-aria-components";
import { DOMProps, DOMRefValue, AriaLabelingProps, SpectrumLabelableProps, FocusableRefValue, LinkDOMProps, LoadingState, HelpTextProps, Orientation, ValueBase, LabelPosition, InputDOMProps, RangeValue, Key } from "@react-types/shared";
import { ColorScheme, Router } from "@react-types/provider";
import { AriaBreadcrumbItemProps } from "react-aria";
import { TextFieldRef } from "@react-types/textfield";
import { Color } from "@react-types/color";
import { SpectrumDialogContainerProps } from "@react-types/dialog";
import { ColumnSize } from "@react-types/table";
type StyleString<P = string> = string & {
    properties: P;
};
declare const allowedOverrides: readonly ["margin", "marginStart", "marginEnd", "marginTop", "marginBottom", "marginX", "marginY", "flex", "flexGrow", "flexShrink", "flexBasis", "justifySelf", "alignSelf", "order", "gridArea", "gridRow", "gridRowStart", "gridRowEnd", "gridColumn", "gridColumnStart", "gridColumnEnd", "position", "zIndex", "top", "bottom", "inset", "insetX", "insetY", "insetStart", "insetEnd"];
declare const widthProperties: readonly ["width", "minWidth", "maxWidth"];
declare const heightProperties: readonly ["size", "height", "minHeight", "maxHeight"];
type StylesProp = StyleString<(typeof allowedOverrides)[number] | (typeof widthProperties)[number]>;
type StylesPropWithHeight = StyleString<(typeof allowedOverrides)[number] | (typeof widthProperties)[number] | (typeof heightProperties)[number]>;
type StylesPropWithoutWidth = StyleString<(typeof allowedOverrides)[number]>;
interface UnsafeStyles {
    /** Sets the CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. Only use as a **last resort**. Use the `style` macro via the `styles` prop instead. */
    UNSAFE_className?: string;
    /** Sets inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. Only use as a **last resort**. Use the `style` macro via the `styles` prop instead. */
    UNSAFE_style?: CSSProperties;
}
interface StyleProps extends UnsafeStyles {
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesProp;
}
export interface ActionButtonGroupProps extends UnsafeStyles, SlotProps {
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
    /** The children of the group. */
    children: ReactNode;
    /**
     * Size of the buttons.
     * @default "M"
     */
    size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
    /**
     * Spacing between the buttons.
     * @default "regular"
     */
    density?: 'compact' | 'regular';
    /** Whether the button should be displayed with a [quiet style](https://spectrum.adobe.com/page/action-button/#Quiet). */
    isQuiet?: boolean;
    /** Whether the buttons should divide the container width equally. */
    isJustified?: boolean;
    /** Whether the button should be displayed with an [emphasized style](https://spectrum.adobe.com/page/action-button/#Emphasis). */
    staticColor?: 'white' | 'black';
    /**
     * The axis the group should align with.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /** Whether the group is disabled. */
    isDisabled?: boolean;
}
export const ActionButtonGroupContext: Context<ContextValue<ActionButtonGroupProps, HTMLDivElement>>;
/**
 * An ActionButtonGroup is a grouping of related ActionButtons.
 */
export const ActionButtonGroup: ForwardRefExoticComponent<ActionButtonGroupProps & RefAttributes<HTMLDivElement>>;
export interface ImageCoordinatorProps {
    /** Children within the ImageCoordinator. */
    children: ReactNode;
    /**
     * Time in milliseconds after which images are always displayed, even if all images are not yet loaded.
     * @default 5000
     */
    timeout?: number;
    /**
     * A group of images to coordinate between, matching the group passed to the `<Image>` component.
     * If not provided, the default image group is used.
     */
    group?: ImageGroup;
}
type ImageGroup = Context<ImageGroupValue>;
interface ImageGroupValue {
    revealAll: boolean;
    register(url: string): void;
    unregister(url: string): void;
    load(url: string): void;
}
/**
 * An ImageCoordinator coordinates loading behavior for a group of images.
 * Images within an ImageCoordinator are revealed together once all of them have loaded.
 */
export function ImageCoordinator(props: ImageCoordinatorProps): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | ReactPortal | Iterable<ReactNode> | null | undefined> | JSX.Element | null | undefined;
export function useIsSkeleton(): boolean;
export interface SkeletonProps {
    children: ReactNode;
    isLoading: boolean;
}
/**
 * A Skeleton wraps around content to render it as a placeholder.
 */
export function Skeleton({ children, isLoading }: SkeletonProps): JSX.Element;
export interface ImageProps extends UnsafeStyles, SlotProps {
    /** The URL of the image. */
    src?: string;
    /** Accessible alt text for the image. */
    alt?: string;
    /**
     * Indicates if the fetching of the image must be done using a CORS request.
     * [See MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin).
     */
    crossOrigin?: 'anonymous' | 'use-credentials';
    /**
     * Whether the browser should decode images synchronously or asynchronously.
     * [See MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding).
     */
    decoding?: 'async' | 'auto' | 'sync';
    /**
     * Whether the image should be loaded immediately or lazily when scrolled into view.
     * [See MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading).
     */
    loading?: 'eager' | 'lazy';
    /**
     * A string indicating which referrer to use when fetching the resource.
     * [See MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy).
     */
    referrerPolicy?: HTMLAttributeReferrerPolicy;
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StyleString;
    /** A function that is called to render a fallback when the image fails to load. */
    renderError?: () => ReactNode;
    /**
     * A group of images to coordinate between, matching the group passed to the `<ImageCoordinator>` component.
     * If not provided, the default image group is used.
     */
    group?: ImageGroup;
}
interface ImageContextValue extends ImageProps {
    hidden?: boolean;
}
export const ImageContext: Context<ContextValue<ImageContextValue, HTMLDivElement>>;
export const Image: ForwardRefExoticComponent<ImageProps & RefAttributes<HTMLDivElement>>;
export interface AvatarProps extends UnsafeStyles, DOMProps, SlotProps {
    /** Text description of the avatar. */
    alt?: string;
    /** The image URL for the avatar. */
    src?: string;
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithoutWidth;
    /**
     * The size of the avatar.
     * @default 24
     */
    size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 80 | 96 | 112 | (number & {});
    /** Whether the avatar is over a color background. */
    isOverBackground?: boolean;
}
export const AvatarContext: Context<ContextValue<AvatarProps, DOMRefValue<HTMLImageElement>>>;
/**
 * An avatar is a thumbnail representation of an entity, such as a user or an organization.
 */
export const Avatar: ForwardRefExoticComponent<AvatarProps & RefAttributes<DOMRefValue<HTMLImageElement>>>;
export interface IconProps extends UnsafeStyles, SlotProps, AriaLabelingProps, DOMProps {
    'aria-hidden'?: boolean | 'false' | 'true';
}
export interface IconContextValue extends UnsafeStyles, SlotProps {
    styles?: StyleString;
    render?: (icon: ReactNode) => ReactNode;
}
interface IllustrationContextValue extends IconContextValue {
    size?: 'S' | 'M' | 'L';
}
export const IconContext: Context<ContextValue<IconContextValue, SVGElement>>;
export const IllustrationContext: Context<ContextValue<IllustrationContextValue, SVGElement>>;
export function createIcon(Component: ComponentType<SVGProps<SVGSVGElement>>, context?: Context<ContextValue<IconContextValue, SVGElement>>): FunctionComponent<IconProps>;
export function pressScale<R extends {
    isPressed: boolean;
}>(ref: RefObject<HTMLElement | null>, style?: CSSProperties | ((renderProps: R) => CSSProperties)): (renderProps: R) => CSSProperties;
interface ContentProps extends UnsafeStyles, SlotProps {
    children?: ReactNode;
    styles?: StyleString;
    isHidden?: boolean;
}
interface HeadingProps extends ContentProps {
    level?: number;
}
export const HeadingContext: Context<ContextValue<HeadingProps, DOMRefValue<HTMLHeadingElement>>>;
export const Heading: ForwardRefExoticComponent<HeadingProps & RefAttributes<DOMRefValue<HTMLHeadingElement>>>;
export const HeaderContext: Context<ContextValue<ContentProps, DOMRefValue<HTMLElement>>>;
export const Header: ForwardRefExoticComponent<ContentProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export const ContentContext: Context<ContextValue<ContentProps, DOMRefValue<HTMLDivElement>>>;
export const Content: ForwardRefExoticComponent<ContentProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export const TextContext: Context<ContextValue<ContentProps, DOMRefValue<HTMLElement>>>;
export const Text: ForwardRefExoticComponent<ContentProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export const KeyboardContext: Context<ContextValue<ContentProps, DOMRefValue<HTMLElement>>>;
export const Keyboard: ForwardRefExoticComponent<ContentProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export const FooterContext: Context<ContextValue<ContentProps, DOMRefValue<HTMLElement>>>;
export const Footer: ForwardRefExoticComponent<ContentProps & RefAttributes<DOMRefValue<HTMLElement>>>;
interface FormStyleProps extends Omit<SpectrumLabelableProps, 'label' | 'contextualHelp'> {
    /**
     * Size of the Form elements.
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /** Whether the Form elements are disabled. */
    isDisabled?: boolean;
    /** Whether the Form elements are rendered with their emphasized style. */
    isEmphasized?: boolean;
}
export interface FormProps extends FormStyleProps, Omit<_FormProps1, 'className' | 'style' | 'children'>, StyleProps {
    children?: ReactNode;
}
/**
 * Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.
 */
export const Form: ForwardRefExoticComponent<FormProps & RefAttributes<DOMRefValue<HTMLFormElement>>>;
interface ActionButtonStyleProps {
    /**
     * The size of the ActionButton.
     *
     * @default 'M'
     */
    size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
    /** The static color style to apply. Useful when the ActionButton appears over a color background. */
    staticColor?: 'black' | 'white';
    /** Whether the button should be displayed with a [quiet style](https://spectrum.adobe.com/page/action-button/#Quiet). */
    isQuiet?: boolean;
}
export interface ActionButtonProps extends Omit<_ButtonProps1, 'className' | 'style' | 'children' | 'onHover' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange' | 'isPending'>, StyleProps, ActionButtonStyleProps {
    /** The content to display in the ActionButton. */
    children?: ReactNode;
}
export const ActionButtonContext: Context<ContextValue<ActionButtonProps, FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
/**
 * ActionButtons allow users to perform an action.
 * They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
 */
export const ActionButton: ForwardRefExoticComponent<ActionButtonProps & RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
export interface DisclosureProps extends Omit<_DisclosureProps1, 'className' | 'style' | 'children'>, StyleProps {
    /**
     * The size of the disclosure.
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * The amount of space between the disclosures.
     * @default 'regular'
     */
    density?: 'compact' | 'regular' | 'spacious';
    /** Whether the disclosure should be displayed with a quiet style. */
    isQuiet?: boolean;
    /** The contents of the disclosure, consisting of a DisclosureTitle and DisclosurePanel. */
    children: ReactNode;
}
export const DisclosureContext: React.Context<ContextValue<Omit<DisclosureProps, "children">, DOMRefValue<HTMLDivElement>>>;
/**
 * A disclosure is a collapsible section of content. It is composed of a a header with a heading and trigger button, and a panel that contains the content.
 */
export const Disclosure: React.ForwardRefExoticComponent<DisclosureProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface DisclosureTitleProps extends UnsafeStyles, DOMProps {
    /** The heading level of the disclosure header.
     *
     * @default 3
     */
    level?: number;
    /** The contents of the disclosure header. */
    children: React.ReactNode;
}
interface DisclosureHeaderProps extends UnsafeStyles, DOMProps {
    children: React.ReactNode;
}
/**
 * A wrapper element for the disclosure title that can contain other elements not part of the trigger.
 */
export const DisclosureHeader: (props: DisclosureHeaderProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>) => React.ReactElement | null;
/**
 * A disclosure title consisting of a heading and a trigger button to expand/collapse the panel.
 */
export const DisclosureTitle: React.ForwardRefExoticComponent<DisclosureTitleProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface DisclosurePanelProps extends Omit<_DisclosurePanelProps1, 'className' | 'style' | 'children'>, UnsafeStyles, DOMProps, AriaLabelingProps {
    children: React.ReactNode;
}
/**
 * A disclosure panel is a collapsible section of content that is hidden until the disclosure is expanded.
 */
export const DisclosurePanel: React.ForwardRefExoticComponent<DisclosurePanelProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface AccordionProps extends Omit<DisclosureGroupProps, 'className' | 'style' | 'children'>, UnsafeStyles, DOMProps, SlotProps {
    /** The disclosure elements in the accordion. */
    children: React.ReactNode;
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
    /**
     * The size of the accordion.
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * The amount of space between the disclosure items.
     * @default 'regular'
     */
    density?: 'compact' | 'regular' | 'spacious';
    /** Whether the accordion should be displayed with a quiet style. */
    isQuiet?: boolean;
}
export const AccordionContext: React.Context<ContextValue<AccordionProps, DOMRefValue<HTMLDivElement>>>;
/**
 * An accordion is a container for multiple disclosures.
 */
export const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface CheckboxStyleProps {
    /**
     * The size of the Checkbox.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /** Whether the Checkbox should be displayed with an emphasized style. */
    isEmphasized?: boolean;
}
export interface CheckboxProps extends Omit<_CheckboxProps1, 'className' | 'style' | 'children' | 'onHover' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange'>, StyleProps, CheckboxStyleProps {
    /** The label for the element. */
    children?: ReactNode;
}
export const CheckboxContext: Context<ContextValue<CheckboxProps, FocusableRefValue<HTMLLabelElement, HTMLLabelElement>>>;
/**
 * Checkboxes allow users to select multiple items from a list of individual items,
 * or to mark one individual item as selected.
 */
export const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<FocusableRefValue<HTMLLabelElement, HTMLLabelElement>>>;
interface DividerSpectrumProps {
    /**
     * How thick the Divider should be.
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L';
    /**
     * How thick the Divider should be.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /** The static color style to apply. Useful when the Divider appears over a color background. */
    staticColor?: 'white' | 'black';
}
export interface DividerProps extends DividerSpectrumProps, Omit<SeparatorProps, 'className' | 'style' | 'elementType'>, StyleProps {
}
export const DividerContext: Context<ContextValue<DividerProps, DOMRefValue<HTMLElement>>>;
/**
 * Dividers bring clarity to a layout by grouping and dividing content in close proximity.
 * They can also be used to establish rhythm and hierarchy.
 */
export const Divider: ForwardRefExoticComponent<DividerProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export interface ProviderProps extends UnsafeStyles {
    /** The content of the Provider. */
    children: ReactNode;
    /**
     * The locale for your application as a [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code.
     * Defaults to the browser/OS language setting.
     * @default 'en-US'
     */
    locale?: string;
    /**
     * Provides a client side router to all nested React Spectrum links to enable client side navigation.
     */
    router?: Router;
    /**
     * The color scheme for your application.
     * Defaults to operating system preferences.
     */
    colorScheme?: ColorScheme;
    /** The background for this provider. If not provided, the background is transparent. */
    background?: 'base' | 'layer-1' | 'layer-2';
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StyleString;
    /**
     * The DOM element to render.
     * @default div
     */
    elementType?: keyof JSX.IntrinsicElements;
}
export function Provider(props: ProviderProps): JSX.Element;
export interface PopoverProps extends UnsafeStyles, Omit<_PopoverProps1, 'arrowSize' | 'isNonModal' | 'arrowBoundaryOffset' | 'isKeyboardDismissDisabled' | 'shouldCloseOnInteractOutside' | 'shouldUpdatePosition'> {
    styles?: StyleString;
    /**
     * Whether a popover's arrow should be hidden.
     *
     * @default false
     */
    hideArrow?: boolean;
    /**
     * The size of the Popover. If not specified, the popover fits its contents.
     */
    size?: 'S' | 'M' | 'L';
}
interface PopoverDialogProps extends Pick<PopoverProps, 'size' | 'hideArrow' | 'placement' | 'shouldFlip' | 'containerPadding' | 'offset' | 'crossOffset'>, Omit<_DialogProps1, 'className' | 'style'>, StyleProps {
}
/**
 * A popover is an overlay element positioned relative to a trigger.
 */
export const Popover: ForwardRefExoticComponent<PopoverDialogProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export interface MenuTriggerProps extends _MenuTriggerProps1 {
    /**
     * Alignment of the menu relative to the trigger.
     *
     * @default 'start'
     */
    align?: 'start' | 'end';
    /**
     * Where the Menu opens relative to its trigger.
     *
     * @default 'bottom'
     */
    direction?: 'bottom' | 'top' | 'left' | 'right' | 'start' | 'end';
    /**
     * Whether the menu should automatically flip direction when space is limited.
     *
     * @default true
     */
    shouldFlip?: boolean;
}
export interface MenuProps<T> extends Omit<_MenuProps1<T>, 'children' | 'style' | 'className' | 'dependencies'>, StyleProps {
    /**
     * The size of the Menu.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * The contents of the collection.
     */
    children?: ReactNode | ((item: T) => ReactNode);
}
export const MenuContext: Context<ContextValue<MenuProps<any>, DOMRefValue<HTMLDivElement>>>;
/**
 * Menus display a list of actions or options that a user can choose.
 */
export const Menu: <T extends object>(props: MenuProps<T> & RefAttributes<DOMRefValue<HTMLDivElement>>) => ReactElement | null;
export interface MenuSectionProps<T extends object> extends _MenuSectionProps1<T> {
}
export function MenuSection<T extends object>(props: MenuSectionProps<T>): JSX.Element;
export interface MenuItemProps extends Omit<_MenuItemProps1, 'children' | 'style' | 'className'>, StyleProps {
    /**
     * The contents of the item.
     */
    children: ReactNode;
}
export function MenuItem(props: MenuItemProps): JSX.Element;
/**
 * The MenuTrigger serves as a wrapper around a Menu and its associated trigger,
 * linking the Menu's open state with the trigger's press state.
 */
export function MenuTrigger(props: MenuTriggerProps): JSX.Element;
export interface SubmenuTriggerProps extends Omit<_SubmenuTriggerProps1, 'delay'> {
}
export const SubmenuTrigger: (props: SubmenuTriggerProps) => JSX.Element | null;
export interface ActionMenuProps<T> extends Pick<MenuTriggerProps, 'isOpen' | 'defaultOpen' | 'onOpenChange' | 'align' | 'direction' | 'shouldFlip'>, Pick<MenuProps<T>, 'children' | 'items' | 'disabledKeys' | 'onAction'>, Pick<ActionButtonProps, 'isDisabled' | 'isQuiet' | 'autoFocus' | 'size'>, StyleProps, DOMProps, AriaLabelingProps {
    menuSize?: 'S' | 'M' | 'L' | 'XL';
}
export const ActionMenuContext: Context<ContextValue<ActionMenuProps<any>, FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
/**
 * ActionMenu combines an ActionButton with a Menu for simple "more actions" use cases.
 */
export const ActionMenu: <T extends object>(props: ActionMenuProps<T> & RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>) => ReactElement | null;
interface ProgressCircleStyleProps {
    /**
     * The size of the ProgressCircle.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L';
    /** The static color style to apply. Useful when the button appears over a color background. */
    staticColor?: 'black' | 'white';
    /**
     * Whether presentation is indeterminate when progress isn't known.
     */
    isIndeterminate?: boolean;
}
export const ProgressCircleContext: Context<ContextValue<ProgressCircleProps, DOMRefValue<HTMLDivElement>>>;
export interface ProgressCircleProps extends Omit<_ProgressBarProps1, 'children' | 'style' | 'valueLabel' | 'formatOptions' | 'label' | 'className'>, ProgressCircleStyleProps, UnsafeStyles {
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
}
/**
 * ProgressCircles show the progression of a system operation such as downloading, uploading, or processing, in a visual way.
 * They can represent determinate or indeterminate progress.
 */
export const ProgressCircle: ForwardRefExoticComponent<ProgressCircleProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface ButtonStyleProps {
    /**
     * The [visual style](https://spectrum.adobe.com/page/button/#Options) of the button.
     *
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'accent' | 'negative';
    /**
     * The background style of the Button.
     *
     * @default 'fill'
     */
    fillStyle?: 'fill' | 'outline';
    /**
     * The size of the Button.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /** The static color style to apply. Useful when the Button appears over a color background. */
    staticColor?: 'white' | 'black';
}
export interface ButtonProps extends Omit<_ButtonProps1, 'className' | 'style' | 'children' | 'onHover' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange'>, StyleProps, ButtonStyleProps {
    /** The content to display in the Button. */
    children?: ReactNode;
}
export interface LinkButtonProps extends Omit<_LinkProps1, 'className' | 'style' | 'children'>, StyleProps, ButtonStyleProps {
    /** The content to display in the Button. */
    children?: ReactNode;
}
export const ButtonContext: Context<ContextValue<ButtonProps, FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
export const LinkButtonContext: Context<ContextValue<ButtonProps, FocusableRefValue<HTMLAnchorElement, HTMLAnchorElement>>>;
/**
 * Buttons allow users to perform an action.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
export const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
/**
 * A LinkButton combines the functionality of a link with the appearance of a button. Useful for allowing users to navigate to another page.
 */
export const LinkButton: ForwardRefExoticComponent<LinkButtonProps & RefAttributes<FocusableRefValue<HTMLAnchorElement, HTMLAnchorElement>>>;
interface ButtonGroupStyleProps {
    /**
     * The axis the ButtonGroup should align with. Setting this to 'vertical' will prevent
     * any switching behaviors between 'vertical' and 'horizontal'.
     *
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * The alignment of the Buttons within the ButtonGroup.
     *
     * @default 'start'
     */
    align?: 'start' | 'end' | 'center';
    /**
     * The size of the Buttons within the ButtonGroup.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
}
export interface ButtonGroupProps extends ButtonGroupStyleProps, SlotProps, StyleProps, DOMProps {
    /** The Buttons contained within the ButtonGroup. */
    children: ReactNode;
    /** Whether the Buttons in the ButtonGroup are all disabled. */
    isDisabled?: boolean;
}
interface ButtonGroupContextValue extends Partial<ButtonGroupProps> {
    /** Whether the ButtonGroup shouldn't be rendered. */
    isHidden?: boolean;
}
export const ButtonGroupContext: Context<ContextValue<ButtonGroupContextValue, DOMRefValue<HTMLDivElement>>>;
/**
 * ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.
 */
export const ButtonGroup: ForwardRefExoticComponent<ButtonGroupProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface CloseButtonProps extends Pick<_ButtonProps1, 'isDisabled'>, StyleProps {
    /**
     * The size of the CloseButton.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /** The static color style to apply. Useful when the Button appears over a color background. */
    staticColor?: 'white' | 'black';
}
/**
 * A CloseButton allows a user to dismiss a dialog.
 */
export const CloseButton: ForwardRefExoticComponent<CloseButtonProps & RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
export interface DialogProps extends Omit<_DialogProps1, 'className' | 'style'>, StyleProps {
    /**
     * Whether the Dialog is dismissible.
     */
    isDismissible?: boolean;
    /**
     * The size of the Dialog.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L';
    /** Whether pressing the escape key to close the dialog should be disabled. */
    isKeyboardDismissDisabled?: boolean;
}
/**
 * Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface.
 * Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
 */
export const Dialog: ForwardRefExoticComponent<DialogProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export interface AlertDialogProps extends DOMProps, UnsafeStyles {
    /** The [visual style](https://spectrum.adobe.com/page/alert-dialog/#Options) of the AlertDialog.  */
    variant?: 'confirmation' | 'information' | 'destructive' | 'error' | 'warning';
    /** The title of the AlertDialog. */
    title: string;
    /** The contents of the AlertDialog. */
    children: ReactNode;
    /** The label to display within the cancel button. */
    cancelLabel?: string;
    /** The label to display within the confirm button. */
    primaryActionLabel: string;
    /** The label to display within the secondary button. */
    secondaryActionLabel?: string;
    /** Whether the primary button is disabled. */
    isPrimaryActionDisabled?: boolean;
    /** Whether the secondary button is disabled. */
    isSecondaryActionDisabled?: boolean;
    /** Handler that is called when the cancel button is pressed. */
    onCancel?: () => void;
    /** Handler that is called when the primary button is pressed. */
    onPrimaryAction?: () => void;
    /** Handler that is called when the secondary button is pressed. */
    onSecondaryAction?: () => void;
    /** Button to focus by default when the dialog opens. */
    autoFocusButton?: 'cancel' | 'primary' | 'secondary';
    /**
     * The size of the Dialog.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L';
}
/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */
export const AlertDialog: ForwardRefExoticComponent<AlertDialogProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export interface AvatarGroupProps extends UnsafeStyles, DOMProps, AriaLabelingProps, SlotProps {
    /** Avatar children of the avatar group. */
    children: ReactNode;
    /** The label for the avatar group. */
    label?: string;
    /**
     * The size of the avatar group.
     * @default 24
     */
    size?: 16 | 20 | 24 | 28 | 32 | 36 | 40;
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithoutWidth;
}
export const AvatarGroupContext: Context<ContextValue<AvatarGroupProps, DOMRefValue<HTMLDivElement>>>;
/**
 * An avatar group is a grouping of avatars that are related to each other.
 */
export const AvatarGroup: ForwardRefExoticComponent<AvatarGroupProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface BadgeStyleProps {
    /**
     * The size of the badge.
     *
     * @default 'S'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * The variant changes the background color of the badge. When badge has a semantic meaning, they should use the variant for semantic colors.
     *
     * @default 'neutral'
     */
    variant?: 'accent' | 'informative' | 'neutral' | 'positive' | 'notice' | 'negative' | 'gray' | 'red' | 'orange' | 'yellow' | 'charteuse' | 'celery' | 'green' | 'seafoam' | 'cyan' | 'blue' | 'indigo' | 'purple' | 'fuchsia' | 'magenta' | 'pink' | 'turquoise' | 'brown' | 'cinnamon' | 'silver';
    /**
     * The fill of the badge.
     * @default 'bold'
     */
    fillStyle?: 'bold' | 'subtle' | 'outline';
}
export interface BadgeProps extends DOMProps, AriaLabelingProps, StyleProps, BadgeStyleProps, SlotProps {
    /**
     * The content to display in the badge.
     */
    children: ReactNode;
}
export const BadgeContext: React.Context<ContextValue<Partial<BadgeProps>, DOMRefValue<HTMLDivElement>>>;
/**
 * Badges are used for showing a small amount of color-categorized metadata, ideal for getting a user's attention.
 */
export const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface BreadcrumbsStyleProps {
    /**
     * Size of the Breadcrumbs including spacing and layout.
     *
     * @default 'M'
     */
    size?: 'M' | 'L';
    /** Whether the breadcrumbs are disabled. */
    isDisabled?: boolean;
}
export interface BreadcrumbsProps<T> extends Omit<_BreadcrumbsProps1<T>, 'children' | 'items' | 'style' | 'className'>, BreadcrumbsStyleProps, StyleProps {
    /** The children of the Breadcrumbs. */
    children?: ReactNode;
}
export const BreadcrumbsContext: Context<ContextValue<BreadcrumbsProps<any>, DOMRefValue<HTMLOListElement>>>;
/** Breadcrumbs show hierarchy and navigational context for a user’s location within an application. */
export const Breadcrumbs: <T extends object>(props: BreadcrumbsProps<T> & RefAttributes<DOMRefValue<HTMLOListElement>>) => ReactElement | null;
export interface BreadcrumbProps extends Omit<AriaBreadcrumbItemProps, 'children' | 'style' | 'className' | 'autoFocus'>, LinkDOMProps {
    /** The children of the breadcrumb item. */
    children?: ReactNode;
}
/** An individual Breadcrumb for Breadcrumbs. */
export const Breadcrumb: (props: BreadcrumbProps & RefAttributes<DOMRefValue<HTMLLIElement>>) => ReactElement | null;
interface CardRenderProps {
    /** The size of the Card. */
    size: 'XS' | 'S' | 'M' | 'L' | 'XL';
}
export interface CardProps extends Omit<GridListItemProps, 'className' | 'style' | 'children' | 'onHoverChange' | 'onHoverStart' | 'onHoverEnd'>, StyleProps {
    /** The children of the Card. */
    children: ReactNode | ((renderProps: CardRenderProps) => ReactNode);
    /**
     * The size of the Card.
     * @default 'M'
     */
    size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
    /**
     * The amount of internal padding within the Card.
     * @default 'regular'
     */
    density?: 'compact' | 'regular' | 'spacious';
    /**
     * The visual style of the Card.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quiet';
}
export const CardContext: Context<ContextValue<Partial<CardProps>, DOMRefValue<HTMLDivElement>>>;
export const Card: ForwardRefExoticComponent<CardProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface CardPreviewProps extends UnsafeStyles, DOMProps {
    children: ReactNode;
}
export const CardPreview: ForwardRefExoticComponent<CardPreviewProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export const CollectionCardPreview: ForwardRefExoticComponent<CardPreviewProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface AssetCardProps extends Omit<CardProps, 'density'> {
}
export const AssetCard: ForwardRefExoticComponent<AssetCardProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface UserCardProps extends Omit<CardProps, 'density' | 'variant'> {
    variant?: 'primary' | 'secondary' | 'tertiary';
}
export const UserCard: ForwardRefExoticComponent<CardProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface ProductCardProps extends Omit<CardProps, 'density' | 'variant'> {
    variant?: 'primary' | 'secondary' | 'tertiary';
}
export const ProductCard: ForwardRefExoticComponent<ProductCardProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface CardViewProps<T> extends Omit<GridListProps<T>, 'layout' | 'keyboardNavigationBehavior' | 'selectionBehavior' | 'className' | 'style'>, UnsafeStyles {
    /**
     * The layout of the cards.
     * @default 'grid'
     */
    layout?: 'grid' | 'waterfall';
    /**
     * The size of the cards.
     * @default 'M'
     */
    size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
    /**
     * The amount of space between the cards.
     * @default 'regular'
     */
    density?: 'compact' | 'regular' | 'spacious';
    /**
     * The visual style of the cards.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quiet';
    /**
     * How selection should be displayed.
     * @default 'checkbox'
     */
    selectionStyle?: 'checkbox' | 'highlight';
    /** The loading state of the CardView. */
    loadingState?: LoadingState;
    /** Handler that is called when more items should be loaded, e.g. while scrolling near the bottom. */
    onLoadMore?: () => void;
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
}
export const CardViewContext: Context<ContextValue<CardViewProps<any>, DOMRefValue<HTMLDivElement>>>;
export const CardView: <T extends object>(props: CardViewProps<T> & RefAttributes<DOMRefValue<HTMLDivElement>>) => ReactElement | null;
export interface DialogTriggerProps extends _DialogTriggerProps1 {
}
/**
 * DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's
 * open state with the trigger's press state. Additionally, it allows you to customize the type and
 * positioning of the Dialog.
 */
export function DialogTrigger(props: DialogTriggerProps): JSX.Element;
interface ContextualHelpStyleProps {
    /**
     * Indicates whether contents are informative or provides helpful guidance.
     *
     * @default 'help'
     */
    variant?: 'info' | 'help';
}
interface ContextualHelpProps extends Pick<DialogTriggerProps, 'isOpen' | 'defaultOpen' | 'onOpenChange'>, Pick<PopoverDialogProps, 'shouldFlip' | 'offset' | 'crossOffset' | 'placement' | 'containerPadding'>, ContextualHelpStyleProps, StyleProps, DOMProps, AriaLabelingProps {
    /** Contents of the Contextual Help popover. */
    children?: ReactNode;
    /**
     * The size of the ActionButton.
     *
     * @default 'XS'
     */
    size?: 'XS' | 'S';
}
export const ContextualHelpContext: Context<ContextValue<ContextualHelpProps, FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
/**
 * Contextual help shows a user extra information about the state of an adjacent component, or a total view.
 */
export const ContextualHelp: ForwardRefExoticComponent<ContextualHelpProps & RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
export interface CheckboxGroupProps extends Omit<_CheckboxGroupProps1, 'className' | 'style' | 'children'>, StyleProps, SpectrumLabelableProps, HelpTextProps {
    /**
     * The size of the Checkboxes in the CheckboxGroup.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * The axis the checkboxes should align with.
     *
     * @default 'vertical'
     */
    orientation?: Orientation;
    /**
     * The Checkboxes contained within the CheckboxGroup.
     */
    children?: ReactNode;
    /**
     * By default, checkboxes are not emphasized (gray).
     * The emphasized (blue) version provides visual prominence.
     */
    isEmphasized?: boolean;
}
export const CheckboxGroupContext: Context<ContextValue<CheckboxGroupProps, DOMRefValue<HTMLDivElement>>>;
/**
 * A CheckboxGroup allows users to select one or more items from a list of choices.
 */
export const CheckboxGroup: ForwardRefExoticComponent<CheckboxGroupProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface ColorAreaProps extends Omit<_ColorAreaProps1, 'children' | 'className' | 'style'>, StyleProps {
}
export const ColorAreaContext: Context<ContextValue<ColorAreaProps, DOMRefValue<HTMLDivElement>>>;
/**
 * A ColorArea allows users to adjust two channels of an RGB, HSL or HSB color value against a two-dimensional gradient background.
 */
export const ColorArea: ForwardRefExoticComponent<ColorAreaProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface ColorFieldProps extends Omit<_ColorFieldProps1, 'children' | 'className' | 'style'>, StyleProps, SpectrumLabelableProps, HelpTextProps {
    /**
     * The size of the color field.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
}
export const ColorFieldContext: Context<ContextValue<ColorFieldProps, TextFieldRef<HTMLInputElement>>>;
/**
 * A color field allows users to edit a hex color or individual color channel value.
 */
export const ColorField: ForwardRefExoticComponent<ColorFieldProps & RefAttributes<TextFieldRef<HTMLInputElement>>>;
export interface ColorSliderProps extends Omit<_ColorSliderProps1, 'children' | 'className' | 'style'>, Pick<SpectrumLabelableProps, 'contextualHelp'>, StyleProps {
    label?: string;
}
export const ColorSliderContext: Context<ContextValue<ColorSliderProps, DOMRefValue<HTMLDivElement>>>;
/**
 * A ColorSlider allows users to adjust an individual channel of a color value.
 */
export const ColorSlider: ForwardRefExoticComponent<ColorSliderProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface ColorSwatchProps extends Omit<_ColorSwatchProps1, 'className' | 'style'>, UnsafeStyles {
    /**
     * The size of the ColorSwatch.
     * @default 'M'
     */
    size?: 'XS' | 'S' | 'M' | 'L';
    /**
     * The corner rounding of the ColorSwatch.
     * @default 'default'
     */
    rounding?: 'default' | 'none' | 'full';
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
}
export const ColorSwatchContext: Context<ContextValue<ColorSwatchProps, DOMRefValue<HTMLDivElement>>>;
/**
 * A ColorSwatch displays a preview of a selected color.
 */
export const ColorSwatch: ForwardRefExoticComponent<ColorSwatchProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface ColorSwatchPickerProps extends ValueBase<string | Color, Color>, StyleProps, SlotProps {
    /** The ColorSwatches within the ColorSwatchPicker. */
    children: ReactNode;
    /**
     * The amount of padding between the swatches.
     * @default 'regular'
     */
    density?: 'compact' | 'regular' | 'spacious';
    /**
     * The size of the color swatches.
     * @default 'M'
     */
    size?: 'XS' | 'S' | 'M' | 'L';
    /**
     * The corner rounding of the color swatches.
     * @default 'none'
     */
    rounding?: 'none' | 'default' | 'full';
}
export const ColorSwatchPickerContext: Context<ContextValue<Partial<ColorSwatchPickerProps>, DOMRefValue<HTMLDivElement>>>;
/**
 * A ColorSwatchPicker displays a list of color swatches and allows a user to select one of them.
 */
export const ColorSwatchPicker: ForwardRefExoticComponent<ColorSwatchPickerProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface ColorWheelProps extends Omit<_ColorWheelProps1, 'children' | 'className' | 'style' | 'outerRadius' | 'innerRadius'>, StyleProps {
    /**
     * @default 192
     */
    size?: number;
}
export const ColorWheelContext: Context<ContextValue<ColorWheelProps, DOMRefValue<HTMLDivElement>>>;
/**
 * A ColorWheel allows users to adjust the hue of an HSL or HSB color value on a circular track.
 */
export const ColorWheel: ForwardRefExoticComponent<ColorWheelProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface PickerStyleProps {
    /**
     * The size of the Picker.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * Whether the picker should be displayed with a quiet style.
     * @private
     */
    isQuiet?: boolean;
}
export interface PickerProps<T extends object> extends Omit<SelectProps<T>, 'children' | 'style' | 'className'>, PickerStyleProps, StyleProps, SpectrumLabelableProps, HelpTextProps, Pick<ListBoxProps<T>, 'items'>, Pick<_PopoverProps1, 'shouldFlip'> {
    /** The contents of the collection. */
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * Direction the menu will render relative to the Picker.
     *
     * @default 'bottom'
     */
    direction?: 'bottom' | 'top';
    /**
     * Alignment of the menu relative to the input target.
     *
     * @default 'start'
     */
    align?: 'start' | 'end';
    /** Width of the menu. By default, matches width of the trigger. Note that the minimum width of the dropdown is always equal to the trigger's width. */
    menuWidth?: number;
}
export const PickerContext: React.Context<ContextValue<Partial<PickerProps<any>>, FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
/**
 * Pickers allow users to choose a single option from a collapsible list of options when space is limited.
 */
export const Picker: <T extends object>(props: PickerProps<T> & React.RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>) => React.ReactElement | null;
export interface PickerItemProps extends Omit<ListBoxItemProps, 'children' | 'style' | 'className'>, StyleProps {
    children: ReactNode;
}
export function PickerItem(props: PickerItemProps): React.JSX.Element;
export interface PickerSectionProps<T extends object> extends SectionProps<T> {
}
export function PickerSection<T extends object>(props: PickerSectionProps<T>): React.JSX.Element;
interface ComboboxStyleProps {
    /**
     * The size of the Combobox.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
}
export interface ComboBoxProps<T extends object> extends Omit<_ComboBoxProps1<T>, 'children' | 'style' | 'className' | 'defaultFilter' | 'allowsEmptyCollection'>, ComboboxStyleProps, StyleProps, SpectrumLabelableProps, HelpTextProps, Pick<ListBoxProps<T>, 'items'>, Pick<_PopoverProps1, 'shouldFlip'> {
    /** The contents of the collection. */
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * Direction the menu will render relative to the Picker.
     *
     * @default 'bottom'
     */
    direction?: 'bottom' | 'top';
    /**
     * Alignment of the menu relative to the input target.
     *
     * @default 'start'
     */
    align?: 'start' | 'end';
    /** Width of the menu. By default, matches width of the trigger. Note that the minimum width of the dropdown is always equal to the trigger's width. */
    menuWidth?: number;
}
export const ComboBoxContext: Context<ContextValue<Partial<ComboBoxProps<any>>, TextFieldRef<HTMLInputElement>>>;
/**
 * ComboBox allow users to choose a single option from a collapsible list of options when space is limited.
 */
export const ComboBox: <T extends object>(props: ComboBoxProps<T> & RefAttributes<TextFieldRef<HTMLInputElement>>) => ReactElement | null;
export interface ComboBoxItemProps extends Omit<ListBoxItemProps, 'children' | 'style' | 'className'>, StyleProps {
    children: ReactNode;
}
export function ComboBoxItem(props: ComboBoxItemProps): JSX.Element;
export interface ComboBoxSectionProps<T extends object> extends SectionProps<T> {
}
export function ComboBoxSection<T extends object>(props: ComboBoxSectionProps<T>): JSX.Element;
export interface CustomDialogProps extends Omit<_DialogProps1, 'className' | 'style'>, StyleProps {
    /**
     * The size of the Dialog.
     */
    size?: 'S' | 'M' | 'L' | 'fullscreen' | 'fullscreenTakeover';
    /**
     * Whether the Dialog is dismissible.
     */
    isDismissible?: boolean;
    /** Whether pressing the escape key to close the dialog should be disabled. */
    isKeyboardDismissDisabled?: boolean;
    /**
     * The amount of padding around the contents of the dialog.
     * @default 'default'
     */
    padding?: 'default' | 'none';
}
/**
 * A CustomDialog is a floating window with a custom layout.
 */
export const CustomDialog: ForwardRefExoticComponent<CustomDialogProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export interface FullscreenDialogProps extends Omit<_DialogProps1, 'className' | 'style'>, StyleProps {
    /**
     * The variant of fullscreen dialog to display.
     * @default "fullscreen"
     */
    variant?: 'fullscreen' | 'fullscreenTakeover';
    /** Whether pressing the escape key to close the dialog should be disabled. */
    isKeyboardDismissDisabled?: boolean;
}
/**
 * Takeover dialogs are large types of dialogs. They use the totality of the screen and should be used for modal experiences with complex workflows.
 */
export const FullscreenDialog: ForwardRefExoticComponent<FullscreenDialogProps & RefAttributes<DOMRefValue<HTMLElement>>>;
export interface DialogContainerProps extends Omit<SpectrumDialogContainerProps, 'type' | 'isDismissable' | 'isKeyboardDismissDisabled'> {
}
/**
 * A DialogContainer accepts a single Dialog as a child, and manages showing and hiding
 * it in a modal. Useful in cases where there is no trigger element
 * or when the trigger unmounts while the dialog is open.
 */
export function DialogContainer(props: DialogContainerProps): React.JSX.Element;
export interface DialogContainerValue {
    /**
     * A handler to programmatically dismiss the dialog.
     */
    dismiss(): void;
}
export function useDialogContainer(): DialogContainerValue;
interface IllustratedMessageStyleProps {
    /**
     * The size of the IllustratedMessage.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L';
    /**
     * The direction that the IllustratedMessage should be laid out in.
     *
     * @default 'vertical'
     */
    orientation?: 'horizontal' | 'vertical';
}
interface S2SpectrumIllustratedMessageProps extends DOMProps, UnsafeStyles, IllustratedMessageStyleProps {
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
    /** The content to display in the IllustratedMessage. */
    children: ReactNode;
}
interface IllustratedMessageContextProps extends Partial<S2SpectrumIllustratedMessageProps> {
    isInDropZone?: boolean;
    isDropTarget?: boolean;
}
export const IllustratedMessageContext: Context<ContextValue<IllustratedMessageContextProps, DOMRefValue<HTMLDivElement>>>;
/**
 * An IllustratedMessage displays an illustration and a message, usually
 * for an empty state or an error page.
 */
export const IllustratedMessage: ForwardRefExoticComponent<S2SpectrumIllustratedMessageProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface DropZoneProps extends Omit<_DropZoneProps1, 'className' | 'style' | 'children' | 'isDisabled' | 'onHover' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange'>, UnsafeStyles, DOMProps {
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
    /** The content to display in the drop zone. */
    children?: ReactNode;
    /** Whether the drop zone has been filled. */
    isFilled?: boolean;
    /** The message to replace the default banner message that is shown when the drop zone is filled. */
    replaceMessage?: string;
    /**
     * The size of the DropZone.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L';
}
export const DropZoneContext: Context<ContextValue<DropZoneProps, DOMRefValue<HTMLDivElement>>>;
/**
 * A drop zone is an area into which one or multiple objects can be dragged and dropped.
 */
export const DropZone: ForwardRefExoticComponent<DropZoneProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface InlineAlertProps extends DOMProps, StyleProps, InlineStylesProps, SlotProps {
    /**
     * The contents of the Inline Alert.
     */
    children: ReactNode;
    /**
     * Whether to automatically focus the Inline Alert when it first renders.
     */
    autoFocus?: boolean;
}
interface InlineStylesProps {
    /**
     * The semantic tone of a Inline Alert.
     * @default neutral
     */
    variant?: 'informative' | 'positive' | 'notice' | 'negative' | 'neutral';
    /**
     * The visual style of the Inline Alert.
     * @default border
     */
    fillStyle?: 'border' | 'subtleFill' | 'boldFill';
}
export const InlineAlertContext: Context<ContextValue<Partial<InlineAlertProps>, DOMRefValue<HTMLDivElement>>>;
/**
 * Inline alerts display a non-modal message associated with objects in a view.
 * These are often used in form validation, providing a place to aggregate feedback related to multiple fields.
 */
export const InlineAlert: ForwardRefExoticComponent<InlineAlertProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface LinkStyleProps {
    /**
     * The [visual style](https://spectrum.adobe.com/page/link/#Options) of the link.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary';
    /** The static color style to apply. Useful when the link appears over a color background. */
    staticColor?: 'white' | 'black';
    /** Whether the link is on its own vs inside a longer string of text. */
    isStandalone?: boolean;
    /** Whether the link should be displayed with a quiet style. */
    isQuiet?: boolean;
}
export interface LinkProps extends Omit<_LinkProps1, 'isDisabled' | 'className' | 'style' | 'children' | 'onHover' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange'>, StyleProps, LinkStyleProps {
    children?: ReactNode;
}
export const LinkContext: Context<ContextValue<LinkProps, FocusableRefValue<HTMLAnchorElement, HTMLAnchorElement>>>;
/**
 * Links allow users to navigate to a different location.
 * They can be presented inline inside a paragraph or as standalone text.
 */
export const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<FocusableRefValue<HTMLAnchorElement, HTMLAnchorElement>>>;
interface MeterStyleProps {
    /** The [visual style](https://spectrum.adobe.com/page/meter/#-Options) of the Meter.
     * @default 'informative'
     */
    variant?: 'informative' | 'positive' | 'notice' | 'negative';
    /**
     * The size of the Meter.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * The static color style to apply. Useful when the button appears over a color background.
     */
    staticColor?: 'white' | 'black';
    /**
     * The label's overall position relative to the element it is labeling.
     * @default 'top'
     */
    labelPosition?: LabelPosition;
}
export interface MeterProps extends Omit<_MeterProps1, 'children' | 'className' | 'style'>, MeterStyleProps, StyleProps {
    /** The content to display as the label. */
    label?: ReactNode;
}
export const MeterContext: Context<ContextValue<MeterProps, DOMRefValue<HTMLDivElement>>>;
/**
 * Meters are visual representations of a quantity or an achievement.
 * Their progress is determined by user actions, rather than system actions.
 */
export const Meter: ForwardRefExoticComponent<MeterProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface NumberFieldProps extends Omit<_NumberFieldProps1, 'children' | 'className' | 'style'>, StyleProps, SpectrumLabelableProps, HelpTextProps {
    /**
     * Whether to hide the increment and decrement buttons.
     * @default false
     */
    hideStepper?: boolean;
    /**
     * The size of the NumberField.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
}
export const NumberFieldContext: Context<ContextValue<NumberFieldProps, TextFieldRef<HTMLInputElement>>>;
/**
 * NumberFields allow users to input number values with a keyboard or increment/decrement with step buttons.
 */
export const NumberField: ForwardRefExoticComponent<NumberFieldProps & RefAttributes<TextFieldRef<HTMLInputElement>>>;
interface ProgressBarStyleProps {
    /**
     * The size of the ProgressBar.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * Whether presentation is indeterminate when progress isn't known.
     */
    isIndeterminate?: boolean;
    /**
     * The static color style to apply. Useful when the button appears over a color background.
     */
    staticColor?: 'white' | 'black';
    /**
     * The label's overall position relative to the element it is labeling.
     * @default 'top'
     */
    labelPosition?: LabelPosition;
}
export interface ProgressBarProps extends Omit<_ProgressBarProps1, 'children' | 'className' | 'style'>, ProgressBarStyleProps, StyleProps {
    /** The content to display as the label. */
    label?: ReactNode;
}
export const ProgressBarContext: Context<ContextValue<ProgressBarProps, DOMRefValue<HTMLDivElement>>>;
/**
 * ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way.
 * They can represent either determinate or indeterminate progress.
 */
export const ProgressBar: ForwardRefExoticComponent<ProgressBarProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface RadioProps extends Omit<_RadioProps1, 'className' | 'style' | 'children' | 'onHover' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange'>, StyleProps {
    /**
     * The label for the element.
     */
    children?: ReactNode;
}
/**
 * Radio buttons allow users to select a single option from a list of mutually exclusive options.
 * All possible options are exposed up front for users to compare.
 */
export const Radio: ForwardRefExoticComponent<RadioProps & RefAttributes<FocusableRefValue<HTMLLabelElement, HTMLLabelElement>>>;
export interface RadioGroupProps extends Omit<_RadioGroupProps1, 'className' | 'style' | 'children'>, StyleProps, SpectrumLabelableProps, HelpTextProps {
    /**
     * The Radios contained within the RadioGroup.
     */
    children?: ReactNode;
    /**
     * The size of the RadioGroup.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * The axis the radio elements should align with.
     *
     * @default 'vertical'
     */
    orientation?: Orientation;
    /**
     * Whether the RadioGroup should be displayed with an emphasized style.
     */
    isEmphasized?: boolean;
}
export const RadioGroupContext: React.Context<ContextValue<RadioGroupProps, DOMRefValue<HTMLDivElement>>>;
/**
 * Radio groups allow users to select a single option from a list of mutually exclusive options.
 * All possible options are exposed up front for users to compare.
 */
export const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface SliderBaseProps<T> extends Omit<_SliderProps1<T>, 'children' | 'style' | 'className' | 'orientation'>, Omit<SpectrumLabelableProps, 'necessityIndicator' | 'isRequired'>, StyleProps {
    children?: ReactNode;
    /**
     * The size of the Slider.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * Whether the Slider should be displayed with an emphasized style.
     */
    isEmphasized?: boolean;
    /**
     * The style of the Slider's track.
     *
     * @default 'thin'
     */
    trackStyle?: 'thin' | 'thick';
    /**
     * The style of the Slider's thumb.
     *
     * @default 'default'
     */
    thumbStyle?: 'default' | 'precise';
}
export interface SliderProps extends Omit<SliderBaseProps<number>, 'children'>, InputDOMProps {
    /**
     * The offset from which to start the fill.
     */
    fillOffset?: number;
}
export const SliderContext: Context<ContextValue<SliderProps, FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
export const Slider: ForwardRefExoticComponent<SliderProps & RefAttributes<FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
export interface RangeSliderProps extends Omit<SliderBaseProps<RangeValue<number>>, 'children'> {
    /**
     * The name of the start input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    startName?: string;
    /**
     * The name of the end input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
     */
    endName?: string;
}
export const RangeSliderContext: Context<ContextValue<RangeSliderProps, FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
export const RangeSlider: ForwardRefExoticComponent<RangeSliderProps & RefAttributes<FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
export interface SearchFieldProps extends Omit<_SearchFieldProps1, 'className' | 'style' | 'children'>, StyleProps, SpectrumLabelableProps, HelpTextProps {
    /**
     * The size of the SearchField.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
}
export const SearchFieldContext: Context<ContextValue<SearchFieldProps, TextFieldRef<HTMLInputElement>>>;
/**
 * A SearchField is a text field designed for searches.
 */
export const SearchField: ForwardRefExoticComponent<SearchFieldProps & RefAttributes<TextFieldRef<HTMLInputElement>>>;
export interface SegmentedControlProps extends AriaLabelingProps, StyleProps, SlotProps {
    /**
     * The content to display in the segmented control.
     */
    children: ReactNode;
    /**
     * Whether the segmented control is disabled.
     */
    isDisabled?: boolean;
    /** Whether the items should divide the container width equally. */
    isJustified?: boolean;
    /** The id of the currently selected item (controlled). */
    selectedKey?: Key | null;
    /** The id of the initial selected item (uncontrolled). */
    defaultSelectedKey?: Key;
    /** Handler that is called when the selection changes. */
    onSelectionChange?: (id: Key) => void;
}
export interface SegmentedControlItemProps extends AriaLabelingProps, StyleProps {
    /**
     * The content to display in the segmented control item.
     */
    children: ReactNode;
    /** The id of the item, matching the value used in SegmentedControl's `selectedKey` prop. */
    id: Key;
    /** Whether the item is disabled or not. */
    isDisabled?: boolean;
}
export const SegmentedControlContext: Context<ContextValue<SegmentedControlProps, DOMRefValue<HTMLDivElement>>>;
/**
 * A SegmentedControl is a mutually exclusive group of buttons used for view switching.
 */
export const SegmentedControl: ForwardRefExoticComponent<SegmentedControlProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
/**
 * A SegmentedControlItem represents an option within a SegmentedControl.
 */
export const SegmentedControlItem: ForwardRefExoticComponent<SegmentedControlItemProps & RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
export interface SkeletonCollectionProps {
    children: () => ReactNode;
}
/**
 * A SkeletonCollection generates placeholder content within a collection component such as CardView.
 */
export const SkeletonCollection: (props: SkeletonCollectionProps & RefAttributes<object>) => ReactElement | null;
interface StatusLightStyleProps {
    /**
     * The variant changes the color of the status light.
     * When status lights have a semantic meaning, they should use the variant for semantic colors.
     */
    variant: 'informative' | 'neutral' | 'positive' | 'notice' | 'negative' | 'celery' | 'chartreuse' | 'cyan' | 'fuchsia' | 'purple' | 'magenta' | 'indigo' | 'seafoam' | 'yellow' | 'pink' | 'turquoise' | 'cinnamon' | 'brown' | 'silver';
    /**
     * The size of the StatusLight.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
}
export interface StatusLightProps extends StatusLightStyleProps, DOMProps, AriaLabelingProps, StyleProps, SlotProps {
    /**
     * The content to display as the label.
     */
    children?: ReactNode;
    /**
     * An accessibility role for the status light. Should be set when the status
     * can change at runtime, and no more than one status light will update simultaneously.
     * For cases where multiple statuses can change at the same time, use a Toast instead.
     */
    role?: 'status';
}
export const StatusLightContext: Context<ContextValue<StatusLightProps, DOMRefValue<HTMLDivElement>>>;
/**
 * Status lights are used to color code categories and labels commonly found in data visualization.
 * When status lights have a semantic meaning, they should use semantic variant colors.
 */
export const StatusLight: ForwardRefExoticComponent<StatusLightProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
interface SwitchStyleProps {
    /**
     * The size of the Switch.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
    /**
     * Whether the Switch should be displayed with an emphasized style.
     */
    isEmphasized?: boolean;
}
export interface SwitchProps extends Omit<_SwitchProps1, 'className' | 'style' | 'children' | 'onHover' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange'>, StyleProps, SwitchStyleProps {
    children?: ReactNode;
}
export const SwitchContext: Context<ContextValue<SwitchProps, FocusableRefValue<HTMLLabelElement, HTMLLabelElement>>>;
/**
 * Switches allow users to turn an individual option on or off.
 * They are usually used to activate or deactivate a specific setting.
 */
export const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<FocusableRefValue<HTMLLabelElement, HTMLLabelElement>>>;
interface S2TableProps {
    /** Whether the Table should be displayed with a quiet style. */
    isQuiet?: boolean;
    /**
     * Sets the amount of vertical padding within each cell.
     * @default 'regular'
     */
    density?: 'compact' | 'spacious' | 'regular';
    /**
     * Sets the overflow behavior for the cell contents.
     * @default 'truncate'
     */
    overflowMode?: 'wrap' | 'truncate';
    /** Handler that is called when a user performs an action on a row. */
    onAction?: (key: _Key1) => void;
    /**
     * Handler that is called when a user starts a column resize.
     */
    onResizeStart?: (widths: Map<_Key1, ColumnSize>) => void;
    /**
     * Handler that is called when a user performs a column resize.
     * Can be used with the width property on columns to put the column widths into
     * a controlled state.
     */
    onResize?: (widths: Map<_Key1, ColumnSize>) => void;
    /**
     * Handler that is called after a user performs a column resize.
     * Can be used to store the widths of columns for another future session.
     */
    onResizeEnd?: (widths: Map<_Key1, ColumnSize>) => void;
    /** The current loading state of the table. */
    loadingState?: LoadingState;
    /** Handler that is called when more items should be loaded, e.g. while scrolling near the bottom. */
    onLoadMore?: () => any;
}
export interface TableViewProps extends Omit<TableProps, 'style' | 'disabledBehavior' | 'className' | 'onRowAction' | 'selectionBehavior' | 'onScroll' | 'onCellAction' | 'dragAndDropHooks'>, UnsafeStyles, S2TableProps {
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
}
export const TableContext: React.Context<ContextValue<TableViewProps, DOMRefValue<HTMLDivElement>>>;
/**
 * Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.
 */
export const TableView: React.ForwardRefExoticComponent<TableViewProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface TableBodyProps<T> extends Omit<_TableBodyProps1<T>, 'style' | 'className' | 'dependencies'> {
}
/**
 * The body of a `<Table>`, containing the table rows.
 */
export const TableBody: <T extends object>(props: TableBodyProps<T> & React.RefAttributes<DOMRefValue<HTMLDivElement>>) => React.ReactElement | null;
export interface ColumnProps extends _ColumnProps1 {
    /** Whether the column should render a divider between it and the next column. */
    showDivider?: boolean;
    /** Whether the column allows resizing. */
    allowsResizing?: boolean;
    /**
     * The alignment of the column's contents relative to its allotted width.
     * @default 'start'
     */
    align?: 'start' | 'center' | 'end';
    /** The content to render as the column header. */
    children: ReactNode;
}
/**
 * A column within a `<Table>`.
 */
export const Column: React.ForwardRefExoticComponent<ColumnProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface TableHeaderProps<T> extends Omit<_TableHeaderProps1<T>, 'style' | 'className' | 'dependencies' | 'onHoverChange' | 'onHoverStart' | 'onHoverEnd'> {
}
/**
 * A header within a `<Table>`, containing the table columns.
 */
export const TableHeader: <T extends object>(props: TableHeaderProps<T> & React.RefAttributes<DOMRefValue<HTMLDivElement>>) => React.ReactElement | null;
export interface CellProps extends _CellProps1, Pick<ColumnProps, 'align' | 'showDivider'> {
    /** @private */
    isSticky?: boolean;
    /** The content to render as the cell children. */
    children: ReactNode;
}
/**
 * A cell within a table row.
 */
export const Cell: React.ForwardRefExoticComponent<CellProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface RowProps<T> extends Pick<_RowProps1<T>, 'id' | 'columns' | 'children' | 'textValue'> {
}
/**
 * A row within a `<Table>`.
 */
export const Row: <T extends object>(props: RowProps<T> & React.RefAttributes<DOMRefValue<HTMLDivElement>>) => React.ReactElement | null;
export interface TabsProps extends Omit<_TabsProps1, 'className' | 'style' | 'children'>, UnsafeStyles {
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
    /** The content to display in the tabs. */
    children?: ReactNode;
    /**
     * The amount of space between the tabs.
     * @default 'regular'
     */
    density?: 'compact' | 'regular';
    /**
     * If the tabs should only display icons and no text.
     */
    iconOnly?: boolean;
}
export interface TabProps extends Omit<_TabProps1, 'children' | 'style' | 'className'>, StyleProps {
    /** The content to display in the tab. */
    children: ReactNode;
}
export interface TabListProps<T> extends Omit<_TabListProps1<T>, 'style' | 'className'>, StyleProps {
}
export interface TabPanelProps extends Omit<_TabPanelProps1, 'children' | 'style' | 'className'>, UnsafeStyles {
    /** Spectrum-defined styles, returned by the `style()` macro. */
    styles?: StylesPropWithHeight;
    /** The content to display in the tab panels. */
    children?: ReactNode;
}
export const TabsContext: Context<ContextValue<TabsProps, DOMRefValue<HTMLDivElement>>>;
/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 */
export const Tabs: ForwardRefExoticComponent<TabsProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
export function TabList<T extends object>(props: TabListProps<T>): JSX.Element;
export function Tab(props: TabProps): JSX.Element;
export function TabPanel(props: TabPanelProps): JSX.Element;
export interface TagProps extends Omit<_TagProps1, 'children' | 'style' | 'className'> {
    /** The children of the tag. */
    children?: ReactNode;
}
export interface TagGroupProps<T> extends Omit<_TagGroupProps1, 'children' | 'style' | 'className'>, Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'>, Omit<SpectrumLabelableProps, 'isRequired' | 'necessityIndicator'>, StyleProps, Omit<HelpTextProps, 'errorMessage'> {
    /** A description for the tag group. */
    description?: ReactNode;
    /**
     * The size of the tag group.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L';
    /** Whether the tags are displayed in an emphasized style. */
    isEmphasized?: boolean;
    /** Provides content to display when there are no items in the tag group. */
    renderEmptyState?: () => ReactNode;
    /** Whether the tags are displayed in a error state. */
    isInvalid?: boolean;
    /** An error message for the field. */
    errorMessage?: ReactNode;
    /** Limit the number of rows initially shown. This will render a button that allows the user to expand to show all tags. */
    maxRows?: number;
    /** The label to display on the action button.  */
    groupActionLabel?: string;
    /** Handler that is called when the action button is pressed. */
    onGroupAction?: () => void;
}
export const TagGroupContext: Context<ContextValue<TagGroupProps<any>, DOMRefValue<HTMLDivElement>>>;
/** Tags allow users to categorize content. They can represent keywords or people, and are grouped to describe an item or a search request. */
export const TagGroup: <T extends object>(props: TagGroupProps<T> & RefAttributes<DOMRefValue<HTMLDivElement>>) => ReactElement | null;
/** An individual Tag for TagGroups. */
export const Tag: (props: TagProps & RefAttributes<DOMRefValue<HTMLDivElement>>) => ReactElement | null;
export interface TextFieldProps extends Omit<_TextFieldProps1, 'children' | 'className' | 'style'>, StyleProps, SpectrumLabelableProps, HelpTextProps {
    /**
     * The size of the text field.
     *
     * @default 'M'
     */
    size?: 'S' | 'M' | 'L' | 'XL';
}
export const TextFieldContext: Context<ContextValue<TextFieldProps, TextFieldRef<HTMLInputElement>>>;
/**
 * TextFields are text inputs that allow users to input custom text entries
 * with a keyboard. Various decorations can be displayed around the field to
 * communicate the entry requirements.
 */
export const TextField: ForwardRefExoticComponent<TextFieldProps & RefAttributes<TextFieldRef<HTMLInputElement>>>;
export interface TextAreaProps extends Omit<TextFieldProps, 'type' | 'pattern'> {
}
export const TextAreaContext: Context<ContextValue<TextAreaProps, TextFieldRef<HTMLTextAreaElement>>>;
/**
 * TextAreas are multiline text inputs, useful for cases where users have
 * a sizable amount of text to enter. They allow for all customizations that
 * are available to text fields.
 */
export const TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<TextFieldRef<HTMLTextAreaElement>>>;
export interface ToggleButtonGroupProps extends ActionButtonGroupProps, Omit<_ToggleButtonGroupProps1, 'children' | 'style' | 'className'> {
    /** Whether the button should be displayed with an [emphasized style](https://spectrum.adobe.com/page/action-button/#Emphasis). */
    isEmphasized?: boolean;
}
export const ToggleButtonGroupContext: Context<ContextValue<ToggleButtonGroupProps, HTMLDivElement>>;
/**
 * A ToggleButtonGroup is a grouping of related ToggleButtons, with single or multiple selection.
 */
export const ToggleButtonGroup: ForwardRefExoticComponent<ToggleButtonGroupProps & RefAttributes<HTMLDivElement>>;
export interface ToggleButtonProps extends Omit<_ToggleButtonProps1, 'className' | 'style' | 'children' | 'onHover' | 'onHoverStart' | 'onHoverEnd' | 'onHoverChange'>, StyleProps, ActionButtonStyleProps {
    /** The content to display in the button. */
    children?: ReactNode;
    /** Whether the button should be displayed with an [emphasized style](https://spectrum.adobe.com/page/action-button/#Emphasis). */
    isEmphasized?: boolean;
}
export const ToggleButtonContext: Context<ContextValue<ToggleButtonProps, FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
/**
 * ToggleButtons allow users to toggle a selection on or off, for example
 * switching between two states or modes.
 */
export const ToggleButton: ForwardRefExoticComponent<ToggleButtonProps & RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
interface TooltipTriggerProps extends Omit<TooltipTriggerComponentProps, 'children' | 'closeDelay'>, Pick<_TooltipProps1, 'shouldFlip' | 'containerPadding' | 'offset' | 'crossOffset'> {
    /** The content of the tooltip. */
    children?: ReactNode;
    /**
     * The placement of the element with respect to its anchor element.
     *
     * @default 'top'
     */
    placement?: 'start' | 'end' | 'right' | 'left' | 'top' | 'bottom';
}
export interface TooltipProps extends Omit<_TooltipProps1, 'children' | 'className' | 'style' | 'triggerRef' | 'UNSTABLE_portalContainer' | 'isEntering' | 'isExiting' | 'placement' | 'containerPadding' | 'offset' | 'crossOffset' | 'shouldFlip' | 'arrowBoundaryOffset' | 'isOpen' | 'defaultOpen' | 'onOpenChange'>, UnsafeStyles {
    /** The content of the tooltip. */
    children?: ReactNode;
}
/**
 * Display container for Tooltip content. Has a directional arrow dependent on its placement.
 */
export const Tooltip: ForwardRefExoticComponent<TooltipProps & RefAttributes<DOMRefValue<HTMLDivElement>>>;
/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */
export function TooltipTrigger(props: TooltipTriggerProps): JSX.Element;
export { Collection } from 'react-aria-components';
export { FileTrigger } from 'react-aria-components';
export type { FileTriggerProps, TooltipTriggerComponentProps as TooltipTriggerProps } from 'react-aria-components';

//# sourceMappingURL=types.d.ts.map
