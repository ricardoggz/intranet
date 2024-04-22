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
        4: { // Abril
            1: [
                "VAZQUEZ FLORES ADALBERTO",
                "BALTIERRA JIMENEZ MARIA DEL CARMEN",
                "GUTIERREZ CAMACHO CLAUDIA",
                "SALAZAR RIVERA JESUS JACOB",
                "BALDERRABANO SAUCEDO NORMA ALICIA",
                "GOMEZ ARCE OFELIA LETICIA"
            ],
            2: [
                "HAMDAN FUERTES LOURDES",
                "BAEZ AVILA CESAR RAFAEL",
                "GONZALEZ AGUILAR IGNACIO",
                "MENDEZ OLASCOAGA LUIS FERNANDO",
                "CASTAÑEDA HERNANDEZ ELIZABETH",
                "CELIS ORTIZ MAYRA NINEL",
                "ESPINOZA ISLAS ANABEL",
                "JUAREZ OLIVERA SANDRA GUADALUPE",
                "VALVERDE LOPEZ LAURA",
                "LEYVA HERNANDEZ BRENDA REBECA",
                "CASILLAS FRANCO VERONICA XIMENA",
                "MEJIA HERNANDEZ JOSE MARTIN",
                "SALDAÑA PALMA LUIS ALBERTO",
                "MALDONADO TINAJERO LETICIA",
                "HERNANDEZ GRAJALES HILDA AIDEE"
            ],
            3: [
                "HUESCAS VERGARA MARTIN",
                "RAMON GARCIA GUILLERMO",
                "MORENO CAMARILLO MARICRUZ ALICIA",
                "ARELLANO LOPEZ NORMA",
                "GARDUÑO ESPINOSA JUAN",
                "BLANCAS CARRASCO ARELI ALEJANDRA",
                "FLORES GARCIA NERY DEL ROCIO"
            ],
            4: [
                "PERALES ARROYO ANTONIO",
                "MENDOZA GARCIA EMMA ROSARIO",
                "ROBLEDO MARTINEZ ROSARIO",
                "LOPEZ CID ALMA MONICA",
                "FLORES MENESES RAUL JONATHAN"
            ],
            5: [
                "HUIDOBRO ROBLES JUAN GUILLERMO",
                "SALINAS URIBE MARIA DEL CARMEN LETICIA",
                "FLORES GONZALEZ XOCHITL",
                "BERISTAIN DIAZ MARISOL JAZMIN",
                "NERI LEON LAURA CELESTE",
                "VELEZ SIERRA VERONICA GETZABEL",
                "NIETO SANJUANERO CUAUHTEMOC"
            ],
            6: [
                "MATA GARCIA OMAR ISRAEL",
                "MENA HERNANDEZ MARTHA LETICIA",
                "CORTES ORTIZ BELINDA",
                "TORRES CARIÑO MIRNA JUDITH",
                "BETANZO PALACIOS ISABEL",
                "GARCIA GARCIA ALEJANDRO"
            ],
            7: [
                "ESPINOSA HERNANDEZ DULCE NAYELY",
                "ALONSO RAMIREZ MARIA DEL ROCIO",
                "BARREDO HERNANDEZ JAQUELINE",
                "FLORES XELHUANTZI JUAN"
            ],
            8: [
                "NAVARRO GOVEA CLAUDIA PATRICIA",
                "RAMIREZ JIMENEZ JUAN DE JESUS",
                "CASTILLO DURAN YOLANDA",
                "HERNANDEZ DIAZ JUANA",
                "GALINDEZ ESPINOZA LUZ MARIA SUGEY",
                "PEÑA CAMACHO VIRIDIANA EDITH"
            ],
            9:[
                "PAVIA RUZ NORIS MARLENE DEL SOCORRO",
                "CARRILLO GARCIA ROSALINDA",
                "TRUJILLO FERNANDEZ LIZBETH CORAL",
                "MARTINEZ CHAVEZ JOSE LUIS",
                "ROMAN FELIX PAULINA LIZETH",
                "SOLORZANO SANTOS FORTINO"
            ],
            10:[
                "SANCHEZ FIERROS DOLORES",
                "AGUILAR ROSAS ARHELI ROCIO",
                "BRITO BRITO AMALIA",
                "CONTRERAS CERRILLO ALAN ALONSO"
            ],
            11:[
                "AGUIRRE ARREDONDO MARCELA",
                "VARGAS ALFARO ARACELI",
                "REYES PEREZ HERLINDA",
                "MARIN GARCIA ESTELA",
                "IBAÑEZ VARGAS MAYELY MONTSERRAT"
            ],
            12:[
                "HERNANDEZ CRUZ MAYTE GUADALUPE",
                "CRUZ CAMPOS ASTRID",
                "LOERA YEBRA ROSA MARIA",
                "ALCANTARA VARGAS MARIA CRISTINA"
            ],
            13:[
                "BRUNT GONZALEZ HORACIO",
                "RUIZ GONZALEZ SERGIO",
                "FRAUSTO ARTEAGA XOCHITL YESENIA",
                "DOMINGUEZ OREA ERIKA JANET",
                "CERVERA NARANJO NORMA EVANGELINA"
            ],
            14:[
                "SAAVEDRA MARTINEZ ENEDINA",
                "GALICIA DIMAS IRIS DANIELA",
                "TELLES HERNANDEZ MARTHA PATRICIA",
                "ARREDONDO JIMENEZ FRANCISCO JAVIER",
                "LOPEZ CONTRERAS GABRIELA",
                "PORTILLO GUTIERREZ MICHELL OSWALDO",
                "CASTILLO REYES CRISTIAN ENRIQUE",
                "FRAGOSO GALLO ENRIQUE",
                "MARTINEZ HERNANDEZ IRMA ELIZABETH"
            ],
            15:[
                "AVILES ROBLES MARTHA JOSEFINA",
                "FRANCO ALVAREZ ISIDRO",
                "LOPEZ TRUJANO NORMA",
                "SERRANO DIOSDADO JOSE JUAN",
                "TREJO MARTINEZ BETZARE GEAZUL",
                "CALZADA MENDOZA GILBERTO ENRIQUE GUILLERMO",
                "ALLENDE BAUTISTA FRANCISCO JAVIER",
                "FIGUEROA PIMENTEL EDOARDO"
            ],
            16:[
                "ISMAIL PAZ ENJIE FAKHR EL DIN",
                "MALDONADO SANCHEZ KELLY ARLETT",
                "MALDONADO PINEDA ANA LAURA",
                "LOPEZ GONZALEZ NANCY KARINA",
                "RAMIREZ ALVAREZ JOSE ALFREDO",
                "CUENCA ALDANA CARLOS ALBERTO",
                "CRUZ ESQUIVEL JOSE UBALDO"
            ],
            17:[
                "MADRAZO CUELLAR MARIA DE JESUS",
                "SOSA SANCHEZ KENYA",
                "DIAZ OSORIO CARLOS ERIC",
                "LOPEZ ZAMORA GUADALUPE",
                "CRUZ GUZMAN ALEJANDRA PAOLA",
                "HERNANDEZ ARIAS JUAN"
            ],
            18:[
                "AVILA CASTAÑON MARIA DE LOURDES",
                "LASCARI JIMENEZ ESTER CAROLINA",
                "GUTIERREZ HERNANDEZ RITA CONCEPCION",
                "VALENCIA PINZON EDUARDO",
                "GONZALEZ LOPEZ MARIA DE LOS ANGELES",
                "GONZALEZ LEON RITA",
                "MARGIL PAEZ MONICA",
                "PUEBLAS BEDOY KARINA SARAY",
                "VILLAGRAN BARRERA MAYRA IBETH",
                "MORENO SALMERON GRISELDA",
                "MARCIAL RAMIREZ CASSANDRA YADIRA ITZEL",
                "MORA MUÑOZ ILSE VALERIA",
                "URIBE ROSAS ALEJANDRO",
                "DOMINGUEZ HERNANDEZ JORGE",
                "VAZQUEZ LOPEZ SILVIA",
                "ACOPA RODRIGUEZ DULCE NAYELI"
            ],
            19:[
                "CARBAJAL MALAGON HECTOR IVAN",
                "HERNANDEZ MEDINA MONSERRAT ABIGAIL",
                "ROJAS ALARCON MARIA FERNANDA",
                "AHEDO BARRERA MARIA ELENA",
                "CAMPOS ANDRADE JAQUELINE",
                "TORRES GONZALEZ LETICIA",
                "REYES APODACA MAGALI",
                "ROMERO PALACIOS LIZETH"
            ],
            20:[
                "GOMEZ RAMIREZ ANDREA",
                "MORALES HERNANDEZ GUADALUPE",
                "ARENAS LOPEZ JAVIER ARTURO",
                "CASTAÑEDA RAMIREZ GRISELDA BERENICE",
                "PEREZ BRIGADIER RICARDO",
                "CAMPOS GARCIA ABIL SOFIA",
                "RIOS LEON ERIKA ESTHER"
            ],
            21:[
                "GONZALEZ HERNANDEZ MIGUEL ANGEL",
                "HERNANDEZ SANCHEZ ESTHER ALEJANDRA",
                "MONTOYA RUIZ ANA JACQUELINE",
                "BARRIO RENTERIA MARIA TERESA",
                "SANCHEZ CHAVEZ JUAN LUIS",
                "CASTAÑEDA SEGURA ALEJANDRO HIGINIO"
            ],
            22:[
                "VIVEROS RODRIGUEZ ROMINA TAMARA",
                "MENDOZA ROJAS MARIA OFELIA",
                "REYES NORIEGA NAYELY",
                "TALAVERA SOLIS MARGARITA LUCIA",
                "HIDALGO MARTINEZ MARIA FERNANDA",
                "FERNANDEZ PORTILLA EMILIO JOSE",
                "ESPINOZA NAZAR MA. DE LOURDES",
                "RODRIGUEZ MARTINEZ RITA GUADALUPE",
                "RIOS SALAZAR SUSANA",
                "BENITEZ CEDILLO LILIA ESTRELLA",
                "ARROYO  RAMOS ROGELIO",
                "PEREZ TRIVERA HORACIO",
                "RAMIREZ ZALDIVAR BRAYAN JESUS",
                "SANCHEZ LOPEZ MONICA",
                "PINEDA TONIS JOCELIN"
            ],
            23:[
                "MIER PRADO MARIA JOSE",
                "OROZCO SANCHEZ ANDREA",
                "TELLEZ MENDOZA REBECA SARAI",
                "TABERA MENDOZA CLAUDIA PATRICIA",
                "LOPEZ RETAMA GUSTAVO",
                "HILARIO BAUTISTA JACQUELINE",
                "RODRIGUEZ PEREZ ESPERANZA KIKEY",
                "PATIÑO LOPEZ GENARO",
                "MARTINEZ HERNANDEZ VIRGINIA SUSANA"
            ],
            24:[
                "MENDOZA RODRIGUEZ PATRICIA KARINA",
                "OLIVER ALMARAZ CRUZ ALEJANDRO",
                "PEREZ GUERRERO ARACELI",
                "CANACASCO BELTRAN ROCIO",
                "CANO ASTUDILLO ROCIO",
                "PANTOJA SANTIBAÑEZ JANETH",
                "AYALA CARREON MARGARITA",
                "BARBA ORTEGA DANIEL ALEJANDRO",
                "GOMEZ SOBERANES ROSA MARIA",
                "MARTINEZ CRISTOBAL LEONEL",
                "CORTES CAMPOS ADRIAN"
            ],
            25:[
                "LOPEZ HERNANDEZ RAMON",
                "RODRIGUEZ SANTIAGO MAGDALENA SOFIA",
                "PORTILLO RODRIGUEZ GLORIA",
                "SANTANA RAMIREZ NARA YAHELY",
                "OCHOA ARIAS MARCO ANTONIO",
                "VARGAS ESQUIVEL GERARDO GABRIEL"
            ],
            26:[
                "MIGUEL MERECIAS ELIZABETH",
                "MARTINEZ REYES ANALLELY",
                "OLMEDO MENDOZA REINA",
                "CORONA GONZALEZ AMANDA",
                "CONTRERAS RAMOS ALEJANDRA",
                "ARENAS HUERTERO FRANCISCO JESUS",
                "ROCHA RAMIREZ LUZ MARIA"
            ],
            27:[
                "COBIAN GALLARDO RENATA VICTORIA",
                "SANCHEZ JIMENEZ MARIA DE LOS ANGELES",
                "AGUILAR PALLARES AMZI KARINA",
                "CASTRO BELTRAN MARIA GUADALUPE",
                "ESTILLA SALINAS JOSE GERMAN",
                "GARCIA RIVERO MARIA CONCEPCION"
            ],
            28:[
                "LIRA GUTIERREZ JOSE ARTURO",
                "GARCIA ESPINO VERONICA"
            ],
            29:[
                "ALTAMIRANO RIVERA SANTIAGO ELIEL",
                "BAEZ HERNANDEZ EDGAR MANUEL",
                "PEREZ AVILA UBALDO ISAAC",
                "MONROY DAVALOS LESBIA SUSANA",
                "FLORES MARTINEZ JESUS EMANUEL"
            ],
            30:[
                "ALCARAZ RAMIREZ DIANA GUADALUPE",
                "HERNANDEZ QUIROZ MARIA JULIETA",
                "NUÑEZ DE JESUS CLAUDIA",
                "CASTAÑEDA ANDRADE AURORA",
                "PASTRANA ARROYO NORMA PAULA",
                "CHAVEZ MALDONADO ARUY",
                "VILLASEÑOR GUTIERREZ KITZIA KARLA",
                "LEON RODRIGUEZ CANDY CELESTE",
                "GONZALEZ SERRANO MARIA JULIA"
            ],
            31:[
                "AVILES FANDIÑO JOSE MANUEL",
                "FLORES RAMIREZ FRANCISCO JAVIER",
                "IZCARRA GONZALEZ BERTHA",
                "PEREZ PEREZ JESSICA",
                "RODRIGUEZ AMADOR IRAIS",
                "PASCUAL HERNANDEZ DIANA LAURA",
                "MARTINEZ VALVERDE SILVIA"
            ]
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
