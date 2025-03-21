import { useContext, useEffect, useCallback, useState } from "react";

import UserContext from "~/store/user/UserContext";
import styles from "./User.module.scss";
import { list as userListAPI, select as userSelectAPI, selectAll as userSelectAllAPI } from "~/APIs/user";
import * as userActions from "~/store/user/userActions";
import Row from "./Row/Row";

const User: React.FC = () => {
    const [users, usersDispatch] = useContext(UserContext);
    const [isSelectAll, setIsSelectAll] = useState<boolean>(false);

    useEffect(() => {
        userListAPI()
            .then(res => {
                if (res.status.toString().startsWith("2") && res.data) {
                    usersDispatch(userActions.list(res.data));
                } else {
                    usersDispatch(userActions.list([]));
                    console.error(res.message);
                }
            });
    }, []);


    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        userSelectAllAPI(e.target.checked);
        // .then(res => {
        //     if (res.status.toString().startsWith("2")) {
        //         console.log(res.status);
        //     } else {
        //         console.error(res.message)
        //     }
        // });
        setIsSelectAll(e.target.checked);
        usersDispatch(userActions.toggleSelectionAll(e.target.checked));
    };

    const handleSelectUser = useCallback((e: React.ChangeEvent<HTMLInputElement>, id: string): void => {
        userSelectAPI(id, e.target.checked)
            .then(res => {
                if (res.status.toString().startsWith("2")) {
                    usersDispatch(userActions.toggleSelection(id));
                } else {
                    console.error(res.message)
                }
            });
    }, [users, usersDispatch]);

    return (
        <div className={styles.usersContainer}>
            {users.length ? (
                <table className={styles.userTable}>
                    <thead className={styles.tableHeader}>
                        <tr>
                            <th className={styles.tableCell}>
                                <label htmlFor="selectAll">
                                    {isSelectAll ? "Deselect All" : "Select All"}
                                </label>
                                <input
                                    name="selectAll"
                                    type="checkbox"
                                    id="selectAll"
                                    checked={isSelectAll}
                                    onChange={handleSelectAll}
                                    hidden
                                />
                            </th>
                            <th className={styles.tableCell}>No.</th>
                            <th className={styles.tableCell}>User Name</th>
                            <th className={styles.tableCell}>Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <Row
                                key={user.info.id} // Sử dụng ID thay vì index để tối ưu
                                index={index}
                                user={user}
                                isSelected={user.actions.isSelected}
                                handleSelectUser={handleSelectUser}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <h3 className={styles.errorMessage}>Unable to fetch users from database.</h3>
            )}
        </div>
    )
}

export default User;