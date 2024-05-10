document.addEventListener("DOMContentLoaded", function() {
    const menuModal = document.getElementById('menuModal');
    const openMenuBtn = document.getElementById('openMenuModal');
    const closeBtns = document.querySelectorAll('.close');

    // Datos de ejemplo del menú
    const menu = [
        {
            day: 'Lunes',
            breakfast:'Bistec a la mexicana, mango, tortillas, café y pan',
            food:'Arroz a la mexicana, costillas en salsa verde, frijoles, manzana, tortillas y agua',
            dinner:'Tacos dorados, papaya, café y pan',
            collation:'Omelet de jamón, café y pan'
        },
        {
            day: 'Martes',
            breakfast:'Chilaquiles, ensalada de frutas, café y pan',
            food:'Crema de zanahoria, pechuga empanizada, ensalada, pera, tortillas y agua',
            dinner:'Enchiladas mineras, manzana, café y pan',
            collation:'Tinga de res, malón, tostadas, café y pan'
        },
        {
            day: 'Miércoles',
            breakfast:'Huevo al albañil, frijoles, pera, tortillas, café y pan',
            food:'Arroz con pimiento, mole de olla, mango, tortillasy agua',
            dinner:'Tinga de pollo, plátano, tostadas, café y pan',
            collation:'Croquetas de atún, manzana, tortillas, café y pan'
        },
        {
            day: 'Jueves',
            breakfast:'Menudo de res, plátano, tortillas, café y pan',
            food:'Sopa de fideo, salpicón de res, alegria, tostadas de agua',
            dinner:'Pechugas rellenas, mango, café y pan',
            collation:'Quesadillas de papa, plátano, café y pan'
        },
        {
            day: 'Viernes',
            breakfast:'Consomé de pollo, melón, tortillas, café y pan',
            food:'Arroz con elote, ensalada de atún, manzana, tostadas y agua',
            dinner:'Calabazas rellenas, manzana, tortillas, café y pan',
            collation:'Pechuga empanizada, ensalada, pera, tortillas, café y pan'
        },
        {
            day: 'Sábado',
            breakfast:'Huevos rancheros, manzana, tortillas, café y pan',
            food:'Arroz con zanahoria, enchiladas de mole, mango, agua',
            dinner:'Milanesa, ensalada, sandía, tortillas, café y pan',
            collation:'Huevos cocidos, ensalada, plátano, tostadas, café y pan'
        }
        ,{
            day: 'Domingo',
            breakfast:'Hot dog, papaya, café y pan',
            food:'Spaghetti rojo, lomo adobado, ensalada, sandía, pan y agua',
            dinner:'Huevo a la mexicana, frijoles, guayaba, tortillas, café y pan',
            collation:'Salpicón de pollo, manzana, tostadas, café y pan'
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
