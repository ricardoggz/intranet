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
        7: { // Agosto
            1: [
                'HERNANDEZ BAUTISTA LUCINDO',
                'HERNANDEZ SALAZAR MARIA DEL CARMEN PATRICIA',
                'LOPEZ RAMOS SONIA ESPERANZA',
                'MERCADO ARZATE RENATO ASCARI',,
                'ALCOCER HERNANDEZ PATRICIA',
                'MEDINA PELCASTRE MARISOL',
                'SCHERER IBARRA MARIA ADRIANA',
                'LOPEZ ALTAMIRANO VERONICA',
                'CONDE VILLAGRANA NEREYDA',
                'MORAN CAPORAL IRMA SONIA',
                'GOMEZ QUINTANA YAZMIN',
                'MORENO MORENO GERARDO',
                'MARTINEZ RODRIGUEZ ELIZABETH GABRIELA',
                'SANJUAN MENDEZ ADRIANA'
            ],
            2: [
                'ROJAS CAMPOS MARIA DE LOS ANGELES',
                'VALDES CORONA MIGUEL ANGEL',
                'CORREA SANCHEZ MARIA ELENA',
                'TORRES TORRES MARIA GUADALUPE',
                'DE JESUS GONZALEZ ANA',
                'MARTINEZ CONTRERAS NORA GABRIELA',
                'FLORES GARCIA SERGIO'
            ],
            3: [
                'SALDIVAR VARGAS LIDIA',
                'SOTO OROZCO MARIA DEL PILAR',
                'HERNANDEZ REYES MARIA DE LOS ANGELES',
                'ORTEGA AGUILAR ARMANDO',
                'AGUAYO ROMERO MONICA ANAHI',
                'NICOLAS AVIÑA LIDIA',
                'CORIA LORENZO JOSE DE JESUS',
                'CAMARILLO ROJAS MARIBEL',
                'LOPEZ ESTEVEZ ANA LIDIA',
                'DIAZ BARRETO JORGE MAURICIO',
                'RUIZ GARCIA PALOMA ADELAIDA',
                'BALAM DE LA VEGA JOSUE ABRAHAM',
                'GARCIA LAGUNA DALIA LILIANA',
                'VALDES ORTEGA ESTEBAN ALBERTO'
            ],
            4: [
                'MONTES DE OCA ZAVALA VIOLETA DELIA',
                'MONROY RANGEL MARIBEL',
                'ROQUE LEE GRACIELA',
                'CASTILLO SALAS CESAR',
                'HERNANDEZ DIAZ JESSICA YANET',
                'BELTRAN GOMEZ GISELA',
                'HERRERA RODRIGUEZ MINERVA RUTH',
                'AGUIRRE VAZQUEZ TRINIDAD LILIANA',
                'ACEVEDO ZUÑIGA MARIBEL ALEJANDRA',
                'PASTOR PEREZ RAFAEL',
                'DE LA PAZ CASTAÑEDA YAEL DESIREE',
                'SANCHEZ ORTIZ SARAI'
            ],
            5: [
                'MARCIAL FLORES YOLANDA',
                'GUERRERO HERNANDEZ RAYMUNDO ISRAEL',
                'REYES MONTES NAYELI BERENICE',
                'MARTINEZ MARTINEZ ADRIANA',
                'GARCIA MORALES ITZEL'
            ],
            6: [
                'GARCIA ARANDA JOSE ALBERTO',
                'PEREZ RAMIREZ ALEJANDRO',
                'HERNANDEZ HERNANDEZ REYNA',
                'ROMERO BAIZABAL BERTHA LILIA',
                'SANTOS SEGURA ARACELI',
                'CARRANZA GILES ARACELI',
                'RAMIREZ CASTREJON GUSTAVO',
                'VARGAS PINEDA ABRAHAM',
                'MORALES PEREZ DULCE MARIA',
                'BARAJAS HERNANDEZ CARLOS'
            ],
            7: [
                'MACIAS CUESTA NORMA',
                'PENCHYNA GRUB JAIME',
                'ARELLANO TINAJERO RODRIGO',
                'CHAVEZ GUTIERREZ ESTEFANIA',
                'TOVILLA GUTIERREZ JOSE MANUEL',
                'PEREZ MONROY GUSTAVO OMAR',
                'ESPINOZA HERNANDEZ MARIA GUADALUPE',
                'ROLDAN GARCIA DIANA NATALY',
                'HERNANDEZ LOPEZ CRISTINA'
            ],
            8: [
                'LOZANO AYALA ALI SANDRO',
                'ROSENDI BELTRAN ALEXANDRO',
                'ALEMAN LOPEZ ADALBERTO',
                'SANCHEZ CONTRERAS MARICELA',
                'PEREZ RAMIREZ DAMARIS IXCEL',
                'MARTINEZ CASTILLO LIZBET SELENE'
            ],
            9:[
                'PADILLA CORDOBA DIANA ESTEFANIA',
                'HERNANDEZ ROSILES VANESSA'
            ],
            10:[
                'BARCENAS BOBADILLA LORENA',
                'GARCIA ARCOS PAOLA',
                'RODRIGUEZ JIMENEZ JOSE LUIS',
                'MEDELLIN ROJAS ESPERANZA MONICA'
            ],
            11:[
                'PLASCENCIA MATA MARIA DEL CARMEN SUSANA',
                'RODRIGUEZ HERNANDEZ SUSANA',
                'ZARATE PAREDES MARICELA',
                'CASAS REYNA ADRIAN',
                'ZUBIETA BURGOS MARIANA DE LOS ANGELES',
                'PATIÑO GONZALEZ EDITH',
                'GONZALEZ DORANTES CARLOS',
                'CASTILLO CASTILLO SALVADOR',
                'MADRIGAL COLIN ALFREDO',
                'MURILLO ELIOSA JUAN RAFAEL',
                'PEREZ VILLALOBOS SARA ITZEL',
                'OCAÑA FLORES IDANIA'
            ],
            12:[
                'MEJIA VILLARREAL CLARA',
                'ALBA HERNANDEZ KAREN',
                'ALDERETE FIGUEROA DARIANA',
                'BERNAL CHEW CLARA PATRICIA',
                'RIVERA PAZOS CLARA MONSSERRATT',
                'ANGELES VALDEZ JESUS',
                'CABRERA BALTAZAR ANDRES'
            ],
            13:[
                'HILARIO MENDOZA JORGE',
                'RANGEL RESENDIZ VERONICA',
                'JIMENEZ GOMEZ ARIEL ENRIQUE',
                'MARTINEZ CAMACHO FIDELIA',
                'CUANALO GALICIA ELIZABETH KAREN',
                'ROSAS PEREZ DALIA GUADALUPE',
                'BUENDIA ROJAS JAVIER',
                'PEREZ MONROY ROGELIO',
                'VILLAVICENCIO RAMIREZ YURIRIA SARAI'
            ],
            14:[
                'HERNANDEZ GARCIA GABRIELA',
                'RAMIREZ SALAS EVA VALERIA',
                'GONZALEZ CASTILLO ANALI',
                'MORENO VILLANUEVA SERGIO ESTEBAN',
                'EMILIANO GARCIA ROCIO JAQUELINE',
                'SILVA CABRERA BEATRIZ ADRIANA',
                'RANGEL TELLEZ MARIA DE LOS ANGELES',
                'MIRAFUENTES MARTINEZ CECILIA',
                'HERNANDEZ VAZQUEZ AMEYALLI QUETZALLI'
            ],
            15:[
               'FLORES MORENO MA. ASUNCION',
               'MAGAÑA ORTIZ JOSE JUAN',
               'DIAZ PARDO MARIO',
               'GARCIA DIEGO PEDRO',
               'TAPIA REYNOSO JUAN MANUEL',
               'RAMIREZ CRUZ ALFREDO',
               'GONZALEZ MENDOZA BERENICE',
               'BARRAGAN MENDOZA MIGUEL ENRIQUE'
            ],
            16:[
                'FLORES ZAMORA ERIKA',
                'SARABIA GUADARRAMA SANTIAGO',
                'ROMERO GOMEZ SILVIA',
                'GARCIA ARANA STEPHANY SBHEIDY',
                'RAÑA MENDOZA RODRIGO',
                'RUIZ RICO MIGUEL',
                'SENDEROVICH LEON NOEMI',
                'MORALES CERON LUZ ANDREA',
                'CORONA COLINDRES MARCOS ICOQUIH'
            ],
            17:[
               'PEREZ PONCE OFELIA',
               'VITE VILLEGAS EFRAIN',
               'BAUTISTA JIMENEZ KATHERINE',
               'SALGADO ARROYO BETZABE',
               'ROBLEDO RUBIO JESSICA BIANCA',
               'ARREDONDO CERVANTES ROSA VERONICA',
               'ACOSTA CRUZ BEATRIZ',
               'ISLAS AYALA NADIA ITZEL',
               'GUILLEN NIEMEYER MARIA DE LOURDES GUADALUPE'
            ],
            18:[
                
            ],
            19:[
                              
            ],
            20:[
                
            ],
            21:[
                
            ],
            22:[
                
            ],
            23:[
                
            ],
            24:[
                
            ],
            25:[
                
            ],
            26:[
                
            ],
            27:[
                
            ],
            28:[
                
            ],
            29:[
                
            ],
            30:[
                
            ],
            31:[                
                
            ]
        }
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
