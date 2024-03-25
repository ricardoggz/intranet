document.addEventListener("DOMContentLoaded", function() {
    const monthElement = document.querySelector('.month');
    const daysElement = document.querySelector('.days');
    const birthdayModal = document.getElementById('birthdayModal');
    const closeBtns = document.querySelectorAll('.close');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const prevMonth = document.getElementById('prevMonthBtn');
    const calendarContainer = document.getElementById('calendarContainer');
    const announcement = document.getElementById('announcement');

    // Datos de ejemplo de cumpleañeros
    const birthdays = {
        2: { // Febrero
            14: ["Ana", "Juan"], // Cumpleaños el 14 de febrero
            25: ["María"] // Cumpleaños el 25 de febrero
        },
        3: { // Marzo
            5: ["Pedro"] // Cumpleaños el 5 de marzo
        }
        // Agrega más cumpleaños según sea necesario
    };

    let currentDate = new Date(); // Inicialmente, el mes actual
    renderCalendar(currentDate);

    // Función para renderizar el calendario para un mes dado
    function renderCalendar(date) {
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();

        // Limpiar el contenido del calendario antes de agregar los nuevos elementos
        daysElement.innerHTML = '';

        // Obtener el nombre del mes actual
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        monthElement.textContent = months[currentMonth];

        // Obtener el número de días del mes actual
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Crear los elementos de los días del mes actual
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'current-month');
            dayElement.textContent = i;
            dayElement.dataset.month = currentMonth;
            dayElement.dataset.year = currentYear;
            if (birthdays[currentMonth] && birthdays[currentMonth][i]) {
                dayElement.classList.add('has-birthday');
            }
            dayElement.addEventListener('click', function() {
                const day = parseInt(this.textContent);
                const month = parseInt(this.dataset.month);
                const year = parseInt(this.dataset.year);
                const birthdaysForDay = birthdays[month] && birthdays[month][day] ? birthdays[month][day] : [];
                showModal(birthdayModal, birthdaysForDay);
            });
            daysElement.appendChild(dayElement);
        }

        // Mostrar u ocultar el calendario o el anuncio según si hay cumpleaños o no
        if (Object.keys(birthdays[currentMonth] || {}).length > 0) {
            calendarContainer.style.display = 'block';
            announcement.style.display = 'none';
        } else {
            calendarContainer.style.display = 'none';
            announcement.style.display = 'block';
        }
    }

    // Mostrar la ventana modal con la lista correspondiente
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

    // Escuchar clic en el botón para avanzar al siguiente mes
    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1); // Avanzar al siguiente mes
        renderCalendar(currentDate); // Renderizar el calendario actualizado
    });

    prevMonth.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + - 1); // Avanzar al siguiente mes
        renderCalendar(currentDate); // Renderizar el calendario actualizado
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
