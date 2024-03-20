import  style from'./Astronautas.module.css'

function Footer (){
    return (
        <footer className={style.container}>
        <div className={style.socials}>
            <a className={style.socialLink} href="/">
                <i className={style.socialLink + ' fa faFacebookSquare'} aria-hidden="true"></i>
            </a>
            <a className={style.socialLink} href="/">
                <i className={style.socialLink + ' fa faTwitter'} aria-hidden="true"></i>
            </a>
            <a className={style.socialLink} href="/">
                <i className={style.socialLink + ' fa faInstagram'} aria-hidden="true"></i>
            </a>
            <a className={style.socialLink} href="/">
                <i className={style.socialLink + 'fa faLinkedinSquare'} aria-hidden="true"></i>
            </a>
        </div>
        
        <p className={style.copyrightText}>&copy; 2024 - All rights reserved</p>
    </footer>
    );
}
export { Footer }