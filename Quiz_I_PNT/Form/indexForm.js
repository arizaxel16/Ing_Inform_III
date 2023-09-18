// class vars
var dateInput;

// listener actualiza HTML segun cambio de fecha
    // print en consola de valores de fecha
document.getElementById("dateInput").addEventListener("change", function () {
    let input = this.value;
    dateInput = new Date(input);
    console.log(input);
    console.log(dateInput);
    document.getElementById("approved").innerHTML = ""
});

//llama funcion en 'onClickSubmitHandler'
function calcAge(birthdate) {
    // calcula edad 
        //today: genera fecha actual con data type Day()
    const today = new Date();
    // comparacion y resta de edad por mes y año
    const age = today.getFullYear() - birthdate.getFullYear() - (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age;
}

// llama funcion con 'onClick' de usuario
function onClickSubmitHandler() {
    // valores de campo de texto
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    // if: revisa campos no esten vacios
    if (name != "" && surname != "") {
        // if: revisa campo fecha no este vacio
        if (dateInput != undefined) {
            // if: revisa edad dentro de edad aprobada
            if (calcAge(dateInput) >= 18 && calcAge(dateInput) <= 55) {
                // adjunta HTML de 'aprobado'
                document.getElementById("approved").innerHTML = "<span><div class='container_approved'><h2>Approved !</h2><h5>Felicitaciones :)</h5></div></span>"
            } else {
                // alerta de rechazo
                alert("Rejected");
            }
        } else {
            // alerta falta ingresar fecha
            alert("Enter a date");
        }
    } else {
        // alerta campos vacios
        alert("All fields must be answered");
    }
}