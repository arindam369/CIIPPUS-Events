export async function getAllEvents() {
    return await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_URL}`).then((response)=>{
        return response.json();
    }).then((response)=>{
        let eventsArray = [];
        for(const key in response){
            eventsArray.push(response[key]);
        }
        return eventsArray;
    }).catch((err)=>{
        return err;
    })
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    const filteredEvents = await allEvents.filter(event => event.isFeatured);
    return filteredEvents;
}

export async function getFilteredEvents(dateFilter) {
    const allEvents = await getAllEvents();
    const { year, month } = dateFilter;
  
    let filteredEvents = await allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
}
  
export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return await allEvents.find((event) => event.id === id);
}