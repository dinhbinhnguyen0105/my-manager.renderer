import { BotInterface, LikeCommentInterface } from "./types/bot";
import { IPCActionInterface, IPCBotInterface, IPCLikeCommentInterface, IPCSettingInterface, IPCUserInterface } from "./types/ipcs";
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
            user_select: (id: string, isSelected: boolean) => Promise<IPCUserInterface>;
            user_select_all: (isSelected: boolean) => Promise<IPCUserInterface>;

            setting_get: () => Promise<IPCSettingInterface>;
            setting_update: (setting: SettingInterface) => Promise<IPCSettingInterface>;

            action_open_browser: (id: string, setting: SettingInterface) => Promise<IPCActionInterface>;
            action_bot_likeComment: (ids: string[], bot: LikeCommentInterface, setting: SettingInterface) => Promise<IPCActionInterface>;

            bot_get: () => Promise<IPCBotInterface>;
            bot_update: (bot: BotInterface) => Promise<IPCBotInterface>;
        };
    }
}