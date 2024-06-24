document.addEventListener("DOMContentLoaded", function() {
    const menuModal = document.getElementById('menuModal');
    const openMenuBtn = document.getElementById('openMenuModal');
    const closeBtns = document.querySelectorAll('.close');

    // Datos de ejemplo del menú
    const menu = [
        {
            day: 'Lunes',
            breakfast:'Sandwich de jamón, manzana, leche y pan',
            food:'Sandwich de jamón, alegría, pera y agua',
            dinner:'Hojaldras de jamón, manzana, leche y pan',
            collation:'Tortas de jamón, pera, leche y pan'
        },
        {
            day: 'Martes',
            breakfast:'Sandwich de jamón, pera, leche y pan',
            food:'Sandwich de jamón, alegría, manzana y agua',
            dinner:'Hojaldras de jamón, mango, leche y pan',
            collation:'Tortas de jamón, pera, leche y pan'
        },
        {
            day: 'Miércoles',
            breakfast:'Sandwich de jamón, manzana, leche y pan',
            food:'Sandwich de jamón, alegría, pera y agua',
            dinner:'Hojaldras de jamón, manzana, leche y pan',
            collation:'Sandwich de jamón, pera, leche y pan'
        },
        {
            day: 'Jueves',
            breakfast:'Sandwich de jamón, manzana, leche y pan',
            food:'Sandwich de jamón, alegría, pera y agua',
            dinner:'Tortas de jamón, pera, leche y pan',
            collation:'Bollos de atún, manzana, leche y pan'
        },
        {
            day: 'Viernes',
            breakfast:'Sandwich de jamón, pera, leche y pan',
            food:'Sandwich de jamón, alegría, manzana y agua',
            dinner:'Tortas de jamón, pera, leche y pan',
            collation:'Hojaldras de jamón, manzana, leche y pan'
        },
        {
            day: 'Sábado',
            breakfast:'Sandwich de jamón, manzana, leche y pan',
            food:'Tortas de jamón, alegría, pera y agua',
            dinner:'Sandwich de jamón, manzana, leche y pan',
            collation:'Bollos de atún, manzana, leche y pan'
        }
        ,{
            day: 'Domingo',
            breakfast:'Bollo de jamón, pera, leche y pan',
            food:'Tortas de jamón, alegría, manzana y agua',
            dinner:'Bollos de atún, manzana, leche y pan',
            collation:'Sandwich de jamón, pera, leche y pan'
        }
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
        /*const listItem = document.createElement('li');
        listItem.textContent = item;*/
        /*contentList.appendChild(listItem);*/
        contentList.innerHTML+=`
            <span>
                <b>${item.day}</b>
            </span>
            <li>Desayuno: ${item.breakfast}</li>
            <li>Comida: ${item.food}</li>
            <li>Cena: ${item.dinner}</li>
            <li>Colación: ${item.collation}</li>
        `
    });
    modal.style.display = "block";
}
