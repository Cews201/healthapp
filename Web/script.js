const formElement = document.getElementById("savePQR")

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    let nombreDelPaciente = document.getElementById("Nombre_del_paciente").value;
    let IdPaciente = document.getElementById("Idpaciente").value;
    let PqrDescription = document.getElementById("pqrDescription").value;
    let eps = document.getElementById("epsDescription").value;
    var today = new Date();
    let estate= true;
    let pqr = {nombreDelPaciente: nombreDelPaciente, IdPaciente: IdPaciente, PqrDescription: PqrDescription, eps: eps, fecha: today, estado: estate}
    let pqrJson= JSON.stringify(pqr);
    console.log(pqrJson);
    fetch('http://localhost:3000/transaction',{
        method: 'post',
        body: pqrJson
    })
})

fetch('http://localhost:3000/transaction').then(x => x.json()).then(console.log)