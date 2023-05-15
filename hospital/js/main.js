const articleLista = document.querySelector('#listado');
const ulPacientes = document.querySelector('#ullistado');

function printAllpacients(pLista, pDom) {
    pDom.innerHTML = " ";
    pLista.forEach(paciente => printOnePacient(paciente, pDom));
}

function printOnePacient(pacient, pDom) {
    pDom.innerHTML += `<li>"${pacient.nombre}"</li><li>"${pacient.apellidos}"</li><li>"${pacient.edad}"</li><li>"${pacient.diagnostico}"</li><li>"${pacient.seguridadSocial}"</li><hr>`
}

printAllpacients(pacientes, ulPacientes);

const edadMin = document.querySelector('#min');
const edadMax = document.querySelector('#max');
const btnEdad = document.querySelector('#btnEdad');



/* Ejercicio de filtrar por edad*/




btnEdad.addEventListener('click', getClick);

function getClick() {

    let max = edadMax.value;
    let min = edadMin.value;

    if (max !== " " && min !== " ") {
        let pacientesPorEdad = filterByAge(pacientes, Number(min), Number(max));
        printAllpacients(pacientesPorEdad, ulPacientes);
    } else {
        printAllpacients(pacientes, ulPacientes);
    }
}

function filterByAge(list, pMin, pMax) {
    return list.filter(paciente => paciente.edad >= pMin && paciente.edad <= pMax);
}



/* ejercicio de filtrar por diagnostico*/




const diagnostico = document.querySelector('#diagnostico');

diagnostico.addEventListener('change', getChange);

function getChange(event) {


    let diagnosticoFiltrado = event.target.value;

    if (diagnosticoFiltrado !== " ") {
        let pacientesPorDiagnostico = filtrarPorDiagnostico(pacientes, diagnosticoFiltrado);

        printAllpacients(pacientesPorDiagnostico, ulPacientes);

    } else {
        printAllpacients(pacientes, ulPacientes);
    }


}

function filtrarPorDiagnostico(list, diagnostico) {
    return list.filter(paciente => paciente.diagnostico === diagnostico)
}



/* ejercicio de filtrar por nombre, apellidos o seguridad social*/




const input = document.querySelector('#input');

input.addEventListener('input', getInput);

function getInput(event) {

    let name = event.target.value;

    if (name === "") {

        printAllpacients(pacientes, ulPacientes);

    } else {

        let pacientsByName = filterByName(pacientes, name);

        printAllpacients(pacientsByName, ulPacientes);

    }
}

function filterByName(list, name) {

    return list.filter(element => element.nombre.toLowerCase().includes(name.toLowerCase()) || element.apellidos.toLowerCase().includes(name.toLowerCase()) || element.seguridadSocial.toLowerCase().includes(name.toLowerCase()));

}
