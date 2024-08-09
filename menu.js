document.addEventListener("DOMContentLoaded", function() {
    const menuModal = document.getElementById('menuModal');
    const openMenuBtn = document.getElementById('openMenuModal');
    const closeBtns = document.querySelectorAll('.close');

    // Datos de ejemplo del menú
    const menu = [
        {
            day: 'Lunes',
            breakfast:'PENDIENTE',
            food:'PENDIENTE',
            dinner:'PENDIENTE',
            collation:'PENDIENTE'
        },
        {
            day: 'Martes',
            breakfast:'PENDIENTE',
            food:'PENDIENTE',
            dinner:'PENDIENTE',
            collation:'PENDIENTE'
        },
        {
            day: 'Miércoles',
            breakfast:'PENDIENTE',
            food:'PENDIENTE',
            dinner:'PENDIENTE',
            collation:'PENDIENTE'
        },
        {
            day: 'Jueves',
            breakfast:'PENDIENTE',
            food:'PENDIENTE',
            dinner:'PENDIENTE',
            collation:'PENDIENTE'
        },
        {
            day: 'Viernes',
            breakfast:'PENDIENTE',
            food:'PENDIENTE',
            dinner:'PENDIENTE',
            collation:'PENDIENTE'
        },
        {
            day: 'Sábado',
            breakfast:'PENDIENTE',
            food:'PENDIENTE',
            dinner:'PENDIENTE',
            collation:'PENDIENTE'
        }
        ,{
            day: 'Domingo',
            breakfast:'PENDIENTE',
            food:'PENDIENTE',
            dinner:'PENDIENTE',
            collation:'PENDIENTE'
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
