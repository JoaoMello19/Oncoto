// Obtenha o modal e o botão de abertura
const btnRules = document.getElementById("btn-rules");
const rulesModal = document.getElementById("rules-modal");
const closeModal = document.getElementById("close-modal");

// Quando o usuário clicar no botão, o modal é exibido
btnRules.onclick = function() {
    rulesModal.style.display = "block";
}

// Quando o usuário clicar no "X", o modal é fechado
closeModal.onclick = function() {
    rulesModal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele também é fechado
window.onclick = function(event) {
    if (event.target == modal) {
        rulesModal.style.display = "none";
    }
}
