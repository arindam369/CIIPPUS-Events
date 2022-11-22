import styles from "../../styles/Event.module.css";
import Image from "next/image";
import { useRouter } from "next/router";


export default function EventItem(props){
    const {event} = props;
    const router = useRouter();

    function exploreEvent(){
        router.push(`/events/${event.id}`);
    }


    return (
        <>
            <div className={styles.eventBox}>
                <div className={styles.leftPart}>
                    <Image src={"/"+event.image} alt="event_image" width={300} height={240} className={styles.image}/>
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.title}> 
                        <h3> {event.title} </h3>
                    </div>
                    <div className={styles.dateLocation}>
                        <h3 className={styles.date}>{event.date}</h3>
                        <h3 className={styles.location}>{event.location}</h3>
                    </div>
                    <div className={styles.buttonBox}>
                        <div className={styles.button} onClick={exploreEvent}>Explore Event</div>
                    </div>
                </div>
            </div>
        </>
    );
}