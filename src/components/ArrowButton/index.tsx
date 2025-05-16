import style from './style.module.css'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

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
        <ArrowLeft size={24} color="#1f1f1f" weight="bold" />
      ) : (
        <ArrowRight size={24} color="#1f1f1f" weight="bold" />
      )}
    </button>
  )
}

export default ArrowButton