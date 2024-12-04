import { ProviderContext, ProviderProps } from "@react-types/provider";
import React from "react";
import { DOMRefValue } from "@react-types/shared";
/**
 * Provider is the container for all React Spectrum applications.
 * It defines the theme, locale, and other application level settings,
 * and can also be used to provide common properties to a group of components.
 */
export const Provider: React.ForwardRefExoticComponent<ProviderProps & React.RefAttributes<DOMRefValue<HTMLDivElement>>>;
/**
 * Returns the various settings and styles applied by the nearest parent Provider.
 * Properties explicitly set by the nearest parent Provider override those provided by preceeding Providers.
 */
export function useProvider(): ProviderContext;
export function useProviderProps<T>(props: T): T;
export type { ProviderContext } from '@react-types/provider';
export type { ProviderProps } from '@react-types/provider';

//# sourceMappingURL=types.d.ts.map
