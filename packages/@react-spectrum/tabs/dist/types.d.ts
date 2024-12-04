import { SpectrumTabListProps, SpectrumTabPanelsProps, SpectrumTabsProps } from "@react-types/tabs";
import { DOMRef } from "@react-types/shared";
import React, { ReactElement } from "react";
/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 */
export const Tabs: <T>(props: SpectrumTabsProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
/**
 * A TabList is used within Tabs to group tabs that a user can switch between.
 * The keys of the items within the <TabList> must match up with a corresponding item inside the <TabPanels>.
 */
export function TabList<T>(props: SpectrumTabListProps<T>): React.JSX.Element;
/**
 * TabPanels is used within Tabs as a container for the content of each tab.
 * The keys of the items within the <TabPanels> must match up with a corresponding item inside the <TabList>.
 */
export function TabPanels<T extends object>(props: SpectrumTabPanelsProps<T>): React.JSX.Element;
export { Item } from '@react-stately/collections';
export type { SpectrumTabsProps, SpectrumTabListProps, SpectrumTabPanelsProps } from '@react-types/tabs';

//# sourceMappingURL=types.d.ts.map
