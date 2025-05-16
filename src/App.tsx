import { useEffect, useState } from 'react';
import ImageComparisson from './components/ImageComparisson'
import type { SelectedEventType, TimeLineItemType } from './types';
import TimeLine from './components/TimeLine';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import Footer from './components/Footer';
import { fetchData } from './api/api';
import { parse } from 'date-fns';

function App() {
  const [events, setEvents] = useState<TimeLineItemType[]>([])
  const [showSlider, setShowSlider] = useState(false);

  const [selectedEvents, setSelectedEvents] = useState<SelectedEventType>({});

  function handleEventTimeLineItemClick(eventItem: TimeLineItemType) {
    if (selectedEvents.eventOne && selectedEvents.eventTwo) {
      setSelectedEvents({ eventOne: eventItem });
      return;
    }

    if (!selectedEvents.eventOne) {
      setSelectedEvents({ eventOne: eventItem });
      return;
    }

    if (!selectedEvents.eventTwo) {
      setSelectedEvents({ ...selectedEvents, eventTwo: eventItem });
      return;
    }
  }

  function handleGenerateSlider() {
    setShowSlider(!showSlider);
  }

  useEffect(() => {
    const getEventsFromApi = async () => {
      const eventsData = await fetchData('/topview');

      eventsData.sort((a: TimeLineItemType, b: TimeLineItemType) => {
        const dateEventA =  parse(a.date, 'dd/MM/yyyy', new Date());
        const dateEventB = parse(b.date, 'dd/MM/yyyy', new Date());

        return dateEventA.getTime() - dateEventB.getTime();
      })

      setEvents(eventsData);
    }

    getEventsFromApi();
  }, []);

  return (
    <>
      <Header/>
      <PageTitle />
      <TimeLine 
        events={events} 
        handleEventTimeLineItemClick={handleEventTimeLineItemClick}
        selectedEvents={selectedEvents}
        handleGenerateSlider={handleGenerateSlider}
      />
      {showSlider && (
         <ImageComparisson selectedEvents={selectedEvents} />
      )}
      <Footer />
    </>
  )
}

export default App
