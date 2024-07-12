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
        6: { // Julio
            1: [
                'CHAVEZ LOPEZ ADRIAN',
                'VILLEGAS REYES NATALIA',
                'VALLE BRAVO ALEXIS ISAAC',
                'SANCHEZ GONZALEZ ISABEL',
                'ARREGUIN SANCHEZ ANABEL',
                'RIVERA MAYA ELIA',
                'GOMEZ CARDENAS LILIANA',
                'ANAYA ALONSO BRENDA MABEL',
                'FLORES LUNA ARTURO'
            ],
            2: [
                'ZALDIVAR RIVERA JOSE MIGUEL',
                'DIONICIO ABRAJAN MARIA ISABEL',
                'SANCHEZ SALGADO KAREN LIZETH',
                'NAVARRO PALOMARES IRENE AMERICA',
                'JOAQUIN GUERRERO BERTHA ISABEL',
                'MARTINEZ SALAS JOSSELYN ARELI',
                'ORTINEZ BENAVIDES LIBRADO',
                'DURAN GUEVARA NADIA IRENE',
                'ESPINO HERNANDEZ PEDRO',
                'TINOCO VILLEGAS DEYSI ALEJANDRA',
                'ORTEGA LOPERENA ROBERTO IVAN'
            ],
            3: [
                'ACOSTA ROBLES ENRIQUE HUMBERTO',
                'GOMEZ FUENTES FERNANDA OSIRIS',
                'MEZO PEÑA CARLOS'  
            ],
            4: [
                'HERNANDEZ ROCHA EDUARDO',
                'ROMERO GONZALEZ DAVID ARNOLDO',
                'MANDUJANO RUIZ JESUS',
                'MENDOZA MARTINEZ MARIA GABRIELA',
                'ALCANTARA NOGUEZ CARLOS',
                'SANCHEZ PEREZ REFUGIO SILVIA',
                'MARTINEZ JUAREZ MARIA ISABEL',
                'MARTINEZ FLORES ELIZABETH',
                'BECERRIL RAMIREZ ALMA ADRIANA',
                'ECHEVERRIA MONTALVO MARICELA'
            ],
            5: [
                'CASTRO FRANCO VERONICA',
                'VITE ORTIZ ROSALBA',
                'PEDROSA ISLAS LAURA AVELINA',
                'REYES CRUZ ARIADNA',
                'JUAREZ URBANO MARIA LAURA'
            ],
            6: [
                'OLAZAGASTI PLASCENCIA ELIZABETH',
                'MARTINEZ CASTRO GLORIA ANTONIA',
                'RAMIREZ DE JESUS VICTORIA',
                'SORIA ALVAREZ DAVID'
            ],
            7: [
                'VALENCIA HERRERA ADRIANA MARIA',
                'AGUILAR NAVA MARIA ROSARIO',
                'MARTINEZ CONTRERAS ULISES ISRAEL',
                'PERALTA DELGADILLO FERMIN SALVADOR',
                'RUIZ SANTILLAN CLAUDIA ALEJANDRA',
                'MIRANDA HERNANDEZ STEPHANIA',
                'JUAREZ GONZALEZ PAULINA',
                'LEZAMA NIEVA NANCY YETZAREE',
                'MULIA PEDRAZA ROBERTO ANTONIO',
                'RODRIGUEZ GALICIA CITLALLI',
                'LOPEZ HERRERA CLAUDIO FERMIN',
                'ARELLANO GALINDO JOSE',
                'RAMIREZ GEORGE ENRIQUE',
                'GONZALEZ VALENZUELA VERONICA GUADALUPE'
            ],
            8: [
                'RODRIGUEZ GUZMAN DIANA KAREN',
                'ACOSTA RODRIGUEZ BUENO CARLOS PATRICIO',
                'MURGA BERMEO CHRISTIAN',
                'HERNANDEZ ALVARADO INGRID GABRIELA',
                'IBAÑEZ ORAN MIRIAM',
                'RAMIREZ  MEJIA DIANDRA ABRIL',
                'FAJARDO RUIZ LIZBETH SABRINA',
                'GALLARDO HUERTA KARLA ESTEFANIA',
                'BRAVO OLIVARES SANDY OLIVIA',
                'RAMIREZ ANSELMO ENRIQUE',
                'HERNANDEZ FERNANDEZ JERONIMO',
                'HERNANDEZ DIAZ TANIA',
                'LOPEZ MENDOZA CIRO'
            ],
            9:[
                'MELENDEZ GONZALEZ BLANCA YOLANDA',
                'RAMIREZ GARCIA ELIA EUGENIA',
                'OSEGUERA VALTIERRA MARIA GUADALUPE',
                'MONTOYA FLORES NICOLAS',
                'HUERTA NAJERA BLANCA ISABEL',
                'GARCIA ROJAS DULCE ODETH'
            ],
            10:[
                'VAZQUEZ ARELLANO TANIA MARLEN',
                'CRUZ HERNANDEZ ANA MARIA',
                'GUERRERO DIAZ ANA CARMEN',
                'SANDOVAL GOMEZ GENARO',
                'VEGA BENITEZ AMALIA',
                'AYALA SALINAS BLANCA AMALIA',
                'ROCHA JUAREZ GUADALUPE',
                'CONTRERAS CERRILLO ILSE DENISSE',
                'CAMPOS LARA MARIA GUADALUPE',
                'ANGELES APARICIO RAUL',
                'FUENTES HERNANDEZ IRMA HILDA'
            ],
            11:[
                'MUNGUIA RAMIREZ JULIETA',
                'AVALOS ARENAS VERONICA',
                'GALICIA CASTILLO SUSANA',
                'SANTOS GONZALEZ VIANEY',
                'BOLAÑOS VALENCIA ANGELICA',
                'CANSECO LOPEZ CINDY',
                'CRUZ GARCIA LAURA ANALIA',
                'ALVARADO CABELLO MARIBEL'
            ],
            12:[
                'SANCHEZ BOISO ADRIANA',
                'PEÑALOZA OCHOA LAURA',
                'ARAGON LUIS ZAMIRA',
                'JUAREZ RODRIGUEZ DANIELA ITZEL',
                'MUÑOZ MARTINEZ NYKTEXA',
                'MEJIA VICTORIA RUBI CECILIA',
                'CASAS RODRIGUEZ ALMA ROSA',
                'JIMENEZ ROMERO JOSE LUIS',
                'RAMIREZ GUERRERO CELEDONIO',
                'ENRIQUEZ ZAVALA CARLOS ALBERTO',
                'GOMEZ SOBERANES JOSE OMAR',
                'BONILLA PEREZ DANIEL',
                'LUIS CERON EDGAR SERGIO'
            ],
            13:[
                'MEJIA URBINA IRIS JULISSA',
                'GUZMAN ORDAZ FRANCISCO JAVIER',
                'OBREGON ESPEJEL ALEJANDRO',
                'ALVIZURI FERNANDEZ OLIVIA',
                'DIAZ GUERRERO ESTEFANIA',
                'PEREZ MENDEZ GUSTAVO',
                'LEON RIVERA MARIA FERNANDA',
                'LEAL GONZALEZ LUIS ALBERTO',
                'DIAZ GUERRERO PAVEL DANIEL'
            ],
            14:[
                'JUAREZ BARAJAS VIRIDIANA',
                'LOPEZ VALLADARES KARINA ELVIRA',
                'CARRASCO MELENDEZ JAQUELINE ESTELA',
                'ZARCO ARMENTA JAIME DANIEL',
                'ZUGARAZO SANCHEZ ANA CRISTINA',
                'MARTAIN PEREZ ITZAMARA JACQUELINE',
                'DE LA TORRE JUAREZ MARIA DEL SOCORRO',
                'GURROLA NOVELO JOSE ANTONIO'
            ],
            15:[
                'CHIRINOS CHIRINOS YAIL IXE',
                'GONZALEZ VELAZQUEZ ENRIQUETA',
                'SALINAS GALVAN DIEGO MAXIMILIANO',
                'OROZCO ARREDONDO ANAYELI',
                'NAVA RODRIGUEZ ENRIQUETA',
                'GONZALEZ GARCIA VICTOR',
                'CRUZ LOPEZ ALICIA',
                'AYALA RIVADENEYRA RICARDO ANDRE',
                'SANTIAGO CRUZ DIANA GUADALUPE',
                'FLORES GUERRERO CARMELA',
                'MORALES HERNANDEZ GREGORIA',
                'LESCAS NAVA SARA',
                'GONZALEZ ORTEGA RICARDO'
            ],
            16:[
                'LOPEZ AZCARRAGA AIDA ALEJANDRA',
                'GONZALEZ GARCIA MIGUEL ANGEL',
                'ZARCO ROMERO FERNANDO',
                'PASTRANA ARROYO YESSICA JAZMIN',
                'PINEDA GALICIA CIRO',
                'PORTILLO SALAS PABLO',
                'MEDINA GARCIA MARIA DEL CARMEN'
            ],
            17:[
                'BAÑUELOS ORTIZ CARLOS RAFAEL',
                'APECECHEA HERNANDEZ ISMAEL ALFREDO',
                'ANDRACA JUAREZ ALEJANDRA EDNA',
                'ROJAS CRUZ VIRIDIANA',
                'ANGELINO RAYON PATRICIA',
                'ROSAS DE SANTIAGO DIANA',
                'MONZALVO ARRONA MARIA TERESA',
                'GONZALEZ SILVA KARLA DANIELA',
                'BEDOLLA CORONA ALEJANDRA',
                'SANCHEZ RAMIREZ ALEJANDRA'
            ],
            18:[
                'SANCHEZ VILLICAÑA KARLA MARINA',
                'TORRES ALVAREZ MARIA GUADALUPE',
                'LEDESMA GARCIA ALEJANDRA GUADALUPE',
                'ESQUIVEL MORALES CORNELIO',
                'JUAREZ VIDAL AXELLE',
                'MARTINEZ RUIZ VICTOR BERNARDO',
                'OCON RAMIREZ SANJUANA',
                'FLORES HERNANDEZ MARIO',
                'GARRIDO CARRANZA EYMY JAQUELINE'
            ],
            19:[
                'AVILA ROSAS JOSE ALBERTO',
                'DOMINGUEZ POLONIO JAZMIN CANDELARIA',
                'MEDINA PEÑA ITZEL',
                'SOLIS MUÑOZ MIGUEL ANGEL',                
            ],
            20:[
                'AGUILA TORRES ROSALINDA',
                'GALICIA GIL BRENDA',
                'GARCIA RUIZ OLGA',
                'JIMENEZ JIMENEZ MARCELA',
                'MEDINA OLGUIN JUAN MANUEL',
                'NAVARRO URIBE ELIZABETH DE LOS ANGELES',
                'ORTIZ CORCHADO MIRIAM',
                'PEREZ GOMEZ ALEJANDRA',
                'RODRIGUEZ URIOSTEGUI MARGARITA',
                'SOLIS MARTINEZ AIDA' 
            ],
            21:[
                'ALDANA GONZALEZ ANGELICA',
                'DORANTES ACOSTA ELISA MARIA',
                'FLORES GARCIA BEATRIZ ARIANA',
                'MAGALLAN ALVAREZ ADANARY MARCELA',
                'MANGUILAR LOPEZ ALFONSO',
                'OLAYA GOMEZ MARICELA',
            ],
            22:[
                'ALVARADO CORTES LILIANA',
                'MEJIA JARDINES NORMA ANGELICA',
                'PACHECO GALVAN KARINA ITZEL',
            ],
            23:[
                'AQUINO JARQUIN GUILLERMO',
                'GARCIA SANCHEZ MARIELA',
                'GONZALEZ ESCUTIA APOLINAR',
                'HERRERA GARCIA MARIANA',
                'MARIANO RAMIREZ MINERVA',
                'NAVARRO GEMINIANO SILVIA SAMANTA',
                'NORIEGA LOPEZ ELIZABETH',
                'RAMOS ESPEJO MARIA DOLORES',                
                'SOLANO FIESCO LIBORIO',
                'TORRES DIONICIO ANGEL',
            ],
            24:[
                'CADENA GODINEZ KARINA',
                'CANO MONDRAGON MARIA FERNANDA',
                'CERVANTES PLIEGO MARIA DE JESUS',
                'JAMAICA BALDERAS LOURDES MARIA DEL CARMEN',
                'LAZCANO RODRIGUEZ ISRAEL',
                'MARTINEZ LIMON CRISTINA ABIGAIL',
                'MIRANDA CANTERO KAREN BERENICE',
                'RODRIGUEZ NAVARRO MARIA FERNANDA',
                'ROSAS MORENO VICTOR',
                'TEJEDA SILVA MIGUEL',
                'VERA LOPEZ MAYRA DE JESUS',
                'VIGUERAS GALINDO JUAN CARLOS'
            ],
            25:[
                'ESCOBAR SANCHEZ MARIA ARGELIA',
                'ESQUILIANO RENDON DIEGO RICARDO',
                'GALINDO MANDUJANO SANDRA',
                'HERNANDEZ GONZALEZ SANTIAGO',
                'JIMENEZ BURGOS ANA ALICIA',
                'LOPEZ AGUILAR EDGAR IVAN',
                'VAZQUEZ CRUZ JENNY FERNANDA',
                'ZUÑIGA NORIEGA VIRIDIANA'
            ],
            26:[
                'CARBAJAL CORTEZ ROSA ELENA',
                'CARRILLO SANCHEZ REBECA',
                'FABIAN QUINTIN ANA LILIA',
                'FIGUEROA ESTRADA ANA MARIA',
                'NAJERA MENDEZ SILVIA',
                'ROMERO PERFECTO MIRIAM',
            ],
            27:[
                'AGUADO HUERTA FRANCISCO JAVIER',
                'GOMEZ CHICO VELASCO REBECA MARIA',
                'HERNANDEZ RUIZ MARTHA PATRICIA',
                'KLUNDER KLUNDER MIGUEL',
                'MIGUEL MERECIAS NATALIA',
                'MONTIEL GARDUÑO RUBEN GERARDO',
            ],
            28:[
                'AVILA FERNANDEZ GUADALUPE',
                'CABELLO MORENO MARIA CRISTINA',
                'LOPEZ ROSALES VICTOR MANUEL',
                'MARTINEZ LOPEZ GABRIELA',
                'NAVARRETE CALZADA ESPERANZA',
                'PEREZ RAMIREZ JOSE MARIEL',
                'PLATA LOPEZ VIRGINIA',
                'RAMIREZ FUENTES CAROLINA',
                'RINCON RODRIGUEZ HECTOR',
                'RIVERA TAPIA YANEL',
                'RIZZOLI CORDOBA ANTONIO',
                'SANCHEZ ORTEGA YAQUI LAZER',
                'VAZQUEZ FRANCO VICTOR MANUEL PATROCINIO',
            ],
            29:[
                'CABELLO CONTRERAS MAGDALENO URBANO',
                'CALDERON TORRES NYDIA GISELA',
                'CAMACHO PEREZ MARTHA',
                'CUEVAS HERNANDEZ ROSALBA',
                'DEL CASTILLO SANCHEZ OMAR SIDHARTA',
                'GARCIA NAJERA CECILIA VANESA',
                'GONZALEZ ALVARADO LUIS RODRIGO',
                'HERNANDEZ PACHECO MARIO ARTURO',
                'MANRIQUE ARGUELLO FERNANDA',
                'MARTINEZ GARCIA BEATRIZ',
                'MARTINEZ MORALES RAFAEL',
                'NUÑEZ PRADO MARTHA',
                'PAPAQUI PEREZ DANIELA NAYELI',
                'RODRIGUEZ Y RODRIGUEZ CARLA GIZEHL',
                'SOLER QUIÑONES NADIA',
                'VAZQUEZ FLORES RUBEN',
                'VAZQUEZ NAVARRETE ROMELIA BLANCA',
                'VENTURA RAMIREZ JORGE ERNESTO',
            ],
            30:[
                'CASARRUBIAS YOUSHIMATZ JOSE CARLOS',
                'CASTILLO SANTIAGO DAFNE',
                'LOPEZ ARROYO SANDRA VERONICA',
                'MIRANDA NUÑEZ JOEL',
                'NAVA GARCIA DIANA ELIZABETH',
                'SALAZAR LUNA MIGUEL ANGEL',
            ],
            31:[                
                'AMARO REYNOSO CESAR ULISES',          
                'CASTILLO RUBI JUAN MANUEL',
                'ESPARZA GARCIA MARIELA',
                'FRANCISCO TORRES DANIA MARIEL',
                'HERNANDEZ VARGAS IGNACIO',
                'LUNA CHAVEZ MARIA TERESA',
                'LUNA MONTIEL ESTHER YACSIDI',
                'MARTINEZ GUERRA MARIA ELENA',
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
