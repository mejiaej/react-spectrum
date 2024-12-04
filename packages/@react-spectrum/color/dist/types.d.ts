import { FocusableRef, FocusableRefValue, StyleProps, DOMRefValue, AriaLabelingProps, ValueBase } from "@react-types/shared";
import React, { ReactElement, ReactNode } from "react";
import { SpectrumColorAreaProps, SpectrumColorWheelProps, SpectrumColorSliderProps, SpectrumColorFieldProps, Color as _Color1 } from "@react-types/color";
import { TextFieldRef } from "@react-types/textfield";
import { AriaColorSwatchProps } from "@react-aria/color";
import { Color } from "react-aria-components";
/**
 * ColorArea allows users to adjust two channels of an RGB, HSL or HSB color value against a two-dimensional gradient background.
 */
export const ColorArea: (props: SpectrumColorAreaProps & {
    ref?: FocusableRef<HTMLDivElement>;
}) => ReactElement;
/**
 * ColorWheels allow users to adjust the hue of an HSL or HSB color value on a circular track.
 */
export const ColorWheel: React.ForwardRefExoticComponent<SpectrumColorWheelProps & React.RefAttributes<FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
/**
 * ColorSliders allow users to adjust an individual channel of a color value.
 */
export const ColorSlider: React.ForwardRefExoticComponent<SpectrumColorSliderProps & React.RefAttributes<FocusableRefValue<HTMLDivElement, HTMLDivElement>>>;
/**
 * A color field allows users to edit a hex color or individual color channel value.
 */
export const ColorField: React.ForwardRefExoticComponent<SpectrumColorFieldProps & React.RefAttributes<TextFieldRef<HTMLInputElement>>>;
export interface SpectrumColorSwatchProps extends AriaColorSwatchProps, StyleProps {
    /**
     * The size of the ColorSwatch.
     * @default "M"
     */
    size?: 'XS' | 'S' | 'M' | 'L';
    /**
     * The corner rounding of the ColorSwatch.
     * @default "default"
     */
    rounding?: 'default' | 'none' | 'full';
}
/**
 * A ColorSwatch displays a preview of a selected color.
 */
export const ColorSwatch: React.ForwardRefExoticComponent<SpectrumColorSwatchProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface SpectrumColorPickerProps extends ValueBase<string | Color, Color>, AriaLabelingProps {
    /** A visual label for the color picker. */
    label?: ReactNode;
    /** The contents of the color picker popover, e.g. `<ColorEditor />`. */
    children?: ReactNode;
    /**
     * The size of the color swatch.
     * @default "M"
     */
    size?: 'XS' | 'S' | 'M' | 'L';
    /**
     * The corner rounding of the color swatch.
     * @default "default"
     */
    rounding?: 'default' | 'none' | 'full';
}
/**
 * A ColorPicker combines a swatch with a customizable popover for editing a color.
 */
export const ColorPicker: React.ForwardRefExoticComponent<SpectrumColorPickerProps & React.RefAttributes<FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
export interface SpectrumColorEditorProps {
    /** Whether to hide the alpha channel color slider and color field. */
    hideAlphaChannel?: boolean;
}
/**
 * ColorEditor provides a default UI for editing colors within a ColorPicker.
 */
export const ColorEditor: React.ForwardRefExoticComponent<SpectrumColorEditorProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export interface SpectrumColorSwatchPickerProps extends ValueBase<string | _Color1, _Color1>, StyleProps {
    /** The ColorSwatches within the ColorSwatchPicker. */
    children: ReactNode;
    /**
     * The amount of padding between the swatches.
     * @default "regular"
     */
    density?: 'compact' | 'regular' | 'spacious';
    /**
     * The size of the color swatches.
     * @default "M"
     */
    size?: 'XS' | 'S' | 'M' | 'L';
    /**
     * The corner rounding of the color swatches.
     * @default "none"
     */
    rounding?: 'none' | 'default' | 'full';
}
/**
 * A ColorSwatchPicker displays a list of color swatches and allows a user to select one of them.
 */
export const ColorSwatchPicker: React.ForwardRefExoticComponent<SpectrumColorSwatchPickerProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
export { parseColor, getColorChannels } from '@react-stately/color';
export type { SpectrumColorAreaProps, SpectrumColorFieldProps, SpectrumColorSliderProps, SpectrumColorWheelProps } from '@react-types/color';
export type { Color, ColorSpace, ColorFormat } from '@react-types/color';

//# sourceMappingURL=types.d.ts.map
