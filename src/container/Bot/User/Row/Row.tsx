import { memo } from "react";
import { UserInterface } from "~/types/user";
import styles from "./Row.module.scss";

interface RowProps {
    index: number;
    user: UserInterface;
    isSelected: boolean;
    handleSelectUser: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const Row: React.FC<RowProps> = ({ index, user, isSelected, handleSelectUser }) => {
    return (
        <tr className={`${styles.tableRow} ${isSelected ? styles.selected : ""}`}>
            <td>
                <input
                    type="checkbox"
                    checked={isSelected || false}
                    onChange={(e) => handleSelectUser(e, user.info.id)} // Chỉ truyền ID
                    name="isSelected"
                />
            </td>
            <td className={styles.tableCell}>{index + 1}</td>
            <td className={styles.tableCell}>{user.info.username}</td>
            <td className={styles.tableCell}>{user.info.group}</td>
        </tr>
    );
};

export default memo(Row); // Đảm bảo sử dụng memo