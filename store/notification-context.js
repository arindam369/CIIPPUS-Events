import React from "react";
import { useState } from "react";

const NotificationContext = React.createContext({
    notification: {},
    showNotification: (notificationData) => {},
    hideNotification: () => {}
})

export function NotificationContextProvider(props){
    const [notification, setNotification] = useState(null);
    function showNotification(notificationData){
        setNotification(notificationData);
    }
    function hideNotification(){
        setNotification(null);
    }

    const notificationContext = {
        notification: notification,
        showNotification: showNotification,
        hideNotification: hideNotification
    }

    return <NotificationContext.Provider value={notificationContext}>
        {props.children}
    </NotificationContext.Provider>
}

export default NotificationContext;