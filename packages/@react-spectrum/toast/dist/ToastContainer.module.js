import {Toast as $7e7a2952509f3a56$export$8d8dc7d5f743331b} from "./Toast.module.js";
import "./toastContainer.5957ce49.css";
import $5lmgI$toastContainer_cssmodulejs from "./toastContainer_css.module.js";
import {Toaster as $e46feef4e4c28a4b$export$fb98e3a2a4cd92d7} from "./Toaster.module.js";
import {classNames as $5lmgI$classNames} from "@react-spectrum/utils";
import {filterDOMProps as $5lmgI$filterDOMProps} from "@react-aria/utils";
import $5lmgI$react, {useRef as $5lmgI$useRef, useEffect as $5lmgI$useEffect} from "react";
import {ToastQueue as $5lmgI$ToastQueue, useToastQueue as $5lmgI$useToastQueue} from "@react-stately/toast";
import {useSyncExternalStore as $5lmgI$useSyncExternalStore} from "use-sync-external-store/shim/index.js";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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
let $02c59b34bd70955a$var$globalToastQueue = null;
function $02c59b34bd70955a$var$getGlobalToastQueue() {
    if (!$02c59b34bd70955a$var$globalToastQueue) $02c59b34bd70955a$var$globalToastQueue = new (0, $5lmgI$ToastQueue)({
        maxVisibleToasts: Infinity,
        hasExitAnimation: true
    });
    return $02c59b34bd70955a$var$globalToastQueue;
}
function $02c59b34bd70955a$export$320311f0e4ecb3ae() {
    $02c59b34bd70955a$var$globalToastQueue = null;
}
let $02c59b34bd70955a$var$toastProviders = new Set();
let $02c59b34bd70955a$var$subscriptions = new Set();
function $02c59b34bd70955a$var$subscribe(fn) {
    $02c59b34bd70955a$var$subscriptions.add(fn);
    return ()=>$02c59b34bd70955a$var$subscriptions.delete(fn);
}
function $02c59b34bd70955a$var$triggerSubscriptions() {
    for (let fn of $02c59b34bd70955a$var$subscriptions)fn();
}
function $02c59b34bd70955a$var$getActiveToastContainer() {
    return $02c59b34bd70955a$var$toastProviders.values().next().value;
}
function $02c59b34bd70955a$var$useActiveToastContainer() {
    return (0, $5lmgI$useSyncExternalStore)($02c59b34bd70955a$var$subscribe, $02c59b34bd70955a$var$getActiveToastContainer, $02c59b34bd70955a$var$getActiveToastContainer);
}
function $02c59b34bd70955a$export$f2815235e76a62b9(props) {
    // Track all toast provider instances in a set.
    // Only the first one will actually render.
    // We use a ref to do this, since it will have a stable identity
    // over the lifetime of the component.
    let ref = (0, $5lmgI$useRef)(null);
    (0, $5lmgI$useEffect)(()=>{
        $02c59b34bd70955a$var$toastProviders.add(ref);
        $02c59b34bd70955a$var$triggerSubscriptions();
        return ()=>{
            // When this toast provider unmounts, reset all animations so that
            // when the new toast provider renders, it is seamless.
            for (let toast of $02c59b34bd70955a$var$getGlobalToastQueue().visibleToasts)toast.animation = null;
            // Remove this toast provider, and call subscriptions.
            // This will cause all other instances to re-render,
            // and the first one to become the new active toast provider.
            $02c59b34bd70955a$var$toastProviders.delete(ref);
            $02c59b34bd70955a$var$triggerSubscriptions();
        };
    }, []);
    // Only render if this is the active toast provider instance, and there are visible toasts.
    let activeToastContainer = $02c59b34bd70955a$var$useActiveToastContainer();
    let state = (0, $5lmgI$useToastQueue)($02c59b34bd70955a$var$getGlobalToastQueue());
    if (ref === activeToastContainer && state.visibleToasts.length > 0) return /*#__PURE__*/ (0, $5lmgI$react).createElement((0, $e46feef4e4c28a4b$export$fb98e3a2a4cd92d7), {
        state: state,
        ...props
    }, /*#__PURE__*/ (0, $5lmgI$react).createElement("ol", {
        className: (0, $5lmgI$classNames)((0, ($parcel$interopDefault($5lmgI$toastContainer_cssmodulejs))), 'spectrum-ToastContainer-list')
    }, state.visibleToasts.slice().reverse().map((toast)=>/*#__PURE__*/ (0, $5lmgI$react).createElement("li", {
            key: toast.key,
            className: (0, $5lmgI$classNames)((0, ($parcel$interopDefault($5lmgI$toastContainer_cssmodulejs))), 'spectrum-ToastContainer-listitem')
        }, /*#__PURE__*/ (0, $5lmgI$react).createElement((0, $7e7a2952509f3a56$export$8d8dc7d5f743331b), {
            toast: toast,
            state: state
        })))));
    return null;
}
function $02c59b34bd70955a$var$addToast(children, variant, options = {}) {
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
        ...(0, $5lmgI$filterDOMProps)(options)
    };
    // Minimum time of 5s from https://spectrum.adobe.com/page/toast/#Auto-dismissible
    // Actionable toasts cannot be auto dismissed. That would fail WCAG SC 2.2.1.
    // It is debatable whether non-actionable toasts would also fail.
    let timeout = options.timeout && !options.onAction ? Math.max(options.timeout, 5000) : undefined;
    let queue = $02c59b34bd70955a$var$getGlobalToastQueue();
    let key = queue.add(value, {
        timeout: timeout,
        onClose: options.onClose
    });
    return ()=>queue.close(key);
}
const $02c59b34bd70955a$export$f1f8569633bbbec4 = {
    /** Queues a neutral toast. */ neutral (children, options = {}) {
        return $02c59b34bd70955a$var$addToast(children, 'neutral', options);
    },
    /** Queues a positive toast. */ positive (children, options = {}) {
        return $02c59b34bd70955a$var$addToast(children, 'positive', options);
    },
    /** Queues a negative toast. */ negative (children, options = {}) {
        return $02c59b34bd70955a$var$addToast(children, 'negative', options);
    },
    /** Queues an informational toast. */ info (children, options = {}) {
        return $02c59b34bd70955a$var$addToast(children, 'info', options);
    }
};


export {$02c59b34bd70955a$export$320311f0e4ecb3ae as clearToastQueue, $02c59b34bd70955a$export$f2815235e76a62b9 as ToastContainer, $02c59b34bd70955a$export$f1f8569633bbbec4 as ToastQueue};
//# sourceMappingURL=ToastContainer.module.js.map
