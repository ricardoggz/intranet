document.addEventListener("DOMContentLoaded", function() {
    const menuModal = document.getElementById('menuModal');
    const openMenuBtn = document.getElementById('openMenuModal');
    const closeBtns = document.querySelectorAll('.close');

    // Datos de ejemplo del menú
    const menu = [
        {
            day: 'Lunes',
            breakfast:'Huevos rancheros, plátano, café y pan',
            food:'Tostadas de pata, pozole, alegría, tostadas y agua',
            dinner:'Pollo frito, ensalada rusa, melón, tortillas, café y pan',
            collation:'Chilaquiles, uva, café y pan'
        },
        {
            day: 'Martes',
            breakfast:'Longaniza con nopales, manzana, tortillas, cafe y pan',
            food:'Arroz amarillo, cochinita, sandía, tortillas y agua',
            dinner:'Hot cakes, guayaba, café y pan',
            collation:'Pechuga empanizada, ensalada, manzana, tortillas, café y pan'
        },
        {
            day: 'Miércoles',
            breakfast:'Ensalada rusa, uva, café y pan',
            food:'Ensalada de pepino, sopa de fideo, chilaquiles, pera y agua',
            dinner:'Sopes, sandía, café y pan',
            collation:'Alambre, manzana, tortillas, café y pan'
        },
        {
            day: 'Jueves',
            breakfast:'Calabazas con queso, melón, tortillas, café y pan',
            food:'Sopa de codito, cerdo en salsa de ciruela, ensalada de col, alegría, tortillas y agua',
            dinner:'Huevo a la mexicana, frijoles, pera, tortillas, café y pan',
            collation:'Tacos dorados, plátano, café y pan'
        },
        {
            day: 'Viernes',
            breakfast:'Enchiladas de mole, manzana, café y pan',
            food:'Arroz a la jardinera, bistec con papas, frijoles, naranja, tortillas y agua',
            dinner:'Calabazas con queso, manzana, tortillas, café y pan',
            collation:'Omelette de champiñón, guayaba, café y pan'
        },
        {
            day: 'Sábado',
            breakfast:'Pechuga a la plancha, ensalada, manzana, tortillas, café y pan',
            food:'Sopa de tortilla, milanesa, ensalada de nopales, naranja, tortillas y agua',
            dinner:'Huevo con chorizo, frijoles, manzana, tortillas, café y pan',
            collation:'Quesadillas de papa, plátano, café y pan'
        }
        ,{
            day: 'Domingo',
            breakfast:'Chicharrón rojo, melón, tortillas, café y pan',
            food:'Sopa de fideo, tacos dorados, mango, pan y agua',
            dinner:'Chilaquiles, plátano, café y pan',
            collation:'Pechuga empanizada, pera, tortillas, café y pan'
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
