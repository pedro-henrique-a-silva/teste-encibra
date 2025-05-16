import { ArrowUUpLeft } from "@phosphor-icons/react"
import style from './style.module.css'

function PageTitle() {
  return (
    <div className={style.page_title__wrapper}>
      <ArrowUUpLeft size={32} color="#1f1f1f" weight="bold" />
      <div>
        <span className={style.page_title__breadcrumbs}>
          {"Início > contatos > PJ-24-14/002 > Timeline > Vista superior" }
        </span>
        <div>
          <h2>Timeline | Vista Superior</h2>
        </div>
      </div>
    </div>
  )
}

export default PageTitle