import { useState } from "react";
import { UserInterface } from "~/types/user";
import Row from "./Row";
import styles from "./List.module.scss";

export interface ListUserProps {
    users: UserInterface[],
    handleSelectUser: (id: string, isSelected: boolean) => void,
    handleSelectAllUser: (isSelected: boolean) => void
}

const List: React.FC<ListUserProps> = ({ users, handleSelectUser, isSelectAll }) => {
    const isSelectedAll = useState<boolean>(false);

    return (
        <div className="usersContainer">
            {
                users.length ? (
                    <table className={styles.userTable}>
                        <thead className={styles.tableHeader}>
                            <tr>
                                <th className={styles.tableCell}>
                                    <label htmlFor="selectAll">
                                        {selectedAll ? "deselect all" : "select all"}
                                    </label>
                                    <input type="checkbox" id="selectAll" name="selectAll" checked={selectedAll} onChange={handleSelectAllUser} hidden />
                                </th>
                                <th className={styles.tableCell}>n.o</th>
                                <th className={styles.tableCell}>user name</th>
                                <th className={styles.tableCell}>group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <Row
                                        key={index}
                                        index={index}
                                        user={user}
                                        isSelected={user.actions.isSelected || false}
                                        handleSelectUser={handleSelectUser}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                ) :
                    <h3 className={styles.errorMessage}>Unable to fetch users from database.</h3>
            }
        </div>
    );
};

export default List;