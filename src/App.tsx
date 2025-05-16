import { useState } from 'react';
import ImageComparisson from './components/ImageComparisson'
import type { SelectedEventType, TimeLineItemType } from './types';
import TimeLine from './components/TimeLine';
import Header from './components/Header';

const eventsMockData = [
  { 
    id: 1,
    title: 'Visão geral da ETE UNA', 
    date: '15/01/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg',
  },
  { 
    id: 2,
    title: 
    'Visão geral da ETE UNA', 
    date: '15/02/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg',
  },
  {
    id: 3,
    title: 
    'Visão geral da ETE UNA', 
    date: '16/03/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
  },
  { 
    id: 4,
    title: 'Visão geral da ETE UNA', 
    date: '17/03/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg' 
  },
  {
    id: 5,
    title: 'Visão geral da ETE UNA', 
    date: '18/03/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
  },
  { 
    id: 6,
    title: 'Visão geral da ETE UNA', 
    date: '16/05/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg' 
  },
  {
    id: 7,
    title: 'Visão geral da ETE UNA', 
    date: '16/06/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
  },
  { 
    id: 8,
    title: 'Visão geral da ETE UNA', 
    date: '16/07/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg' 
  },
  { 
    id: 9,
    title: 'Visão geral da ETE UNA', 
    date: '16/08/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
  },
  { 
    id: 10,
    title: 
    'Visão geral da ETE UNA', 
    date: '16/09/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg' 
  },
  { 
    id: 11,
    title: 
    'Visão geral da ETE UNA', 
    date: '16/10/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
  },
  { 
    id: 12,
    title: 'Visão geral da ETE UNA',
    date: '16/11/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg' 
  },
  { 
    id: 13,
    title: 'Visão geral da ETE UNA', 
    date: '17/12/2025', 
    imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
  },
];

function App() {
  const [events, setEvents] = useState<TimeLineItemType[]>(eventsMockData)
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

  return (
    <>
      <Header/>
      <TimeLine 
        events={events} 
        handleEventTimeLineItemClick={handleEventTimeLineItemClick}
        selectedEvents={selectedEvents}
        handleGenerateSlider={handleGenerateSlider}
      />
      {showSlider && (
         <ImageComparisson selectedEvents={selectedEvents} />
      )}
    </>
  )
}

export default App
