import { ImageSquare } from "@phosphor-icons/react"
import style from './style.module.css'
import type { SelectedEventType, TimeLineItemType } from "../../types"


type TimeLineItemProps = {
  item: TimeLineItemType
  handleEventTimeLineItemClick: (eventItem: TimeLineItemType) => void
  selectedEvents: SelectedEventType
}
function TimeLineItem({ item, handleEventTimeLineItemClick, selectedEvents }: TimeLineItemProps) {

  const isSelected = selectedEvents.eventOne?.id === item.id || selectedEvents.eventTwo?.id === item.id;

  return (
    <div className={style.item__container}>
      <p className={style.timeline_item__status}>{item.title}</p>
      <p className={style.timeline_item__date}>{item.date}</p>
      <div className={isSelected ? style.timeline_item__icon__pressed : style.timeline_item__icon} onClick={() => handleEventTimeLineItemClick(item)}>
        <ImageSquare size={32} color="#fbeb0b" />
      </div>
    </div>
  )
}

export default TimeLineItem