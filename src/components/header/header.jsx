import S from './header.module.scss';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/escudo.png';
import Home from '../../pages/home/home';
import Phishing from '../../pages/phishing/phishing';
import Ransomware from '../../pages/ransomware/ransomware';
import GolpeRedeSocial from '../../pages/golpeRedeSocial/golpeRedeSocial';
import FraudeBancaria from '../../pages/fraudeBancaria/fraudeBancaria';
import GolpeCompras from '../../pages/golpesCompras/golpeCompras';
import RouboIdentidade from '../../pages/rouboIdentidade/rouboIdentidade';

function Header() {
    const location = useLocation();

    const menuItems = [
        { path: '/phishing', label: 'Phishing' },
        { path: '/ransomware', label: 'Ransomware' },
        { path: '/golpeRedeSocial', label: 'Redes Sociais' },
        { path: '/fraudeBancaria', label: 'Fraude' },
        { path: '/golpeCompras', label: 'Compras' },
        { path: '/rouboIdentidade', label: 'Identidade' },
    ];

    return (
        <header className={S.container}>
            <img className={S.logo} src={Logo} alt="logo" />
            <h1 className={S.title}>CyberSegurança</h1>
            <p className={S.info}>Protegendo você contra os golpes digitais</p>

            <nav className={S.ContainerCategory}>
                <ul className={S.categories}>
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li className={S.category} key={item.path}>
                                <Link className={S.Link} to={isActive ? '/' : item.path}>
                                    {isActive ? 'Home' : item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/phishing" element={<Phishing />} />
                <Route path="/ransomware" element={<Ransomware />} />
                <Route path="/golpeRedeSocial" element={<GolpeRedeSocial />} />
                <Route path="/fraudeBancaria" element={<FraudeBancaria />} />
                <Route path="/golpeCompras" element={<GolpeCompras />} />
                <Route path="/rouboIdentidade" element={<RouboIdentidade />} />
            </Routes>
        </Router>
    );
}