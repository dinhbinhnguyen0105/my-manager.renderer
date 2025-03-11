// Create.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./Create.module.scss";
import { initUserState, UserInterface } from "~/types/user";
import { create } from "~/APIs/user";

const Create: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserInterface>(initUserState);

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        const value = e.target.value;
        const name = e.target.name;
        setUser(prev => ({
            ...prev,
            info: {
                ...prev.info,
                [name]: value,
            }
        }));
    };

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
        e.preventDefault();
        create(user)
            .then(res => {
                console.log(res);
                navigate("/user/list");
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => setUser(initUserState));
    };

    return (
        <div className={styles.userCreateContainer}>
            <div className={styles.container}>
                <h2>Create new user</h2>
                <div className={styles.formContainer}>
                    <form action="">
                        <label className={styles.formLabel} htmlFor="uid">UID</label>
                        <input className={styles.formTextInput} type="text" id="uid" name="uid" value={user.info.uid} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="username">username</label>
                        <input type="text" className={styles.formTextInput} id="username" name="username" value={user.info.username} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="password">password</label>
                        <input type="text" className={styles.formTextInput} id="password" name="password" value={user.info.password} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="email">email</label>
                        <input type="text" className={styles.formTextInput} id="email" name="email" value={user.info.email} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="emailPassword">email password</label>
                        <input type="text" className={styles.formTextInput} id="emailPassword" name="emailPassword" value={user.info.emailPassword} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="twoFA">2FA</label>
                        <input type="text" className={styles.formTextInput} id="twoFA" name="twoFA" value={user.info.twoFA} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="phoneNumber">phone number</label>
                        <input type="text" className={styles.formTextInput} id="phoneNumber" name="phoneNumber" value={user.info.phoneNumber} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="group">group</label>
                        <input type="text" className={styles.formTextInput} id="group" name="group" value={user.info.group} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="type">type</label>
                        <input type="text" className={styles.formTextInput} id="type" name="type" value={user.info.type} onChange={handleInputChange} />
                        <label className={styles.formLabel} htmlFor="group">note</label>
                        <input type="text" className={styles.formTextInput} id="note" name="note" value={user.info.note} onChange={handleInputChange} />
                        <button className={styles.submitButton} type="submit" onClick={handleSubmit}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;