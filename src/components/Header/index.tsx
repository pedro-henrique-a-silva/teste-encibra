import HeaderNav from '../HeaderNav'
import style from './style.module.css'
import HeaderUser from '../HeaderUser'

function Header() {
  return (
    <header className={style.header__wrapper}>
      <div className={style.menu__wrapper_left_side}>
        <h1>My App</h1>
        <HeaderNav />
      </div>
      <div  className={style.menu__wrapper_right_side}>
        <HeaderUser/>
      </div>
    </header>
  )
}

export default Header