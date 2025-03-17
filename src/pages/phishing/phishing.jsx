import S from './phishing.module.scss';

export default function Phishing() {
    return (
        <>
            <main className={S.container}>

            <h1 className={S.title}>Phishing</h1>

                <section className={S.containerDefinicao}>
                    <h2 className={S.titleDefinicao}>Definição</h2>
                    <p className={S.infoDefinicao}>O phishing é um tipo de golpe no qual os criminosos se passam por empresas ou instituições confiáveis para enganar as vítimas e roubar informações sensíveis, como senhas e dados bancários.</p>
                </section>

                <section className={S.containerEx}>
                    <h2 className={S.titleEx}>Exemplos reais</h2>
                    <ul className={S.infoEx}>
                        <li className={S.ex}>*️⃣Em 2020, criminosos enviaram e-mails falsos em nome da Organização Mundial da Saúde (OMS) pedindo doações para o combate à COVID-19.</li>
                        <li className={S.ex}>*️⃣Golpes de WhatsApp onde hackers se passam por conhecidos da vítima e pedem dinheiro.</li>
                    </ul>
                </section>

                <section className={S.containerComoFunciona}>
                    <h2 className={S.titleComoFunciona}>Como funciona</h2>
                    <ul className={S.infoComoFunciona}>
                        <li className={S.infos}>❗A vítima recebe um e-mail, SMS ou mensagem com um link suspeito.</li>
                        <li className={S.infos}>❗Ao clicar, é direcionada para um site falso que imita um banco ou serviço real.</li>
                        <li className={S.infos}>❗Se inserir seus dados, os criminosos capturam as informações e podem acessar suas contas.</li>
                    </ul>
                </section>

                <section className={S.containerSinais}>
                    <h2 className={S.titleSinais}>Sinais de alerta</h2>
                    <ul className={S.infoSinais}>
                        <li className={S.sinais}>✅E-mails e mensagens com erros gramaticais.</li>
                        <li className={S.sinais}>✅Endereços de e-mail suspeitos (ex: suporte@banco123.com em vez de @bancooficial.com).</li>
                        <li className={S.sinais}>✅Pedidos urgentes para clicar em links ou baixar anexos.</li>
                    </ul>
                </section>

                <article className={S.containerDicas}>
                    <h2 className={S.titleDicas}>Dicas de proteção</h2>
                    <ul className={S.infoDicas}>
                        <li className={S.dicas}>✔️Nunca clique em links recebidos por e-mail ou mensagens sem verificar a autenticidade.</li>
                        <li className={S.dicas}>✔️Confirme diretamente com a empresa antes de fornecer informações pessoais.</li>
                        <li className={S.dicas}>✔️Use autenticação de dois fatores para proteger suas contas.</li>
                    </ul>
                </article>

                <article className={S.containerOqueFazer}>
                    <h2 className={S.titleOqueFazer}>O que fazer se for vítima ?</h2>
                    <ul className={S.infoOqueFazer}>
                        <li className={S.fazer}>✳️Alterar imediatamente as senhas das contas afetadas.</li>
                        <li className={S.fazer}>✳️Avisar o banco ou a instituição financeira envolvida.</li>
                        <li className={S.fazer}>✳️Denunciar o golpe em sites como www.safernet.org.br.</li>
                    </ul>
                </article>

            </main>
        </>
    )
}