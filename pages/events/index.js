import EventList from "../../components/Events/EventList";
import EventSearch from "../../components/Events/EventSearch";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../../helper/api-utils";
import Head from "next/head";

export default function EventsPage(props){
    const {events} = props;
    // const events = getAllEvents();
    const router = useRouter();

    function filterSearch(year, month){
        router.push(`/events/${year}/${month}/`);
    }

    return (
        <>
            <Head>
                <title>CIIPPUS | Events</title>
                <meta property="og:title" content="CIIPPUS | Events" />
                <meta property="og:description" content="Different Events organised by FETSU in CIIPPUS, Jadavpur University." />
            </Head>
            <EventSearch onFilterSearch={filterSearch}/>
            <EventList events={events}/>
        </>
    );
}

export async function getStaticProps(){
    const allFeaturedEvents = await getFeaturedEvents();

    return {
        props: {events: allFeaturedEvents}
    }
}