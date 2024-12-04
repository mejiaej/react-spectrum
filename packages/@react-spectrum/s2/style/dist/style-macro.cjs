
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "createArbitraryProperty", () => $b3643cb9d2948e30$export$e33e260cb0fb20f7);
$parcel$export(module.exports, "createMappedProperty", () => $b3643cb9d2948e30$export$40f4ff17b27355ab);
$parcel$export(module.exports, "parseArbitraryValue", () => $b3643cb9d2948e30$export$22a8270399010c94);
$parcel$export(module.exports, "createRenamedProperty", () => $b3643cb9d2948e30$export$7fdf8c7af26ba416);
$parcel$export(module.exports, "createSizingProperty", () => $b3643cb9d2948e30$export$fa08b74e8bc1d2a7);
$parcel$export(module.exports, "createColorProperty", () => $b3643cb9d2948e30$export$852145629bb0d58b);
$parcel$export(module.exports, "createTheme", () => $b3643cb9d2948e30$export$25d302a5b900a763);
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
 */ let $b3643cb9d2948e30$var$defaultArbitraryProperty = (value, property)=>({
        [property]: value
    });
function $b3643cb9d2948e30$export$e33e260cb0fb20f7(fn = $b3643cb9d2948e30$var$defaultArbitraryProperty) {
    return (value, property)=>{
        let selector = Array.isArray(value) ? $b3643cb9d2948e30$var$generateArbitraryValueSelector(value.map((v)=>String(v)).join('')) : $b3643cb9d2948e30$var$generateArbitraryValueSelector(String(value));
        return {
            default: [
                fn(value, property),
                selector
            ]
        };
    };
}
function $b3643cb9d2948e30$var$recursiveValues(obj) {
    return Object.values(obj).flatMap((v)=>typeof v === 'object' ? $b3643cb9d2948e30$var$recursiveValues(v) : [
            v
        ]);
}
function $b3643cb9d2948e30$export$40f4ff17b27355ab(fn, values) {
    let valueMap = $b3643cb9d2948e30$var$createValueLookup(Array.isArray(values) ? values : $b3643cb9d2948e30$var$recursiveValues(values));
    return (value, property)=>{
        let v = $b3643cb9d2948e30$export$22a8270399010c94(value);
        if (v) return {
            default: [
                fn(v[0], property),
                v[1]
            ]
        };
        let val = Array.isArray(values) ? value : values[String(value)];
        return $b3643cb9d2948e30$var$mapConditionalValue(val, (value)=>{
            return [
                fn(value, property),
                valueMap.get(value)
            ];
        });
    };
}
function $b3643cb9d2948e30$export$7fdf8c7af26ba416(name, values) {
    return $b3643cb9d2948e30$export$40f4ff17b27355ab((value, property)=>({
            [property.startsWith('--') ? property : name]: value
        }), values);
}
function $b3643cb9d2948e30$export$fa08b74e8bc1d2a7(values, fn) {
    let valueMap = $b3643cb9d2948e30$var$createValueLookup(Array.isArray(values) ? values : $b3643cb9d2948e30$var$recursiveValues(values));
    return (value, property)=>{
        let v = $b3643cb9d2948e30$export$22a8270399010c94(value);
        if (v) return {
            default: [
                {
                    [property]: v[0]
                },
                v[1]
            ]
        };
        let val = values[String(value)];
        if (val != null) return $b3643cb9d2948e30$var$mapConditionalValue(val, (value)=>{
            return [
                {
                    [property]: value
                },
                valueMap.get(value)
            ];
        });
        if (typeof value === 'number') {
            let cssValue = value === 0 ? '0px' : fn(value);
            return {
                default: [
                    {
                        [property]: cssValue
                    },
                    $b3643cb9d2948e30$var$generateName(value + valueMap.size)
                ]
            };
        }
        throw new Error('Invalid sizing value: ' + value);
    };
}
function $b3643cb9d2948e30$export$852145629bb0d58b(colors, property) {
    let valueMap = $b3643cb9d2948e30$var$createValueLookup(Object.values(colors).flatMap((v)=>typeof v === 'object' ? Object.values(v) : [
            v
        ]));
    return (value, key)=>{
        let v = $b3643cb9d2948e30$export$22a8270399010c94(value);
        if (v) return {
            default: [
                {
                    [property || key]: v[0]
                },
                v[1]
            ]
        };
        let [color, opacity] = value.split('/');
        let c = colors[color];
        return $b3643cb9d2948e30$var$mapConditionalValue(c, (value)=>{
            let css = opacity ? `rgb(from ${value} r g b / ${opacity}%)` : value;
            let selector = valueMap.get(value) + (opacity ? opacity.replace('.', '-') : '');
            return [
                {
                    [property || key]: css
                },
                selector
            ];
        });
    };
}
function $b3643cb9d2948e30$var$mapConditionalValue(value, fn) {
    if (typeof value === 'object') {
        let res = {};
        for(let condition in value)res[condition] = $b3643cb9d2948e30$var$mapConditionalValue(value[condition], fn);
        return res;
    } else return fn(value);
}
function $b3643cb9d2948e30$var$mapConditionalShorthand(value, fn) {
    if (typeof value === 'object') {
        let res = {};
        for(let condition in value){
            let properties = $b3643cb9d2948e30$var$mapConditionalShorthand(value[condition], fn);
            for(let property in properties){
                res[property] ??= {};
                res[property][condition] = properties[property];
            }
        }
        return res;
    } else return fn(value);
}
function $b3643cb9d2948e30$var$createValueLookup(values, atStart = false) {
    let map = new Map();
    for (let value of values)if (!map.has(value)) map.set(value, $b3643cb9d2948e30$var$generateName(map.size, atStart));
    return map;
}
function $b3643cb9d2948e30$export$22a8270399010c94(value) {
    if (typeof value === 'string' && value.startsWith('--')) return [
        `var(${value})`,
        $b3643cb9d2948e30$var$generateArbitraryValueSelector(value)
    ];
    else if (typeof value === 'string' && value[0] === '[' && value[value.length - 1] === ']') {
        let s = $b3643cb9d2948e30$var$generateArbitraryValueSelector(value.slice(1, -1));
        return [
            value.slice(1, -1),
            s
        ];
    }
}
function $b3643cb9d2948e30$export$25d302a5b900a763(theme) {
    let themePropertyMap = $b3643cb9d2948e30$var$createValueLookup(Object.keys(theme.properties), true);
    let themeConditionMap = $b3643cb9d2948e30$var$createValueLookup(Object.keys(theme.conditions), true);
    let propertyFunctions = new Map(Object.entries(theme.properties).map(([k, v])=>{
        if (typeof v === 'function') return [
            k,
            v
        ];
        return [
            k,
            $b3643cb9d2948e30$export$40f4ff17b27355ab((value, p)=>({
                    [p]: value
                }), v)
        ];
    }));
    let dependencies = new Set();
    let hasConditions = false;
    return function style(style, allowedOverrides) {
        // Check if `this` is undefined, which means style was not called as a macro but as a normal function.
        // We also check if this is globalThis, which happens in non-strict mode bundles.
        // Also allow style to be called as a normal function in tests.
        // @ts-ignore
        // eslint-disable-next-line
        if ((this == null || this === globalThis) && process.env.NODE_ENV !== 'test') throw new Error('The style macro must be imported with {type: "macro"}.');
        // Generate rules for each property.
        let rules = new Map();
        let values = new Map();
        dependencies.clear();
        let usedPriorities = 1;
        let setRules = (key, value)=>{
            usedPriorities = Math.max(usedPriorities, value[0]);
            rules.set(key, value[1]);
        };
        hasConditions = false;
        for(let key in style){
            let value = style[key];
            let themeProperty = key;
            values.set(key, value);
            // Get the type of custom properties in the theme.
            if (key.startsWith('--')) {
                themeProperty = value.type;
                value = value.value;
            }
            // Expand shorthands to longhands so that merging works as expected.
            if (theme.shorthands[key]) {
                let shorthand = theme.shorthands[key];
                if (typeof shorthand === 'function') {
                    let expanded = $b3643cb9d2948e30$var$mapConditionalShorthand(value, shorthand);
                    for(let k in expanded){
                        let v = expanded[k];
                        values.set(k, v);
                        setRules(k, compileValue(k, k, v));
                    }
                } else for (let prop of shorthand){
                    values.set(prop, value);
                    setRules(prop, compileValue(prop, prop, value));
                }
            } else if (themeProperty in theme.properties) setRules(key, compileValue(key, themeProperty, value));
        }
        // For properties referenced by self(), rewrite the declarations to assign
        // to an intermediary custom property so we can access the value.
        for (let dep of dependencies){
            let value = values.get(dep);
            if (value != null) {
                if (!(dep in theme.properties)) throw new Error(`Unknown dependency ${dep}`);
                let name = `--${themePropertyMap.get(dep)}`;
                // Could potentially use @property to prevent the var from inheriting in children.
                setRules(name, compileValue(name, dep, value));
                setRules(dep, compileValue(dep, dep, name));
            }
        }
        dependencies.clear();
        // Prevent all global styles from leaking into this element.
        // The :not(#a#b) raises the specificity of the selector by 2 ids,
        // which can never occur on a real element, and will win over other
        // selectors such as class and element selectors.
        let css = '.\\.:not(#a#b) { all: revert-layer }\n\n';
        // Declare layers for each priority ahead of time so the order is always correct.
        css += '@layer ';
        let first = true;
        for(let i = 0; i <= usedPriorities; i++){
            if (first) first = false;
            else css += ', ';
            css += $b3643cb9d2948e30$var$layerName($b3643cb9d2948e30$var$generateName(i, true));
        }
        css += ', UNSAFE_overrides;\n\n';
        // If allowed overrides are provided, generate code to match the input override string and include only allowed classes.
        // Also generate a variable for each overridable property that overlaps with the style definition. If those are defined,
        // the defaults from the style definition are omitted.
        let allowedOverridesSet = new Set();
        let js = 'let rules = " .";\n';
        if (allowedOverrides?.length) {
            for (let property of allowedOverrides)if (themePropertyMap.has(property)) allowedOverridesSet.add(themePropertyMap.get(property));
            js += `let matches = (overrides || '').match(/(?:^|\\s)(?:${[
                ...allowedOverridesSet
            ].join('|')})[^\\s]+/g) || [];\n`;
            js += 'rules += matches.join(\'\');\n';
            let loop = '';
            for (let property of rules.keys()){
                let themeProperty = themePropertyMap.get(property);
                if (themeProperty && allowedOverridesSet.has(themeProperty)) {
                    js += `let $${themeProperty} = false;\n`;
                    loop += `  if (/^\\s*${themeProperty}/.test(p)) $${themeProperty} = true;\n`;
                }
            }
            if (loop) {
                js += 'for (let p of matches) {\n';
                js += loop;
                js += '}\n';
            }
        }
        // Generate JS and CSS for each rule.
        let isStatic = !(hasConditions || allowedOverrides);
        let className = ' .';
        let rulesByLayer = new Map();
        for (let [property, propertyRules] of rules){
            if (isStatic) className += $b3643cb9d2948e30$var$getStaticClassName(propertyRules);
            else {
                let themeProperty = themePropertyMap.get(property);
                let allowsOverrides = themeProperty && allowedOverridesSet.has(themeProperty);
                if (allowsOverrides) // Omit the value if an override was passed in.
                js += `if (!$${themeProperty}) {\n`;
                js += $b3643cb9d2948e30$var$printJS(propertyRules) + '\n';
                if (allowsOverrides) js += '}\n';
            }
            for (let rule of propertyRules)$b3643cb9d2948e30$var$printRule(rule, rulesByLayer);
        }
        for (let [layer, rules] of rulesByLayer){
            css += `@layer ${$b3643cb9d2948e30$var$layerName(layer)} {\n`;
            css += rules.join('\n\n');
            css += '}\n\n';
        }
        if (this && typeof this.addAsset === 'function') this.addAsset({
            type: 'css',
            content: css
        });
        if (isStatic) return className;
        js += 'return rules;';
        if (allowedOverrides) return new Function('props', 'overrides', js);
        return new Function('props', js);
    };
    function compileValue(property, themeProperty, value) {
        return conditionalToRules(value, 0, new Set(), new Set(), (value, priority, conditions, skipConditions)=>{
            return compileRule(property, themeProperty, value, priority, conditions, skipConditions);
        });
    }
    function conditionalToRules(value, parentPriority, currentConditions, skipConditions, fn) {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            let rules = [];
            // Later conditions in parent rules override conditions in child rules.
            let subSkipConditions = new Set([
                ...skipConditions,
                ...Object.keys(value)
            ]);
            // Skip the default condition if we're already filtering by one of the other possible conditions.
            // For example, if someone specifies `dark: 'gray-400'`, only include the dark version of `gray-400` from the theme.
            let skipDefault = Object.keys(value).some((k)=>currentConditions.has(k));
            let wasCSSCondition = false;
            let priority = parentPriority;
            for(let condition in value){
                if (skipConditions.has(condition) || condition === 'default' && skipDefault) continue;
                subSkipConditions.delete(condition);
                let val = value[condition];
                // If a theme condition comes after runtime conditions, create a new grouping.
                // This makes the CSS class unconditional so it appears outside the `else` block in the JS.
                // The @layer order in the generated CSS will ensure that it overrides classes applied by runtime conditions.
                let isCSSCondition = condition in theme.conditions || /^[@:]/.test(condition);
                if (!wasCSSCondition && isCSSCondition && rules.length) rules = [
                    {
                        prelude: '',
                        condition: '',
                        layer: '',
                        body: rules
                    }
                ];
                wasCSSCondition = isCSSCondition;
                // Increment the current priority whenever we see a new CSS condition.
                if (isCSSCondition) priority++;
                // If this is a runtime condition, inherit the priority from the parent rule.
                // Otherwise, use the current maximum of the parent and current priorities.
                let rulePriority = isCSSCondition ? priority : parentPriority;
                if (condition === 'default' || isCSSCondition || /^is[A-Z]/.test(condition) || /^allows[A-Z]/.test(condition)) {
                    let subConditions = currentConditions;
                    if (isCSSCondition) subConditions = new Set([
                        ...currentConditions,
                        condition
                    ]);
                    let [subPriority, subRules] = conditionalToRules(val, rulePriority, subConditions, subSkipConditions, fn);
                    rules.push(...compileCondition(currentConditions, condition, priority, subRules));
                    priority = Math.max(priority, subPriority);
                } else if (val && typeof val === 'object' && !Array.isArray(val)) for(let key in val){
                    let [subPriority, subRules] = conditionalToRules(val[key], rulePriority, currentConditions, subSkipConditions, fn);
                    rules.push(...compileCondition(currentConditions, `${condition} === ${JSON.stringify(key)}`, priority, subRules));
                    priority = Math.max(priority, subPriority);
                }
            }
            return [
                priority,
                rules
            ];
        } else // @ts-ignore - broken in non-strict?
        return fn(value, parentPriority, currentConditions, skipConditions);
    }
    function compileCondition(conditions, condition, priority, rules) {
        if (condition === 'default' || conditions.has(condition)) return [
            {
                prelude: '',
                condition: '',
                layer: '',
                body: rules
            }
        ];
        if (condition in theme.conditions || /^[@:]/.test(condition)) {
            // Conditions starting with : are CSS pseudo classes. Nest them inside the parent rule.
            let prelude = theme.conditions[condition] || condition;
            if (prelude.startsWith(':')) return [
                {
                    prelude: '',
                    layer: $b3643cb9d2948e30$var$generateName(priority, true),
                    body: rules.map((rule)=>$b3643cb9d2948e30$var$nestRule(rule, prelude)),
                    condition: ''
                }
            ];
            // Otherwise, wrap the rule in the condition (e.g. @media).
            return [
                {
                    // Top level layer is based on the priority of the rule, not the condition.
                    // Also group in a sub-layer based on the condition so that lightningcss can more effectively deduplicate rules.
                    layer: `${$b3643cb9d2948e30$var$generateName(priority, true)}.${themeConditionMap.get(condition) || $b3643cb9d2948e30$var$generateArbitraryValueSelector(condition, true)}`,
                    prelude: prelude,
                    body: rules,
                    condition: ''
                }
            ];
        }
        hasConditions = true;
        return [
            {
                prelude: '',
                layer: '',
                condition: condition,
                body: rules
            }
        ];
    }
    function compileRule(property, themeProperty, value, priority, conditions, skipConditions) {
        // Generate selector. This consists of three parts:
        // 1. Property. For custom properties we use a hash. For theme properties, we use the index within the theme.
        // 2. Conditions. This uses the index within the theme.
        // 3. Value. The index in the theme, or a hash for arbitrary values.
        let prelude = '.';
        if (property.startsWith('--')) // Include both custom property name and theme property in case the same var is reused between multiple theme properties.
        prelude += $b3643cb9d2948e30$var$generateArbitraryValueSelector(property, true) + '_' + themePropertyMap.get(themeProperty) + '-';
        else prelude += themePropertyMap.get(themeProperty);
        let propertyFunction = propertyFunctions.get(themeProperty);
        if (propertyFunction) {
            // Expand value to conditional CSS values, and then to rules.
            let res = propertyFunction(value, property);
            return conditionalToRules(res, priority, conditions, skipConditions, (value, priority, conditions)=>{
                let [obj, p] = value;
                let body = '';
                for(let key in obj){
                    let k = key;
                    let value = obj[k];
                    if (value === undefined) continue;
                    if (typeof value === 'string') // Replace self() references with variables and track the dependencies.
                    value = value.replace(/self\(([a-zA-Z]+)/g, (_, v)=>{
                        dependencies.add(v);
                        return `var(--${themePropertyMap.get(v)}`;
                    });
                    body += `${$b3643cb9d2948e30$var$kebab(key)}: ${value};`;
                }
                let selector = prelude;
                if (conditions.size > 0) for (let condition of conditions)selector += themeConditionMap.get(condition) || $b3643cb9d2948e30$var$generateArbitraryValueSelector(condition);
                let rules = [
                    {
                        condition: '',
                        layer: '',
                        prelude: selector + p,
                        body: body
                    }
                ];
                return [
                    0,
                    rules
                ];
            });
        } else throw new Error('Unknown property ' + themeProperty);
    }
}
function $b3643cb9d2948e30$var$nestRule(rule, prelude) {
    if (Array.isArray(rule.body)) return {
        prelude: rule.prelude,
        layer: rule.layer,
        body: rule.body.map((r)=>$b3643cb9d2948e30$var$nestRule(r, prelude)),
        condition: rule.condition
    };
    else return {
        prelude: rule.prelude,
        layer: rule.layer,
        body: [
            {
                ...rule,
                prelude: '&' + prelude
            }
        ],
        condition: ''
    };
}
function $b3643cb9d2948e30$var$kebab(property) {
    if (property.startsWith('--')) return property;
    return property.replace(/([a-z])([A-Z])/g, (_, a, b)=>`${a}-${b.toLowerCase()}`);
}
// Generate a class name from a number, e.g. index within the theme.
// This maps to an alphabet containing lower case letters, upper case letters, and numbers.
// For numbers larger than 62, an underscore is prepended.
// This encoding allows easy parsing to enable runtime merging by property.
function $b3643cb9d2948e30$var$generateName(index, atStart = false) {
    if (index < 26) // lower case letters
    return String.fromCharCode(index + 97);
    if (index < 52) // upper case letters
    return String.fromCharCode(index - 26 + 65);
    if (index < 62 && !atStart) // numbers
    return String.fromCharCode(index - 52 + 48);
    return '_' + $b3643cb9d2948e30$var$generateName(index - (atStart ? 52 : 62));
}
// For arbitrary values, we use a hash of the string to generate the class name.
function $b3643cb9d2948e30$var$generateArbitraryValueSelector(v, atStart = false) {
    let c = $b3643cb9d2948e30$var$hash(v).toString(36);
    if (atStart && /^[0-9]/.test(c)) c = `_${c}`;
    return `-${c}`;
}
// djb2 hash function.
// http://www.cse.yorku.ca/~oz/hash.html
function $b3643cb9d2948e30$var$hash(v) {
    let hash = 5381;
    for(let i = 0; i < v.length; i++)hash = (hash << 5) + hash + v.charCodeAt(i) >>> 0;
    return hash;
}
function $b3643cb9d2948e30$var$layerName(name) {
    // All of our layers should be sub-layers of a single parent layer, so that
    // the unsafe overrides layer always comes after.
    return `_.${name}`;
}
function $b3643cb9d2948e30$var$printRule(rule, rulesByLayer, preludes = [], layer = 'a') {
    if (rule.prelude) preludes.push(rule.prelude);
    if (typeof rule.body === 'string') {
        // Nest rule in our stack of preludes (e.g. media queries/selectors).
        let content = '  ';
        preludes.forEach((p, i)=>{
            content += `${p} {\n${' '.repeat((i + 2) * 2)}`;
        });
        content += rule.body + '\n';
        preludes.map((_, i)=>{
            content += `${' '.repeat((preludes.length - i) * 2)}}\n`;
        });
        // Group rule into the appropriate layer.
        let rules = rulesByLayer.get(rule.layer || layer);
        if (!rules) {
            rules = [];
            rulesByLayer.set(rule.layer || layer, rules);
        }
        rules.push(content);
    } else for (let b of rule.body)$b3643cb9d2948e30$var$printRule(b, rulesByLayer, preludes, rule.layer || layer);
    if (rule.prelude) preludes.pop();
}
function $b3643cb9d2948e30$var$printJS(rules, indent = '') {
    rules = rules.slice().reverse();
    let conditional = rules.filter((rule)=>rule.condition).map((rule, i)=>{
        return `${i > 0 ? ' else ' : ''}if (props.${rule.condition}) {\n${indent}  ${$b3643cb9d2948e30$var$printRuleChildren(rule, indent + '  ')}\n${indent}}`;
    });
    let elseCases = rules.filter((rule)=>!rule.condition).map((rule)=>$b3643cb9d2948e30$var$printRuleChildren(rule, indent + '  '));
    if (conditional.length && elseCases.length) return `${conditional.join('')} else {\n${indent}  ${elseCases.join('\n' + indent + '  ')}\n${indent}}`;
    if (conditional.length) return conditional.join('');
    return elseCases.join('\n' + indent);
}
function $b3643cb9d2948e30$var$printRuleChildren(rule, indent = '') {
    let res = '';
    if (rule.prelude.startsWith('.')) res += `rules += ' ${rule.prelude.slice(1)}';`;
    if (Array.isArray(rule.body)) res += $b3643cb9d2948e30$var$printJS(rule.body, indent);
    return res;
}
function $b3643cb9d2948e30$var$getStaticClassName(rules) {
    return rules.map((rule)=>(rule.prelude.startsWith('.') ? ' ' + rule.prelude.slice(1) : '') + (Array.isArray(rule.body) ? $b3643cb9d2948e30$var$getStaticClassName(rule.body) : '')).join('');
}
function $b3643cb9d2948e30$export$1776c186c69df29e(css, layer = '_.a') {
    // Check if `this` is undefined, which means style was not called as a macro but as a normal function.
    // We also check if this is globalThis, which happens in non-strict mode bundles.
    // Also allow style to be called as a normal function in tests.
    // @ts-ignore
    // eslint-disable-next-line
    if ((this == null || this === globalThis) && process.env.NODE_ENV !== 'test') throw new Error('The raw macro must be imported with {type: "macro"}.');
    let className = $b3643cb9d2948e30$var$generateArbitraryValueSelector(css, true);
    css = `@layer ${layer} {
  .${className} {
  ${css}
  }
}`;
    if (this && typeof this.addAsset === 'function') this.addAsset({
        type: 'css',
        content: css
    });
    return className;
}
function $b3643cb9d2948e30$export$d25ddfdf17c3ad3e(css) {
    // Check if `this` is undefined, which means style was not called as a macro but as a normal function.
    // We also check if this is globalThis, which happens in non-strict mode bundles.
    // Also allow style to be called as a normal function in tests.
    // @ts-ignore
    // eslint-disable-next-line
    if ((this == null || this === globalThis) && process.env.NODE_ENV !== 'test') throw new Error('The keyframes macro must be imported with {type: "macro"}.');
    let name = $b3643cb9d2948e30$var$generateArbitraryValueSelector(css, true);
    css = `@keyframes ${name} {
  ${css}
}`;
    if (this && typeof this.addAsset === 'function') this.addAsset({
        type: 'css',
        content: css
    });
    return name;
}


//# sourceMappingURL=style-macro.cjs.map
