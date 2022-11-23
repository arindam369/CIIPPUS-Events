import { useContext, useEffect, useState } from "react";
import EventDetails from "../../components/Events/EventDetails";
import styles from "../../styles/Event.module.css";
// import ErrorAlert from "../../components/UI/ErrorAlert"
import { getFeaturedEvents, getEventById } from "../../helper/api-utils";
import Head from "next/head";
import CommentForm from "../../components/Comments/CommentForm";
import CommentList from "../../components/Comments/CommentList";
import NotificationContext from "../../store/notification-context";

export default function EventDetailsPage(props) {
  // const event = getEventById(id);
  const { event } = props;
  const [visibleCommentForm, setVisibleCommentForm] = useState(false);
  const [comments, setComments] = useState([]);
  const notificationCtx = useContext(NotificationContext);

  function toggleVisibleForm() {
    setVisibleCommentForm(!visibleCommentForm);
  }

  useEffect(() => {
    if (event) {
      fetch(`/api/comment/${event.id}`)
        .then((res) => res.json())
        .then((response) => {
          // console.log(response);
          setComments(response.comment);
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  }, []);

  if (!event) {
    return (
      // <ErrorAlert>
      //     <h3>No Event Found</h3>
      // </ErrorAlert>
      <h3 className={styles.center}>Loading ...</h3>
    );
  }

  function handleFormSubmit(commentData) {
    notificationCtx.showNotification({
      status: "pending",
      title: "Pending",
      message: "Posting ...",
    });

    setTimeout(() => {
      fetch(`/api/comment/${event.id}`, {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.type === "error") {
            notificationCtx.showNotification({
              status: "error",
              title: "Error",
              message: response.message || "Something went wrong",
            });
          }
          if (response.type === "success") {
            notificationCtx.showNotification({
              status: "success",
              title: "Success",
              message: "Successfully added your comment",
            });
            fetch(`/api/comment/${event.id}`)
              .then((res) => res.json())
              .then((response) => {
                setComments(response.comment);
              })
              .catch((err) => {
                throw new Error("error occurred");
              });
          }
          setTimeout(() => {
            notificationCtx.hideNotification();
          }, 3000);
        })
        .catch((err) => {
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
      <Head>
        <title>{event.title + " | Events"}</title>
        <meta name="description" content={event.description} />
      </Head>
      <h2 className={styles.center}>Event Details</h2>
      <div className={styles.eventDetailsContainer}>
        <EventDetails event={event} />
      </div>
      {!visibleCommentForm && (
        <div className={styles.center}>
          <button className={styles.button5} onClick={toggleVisibleForm}>
            Post Comment
          </button>
        </div>
      )}
      {visibleCommentForm && (
        <CommentForm onCancel={toggleVisibleForm} onSubmit={handleFormSubmit} />
      )}
      <br />
      <CommentList comments={comments} />
    </>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const eventID = params.eventId;
  const event = await getEventById(eventID);
  const notFound = event ? false : true;

  return { props: { event: event }, notFound };
}
export async function getStaticPaths() {
  const eventsArray = await getFeaturedEvents();
  const eventID_path = await eventsArray.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: eventID_path,
    fallback: true,
  };
}
