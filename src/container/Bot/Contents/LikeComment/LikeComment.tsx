//container/Bot/Contents/LikeComment/bot.LikeComment.tsx
import { get as getBotAPI } from "~/APIs/bot";

import styles from "./LikeComment.module.scss";
import { useContext, useEffect, } from "react";
import InputField from "~/components/InputField/InputField";
import BotContext from "~/store/bot/BotContext";
import { setLikeComment, updateLikeComment } from "~/store/bot/botActions";
import { initLikeCommentState } from "~/types/bot";

const LikeComment: React.FC = () => {
    // const [likeComment, setLikeComment] = useState<LikeCommentInterface>(initLikeAndCommentState);
    const [bot, botDispatch] = useContext(BotContext)
    useEffect(() => {
        getBotAPI()
            .then(res => {
                if (res.status.toString().startsWith("2")) {
                    if (res.data) {
                        botDispatch(setLikeComment(res.data.likeComment));
                    }
                    else {
                        console.error(res.message);
                        setLikeComment(initLikeCommentState)
                    };
                } else {
                    console.error(res.message);
                    setLikeComment(initLikeCommentState)
                }
            })
    }, []);

    const handleChange = (path: string, value: boolean | number | string): void => {
        botDispatch(updateLikeComment(path, value));
    };

    // useEffect(() => {
    //     console.log(likeComment);
    // }, [likeComment]);

    return (
        <div className={styles.likeCommentContainer}>
            <div className={styles.contents}>
                <div className={`${styles.content} ${styles.newsFeed}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.newsFeed.isSelected}
                            className={styles.likeComment_newsFeed_isSelected}
                            id="likeComment_newsFeed_isSelected"
                            label="newsFeed"
                            onChange={(e) => handleChange("newsFeed.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.newsFeed.value}
                            className={styles.likeComment_newsFeed_value}
                            id="likeComment_newsFeed_value"
                            label="min"
                            onChange={(e) => handleChange("newsFeed.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.newsFeed.like.isSelected}
                            className={styles.likeComment_newsFeed_like_isSelected}
                            id="likeComment_newsFeed_like_isSelected"
                            label="like"
                            onChange={(e) => handleChange("newsFeed.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.newsFeed.like.value}
                            className={styles.likeComment_newsFeed_like_value}
                            id="likeComment_newsFeed_like_value"
                            label="count"
                            onChange={(e) => handleChange("newsFeed.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.newsFeed.comment.isSelected}
                            className={styles.likeComment_newsFeed_comment_isSelected}
                            id="likeComment_newsFeed_comment_isSelected"
                            label="comment"
                            onChange={(e) => handleChange("newsFeed.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.newsFeed.comment.value}
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
                            checked={bot.likeComment.watch.isSelected}
                            className={styles.likeComment_watch_isSelected}
                            id="likeComment_watch_isSelected"
                            label="watch"
                            onChange={(e) => handleChange("watch.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.watch.value}
                            className={styles.likeComment_watch_value}
                            id="likeComment_watch_value"
                            label="min"
                            onChange={(e) => handleChange("watch.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.watch.like.isSelected}
                            className={styles.likeComment_watch_like_isSelected}
                            id="likeComment_watch_like_isSelected"
                            label="like"
                            onChange={(e) => handleChange("watch.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.watch.like.value}
                            className={styles.likeComment_watch_like_value}
                            id="likeComment_watch_like_value"
                            label="count"
                            onChange={(e) => handleChange("watch.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.watch.comment.isSelected}
                            className={styles.likeComment_watch_comment_isSelected}
                            id="likeComment_watch_comment_isSelected"
                            label="comment"
                            onChange={(e) => handleChange("watch.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.watch.comment.value}
                            className={styles.likeComment_watch_comment_value}
                            id="likeComment_watch_comment_value"
                            label="count"
                            onChange={(e) => handleChange("watch.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.group}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.group.isSelected}
                            className={styles.likeComment_group_isSelected}
                            id="likeComment_group_isSelected"
                            label="group"
                            onChange={(e) => handleChange("group.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.group.value}
                            className={styles.likeComment_group_value}
                            id="likeComment_group_value"
                            label="min"
                            onChange={(e) => handleChange("group.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.group.like.isSelected}
                            className={styles.likeComment_group_like_isSelected}
                            id="likeComment_group_like_isSelected"
                            label="like"
                            onChange={(e) => handleChange("group.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.group.like.value}
                            className={styles.likeComment_group_like_value}
                            id="likeComment_group_like_value"
                            label="count"
                            onChange={(e) => handleChange("group.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.group.comment.isSelected}
                            className={styles.likeComment_group_comment_isSelected}
                            id="likeComment_group_comment_isSelected"
                            label="comment"
                            onChange={(e) => handleChange("group.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.group.comment.value}
                            className={styles.likeComment_group_comment_value}
                            id="likeComment_group_comment_value"
                            label="count"
                            onChange={(e) => handleChange("group.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.friend}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.friend.isSelected}
                            className={styles.likeComment_friend_isSelected}
                            id="likeComment_friend_isSelected"
                            label="friend"
                            onChange={(e) => handleChange("friend.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.friend.value}
                            className={styles.likeComment_friend_value}
                            id="likeComment_friend_value"
                            label="min"
                            onChange={(e) => handleChange("friend.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.friend.like.isSelected}
                            className={styles.likeComment_friend_like_isSelected}
                            id="likeComment_friend_like_isSelected"
                            label="like"
                            onChange={(e) => handleChange("friend.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.friend.like.value}
                            className={styles.likeComment_friend_like_value}
                            id="likeComment_friend_like_value"
                            label="count"
                            onChange={(e) => handleChange("friend.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.friend.comment.isSelected}
                            className={styles.likeComment_friend_comment_isSelected}
                            id="likeComment_friend_comment_isSelected"
                            label="comment"
                            onChange={(e) => handleChange("friend.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.friend.comment.value}
                            className={styles.likeComment_friend_comment_value}
                            id="likeComment_friend_comment_value"
                            label="count"
                            onChange={(e) => handleChange("friend.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.friend.poke.isSelected}
                            className={styles.likeComment_friend_poke_isSelected}
                            id="likeComment_friend_poke_isSelected"
                            label="poke"
                            onChange={(e) => handleChange("friend.poke.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.friend.poke.value}
                            className={styles.likeComment_friend_poke_value}
                            id="likeComment_friend_poke_value"
                            label="count"
                            onChange={(e) => handleChange("friend.poke.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.friend.pokeBack.isSelected}
                            className={styles.likeComment_friend_pokeBack_isSelected}
                            id="likeComment_friend_pokeBack_isSelected"
                            label="pokeBack"
                            onChange={(e) => handleChange("friend.pokeBack.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.friend.pokeBack.value}
                            className={styles.likeComment_friend_pokeBack_value}
                            id="likeComment_friend_pokeBack_value"
                            label="count"
                            onChange={(e) => handleChange("friend.pokeBack.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.page}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.page.isSelected}
                            className={styles.likeComment_page_isSelected}
                            id="likeComment_page_isSelected"
                            label="page"
                            onChange={(e) => handleChange("page.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.page.value}
                            className={styles.likeComment_page_value}
                            id="likeComment_page_value"
                            label="min"
                            onChange={(e) => handleChange("page.value", parseInt(e.target.value) || 0)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.page.url}
                            className={styles.likeComment_page_url}
                            id="likeComment_page_url"
                            label="url"
                            onChange={(e) => handleChange("page.url", e.target.value || "")}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.page.like.isSelected}
                            className={styles.likeComment_page_like_isSelected}
                            id="likeComment_page_like_isSelected"
                            label="like"
                            onChange={(e) => handleChange("page.like.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.page.like.value}
                            className={styles.likeComment_page_like_value}
                            id="likeComment_page_like_value"
                            label="count"
                            onChange={(e) => handleChange("page.like.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.page.comment.isSelected}
                            className={styles.likeComment_page_comment_isSelected}
                            id="likeComment_page_comment_isSelected"
                            label="comment"
                            onChange={(e) => handleChange("page.comment.isSelected", e.target.checked)}
                        />
                        <InputField
                            type="text"
                            value={bot.likeComment.page.comment.value}
                            className={styles.likeComment_page_comment_value}
                            id="likeComment_page_comment_value"
                            label="count"
                            onChange={(e) => handleChange("page.comment.value", parseInt(e.target.value) || 0)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.marketplace}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.marketplace}
                            className={styles.likeComment_marketplace_isSelected}
                            id="likeComment_marketplace_isSelected"
                            label="marketplace"
                            onChange={(e) => handleChange("marketplace", e.target.checked)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.notification}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.notification}
                            className={styles.likeComment_notification_isSelected}
                            id="likeComment_notification_isSelected"
                            label="notification"
                            onChange={(e) => handleChange("notification", e.target.checked)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.search}`}>
                    <div className={styles.section}>
                        <InputField
                            type="checkbox"
                            checked={bot.likeComment.search}
                            className={styles.likeComment_search_isSelected}
                            id="likeComment_search_isSelected"
                            label="search"
                            onChange={(e) => handleChange("search", e.target.checked)}
                        />
                    </div>
                </div>
                <div className={`${styles.content} ${styles.comments}`}>
                    <div className={styles.section}>
                        <InputField
                            type="text"
                            value={bot.likeComment.comments}
                            className={styles.likeComment_comments}
                            id="likeComment_comments"
                            label="comments"
                            onChange={(e) => handleChange("comments", e.target.value)}
                            reverseLabel={true}
                            placeHolder="comment_1 | comment_2"
                        />
                    </div>
                    <div className={styles.section}>
                        <InputField
                            type="text"
                            value={bot.likeComment.reactions}
                            className={styles.likeComment_reactions}
                            id="likeComment_reactions"
                            label="reactions"
                            onChange={(e) => handleChange("reactions", e.target.value)}
                            reverseLabel={true}
                            placeHolder="like | love | haha | wow | sad | angry"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LikeComment;