//LikeComment.tsx
import * as botAPIs from "~/APIs/bot";

import styles from "./LikeComment.module.scss";
import { useEffect, useState } from "react";
import { initLikeAndCommentState, LikeCommentInterface } from "~/types/bot";
import InputField from "~/components/InputField/InputField";
import { set } from "lodash";

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

    const handleChange = (path: string, value: boolean | number | string): void => {
        setLikeComment(prev => {
            const newLikeComment = { ...prev };
            set(newLikeComment, path, value);
            return newLikeComment;
        });
    };

    return (
        <div className={styles.likeCommentContainer}>
            <div className={styles.contents}>
                <div className={`${styles.content} ${styles.newsFeed}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.newsFeed.isSelected}
                            className={styles.likeComment_newsFeed_isSelected}
                            id="likeComment_newsFeed_isSelected"
                            label="newsFeed"
                            onChange={(e) => handleChange("newsFeed.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.newsFeed.value}
                            className={styles.likeComment_newsFeed_value}
                            id="likeComment_newsFeed_value"
                            label="min"
                            onChange={(e) => handleChange("newsFeed.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.newsFeed.like.isSelected}
                            className={styles.likeComment_newsFeed_like_isSelected}
                            id="likeComment_newsFeed_like_isSelected"
                            label="like"
                            onChange={(e) => handleChange("newsFeed.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.newsFeed.like.value}
                            className={styles.likeComment_newsFeed_like_value}
                            id="likeComment_newsFeed_like_value"
                            label="count"
                            onChange={(e) => handleChange("newsFeed.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.newsFeed.comment.isSelected}
                            className={styles.likeComment_newsFeed_comment_isSelected}
                            id="likeComment_newsFeed_comment_isSelected"
                            label="like"
                            onChange={(e) => handleChange("newsFeed.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.newsFeed.comment.value}
                            className={styles.likeComment_newsFeed_comment_value}
                            id="likeComment_newsFeed_comment_value"
                            label="count"
                            onChange={(e) => handleChange("newsFeed.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.watch}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.watch.isSelected}
                            className={styles.likeComment_watch_isSelected}
                            id="likeComment_watch_isSelected"
                            label="watch"
                            onChange={(e) => handleChange("watch.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.watch.value}
                            className={styles.likeComment_watch_value}
                            id="likeComment_watch_value"
                            label="min"
                            onChange={(e) => handleChange("watch.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.watch.like.isSelected}
                            className={styles.likeComment_watch_like_isSelected}
                            id="likeComment_watch_like_isSelected"
                            label="like"
                            onChange={(e) => handleChange("watch.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.watch.like.value}
                            className={styles.likeComment_watch_like_value}
                            id="likeComment_watch_like_value"
                            label="count"
                            onChange={(e) => handleChange("watch.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.watch.comment.isSelected}
                            className={styles.likeComment_watch_comment_isSelected}
                            id="likeComment_watch_comment_isSelected"
                            label="like"
                            onChange={(e) => handleChange("watch.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.watch.comment.value}
                            className={styles.likeComment_watch_comment_value}
                            id="likeComment_watch_comment_value"
                            label="count"
                            onChange={(e) => handleChange("watch.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LikeComment;