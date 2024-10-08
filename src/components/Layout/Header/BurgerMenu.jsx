import React, { useState } from "react"
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiSquareMore } from "react-icons/ci";
import styles from "../Header/burgerMenu.module.scss"
const BurgerMenu = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
    return(
        <div className={styles.burgerMenu}>
       <div className={`${styles.burgerMenuBtn} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
       <IoMenuSharp />
       </div>
       <div className={`${styles.menuContent} ${isOpen ? styles.show : ""}`}>
       <div className={styles.upHead}>
    <div className={styles.container}>
        <div className={styles.leftpart}>
            <ul>
                <li className={styles.foryou}><a className={styles.foryouLink} href="#">Sənin üçün</a></li>
                <li className={styles.forbusiness}><a href="#">Biznes üçün</a></li>
                <li><a href="#">Şirkət haqqında</a></li>
            </ul>
        </div>
        <div className={styles.rightpart}>
        <div className={styles.query}>
            <MdOutlineQuestionMark />
            </div>
            <div className={styles.modeTemplate}>
            <div className={styles.light}>
                <IoSunnyOutline />
                </div>
                <div className={styles.dark}>
                <CiDark />
                </div>
            </div>
            <div className={styles.language}>
                <select className={styles.lang}>
                    <option value="AZ">AZ</option>
                    <option value="EN">EN</option>
                    <option value="RU">RU</option>
                </select>
            </div>
            <div className={styles.welcome}>
            <FaUser /> Giriş
            </div>
        </div>
    </div>

   </div>
   <div className={styles.downHead}>
    <div className={styles.container}>
        <div className={styles.navigation}>
            <div className={styles.narLogo}>
<img src="https://media.licdn.com/dms/image/v2/D4E0BAQF80owxtRV0ow/company-logo_200_200/company-logo_200_200/0/1704955012345/narofficial_logo?e=2147483647&v=beta&t=85JEjOy6QVIpYixHzZmOypYH1BTWcky-uFm7L1mgSKs" alt="narlogo" />
            </div>
            <div className={styles.pagesLink}>
                <ul>
                    <li><a href="/definitions">Tariflər</a></li>
                    <li><a href="/internet">İnternet</a></li>
                    <li><a href="#">Xidmətlər</a></li>
                    <li><a href="#">Kampaniyalar</a></li>
                    <li><a href="#">Tədbiqlər</a></li>
                    <li><a href="#">Rouming</a></li>
                    <li><a href="#">Xəbərlər</a></li>
                </ul>
            </div>
        </div>
        <div className={styles.searchAndMore}>
          <form action="" className={styles.needSearch}>
          <div className={styles.search}>
                <input type="text" />
            </div>
            <button className={styles.searchBtn}>
            <CiSearch />
            </button>
          </form>
          <div className={styles.more}>
            <button>
            <CiSquareMore className={styles.moreIcon}/> Daha çox
            </button>
          </div>
        </div>
    </div>
   </div>
       </div>
       </div>
       
    )
}
export default BurgerMenu