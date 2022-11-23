import { useContext, useRef } from "react";
import styles from "../styles/Home.module.css";
import NotificationContext from "../store/notification-context";

export default function HomePage() {
  const notificationCtx = useContext(NotificationContext);

  const emailRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;

    notificationCtx.showNotification({
      status: "pending",
      title: "Pending",
      message: "Subscribing...",
    });

    setTimeout(() => {
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          // console.log(response);
          emailRef.current.value = "";
          if(response.type === "error"){
            notificationCtx.showNotification({
              status: "error",
              title: "Error",
              message: response.message || "Something went wrong"
            });
          }
          if(response.type === "success"){
          notificationCtx.showNotification({
            status: "success",
            title: "Success",
            message: "Successfully subscribed CIIPPUS events",
          });
        }
          setTimeout(() => {
            notificationCtx.hideNotification();
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          notificationCtx.showNotification({
            status: "error",
            title: "Error",
            message: "Something went wrong...",
          });
          setTimeout(() => {
            notificationCtx.hideNotification();
          }, 3000);
        });
    }, 3000);
  }

  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="responsive">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L34.3,213.3C68.6,203,137,181,206,170.7C274.3,160,343,160,411,176C480,192,549,224,617,240C685.7,256,754,256,823,234.7C891.4,213,960,171,1029,154.7C1097.1,139,1166,149,1234,149.3C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg> */}

      <h1 className={styles.logoHeading}>
        Welcome to <span className={styles.head}>CIIPPUS</span>{" "}
      </h1>
      <div className={styles.newsletterForm}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email-id">
            Subscribe your email so that you dont miss anything
          </label>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              id="email-id"
              ref={emailRef}
            />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </>
  );
}
