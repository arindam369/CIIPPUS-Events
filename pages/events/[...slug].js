import styles from "../../styles/Event.module.css";
import { useRouter } from "next/router";
import EventList from "../../components/Events/EventList";
import { getFilteredEvents } from "../../helper/api-utils";
import ErrorAlert from "../../components/UI/ErrorAlert";
import Head from "next/head";

export default function FilteredEventsPage(props){
    const router = useRouter();
    // const slug = router.query.slug;

    // if(!slug){
    //     return <h3 className={styles.center}>Loading...</h3>
    // }
    // const year = +slug[0];
    // const month = +slug[1];
    // if(isNaN(year) || isNaN(month) || year <2022 || year>2023 || month<1 || month>12){
    //     return (
    //         <ErrorAlert>
    //             <h3 className={styles.center}>Invalid Filter Input</h3>
    //         </ErrorAlert>
    //     );
    // }

    // const filteredEvents = getFilteredEvents({year, month});
    // if(!filteredEvents || filteredEvents.length===0){
    //     return (
    //         <ErrorAlert>
    //             <h3 className={styles.center}>No Event Found</h3>
    //         </ErrorAlert>
    //     );
    // }
    const {filteredEvents, year, month, error} = props;
    if(error){
        return (
            <ErrorAlert>
                <h3 className={styles.center}>{error}</h3>
            </ErrorAlert>
        );
    }

    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    function showAllEvents(){
        router.push("/events");
    }
    
    return (
        <>
            <Head>
                <title>{"Events in " + monthArray[month-1]+", "+year}</title>
                <meta name="description" content={"Events in " + monthArray[month-1]+", "+year}/>
            </Head>
            <h2 className={styles.center}>Events in {monthArray[month-1]}, {year}</h2>
            <div className={styles.showEventBox}>
                <div className={styles.button3} onClick={showAllEvents}>Show All Events</div>
            </div>
            <EventList events={filteredEvents}/>
        </>
    );
}
export async function getServerSideProps(context){
    const {params} = context;
    if(params.slug.length < 2){
        return {
            notFound: true
        }
    }

    const year = +params.slug[0];
    const month = +params.slug[1];
    if(isNaN(year) || isNaN(month) || year <2022 || year>2023 || month<1 || month>12){
        return {
            props: {error: "Invalid Filter Input"}
        }
    }

    const filteredEvents = await getFilteredEvents({year, month});
    if(!filteredEvents || filteredEvents.length===0){
        return {
            props: {error: "No Event Found"}
        }
    }

    return {
        props: {filteredEvents: filteredEvents, year: year, month: month}
    }
}