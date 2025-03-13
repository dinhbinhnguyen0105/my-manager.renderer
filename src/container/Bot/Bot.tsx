import { Outlet } from "react-router-dom";
import Header from "~/components/Header/Header";
import List, { ListUserProps } from "./Users/List";
import { useCallback, useEffect, useState } from "react";
import { UserInterface } from "~/types/user";
import { list as userList } from "~/APIs/user";

const Bot: React.FC = () => {
    const [listUser, setListUser] = useState<UserInterface[]>([]);

    useEffect(() => {
        userList()
            .then(res => {
                if (res.status.toString().startsWith("2") && res.data) {
                    setListUser(res.data);
                } else {
                    setListUser([]);
                    console.error(res.message);
                }
            });
    }, []);

    // Sử dụng useCallback để tránh tạo hàm mới mỗi lần render
    const handleSelectUser = useCallback((id: string): void => {
        setListUser(prev =>
            prev.map(user =>
                user.info.id === id
                    ? { ...user, actions: { ...user.actions, isSelected: !user.actions.isSelected } }
                    : user
            )
        );
    }, []);

    // Thêm useCallback cho handleSelectAllUser
    const handleSelectAllUser = useCallback((isSelectAll: boolean): void => {
        setListUser(prev =>
            prev.map(user => ({
                ...user,
                actions: { ...user.actions, isSelected: isSelectAll }
            }))
        );
    }, []);

    return (
        <div className="botContainer">
            <Header />
            <div className="botContent">
                <List
                    users={listUser}
                    handleSelectUser={handleSelectUser}
                    handleSelectAllUser={handleSelectAllUser}
                />
                <Outlet />
            </div>
        </div>
    );
};

export default Bot;