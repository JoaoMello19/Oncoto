/** LÓGICA DE CONTROLE DO MODAL */
const btnRules = document.getElementById("btn-rules");
const rulesModal = document.getElementById("rules-modal");
const closeModal = document.getElementById("close-modal");

btnRules.onclick = () => { rulesModal.style.display = "block"; }

closeModal.onclick = () => { rulesModal.style.display = "none"; }

window.onclick = (event) => {
    if (event.target == modal)
        rulesModal.style.display = "none";
}


/** LÓGICA DE CONTROLE DA TABELA */
const tableCountries = document.getElementById("country-table");
