import styles from "../../styles/Event.module.css";
import Image from "next/image";


export default function EventDetails(props){
    const {event} = props;

    return (
        <>
            <div className={styles.eventDetailsBox}>
                <div className={styles.leftPart}>
                    <Image src={`/${event && event.image}`} alt="event_image" width={300} height={240} className={styles.image}/>
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.title}> 
                        <h3> {event && event.title} </h3>
                    </div>
                    <div className={styles.description}> 
                        <p> {event && event.description} </p>
                    </div>
                    <div className={styles.dateLocation}>
                        <h3 className={styles.date}>{event && event.date}</h3>
                        <h3 className={styles.location}>{event && event.location}</h3>
                    </div>
                    <div className="participants">
                        <h3>{event && event.participants} registered</h3>
                    </div>
                </div>
            </div>
        </>
    );
}