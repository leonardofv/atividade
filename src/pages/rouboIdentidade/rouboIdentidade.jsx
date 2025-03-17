import S from './rouboIdentidade.module.scss';

export default function RouboIdentidade() {
    return (
        <>
            <main className={S.container}>

                <h1 className={S.title}>Roubo de Identidade</h1>

                <section className={S.containerDefinicao}>
                    <h2 className={S.titleDefinicao}>Definição</h2>
                    <p className={S.infoDefinicao}>Os criminosos utilizam informações pessoais roubadas para realizar fraudes e crimes financeiros.</p>
                </section>

                <section className={S.containerEx}>
                    <h2 className={S.titleEx}>Exemplos reais</h2>
                    <ul className={S.infoEx}>
                        <li className={S.ex}>*️⃣ Golpistas abrindo contas bancárias no nome de outras pessoas.</li>
                        <li className={S.ex}>*️⃣ Uso de CPF de terceiros para solicitar empréstimos fraudulentos.</li>
                    </ul>
                </section>

                <section className={S.containerComoFunciona}>
                    <h2 className={S.titleComoFunciona}>Como funciona</h2>
                    <ul className={S.infoComoFunciona}>
                        <li className={S.infos}>❗ Dados pessoais são roubados por meio de vazamentos ou engenharia social.</li>
                        <li className={S.infos}>❗ Os criminosos utilizam essas informações para abrir contas falsas.</li>
                        <li className={S.infos}>❗ A vítima descobre o golpe ao receber cobranças inesperadas.</li>
                    </ul>
                </section>

                <section className={S.containerSinais}>
                    <h2 className={S.titleSinais}>Sinais de alerta</h2>
                    <ul className={S.infoSinais}>
                        <li className={S.sinais}>✅ Notificações de contas abertas sem sua autorização.</li>
                        <li className={S.sinais}>✅ Compras desconhecidas em seu nome.</li>
                        <li className={S.sinais}>✅ Ligações de cobrança de dívidas que você não fez.</li>
                    </ul>
                </section>

                <article className={S.containerDicas}>
                    <h2 className={S.titleDicas}>Dicas de proteção</h2>
                    <ul className={S.infoDicas}>
                        <li className={S.dicas}>✔️ Não compartilhe dados pessoais em redes sociais.</li>
                        <li className={S.dicas}>✔️ Monitore seu CPF regularmente.</li>
                        <li className={S.dicas}>✔️ Ative alertas de movimentações financeiras.</li>
                    </ul>
                </article>

                <article className={S.containerOqueFazer}>
                    <h2 className={S.titleOqueFazer}>O que fazer se for vítima</h2>
                    <ul className={S.infoOqueFazer}>
                        <li className={S.fazer}>✳️ Contate as instituições financeiras envolvidas.</li>
                        <li className={S.fazer}>✳️ Registre um boletim de ocorrência.</li>
                        <li className={S.fazer}>✳️ Consulte o Serasa ou Boa Vista para contestar fraudes.</li>
                    </ul>
                </article>

            </main>
        </>
    );
}