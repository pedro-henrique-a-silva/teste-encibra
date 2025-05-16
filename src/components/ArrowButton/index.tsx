import style from './style.module.css'
import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react'

type ArrowButtonProps = {
  scroll: (direction: 'left' | 'right') => void
  type: 'left' | 'right'
}

function ArrowButton({scroll, type}: ArrowButtonProps) {
  return (
    <button
      className={`${type === 'left' ? style.timeline__button__previous : style.timeline__button__next} ${style.timeline__button}`}
      onClick={() => scroll(type)}
      >
      {type === 'left' ? (
        <ArrowCircleLeft size={40} color="#1f1f1f" weight="fill" />
      ) : (
        <ArrowCircleRight size={40} color="#1f1f1f" weight="fill" />
      )}
    </button>
  )
}

export default ArrowButton