import S from './header.module.scss';
import Logo from '../../assets/escudo.png';
import Search from '../../assets/search_input.png';

export default function Header() {
    return (

        <header className={S.container}>
            <img className={S.logo} src={Logo} alt="logo" />

            <h1 className={S.title}>CyberSegurança</h1>
            <p className={S.info}>Protegendo você contra os golpes digitais</p>

            <div className={S.search}>
                <input className={S.input} type='text' placeholder='Pesquisar golpes'/>
                {/* <img className={S.icon} src={Search} alt="" /> */}
            </div>
        </header>

   )
}