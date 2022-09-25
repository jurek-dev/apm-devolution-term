// Function to pick up actual date, month and year
function formatDate() {
    // Months
    const month = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    // Constantes
    const d = new Date();
    const m = new Date();
    const y = new Date();

    let day = d.getDate();
    let monthName = month[m.getMonth()];
    let year = y.getFullYear();
    let textDate;

    if(day < 10) {
        textDate = "Itajaí, 0" + day + ", de " + monthName + " de " + year;
    }
    else {
        textDate = "Itajaí, " + day + ", de " + monthName + " de " + year;
    }

    document.write(textDate);
}

function genTerm() {
    var employeename = document.getElementById("employee-input").value;
    var employeecpf = document.getElementById("cpf-input").value;
    var formatCpf = employeecpf.slice(0, 3) + "." + employeecpf.slice(3, 6) + "." + employeecpf.slice(6, 9) + "-" + employeecpf.slice(9, 11);
    var equipment0 = document.getElementById("equipment-name0").value;
    var serial0 = document.getElementById("equipment-sn0").value;
    var equipment1 = document.getElementById("equipment-name1").value;
    var serial1 = document.getElementById("equipment-sn1").value;
    var equipment2 = document.getElementById("equipment-name2").value;
    var serial2 = document.getElementById("equipment-sn2").value;
    var equipment3 = document.getElementById("equipment-name3").value;
    var serial3 = document.getElementById("equipment-sn3").value;
    var equipment4 = document.getElementById("equipment-name4").value;
    var serial4 = document.getElementById("equipment-sn4").value;
    var equipment5 = document.getElementById("equipment-name5").value;
    var serial5 = document.getElementById("equipment-sn5").value;

    document.write("<main style='display:flex; flex-direction:column; align-items:center; text-align:center;'>");

        document.write("<div>");
            document.write("<h1 style='font-size: 22pt;'>Termo de devolução de equipamento</h1>");
            document.write("<p style='font-size: 12pt;'>Eu, " + employeename + ", inscrito no CPF/ME sob o nº " + formatCpf + ", declaro devolver nesta data os equipamentos de informática listados abaixo em perfeitas condições de uso ao Departamento de Tecnologia da Informação da empresa APM Terminals Itajaí S.A., inscrita no CPNJ/ME sob o nº 04.700.714/0001-63, cessando desde a presente e mediante o recebimento expresso por parte da empresa qualquer responsabilidade pessoal pela guarda e/ou manutenção do referido equipamento.</p>");
        document.write("</div>");

        document.write("<div>")
            document.write("<table style='font-size: 12pt; text-align: left;'>")
                document.write("<tr>");
                    document.write("<th>Equipamento</th>");
                    document.write("<th>Serial/Modelo</th>");
                document.write("</tr>");
                document.write("<tr>");
                document.write("<td>" + equipment0 + "</td>");
                document.write("<td>" + serial0 + "</td>");
                document.write("</tr>");
                document.write("<tr>");
                document.write("<td>" + equipment1 + "</td>");
                document.write("<td>" + serial1 + "</td>");
                document.write("</tr>");
                document.write("<tr>");
                document.write("<td>" + equipment2 + "</td>");
                document.write("<td>" + serial2 + "</td>");
                document.write("</tr>");
                document.write("<tr>");
                document.write("<td>" + equipment3 + "</td>");
                document.write("<td>" + serial3 + "</td>");
                document.write("</tr>");
                document.write("<tr>");
                document.write("<td>" + equipment4 + "</td>");
                document.write("<td>" + serial4 + "</td>");
                document.write("</tr>");
                document.write("<tr>");
                document.write("<td>" + equipment5 + "</td>");
                document.write("<td>" + serial5 + "</td>");
                document.write("</tr>");
            document.write("</table>");
        document.write("</div>");

        document.write("<div style='display: flex; flex-direction: row; margin-top: 10rem;'>");
            document.write("<div>");
                document.write("<hr style='background-color: #000; width: 250px; height: 1px;'>");
                document.write("<p style='font-size: 16pt;'>Dep. de T.I<br/>APM Terminals Itajaí S.A.</p>");
            document.write("</div>");

            document.write("<div style='width: 100px'>");
            document.write("</div>");

            document.write("<div>");
                document.write("<hr style='background-color: #000; width: 250px; height: 1px;'>");
                document.write("<p style='font-size: 16pt;'>" + employeename + "</p>");
            document.write("</div>");
        document.write("</div>");

        document.write("<div style='margin-top: 3rem'>");
            formatDate();
        document.write("</div>");
    document.write("</main>");

    // Function to request print the document.
    sendToPrint();
}

function sendToPrint() {
    print();
    console.log("Requested to print the document.");
}