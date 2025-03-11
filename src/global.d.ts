import { IPCUserInterface } from "./types/ipcs";
import { UserInterface } from "./types/user";

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
declare module "*.css";
declare module "*.svg" {
    import * as React from "react";
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare global {
    interface Window {
        electronAPIs?: {
            user_list: () => Promise<IPCUserInterface>;
            user_get: (id: string) => Promise<IPCUserInterface>;
            user_create: (user: UserInterface) => Promise<IPCUserInterface>;
            user_update: (user: UserInterface) => Promise<IPCUserInterface>;
            user_delete: (id: string) => Promise<IPCUserInterface>;
            user_select: (id: string, isSelected: boolean) => Promise<IPCUserInterface>;
            user_select_all: (isSelected: boolean) => Promise<IPCUserInterface>;
        };
    }
}