import styles from "./LikeAndComment.module.scss";

const newsFeed: React.FC = () => {
    return (
        <div className="content newsFeed">
            <label htmlFor="isSelected">news Feed</label>
            <input type="checkbox" name="isSelected" />
            <input type="text" name="value" />
        </div>
    )
}

const LikeAndComment: React.FC = () => {

    return (
        <div className={styles.likeCommentContainer}>
            <div className="contents">
                <div className="content newsFeed">
                    <label htmlFor="is"></label>
                </div>
            </div>
        </div>
    );
};

export default LikeAndComment;