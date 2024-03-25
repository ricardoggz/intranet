document.addEventListener("DOMContentLoaded", function() {
    const monthElement = document.querySelector('.month');
    const daysElement = document.querySelector('.days');
    const modal = document.getElementById('modal');
    const birthdayList = document.getElementById('birthday-list');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Datos de ejemplo de cumpleaños
    const birthdays = {
        10: ["Juan", "María"],
        15: ["Pedro", "Ana"]
    };

    // Obtener el nombre del mes actual
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    monthElement.textContent = currentMonth;

    // Obtener el número de días del mes actual
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Crear los elementos de los días del mes
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;
        dayElement.addEventListener('click', function() {
            const day = parseInt(this.textContent);
            const birthdaysForDay = birthdays[day];
            if (birthdaysForDay) {
                showModal(birthdaysForDay);
            }
        });
        daysElement.appendChild(dayElement);
    }

    // Mostrar la ventana modal con la lista de cumpleañeros
    function showModal(birthdaysForDay) {
        birthdayList.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos elementos
        birthdaysForDay.forEach(function(person) {
            const listItem = document.createElement('li');
            listItem.textContent = person;
            birthdayList.appendChild(listItem);
        });
        modal.style.display = "block";
    }

    // Cerrar la ventana modal al hacer clic en el botón de cerrar
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar la ventana modal al hacer clic en cualquier lugar fuera de ella
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
