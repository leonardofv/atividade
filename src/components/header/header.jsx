import S from './header.module.scss';
import Logo from '../../assets/escudo.png';
// import Search from '../../assets/search_input.png';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '../../pages/home/home';
import Phishing from '../../pages/phishing/phishing';
import Ransomware from '../../pages/ransomware/ransomware';
import GolpeRedeSocial from '../../pages//golpeRedeSocial/golpeRedeSocial';
import FraudeBancaria from '../../pages/fraudeBancaria/fraudeBancaria';
import GolpeCompras from '../../pages/golpesCompras/golpeCompras';
import RouboIdentidade from '../../pages/rouboIdentidade/rouboIdentidade';

export default function Header() {
    return (
        <BrowserRouter>
            <header className={S.container}>
                <img className={S.logo} src={Logo} alt="logo" />
                <h1 className={S.title}>CyberSegurança</h1>
                <p className={S.info}>Protegendo você contra os golpes digitais</p>

                <div className={S.search}>
                    <input className={S.input} type='text' placeholder='Pesquisar golpes'/>
                    {/* <img className={S.icon} src={Search} alt="" /> */}
                </div>
        
                <nav className={S.ContainerCategory}>
                    <ul className={S.categories}>
                        <li className={S.category}><Link className={S.Link} to="/">Home</Link></li>
                        <li className={S.category}><Link className={S.Link} to="/phishing">Phishing</Link></li>
                        <li className={S.category}><Link className={S.Link}  to="/ransomware">Ransomware</Link></li>
                        <li className={S.category}><Link className={S.Link}  to="/golpeRedeSocial">redes sociais</Link></li>
                        <li className={S.category}><Link className={S.Link}  to="/fraudeBancaria">Fraudes bancárias</Link></li>
                        <li className={S.category}><Link className={S.Link}  to="/golpeCompras">compras online</Link></li>
                        <li className={S.category}><Link className={S.Link}  to="/rouboIdentidade">Roubo de identidade</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/phishing" element={<Phishing />} />
                <Route path="/ransomware" element={<Ransomware />} />
                <Route path="/golpeRedeSocial" element={<GolpeRedeSocial />} />
                <Route path="/fraudeBancaria" element={<FraudeBancaria />} />
                <Route path="/golpeCompras" element={<GolpeCompras />} />
                <Route path="/rouboIdentidade" element={<RouboIdentidade />} />
            </Routes>
        </BrowserRouter>
   )
}