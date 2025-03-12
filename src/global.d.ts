import { IPCActionInterface, IPCSettingInterface, IPCUserInterface } from "./types/ipcs";
import { SettingInterface } from "./types/setting";
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

            user_get: (id: string) => Promise<{
                data: UserInterface | null,
                status: number,
                message: string,
            }>;
            user_create: (user: UserInterface) => Promise<IPCUserInterface>;
            user_update: (user: UserInterface) => Promise<IPCUserInterface>;
            user_delete: (id: string) => Promise<IPCUserInterface>;
            USER_SET_SELECT: (id: string, isSelected: boolean) => Promise<IPCUserInterface>;
            USER_SET_SELECT_all: (isSelected: boolean) => Promise<IPCUserInterface>;

            setting_get: () => Promise<IPCSettingInterface>;
            setting_update: (setting: SettingInterface) => Promise<IPCSettingInterface>;

            action_open_browser: (id: string) => Promise<IPCActionInterface>;

            // action_open_browser: (id:string) => Promise<
            // action_like_comment:

            // bot_like_comment_get
            // bot_like_comment_update
        };
    }
}