import { useEffect, useState } from 'react';
import ImageComparisson from './components/ImageComparisson'
import type { SelectedEventType, TimeLineItemType } from './types';
import TimeLine from './components/TimeLine';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import Footer from './components/Footer';
import { fetchData } from './api/api';

// const eventsMockData = [
//   { 
//     id: 1,
//     title: 'Visão geral da ETE UNA', 
//     date: '15/01/2025', 
//     imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg',
//   },
//   { 
//     id: 2,
//     title: 
//     'Visão geral da ETE UNA', 
//     date: '15/02/2025', 
//     imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg',
//   },
//   {
//     id: 3,
//     title: 
//     'Visão geral da ETE UNA', 
//     date: '16/03/2025', 
//     imageUrl: 'https://thumbs.dreamstime.com/b/canteiro-de-obras-vis%C3%A3o-est%C3%A1tica-a%C3%A9rea-construtor-uma-pessoa-s%C3%B3-no-telhado-constroem-pr%C3%A9dios-comerciais-alto-n%C3%ADvel-em-verde-326096482.jpg' 
//   },
//   { 
//     id: 4,
//     title: 'Visão geral da ETE UNA', 
//     date: '17/03/2025', 
//     imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p1/6904456-canteiro-de-obras-de-um-edificio-residencial-vista-de-topo-do-drone-foto.jpg' 
//   },
//   {
//     id: 5,
//     title: 'Visão geral da ETE UNA', 
//     date: '18/03/2025', 
//     imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-de-um-canteiro-de-obras-fazendo-um-novo-predio_928167-49.jpg' 
//   },
//   { 
//     id: 6,
//     title: 'Visão geral da ETE UNA', 
//     date: '16/05/2025', 
//     imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg' 
//   },
//   {
//     id: 7,
//     title: 'Visão geral da ETE UNA', 
//     date: '16/06/2025', 
//     imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
//   },
//   { 
//     id: 8,
//     title: 'Visão geral da ETE UNA', 
//     date: '16/07/2025', 
//     imageUrl: 'https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/18/32/6e/37/29/v1_E10/E104GGG.jpg?w=1400&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=651df49aab0d181f671bbc4e13b3ac148929ca2e4294829b3557cd674cfdea54' 
//   },
//   { 
//     id: 9,
//     title: 'Visão geral da ETE UNA', 
//     date: '16/08/2025', 
//     imageUrl: 'https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/73/e7/cb/b0/45/v1_E10/E104H1S.jpg?w=1400&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=e4b48fd716b2e6f08f4f4953f4a5255e7ee78bff78fd21e6bdaa0e91cf44874c' 
//   },
//   { 
//     id: 10,
//     title: 
//     'Visão geral da ETE UNA', 
//     date: '16/09/2025', 
//     imageUrl: 'https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/77/19/1b/2f/a5/v1_E10/E104GQ0.jpg?w=1400&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=442d657f389b33856744b25f04edc00b150f5f75c6493d8ba2df3f4a35a5f357' 
//   },
//   { 
//     id: 11,
//     title: 
//     'Visão geral da ETE UNA', 
//     date: '16/10/2025', 
//     imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
//   },
//   { 
//     id: 12,
//     title: 'Visão geral da ETE UNA',
//     date: '16/11/2025', 
//     imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-das-obras-de-construcao-da-nova-fundacao-de-concreto-da-casa-no-canteiro-de-obras_127089-16509.jpg' 
//   },
//   { 
//     id: 13,
//     title: 'Visão geral da ETE UNA', 
//     date: '17/12/2025', 
//     imageUrl: 'https://img.freepik.com/fotos-premium/vista-aerea-de-cima-para-baixo-de-um-canteiro-de-obras_470301-109.jpg' 
//   },
// ];

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
