var dateInput;

document.getElementById("dateInput").addEventListener("change", function() {
    let input = this.value;
    dateInput = new Date(input);
    console.log(input);
    console.log(dateInput);
    document.getElementById("approved").innerHTML = ""
});

function calcAge(birthdate) {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear() - (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age;
}

function onClickSubmitHandler() {
    if (dateInput != undefined) {
        if (calcAge(dateInput)>= 18 && calcAge(dateInput)<= 55) {
            console.log("Aprobado")
            document.getElementById("approved").innerHTML = "<span><div class='container_approved'><h2>Aprobado !</h2><h5>Felicitaciones :)</h5></div></span>"
        } else {
            alert("Rechazado")
        }
    } else {
        alert("Ingrese una fecha")
    }
}