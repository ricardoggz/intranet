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
        5: { // Abril
            1: [
                'ROMERO ROMAN AIDE',
                'RAMIREZ GARCIA ADRIANA YAZTMIN',
                'MORENO CABRERA GERARDO',
                'BARRERAS PEREZ ELIAS'
            ],
            2: [
                'CONSTANTINO CASTRO ARTURO',
                'JIMENEZ ZAMORA MARCELINA',
                'GONZALEZ  MARIA ELENA',
                'GARCIA TORRES INGRID LETICIA',
                'RESENDIZ SANCHEZ JESUS',
                'FLORES ROJAS BLANDINA',
                'GUILLEN PECH JESUS'
            ],
            3: [
                'PEREZ TORRES IDALIA',
                'MEDINA PACHECO MAURICIO',
                'VARGAS FUENTES ALAIDE LETICIA',
                'VAZQUEZ ITURBE EDGAR MARTIN',
                'GONZALEZ CASTILLO NANCY',
                'HERNANDEZ BASURTO MARIA JULIA'
            ],
            4: [
                'GONZALEZ OCAMPO EDITH',
                'BENITEZ VEGA MARIBEL',
                'ROJAS MARTINEZ CIRILA',
                'RIVERO PONCE RICARDO',
                'AVILA MORENO VIANEY'
            ],
            5: [
              'VAZQUEZ SOLANO EDNA PATRICIA'  ,
              'GUATEMALA FLORES ISRAEL',
              'GOMEZ MENDOZA MAYTE CONCEPCION',
              'GARCIA LECHUGA FERNANDO RICARDO',
              'TOVAR FERNANDEZ NANCY SARAHI',
              'LOPEZ HERRERA CARLA EILEEN',
              'GARZA RODRIGUEZ DAVID EDUARDO',
              'PAZ MARTINEZ ERNESTO',
              'RODRIGUEZ ROMERO EVELIA OLIVIA',
              'GONZALEZ SANTANA JOSE GERARDO',
              'CORDERO CANTU JORGE DANIEL'
            ],
            6: [
                'GOMEZ DOMINGUEZ YAZMIN AIDEE',
                'GUERRERO LONA ARACELI',
                'NORIEGA ALCANTARA ANA MARIA',
                'MENDOZA CHAVEZ ALFREDO',
                'AVILA GONZAGA SANDRA EDITH',
                'GONZALEZ PARRA YURENIA',
                'GARZA RODRIGUEZ ANA MARIA',
                'GOMEZ JUAREZ LILIA GUADALUPE',
                'MORALES MEDINA SOFIA'
            ],
            7: [
                'GAMA ALBARRAN ANA PAULA',
                'ROMAN RAMIREZ LILIA',
                'NAVARRETE JOAQUIN MITZI ANDREA',
                'RODRIGUEZ DAVILA JORGE MARIO',
                'HERNANDEZ HERNANDEZ LAURA',
                'ESPINOZA HERNANDEZ KARINA',
                'MARTINEZ CASTILLO JIMENA',
                'BENITEZ RODRIGUEZ SONIA',
                'GARCIA MARTINEZ LILIVETH'
            ],
            8: [
                'GARCIA DELGADO CONSTANZA',
                'MORA LANDEROS JUAN DANIEL',
                'GONZALEZ ROMERO LUIS ANTONIO',
                'MOLINA LEON MAYRA',
                'ROCHA JUAREZ MARIBEL',
                'CUEVAS SANTANA ULISES'
            ],
            9:[
                'GOMEZ MELENDEZ GUADALUPE PATRICIA',
                'CHAPA KOLOFFON GINA DEL CARMEN',
                'RIOS ARELLANO ALIDA',
                'TORRES ROMERO BLADIMIR',
                'VELAZQUEZ SERRANO SARA',
                'SANCHEZ ALPIZAR EDUARDO',
                'HERNANDEZ ROMERO ANA LAURA',
                'SANCHEZ SANCHEZ FELIX',
                'PORTILLO GUZMAN ALEJANDRO',
                'LOPEZ RAMOS OSCAR MAURICIO',
                'TOMAS GARCIA LIZETH JAZMIN'
            ],
            10:[
                'RAMIREZ ORTIZ MARCO ANTONIO',
                'MENDOZA CELIS MAYTE',
                'VILCHIS ORDOÑEZ ARMANDO',
                'BADILLO GARCIA MARIA PAULA',
                'SERNA RODRIGUEZ MARTHA',
                'PALACIOS AYALA YOCELIN',
                'FLORES GUERRA MARGARITA',
                'MORENO MARTINEZ JUANA AIDE',
                'PORRAS GARCIA MARIANA'
            ],
            11:[
                'TORRES PACHECO JESUS ALEJANDRO',
                'SEDANO MENDOZA DAYLIN',
                'VENTURA JIMENEZ LUIS ERNESTO'
            ],
            12:[
                'CANO GALVEZ MARCO ANTONIO',
                'GONZALEZ CAZARES DIANA LAURA',
                'BOLAÑOS LEYVA MARCO ANTONIO',
                'ROBLES HUERTA ISABELLA MACARENA',
                'OCAMPO GOMEZ RODRIGO',
                'LIMA DIAZ LLUVIA ALEXANDRA',
                'VIVAR HIDALGO JORGE ARMANDO',
                'GARCIA CHAVEZ JUANA',
                'SANCHEZ SILVA CARLOS ADRIAN'
            ],
            13:[
                'AREVALO POSADA CINDY VANESSA',
                'ESQUIVEL LOPEZ JOSE ANTONIO',
                'CAMARENA CRUZ ANTONIA',
                'MARTINEZ AMBROSIO ANTONIA',
                'ANTONIO BENITEZ FILIBERTO JESUS',
                'VITE RAMIREZ AQUILINA',
                'LOPEZ LOPEZ ANTONIA',
                'DOMINGUEZ SANCHEZ GABRIELA',
                'ORTIZ MEDINA ALEJANDRO',
                'VALVERDE SOLARES ANTONIO',
                'ZAFRA GUERRERO FABIOLA',
                'OBREGON ESPEJEL LORENA RAQUEL'
            ],
            14:[
                'RUIZ BEDOLLA ELISEO',
                'ROJAS RANGEL IVETTE SUSANA',
                'LARA GARCIA DENISE YERALDI',
                'CARDENAS JIMENEZ MARISOL',
                'REYNA VARGAS PRISCILLA',
                'AMADO HERNANDEZ DELFINO'
            ],
            15:[
                'TREJO RUIZ LUZ MARIA',
                'LUGO VASQUEZ JESSICA',
                'MENDEZ ARTEAGA ELIZABETH',
                'HERNANDEZ REYES DULCE MARIA ANTONIA',
                'JUAREZ RAMIREZ MARIA DE LOURDES',
                'TRUJANO RODRIGUEZ JOSE NORBERTO',
                'HERNANDEZ BENITEZ JUAN JOSE',
                'VIDRIO HERNANDEZ YONATHAN ERICK',
                'PEREZ PRIEGO MARIANA',
                'HERNANDEZ RAMIREZ MAXIMILIANO'
            ],
            16:[
                'ARCOS KOHLMANN IVAN',
                'GALVAN MONTIEL ROQUE',
                'SANCHEZ  RENE DE LA LUZ',
                'HERNANDEZ MEJIA FLOR MICHELLE',
                'NIETO OJEDA CARLA IVON',
                'BARRIOS HUERTA ANA KAREN',
                'MUÑOZ SOLORZANO RUTH NAYELI',
                'FRANCO ARMENDARIZ MONICA',
                'BANDA RUBIO AURORA',
                'BRUCIAGA DE LA CUESTA PAMELA',
                'SANTIAGO MARDESICHE KAREN ITZEL'
            ],
            17:[
                'CASTILLO GARCIA DANIELA',
                'RAMIREZ GARCIA MARINA',
                'LUENGAS ESCAMILLA YOLANDA',
                'RIOS ARELLANO EFRAIN',
                'HERNANDEZ MARTINEZ TANIA KARELY',
                'DOMINGUEZ SANTIAGO ENRIQUE',
                'FRAGOSO LUNA LUCIA CAROLINA',
                'ROJAS MALDONADO MANUEL'
            ],
            18:[
                'HERNANDEZ ESQUIVEL MARIANA',
                'BELMONT SANCHEZ JHOVANI',
                'JEAN TRON MARIA GUADALUPE',
                'LOPEZ CONTRERAS IRIS NALLELY',
                'CALLEJA RODRIGUEZ JULIO ISRAEL',
                'DOMINGUEZ VARGAS MARIA VERONICA',
                'MEZA GARCIA MARCELINA',
                'RAMIREZ HERNANDEZ SARAI',
                'MENDOZA CABELLO JAQUELINE ELIZABETH',
                'RODRIGUEZ TORRES DIANA LAURA'
            ],
            19:[
                'FERNANDEZ PATIÑO VICTOR MANUEL',
                'URIBE ROY NATALIA',
                'PEREZ MARTINEZ GABRIELA AVIGAIN',
                'ARROYO CRUZ YAZMIN',
                'MANZANO MIRANDA FABIOLA',
                'UGALDE JUAREZ LIZBETH'
            ],
            20:[
                'SANCHEZ CURIEL LOYO MARIANA',
                'MUÑOZ ALARCON ALAN',
                'SALINAS SANCHEZ VICENTE SALVADOR',
                'ROSAS PEREZ VICTORIA',
                'MELENDEZ GARCIA ELIA SILVIA',
                'ORTIZ HERNANDEZ RODRIGO SILVERIO',
                'RODRIGUEZ VARGAS ROBERTO DANIEL',
                'PASTRANA CANO CYNTHIA BERENICE',
                'GONZALEZ GUERRERO JESUS',
                'VAZQUEZ DIAZ RITHA ALEJANDRA'
            ],
            21:[
                'TRUJANO RODRIGUEZ VIRIDIANA DEL CARMEN',
                'RAMIREZ VELA NANCY',
                'MARTINEZ CARRION MARIBEL',
                'CASTRO LUNA RAUL',
                'VIGUERAS MENESES LUIS EDUARDO',
                'BAYARDO ALCARAZ MARIA YAZMIN',
                'ROMERO CEDILLO JOSE LUIS',
                'ARANDA MENDOZA CLAUDIA',
                'ACEVEDO JUAREZ KAREN'
            ],
            22:[
                'PEREZ VILLANUEVA HEYNAR DE JESUS',
                'GAMA GOMEZ JUAN ANTONIO',
                'BARCENAS BOBADILLA MARIA MAGDALENA',
                'PICHARDO VILLALON LILIA',
                'GARCIA MORALES ROSA ALICIA',
                'OSEGUERA CANCINO ROSA ISELA',
                'GARRIDO NUÑEZ ERICK VICTOR GABRIEL'
            ],
            23:[
                'MEDINA BRAVO PATRICIA GUADALUPE',
                'BERNAL GARCIA ESMERALDA',
                'JIMENEZ OJEDA ALICIA',
                'PALACIOS REYNA AZARIA CHANTALLE',
                'LOPEZ ZAINS MA. DEL CARMEN',
                'RODRIGUEZ MARTIN TERESA',
                'GARCIA CORTES DANIELA IXCHEL'
            ],
            24:[
                'CARRILLO MARTINEZ JUANA',
                'ROJAS BELTRAN VERONICA PATRICIA',
                'GUTIERREZ SILVA MARTHA',
                'TALAVERA ALCARAZ CRISTINA',
                'LOPEZ ESTRADA YADIRA MISUKY',
                'ANGEL PAZ KARLA ESTHER',
                'MORALES MUÑOZ ADRIAN',
                'VARGAS ALONSO JUANA MARIA DEL SOCORRO',
                'DE LA CRUZ ROSALINO PATRICIA',
                'GARCIA GARCIA JUANA',
                'GARCIA REYES SUSANA',
                'ASTIVIA CHAVEZ OBED ISRAEL'
            ],
            25:[
                'MUÑIZ LOZANO MAYRA ELIZABETH',
                'VIÑAS FLORES NORMA LUCIA',
                'CAMPOS VALDEZ GUILLERMINA',
                'ROMO GUTIERREZ VERONICA',
                'GARCIA RUIZ SOCORRO',
                'AGUILAR CAMPOS ALEJANDRA',
                'MEJIA MARTINEZ GABRIEL'
            ],
            26:[
                'ROMERO ZAMORA JOSE LUIS',
                'GALICIA NUÑEZ ADRIANA AIDE',
                'GONZALEZ ROMERO EMMANUEL',
                'SUAREZ URIBE JUAN',
                'GARCIA MARTINEZ MARIA DE LOS ANGELES',
                'ZEPEDA ALVAREZ JOSE ANTONIO',
                'HERNANDEZ GARCIA JOSE LUIS',
                'SUAREZ URIBE PABLO'
            ],
            27:[
                'CABALLERO GARCIA MARIA DE LOURDES',
                'COTA ROMERO CARLOS FEDERICO',
                'QUIROZ BAEZA PABLO',
                'PAZ ROMERO KARINA FERNANDA',
                'ORTIZ MEDINA GUSTAVO',
                'SERRANO GARDUÑO JOEL',
                'QUINTERO GARCIA MARISOL',
                'RAMIREZ CAÑAS ARY OSIRIS'
            ],
            28:[
                'HERNANDEZ HUERTA FERNANDO ESTEBAN',
                'BARRON DIAZ JUAN JORGE',
                'MARTINEZ MEDINA LUCIA',
                'SANCHEZ TORRES ALFONSO FELIPE',
                'JIMENEZ LIMA RICARDO',
                'DIAZ MERCADO BEATRIZ',
                'MORALES CONTRERAS BRENDA ARIADNA',
                'CANSECO ESTRADA JOSE LUIS',
                'PLASCENCIA MATA MARIA IRENE',
                'CORTES CAMPOS IRINEA',
                'DOMINGUEZ GARCIA BRENDA'
            ],
            29:[
                'MIGUEL LONGINOS MANUEL DE JESUS',
                'IGNACIO FELIPE ELVIA',
                'SANCHEZ PEREZ SAGRARIO MARCELA',
                'RESENDEZ OROPEZA VANIA PAULINA',
                'SANCHEZ CARREON BERTHA ALEJANDRA',
                'DE LA ROSA AVILA ALFONSO',
                'HERNANDEZ MASCOTA IRMA ROSA',
                'SANDOVAL MERCADO ROSALBA'
            ],
            30:[
                'SOTO GUTIERREZ SUSANA LUCINA',
                'GUERRERO HERNANDEZ LILIA',
                'HERNANDEZ BUSTOS PEDRO',
                'RODRIGUEZ DE LA ROSA ANGELICA',
                'DURAN HONORATO LETICIA',
                'HERRERA HERNANDEZ KARINA',
                'HERNANDEZ VELAZQUEZ ARIANA ELIZABETH'
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
