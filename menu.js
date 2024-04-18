document.addEventListener("DOMContentLoaded", function() {
    const menuModal = document.getElementById('menuModal');
    const openMenuBtn = document.getElementById('openMenuModal');
    const closeBtns = document.querySelectorAll('.close');

    // Datos de ejemplo del menú
    const menu = [
        {
            day: 'Lunes',
            breakfast:'Papas con chorizo, manzana, tortillas, café y pan',
            food:'Spaghetti blanco, ensalada de col y zanahoria, lomo adobado, pera, tortillas y agua',
            dinner:'Tacos dorados de pollo, melón, café y pan',
            collation:'Hojaldra de atún, uva, café y pan'
        },
        {
            day: 'Martes',
            breakfast:'Alambre de pollo, pera, tortillas, café y pan',
            food:'Arroz a la jardinera, asado de res, naranja, tortillas y agua',
            dinner:'Huaraches de nopal, papaya, café y pan',
            collation:'Ensalada griega, plátano, galletas saladas, café y pan'
        },
        {
            day: 'Miércoles',
            breakfast:'Enchiladas suizas, melón, tortillas, café y pan',
            food:'Caldo tlalpeño, picadillo, alegría, tostadas y agua',
            dinner:'Hot dog, papas a la francesa, sandía, café y pan',
            collation:'Huevo guisado, guayaba, café y pan'
        },
        {
            day: 'Jueves',
            breakfast:'Chuleta a la mexicana, frijoles, naranja, tortillas, café y pan',
            food:'Sopa de fideo, entomatado de res, frijoles, guayaba, tortillas y agua',
            dinner:'Chilorio, guayaba, tortillas, café y pan',
            collation:'Papas con chorizo, manzana, tortillas, café y pan'
        },
        {
            day: 'Viernes',
            breakfast:'Enfrijoladas, plátano, tortillas, café y pan',
            food:'Arroz amarillo, ensalada de col con zanahoria, pescado empanizado, naranja, tortillas y agua',
            dinner:'Hojaldras de pollo, plátano, café y pan',
            collation:'Bistec a  la mexicana, frijoles, pera, tortillas, café y pan'
        },
        {
            day: 'Sábado',
            breakfast:'Huevos rancheros, frijoles, mazana, café y pan',
            food:'Arroz con zanahoria, enchiladas de mole, mango, agua',
            dinner:'Milanesa, ensalada de lechuga, sandía, tortillas, café y pan',
            collation:'Ensalada de huevo cocido, plátano, tostadas, café y pan'
        }
        ,{
            day: 'Domingo',
            breakfast:'Hot dog, papaya, café y pan',
            food:'Spaghetti rojo, lomo adobado, ensalada de lechuga, sandía, bolillo y agua',
            dinner:'Huevo a la mexicana, frijoles, guayaba, tortillas, café y pan',
            collation:'Salpicón de pollo, manzana, tostada, café y pan'
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
