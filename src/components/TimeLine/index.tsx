import { useRef } from 'react';
import TimeLineItem from '../TimeLineItem';
import style from './style.module.css'
import { Clock, ImageSquare } from '@phosphor-icons/react';
import type { SelectedEventType, TimeLineItemType } from '../../types';
import ArrowButton from '../ArrowButton';

type TimeLineItemProps = {
  events: TimeLineItemType[]
  handleEventTimeLineItemClick: (eventItem: TimeLineItemType) => void
  selectedEvents: SelectedEventType
  handleGenerateSlider: () => void
}


function TimeLine({ 
  events, 
  handleEventTimeLineItemClick, 
  selectedEvents,
  handleGenerateSlider
}: TimeLineItemProps) {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = timelineRef.current;
    const scrollAmount = 300;

    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className={style.timeline__container}>
      <h2 className={style.timeline__title}>
        <Clock size={32} color="#1f1f1f" weight="fill" />
        Linha do tempo | Vista Superior
      </h2>
      <div className={style.timeline__wrapper}>
        <ArrowButton scroll={scroll} type={'left'}/>

        <div ref={timelineRef} className={style.timeline__wrapper_overflow}>
          <div className={style.timeline}>
            {events.map((event, index) => (
              <TimeLineItem 
                key={index} 
                item={event} 
                handleEventTimeLineItemClick={handleEventTimeLineItemClick} 
                selectedEvents={selectedEvents}
              />
            ))}
          </div>
        </div>

        <ArrowButton scroll={scroll} type={'right'}/>
      </div>
      <button
        onClick={handleGenerateSlider}
        className={style.timeline__button_generate_slider}
      >
        <ImageSquare size={16} color="#1f1f1f" weight="fill" />
        Gerar Slider
      </button>
    </div>
  )
}

export default TimeLine