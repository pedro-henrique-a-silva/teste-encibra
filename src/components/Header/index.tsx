import HeaderNav from '../HeaderNav'
import style from './style.module.css'
import HeaderUser from '../HeaderUser'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className={style.header__wrapper}>
      <div className={style.menu__wrapper_left_side}>
        <img src={logo} alt="logotipo fiscaliza" />
        <HeaderNav />
      </div>
      <div  className={style.menu__wrapper_right_side}>
        <HeaderUser/>
      </div>
    </header>
  )
}

export default Header