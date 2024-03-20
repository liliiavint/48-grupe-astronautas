import  style from'./Astronautas.module.css'
import logo from './logo.png';



function Header(){
    return (
        <header className={style.container}>
            <img className={style.logo} src={logo} alt="Logo" />
            <nav className={style.mainNav}>
                <a className={style.navLink + ' active'} href="/">About</a>
                <a className={style.navLink} href="/">Portfolio</a>
                <a className={style.navLink} href="/">Job</a>
                <a className={style.navLink} href="/">Contact</a>
            </nav>
        </header>
    );
}
export { Header}