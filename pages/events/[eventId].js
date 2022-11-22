import EventDetails from "../../components/Events/EventDetails";
import styles from "../../styles/Event.module.css";
import ErrorAlert from "../../components/UI/ErrorAlert"
import { getFeaturedEvents, getEventById } from "../../helper/api-utils";
import Head from "next/head";

export default function EventDetailsPage(props){
    // const event = getEventById(id);
    const {event} = props;

    if(!event){
        return (
            // <ErrorAlert>
            //     <h3>No Event Found</h3>
            // </ErrorAlert>
            <h3 className={styles.center}>Loading...</h3>
        );
    }

    return (
        <>
            <Head>
                <title>{event.title + " | Events"}</title>
                <meta name="description" content={event.description}/>
            </Head>
            <h2 className={styles.center}>Event Details</h2>
            <div className={styles.eventDetailsContainer}>
                <EventDetails event={event}/>
            </div>
        </>
    );
}
export async function getStaticProps(context){
    const {params} = context;
    const eventID = params.eventId;
    const event = await getEventById(eventID);

    return {props: {event: event}}
}
export async function getStaticPaths(){
    const eventsArray = await getFeaturedEvents();
    const eventID_path = await eventsArray.map(event => ({params: {eventId: event.id}}));

    return {
        paths: eventID_path,
        fallback: true
    }
}