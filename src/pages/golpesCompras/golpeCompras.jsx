import S from './golpeCompras.module.scss';

export default function GolpesComprasOnline() {
    return (
        <>
            <main className={S.container}>

                <h1 className={S.title}>Golpes em Compras Online</h1>

                <section className={S.containerDefinicao}>
                    <h2 className={S.titleDefinicao}>Definição</h2>
                    <p className={S.infoDefinicao}>Golpes em compras online envolvem sites falsos, produtos inexistentes e roubo de dados financeiros.</p>
                </section>

                <section className={S.containerEx}>
                    <h2 className={S.titleEx}>Exemplos reais</h2>
                    <ul className={S.infoEx}>
                        <li className={S.ex}>*️⃣ Lojas falsas no Instagram vendendo produtos que nunca são entregues.</li>
                        <li className={S.ex}>*️⃣ Sites falsos que imitam grandes varejistas, como Americanas e Magazine Luiza.</li>
                    </ul>
                </section>

                <section className={S.containerComoFunciona}>
                    <h2 className={S.titleComoFunciona}>Como funciona</h2>
                    <ul className={S.infoComoFunciona}>
                        <li className={S.infos}>❗ O cliente vê um anúncio com preço muito abaixo do normal.</li>
                        <li className={S.infos}>❗ Ele faz a compra, mas nunca recebe o produto.</li>
                        <li className={S.infos}>❗ O site desaparece, deixando a vítima sem suporte.</li>
                    </ul>
                </section>

                <section className={S.containerSinais}>
                    <h2 className={S.titleSinais}>Sinais de alerta</h2>
                    <ul className={S.infoSinais}>
                        <li className={S.sinais}>✅ Preços muito abaixo do mercado.</li>
                        <li className={S.sinais}>✅ Falta de informações sobre a empresa.</li>
                        <li className={S.sinais}>✅ Somente pagamento via Pix ou boleto.</li>
                    </ul>
                </section>

                <article className={S.containerDicas}>
                    <h2 className={S.titleDicas}>Dicas de proteção</h2>
                    <ul className={S.infoDicas}>
                        <li className={S.dicas}>✔️ Pesquise a reputação da loja antes de comprar.</li>
                        <li className={S.dicas}>✔️ Desconfie de preços extremamente baixos.</li>
                        <li className={S.dicas}>✔️ Dê preferência a meios de pagamento protegidos, como cartão de crédito.</li>
                    </ul>
                </article>

                <article className={S.containerOqueFazer}>
                    <h2 className={S.titleOqueFazer}>O que fazer se for vítima</h2>
                    <ul className={S.infoOqueFazer}>
                        <li className={S.fazer}>✳️ Entre em contato com seu banco para tentar reverter o pagamento.</li>
                        <li className={S.fazer}>✳️ Denuncie a loja falsa ao Procon.</li>
                        <li className={S.fazer}>✳️ Registre um boletim de ocorrência.</li>
                    </ul>
                </article>

            </main>
        </>
    );
}