import S from './fraudeBancaria.module.scss';

export default function FraudesBancarias() {
    return (
        <>
            <main className={S.container}>

                <h1 className={S.title}>Fraudes Bancárias</h1>

                <section className={S.containerDefinicao}>
                    <h2 className={S.titleDefinicao}>Definição</h2>
                    <p className={S.infoDefinicao}>Os criminosos utilizam engenharia social e tecnologia para enganar vítimas e roubar informações financeiras.</p>
                </section>

                <section className={S.containerEx}>
                    <h2 className={S.titleEx}>Exemplos reais</h2>
                    <ul className={S.infoEx}>
                        <li className={S.ex}>*️⃣ Falsas centrais de atendimento ligando para clientes e pedindo senhas.</li>
                        <li className={S.ex}>*️⃣ Aplicativos falsos de bancos capturando dados bancários.</li>
                    </ul>
                </section>

                <section className={S.containerComoFunciona}>
                    <h2 className={S.titleComoFunciona}>Como funciona</h2>
                    <ul className={S.infoComoFunciona}>
                        <li className={S.infos}>❗ A vítima recebe um SMS ou ligação de um falso banco.</li>
                        <li className={S.infos}>❗ O criminoso pede dados como senha e código de autenticação.</li>
                        <li className={S.infos}>❗ Ele usa as informações para acessar a conta e roubar dinheiro.</li>
                    </ul>
                </section>

                <section className={S.containerSinais}>
                    <h2 className={S.titleSinais}>Sinais de alerta</h2>
                    <ul className={S.infoSinais}>
                        <li className={S.sinais}>✅ Ligações de supostos bancos pedindo dados sigilosos.</li>
                        <li className={S.sinais}>✅ E-mails pedindo para atualizar senha clicando em um link.</li>
                        <li className={S.sinais}>✅ Mensagens sobre compras suspeitas pedindo login imediato.</li>
                    </ul>
                </section>

                <article className={S.containerDicas}>
                    <h2 className={S.titleDicas}>Dicas de proteção</h2>
                    <ul className={S.infoDicas}>
                        <li className={S.dicas}>✔️ Nunca forneça senhas ou códigos por telefone.</li>
                        <li className={S.dicas}>✔️ Sempre acesse o site do banco digitando o endereço manualmente.</li>
                        <li className={S.dicas}>✔️ Ative notificações de transações em tempo real.</li>
                    </ul>
                </article>

                <article className={S.containerOqueFazer}>
                    <h2 className={S.titleOqueFazer}>O que fazer se for vítima</h2>
                    <ul className={S.infoOqueFazer}>
                        <li className={S.fazer}>✳️ Bloqueie imediatamente cartões e contas afetadas.</li>
                        <li className={S.fazer}>✳️ Comunique seu banco e registre um boletim de ocorrência.</li>
                        <li className={S.fazer}>✳️ Acompanhe movimentações na conta para evitar novos golpes.</li>
                    </ul>
                </article>

            </main>
        </>
    );
}