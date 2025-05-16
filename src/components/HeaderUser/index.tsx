import { List, UserCircle } from '@phosphor-icons/react'
import style from './style.module.css'

function HeaderUser() {
  return (
    <>
      <div className={style.header_menu_encibra_name}>
        <p>Encibra S/A</p>
      </div>
      <div className={style.header_user_info__wrapper}>
        <UserCircle size={48} color="#E3A600" weight="bold" />
        <div>
          <span className={style.header_menu_user_name}>Gestor da silva costa</span>
          <span>Engenheiro</span>
        </div>
      </div>
      <div className={style.header_menu_hanburguer}>
        <List size={24} color="#fff" weight="bold" />
      </div>
    </>
  )
}

export default HeaderUser