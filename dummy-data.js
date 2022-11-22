const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Pass The Baton',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'SMCC Building, JU Salt Lake Campus',
      date: '2023-03-12',
      image: 'images/event1.jpg',
      participants: 890,
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Hackathon',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'Power Building, JU Salt Lake Campus',
      date: '2023-03-13',
      image: 'images/event2.jpg',
      participants: 677,
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Fifa 2023',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'FETSU Union Room, Jadavpur University',
      date: '2023-04-13',
      image: 'images/event3.jpg',
      participants: 1237,
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    console.log(dateFilter);
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }