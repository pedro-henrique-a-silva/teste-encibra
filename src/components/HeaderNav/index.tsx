import { House, Option, Scroll } from '@phosphor-icons/react'
import style from './style.module.css'
import HeaderNavItens from '../HeaderNavItens'

type HeaderNavProps = {
  menuIconSize?: number
}

function HeaderNav({ menuIconSize = 18 }: HeaderNavProps) {
  return (
    <nav className={style.menu__wrapper}>
      <ul>
        <HeaderNavItens src='#'>
          <House size={menuIconSize} color="#1f1f1f" weight="fill" />
          Inicio
        </HeaderNavItens>
        <HeaderNavItens src='#'>
            <Scroll size={menuIconSize} color="#1f1f1f" weight="fill" />
            Contratos
        </HeaderNavItens>
        <HeaderNavItens src='#'>
            <Option size={menuIconSize} color="#1f1f1f" weight="fill" />
            Opção A
        </HeaderNavItens>
        <HeaderNavItens src='#'>
            <Option size={menuIconSize} color="#1f1f1f" weight="fill" />
            Opção B
        </HeaderNavItens>
      </ul>
    </nav>
  )
}

export default HeaderNav