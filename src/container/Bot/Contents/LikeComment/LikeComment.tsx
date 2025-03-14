import * as botAPIs from "~/APIs/bot";

import styles from "./LikeComment.module.scss";
import { useEffect, useState } from "react";
import { initLikeAndCommentState, LikeCommentInterface } from "~/types/bot";
import InputField from "~/components/InputField/InputField";

const LikeComment: React.FC = () => {
    const [likeComment, setLikeComment] = useState<LikeCommentInterface>(initLikeAndCommentState);
    useEffect(() => {
        botAPIs.getLikeComment()
            .then(res => {
                if (res.status.toString().startsWith("2")) {
                    if (res.data) { setLikeComment(res.data) }
                    else {
                        console.error(res.message);
                        setLikeComment(initLikeAndCommentState)
                    };
                } else {
                    console.error(res.message);
                    setLikeComment(initLikeAndCommentState)
                }
            })
    }, []);

    const handleChange = (path: string, value: boolean | number) => {
        setLikeComment(prev => {
            const keys = path.split('.');
            const newState = { ...prev };

            let current: any = newState;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]] = { ...current[keys[i]] };
            }

            const lastKey = keys[keys.length - 1];
            current[lastKey] = value;

            console.log(current[lastKey]);

            return newState;
        });
    };

    return (
        <div className={styles.LikeCommentContainer}>
            <div className="contents">
                <div className="content newsFeed">
                    <InputField
                        type="checkbox"
                        checked={likeComment.newsFeed.isSelected}
                        name="isSelected"
                        label="News Feed"
                        id=""
                        className="newsFeed"
                        onChange={(e) => handleChange("likeComment.newsFeed.isSelected", e.target.checked)}
                    />
                </div>
            </div>
        </div>
    )
}

export default LikeComment;