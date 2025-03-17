import S from './ransomware.module.scss';

export default function Ransomware() {
    return (
        <>
            <main className={S.container}>

                <h1 className={S.title}>Ransomware</h1>

                <section className={S.containerDefinicao}>
                    <h2 className={S.titleDefinicao}>Definição</h2>
                    <p className={S.infoDefinicao}>Ransomware é um tipo de malware que sequestra arquivos do usuário, criptografando-os, e exige pagamento (normalmente em criptomoedas) para restaurar o acesso.</p>
                </section>

                <section className={S.containerEx}>
                    <h2 className={S.titleEx}>Exemplos reais</h2>
                    <ul className={S.infoEx}>
                        <li className={S.ex}>*️⃣ Em 2017, o ataque WannaCry infectou mais de 200 mil computadores em 150 países.</li>
                        <li className={S.ex}>*️⃣ Empresas como a JBS (gigante do setor alimentício) tiveram seus sistemas paralisados por ransomware.</li>
                    </ul>
                </section>

                <section className={S.containerComoFunciona}>
                    <h2 className={S.titleComoFunciona}>Como funciona</h2>
                    <ul className={S.infoComoFunciona}>
                        <li className={S.infos}>❗ O usuário baixa um arquivo malicioso por e-mail ou site infectado.</li>
                        <li className={S.infos}>❗ O ransomware se instala no sistema e bloqueia os arquivos.</li>
                        <li className={S.infos}>❗ Uma mensagem exige um pagamento para liberar os arquivos.</li>
                    </ul>
                </section>

                <section className={S.containerSinais}>
                    <h2 className={S.titleSinais}>Sinais de alerta</h2>
                    <ul className={S.infoSinais}>
                        <li className={S.sinais}>✅ Arquivos inacessíveis com extensões desconhecidas.</li>
                        <li className={S.sinais}>✅ Mensagens de resgate aparecendo na tela.</li>
                        <li className={S.sinais}>✅ Lentidão ou comportamento estranho do computador.</li>
                    </ul>
                </section>

                <article className={S.containerDicas}>
                    <h2 className={S.titleDicas}>Dicas de proteção</h2>
                    <ul className={S.infoDicas}>
                        <li className={S.dicas}>✔️ Mantenha backups de arquivos importantes em um local seguro.</li>
                        <li className={S.dicas}>✔️ Não baixe arquivos de fontes desconhecidas.</li>
                        <li className={S.dicas}>✔️ Use um bom antivírus e mantenha o sistema atualizado.</li>
                    </ul>
                </article>

                <article className={S.containerOqueFazer}>
                    <h2 className={S.titleOqueFazer}>O que fazer se for vítima</h2>
                    <ul className={S.infoOqueFazer}>
                        <li className={S.fazer}>✳️ Não pague o resgate (não há garantia de recuperação dos arquivos).</li>
                        <li className={S.fazer}>✳️ Desconecte o dispositivo da internet imediatamente.</li>
                        <li className={S.fazer}>✳️ Use ferramentas como No More Ransom (<a href="https://www.nomoreransom.org" target="_blank" rel="noopener noreferrer">www.nomoreransom.org</a>) para tentar recuperar os arquivos.</li>
                    </ul>
                </article>

            </main>
        </>
    );
}