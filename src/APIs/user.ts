import { IPCUserInterface } from "~/types/ipcs";
import { UserInterface } from "~/types/user";


const create = (user: UserInterface): Promise<IPCUserInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.user_create(user));
            } else {
                resolve({
                    data: null,
                    status: 200,
                    message: "User successfully created.",
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const list = (): Promise<IPCUserInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.user_list());
            } else {
                fetch("http://localhost:3000/user")
                    .then(res => res.json())
                    .then(res => {
                        resolve({
                            data: res as UserInterface[],
                            status: 200,
                            message: "User list successfully retrieved.",
                        });
                    })
                    .catch(error => reject({
                        status: 500,
                        message: (error as string).toString()
                    }));
            }
        } catch (error) {
            reject({
                status: 500,
                message: (error as string).toString()
            });
        }
    });
};

const get = (id: string): Promise<{
    data: UserInterface | null,
    status: number,
    message: string,
}> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.user_get(id));
            } else {
                fetch("http://localhost:3000/user")
                    .then(res => res.json())
                    .then(res => {
                        const user = res.find((user: UserInterface) => user.info.id === id);
                        if (user) {
                            resolve({
                                data: user,
                                status: 200,
                                message: `User with ID ${id} successfully retrieved.`,
                            });
                        } else {
                            reject({
                                status: 500,
                                message: "Invalid user "
                            });
                        };
                    })
                    .catch(error => reject({
                        status: 500,
                        message: (error as string).toString()
                    }));
            };
        } catch (error) {
            reject({
                status: 500,
                message: (error as string).toString()
            });
        };
    });
};

const update = (user: UserInterface): Promise<IPCUserInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.user_update(user));
            } else {
                resolve({
                    data: null,
                    status: 200,
                    message: `User with ID ${user.info.id} successfully updated.`,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const del = (id: string): Promise<IPCUserInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.user_delete(id));
            } else {
                resolve({
                    data: null,
                    status: 200,
                    message: `User with ID ${id} successfully deleted.`,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const select = (id: string, isSelected: boolean): Promise<IPCUserInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.user_select(id, isSelected));
            } else {
                resolve({
                    data: null,
                    status: 200,
                    message: `User with ID ${id} successfully ${isSelected ? 'selected' : 'deselected'}.`,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const selectAll = (isSelected: boolean): Promise<IPCUserInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.user_select_all(isSelected));
            } else {
                resolve({
                    data: null,
                    status: 200,
                    message: `All users successfully ${isSelected ? 'selected' : 'deselected'}.`,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};


export {
    create,
    update,
    list,
    get,
    del,
    select,
    selectAll,
};

// user_list
// user_get
// user_create
// user_update
// user_delete
// user_select
// user_select_all

// bot_get
// bot_update
// setting_get
// setting_update
// action_open_browser
// action_like_comment