import "./RulesModal.css";

export default function RulesModal({ closeModal }) {
    return (
        <div id="modal-container">
            <div id="opaque-bg" onClick={closeModal}></div>
            <div id="modal">
                <h2>Regras do Jogo</h2>
                <ol id="rules-list">
                    <li>Digite o nome do país no campo abaixo.</li>
                    <li>
                        Algumas dicas relativas ao país serão exibidas a cada
                        tentativa.
                    </li>
                    <li>Ganhe o jogo quando você acertar o nome do país.</li>
                    <li>
                        Use o botão de dica para obter os dados sobre o país
                        (continente, população e área).
                    </li>
                </ol>
                <p>Clique em qualquer lugar para fechar</p>
            </div>
        </div>
    );
}
