import { House, Option, Scroll } from '@phosphor-icons/react'
import style from './style.module.css'
import HeaderNavItens from '../HeaderNavItens'

function HeaderNav() {
  const iconsSize = 18
  return (
    <nav className={style.menu__wrapper}>
      <ul>
        <HeaderNavItens src='#'>
          <House size={iconsSize} color="#1f1f1f" weight="fill" />
          Inicio
        </HeaderNavItens>
        <HeaderNavItens src='#'>
            <Scroll size={iconsSize} color="#1f1f1f" weight="fill" />
            Contratos
        </HeaderNavItens>
        <HeaderNavItens src='#'>
            <Option size={iconsSize} color="#1f1f1f" weight="fill" />
            Opção A
        </HeaderNavItens>
        <HeaderNavItens src='#'>
            <Option size={iconsSize} color="#1f1f1f" weight="fill" />
            Opção B
        </HeaderNavItens>
      </ul>
    </nav>
  )
}

export default HeaderNav