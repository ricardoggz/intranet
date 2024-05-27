document.addEventListener("DOMContentLoaded", function() {
    const menuModal = document.getElementById('menuModal');
    const openMenuBtn = document.getElementById('openMenuModal');
    const closeBtns = document.querySelectorAll('.close');

    // Datos de ejemplo del menú
    const menu = [
        {
            day: 'Lunes',
            breakfast:'Salchichas guisadas, plátano, café y pan',
            food:'Sopa de lentejas, alambre de res, manzana, tortillas y agua',
            dinner:'Pechuga rellena, guayaba, café y pan',
            collation:'Huevos cocidos, ensalada, plátano, tostadas, café y pan'
        },
        {
            day: 'Martes',
            breakfast:'Flautas de pollo, manzana, tortillas, café y pan',
            food:'Consomé de res, tostadas de tinga, pera, agua',
            dinner:'Pollo almendrado, ensalada, papaya, café y pan',
            collation:'Crepas de pollo, guayaba, café y pan'
        },
        {
            day: 'Miércoles',
            breakfast:'Birria, pera, tortillas, café y pan',
            food:'Arroz con zanahoria, chuletas a la hawaiana, naranja, tortillas y agua',
            dinner:'Club sandwich, sandía, café y pan',
            collation:'Tostadas de tinga, plátano, café y pan'
        },
        {
            day: 'Jueves',
            breakfast:'Chicharrón en salsa verde, cóctel de frutas, tortillas, café y pan',
            food:'Spaguetti al chipotle, pechuga al limón. pera, tortillas y agua',
            dinner:'Enfrijoladas, melón, café y pan',
            collation:'Brochetas de pollo, manzana, tortillas, café y pan'
        },
        {
            day: 'Viernes',
            breakfast:'Sopes, melón, café y pan',
            food:'Arroz con zanahoria, pollo a la cacerola, sandía, tortillas y agua',
            dinner:'Quesadillas de papa, uva, café y pan',
            collation:'Bistec a la mexicana, plátano, café y pan'
        },
        {
            day: 'Sábado',
            breakfast:'Queso empanizado, ensalada, naranja, tortillas, café y pan',
            food:'Caldo tlalpeño, tacos al pastor, ensalada de fruta, agua',
            dinner:'Huevo guisado, frijoles, pera, tortillas, café y pan',
            collation:'Hamburguesa con papas, naranja, café y pan'
        }
        ,{
            day: 'Domingo',
            breakfast:'Enfrijoladas, sandía, café y pan',
            food:'Ensalada de pepino, sopa de fideo, chilaquiles, alegría, agua',
            dinner:'Bistec en salsa verde, guayaba, tortillas, café y pan',
            collation:'Pozole, manzana, tostadas, café y pan'
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
