import EventItem from "./EventItem";
import styles from "../../styles/Event.module.css";

export default function EventList(props){
    const {events} = props;

    return (
        <>
            <div className={styles.eventsContainer}>
                {events.map((event)=>{
                    return (
                        <EventItem key={event.id} event={event}/>
                    )
                })}
            </div>
        </>
    );
}