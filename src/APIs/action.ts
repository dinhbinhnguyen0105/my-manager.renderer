// action.ts
import { IPCActionInterface } from "~/types/ipcs";
// import { ActionInterface } from "~/types/action";

const openBrowser = (id: string): Promise<IPCActionInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.action_open_browser(id));
            } else {
                resolve({
                    status: 200,
                    message: "User successfully created.",
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

export {
    openBrowser,
};