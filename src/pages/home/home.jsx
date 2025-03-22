import React from 'react';
import S from './home.module.scss';

import Video from './video';

export default function Home() {

    return (
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

                <Video />

               <section className={S.protectionTips}>
                  <div className={S.tipsHeader}>
                     <h2 className={S.tipsTitle}>Proteja-se!</h2>
                     <p className={S.tipsSubtitle}>
                        Os golpistas estão sempre criando novos truques para enganar e tirar vantagem das pessoas. 
                        <span className={S.highlight}> Não se deixe enganar.</span>
                     </p>
                     <p className={S.tipsAction}>Veja aqui como se proteger de golpes aplicados na Internet:</p>
                  </div>

                  <div className={S.tipsGrid}>
                     <div className={S.tipCard}>
                        <h3 className={S.tipTitle}>Phishing</h3>
                        <div className={S.tipContent}>
                              <p>Verifique sempre o remetente de e-mails e mensagens. Instituições sérias nunca pedem dados sensíveis por e-mail.</p>
                        </div>
                     </div>

                     <div className={S.tipCard}>
                        <h3 className={S.tipTitle}>Ransomware</h3>
                        <div className={S.tipContent}>
                              <p>Mantenha backups regulares em dispositivos externos e atualize sempre seu antivírus.</p>
                        </div>
                     </div>

                     <div className={S.tipCard}>
                        <h3 className={S.tipTitle}>Redes Sociais</h3>
                        <div className={S.tipContent}>
                              <p>Desconfie de promoções milagrosas e verifique sempre a autenticidade dos perfis.</p>
                        </div>
                     </div>

                     <div className={S.tipCard}>
                        <h3 className={S.tipTitle}>Fraudes Bancárias</h3>
                        <div className={S.tipContent}>
                              <p>Nunca compartilhe senhas ou códigos de verificação, mesmo que pareça ser do seu banco.</p>
                        </div>
                     </div>

                     <div className={S.tipCard}>
                        <h3 className={S.tipTitle}>Compras Online</h3>
                        <div className={S.tipContent}>
                              <p>Pesquise a reputação da loja e prefira sites com certificado de segurança (HTTPS).</p>
                        </div>
                     </div>

                     <div className={S.tipCard}>
                        <h3 className={S.tipTitle}>Roubo de Identidade</h3>
                        <div className={S.tipContent}>
                              <p>Use autenticação de dois fatores e monitore regularmente seus extratos bancários.</p>
                        </div>
                     </div>
                  </div>
               </section>
               
            </main>
    )
}