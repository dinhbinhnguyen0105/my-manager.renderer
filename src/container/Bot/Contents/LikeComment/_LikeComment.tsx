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

    const handleChange = (path: string, value: boolean | number | string) => {
        setLikeComment(prev => {
            const keys = path.split('.');
            const newState = { ...prev };

            let current: any = newState;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]] = { ...current[keys[i]] };
            }

            const lastKey = keys[keys.length - 1];
            current[lastKey] = value;

            console.log(newState);

            return newState;
        });
    };

    return (
        <div className={styles.LikeCommentContainer}>
            <div className={styles.contents}>
                <div className={`${styles.content} ${styles.newsFeed}`}>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.newsFeed.isSelected}
                            name="isSelected"
                            label="News Feed"
                            id="newsFeedSelection"
                            className={styles.newsFeedSelection}
                            onChange={(e) => handleChange("newsFeed.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.newsFeed.value}
                            name="value"
                            label="min"
                            id="newsFeedValue"
                            className={styles.newsFeedValue}
                            onChange={(e) => handleChange("newsFeed.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.newsFeed.like.isSelected}
                            name="isSelected"
                            label="Like"
                            id="newsFeed_likeSelection"
                            className={styles.newsFeed_likeSelection}
                            onChange={(e) => handleChange("newsFeed.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.newsFeed.like.value}
                            name="value"
                            label="count"
                            id="newsFeed_likeValue"
                            className={styles.newsFeed_likeValue}
                            onChange={(e) => handleChange("newsFeed.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.newsFeed.comment.isSelected}
                            name="isSelected"
                            label="Comment"
                            id="newsFeed_commentSelection"
                            className={styles.newsFeed_commentSelection}
                            onChange={(e) => handleChange("newsFeed.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.newsFeed.comment.value}
                            name="value"
                            label="count"
                            id="newsFeed_commentValue"
                            className={styles.newsFeed_commentValue}
                            onChange={(e) => handleChange("newsFeed.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>


                    {/* <div className={styles.horizontalLine}></div> */}


                    {/* <div className={styles.horizontalLine}></div> */}

                </div>
                <div className={`${styles.content} ${styles.watch}`}>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.watch.isSelected}
                            name="isSelected"
                            label="Watch"
                            id="watchSelection"
                            className={styles.watchSelection}
                            onChange={(e) => handleChange("watch.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.watch.value}
                            name="value"
                            label="min"
                            id="watchValue"
                            className={styles.watchValue}
                            onChange={(e) => handleChange("watch.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.watch.like.isSelected}
                            name="isSelected"
                            label="Like"
                            id="watch_likeSelection"
                            className={styles.watch_likeSelection}
                            onChange={(e) => handleChange("watch.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.watch.like.value}
                            name="value"
                            label="count"
                            id="watch_likeValue"
                            className={styles.watch_likeValue}
                            onChange={(e) => handleChange("watch.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.watch.comment.isSelected}
                            name="isSelected"
                            label="Comment"
                            id="watch_commentSelection"
                            className={styles.watch_commentSelection}
                            onChange={(e) => handleChange("watch.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.watch.comment.value}
                            name="value"
                            label="count"
                            id="watch_commentValue"
                            className={styles.watch_commentValue}
                            onChange={(e) => handleChange("watch.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>

                </div>
                <div className={`${styles.content} ${styles.group}`}>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.group.isSelected}
                            name="isSelected"
                            label="group"
                            id="groupSelection"
                            className={styles.groupSelection}
                            onChange={(e) => handleChange("group.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.group.value}
                            name="value"
                            label="min"
                            id="groupValue"
                            className={styles.groupValue}
                            onChange={(e) => handleChange("group.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.group.like.isSelected}
                            name="isSelected"
                            label="Like"
                            id="group_likeSelection"
                            className={styles.group_likeSelection}
                            onChange={(e) => handleChange("group.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.group.like.value}
                            name="value"
                            label="count"
                            id="group_likeValue"
                            className={styles.group_likeValue}
                            onChange={(e) => handleChange("group.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.group.comment.isSelected}
                            name="isSelected"
                            label="Comment"
                            id="group_commentSelection"
                            className={styles.group_commentSelection}
                            onChange={(e) => handleChange("group.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.group.comment.value}
                            name="value"
                            label="count"
                            id="group_commentValue"
                            className={styles.group_commentValue}
                            onChange={(e) => handleChange("group.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.friend}`}>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.friend.isSelected}
                            name="isSelected"
                            label="friend"
                            id="friendSelection"
                            className={styles.friendSelection}
                            onChange={(e) => handleChange("friend.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.friend.value}
                            name="value"
                            label="min"
                            id="friendValue"
                            className={styles.friendValue}
                            onChange={(e) => handleChange("friend.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.friend.like.isSelected}
                            name="isSelected"
                            label="Like"
                            id="friend_likeSelection"
                            className={styles.friend_likeSelection}
                            onChange={(e) => handleChange("friend.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.friend.like.value}
                            name="value"
                            label="count"
                            id="friend_likeValue"
                            className={styles.friend_likeValue}
                            onChange={(e) => handleChange("friend.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.friend.comment.isSelected}
                            name="isSelected"
                            label="Comment"
                            id="friend_commentSelection"
                            className={styles.friend_commentSelection}
                            onChange={(e) => handleChange("friend.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.friend.comment.value}
                            name="value"
                            label="count"
                            id="friend_commentValue"
                            className={styles.friend_commentValue}
                            onChange={(e) => handleChange("friend.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.friend.poke.isSelected}
                            name="isSelected"
                            label="poke"
                            id="friend_pokeSelection"
                            className={styles.friend_pokeSelection}
                            onChange={(e) => handleChange("friend.poke.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.friend.poke.value}
                            name="value"
                            label="count"
                            id="friend_pokeValue"
                            className={styles.friend_pokeValue}
                            onChange={(e) => handleChange("friend.poke.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.friend.pokeBack.isSelected}
                            name="isSelected"
                            label="pokeBack"
                            id="friend_pokeBackSelection"
                            className={styles.friend_pokeBackSelection}
                            onChange={(e) => handleChange("friend.pokeBack.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.friend.pokeBack.value}
                            name="value"
                            label="count"
                            id="friend_pokeBackValue"
                            className={styles.friend_pokeBackValue}
                            onChange={(e) => handleChange("friend.pokeBack.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.page}`}>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.page.isSelected}
                            name="isSelected"
                            label="page"
                            id="pageSelection"
                            className={styles.pageSelection}
                            onChange={(e) => handleChange("page.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.page.value}
                            name="value"
                            label="min"
                            id="pageValue"
                            className={styles.pageValue}
                            onChange={(e) => handleChange("page.value", parseInt(e.target.value) || 0)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.page.url || ""}
                            name="value"
                            label="url"
                            id="pageUrl"
                            className={styles.pageUrl}
                            onChange={(e) => handleChange("page.url", e.target.value)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.page.like.isSelected}
                            name="isSelected"
                            label="Like"
                            id="page_likeSelection"
                            className={styles.page_likeSelection}
                            onChange={(e) => handleChange("page.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.page.like.value}
                            name="value"
                            label="count"
                            id="page_likeValue"
                            className={styles.page_likeValue}
                            onChange={(e) => handleChange("page.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.page.comment.isSelected}
                            name="isSelected"
                            label="Comment"
                            id="page_commentSelection"
                            className={styles.page_commentSelection}
                            onChange={(e) => handleChange("page.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.page.comment.value}
                            name="value"
                            label="count"
                            id="page_commentValue"
                            className={styles.page_commentValue}
                            onChange={(e) => handleChange("page.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.contentSection}>
                        <InputField
                            type="checkbox"
                            checked={likeComment.page.invite.isSelected}
                            name="isSelected"
                            label="invite"
                            id="page_inviteSelection"
                            className={styles.page_inviteSelection}
                            onChange={(e) => handleChange("page.invite.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={likeComment.page.invite.value}
                            name="value"
                            label="count"
                            id="page_inviteValue"
                            className={styles.page_inviteValue}
                            onChange={(e) => handleChange("page.invite.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeComment;