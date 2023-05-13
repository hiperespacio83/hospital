const articleLista = document.querySelector('#listado');
const ulPacientes = document.querySelector('#ullistado');

function printAllpacients(pLista, pDom) {
    pLista.forEach(paciente => printOnePacient(paciente, pDom));
}

function printOnePacient(pacient, pDom) {
    pDom.innerHTML += `<li>"${pacient.nombre}"</li><li>"${pacient.apellidos}"</li><li>"${pacient.edad}"</li><li>"${pacient.diagnostico}"</li><li>"${pacient.seguridadSocial}"</li><hr>`
}

printAllpacients(pacientes, ulPacientes);

const edadMin = document.querySelector('#min');
const edadMax = document.querySelector('#max');
const btnEdad = document.querySelector('#btnEdad');


btnEdad.addEventListener('click', filtrarEdad);

function filtrarEdad() {

    ulPacientes.innerHTML = " ";

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

const diagnostico = document.querySelector('#diagnostico');

diagnostico.addEventListener('change', filtrarDiagnostico);

function filtrarDiagnostico(event) {

    ulPacientes.innerHTML=" ";

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
