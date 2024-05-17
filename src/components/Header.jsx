import styles from './Header.module.css'

import Logo from '../assets/Ativo 1.svg'
export function Header(){
    return(
        <header className={styles.header}>
            <img src= {Logo} alt="Logotipo do Ignite" />
        </header>
    );


}