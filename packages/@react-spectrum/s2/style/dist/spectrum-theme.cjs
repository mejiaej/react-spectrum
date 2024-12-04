"use strict";
var $b3643cb9d2948e30$exports = require("./style-macro.cjs");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "baseColor", () => $7dddb03c6ef7d79c$export$49bbad2a916ab57c);
$parcel$export(module.exports, "lightDark", () => $7dddb03c6ef7d79c$export$d19e682d444755ed);
$parcel$export(module.exports, "colorMix", () => $7dddb03c6ef7d79c$export$9b476054b78b89cd);
$parcel$export(module.exports, "fontRelative", () => $7dddb03c6ef7d79c$export$ba024f4caf693d15);
$parcel$export(module.exports, "edgeToText", () => $7dddb03c6ef7d79c$export$17b63977b35bb6d2);
$parcel$export(module.exports, "space", () => $7dddb03c6ef7d79c$export$a941ed4b947d12f8);
$parcel$export(module.exports, "size", () => $7dddb03c6ef7d79c$export$346677f925de839c);
$parcel$export(module.exports, "style", () => $7dddb03c6ef7d79c$export$1d567c320f4763bc);
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $7dddb03c6ef7d79c$var$pxToRem(px) {
    if (typeof px === 'string') px = parseFloat(px);
    return px / 16 + 'rem';
}
const $7dddb03c6ef7d79c$var$color = {
    transparent: 'transparent',
    black: 'black',
    white: 'white',
    "gray-25": "light-dark(rgb(255, 255, 255), rgb(17, 17, 17))",
    "gray-50": "light-dark(rgb(248, 248, 248), rgb(27, 27, 27))",
    "gray-75": "light-dark(rgb(243, 243, 243), rgb(34, 34, 34))",
    "gray-100": "light-dark(rgb(233, 233, 233), rgb(44, 44, 44))",
    "gray-200": "light-dark(rgb(225, 225, 225), rgb(50, 50, 50))",
    "gray-300": "light-dark(rgb(218, 218, 218), rgb(57, 57, 57))",
    "gray-400": "light-dark(rgb(198, 198, 198), rgb(68, 68, 68))",
    "gray-500": "light-dark(rgb(143, 143, 143), rgb(109, 109, 109))",
    "gray-600": "light-dark(rgb(113, 113, 113), rgb(138, 138, 138))",
    "gray-700": "light-dark(rgb(80, 80, 80), rgb(175, 175, 175))",
    "gray-800": "light-dark(rgb(41, 41, 41), rgb(219, 219, 219))",
    "gray-900": "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))",
    "gray-1000": "light-dark(rgb(0, 0, 0), rgb(255, 255, 255))",
    "blue-100": "light-dark(rgb(245, 249, 255), rgb(14, 23, 63))",
    "blue-200": "light-dark(rgb(229, 240, 254), rgb(15, 28, 82))",
    "blue-300": "light-dark(rgb(203, 226, 254), rgb(12, 33, 117))",
    "blue-400": "light-dark(rgb(172, 207, 253), rgb(18, 45, 154))",
    "blue-500": "light-dark(rgb(142, 185, 252), rgb(26, 58, 195))",
    "blue-600": "light-dark(rgb(114, 158, 253), rgb(37, 73, 229))",
    "blue-700": "light-dark(rgb(93, 137, 255), rgb(52, 91, 248))",
    "blue-800": "light-dark(rgb(75, 117, 255), rgb(64, 105, 253))",
    "blue-900": "light-dark(rgb(59, 99, 251), rgb(86, 129, 255))",
    "blue-1000": "light-dark(rgb(39, 77, 234), rgb(105, 149, 254))",
    "blue-1100": "light-dark(rgb(29, 62, 207), rgb(124, 169, 252))",
    "blue-1200": "light-dark(rgb(21, 50, 173), rgb(152, 192, 252))",
    "blue-1300": "light-dark(rgb(16, 40, 140), rgb(181, 213, 253))",
    "blue-1400": "light-dark(rgb(12, 31, 105), rgb(213, 231, 254))",
    "blue-1500": "light-dark(rgb(14, 24, 67), rgb(238, 245, 255))",
    "blue-1600": "light-dark(rgb(7, 11, 30), rgb(255, 255, 255))",
    "red-100": "light-dark(rgb(255, 246, 245), rgb(54, 10, 3))",
    "red-200": "light-dark(rgb(255, 235, 232), rgb(68, 13, 5))",
    "red-300": "light-dark(rgb(255, 214, 209), rgb(87, 17, 7))",
    "red-400": "light-dark(rgb(255, 188, 180), rgb(115, 24, 11))",
    "red-500": "light-dark(rgb(255, 157, 145), rgb(147, 31, 17))",
    "red-600": "light-dark(rgb(255, 118, 101), rgb(177, 38, 23))",
    "red-700": "light-dark(rgb(255, 81, 61), rgb(205, 46, 29))",
    "red-800": "light-dark(rgb(240, 56, 35), rgb(223, 52, 34))",
    "red-900": "light-dark(rgb(215, 50, 32), rgb(252, 67, 46))",
    "red-1000": "light-dark(rgb(183, 40, 24), rgb(255, 103, 86))",
    "red-1100": "light-dark(rgb(156, 33, 19), rgb(255, 134, 120))",
    "red-1200": "light-dark(rgb(129, 27, 14), rgb(255, 167, 157))",
    "red-1300": "light-dark(rgb(104, 21, 10), rgb(255, 196, 189))",
    "red-1400": "light-dark(rgb(80, 16, 6), rgb(255, 222, 219))",
    "red-1500": "light-dark(rgb(59, 11, 4), rgb(255, 242, 240))",
    "red-1600": "light-dark(rgb(29, 5, 2), rgb(255, 255, 255))",
    "orange-100": "light-dark(rgb(255, 246, 231), rgb(49, 16, 0))",
    "orange-200": "light-dark(rgb(255, 236, 207), rgb(61, 21, 0))",
    "orange-300": "light-dark(rgb(255, 218, 158), rgb(80, 27, 0))",
    "orange-400": "light-dark(rgb(255, 193, 94), rgb(106, 36, 0))",
    "orange-500": "light-dark(rgb(255, 162, 19), rgb(135, 47, 0))",
    "orange-600": "light-dark(rgb(252, 125, 0), rgb(162, 59, 0))",
    "orange-700": "light-dark(rgb(232, 106, 0), rgb(185, 73, 0))",
    "orange-800": "light-dark(rgb(212, 91, 0), rgb(199, 82, 0))",
    "orange-900": "light-dark(rgb(194, 78, 0), rgb(224, 100, 0))",
    "orange-1000": "light-dark(rgb(167, 62, 0), rgb(243, 117, 0))",
    "orange-1100": "light-dark(rgb(144, 51, 0), rgb(255, 137, 0))",
    "orange-1200": "light-dark(rgb(118, 41, 0), rgb(255, 173, 45))",
    "orange-1300": "light-dark(rgb(95, 32, 0), rgb(255, 201, 116))",
    "orange-1400": "light-dark(rgb(73, 24, 0), rgb(255, 225, 178))",
    "orange-1500": "light-dark(rgb(52, 18, 0), rgb(255, 243, 225))",
    "orange-1600": "light-dark(rgb(25, 8, 0), rgb(255, 255, 255))",
    "yellow-100": "light-dark(rgb(255, 248, 204), rgb(37, 23, 0))",
    "yellow-200": "light-dark(rgb(255, 241, 151), rgb(47, 29, 0))",
    "yellow-300": "light-dark(rgb(255, 222, 44), rgb(61, 39, 0))",
    "yellow-400": "light-dark(rgb(245, 199, 0), rgb(83, 52, 0))",
    "yellow-500": "light-dark(rgb(230, 175, 0), rgb(107, 67, 0))",
    "yellow-600": "light-dark(rgb(210, 149, 0), rgb(130, 82, 0))",
    "yellow-700": "light-dark(rgb(193, 131, 0), rgb(151, 97, 0))",
    "yellow-800": "light-dark(rgb(175, 116, 0), rgb(164, 106, 0))",
    "yellow-900": "light-dark(rgb(158, 102, 0), rgb(186, 124, 0))",
    "yellow-1000": "light-dark(rgb(134, 85, 0), rgb(203, 141, 0))",
    "yellow-1100": "light-dark(rgb(114, 72, 0), rgb(218, 159, 0))",
    "yellow-1200": "light-dark(rgb(93, 59, 0), rgb(235, 183, 0))",
    "yellow-1300": "light-dark(rgb(75, 47, 0), rgb(249, 206, 0))",
    "yellow-1400": "light-dark(rgb(56, 35, 0), rgb(255, 230, 86))",
    "yellow-1500": "light-dark(rgb(40, 25, 0), rgb(255, 246, 195))",
    "yellow-1600": "light-dark(rgb(18, 11, 0), rgb(255, 255, 255))",
    "chartreuse-100": "light-dark(rgb(246, 251, 222), rgb(23, 28, 0))",
    "chartreuse-200": "light-dark(rgb(234, 246, 173), rgb(30, 36, 0))",
    "chartreuse-300": "light-dark(rgb(208, 236, 70), rgb(39, 47, 0))",
    "chartreuse-400": "light-dark(rgb(182, 219, 0), rgb(53, 63, 0))",
    "chartreuse-500": "light-dark(rgb(163, 196, 0), rgb(68, 82, 0))",
    "chartreuse-600": "light-dark(rgb(143, 172, 0), rgb(83, 100, 0))",
    "chartreuse-700": "light-dark(rgb(128, 153, 0), rgb(97, 116, 0))",
    "chartreuse-800": "light-dark(rgb(114, 137, 0), rgb(106, 127, 0))",
    "chartreuse-900": "light-dark(rgb(102, 122, 0), rgb(122, 147, 0))",
    "chartreuse-1000": "light-dark(rgb(86, 103, 0), rgb(136, 164, 0))",
    "chartreuse-1100": "light-dark(rgb(73, 87, 0), rgb(151, 181, 0))",
    "chartreuse-1200": "light-dark(rgb(60, 71, 0), rgb(169, 203, 0))",
    "chartreuse-1300": "light-dark(rgb(47, 57, 0), rgb(187, 225, 0))",
    "chartreuse-1400": "light-dark(rgb(35, 43, 0), rgb(219, 240, 117))",
    "chartreuse-1500": "light-dark(rgb(25, 30, 0), rgb(242, 249, 206))",
    "chartreuse-1600": "light-dark(rgb(11, 14, 0), rgb(255, 255, 255))",
    "celery-100": "light-dark(rgb(235, 255, 220), rgb(11, 31, 0))",
    "celery-200": "light-dark(rgb(197, 255, 156), rgb(15, 38, 0))",
    "celery-300": "light-dark(rgb(157, 247, 92), rgb(21, 51, 1))",
    "celery-400": "light-dark(rgb(129, 228, 58), rgb(31, 67, 4))",
    "celery-500": "light-dark(rgb(110, 206, 42), rgb(41, 86, 8))",
    "celery-600": "light-dark(rgb(93, 180, 31), rgb(50, 105, 11))",
    "celery-700": "light-dark(rgb(82, 161, 25), rgb(60, 122, 15))",
    "celery-800": "light-dark(rgb(72, 144, 20), rgb(66, 134, 18))",
    "celery-900": "light-dark(rgb(64, 129, 17), rgb(78, 154, 23))",
    "celery-1000": "light-dark(rgb(52, 109, 12), rgb(88, 172, 28))",
    "celery-1100": "light-dark(rgb(44, 92, 9), rgb(100, 190, 35))",
    "celery-1200": "light-dark(rgb(35, 75, 6), rgb(116, 213, 46))",
    "celery-1300": "light-dark(rgb(27, 60, 3), rgb(136, 234, 65))",
    "celery-1400": "light-dark(rgb(19, 46, 0), rgb(170, 251, 112))",
    "celery-1500": "light-dark(rgb(12, 33, 0), rgb(222, 255, 198))",
    "celery-1600": "light-dark(rgb(4, 15, 0), rgb(255, 255, 255))",
    "green-100": "light-dark(rgb(237, 252, 241), rgb(0, 30, 23))",
    "green-200": "light-dark(rgb(215, 247, 225), rgb(0, 38, 29))",
    "green-300": "light-dark(rgb(173, 238, 197), rgb(0, 51, 38))",
    "green-400": "light-dark(rgb(107, 227, 162), rgb(0, 68, 48))",
    "green-500": "light-dark(rgb(43, 209, 125), rgb(2, 87, 58))",
    "green-600": "light-dark(rgb(18, 184, 103), rgb(3, 106, 67))",
    "green-700": "light-dark(rgb(11, 164, 93), rgb(4, 124, 75))",
    "green-800": "light-dark(rgb(7, 147, 85), rgb(6, 136, 80))",
    "green-900": "light-dark(rgb(5, 131, 78), rgb(9, 157, 89))",
    "green-1000": "light-dark(rgb(3, 110, 69), rgb(14, 175, 98))",
    "green-1100": "light-dark(rgb(2, 93, 60), rgb(24, 193, 110))",
    "green-1200": "light-dark(rgb(1, 76, 52), rgb(57, 215, 134))",
    "green-1300": "light-dark(rgb(0, 61, 44), rgb(126, 231, 172))",
    "green-1400": "light-dark(rgb(0, 46, 34), rgb(189, 241, 208))",
    "green-1500": "light-dark(rgb(0, 33, 25), rgb(229, 250, 236))",
    "green-1600": "light-dark(rgb(0, 15, 12), rgb(255, 255, 255))",
    "seafoam-100": "light-dark(rgb(235, 251, 246), rgb(0, 30, 27))",
    "seafoam-200": "light-dark(rgb(211, 246, 234), rgb(0, 39, 35))",
    "seafoam-300": "light-dark(rgb(169, 237, 216), rgb(0, 50, 44))",
    "seafoam-400": "light-dark(rgb(92, 225, 194), rgb(0, 67, 59))",
    "seafoam-500": "light-dark(rgb(16, 207, 169), rgb(2, 86, 75))",
    "seafoam-600": "light-dark(rgb(13, 181, 149), rgb(4, 105, 89))",
    "seafoam-700": "light-dark(rgb(11, 162, 134), rgb(6, 122, 103))",
    "seafoam-800": "light-dark(rgb(9, 144, 120), rgb(8, 134, 112))",
    "seafoam-900": "light-dark(rgb(7, 129, 109), rgb(10, 154, 128))",
    "seafoam-1000": "light-dark(rgb(5, 108, 92), rgb(12, 173, 142))",
    "seafoam-1100": "light-dark(rgb(3, 92, 80), rgb(14, 190, 156))",
    "seafoam-1200": "light-dark(rgb(1, 75, 67), rgb(29, 214, 176))",
    "seafoam-1300": "light-dark(rgb(0, 60, 54), rgb(122, 229, 203))",
    "seafoam-1400": "light-dark(rgb(0, 46, 40), rgb(186, 241, 222))",
    "seafoam-1500": "light-dark(rgb(0, 33, 29), rgb(229, 249, 243))",
    "seafoam-1600": "light-dark(rgb(0, 15, 14), rgb(255, 255, 255))",
    "cyan-100": "light-dark(rgb(238, 250, 254), rgb(0, 29, 39))",
    "cyan-200": "light-dark(rgb(217, 244, 253), rgb(0, 36, 49))",
    "cyan-300": "light-dark(rgb(183, 231, 252), rgb(0, 48, 65))",
    "cyan-400": "light-dark(rgb(138, 213, 255), rgb(0, 64, 88))",
    "cyan-500": "light-dark(rgb(92, 192, 255), rgb(0, 82, 113))",
    "cyan-600": "light-dark(rgb(48, 167, 254), rgb(3, 99, 140))",
    "cyan-700": "light-dark(rgb(29, 149, 231), rgb(8, 115, 168))",
    "cyan-800": "light-dark(rgb(18, 134, 205), rgb(13, 125, 186))",
    "cyan-900": "light-dark(rgb(11, 120, 179), rgb(24, 142, 220))",
    "cyan-1000": "light-dark(rgb(4, 102, 145), rgb(38, 159, 244))",
    "cyan-1100": "light-dark(rgb(0, 87, 121), rgb(63, 177, 255))",
    "cyan-1200": "light-dark(rgb(0, 71, 98), rgb(107, 199, 255))",
    "cyan-1300": "light-dark(rgb(0, 57, 78), rgb(152, 219, 255))",
    "cyan-1400": "light-dark(rgb(0, 43, 59), rgb(195, 236, 252))",
    "cyan-1500": "light-dark(rgb(0, 31, 43), rgb(230, 248, 253))",
    "cyan-1600": "light-dark(rgb(0, 14, 20), rgb(255, 255, 255))",
    "indigo-100": "light-dark(rgb(247, 248, 255), rgb(30, 0, 93))",
    "indigo-200": "light-dark(rgb(235, 238, 255), rgb(35, 0, 110))",
    "indigo-300": "light-dark(rgb(216, 222, 255), rgb(47, 0, 140))",
    "indigo-400": "light-dark(rgb(192, 201, 255), rgb(62, 12, 174))",
    "indigo-500": "light-dark(rgb(167, 178, 255), rgb(79, 30, 209))",
    "indigo-600": "light-dark(rgb(145, 151, 254), rgb(95, 52, 235))",
    "indigo-700": "light-dark(rgb(132, 128, 254), rgb(109, 75, 248))",
    "indigo-800": "light-dark(rgb(122, 106, 253), rgb(116, 91, 252))",
    "indigo-900": "light-dark(rgb(113, 85, 250), rgb(128, 119, 254))",
    "indigo-1000": "light-dark(rgb(99, 56, 238), rgb(139, 141, 254))",
    "indigo-1100": "light-dark(rgb(84, 36, 219), rgb(153, 161, 255))",
    "indigo-1200": "light-dark(rgb(69, 19, 191), rgb(176, 186, 255))",
    "indigo-1300": "light-dark(rgb(55, 6, 160), rgb(199, 208, 255))",
    "indigo-1400": "light-dark(rgb(42, 0, 129), rgb(223, 228, 255))",
    "indigo-1500": "light-dark(rgb(31, 0, 98), rgb(243, 244, 255))",
    "indigo-1600": "light-dark(rgb(17, 0, 54), rgb(255, 255, 255))",
    "purple-100": "light-dark(rgb(251, 247, 254), rgb(41, 0, 79))",
    "purple-200": "light-dark(rgb(244, 235, 252), rgb(50, 0, 96))",
    "purple-300": "light-dark(rgb(235, 218, 249), rgb(64, 0, 122))",
    "purple-400": "light-dark(rgb(221, 193, 246), rgb(83, 0, 159))",
    "purple-500": "light-dark(rgb(208, 167, 243), rgb(107, 6, 195))",
    "purple-600": "light-dark(rgb(191, 138, 238), rgb(130, 34, 215))",
    "purple-700": "light-dark(rgb(178, 114, 235), rgb(148, 62, 224))",
    "purple-800": "light-dark(rgb(166, 92, 231), rgb(157, 78, 228))",
    "purple-900": "light-dark(rgb(154, 71, 226), rgb(173, 105, 233))",
    "purple-1000": "light-dark(rgb(134, 40, 217), rgb(186, 127, 237))",
    "purple-1100": "light-dark(rgb(115, 13, 204), rgb(197, 149, 240))",
    "purple-1200": "light-dark(rgb(93, 0, 177), rgb(212, 176, 244))",
    "purple-1300": "light-dark(rgb(75, 0, 144), rgb(225, 201, 247))",
    "purple-1400": "light-dark(rgb(59, 0, 111), rgb(238, 224, 250))",
    "purple-1500": "light-dark(rgb(44, 0, 84), rgb(248, 243, 253))",
    "purple-1600": "light-dark(rgb(23, 0, 45), rgb(255, 255, 255))",
    "fuchsia-100": "light-dark(rgb(254, 246, 255), rgb(50, 0, 61))",
    "fuchsia-200": "light-dark(rgb(253, 233, 255), rgb(61, 0, 74))",
    "fuchsia-300": "light-dark(rgb(250, 211, 255), rgb(79, 0, 95))",
    "fuchsia-400": "light-dark(rgb(247, 181, 255), rgb(102, 9, 120))",
    "fuchsia-500": "light-dark(rgb(243, 147, 255), rgb(127, 23, 146))",
    "fuchsia-600": "light-dark(rgb(236, 105, 255), rgb(151, 38, 170))",
    "fuchsia-700": "light-dark(rgb(223, 77, 245), rgb(173, 51, 192))",
    "fuchsia-800": "light-dark(rgb(200, 68, 220), rgb(186, 60, 206))",
    "fuchsia-900": "light-dark(rgb(181, 57, 200), rgb(213, 73, 235))",
    "fuchsia-1000": "light-dark(rgb(156, 40, 175), rgb(232, 91, 253))",
    "fuchsia-1100": "light-dark(rgb(135, 27, 154), rgb(240, 122, 255))",
    "fuchsia-1200": "light-dark(rgb(113, 15, 131), rgb(245, 159, 255))",
    "fuchsia-1300": "light-dark(rgb(92, 4, 109), rgb(248, 191, 255))",
    "fuchsia-1400": "light-dark(rgb(72, 0, 88), rgb(251, 219, 255))",
    "fuchsia-1500": "light-dark(rgb(54, 0, 66), rgb(253, 241, 255))",
    "fuchsia-1600": "light-dark(rgb(29, 0, 35), rgb(255, 255, 255))",
    "magenta-100": "light-dark(rgb(255, 245, 248), rgb(59, 0, 22))",
    "magenta-200": "light-dark(rgb(255, 232, 240), rgb(74, 0, 27))",
    "magenta-300": "light-dark(rgb(255, 213, 227), rgb(93, 0, 34))",
    "magenta-400": "light-dark(rgb(255, 185, 208), rgb(123, 0, 45))",
    "magenta-500": "light-dark(rgb(255, 152, 187), rgb(152, 7, 60))",
    "magenta-600": "light-dark(rgb(255, 112, 159), rgb(181, 19, 76))",
    "magenta-700": "light-dark(rgb(255, 72, 133), rgb(207, 31, 92))",
    "magenta-800": "light-dark(rgb(240, 45, 110), rgb(224, 38, 101))",
    "magenta-900": "light-dark(rgb(217, 35, 97), rgb(255, 51, 119))",
    "magenta-1000": "light-dark(rgb(186, 22, 80), rgb(255, 96, 149))",
    "magenta-1100": "light-dark(rgb(163, 5, 62), rgb(255, 128, 171))",
    "magenta-1200": "light-dark(rgb(136, 0, 51), rgb(255, 163, 194))",
    "magenta-1300": "light-dark(rgb(111, 0, 40), rgb(255, 193, 214))",
    "magenta-1400": "light-dark(rgb(86, 0, 30), rgb(255, 220, 232))",
    "magenta-1500": "light-dark(rgb(64, 0, 22), rgb(255, 241, 246))",
    "magenta-1600": "light-dark(rgb(35, 0, 12), rgb(255, 255, 255))",
    "pink-100": "light-dark(rgb(255, 246, 252), rgb(58, 0, 37))",
    "pink-200": "light-dark(rgb(255, 232, 247), rgb(71, 0, 44))",
    "pink-300": "light-dark(rgb(255, 211, 240), rgb(90, 0, 57))",
    "pink-400": "light-dark(rgb(255, 181, 230), rgb(115, 7, 75))",
    "pink-500": "light-dark(rgb(255, 148, 219), rgb(143, 18, 97))",
    "pink-600": "light-dark(rgb(255, 103, 204), rgb(171, 29, 119))",
    "pink-700": "light-dark(rgb(242, 76, 184), rgb(196, 39, 138))",
    "pink-800": "light-dark(rgb(228, 52, 163), rgb(213, 45, 151))",
    "pink-900": "light-dark(rgb(206, 42, 146), rgb(236, 67, 175))",
    "pink-1000": "light-dark(rgb(176, 31, 123), rgb(251, 90, 196))",
    "pink-1100": "light-dark(rgb(152, 22, 104), rgb(255, 122, 210))",
    "pink-1200": "light-dark(rgb(128, 12, 85), rgb(255, 159, 223))",
    "pink-1300": "light-dark(rgb(105, 3, 68), rgb(255, 191, 234))",
    "pink-1400": "light-dark(rgb(83, 0, 53), rgb(255, 219, 243))",
    "pink-1500": "light-dark(rgb(62, 0, 39), rgb(255, 241, 250))",
    "pink-1600": "light-dark(rgb(33, 0, 21), rgb(255, 255, 255))",
    "turquoise-100": "light-dark(rgb(238, 251, 251), rgb(0, 30, 33))",
    "turquoise-200": "light-dark(rgb(209, 245, 245), rgb(0, 37, 41))",
    "turquoise-300": "light-dark(rgb(169, 236, 237), rgb(0, 49, 54))",
    "turquoise-400": "light-dark(rgb(111, 221, 228), rgb(0, 66, 72))",
    "turquoise-500": "light-dark(rgb(39, 202, 216), rgb(3, 84, 92))",
    "turquoise-600": "light-dark(rgb(15, 177, 192), rgb(5, 103, 112))",
    "turquoise-700": "light-dark(rgb(12, 158, 171), rgb(7, 120, 131))",
    "turquoise-800": "light-dark(rgb(10, 141, 153), rgb(9, 131, 142))",
    "turquoise-900": "light-dark(rgb(8, 126, 137), rgb(11, 151, 164))",
    "turquoise-1000": "light-dark(rgb(5, 107, 116), rgb(13, 168, 182))",
    "turquoise-1100": "light-dark(rgb(3, 90, 98), rgb(16, 186, 202))",
    "turquoise-1200": "light-dark(rgb(1, 74, 81), rgb(64, 208, 220))",
    "turquoise-1300": "light-dark(rgb(0, 59, 65), rgb(128, 225, 231))",
    "turquoise-1400": "light-dark(rgb(0, 44, 49), rgb(183, 240, 240))",
    "turquoise-1500": "light-dark(rgb(0, 32, 35), rgb(228, 249, 249))",
    "turquoise-1600": "light-dark(rgb(0, 15, 17), rgb(255, 255, 255))",
    "brown-100": "light-dark(rgb(252, 247, 242), rgb(35, 24, 8))",
    "brown-200": "light-dark(rgb(247, 238, 225), rgb(44, 31, 11))",
    "brown-300": "light-dark(rgb(239, 221, 195), rgb(58, 40, 14))",
    "brown-400": "light-dark(rgb(229, 200, 157), rgb(78, 55, 19))",
    "brown-500": "light-dark(rgb(214, 177, 123), rgb(98, 71, 30))",
    "brown-600": "light-dark(rgb(190, 155, 104), rgb(115, 88, 47))",
    "brown-700": "light-dark(rgb(171, 138, 90), rgb(132, 104, 61))",
    "brown-800": "light-dark(rgb(154, 123, 77), rgb(143, 114, 69))",
    "brown-900": "light-dark(rgb(139, 109, 66), rgb(163, 132, 84))",
    "brown-1000": "light-dark(rgb(119, 91, 50), rgb(181, 147, 98))",
    "brown-1100": "light-dark(rgb(103, 76, 35), rgb(199, 163, 112))",
    "brown-1200": "light-dark(rgb(88, 61, 21), rgb(222, 185, 130))",
    "brown-1300": "light-dark(rgb(70, 49, 17), rgb(232, 207, 169))",
    "brown-1400": "light-dark(rgb(52, 37, 13), rgb(242, 227, 206))",
    "brown-1500": "light-dark(rgb(38, 26, 9), rgb(250, 244, 236))",
    "brown-1600": "light-dark(rgb(16, 12, 4), rgb(255, 255, 255))",
    "silver-100": "light-dark(rgb(247, 247, 247), rgb(26, 26, 26))",
    "silver-200": "light-dark(rgb(239, 239, 239), rgb(33, 33, 33))",
    "silver-300": "light-dark(rgb(223, 223, 223), rgb(44, 44, 44))",
    "silver-400": "light-dark(rgb(204, 204, 204), rgb(59, 59, 59))",
    "silver-500": "light-dark(rgb(183, 183, 183), rgb(76, 76, 76))",
    "silver-600": "light-dark(rgb(160, 160, 160), rgb(92, 92, 92))",
    "silver-700": "light-dark(rgb(143, 143, 143), rgb(108, 108, 108))",
    "silver-800": "light-dark(rgb(128, 128, 128), rgb(118, 118, 118))",
    "silver-900": "light-dark(rgb(114, 114, 114), rgb(137, 137, 137))",
    "silver-1000": "light-dark(rgb(96, 96, 96), rgb(152, 152, 152))",
    "silver-1100": "light-dark(rgb(81, 81, 81), rgb(169, 169, 169))",
    "silver-1200": "light-dark(rgb(66, 66, 66), rgb(190, 190, 190))",
    "silver-1300": "light-dark(rgb(52, 52, 52), rgb(211, 211, 211))",
    "silver-1400": "light-dark(rgb(39, 39, 39), rgb(229, 229, 229))",
    "silver-1500": "light-dark(rgb(28, 28, 28), rgb(244, 244, 244))",
    "silver-1600": "light-dark(rgb(12, 12, 12), rgb(255, 255, 255))",
    "cinnamon-100": "light-dark(rgb(253, 247, 243), rgb(48, 17, 4))",
    "cinnamon-200": "light-dark(rgb(249, 236, 229), rgb(59, 21, 5))",
    "cinnamon-300": "light-dark(rgb(244, 218, 203), rgb(79, 28, 7))",
    "cinnamon-400": "light-dark(rgb(237, 196, 172), rgb(100, 41, 15))",
    "cinnamon-500": "light-dark(rgb(229, 170, 136), rgb(122, 57, 28))",
    "cinnamon-600": "light-dark(rgb(212, 145, 108), rgb(143, 74, 40))",
    "cinnamon-700": "light-dark(rgb(198, 126, 88), rgb(163, 88, 52))",
    "cinnamon-800": "light-dark(rgb(184, 109, 70), rgb(176, 98, 59))",
    "cinnamon-900": "light-dark(rgb(170, 94, 56), rgb(192, 119, 80))",
    "cinnamon-1000": "light-dark(rgb(147, 77, 43), rgb(206, 136, 99))",
    "cinnamon-1100": "light-dark(rgb(128, 62, 32), rgb(220, 154, 118))",
    "cinnamon-1200": "light-dark(rgb(110, 48, 21), rgb(232, 179, 149))",
    "cinnamon-1300": "light-dark(rgb(92, 35, 11), rgb(239, 203, 183))",
    "cinnamon-1400": "light-dark(rgb(72, 25, 6), rgb(246, 225, 214))",
    "cinnamon-1500": "light-dark(rgb(52, 18, 4), rgb(252, 244, 239))",
    "cinnamon-1600": "light-dark(rgb(24, 8, 2), rgb(255, 255, 255))",
    "accent-100": "light-dark(rgb(245, 249, 255), rgb(14, 23, 63))",
    "accent-200": "light-dark(rgb(229, 240, 254), rgb(15, 28, 82))",
    "accent-300": "light-dark(rgb(203, 226, 254), rgb(12, 33, 117))",
    "accent-400": "light-dark(rgb(172, 207, 253), rgb(18, 45, 154))",
    "accent-500": "light-dark(rgb(142, 185, 252), rgb(26, 58, 195))",
    "accent-600": "light-dark(rgb(114, 158, 253), rgb(37, 73, 229))",
    "accent-700": "light-dark(rgb(93, 137, 255), rgb(52, 91, 248))",
    "accent-800": "light-dark(rgb(75, 117, 255), rgb(64, 105, 253))",
    "accent-900": "light-dark(rgb(59, 99, 251), rgb(86, 129, 255))",
    "accent-1000": "light-dark(rgb(39, 77, 234), rgb(105, 149, 254))",
    "accent-1100": "light-dark(rgb(29, 62, 207), rgb(124, 169, 252))",
    "accent-1200": "light-dark(rgb(21, 50, 173), rgb(152, 192, 252))",
    "accent-1300": "light-dark(rgb(16, 40, 140), rgb(181, 213, 253))",
    "accent-1400": "light-dark(rgb(12, 31, 105), rgb(213, 231, 254))",
    "accent-1500": "light-dark(rgb(14, 24, 67), rgb(238, 245, 255))",
    "accent-1600": "light-dark(rgb(7, 11, 30), rgb(255, 255, 255))",
    "informative-100": "light-dark(rgb(245, 249, 255), rgb(14, 23, 63))",
    "informative-200": "light-dark(rgb(229, 240, 254), rgb(15, 28, 82))",
    "informative-300": "light-dark(rgb(203, 226, 254), rgb(12, 33, 117))",
    "informative-400": "light-dark(rgb(172, 207, 253), rgb(18, 45, 154))",
    "informative-500": "light-dark(rgb(142, 185, 252), rgb(26, 58, 195))",
    "informative-600": "light-dark(rgb(114, 158, 253), rgb(37, 73, 229))",
    "informative-700": "light-dark(rgb(93, 137, 255), rgb(52, 91, 248))",
    "informative-800": "light-dark(rgb(75, 117, 255), rgb(64, 105, 253))",
    "informative-900": "light-dark(rgb(59, 99, 251), rgb(86, 129, 255))",
    "informative-1000": "light-dark(rgb(39, 77, 234), rgb(105, 149, 254))",
    "informative-1100": "light-dark(rgb(29, 62, 207), rgb(124, 169, 252))",
    "informative-1200": "light-dark(rgb(21, 50, 173), rgb(152, 192, 252))",
    "informative-1300": "light-dark(rgb(16, 40, 140), rgb(181, 213, 253))",
    "informative-1400": "light-dark(rgb(12, 31, 105), rgb(213, 231, 254))",
    "informative-1500": "light-dark(rgb(14, 24, 67), rgb(238, 245, 255))",
    "informative-1600": "light-dark(rgb(7, 11, 30), rgb(255, 255, 255))",
    "negative-100": "light-dark(rgb(255, 246, 245), rgb(54, 10, 3))",
    "negative-200": "light-dark(rgb(255, 235, 232), rgb(68, 13, 5))",
    "negative-300": "light-dark(rgb(255, 214, 209), rgb(87, 17, 7))",
    "negative-400": "light-dark(rgb(255, 188, 180), rgb(115, 24, 11))",
    "negative-500": "light-dark(rgb(255, 157, 145), rgb(147, 31, 17))",
    "negative-600": "light-dark(rgb(255, 118, 101), rgb(177, 38, 23))",
    "negative-700": "light-dark(rgb(255, 81, 61), rgb(205, 46, 29))",
    "negative-800": "light-dark(rgb(240, 56, 35), rgb(223, 52, 34))",
    "negative-900": "light-dark(rgb(215, 50, 32), rgb(252, 67, 46))",
    "negative-1000": "light-dark(rgb(183, 40, 24), rgb(255, 103, 86))",
    "negative-1100": "light-dark(rgb(156, 33, 19), rgb(255, 134, 120))",
    "negative-1200": "light-dark(rgb(129, 27, 14), rgb(255, 167, 157))",
    "negative-1300": "light-dark(rgb(104, 21, 10), rgb(255, 196, 189))",
    "negative-1400": "light-dark(rgb(80, 16, 6), rgb(255, 222, 219))",
    "negative-1500": "light-dark(rgb(59, 11, 4), rgb(255, 242, 240))",
    "negative-1600": "light-dark(rgb(29, 5, 2), rgb(255, 255, 255))",
    "notice-100": "light-dark(rgb(255, 246, 231), rgb(49, 16, 0))",
    "notice-200": "light-dark(rgb(255, 236, 207), rgb(61, 21, 0))",
    "notice-300": "light-dark(rgb(255, 218, 158), rgb(80, 27, 0))",
    "notice-400": "light-dark(rgb(255, 193, 94), rgb(106, 36, 0))",
    "notice-500": "light-dark(rgb(255, 162, 19), rgb(135, 47, 0))",
    "notice-600": "light-dark(rgb(252, 125, 0), rgb(162, 59, 0))",
    "notice-700": "light-dark(rgb(232, 106, 0), rgb(185, 73, 0))",
    "notice-800": "light-dark(rgb(212, 91, 0), rgb(199, 82, 0))",
    "notice-900": "light-dark(rgb(194, 78, 0), rgb(224, 100, 0))",
    "notice-1000": "light-dark(rgb(167, 62, 0), rgb(243, 117, 0))",
    "notice-1100": "light-dark(rgb(144, 51, 0), rgb(255, 137, 0))",
    "notice-1200": "light-dark(rgb(118, 41, 0), rgb(255, 173, 45))",
    "notice-1300": "light-dark(rgb(95, 32, 0), rgb(255, 201, 116))",
    "notice-1400": "light-dark(rgb(73, 24, 0), rgb(255, 225, 178))",
    "notice-1500": "light-dark(rgb(52, 18, 0), rgb(255, 243, 225))",
    "notice-1600": "light-dark(rgb(25, 8, 0), rgb(255, 255, 255))",
    "positive-100": "light-dark(rgb(237, 252, 241), rgb(0, 30, 23))",
    "positive-200": "light-dark(rgb(215, 247, 225), rgb(0, 38, 29))",
    "positive-300": "light-dark(rgb(173, 238, 197), rgb(0, 51, 38))",
    "positive-400": "light-dark(rgb(107, 227, 162), rgb(0, 68, 48))",
    "positive-500": "light-dark(rgb(43, 209, 125), rgb(2, 87, 58))",
    "positive-600": "light-dark(rgb(18, 184, 103), rgb(3, 106, 67))",
    "positive-700": "light-dark(rgb(11, 164, 93), rgb(4, 124, 75))",
    "positive-800": "light-dark(rgb(7, 147, 85), rgb(6, 136, 80))",
    "positive-900": "light-dark(rgb(5, 131, 78), rgb(9, 157, 89))",
    "positive-1000": "light-dark(rgb(3, 110, 69), rgb(14, 175, 98))",
    "positive-1100": "light-dark(rgb(2, 93, 60), rgb(24, 193, 110))",
    "positive-1200": "light-dark(rgb(1, 76, 52), rgb(57, 215, 134))",
    "positive-1300": "light-dark(rgb(0, 61, 44), rgb(126, 231, 172))",
    "positive-1400": "light-dark(rgb(0, 46, 34), rgb(189, 241, 208))",
    "positive-1500": "light-dark(rgb(0, 33, 25), rgb(229, 250, 236))",
    "positive-1600": "light-dark(rgb(0, 15, 12), rgb(255, 255, 255))",
    "transparent-white-25": "rgba(255, 255, 255, 0)",
    "transparent-white-50": "rgba(255, 255, 255, 0.04)",
    "transparent-white-75": "rgba(255, 255, 255, 0.07)",
    "transparent-white-100": "rgba(255, 255, 255, 0.11)",
    "transparent-white-200": "rgba(255, 255, 255, 0.14)",
    "transparent-white-300": "rgba(255, 255, 255, 0.17)",
    "transparent-white-400": "rgba(255, 255, 255, 0.21)",
    "transparent-white-500": "rgba(255, 255, 255, 0.39)",
    "transparent-white-600": "rgba(255, 255, 255, 0.51)",
    "transparent-white-700": "rgba(255, 255, 255, 0.66)",
    "transparent-white-800": "rgba(255, 255, 255, 0.85)",
    "transparent-white-900": "rgba(255, 255, 255, 0.94)",
    "transparent-white-1000": "rgb(255, 255, 255)",
    "transparent-black-25": "rgba(0, 0, 0, 0)",
    "transparent-black-50": "rgba(0, 0, 0, 0.03)",
    "transparent-black-75": "rgba(0, 0, 0, 0.05)",
    "transparent-black-100": "rgba(0, 0, 0, 0.09)",
    "transparent-black-200": "rgba(0, 0, 0, 0.12)",
    "transparent-black-300": "rgba(0, 0, 0, 0.15)",
    "transparent-black-400": "rgba(0, 0, 0, 0.22)",
    "transparent-black-500": "rgba(0, 0, 0, 0.44)",
    "transparent-black-600": "rgba(0, 0, 0, 0.56)",
    "transparent-black-700": "rgba(0, 0, 0, 0.69)",
    "transparent-black-800": "rgba(0, 0, 0, 0.84)",
    "transparent-black-900": "rgba(0, 0, 0, 0.93)",
    "transparent-black-1000": "rgb(0, 0, 0)",
    // High contrast mode.
    Background: 'Background',
    ButtonBorder: 'ButtonBorder',
    ButtonFace: 'ButtonFace',
    ButtonText: 'ButtonText',
    Field: 'Field',
    Highlight: 'Highlight',
    HighlightText: 'HighlightText',
    GrayText: 'GrayText',
    Mark: 'Mark',
    LinkText: 'LinkText'
};
function $7dddb03c6ef7d79c$export$49bbad2a916ab57c(base) {
    let keys = Object.keys($7dddb03c6ef7d79c$var$color);
    let index = keys.indexOf(base);
    if (index === -1) throw new Error('Invalid base color ' + base);
    return {
        default: base,
        isHovered: keys[index + 1],
        isFocusVisible: keys[index + 1],
        isPressed: keys[index + 1]
    };
}
function $7dddb03c6ef7d79c$var$parseColor(value) {
    let arbitrary = (0, $b3643cb9d2948e30$exports.parseArbitraryValue)(value);
    if (arbitrary) return arbitrary[0];
    let [colorValue, opacity] = value.split('/');
    colorValue = $7dddb03c6ef7d79c$var$color[colorValue];
    if (opacity) colorValue = `rgb(from ${colorValue} r g b / ${opacity}%)`;
    return colorValue;
}
function $7dddb03c6ef7d79c$export$d19e682d444755ed(light, dark) {
    return `[light-dark(${$7dddb03c6ef7d79c$var$parseColor(light)}, ${$7dddb03c6ef7d79c$var$parseColor(dark)})]`;
}
function $7dddb03c6ef7d79c$export$9b476054b78b89cd(a, b, percent) {
    return `[color-mix(in srgb, ${$7dddb03c6ef7d79c$var$parseColor(a)}, ${$7dddb03c6ef7d79c$var$parseColor(b)} ${percent}%)]`;
}
function $7dddb03c6ef7d79c$var$generateSpacing(px) {
    let res = {};
    for (let p of px)res[p] = $7dddb03c6ef7d79c$var$pxToRem(p);
    return res;
}
const $7dddb03c6ef7d79c$var$baseSpacing = $7dddb03c6ef7d79c$var$generateSpacing([
    0,
    2,
    4,
    8,
    12,
    16,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    56,
    // From here onward the values are mostly spaced by 1rem (16px)
    64,
    80,
    96,
    // TODO: should these only be available as sizes rather than spacing?
    112,
    128,
    144,
    160,
    176,
    192,
    208,
    224,
    240,
    256,
    288,
    320,
    384
]);
// This should match the above, but negative. There's no way to negate a number
// type in typescript so this has to be done manually for now.
const $7dddb03c6ef7d79c$var$negativeSpacing = $7dddb03c6ef7d79c$var$generateSpacing([
    // -2, // spacing-50 !! TODO: should we support this?
    -4,
    -8,
    -12,
    -16,
    -20,
    -24,
    -28,
    -32,
    -36,
    -40,
    -44,
    -48,
    -56,
    // From here onward the values are mostly spaced by 1rem (16px)
    -64,
    -80,
    -96,
    // TODO: should these only be available as sizes rather than spacing?
    -112,
    -128,
    -144,
    -160,
    -176,
    -192,
    -208,
    -224,
    -240,
    -256,
    -288,
    -320,
    -384
]);
function $7dddb03c6ef7d79c$export$ba024f4caf693d15(base, baseFontSize = 14) {
    return base / baseFontSize + 'em';
}
function $7dddb03c6ef7d79c$export$17b63977b35bb6d2(height) {
    return `calc(${$7dddb03c6ef7d79c$var$baseSpacing[height]} * 3 / 8)`;
}
function $7dddb03c6ef7d79c$export$a941ed4b947d12f8(px) {
    return $7dddb03c6ef7d79c$var$pxToRem(px);
}
const $7dddb03c6ef7d79c$var$spacing = {
    ...$7dddb03c6ef7d79c$var$baseSpacing,
    // font-size relative values
    'text-to-control': $7dddb03c6ef7d79c$export$ba024f4caf693d15(10),
    'text-to-visual': {
        default: $7dddb03c6ef7d79c$export$ba024f4caf693d15(6),
        touch: $7dddb03c6ef7d79c$export$ba024f4caf693d15(8, 17) // -> 6px, 7px, 8px, 9px, 10px, should be 7px, 7px, 8px, 9px, 11px
    },
    // height relative values
    'edge-to-text': 'calc(self(height, self(minHeight)) * 3 / 8)',
    'pill': 'calc(self(height, self(minHeight)) / 2)'
};
function $7dddb03c6ef7d79c$export$346677f925de839c(px) {
    return `calc(${$7dddb03c6ef7d79c$var$pxToRem(px)} * var(--s2-scale))`;
}
const $7dddb03c6ef7d79c$var$sizing = {
    auto: 'auto',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    control: {
        default: $7dddb03c6ef7d79c$export$346677f925de839c(32),
        size: {
            XS: $7dddb03c6ef7d79c$export$346677f925de839c(20),
            S: $7dddb03c6ef7d79c$export$346677f925de839c(24),
            L: $7dddb03c6ef7d79c$export$346677f925de839c(40),
            XL: $7dddb03c6ef7d79c$export$346677f925de839c(48)
        }
    },
    // With browser support for round() we could do this:
    // 'control-sm': `round(${16 / 14}em, 2px)`
    'control-sm': {
        default: $7dddb03c6ef7d79c$export$346677f925de839c(16),
        size: {
            S: $7dddb03c6ef7d79c$export$346677f925de839c(14),
            L: $7dddb03c6ef7d79c$export$346677f925de839c(18),
            XL: $7dddb03c6ef7d79c$export$346677f925de839c(20)
        }
    }
};
const $7dddb03c6ef7d79c$var$height = {
    ...$7dddb03c6ef7d79c$var$sizing,
    screen: '100vh'
};
const $7dddb03c6ef7d79c$var$width = {
    ...$7dddb03c6ef7d79c$var$sizing,
    screen: '100vw'
};
function $7dddb03c6ef7d79c$var$createSpectrumSizingProperty(values) {
    return (0, $b3643cb9d2948e30$exports.createSizingProperty)(values, (px)=>`calc(${$7dddb03c6ef7d79c$var$pxToRem(px)} * var(--s2-scale))`);
}
const $7dddb03c6ef7d79c$var$margin = {
    ...$7dddb03c6ef7d79c$var$spacing,
    ...$7dddb03c6ef7d79c$var$negativeSpacing,
    auto: 'auto'
};
const $7dddb03c6ef7d79c$var$inset = {
    ...$7dddb03c6ef7d79c$var$baseSpacing,
    auto: 'auto',
    full: '100%'
};
const $7dddb03c6ef7d79c$var$translate = {
    ...$7dddb03c6ef7d79c$var$baseSpacing,
    ...$7dddb03c6ef7d79c$var$negativeSpacing,
    full: '100%'
};
const $7dddb03c6ef7d79c$var$borderWidth = {
    0: '0px',
    1: "1px",
    2: "2px",
    4: "4px"
};
const $7dddb03c6ef7d79c$var$radius = {
    none: "0px",
    sm: $7dddb03c6ef7d79c$var$pxToRem("4px"),
    default: $7dddb03c6ef7d79c$var$pxToRem("8px"),
    lg: $7dddb03c6ef7d79c$var$pxToRem("10px"),
    xl: $7dddb03c6ef7d79c$var$pxToRem("16px"),
    full: '9999px',
    pill: 'calc(self(height, self(minHeight, 9999px)) / 2)',
    control: $7dddb03c6ef7d79c$export$ba024f4caf693d15(8),
    'control-sm': $7dddb03c6ef7d79c$export$ba024f4caf693d15(4)
};
let $7dddb03c6ef7d79c$var$gridTrack = (value)=>{
    if (typeof value === 'string') return value;
    return value.map((v)=>$7dddb03c6ef7d79c$var$gridTrackSize(v)).join(' ');
};
let $7dddb03c6ef7d79c$var$gridTrackSize = (value)=>{
    return value in $7dddb03c6ef7d79c$var$baseSpacing ? $7dddb03c6ef7d79c$var$baseSpacing[value] : value;
};
const $7dddb03c6ef7d79c$var$transitionProperty = {
    default: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform, translate, scale, rotate',
    all: 'all',
    none: 'none'
};
// TODO
const $7dddb03c6ef7d79c$var$timingFunction = {
    default: 'cubic-bezier(0.45, 0, 0.4, 1)',
    linear: 'linear',
    in: 'cubic-bezier(0.5, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.40, 1)',
    'in-out': 'cubic-bezier(0.45, 0, 0.4, 1)'
};
// TODO: do these need tokens or are arbitrary values ok?
let $7dddb03c6ef7d79c$var$durationProperty = (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value, property)=>({
        [property]: typeof value === 'number' ? value + 'ms' : value
    }));
// const colorWithAlpha = createColorProperty(color);
const $7dddb03c6ef7d79c$var$fontWeightBase = {
    light: '300',
    // TODO: spectrum calls this "regular" but CSS calls it "normal". We also call other properties "default". What do we want to match?
    normal: '400',
    medium: '500',
    bold: '700',
    'extra-bold': '800',
    black: '900'
};
const $7dddb03c6ef7d79c$var$i18nFonts = {
    ':lang(ar)': 'myriad-arabic, ui-sans-serif, system-ui, sans-serif',
    ':lang(he)': 'myriad-hebrew, ui-sans-serif, system-ui, sans-serif',
    ':lang(ja)': "adobe-clean-han-japanese, 'Hiragino Kaku Gothic ProN', '\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3', Osaka, YuGothic, 'Yu Gothic', '\u30E1\u30A4\u30EA\u30AA', Meiryo, '\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF', 'MS PGothic', sans-serif",
    ':lang(ko)': "adobe-clean-han-korean, source-han-korean, 'Malgun Gothic', 'Apple Gothic', sans-serif",
    ':lang(zh)': "adobe-clean-han-traditional, source-han-traditional, 'MingLiu', 'Heiti TC Light', sans-serif",
    // TODO: are these fallbacks supposed to be different than above?
    ':lang(zh-hant)': "adobe-clean-han-traditional, source-han-traditional, 'MingLiu', 'Microsoft JhengHei UI', 'Microsoft JhengHei', 'Heiti TC Light', sans-serif",
    ':lang(zh-Hans, zh-CN, zh-SG)': "adobe-clean-han-simplified-c, source-han-simplified-c, 'SimSun', 'Heiti SC Light', sans-serif"
};
const $7dddb03c6ef7d79c$var$fontSize = {
    // The default font size scale is for use within UI components.
    'ui-xs': {
        "default": "0.6875rem",
        touch: "0.8125rem"
    },
    'ui-sm': {
        "default": "0.75rem",
        touch: "0.9375rem"
    },
    ui: {
        "default": "0.875rem",
        touch: "1.0625rem"
    },
    'ui-lg': {
        "default": "1rem",
        touch: "1.1875rem"
    },
    'ui-xl': {
        "default": "1.125rem",
        touch: "1.375rem"
    },
    'ui-2xl': {
        "default": "1.25rem",
        touch: "1.5rem"
    },
    'ui-3xl': {
        "default": "1.375rem",
        touch: "1.6875rem"
    },
    control: {
        default: {
            "default": "0.875rem",
            touch: "1.0625rem"
        },
        size: {
            XS: {
                "default": "0.6875rem",
                touch: "0.8125rem"
            },
            S: {
                "default": "0.75rem",
                touch: "0.9375rem"
            },
            L: {
                "default": "1rem",
                touch: "1.1875rem"
            },
            XL: {
                "default": "1.125rem",
                touch: "1.375rem"
            }
        }
    },
    'heading-2xs': {
        "default": "0.875rem",
        touch: "1.0625rem"
    },
    'heading-xs': {
        "default": "1.125rem",
        touch: "1.375rem"
    },
    'heading-sm': {
        "default": "1.25rem",
        touch: "1.5rem"
    },
    heading: {
        "default": "1.375rem",
        touch: "1.6875rem"
    },
    'heading-lg': {
        "default": "1.75rem",
        touch: "2.125rem"
    },
    'heading-xl': {
        "default": "2.25rem",
        touch: "2.75rem"
    },
    'heading-2xl': {
        "default": "2.8125rem",
        touch: "3.4375rem"
    },
    'heading-3xl': {
        "default": "3.625rem",
        touch: "4.375rem"
    },
    'title-xs': {
        "default": "0.75rem",
        touch: "0.9375rem"
    },
    'title-sm': {
        "default": "0.875rem",
        touch: "1.0625rem"
    },
    title: {
        "default": "1rem",
        touch: "1.1875rem"
    },
    'title-lg': {
        "default": "1.125rem",
        touch: "1.375rem"
    },
    'title-xl': {
        "default": "1.25rem",
        touch: "1.5rem"
    },
    'title-2xl': {
        "default": "1.375rem",
        touch: "1.6875rem"
    },
    'title-3xl': {
        "default": "1.5625rem",
        touch: "1.9375rem"
    },
    // Body is for large blocks of text, e.g. paragraphs, not in UI components.
    'body-2xs': {
        "default": "0.6875rem",
        touch: "0.8125rem"
    },
    'body-xs': {
        "default": "0.75rem",
        touch: "0.9375rem"
    },
    'body-sm': {
        "default": "0.875rem",
        touch: "1.0625rem"
    },
    body: {
        "default": "1rem",
        touch: "1.1875rem"
    },
    'body-lg': {
        "default": "1.125rem",
        touch: "1.375rem"
    },
    'body-xl': {
        "default": "1.25rem",
        touch: "1.5rem"
    },
    'body-2xl': {
        "default": "1.375rem",
        touch: "1.6875rem"
    },
    'body-3xl': {
        "default": "1.5625rem",
        touch: "1.9375rem"
    },
    'detail-sm': {
        "default": "0.75rem",
        touch: "0.9375rem"
    },
    detail: {
        "default": "0.875rem",
        touch: "1.0625rem"
    },
    'detail-lg': {
        "default": "1rem",
        touch: "1.1875rem"
    },
    'detail-xl': {
        "default": "1.125rem",
        touch: "1.375rem"
    },
    'code-xs': {
        "default": "0.75rem",
        touch: "0.9375rem"
    },
    'code-sm': {
        "default": "0.875rem",
        touch: "1.0625rem"
    },
    code: {
        "default": "1rem",
        touch: "1.1875rem"
    },
    'code-lg': {
        "default": "1.125rem",
        touch: "1.375rem"
    },
    'code-xl': {
        "default": "1.25rem",
        touch: "1.5rem"
    }
};
const $7dddb03c6ef7d79c$export$1d567c320f4763bc = (0, $b3643cb9d2948e30$exports.createTheme)({
    properties: {
        // colors
        color: (0, $b3643cb9d2948e30$exports.createColorProperty)({
            ...$7dddb03c6ef7d79c$var$color,
            accent: {
                default: "light-dark(rgb(59, 99, 251), rgb(86, 129, 255))",
                isHovered: "light-dark(rgb(39, 77, 234), rgb(105, 149, 254))",
                isFocusVisible: "light-dark(rgb(39, 77, 234), rgb(105, 149, 254))",
                isPressed: "light-dark(rgb(39, 77, 234), rgb(105, 149, 254))"
            },
            neutral: {
                default: "light-dark(rgb(41, 41, 41), rgb(219, 219, 219))",
                isHovered: "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))",
                isFocusVisible: "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))",
                isPressed: "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))"
            },
            'neutral-subdued': {
                default: "light-dark(rgb(80, 80, 80), rgb(175, 175, 175))",
                isHovered: "light-dark(rgb(41, 41, 41), rgb(219, 219, 219))",
                isFocusVisible: "light-dark(rgb(41, 41, 41), rgb(219, 219, 219))",
                isPressed: "light-dark(rgb(41, 41, 41), rgb(219, 219, 219))"
            },
            negative: {
                default: "light-dark(rgb(215, 50, 32), rgb(252, 67, 46))",
                isHovered: "light-dark(rgb(183, 40, 24), rgb(255, 103, 86))",
                isFocusVisible: "light-dark(rgb(183, 40, 24), rgb(255, 103, 86))",
                isPressed: "light-dark(rgb(183, 40, 24), rgb(255, 103, 86))"
            },
            disabled: {
                default: "light-dark(rgb(198, 198, 198), rgb(68, 68, 68))"
            },
            heading: "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))",
            title: "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))",
            body: "light-dark(rgb(41, 41, 41), rgb(219, 219, 219))",
            detail: "light-dark(rgb(113, 113, 113), rgb(138, 138, 138))",
            code: "light-dark(rgb(41, 41, 41), rgb(219, 219, 219))"
        }),
        backgroundColor: (0, $b3643cb9d2948e30$exports.createColorProperty)({
            ...$7dddb03c6ef7d79c$var$color,
            accent: {
                default: "light-dark(rgb(59, 99, 251), rgb(64, 105, 253))",
                isHovered: "light-dark(rgb(39, 77, 234), rgb(52, 91, 248))",
                isFocusVisible: "light-dark(rgb(39, 77, 234), rgb(52, 91, 248))",
                isPressed: "light-dark(rgb(39, 77, 234), rgb(52, 91, 248))"
            },
            'accent-subtle': "light-dark(rgb(229, 240, 254), rgb(12, 33, 117))",
            neutral: {
                default: "light-dark(rgb(41, 41, 41), rgb(219, 219, 219))",
                isHovered: "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))",
                isFocusVisible: "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))",
                isPressed: "light-dark(rgb(19, 19, 19), rgb(242, 242, 242))"
            },
            'neutral-subdued': {
                default: "light-dark(rgb(80, 80, 80), rgb(109, 109, 109))",
                isHovered: "light-dark(rgb(41, 41, 41), rgb(68, 68, 68))",
                isFocusVisible: "light-dark(rgb(41, 41, 41), rgb(68, 68, 68))",
                isPressed: "light-dark(rgb(41, 41, 41), rgb(68, 68, 68))"
            },
            'neutral-subtle': "light-dark(rgb(233, 233, 233), rgb(57, 57, 57))",
            negative: {
                default: "light-dark(rgb(215, 50, 32), rgb(223, 52, 34))",
                isHovered: "light-dark(rgb(183, 40, 24), rgb(205, 46, 29))",
                isFocusVisible: "light-dark(rgb(183, 40, 24), rgb(205, 46, 29))",
                isPressed: "light-dark(rgb(183, 40, 24), rgb(205, 46, 29))"
            },
            'negative-subtle': "light-dark(rgb(255, 235, 232), rgb(87, 17, 7))",
            informative: {
                default: "light-dark(rgb(59, 99, 251), rgb(64, 105, 253))",
                isHovered: "light-dark(rgb(39, 77, 234), rgb(52, 91, 248))",
                isFocusVisible: "light-dark(rgb(39, 77, 234), rgb(52, 91, 248))",
                isPressed: "light-dark(rgb(39, 77, 234), rgb(52, 91, 248))"
            },
            'informative-subtle': "light-dark(rgb(229, 240, 254), rgb(12, 33, 117))",
            positive: {
                default: "light-dark(rgb(5, 131, 78), rgb(6, 136, 80))",
                isHovered: "light-dark(rgb(3, 110, 69), rgb(4, 124, 75))",
                isFocusVisible: "light-dark(rgb(3, 110, 69), rgb(4, 124, 75))",
                isPressed: "light-dark(rgb(3, 110, 69), rgb(4, 124, 75))"
            },
            'positive-subtle': "light-dark(rgb(215, 247, 225), rgb(0, 51, 38))",
            notice: "light-dark(rgb(252, 125, 0), rgb(224, 100, 0))",
            'notice-subtle': "light-dark(rgb(255, 236, 207), rgb(80, 27, 0))",
            gray: "light-dark(rgb(80, 80, 80), rgb(109, 109, 109))",
            'gray-subtle': "light-dark(rgb(233, 233, 233), rgb(57, 57, 57))",
            red: "light-dark(rgb(215, 50, 32), rgb(223, 52, 34))",
            'red-subtle': "light-dark(rgb(255, 235, 232), rgb(87, 17, 7))",
            orange: "light-dark(rgb(252, 125, 0), rgb(224, 100, 0))",
            'orange-subtle': "light-dark(rgb(255, 236, 207), rgb(80, 27, 0))",
            yellow: "light-dark(rgb(245, 199, 0), rgb(218, 159, 0))",
            'yellow-subtle': "light-dark(rgb(255, 241, 151), rgb(61, 39, 0))",
            chartreuse: "light-dark(rgb(163, 196, 0), rgb(136, 164, 0))",
            'chartreuse-subtle': "light-dark(rgb(234, 246, 173), rgb(39, 47, 0))",
            celery: "light-dark(rgb(93, 180, 31), rgb(78, 154, 23))",
            'celery-subtle': "light-dark(rgb(197, 255, 156), rgb(21, 51, 1))",
            green: "light-dark(rgb(5, 131, 78), rgb(6, 136, 80))",
            'green-subtle': "light-dark(rgb(215, 247, 225), rgb(0, 51, 38))",
            seafoam: "light-dark(rgb(7, 129, 109), rgb(8, 134, 112))",
            'seafoam-subtle': "light-dark(rgb(211, 246, 234), rgb(0, 50, 44))",
            cyan: "light-dark(rgb(11, 120, 179), rgb(13, 125, 186))",
            'cyan-subtle': "light-dark(rgb(217, 244, 253), rgb(0, 48, 65))",
            blue: "light-dark(rgb(59, 99, 251), rgb(64, 105, 253))",
            'blue-subtle': "light-dark(rgb(229, 240, 254), rgb(12, 33, 117))",
            indigo: "light-dark(rgb(113, 85, 250), rgb(116, 91, 252))",
            'indigo-subtle': "light-dark(rgb(235, 238, 255), rgb(47, 0, 140))",
            purple: "light-dark(rgb(154, 71, 226), rgb(157, 78, 228))",
            'purple-subtle': "light-dark(rgb(244, 235, 252), rgb(64, 0, 122))",
            fuchsia: "light-dark(rgb(181, 57, 200), rgb(186, 60, 206))",
            'fuchsia-subtle': "light-dark(rgb(253, 233, 255), rgb(79, 0, 95))",
            magenta: "light-dark(rgb(217, 35, 97), rgb(224, 38, 101))",
            'magenta-subtle': "light-dark(rgb(255, 232, 240), rgb(93, 0, 34))",
            pink: "light-dark(rgb(206, 42, 146), rgb(213, 45, 151))",
            'pink-subtle': "light-dark(rgb(255, 232, 247), rgb(90, 0, 57))",
            turquoise: "light-dark(rgb(8, 126, 137), rgb(9, 131, 142))",
            'turquoise-subtle': "light-dark(rgb(209, 245, 245), rgb(0, 49, 54))",
            cinnamon: "light-dark(rgb(170, 94, 56), rgb(176, 98, 59))",
            'cinnamon-subtle': "light-dark(rgb(249, 236, 229), rgb(79, 28, 7))",
            brown: "light-dark(rgb(139, 109, 66), rgb(143, 114, 69))",
            'brown-subtle': "light-dark(rgb(247, 238, 225), rgb(58, 40, 14))",
            silver: "light-dark(rgb(114, 114, 114), rgb(118, 118, 118))",
            'silver-subtle': "light-dark(rgb(239, 239, 239), rgb(44, 44, 44))",
            disabled: "light-dark(rgb(233, 233, 233), rgb(44, 44, 44))",
            base: "light-dark(rgb(255, 255, 255), rgb(17, 17, 17))",
            'layer-1': "light-dark(rgb(248, 248, 248), rgb(27, 27, 27))",
            'layer-2': "light-dark(rgb(255, 255, 255), rgb(34, 34, 34))",
            pasteboard: "light-dark(rgb(233, 233, 233), rgb(17, 17, 17))",
            elevated: "light-dark(rgb(255, 255, 255), rgb(34, 34, 34))"
        }),
        borderColor: (0, $b3643cb9d2948e30$exports.createColorProperty)({
            ...$7dddb03c6ef7d79c$var$color,
            negative: {
                default: "light-dark(rgb(215, 50, 32), rgb(252, 67, 46))",
                isHovered: "light-dark(rgb(183, 40, 24), rgb(255, 103, 86))",
                isFocusVisible: "light-dark(rgb(183, 40, 24), rgb(255, 103, 86))",
                isPressed: "light-dark(rgb(156, 33, 19), rgb(255, 134, 120))"
            },
            disabled: "light-dark(rgb(218, 218, 218), rgb(57, 57, 57))"
        }),
        outlineColor: (0, $b3643cb9d2948e30$exports.createColorProperty)({
            ...$7dddb03c6ef7d79c$var$color,
            'focus-ring': {
                default: "light-dark(rgb(75, 117, 255), rgb(64, 105, 253))",
                forcedColors: 'Highlight'
            }
        }),
        // textDecorationColor: colorWithAlpha,
        // accentColor: colorWithAlpha,
        // caretColor: colorWithAlpha,
        fill: (0, $b3643cb9d2948e30$exports.createColorProperty)({
            none: 'none',
            currentColor: 'currentColor',
            accent: "light-dark(rgb(75, 117, 255), rgb(86, 129, 255))",
            neutral: "light-dark(rgb(143, 143, 143), rgb(138, 138, 138))",
            negative: "light-dark(rgb(240, 56, 35), rgb(252, 67, 46))",
            informative: "light-dark(rgb(75, 117, 255), rgb(86, 129, 255))",
            positive: "light-dark(rgb(7, 147, 85), rgb(9, 157, 89))",
            notice: "light-dark(rgb(212, 91, 0), rgb(224, 100, 0))",
            gray: "light-dark(rgb(143, 143, 143), rgb(138, 138, 138))",
            red: "light-dark(rgb(240, 56, 35), rgb(205, 46, 29))",
            orange: "light-dark(rgb(232, 106, 0), rgb(224, 100, 0))",
            yellow: "light-dark(rgb(210, 149, 0), rgb(218, 159, 0))",
            chartreuse: "light-dark(rgb(143, 172, 0), rgb(122, 147, 0))",
            celery: "light-dark(rgb(82, 161, 25), rgb(66, 134, 18))",
            green: "light-dark(rgb(11, 164, 93), rgb(6, 136, 80))",
            seafoam: "light-dark(rgb(11, 162, 134), rgb(8, 134, 112))",
            cyan: "light-dark(rgb(48, 167, 254), rgb(24, 142, 220))",
            blue: "light-dark(rgb(75, 117, 255), rgb(86, 129, 255))",
            indigo: "light-dark(rgb(122, 106, 253), rgb(128, 119, 254))",
            purple: "light-dark(rgb(166, 92, 231), rgb(173, 105, 233))",
            fuchsia: "light-dark(rgb(200, 68, 220), rgb(213, 73, 235))",
            magenta: "light-dark(rgb(240, 45, 110), rgb(255, 51, 119))",
            pink: "light-dark(rgb(228, 52, 163), rgb(236, 67, 175))",
            turquoise: "light-dark(rgb(10, 141, 153), rgb(11, 151, 164))",
            cinnamon: "light-dark(rgb(184, 109, 70), rgb(192, 119, 80))",
            brown: "light-dark(rgb(154, 123, 77), rgb(163, 132, 84))",
            silver: "light-dark(rgb(128, 128, 128), rgb(137, 137, 137))",
            ...$7dddb03c6ef7d79c$var$color
        }),
        stroke: (0, $b3643cb9d2948e30$exports.createColorProperty)({
            none: 'none',
            currentColor: 'currentColor',
            ...$7dddb03c6ef7d79c$var$color
        }),
        // dimensions
        borderSpacing: $7dddb03c6ef7d79c$var$baseSpacing,
        flexBasis: {
            auto: 'auto',
            full: '100%',
            ...$7dddb03c6ef7d79c$var$baseSpacing
        },
        rowGap: $7dddb03c6ef7d79c$var$spacing,
        columnGap: $7dddb03c6ef7d79c$var$spacing,
        height: $7dddb03c6ef7d79c$var$createSpectrumSizingProperty($7dddb03c6ef7d79c$var$height),
        width: $7dddb03c6ef7d79c$var$createSpectrumSizingProperty($7dddb03c6ef7d79c$var$width),
        containIntrinsicWidth: $7dddb03c6ef7d79c$var$createSpectrumSizingProperty($7dddb03c6ef7d79c$var$width),
        containIntrinsicHeight: $7dddb03c6ef7d79c$var$createSpectrumSizingProperty($7dddb03c6ef7d79c$var$height),
        minHeight: $7dddb03c6ef7d79c$var$createSpectrumSizingProperty($7dddb03c6ef7d79c$var$height),
        maxHeight: $7dddb03c6ef7d79c$var$createSpectrumSizingProperty({
            ...$7dddb03c6ef7d79c$var$height,
            none: 'none'
        }),
        minWidth: $7dddb03c6ef7d79c$var$createSpectrumSizingProperty($7dddb03c6ef7d79c$var$width),
        maxWidth: $7dddb03c6ef7d79c$var$createSpectrumSizingProperty({
            ...$7dddb03c6ef7d79c$var$width,
            none: 'none'
        }),
        borderStartWidth: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('borderInlineStartWidth', $7dddb03c6ef7d79c$var$borderWidth),
        borderEndWidth: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('borderInlineEndWidth', $7dddb03c6ef7d79c$var$borderWidth),
        borderTopWidth: $7dddb03c6ef7d79c$var$borderWidth,
        borderBottomWidth: $7dddb03c6ef7d79c$var$borderWidth,
        borderStyle: [
            'solid',
            'dashed',
            'dotted',
            'double',
            'hidden',
            'none'
        ],
        strokeWidth: {
            0: '0',
            1: '1',
            2: '2'
        },
        marginStart: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('marginInlineStart', $7dddb03c6ef7d79c$var$margin),
        marginEnd: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('marginInlineEnd', $7dddb03c6ef7d79c$var$margin),
        marginTop: $7dddb03c6ef7d79c$var$margin,
        marginBottom: $7dddb03c6ef7d79c$var$margin,
        paddingStart: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('paddingInlineStart', $7dddb03c6ef7d79c$var$spacing),
        paddingEnd: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('paddingInlineEnd', $7dddb03c6ef7d79c$var$spacing),
        paddingTop: $7dddb03c6ef7d79c$var$spacing,
        paddingBottom: $7dddb03c6ef7d79c$var$spacing,
        scrollMarginStart: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('scrollMarginInlineStart', $7dddb03c6ef7d79c$var$baseSpacing),
        scrollMarginEnd: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('scrollMarginInlineEnd', $7dddb03c6ef7d79c$var$baseSpacing),
        scrollMarginTop: $7dddb03c6ef7d79c$var$baseSpacing,
        scrollMarginBottom: $7dddb03c6ef7d79c$var$baseSpacing,
        scrollPaddingStart: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('scrollPaddingInlineStart', $7dddb03c6ef7d79c$var$baseSpacing),
        scrollPaddingEnd: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('scrollPaddingInlineEnd', $7dddb03c6ef7d79c$var$baseSpacing),
        scrollPaddingTop: $7dddb03c6ef7d79c$var$baseSpacing,
        scrollPaddingBottom: $7dddb03c6ef7d79c$var$baseSpacing,
        textIndent: $7dddb03c6ef7d79c$var$baseSpacing,
        translateX: (0, $b3643cb9d2948e30$exports.createMappedProperty)((value)=>({
                '--translateX': value,
                translate: 'var(--translateX, 0) var(--translateY, 0)'
            }), $7dddb03c6ef7d79c$var$translate),
        translateY: (0, $b3643cb9d2948e30$exports.createMappedProperty)((value)=>({
                '--translateY': value,
                translate: 'var(--translateX, 0) var(--translateY, 0)'
            }), $7dddb03c6ef7d79c$var$translate),
        rotate: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value, property)=>({
                [property]: typeof value === 'number' ? `${value}deg` : value
            })),
        scale: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        transform: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        position: [
            'absolute',
            'fixed',
            'relative',
            'sticky',
            'static'
        ],
        insetStart: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('insetInlineStart', $7dddb03c6ef7d79c$var$inset),
        insetEnd: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('insetInlineEnd', $7dddb03c6ef7d79c$var$inset),
        top: $7dddb03c6ef7d79c$var$inset,
        left: $7dddb03c6ef7d79c$var$inset,
        bottom: $7dddb03c6ef7d79c$var$inset,
        right: $7dddb03c6ef7d79c$var$inset,
        aspectRatio: {
            auto: 'auto',
            square: '1 / 1',
            video: '16 / 9'
        },
        // text
        fontFamily: {
            sans: {
                default: 'adobe-clean-variable, adobe-clean, ui-sans-serif, system-ui, sans-serif',
                ...$7dddb03c6ef7d79c$var$i18nFonts
            },
            serif: {
                default: 'adobe-clean-serif, "Source Serif", Georgia, serif',
                ...$7dddb03c6ef7d79c$var$i18nFonts
            },
            code: 'source-code-pro, "Source Code Pro", Monaco, monospace'
        },
        fontSize: $7dddb03c6ef7d79c$var$fontSize,
        fontWeight: (0, $b3643cb9d2948e30$exports.createMappedProperty)((value, property)=>{
            if (property === 'fontWeight') return {
                // Set font-variation-settings in addition to font-weight to work around typekit issue.
                fontVariationSettings: value === 'inherit' ? 'inherit' : `"wght" ${value}`,
                fontWeight: value,
                fontSynthesisWeight: 'none'
            };
            return {
                [property]: value
            };
        }, {
            ...$7dddb03c6ef7d79c$var$fontWeightBase,
            heading: {
                default: $7dddb03c6ef7d79c$var$fontWeightBase["extra-bold"],
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': $7dddb03c6ef7d79c$var$fontWeightBase["extra-bold"]
            },
            title: {
                default: $7dddb03c6ef7d79c$var$fontWeightBase["bold"],
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': $7dddb03c6ef7d79c$var$fontWeightBase["bold"]
            },
            detail: {
                default: $7dddb03c6ef7d79c$var$fontWeightBase["medium"],
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': $7dddb03c6ef7d79c$var$fontWeightBase["bold"]
            }
        }),
        lineHeight: {
            // See https://spectrum.corp.adobe.com/page/typography/#Line-height
            ui: {
                default: 1.3,
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': 1.5
            },
            heading: {
                default: 1.3,
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': 1.5
            },
            title: {
                default: 1.3,
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': 1.5
            },
            body: {
                default: 1.5,
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': 1.7
            },
            detail: {
                default: 1.3,
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': 1.5
            },
            code: {
                default: 1.5,
                ':lang(ja, ko, zh, zh-Hant, zh-Hans)': 1.7
            }
        },
        listStyleType: [
            'none',
            'dist',
            'decimal'
        ],
        listStylePosition: [
            'inside',
            'outside'
        ],
        textTransform: [
            'uppercase',
            'lowercase',
            'capitalize',
            'none'
        ],
        textAlign: [
            'start',
            'center',
            'end',
            'justify'
        ],
        verticalAlign: [
            'baseline',
            'top',
            'middle',
            'bottom',
            'text-top',
            'text-bottom',
            'sub',
            'super'
        ],
        textDecoration: (0, $b3643cb9d2948e30$exports.createMappedProperty)((value)=>({
                textDecoration: value === 'none' ? 'none' : `${value} ${"1px"}`,
                textUnderlineOffset: value === 'underline' ? "1px" : undefined
            }), [
            'underline',
            'overline',
            'line-through',
            'none'
        ]),
        textOverflow: [
            'ellipsis',
            'clip'
        ],
        lineClamp: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value)=>({
                overflow: 'hidden',
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': value
            })),
        hyphens: [
            'none',
            'manual',
            'auto'
        ],
        whiteSpace: [
            'normal',
            'nowrap',
            'pre',
            'pre-line',
            'pre-wrap',
            'break-spaces'
        ],
        textWrap: [
            'wrap',
            'nowrap',
            'balance',
            'pretty'
        ],
        wordBreak: [
            'normal',
            'break-all',
            'keep-all'
        ],
        boxDecorationBreak: [
            'slice',
            'clone'
        ],
        // effects
        boxShadow: {
            emphasized: `${"0px"} ${"1px"} ${"6px"} ${"light-dark(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.36))"}`,
            elevated: `${"0px"} ${"2px"} ${"8px"} ${"light-dark(rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.48))"}`,
            dragged: `${"0px"} ${"6px"} ${"16px"} ${"light-dark(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))"}`,
            none: 'none'
        },
        filter: {
            emphasized: `drop-shadow(${"0px"} ${"1px"} ${"6px"} ${"light-dark(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.36))"})`,
            elevated: `drop-shadow(${"0px"} ${"2px"} ${"8px"} ${"light-dark(rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.48))"})`,
            dragged: `drop-shadow${"0px"} ${"6px"} ${"16px"} ${"light-dark(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))"}`,
            none: 'none'
        },
        borderTopStartRadius: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('borderStartStartRadius', $7dddb03c6ef7d79c$var$radius),
        borderTopEndRadius: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('borderStartEndRadius', $7dddb03c6ef7d79c$var$radius),
        borderBottomStartRadius: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('borderEndStartRadius', $7dddb03c6ef7d79c$var$radius),
        borderBottomEndRadius: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('borderEndEndRadius', $7dddb03c6ef7d79c$var$radius),
        forcedColorAdjust: [
            'auto',
            'none'
        ],
        colorScheme: [
            'light',
            'dark',
            'light dark'
        ],
        backgroundImage: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        // TODO: do we need separate x and y properties?
        backgroundPosition: [
            'bottom',
            'center',
            'left',
            'left bottom',
            'left top',
            'right',
            'right bottom',
            'right top',
            'top'
        ],
        backgroundSize: [
            'auto',
            'cover',
            'contain'
        ],
        backgroundAttachment: [
            'fixed',
            'local',
            'scroll'
        ],
        backgroundClip: [
            'border-box',
            'padding-box',
            'content-box',
            'text'
        ],
        backgroundRepeat: [
            'repeat',
            'no-repeat',
            'repeat-x',
            'repeat-y',
            'round',
            'space'
        ],
        backgroundOrigin: [
            'border-box',
            'padding-box',
            'content-box'
        ],
        backgroundBlendMode: [
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ],
        mixBlendMode: [
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity',
            'plus-darker',
            'plus-lighter'
        ],
        opacity: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        outlineStyle: [
            'none',
            'solid',
            'dashed',
            'dotted',
            'double',
            'inset'
        ],
        outlineOffset: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((v, property)=>({
                [property]: `${v}px`
            })),
        outlineWidth: $7dddb03c6ef7d79c$var$borderWidth,
        transition: (0, $b3643cb9d2948e30$exports.createRenamedProperty)('transitionProperty', $7dddb03c6ef7d79c$var$transitionProperty),
        transitionDelay: $7dddb03c6ef7d79c$var$durationProperty,
        transitionDuration: $7dddb03c6ef7d79c$var$durationProperty,
        transitionTimingFunction: $7dddb03c6ef7d79c$var$timingFunction,
        animation: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value, property)=>({
                [property === 'animation' ? 'animationName' : property]: value
            })),
        animationDuration: $7dddb03c6ef7d79c$var$durationProperty,
        animationDelay: $7dddb03c6ef7d79c$var$durationProperty,
        animationDirection: [
            'normal',
            'reverse',
            'alternate',
            'alternate-reverse'
        ],
        animationFillMode: [
            'none',
            'forwards',
            'backwards',
            'both'
        ],
        animationIterationCount: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        animationTimingFunction: $7dddb03c6ef7d79c$var$timingFunction,
        // layout
        display: [
            'block',
            'inline-block',
            'inline',
            'flex',
            'inline-flex',
            'grid',
            'inline-grid',
            'contents',
            'list-item',
            'none'
        ],
        alignContent: [
            'normal',
            'center',
            'start',
            'end',
            'space-between',
            'space-around',
            'space-evenly',
            'baseline',
            'stretch'
        ],
        alignItems: [
            'start',
            'end',
            'center',
            'baseline',
            'stretch'
        ],
        justifyContent: [
            'normal',
            'start',
            'end',
            'center',
            'space-between',
            'space-around',
            'space-evenly',
            'stretch'
        ],
        justifyItems: [
            'start',
            'end',
            'center',
            'stretch'
        ],
        alignSelf: [
            'auto',
            'start',
            'end',
            'center',
            'stretch',
            'baseline'
        ],
        justifySelf: [
            'auto',
            'start',
            'end',
            'center',
            'stretch'
        ],
        flexDirection: [
            'row',
            'column',
            'row-reverse',
            'column-reverse'
        ],
        flexWrap: [
            'wrap',
            'wrap-reverse',
            'nowrap'
        ],
        flexShrink: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        flexGrow: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        gridColumnStart: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        gridColumnEnd: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        gridRowStart: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        gridRowEnd: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        gridAutoFlow: [
            'row',
            'column',
            'dense',
            'row dense',
            'column dense'
        ],
        gridAutoRows: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value, property)=>({
                [property]: $7dddb03c6ef7d79c$var$gridTrackSize(value)
            })),
        gridAutoColumns: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value, property)=>({
                [property]: $7dddb03c6ef7d79c$var$gridTrackSize(value)
            })),
        gridTemplateColumns: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value, property)=>({
                [property]: $7dddb03c6ef7d79c$var$gridTrack(value)
            })),
        gridTemplateRows: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value, property)=>({
                [property]: $7dddb03c6ef7d79c$var$gridTrack(value)
            })),
        gridTemplateAreas: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((value, property)=>({
                [property]: value.map((v)=>`"${v}"`).join('')
            })),
        float: [
            'inline-start',
            'inline-end',
            'right',
            'left',
            'none'
        ],
        clear: [
            'inline-start',
            'inline-end',
            'left',
            'right',
            'both',
            'none'
        ],
        contain: [
            'none',
            'strict',
            'content',
            'size',
            'inline-size',
            'layout',
            'style',
            'paint'
        ],
        boxSizing: [
            'border-box',
            'content-box'
        ],
        tableLayout: [
            'auto',
            'fixed'
        ],
        captionSide: [
            'top',
            'bottom'
        ],
        borderCollapse: [
            'collapse',
            'separate'
        ],
        columns: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            // TODO: what should these sizes be?
            '3xs': '16rem',
            '2xs': '18rem',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem'
        },
        breakBefore: [
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ],
        breakInside: [
            'auto',
            'avoid',
            'avoid-page',
            'avoid-column'
        ],
        breakAfter: [
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ],
        overflowX: [
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ],
        overflowY: [
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ],
        overscrollBehaviorX: [
            'auto',
            'contain',
            'none'
        ],
        overscrollBehaviorY: [
            'auto',
            'contain',
            'none'
        ],
        scrollBehavior: [
            'auto',
            'smooth'
        ],
        order: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        pointerEvents: [
            'none',
            'auto'
        ],
        touchAction: [
            'auto',
            'none',
            'pan-x',
            'pan-y',
            'manipulation',
            'pinch-zoom'
        ],
        userSelect: [
            'none',
            'text',
            'all',
            'auto'
        ],
        visibility: [
            'visible',
            'hidden',
            'collapse'
        ],
        isolation: [
            'isolate',
            'auto'
        ],
        transformOrigin: [
            'center',
            'top',
            'top right',
            'right',
            'bottom right',
            'bottom',
            'bottom left',
            'left',
            'top right'
        ],
        cursor: [
            'auto',
            'default',
            'pointer',
            'wait',
            'text',
            'move',
            'help',
            'not-allowed',
            'none',
            'context-menu',
            'progress',
            'cell',
            'crosshair',
            'vertical-text',
            'alias',
            'copy',
            'no-drop',
            'grab',
            'grabbing',
            'all-scroll',
            'col-resize',
            'row-resize',
            'n-resize',
            'e-resize',
            's-resize',
            'w-resize',
            'ne-resize',
            'nw-resize',
            'se-resize',
            'ew-resize',
            'ns-resize',
            'nesw-resize',
            'nwse-resize',
            'zoom-in',
            'zoom-out'
        ],
        resize: [
            'none',
            'vertical',
            'horizontal',
            'both'
        ],
        scrollSnapType: [
            'x',
            'y',
            'both',
            'x mandatory',
            'y mandatory',
            'both mandatory'
        ],
        scrollSnapAlign: [
            'start',
            'end',
            'center',
            'none'
        ],
        scrollSnapStop: [
            'normal',
            'always'
        ],
        appearance: [
            'none',
            'auto'
        ],
        objectFit: [
            'contain',
            'cover',
            'fill',
            'none',
            'scale-down'
        ],
        objectPosition: [
            'bottom',
            'center',
            'left',
            'left bottom',
            'left top',
            'right',
            'right bottom',
            'right top',
            'top'
        ],
        willChange: [
            'auto',
            'scroll-position',
            'contents',
            'transform'
        ],
        zIndex: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)(),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        disableTapHighlight: (0, $b3643cb9d2948e30$exports.createArbitraryProperty)((_value)=>({
                '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
            }))
    },
    shorthands: {
        padding: [
            'paddingTop',
            'paddingBottom',
            'paddingStart',
            'paddingEnd'
        ],
        paddingX: [
            'paddingStart',
            'paddingEnd'
        ],
        paddingY: [
            'paddingTop',
            'paddingBottom'
        ],
        margin: [
            'marginTop',
            'marginBottom',
            'marginStart',
            'marginEnd'
        ],
        marginX: [
            'marginStart',
            'marginEnd'
        ],
        marginY: [
            'marginTop',
            'marginBottom'
        ],
        scrollPadding: [
            'scrollPaddingTop',
            'scrollPaddingBottom',
            'scrollPaddingStart',
            'scrollPaddingEnd'
        ],
        scrollPaddingX: [
            'scrollPaddingStart',
            'scrollPaddingEnd'
        ],
        scrollPaddingY: [
            'scrollPaddingTop',
            'scrollPaddingBottom'
        ],
        scrollMargin: [
            'scrollMarginTop',
            'scrollMarginBottom',
            'scrollMarginStart',
            'scrollMarginEnd'
        ],
        scrollMarginX: [
            'scrollMarginStart',
            'scrollMarginEnd'
        ],
        scrollMarginY: [
            'scrollMarginTop',
            'scrollMarginBottom'
        ],
        borderWidth: [
            'borderTopWidth',
            'borderBottomWidth',
            'borderStartWidth',
            'borderEndWidth'
        ],
        borderXWidth: [
            'borderStartWidth',
            'borderEndWidth'
        ],
        borderYWidth: [
            'borderTopWidth',
            'borderBottomWidth'
        ],
        borderRadius: [
            'borderTopStartRadius',
            'borderTopEndRadius',
            'borderBottomStartRadius',
            'borderBottomEndRadius'
        ],
        borderTopRadius: [
            'borderTopStartRadius',
            'borderTopEndRadius'
        ],
        borderBottomRadius: [
            'borderBottomStartRadius',
            'borderBottomEndRadius'
        ],
        borderStartRadius: [
            'borderTopStartRadius',
            'borderBottomStartRadius'
        ],
        borderEndRadius: [
            'borderTopEndRadius',
            'borderBottomEndRadius'
        ],
        translate: [
            'translateX',
            'translateY'
        ],
        inset: [
            'top',
            'bottom',
            'insetStart',
            'insetEnd'
        ],
        insetX: [
            'insetStart',
            'insetEnd'
        ],
        insetY: [
            'top',
            'bottom'
        ],
        placeItems: [
            'alignItems',
            'justifyItems'
        ],
        placeContent: [
            'alignContent',
            'justifyContent'
        ],
        placeSelf: [
            'alignSelf',
            'justifySelf'
        ],
        gap: [
            'rowGap',
            'columnGap'
        ],
        size: [
            'width',
            'height'
        ],
        minSize: [
            'minWidth',
            'minHeight'
        ],
        maxSize: [
            'maxWidth',
            'maxHeight'
        ],
        overflow: [
            'overflowX',
            'overflowY'
        ],
        overscrollBehavior: [
            'overscrollBehaviorX',
            'overscrollBehaviorY'
        ],
        gridArea: [
            'gridColumnStart',
            'gridColumnEnd',
            'gridRowStart',
            'gridRowEnd'
        ],
        transition: (value)=>({
                transition: value,
                transitionDuration: 150,
                transitionTimingFunction: 'default'
            }),
        animation: (value)=>({
                animation: value,
                animationDuration: 150,
                animationTimingFunction: 'default'
            }),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        truncate: (_value)=>({
                overflowX: 'hidden',
                overflowY: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }),
        font: (value)=>{
            let type = value.split('-')[0];
            if (type === 'control') type = 'ui';
            return {
                fontFamily: type === 'code' ? 'code' : 'sans',
                fontSize: value,
                fontWeight: type === 'heading' || type === 'title' || type === 'detail' ? type : 'normal',
                lineHeight: type,
                color: type === 'ui' ? 'body' : type
            };
        }
    },
    conditions: {
        forcedColors: '@media (forced-colors: active)',
        // This detects touch primary devices as best as we can.
        // Ideally we'd use (pointer: course) but browser/device support is inconsistent.
        // Samsung Android devices claim to be mice at the hardware/OS level: (any-pointer: fine), (any-hover: hover), (hover: hover), and nothing for pointer.
        // More details: https://www.ctrl.blog/entry/css-media-hover-samsung.html
        // iPhone matches (any-hover: none), (hover: none), and nothing for any-pointer or pointer.
        // If a trackpad or Apple Pencil is connected to iPad, it matches (any-pointer: fine), (any-hover: hover), (hover: none).
        // Windows tablet matches the same as iPhone. No difference when a mouse is connected.
        // Windows touch laptop matches same as macOS: (any-pointer: fine), (pointer: fine), (any-hover: hover), (hover: hover).
        touch: '@media not ((hover: hover) and (pointer: fine))',
        // TODO
        sm: '@media (min-width: 640px)',
        md: '@media (min-width: 768px)',
        lg: '@media (min-width: 1024px)',
        xl: '@media (min-width: 1280px)',
        '2xl': '@media (min-width: 1536px)'
    }
});


//# sourceMappingURL=spectrum-theme.cjs.map
