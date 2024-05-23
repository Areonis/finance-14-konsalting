import { useNavigate } from 'react-router-dom'
import CustomLink from '../../links/CustomLink'
import styles from './Header.module.scss'
import logo from '../../../assets/3.png'

export const companyName = 'MyCompany'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <div className={styles.companyBlock} onClick={() => navigate('/')}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <h2>ОсОО "Аудит-Консалтинг"</h2>
      </div>
      <div className={styles.logoBlock} onClick={() => navigate('/')}></div>

      <nav className={styles.navMenu}>
        <div> </div>
        <div></div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CustomLink to="/requisites" className="white">
            Реквизиты
          </CustomLink>
          <CustomLink to="/policy-page" className="white">
            Политика конфиденциальности
          </CustomLink>
        </div>
      </nav>
    </div>
  )
}
