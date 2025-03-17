import S from './golpeRedeSocial.module.scss';

export default function GolpesRedesSociais() {
    return (
        <>
            <main className={S.container}>

                <h1 className={S.title}>Golpes em Redes Sociais</h1>

                <section className={S.containerDefinicao}>
                    <h2 className={S.titleDefinicao}>Definição</h2>
                    <p className={S.infoDefinicao}>Criminosos criam perfis falsos ou invadem contas para enganar seguidores e aplicar golpes financeiros ou roubar informações.</p>
                </section>

                <section className={S.containerEx}>
                    <h2 className={S.titleEx}>Exemplos reais</h2>
                    <ul className={S.infoEx}>
                        <li className={S.ex}>*️⃣ Perfis falsos se passando por celebridades para pedir doações.</li>
                        <li className={S.ex}>*️⃣ Hackers invadindo contas e pedindo dinheiro a contatos da vítima.</li>
                    </ul>
                </section>

                <section className={S.containerComoFunciona}>
                    <h2 className={S.titleComoFunciona}>Como funciona</h2>
                    <ul className={S.infoComoFunciona}>
                        <li className={S.infos}>❗ O criminoso cria um perfil falso ou invade um real.</li>
                        <li className={S.infos}>❗ Ele entra em contato com amigos da vítima e pede dinheiro ou dados pessoais.</li>
                        <li className={S.infos}>❗ A vítima transfere dinheiro ou fornece informações sem perceber o golpe.</li>
                    </ul>
                </section>

                <section className={S.containerSinais}>
                    <h2 className={S.titleSinais}>Sinais de alerta</h2>
                    <ul className={S.infoSinais}>
                        <li className={S.sinais}>✅ Contas pedindo dinheiro de forma urgente.</li>
                        <li className={S.sinais}>✅ Mensagens com links suspeitos.</li>
                        <li className={S.sinais}>✅ Perfis com poucas postagens ou recém-criados.</li>
                    </ul>
                </section>

                <article className={S.containerDicas}>
                    <h2 className={S.titleDicas}>Dicas de proteção</h2>
                    <ul className={S.infoDicas}>
                        <li className={S.dicas}>✔️ Ative a verificação em duas etapas em suas redes sociais.</li>
                        <li className={S.dicas}>✔️ Não clique em links suspeitos enviados por mensagens.</li>
                        <li className={S.dicas}>✔️ Sempre desconfie de pedidos urgentes de dinheiro.</li>
                    </ul>
                </article>

                <article className={S.containerOqueFazer}>
                    <h2 className={S.titleOqueFazer}>O que fazer se for vítima</h2>
                    <ul className={S.infoOqueFazer}>
                        <li className={S.fazer}>✳️ Denuncie o perfil falso para a rede social.</li>
                        <li className={S.fazer}>✳️ Altere sua senha imediatamente.</li>
                        <li className={S.fazer}>✳️ Informe amigos e familiares para que não caiam no golpe.</li>
                    </ul>
                </article>

            </main>
        </>
    );
}