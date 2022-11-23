import styles from "../../styles/Home.module.css";
import NotificationContext from "../../store/notification-context";
import { useContext } from "react";

export default function Notification(){
    const notificationCtx = useContext(NotificationContext);

    const {notification} = notificationCtx;
    let statusClasses = "";
    if(notification){
        if(notification.status === "pending"){
            statusClasses = styles.pending;
        }
        if(notification.status === "success"){
            statusClasses = styles.success;
        }
        if(notification.status === "error"){
            statusClasses = styles.error;
        }
    }

    const activeClasses = `${styles.notificationContainer} ${statusClasses}`;

    return (
        <>
            {notification && 
                <div className={activeClasses}>
                    <div className={styles.notificationTitle}>{notification.title}</div>
                    <div className={styles.notificationMessage}>{notification.message}</div>
                </div>
            }
        </>
    );
}