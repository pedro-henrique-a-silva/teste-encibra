import { ImageSquare } from "@phosphor-icons/react"
import style from './style.module.css'

type Items = {
  status: string, 
  date: string
}

type TimeLineItemProps = {
  item: Items
}
function TimeLineItem({ item }: TimeLineItemProps) {
  return (
    <div className={style.item__container}>
      <p className={style.timeline_item__status}>{item.status}</p>
      <p className={style.timeline_item__date}>{item.date}</p>
      <div className={style.timeline_item__icon}>
        <ImageSquare size={32} color="#fbeb0b" />
      </div>
    </div>
  )
}

export default TimeLineItem