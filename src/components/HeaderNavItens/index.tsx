import React from 'react'
import style from './style.module.css'

type HeaderNavItensProps = {
  children: React.ReactNode
  src: string
}

function HeaderNavItens({ children, src }: HeaderNavItensProps) {
  return (
    <li className={style.menu_item__wrapper}>
      <a href={src}>
        {children}
      </a>
    </li>
  )
}

export default HeaderNavItens