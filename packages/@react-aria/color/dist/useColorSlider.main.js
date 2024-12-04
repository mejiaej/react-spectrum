var $edxco$reactariautils = require("@react-aria/utils");
var $edxco$reactariai18n = require("@react-aria/i18n");
var $edxco$reactariaslider = require("@react-aria/slider");
var $edxco$reactariavisuallyhidden = require("@react-aria/visually-hidden");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useColorSlider", () => $afbb9647440a7f5b$export$106b7a4e66508f66);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $afbb9647440a7f5b$export$106b7a4e66508f66(props, state) {
    let { trackRef: trackRef, inputRef: inputRef, orientation: orientation, channel: channel, 'aria-label': ariaLabel, name: name } = props;
    let { locale: locale, direction: direction } = (0, $edxco$reactariai18n.useLocale)();
    // Provide a default aria-label if there is no other label provided.
    if (!props.label && !ariaLabel && !props['aria-labelledby']) ariaLabel = state.value.getChannelName(channel, locale);
    // @ts-ignore - ignore unused incompatible props
    let { groupProps: groupProps, trackProps: trackProps, labelProps: labelProps, outputProps: outputProps } = (0, $edxco$reactariaslider.useSlider)({
        ...props,
        'aria-label': ariaLabel
    }, state, trackRef);
    let { inputProps: inputProps, thumbProps: thumbProps } = (0, $edxco$reactariaslider.useSliderThumb)({
        index: 0,
        orientation: orientation,
        isDisabled: props.isDisabled,
        name: name,
        trackRef: trackRef,
        inputRef: inputRef
    }, state);
    let value = state.getDisplayColor();
    let generateBackground = ()=>{
        let to;
        if (orientation === 'vertical') to = 'top';
        else if (direction === 'ltr') to = 'right';
        else to = 'left';
        switch(channel){
            case 'hue':
                {
                    let stops = [
                        0,
                        60,
                        120,
                        180,
                        240,
                        300,
                        360
                    ].map((hue)=>value.withChannelValue('hue', hue).toString('css')).join(', ');
                    return `linear-gradient(to ${to}, ${stops})`;
                }
            case 'lightness':
                {
                    // We have to add an extra color stop in the middle so that the hue shows up at all.
                    // Otherwise it will always just be black to white.
                    let min = state.getThumbMinValue(0);
                    let max = state.getThumbMaxValue(0);
                    let start = value.withChannelValue(channel, min).toString('css');
                    let middle = value.withChannelValue(channel, (max - min) / 2).toString('css');
                    let end = value.withChannelValue(channel, max).toString('css');
                    return `linear-gradient(to ${to}, ${start}, ${middle}, ${end})`;
                }
            case 'saturation':
            case 'brightness':
            case 'red':
            case 'green':
            case 'blue':
            case 'alpha':
                {
                    let start = value.withChannelValue(channel, state.getThumbMinValue(0)).toString('css');
                    let end = value.withChannelValue(channel, state.getThumbMaxValue(0)).toString('css');
                    return `linear-gradient(to ${to}, ${start}, ${end})`;
                }
            default:
                throw new Error('Unknown color channel: ' + channel);
        }
    };
    let forcedColorAdjustNoneStyle = {
        forcedColorAdjust: 'none'
    };
    if (channel === 'hue') inputProps['aria-valuetext'] += `, ${value.getHueName(locale)}`;
    else if (channel !== 'alpha') inputProps['aria-valuetext'] += `, ${value.getColorName(locale)}`;
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $edxco$reactariavisuallyhidden.useVisuallyHidden)({
        style: {
            opacity: '0.0001',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
        }
    });
    return {
        trackProps: {
            ...(0, $edxco$reactariautils.mergeProps)(groupProps, trackProps),
            style: {
                ...trackProps.style,
                ...forcedColorAdjustNoneStyle,
                background: generateBackground()
            }
        },
        inputProps: {
            ...inputProps,
            style: {
                ...inputProps.style,
                ...visuallyHiddenProps.style
            }
        },
        thumbProps: {
            ...thumbProps,
            style: {
                ...thumbProps.style,
                ...forcedColorAdjustNoneStyle
            }
        },
        labelProps: labelProps,
        outputProps: outputProps
    };
}


//# sourceMappingURL=useColorSlider.main.js.map
