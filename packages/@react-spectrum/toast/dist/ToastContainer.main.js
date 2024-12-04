var $6c5bd1047ecc310e$exports = require("./Toast.main.js");
require("./toastContainer.5957ce49.css");
var $e20782d0579ed886$exports = require("./toastContainer_css.main.js");
var $5b9f2c86c1b1395c$exports = require("./Toaster.main.js");
var $5IVGU$reactspectrumutils = require("@react-spectrum/utils");
var $5IVGU$reactariautils = require("@react-aria/utils");
var $5IVGU$react = require("react");
var $5IVGU$reactstatelytoast = require("@react-stately/toast");
var $5IVGU$usesyncexternalstoreshimindexjs = require("use-sync-external-store/shim/index.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ToastContainer", () => $56cdf77f3be52eaf$export$f2815235e76a62b9);
$parcel$export(module.exports, "ToastQueue", () => $56cdf77f3be52eaf$export$f1f8569633bbbec4);
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







// There is a single global toast queue instance for the whole app, initialized lazily.
let $56cdf77f3be52eaf$var$globalToastQueue = null;
function $56cdf77f3be52eaf$var$getGlobalToastQueue() {
    if (!$56cdf77f3be52eaf$var$globalToastQueue) $56cdf77f3be52eaf$var$globalToastQueue = new (0, $5IVGU$reactstatelytoast.ToastQueue)({
        maxVisibleToasts: Infinity,
        hasExitAnimation: true
    });
    return $56cdf77f3be52eaf$var$globalToastQueue;
}
function $56cdf77f3be52eaf$export$320311f0e4ecb3ae() {
    $56cdf77f3be52eaf$var$globalToastQueue = null;
}
let $56cdf77f3be52eaf$var$toastProviders = new Set();
let $56cdf77f3be52eaf$var$subscriptions = new Set();
function $56cdf77f3be52eaf$var$subscribe(fn) {
    $56cdf77f3be52eaf$var$subscriptions.add(fn);
    return ()=>$56cdf77f3be52eaf$var$subscriptions.delete(fn);
}
function $56cdf77f3be52eaf$var$triggerSubscriptions() {
    for (let fn of $56cdf77f3be52eaf$var$subscriptions)fn();
}
function $56cdf77f3be52eaf$var$getActiveToastContainer() {
    return $56cdf77f3be52eaf$var$toastProviders.values().next().value;
}
function $56cdf77f3be52eaf$var$useActiveToastContainer() {
    return (0, $5IVGU$usesyncexternalstoreshimindexjs.useSyncExternalStore)($56cdf77f3be52eaf$var$subscribe, $56cdf77f3be52eaf$var$getActiveToastContainer, $56cdf77f3be52eaf$var$getActiveToastContainer);
}
function $56cdf77f3be52eaf$export$f2815235e76a62b9(props) {
    // Track all toast provider instances in a set.
    // Only the first one will actually render.
    // We use a ref to do this, since it will have a stable identity
    // over the lifetime of the component.
    let ref = (0, $5IVGU$react.useRef)(null);
    (0, $5IVGU$react.useEffect)(()=>{
        $56cdf77f3be52eaf$var$toastProviders.add(ref);
        $56cdf77f3be52eaf$var$triggerSubscriptions();
        return ()=>{
            // When this toast provider unmounts, reset all animations so that
            // when the new toast provider renders, it is seamless.
            for (let toast of $56cdf77f3be52eaf$var$getGlobalToastQueue().visibleToasts)toast.animation = null;
            // Remove this toast provider, and call subscriptions.
            // This will cause all other instances to re-render,
            // and the first one to become the new active toast provider.
            $56cdf77f3be52eaf$var$toastProviders.delete(ref);
            $56cdf77f3be52eaf$var$triggerSubscriptions();
        };
    }, []);
    // Only render if this is the active toast provider instance, and there are visible toasts.
    let activeToastContainer = $56cdf77f3be52eaf$var$useActiveToastContainer();
    let state = (0, $5IVGU$reactstatelytoast.useToastQueue)($56cdf77f3be52eaf$var$getGlobalToastQueue());
    if (ref === activeToastContainer && state.visibleToasts.length > 0) return /*#__PURE__*/ (0, ($parcel$interopDefault($5IVGU$react))).createElement((0, $5b9f2c86c1b1395c$exports.Toaster), {
        state: state,
        ...props
    }, /*#__PURE__*/ (0, ($parcel$interopDefault($5IVGU$react))).createElement("ol", {
        className: (0, $5IVGU$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e20782d0579ed886$exports))), 'spectrum-ToastContainer-list')
    }, state.visibleToasts.slice().reverse().map((toast)=>/*#__PURE__*/ (0, ($parcel$interopDefault($5IVGU$react))).createElement("li", {
            key: toast.key,
            className: (0, $5IVGU$reactspectrumutils.classNames)((0, ($parcel$interopDefault($e20782d0579ed886$exports))), 'spectrum-ToastContainer-listitem')
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($5IVGU$react))).createElement((0, $6c5bd1047ecc310e$exports.Toast), {
            toast: toast,
            state: state
        })))));
    return null;
}
function $56cdf77f3be52eaf$var$addToast(children, variant, options = {}) {
    // Dispatch a custom event so that toasts can be intercepted and re-targeted, e.g. when inside an iframe.
    if (typeof CustomEvent !== 'undefined' && typeof window !== 'undefined') {
        let event = new CustomEvent('react-spectrum-toast', {
            cancelable: true,
            bubbles: true,
            detail: {
                children: children,
                variant: variant,
                options: options
            }
        });
        let shouldContinue = window.dispatchEvent(event);
        if (!shouldContinue) return ()=>{};
    }
    let value = {
        children: children,
        variant: variant,
        actionLabel: options.actionLabel,
        onAction: options.onAction,
        shouldCloseOnAction: options.shouldCloseOnAction,
        ...(0, $5IVGU$reactariautils.filterDOMProps)(options)
    };
    // Minimum time of 5s from https://spectrum.adobe.com/page/toast/#Auto-dismissible
    // Actionable toasts cannot be auto dismissed. That would fail WCAG SC 2.2.1.
    // It is debatable whether non-actionable toasts would also fail.
    let timeout = options.timeout && !options.onAction ? Math.max(options.timeout, 5000) : undefined;
    let queue = $56cdf77f3be52eaf$var$getGlobalToastQueue();
    let key = queue.add(value, {
        timeout: timeout,
        onClose: options.onClose
    });
    return ()=>queue.close(key);
}
const $56cdf77f3be52eaf$export$f1f8569633bbbec4 = {
    /** Queues a neutral toast. */ neutral (children, options = {}) {
        return $56cdf77f3be52eaf$var$addToast(children, 'neutral', options);
    },
    /** Queues a positive toast. */ positive (children, options = {}) {
        return $56cdf77f3be52eaf$var$addToast(children, 'positive', options);
    },
    /** Queues a negative toast. */ negative (children, options = {}) {
        return $56cdf77f3be52eaf$var$addToast(children, 'negative', options);
    },
    /** Queues an informational toast. */ info (children, options = {}) {
        return $56cdf77f3be52eaf$var$addToast(children, 'info', options);
    }
};


//# sourceMappingURL=ToastContainer.main.js.map
