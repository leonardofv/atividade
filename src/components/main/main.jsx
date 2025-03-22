import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import S from './main.module.scss';

import Phishing from '../../pages/phishing/phishing';
import Ransomware from '../../pages/ransomware/ransomware';
import GolpeRedeSocial from '../../pages//golpeRedeSocial/golpeRedeSocial';
import FraudeBancaria from '../../pages/fraudeBancaria/fraudeBancaria';
import GolpeCompras from '../../pages/golpesCompras/golpeCompras';
import RouboIdentidade from '../../pages/rouboIdentidade/rouboIdentidade';

export default function Main() {
    return (
        <BrowserRouter>
            <main>
                <h1 className={S.alert}>Alertas</h1>
                <section className={S.sectionCards}>
                    <article className={S.card}>
                       <h2 className={S.title}>Phishing</h2>
                       <p className={S.info}>Envio de e-mails ou mensagens falsas para enganar a vítima e roubar informações pessoais, como senhas e dados bancários.</p>
            
                        <div className={S.linha}></div>
                       <p className={S.info2}>
                            Os criminosos enviam e-mails ou mensagens que imitam instituições confiáveis, como bancos e empresas conhecidas, induzindo a vítima a clicar em links falsos e fornecer dados sigilosos.
                       </p>
                    </article>
                    <article className={S.card}>
                       <h2 className={S.title}>Ransomware</h2>
                       <p className={S.info}>Ataque que criptografa os arquivos da vítima e exige um resgate para liberar o acesso.</p>
            
                        <div className={S.linha}></div>
                       <p className={S.info2}>
                            Esse tipo de ataque se espalha por meio de e-mails maliciosos, downloads suspeitos e vulnerabilidades do sistema. Ao ser ativado, o ransomware criptografa os arquivos da vítima e exibe uma mensagem exigindo pagamento em criptomoedas para a liberação dos dados.
                       </p>
                    </article>
                    <article className={S.card}>
                       <h2 className={S.title}>Golpes em redes sociais</h2>
                       <p className={S.info}>Perfis falsos e mensagens enganosas para aplicar fraudes, como falsas doações ou promoções.</p>
            
                        <div className={S.linha}></div>
                       <p className={S.info2}>
                            Os golpistas criam perfis falsos de empresas ou pessoas conhecidas e entram em contato com vítimas para aplicar fraudes.
                       </p>
                    </article>
                    <article className={S.card}>
                       <h2 className={S.title}>Fraudes bancárias</h2>
                       <p className={S.info}>Sites falsos e chamadas telefônicas fraudulentas para roubar credenciais de contas bancárias.</p>
            
                        <div className={S.linha}></div>
                       <p className={S.info2}>
                            criminosos utilizam engenharia social para enganar vítimas e roubar informações financeiras. Isso pode ocorrer por meio de ligações, mensagens ou sites falsos que simulam plataformas bancárias.
                       </p>
                    </article>
                    <article className={S.card}>
                       <h2 className={S.title}>Golpes em compras online</h2>
                       <p className={S.info}>Lojas falsas ou ofertas irreais que induzem a vítima a pagar por produtos que nunca serão entregues.</p>
            
                        <div className={S.linha}></div>
                       <p className={S.info2}>
                            Sites fraudulentos oferecem produtos com preços muito baixos para atrair consumidores. Após o pagamento, o cliente não recebe o item e não consegue contato com a suposta loja.
                       </p>
                    </article>
                    <article className={S.card}>
                       <h2 className={S.title}>Roubo de identidade</h2>
                       <p className={S.info}>Uso de informações pessoais roubadas para criar contas falsas ou realizar transações ilegais.</p>
            
                        <div className={S.linha}></div>
                       <p className={S.info2}>
                            Os fraudadores obtêm informações por meio de vazamentos de dados ou engenharia social. Essas informações podem ser usadas para abrir contas falsas, solicitar empréstimos ou realizar compras em nome da vítima.
                       </p>
                    </article>
                </section>
                
            </main>
        </BrowserRouter>
    )
}