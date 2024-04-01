document.addEventListener("DOMContentLoaded", function() {
    const menuModal = document.getElementById('menuModal');
    const openMenuBtn = document.getElementById('openMenuModal');
    const closeBtns = document.querySelectorAll('.close');

    // Datos de ejemplo del menú
    const menu = [
        "Desayuno: Patatas a la Riojana",
        "Comida: Sopa de pollo",
        "Cena: Judías verdes",
        "Colación: Fruta"
    ];

    // Mostrar la ventana modal del menú
    openMenuBtn.addEventListener('click', function() {
        showModal(menuModal, menu);
    });

    // Cerrar la ventana modal al hacer clic en el botón de cerrar o fuera de ella
    closeBtns.forEach(function(btn) {
        btn.onclick = function() {
            btn.parentElement.parentElement.style.display = "none";
        }
    });
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    }
});

// Función para mostrar la ventana modal con la lista correspondiente
function showModal(modal, list) {
    const contentList = modal.querySelector('ul');
    contentList.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos elementos
    list.forEach(function(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        contentList.appendChild(listItem);
    });
    modal.style.display = "block";
}
