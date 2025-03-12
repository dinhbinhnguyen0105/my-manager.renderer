// Row.tsx
import { UserInterface } from "~/types/user";
import styles from "./Row.module.scss";

const Row: React.FC<{ index: number, user: UserInterface, isSelected: boolean, handleSelectUser: (id: string, preSelectedValue: boolean) => void }> = ({ index, user, isSelected, handleSelectUser }) => {

    return (
        <>
            <tr className={`${styles.tableRow} ${isSelected ? styles.selected : ""}`}>
                <td>
                    <input type="checkbox" checked={isSelected} onChange={() => handleSelectUser(user.info.id, isSelected)} />
                </td>
                <td className={styles.tableCell}>{index + 1}</td>
                <td className={styles.tableCell}>{user.info.username}</td>
                <td className={styles.tableCell}>{user.info.group}</td>
            </tr>
        </>
    )
}

export default Row;