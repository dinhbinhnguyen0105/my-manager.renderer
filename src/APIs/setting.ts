import { IPCSettingInterface } from "~/types/ipcs";
import { SettingInterface } from "~/types/setting";

const get = (): Promise<IPCSettingInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.setting_get());
            } else {
                fetch("http://localhost:3000/setting")
                    .then(res => res.json())
                    .then(res => {
                        resolve({
                            data: res as SettingInterface,
                            status: 200,
                            message: "Settings successfully retrieved.",
                        });
                    })
                    .catch(error => reject(error))
            };
        } catch (error) { reject(error); };
    });
};

const update = (setting: SettingInterface): Promise<IPCSettingInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.setting_update(setting));
            } else {
                resolve({
                    data: null,
                    status: 200,
                    message: "Settings successfully updated."
                });
            };
        } catch (error) {
            reject(error);
        }
    });
};

export {
    get,
    update,
};