import { useRef, useState } from "react";
import styles from "../../styles/Event.module.css";

export default function CommentForm(props){

    function handleCancel(){
        props.onCancel();
    }

    const [error, setError] = useState(null);

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const commentInputRef = useRef();

    function handleFormSubmit(e){
        e.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const comment = commentInputRef.current.value;

        if(name.trim()==="" || email.trim()===""|| comment.trim()===""|| !email.includes("@")){
            setError("Invalid Input");
            return;
        }
        setError(null);
        const commentData = {
            name: name,
            email: email,
            comment: comment
        }
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        commentInputRef.current.value = "";
        props.onSubmit(commentData);
    }

    return (
        <>
            <div className={styles.commentFormContainer}>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.halfInputs}>
                        <div className={styles.halfInput}>
                            <label htmlFor="comment-name">Name</label>
                            <input type="text" placeholder="Enter your name" id="comment-name" ref={nameInputRef}/>
                        </div>
                        <div className={styles.halfInput}>
                            <label htmlFor="comment-email">Email</label>
                            <input type="text" placeholder="Enter your email" id="comment-email" ref={emailInputRef}/>
                        </div>
                    </div>
                    <div className={styles.fullInput}>
                        <label htmlFor="comment-comment">Comment</label>
                        <textarea cols="30" rows="6" placeholder="Write your comment" id="comment-comment" className={styles.textarea} ref={commentInputRef}/>
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.commentButtonBox}>
                        <button className={styles.postBtn}>Post</button>
                        <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
}