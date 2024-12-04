import React, { Component, ReactNode } from "react";
export class ErrorBoundary extends Component<{
    message: string;
    children: ReactNode;
}, {
    hasError: boolean;
}> {
    constructor(props: any);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    render(): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
}
export function generatePowerset(states: Array<object>, exclude?: (merged: any) => boolean): any[];

//# sourceMappingURL=types.d.ts.map
