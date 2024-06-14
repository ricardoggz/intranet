document.addEventListener("DOMContentLoaded", function() {
    const menuModal = document.getElementById('menuModal');
    const openMenuBtn = document.getElementById('openMenuModal');
    const closeBtns = document.querySelectorAll('.close');

    // Datos de ejemplo del menú
    const menu = [
        {
            day: 'Lunes',
            breakfast:'Papas con chorizo, manzana, tortillas, café y pan',
            food:'Arroz con pimiento, cecina, ensalada de nopales, alegría, tortillas y agua',
            dinner:'Tacos dorados, melón, café y pan',
            collation:'Hojaldra de atún, uva, café y pan'
        },
        {
            day: 'Martes',
            breakfast:'Alambre de pollo, pera, tortillas, café y pan',
            food:'Arroz a la jardinera, asado de res, manzana, tortillas y agua',
            dinner:'Huarache de nopal, papaya, café y pan',
            collation:'Lomo a a ciruela, ensalada, manzana, café y pan'
        },
        {
            day: 'Miércoles',
            breakfast:'Enchiladas suizas, melón, café y pan',
            food:'Caldo tlalpeño, picadillo, alegría, tostadas y agua',
            dinner:'Hot dog, papas a la francesa, sandía, café y pan',
            collation:'Huevos guisado, guayaba, café y pan'
        },
        {
            day: 'Jueves',
            breakfast:'Chuleta a la mexicana, frijoles, naranja, tortillas, café y pan',
            food:'Sopa de fideo, entomatado de res, guayaba, tortillas y agua',
            dinner:'Chilorio, guayaba, tortillas, café y pan',
            collation:'Papas con chorizo, manzana, tortillas, café y pan'
        },
        {
            day: 'Viernes',
            breakfast:'Enfrijoladas, plátano, café y pan',
            food:'Arroz amarillo, pescado empanizado, ensalada, tortillas y agua',
            dinner:'Hojaldras de pollo, plátano, café y pan',
            collation:'Bistec a la mexicana, frijoles, pera, tortillas, café y pan'
        },
        {
            day: 'Sábado',
            breakfast:'Pollo al chipotle, frijoles, plátano, tortillas, café y pan',
            food:'Tostadas de pata, pozole, alegría, tostadas y agua',
            dinner:'Tacos al pastor, guayaba, café y pan',
            collation:'Bistec en salsa verde, pera, tortillas, café y pan'
        }
        ,{
            day: 'Domingo',
            breakfast:'Alambre de pollo, naranja, tortillas, café y pan',
            food:'Spaguetti rojo, pollo a la naranja, ensalada, mango, agua y pan',
            dinner:'Huevo al albañil, frijoles, papaya, tortillas, café y pan',
            collation:'Tostadas de picadillo, pera, café y pan'
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
