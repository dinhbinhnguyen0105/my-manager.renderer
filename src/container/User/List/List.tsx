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

type SortDirection = 'asc' | 'desc';
type SortableField = 'no' | 'createdAt' | 'uid' | 'username' | 'type' | 'group';

const List: React.FC = () => {
    const [users, usersDispatch] = useContext(UserContext);
    const [expandRowIndex, setExpandRowIndex] = useState<number>(-1);
    const [searchValue] = useContext(SearchContext);
    const [isLaunchModal, setIsLaunchModal] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState<string | null>(null);
    const [sortField, setSortField] = useState<SortableField>('createdAt');
    const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
    const navigate = useNavigate();

    useEffect(() => {
        usersAPIs.list()
            .then(res => {
                if (res.status.toString().startsWith("2")) {
                    usersDispatch(res.data ? actionList(res.data) : actionList([]));
                }
            });
    }, []);

    const formatDate = (isoDateString: string): string => {
        const date = new Date(isoDateString);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

    const filterUsers = useMemo(() => {
        let filtered = [...users];

        // Filter logic
        if (searchValue.trim()) {
            filtered = filtered.filter(({ info }) =>
                (["username", "uid", "type", "group", "createdAt"] as (keyof typeof info)[])
                    .some(field =>
                        String(info[field]).toLowerCase().includes(searchValue.toLowerCase())
                    ));
        }

        // Sort logic
        return filtered.sort((a, b) => {
            let aValue: any, bValue: any;

            if (sortField === 'no') {
                return sortDirection === 'asc'
                    ? a.info.id.localeCompare(b.info.id)
                    : b.info.id.localeCompare(a.info.id);
            }

            aValue = a.info[sortField];
            bValue = b.info[sortField];

            // Special handling for date fields
            if (sortField === 'createdAt') {
                aValue = new Date(aValue).getTime();
                bValue = new Date(bValue).getTime();
            }

            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
            }

            const compare = String(aValue).localeCompare(String(bValue));
            return sortDirection === 'asc' ? compare : -compare;
        });
    }, [users, searchValue, sortField, sortDirection]);

    const handleSort = (field: SortableField) => {
        if (sortField === field) {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const SortIndicator = ({ field }: { field: SortableField }) => (
        <span className={styles.sortIndicator}>
            {sortField === field && (sortDirection === 'asc' ? '↑' : '↓')}
        </span>
    );

    const handleRowContextMenu = (event: React.MouseEvent<HTMLTableRowElement>, index: number): void => {
        event.preventDefault();
        setExpandRowIndex(prev => (prev === index ? -1 : index));
    };

    const handleEditButtonClicked = useCallback((id: string): void => {
        navigate(`/user/update?id=${id}`);
    }, [navigate]);

    const handleDeleteButtonClicked = useCallback((event: React.MouseEvent<EventTarget>, id: string): void => {
        const target = event.currentTarget as HTMLButtonElement;
        const originalText = target.innerHTML;
        target.innerHTML = '...';

        usersAPIs.del(id)
            .then(res => {
                if (res.status.toString().startsWith("2")) {
                    usersDispatch(actionDelete(id));
                    setExpandRowIndex(-1);
                }
            })
            .finally(() => target.innerHTML = originalText);
    }, [usersDispatch]);

    const handleLaunchButtonClicked = useCallback((id: string): void => {
        setIsLaunchModal(true);
        setCurrentId(id);
    }, []);

    return (
        <div className={styles.listUser}>
            <div className={styles.listUserContainer}>
                <h2 className={styles.title}>List of Users</h2>
                {filterUsers.length ? (
                    <table className={styles.userTable}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th
                                    className={styles.tableCell}
                                    onClick={() => handleSort('no')}
                                >
                                    N.O <SortIndicator field="no" />
                                </th>
                                <th
                                    className={styles.tableCell}
                                    onClick={() => handleSort('createdAt')}
                                >
                                    Create Date <SortIndicator field="createdAt" />
                                </th>
                                <th
                                    className={styles.tableCell}
                                    onClick={() => handleSort('uid')}
                                >
                                    UID <SortIndicator field="uid" />
                                </th>
                                <th
                                    className={styles.tableCell}
                                    onClick={() => handleSort('username')}
                                >
                                    Username <SortIndicator field="username" />
                                </th>
                                <th
                                    className={styles.tableCell}
                                    onClick={() => handleSort('type')}
                                >
                                    Type <SortIndicator field="type" />
                                </th>
                                <th
                                    className={styles.tableCell}
                                    onClick={() => handleSort('group')}
                                >
                                    Group <SortIndicator field="group" />
                                </th>
                                <th className={styles.tableCell}>Actions</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            {filterUsers.map((user, index) => (
                                <Row
                                    key={user.info.id}
                                    index={index}
                                    user={user}
                                    formatDate={formatDate}
                                    isExpanded={index === expandRowIndex}
                                    isActive={currentId === user.info.id}
                                    handleContextMenu={handleRowContextMenu}
                                    handleEditButtonClicked={handleEditButtonClicked}
                                    handleDeleteButtonClicked={handleDeleteButtonClicked}
                                    handleLaunchButtonClicked={() => handleLaunchButtonClicked(user.info.id)}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h2 className={styles.errorMessage}>
                        {users.length ? "No matching users found." : "Unable to fetch users."}
                    </h2>
                )}
            </div>
            {currentId && (
                <Setting
                    isOpen={isLaunchModal}
                    onClose={() => setIsLaunchModal(false)}
                    action={constants.ACTION_OPEN_BROWSER}
                    idsSelected={[currentId]}
                />
            )}
        </div>
    );
};

export default List;