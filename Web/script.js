const formElement = document.getElementById("savePQR")

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    let nombreDelPaciente = document.getElementById("Nombre_del_paciente").value;
    let IdPaciente = document.getElementById("Idpaciente").value;
    let PqrDescription = document.getElementById("pqrDescription").value;
    let pqr = {nombreDelPaciente: nombreDelPaciente, IdPaciente: IdPaciente, PqrDescription: PqrDescription}
    let pqrJson= JSON.stringify(pqr);
    console.log(pqrJson);
})