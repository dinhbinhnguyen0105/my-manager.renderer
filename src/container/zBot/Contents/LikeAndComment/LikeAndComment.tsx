import { useEffect, useState } from "react";

import styles from "./LikeAndComment.module.scss";
import InputField from "~/components/InputField/InputField";


const LikeAndComment: React.FC = () => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSelected(e.target.checked);
    };
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className={styles.likeCommentContainer}>
            <div className="contents">
                <div className="content newsFeed">
                    <InputField
                        type="checkbox"
                        checked={isSelected}
                        name="isSelected"
                        label="News Feed"
                        id="newsfeed"
                        className="newsFeed"
                        onChange={handleCheckboxChange}
                    />
                    <InputField
                        type="text"
                        value={value}
                        name="value"
                        id="test"
                        label="count"
                        onChange={handleTextChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default LikeAndComment;