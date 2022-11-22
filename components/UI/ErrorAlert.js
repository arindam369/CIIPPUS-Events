import styles from "../../styles/Home.module.css";

export default function ErrorAlert(props){
    return (
        <>
            <div className={styles.errorAlertContainer}>
                <div className={styles.errorAlertBox}>
                    {props.children}
                </div>
            </div>
        </>
    );
}