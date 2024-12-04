import {CUSTOM_DRAG_TYPE as $103790afe9474d1c$export$fd9f9fc120c5402d, DROP_OPERATION as $103790afe9474d1c$export$60b7b4bcf3903d8e, GENERIC_TYPE as $103790afe9474d1c$export$f8fc6581787339b3, NATIVE_DRAG_TYPES as $103790afe9474d1c$export$4a7729b856e9a690} from "./constants.mjs";
import {useInteractionModality as $j62BV$useInteractionModality, getInteractionModality as $j62BV$getInteractionModality} from "@react-aria/interactions";

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

const $7252cd45fc48c07c$export$dfdf5deeaf27473f = new WeakMap();
const $7252cd45fc48c07c$export$990fced5dfac2637 = Symbol();
function $7252cd45fc48c07c$export$3093291712f09a77(state) {
    let { id: id } = $7252cd45fc48c07c$export$dfdf5deeaf27473f.get(state) || {};
    if (!id) throw new Error('Droppable item outside a droppable collection');
    return id;
}
function $7252cd45fc48c07c$export$7e397efd01d3db27(state) {
    let { ref: ref } = $7252cd45fc48c07c$export$dfdf5deeaf27473f.get(state) || {};
    if (!ref) throw new Error('Droppable item outside a droppable collection');
    return ref;
}
function $7252cd45fc48c07c$export$e1d41611756c6326(items) {
    let types = new Set();
    for (let item of items)for (let type of Object.keys(item))types.add(type);
    return types;
}
function $7252cd45fc48c07c$var$mapModality(modality) {
    if (!modality) modality = 'virtual';
    if (modality === 'pointer') modality = 'virtual';
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'touch';
    return modality;
}
function $7252cd45fc48c07c$export$49bac5d6d4b352ea() {
    return $7252cd45fc48c07c$var$mapModality((0, $j62BV$useInteractionModality)());
}
function $7252cd45fc48c07c$export$1fb2158d224b542c() {
    return $7252cd45fc48c07c$var$mapModality((0, $j62BV$getInteractionModality)());
}
function $7252cd45fc48c07c$export$f9c1490890ddd063(dataTransfer, items) {
    // The data transfer API doesn't support more than one item of a given type at once.
    // In addition, only a small set of types are supported natively for transfer between applications.
    // We allow for both multiple items, as well as multiple representations of a single item.
    // In order to make our API work with the native API, we serialize all items to JSON and
    // store as a single native item. We only need to do this if there is more than one item
    // of the same type, or if an item has more than one representation. Otherwise the native
    // API is sufficient.
    //
    // The DataTransferItemList API also theoretically supports adding files, which would enable
    // dragging binary data out of the browser onto the user's desktop for example. Unfortunately,
    // this does not currently work in any browser, so it is not currently supported by our API.
    // See e.g. https://bugs.chromium.org/p/chromium/issues/detail?id=438479.
    let groupedByType = new Map();
    let needsCustomData = false;
    let customData = [];
    for (let item of items){
        let types = Object.keys(item);
        if (types.length > 1) needsCustomData = true;
        let dataByType = {};
        for (let type of types){
            let typeItems = groupedByType.get(type);
            if (!typeItems) {
                typeItems = [];
                groupedByType.set(type, typeItems);
            } else needsCustomData = true;
            let data = item[type];
            dataByType[type] = data;
            typeItems.push(data);
        }
        customData.push(dataByType);
    }
    for (let [type, items] of groupedByType)if ((0, $103790afe9474d1c$export$4a7729b856e9a690).has(type)) {
        // Only one item of a given type can be set on a data transfer.
        // Join all of the items together separated by newlines.
        let data = items.join('\n');
        dataTransfer.items.add(data, type);
    } else // Set data to the first item so we have access to the list of types.
    dataTransfer.items.add(items[0], type);
    if (needsCustomData) {
        let data = JSON.stringify(customData);
        dataTransfer.items.add(data, (0, $103790afe9474d1c$export$fd9f9fc120c5402d));
    }
}
class $7252cd45fc48c07c$export$7f04ce188c91447c {
    has(type) {
        if (this.includesUnknownTypes || type === $7252cd45fc48c07c$export$990fced5dfac2637 && this.types.has((0, $103790afe9474d1c$export$f8fc6581787339b3))) return true;
        return typeof type === 'string' && this.types.has(type);
    }
    constructor(dataTransfer){
        this.types = new Set();
        let hasFiles = false;
        for (let item of dataTransfer.items)if (item.type !== (0, $103790afe9474d1c$export$fd9f9fc120c5402d)) {
            if (item.kind === 'file') hasFiles = true;
            if (item.type) this.types.add(item.type);
            else // Files with unknown types or extensions that don't map to a known mime type
            // are sometimes exposed as an empty string by the browser. Map to a generic
            // mime type instead. Note that this could also be a directory as there's no
            // way to determine if something is a file or directory until drop.
            this.types.add((0, $103790afe9474d1c$export$f8fc6581787339b3));
        }
        // In Safari, when dragging files, the dataTransfer.items list is empty, but dataTransfer.types contains "Files".
        // Unfortunately, this doesn't tell us what types of files the user is dragging, so we need to assume that any
        // type the user checks for is included. See https://bugs.webkit.org/show_bug.cgi?id=223517.
        this.includesUnknownTypes = !hasFiles && dataTransfer.types.includes('Files');
    }
}
function $7252cd45fc48c07c$export$d9e760437831f8b3(dataTransfer) {
    let items = [];
    if (!dataTransfer) return items;
    // If our custom drag type is available, use that. This is a JSON serialized
    // representation of all items in the drag, set when there are multiple items
    // of the same type, or an individual item has multiple representations.
    let hasCustomType = false;
    if (dataTransfer.types.includes((0, $103790afe9474d1c$export$fd9f9fc120c5402d))) try {
        let data = dataTransfer.getData((0, $103790afe9474d1c$export$fd9f9fc120c5402d));
        let parsed = JSON.parse(data);
        for (let item of parsed)items.push({
            kind: 'text',
            types: new Set(Object.keys(item)),
            getText: (type)=>Promise.resolve(item[type])
        });
        hasCustomType = true;
    } catch  {
    // ignore
    }
    // Otherwise, map native drag items to items of a single representation.
    if (!hasCustomType) {
        let stringItems = new Map();
        for (let item of dataTransfer.items){
            if (item.kind === 'string') // The data for all formats must be read here because the data transfer gets
            // cleared out after the event handler finishes. If the item has an empty string
            // as a type, the mime type is unknown. Map to a generic mime type instead.
            stringItems.set(item.type || (0, $103790afe9474d1c$export$f8fc6581787339b3), dataTransfer.getData(item.type));
            else if (item.kind === 'file') {
                // Despite the name, webkitGetAsEntry is also implemented in Firefox and Edge.
                // In the future, we may use getAsFileSystemHandle instead, but that's currently
                // only implemented in Chrome.
                if (typeof item.webkitGetAsEntry === 'function') {
                    let entry = item.webkitGetAsEntry();
                    // eslint-disable-next-line max-depth
                    if (!entry) continue;
                    // eslint-disable-next-line max-depth
                    if (entry.isFile) items.push($7252cd45fc48c07c$var$createFileItem(item.getAsFile()));
                    else if (entry.isDirectory) items.push($7252cd45fc48c07c$var$createDirectoryItem(entry));
                } else // Assume it's a file.
                items.push($7252cd45fc48c07c$var$createFileItem(item.getAsFile()));
            }
        }
        // All string items are different representations of the same item. There's no way to have
        // multiple string items at once in the current DataTransfer API.
        if (stringItems.size > 0) items.push({
            kind: 'text',
            types: new Set(stringItems.keys()),
            getText: (type)=>Promise.resolve(stringItems.get(type))
        });
    }
    return items;
}
function $7252cd45fc48c07c$var$blobToString(blob) {
    if (typeof blob.text === 'function') return blob.text();
    // Safari doesn't have the Blob#text() method yet...
    return new Promise((resolve, reject)=>{
        let reader = new FileReader;
        reader.onload = ()=>{
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(blob);
    });
}
function $7252cd45fc48c07c$var$createFileItem(file) {
    if (!file) throw new Error('No file provided');
    return {
        kind: 'file',
        type: file.type || (0, $103790afe9474d1c$export$f8fc6581787339b3),
        name: file.name,
        getText: ()=>$7252cd45fc48c07c$var$blobToString(file),
        getFile: ()=>Promise.resolve(file)
    };
}
function $7252cd45fc48c07c$var$createDirectoryItem(entry) {
    return {
        kind: 'directory',
        name: entry.name,
        getEntries: ()=>$7252cd45fc48c07c$var$getEntries(entry)
    };
}
async function* $7252cd45fc48c07c$var$getEntries(item) {
    let reader = item.createReader();
    // We must call readEntries repeatedly because there may be a limit to the
    // number of entries that are returned at once.
    let entries;
    do {
        entries = await new Promise((resolve, reject)=>{
            reader.readEntries(resolve, reject);
        });
        for (let entry of entries){
            if (entry.isFile) {
                let file = await $7252cd45fc48c07c$var$getEntryFile(entry);
                yield $7252cd45fc48c07c$var$createFileItem(file);
            } else if (entry.isDirectory) yield $7252cd45fc48c07c$var$createDirectoryItem(entry);
        }
    }while (entries.length > 0);
}
function $7252cd45fc48c07c$var$getEntryFile(entry) {
    return new Promise((resolve, reject)=>entry.file(resolve, reject));
}
function $7252cd45fc48c07c$export$97fd558bdc44bea1(dropItem) {
    return dropItem.kind === 'text';
}
function $7252cd45fc48c07c$export$a144e1752ebe0aa(dropItem) {
    return dropItem.kind === 'file';
}
function $7252cd45fc48c07c$export$2b40a62bdbe6b2b0(dropItem) {
    return dropItem.kind === 'directory';
}
let $7252cd45fc48c07c$export$6ca6700462636d0b = {
    draggingKeys: new Set()
};
function $7252cd45fc48c07c$export$f2be18a910c0caa6(ref) {
    $7252cd45fc48c07c$export$6ca6700462636d0b.draggingCollectionRef = ref;
}
function $7252cd45fc48c07c$export$72cb63bdda528276(keys) {
    $7252cd45fc48c07c$export$6ca6700462636d0b.draggingKeys = keys;
}
function $7252cd45fc48c07c$export$dac8db29d42db9a1(ref) {
    $7252cd45fc48c07c$export$6ca6700462636d0b.dropCollectionRef = ref;
}
function $7252cd45fc48c07c$export$70936501603e6c57() {
    $7252cd45fc48c07c$export$6ca6700462636d0b = {
        draggingKeys: new Set()
    };
}
function $7252cd45fc48c07c$export$6c10d32b362bfa5f(state) {
    $7252cd45fc48c07c$export$6ca6700462636d0b = state;
}
function $7252cd45fc48c07c$export$78bf638634500fa5(ref) {
    let { draggingCollectionRef: draggingCollectionRef, dropCollectionRef: dropCollectionRef } = $7252cd45fc48c07c$export$6ca6700462636d0b;
    return (draggingCollectionRef === null || draggingCollectionRef === void 0 ? void 0 : draggingCollectionRef.current) != null && draggingCollectionRef.current === ((ref === null || ref === void 0 ? void 0 : ref.current) || (dropCollectionRef === null || dropCollectionRef === void 0 ? void 0 : dropCollectionRef.current));
}
let $7252cd45fc48c07c$export$8e6636520ac15722;
function $7252cd45fc48c07c$export$64f52ed7349ddb84(dropEffect) {
    $7252cd45fc48c07c$export$8e6636520ac15722 = dropEffect;
}
let $7252cd45fc48c07c$export$f0130eb70b6347b8 = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none;
function $7252cd45fc48c07c$export$6539bc8c3a0a2d67(o) {
    $7252cd45fc48c07c$export$f0130eb70b6347b8 = o;
}


export {$7252cd45fc48c07c$export$dfdf5deeaf27473f as droppableCollectionMap, $7252cd45fc48c07c$export$990fced5dfac2637 as DIRECTORY_DRAG_TYPE, $7252cd45fc48c07c$export$3093291712f09a77 as getDroppableCollectionId, $7252cd45fc48c07c$export$7e397efd01d3db27 as getDroppableCollectionRef, $7252cd45fc48c07c$export$e1d41611756c6326 as getTypes, $7252cd45fc48c07c$export$49bac5d6d4b352ea as useDragModality, $7252cd45fc48c07c$export$1fb2158d224b542c as getDragModality, $7252cd45fc48c07c$export$f9c1490890ddd063 as writeToDataTransfer, $7252cd45fc48c07c$export$7f04ce188c91447c as DragTypes, $7252cd45fc48c07c$export$d9e760437831f8b3 as readFromDataTransfer, $7252cd45fc48c07c$export$97fd558bdc44bea1 as isTextDropItem, $7252cd45fc48c07c$export$a144e1752ebe0aa as isFileDropItem, $7252cd45fc48c07c$export$2b40a62bdbe6b2b0 as isDirectoryDropItem, $7252cd45fc48c07c$export$6ca6700462636d0b as globalDndState, $7252cd45fc48c07c$export$f2be18a910c0caa6 as setDraggingCollectionRef, $7252cd45fc48c07c$export$72cb63bdda528276 as setDraggingKeys, $7252cd45fc48c07c$export$dac8db29d42db9a1 as setDropCollectionRef, $7252cd45fc48c07c$export$70936501603e6c57 as clearGlobalDnDState, $7252cd45fc48c07c$export$6c10d32b362bfa5f as setGlobalDnDState, $7252cd45fc48c07c$export$78bf638634500fa5 as isInternalDropOperation, $7252cd45fc48c07c$export$8e6636520ac15722 as globalDropEffect, $7252cd45fc48c07c$export$64f52ed7349ddb84 as setGlobalDropEffect, $7252cd45fc48c07c$export$f0130eb70b6347b8 as globalAllowedDropOperations, $7252cd45fc48c07c$export$6539bc8c3a0a2d67 as setGlobalAllowedDropOperations};
//# sourceMappingURL=utils.module.js.map
