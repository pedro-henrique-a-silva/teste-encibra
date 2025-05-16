import style from './style.module.css'
import logoFooter from '../../assets/logo-footer.svg'

function Footer() {
  return (
    <footer className={style.footer__wrapper}>
      <div>
        <div>
          <img src={logoFooter} alt="Logo Footer" className={style.footer__logo} />
          <p className={style.footer_encibra__name}>
            Encibra
          </p>
        </div>
        <span className={style.footer_copy__right}>
          <strong>
            Fiscaliza
          </strong>
          <span></span>
          Encibra 2025 Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}

export default Footer