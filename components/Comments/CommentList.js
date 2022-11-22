import styles from "../../styles/Event.module.css";
import Image from "next/image";

export default function CommentList(props){
    const {comments} = props;

    return (
        <>
            <br /><br />
            <h3 className={styles.center}>Comments</h3>
            <div className={styles.commentsContainer}>        
                <ul className={styles.commentsBox}>
                    {comments && comments.map((comment)=>{
                        return (
                            <li className={styles.comment} key={comment.id}>
                                <div className={styles.commentDp}> <Image src="/images/user.png" width={25} height={25} alt="dp"/>  </div>
                                <div className={styles.commentMessage}>
                                    <div className={styles.authorName}> {comment.name} </div>
                                    <div className={styles.authorMessage}> {comment.comment} </div>
                                    {/* <div className={styles.authorMessage}> Nice project ...  I have never seen such a project in my life... Thanks guys for making our event great</div> */}
                                </div>
                            </li>
                        );
                    })}

                </ul>
            </div>
        </>
    );
}