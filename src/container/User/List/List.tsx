// List.tsx
import { useState, useContext, useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import * as usersAPIs from "~/APIs/user";
import UserContext from "~/store/user/UserContext";
import SearchContext from "~/store/search/SearchContext";
import { list as actionList, del as actionDelete } from "~/store/user/userActions";
import styles from "./List.module.scss";
import Row from "./Row";
import Setting from "~/components/modals/Setting/Setting";
import constants from "~/constants";

const List: React.FC = () => {
    const [users, usersDispatch] = useContext(UserContext);
    const [expandRowIndex, setExpandRowIndex] = useState<number>(-1);
    const [searchValue] = useContext(SearchContext);
    const [isLaunchModal, setIsLaunchModal] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState<string | null>(null);
    const navigate = useNavigate();
    // Call API users
    useEffect(() => {
        usersAPIs.list()
            .then(res => {
                if (res.status.toString().startsWith("2")) {
                    if (res.data) {
                        usersDispatch(actionList(res.data));
                    } else {
                        usersDispatch(actionList([]));
                    };
                }
            })
    }, []);

    const formatDate = (isoDateString: string): string => {
        const date = new Date(isoDateString);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        });
    };

    const filterUsers = useMemo(() => {
        if (!searchValue.trim()) return users;
        return users.filter(({ info }) =>
            (["username", "uid", "type", "group", "createdAt"] as (keyof typeof info)[])
                .some(field =>
                    String(info[field]).toLowerCase().includes(searchValue.toLowerCase())
                )
        );
    }, [users, searchValue]);

    const handleRowContextMenu = (event: React.MouseEvent<HTMLTableRowElement>, index: number): void => {
        event.preventDefault();
        setExpandRowIndex(prevIndex => (prevIndex === index ? -1 : index));
    };

    const handleEditButtonClicked = useCallback((id: string): void => {
        const url = `/user/update?id=${id}`;
        navigate(url);
    }, [navigate]);

    const handleDeleteButtonClicked = useCallback((event: React.MouseEvent<EventTarget>, id: string): void => {
        const target = event.currentTarget as HTMLButtonElement;
        const defaultInnerHTML = target.innerHTML;
        target.innerHTML = "...";

        usersAPIs.del(id)
            .then(res => {
                if (res.status.toString().startsWith("2")) {
                    usersDispatch(actionDelete(id));
                    setExpandRowIndex(-1);
                    console.log(res.message);
                } else {
                    // modal
                    console.error(res.message);
                };
            })
            .finally(() => target.innerHTML = defaultInnerHTML);
    }, [usersDispatch, expandRowIndex]);

    const handleLaunchButtonClicked = useCallback((event: React.MouseEvent<EventTarget>, id: string): void => {
        // const target = event.currentTarget as HTMLButtonElement;
        // const defaultInnerHTML = target.innerHTML;
        // target.innerHTML = "...";
        setIsLaunchModal(true);
        setCurrentId(id);
    }, []);

    return (
        <div className={styles.listUser}>
            <div className={styles.listUserContainer}>
                <h2 className={styles.title}>List of Users</h2>
                {
                    filterUsers.length ? (
                        <table className={styles.userTable}>
                            <thead className={styles.tableHeader}>
                                <tr>
                                    <th className={styles.tableCell}>N.O</th>
                                    <th className={styles.tableCell}>Create Date</th>
                                    <th className={styles.tableCell}>UID</th>
                                    <th className={styles.tableCell}>Username</th>
                                    <th className={styles.tableCell}>Type</th>
                                    <th className={styles.tableCell}>Group</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tableBody}>
                                {
                                    filterUsers.map((user, index) => (
                                        <Row
                                            key={index}
                                            index={index}
                                            user={user}
                                            formatDate={formatDate}
                                            isExpanded={index === expandRowIndex}
                                            isActive={currentId === user.info.id ? true : false}
                                            handleContextMenu={handleRowContextMenu}
                                            handleEditButtonClicked={handleEditButtonClicked}
                                            handleDeleteButtonClicked={handleDeleteButtonClicked}
                                            handleLaunchButtonClicked={handleLaunchButtonClicked}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <h2 className={styles.errorMessage}>Unable to fetch users from database, or users is empty.</h2>
                    )
                }
            </div>
            {
                currentId && <Setting isOpen={isLaunchModal} onClose={() => setIsLaunchModal(false)} action={constants.ACTION_OPEN_BROWSER} idsSelected={[currentId]} />
            }

        </div>
    )
};

export default List;
