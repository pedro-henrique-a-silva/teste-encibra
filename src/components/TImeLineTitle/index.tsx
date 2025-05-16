import { Clock } from '@phosphor-icons/react'
import style from './style.module.css'

type TimeLineTitleProps = {
  title?: string
}

function TimeLineTitle({ title }: TimeLineTitleProps) {
  return (
    <h2 className={style.timeline__title}>
      <Clock size={32} color="#1f1f1f" weight="fill" />
      {title}
    </h2>
  )
}

export default TimeLineTitle