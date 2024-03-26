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
        3: { // Abril
            1: [
                "MORALES ROMAN MARIBEL",
                "URIBE LUGO MARIA FERNANDA",
                "DELGADO GARCIA JACQUELINE STEPHANY",
                "SUZAN BLANCAS EDUARDO",
            ],
            2: [
                "DEL MORAL ESPINOSA IRMA ESTHER",
                "ZALLES VIDAL CRISTIAN RUBEN",
                "PALACIOS OVIEDO ROBERTO",
                "GONZALEZ FLORES OFELIA",
                "ZUÑIGA LARA ELSA MARIANA",
                "MARTINEZ CONTRERAS JUANA",
                "VELA GONZALEZ JUAN CARLOS"
            ],
            3: [
                "GONZALEZ MENDEZ RICARDO",
                "ORDORICA FLORES RICARDO MANUEL",
                "MORA LOPEZ MATILDE",
                "FUERTE MEJIA MICHAEL",
                "LEAL LARIS GRACIELA",
                "IBARRA CRUZ RICARDO ROBERTO",
                "CHAVEZ VEGA SANDRA ANGELINA",
                "CARRANZA AGUILAR ROSA MARIA"
            ],
            4: [
                "CASTAÑEDA PEÑA PATRICIA IVONNE",
                "GARCIA ESPINO DENISE",
                "HERNANDEZ SANCHEZ JORGE",
                "ROMERO MENDOZA ISIDORO NESTOR",
                "BUSTOS SALAZAR BARBARA",
                "LOPEZ ARELLANO ANA KARINA",
                "JUAREZ DANIEL JOSE LUIS",
                "SANCHEZ URBINA ROCIO",
                "RUIZ REYES IRVING ALEJANDRO",
                "VEGA RAMIREZ MARIA DE LOURDES",
                "ROMERO BALBUENA VIOLETA PAULINA"
            ],
            5: [
                "MUÑOZ PEÑA MIRIAM",
                "SANTILLAN ORGAS MARIA ESTHER",
                "HERNANDEZ TAPIA ANGELICA MARIA",
                "NAVARRETE BARBOSA EDGAR ISRAEL",
                "MENDOZA MORALES SANDRA ANGELICA",
                "GUTIERREZ RUBIO GABRIELA",
                "PEREZ GARCIA GUADALUPE",
                "ARELLANO GARCIA KARINA JOSELYN",
                "CABALLERO GARCIA EGLEN",
                "PEREZ DOMINGUEZ BRYAN RAFAEL",
            ],
            6: [
                "MOLINA CASTRO GRECIA",
                "WORONA LILIANA BEATRIZ",
                "CORTES BENAVIDES MARIA CRISTINA",
                "REYES FONSECA ANA LAURA",
                "CANALES ROBREDO CARLOS",
                "PUGA BUCIO BENJAMIN",
                "GARCIA SOLIS DIANA JANET",
                "RIVAS ESQUIVEL ANDREA ITZEL",
                "BAEZ AVILA IRMA LETICIA",
                "LOZADA LOPEZ VICTOR ALFONSO",
            ],
            7: [
                "MOYAO GARCIA DIANA",
                "GUTIERREZ RIVERO MARGARITA",
                "VEGA TRUJILLO VERONICA",
                "BAUTISTA LIMON DULCE ESPERANZA",
                "SAUCEDO TOLEDO MAYRA ELVIRA",
                "QUINTERO GARCIA JORGE ALEJANDRO",
                "SANDOVAL HERNANDEZ LUZ MERY"
            ],
            8: [
                "MALDONADO ROMO JIMENA",
                "CANIZALEZ ESCUDERO JENNIFER",
                "GOMEZ RUBIO ANDREA",
                "PEREZ LOPEZ ALMA CRISTINA",
                "SOLIS ARIAS LAURA ITZEL",
                "LUNA PINEDA VICTOR MANUEL",
                "GUZMAN ESTRADA ALBERTO",
                "JIMENEZ PICAZO ALBERTO",
                "OCAMPO GUTIERREZ LIZBETH",
                "SALAS FLORES MAGDA",
                "JUAREZ ARREZ ALEJANDRO"
            ],
            9:[
                "PICHARDO ORDOÑEZ MIGUEL ANGEL",
                "ESPITIA ALBORES CARLOS FERNANDO",
                "GARCIA UBALDO GUADALUPE",
                "HERNANDEZ GONZALEZ TANIA",
                "RAMIREZ MORALES ELISUA SARAI",
                "HERNANDEZ ALONSO AURORA",
                "VILLALOBOS MATEOS LUCIO",
                "RENDON TORRES ANDREA CECILIA",
                "RUIZ JIMENEZ BRISA NORELY",
                "ESPINOSA GARCIA MARIA GUADALUPE",
                "ZAMORA SALAZAR MARIO",
                "SANDOVAL MARTINEZ ROLANDO EMMANUEL"
            ],
            10:[
                "SERRANO BELLO CARLOS ALBERTO",
                "ESTRADA GARCIA MARY CARMEN",
                "CRUZ LEON MA. GUADALUPE",
                "RAYA RIVERA ATLANTIDA MARGARITA",
                "MALDONADO BERNAL MARIA DEL CARMEN",
                "GALICIA AMARO ULISES",
                "ALVA ARANZA MARIA DE LOURDES",
                "RUIZ HERNANDEZ MARISELA",
            ],
            11:[
                "VILLALPANDO CARRION SALVADOR",
                "GARCIA REGIL PATRICIA",
                "GONZALEZ ABURTO ARACELI",
                "SANCHEZ LUNA ESMERALDA ELIZABETH",
                "CARRILLO GOMEZ MARIA CONCEPCION",
                "CARRASCO ZENDEJAS IVONE",
                "GUEDEA OCHOA RAFAEL ALEJANDRO",
                "GARZA GALLEGOS KARLA PAOLA",
                "JERONIMO DUARTE LUZ LETICIA",
                "RODRIGUEZ ESPINOZA ERIKA"
            ],
            12:[
                "JIMENEZ LOPEZ NELLY",
                "LOPEZ CHAVEZ MIREYA",
                "SANCHEZ MIGUEL MARIA ELENA",
                "LOPEZ CORTEZ CARLOS ANTONIO",
                "SANTANA ROMAN MONTSERRAT ISABEL",
                "JIMENEZ FLORES GABRIELA LIZBETH",
                "GONZALEZ GARCIA NADIA",
                "RECINOS MORENO MARIA GUADALUPE",
            ],
            13:[
                "ALAMILLO HERNANDEZ ALFREDO TRINIDAD",
                "DULIZ DELGADO JESUS EDUARDO",
                "MEDINA BOBADILLA BALERIA LILIANA",
                "REYES PEDREZUELA REBECA",
                "SANDOVAL MATA MIRIAM ANGELICA",
                "VERA RICO SERGIO ARTURO",
                "GUERRA ELVIRA ABIGAIL ARIADNA",
                "VITE LOPEZ EDUARDO",
            ],
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
