import { memo } from "react";
import { UserInterface } from "~/types/user";
import Row from "./Row";
import styles from "./List.module.scss";

export interface ListUserProps {
    users: UserInterface[];
    handleSelectUser: (id: string) => void;
    handleSelectAllUser: (isSelected: boolean) => void;
}

const List: React.FC<ListUserProps> = ({ users, handleSelectUser, handleSelectAllUser }) => {
    const isSelectAll = users.length > 0 && users.every(user => user.actions.isSelected);

    return (
        <div className="usersContainer">
            {users.length ? (
                <table className={styles.userTable}>
                    <thead className={styles.tableHeader}>
                        <tr>
                            <th className={styles.tableCell}>
                                <label htmlFor="selectAll">
                                    {isSelectAll ? "Deselect All" : "Select All"}
                                </label>
                                <input
                                    type="checkbox"
                                    id="selectAll"
                                    checked={isSelectAll}
                                    onChange={(e) => handleSelectAllUser(e.target.checked)}
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
    );
};

export default memo(List); // Sử dụng memo cho component List