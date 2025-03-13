// Row.tsx
import { memo } from "react";
import { UserInterface } from "~/types/user";
import styles from "./Row.module.scss";

interface RowProps {
    index: number,
    user: UserInterface,
    formatDate: (isoDateString: string) => string,
    isExpanded: boolean,
    isActive: boolean,
    handleContextMenu: (event: React.MouseEvent<HTMLTableRowElement>, index: number) => void,
    handleEditButtonClicked: (id: string) => void,
    handleDeleteButtonClicked: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void,
    handleLaunchButtonClicked: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
};

const Row: React.FC<RowProps> = ({ index, user, isExpanded, isActive, formatDate, handleContextMenu, handleEditButtonClicked, handleDeleteButtonClicked, handleLaunchButtonClicked, }) => {
    return (
        <>
            <tr className={`${styles.tableRow}${isActive ? ` ${styles.active}` : ""}${user.info.status ? "" : ` ${styles.checkpoint}`}`} onContextMenu={(event) => handleContextMenu(event, index)}>
                <td className={styles.tableCell}>{index + 1}</td>
                <td className={styles.tableCell}>{formatDate(user.info.createdAt || "")}</td>
                <td className={styles.tableCell}>{user.info.uid}</td>
                <td className={styles.tableCell}>{user.info.username}</td>
                <td className={styles.tableCell}>{user.info.type}</td>
                <td className={styles.tableCell}>{user.info.group}</td>
                <td className={`${styles.tableCell} ${styles.actionRow}`}>
                    <button
                        className={styles.actionButton}
                        onClick={e => handleLaunchButtonClicked(e, user.info.id || "")}
                    >Launch</button>
                </td>
            </tr>
            {
                isExpanded && (
                    <tr>
                        <td className={styles.expandInfo} colSpan={6}>
                            <div className={styles.expandContainer}>
                                <div className={styles.expandContent}>
                                    <div className={`${styles.userInfo} ${styles.password}`}>
                                        <label htmlFor="password">password</label>
                                        <span data-user={user.info.password}>{user.info.password}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.twoFA}`}>
                                        <label htmlFor="twoFA">twoFA</label>
                                        <span data-user={user.info.twoFA}>{user.info.twoFA}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.email}`}>
                                        <label htmlFor="email">email</label>
                                        <span data-user={user.info.email}>{user.info.email}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.emailPassword}`}>
                                        <label htmlFor="emailPassword">email password</label>
                                        <span data-user={user.info.emailPassword}>{user.info.emailPassword}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.phoneNumber}`}>
                                        <label htmlFor="phoneNumber">phone number</label>
                                        <span data-user={user.info.phoneNumber}>{user.info.phoneNumber}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.birthDay}`}>
                                        <label htmlFor="birthDay">birthday</label>
                                        <span data-user={user.info.birthDay}>{user.info.birthDay}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.gender}`}>
                                        <label htmlFor="gender">gender</label>
                                        <span data-user={user.info.gender}>{user.info.gender}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.avatar}`}>
                                        <label htmlFor="avatar">avatar</label>
                                        <span data-user={user.info.avatar}>{user.info.avatar}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.group}`}>
                                        <label htmlFor="group">group</label>
                                        <span data-user={user.info.group}>{user.info.group}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.type}`}>
                                        <label htmlFor="type">type</label>
                                        <span data-user={user.info.type}>{user.info.type}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.note}`}>
                                        <label htmlFor="note">note</label>
                                        <span data-user={user.info.note}>{user.info.note}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.status}`}>
                                        <label htmlFor="status">status</label>
                                        <span data-user={user.info.status}>{user.info.status ? "live" : "checkpoint"}</span>
                                    </div>
                                    <div className={`${styles.userInfo} ${styles.updateAt}`}>
                                        <label htmlFor="updateAt">update date</label>
                                        <span data-user={user.info.updatedAt}>{user.info.updatedAt}</span>
                                    </div>
                                </div>
                                <div className={styles.expandActions}>
                                    <button className={styles.actionButton} onClick={() => handleEditButtonClicked(user.info.id || "")}>edit</button>
                                    <button className={styles.actionButton} onDoubleClick={e => handleDeleteButtonClicked(e, user.info.id || "")}>delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                )
            }
        </>
    );
};

export default memo(Row);