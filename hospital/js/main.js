const articleLista = document.querySelector('#listado');
const ulPacientes = document.querySelector('#ullistado');

function printAllpacients (pLista,pDom){
    pLista.forEach(paciente => printOnePacient(paciente,pDom));
}

function printOnePacient (pacient,pDom){
pDom.innerHTML+= `<li>"${pacient.nombre}"</li><li>"${pacient.apellidos}"</li><li>"${pacient.edad}"</li><li>"${pacient.diagnostico}"</li><li>"${pacient.seguridadSocial}"</li><hr>`
}

printAllpacients(pacientes,ulPacientes);


