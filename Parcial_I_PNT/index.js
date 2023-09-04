function onClickSendForm (){
    if (checkForms()) {
        alert("Su formulario se ha enviado con exito!")
    } else {
        alert("Las contraseñas ingresadas no coinciden :(")
    }
}

function checkForms(){
    const inputField1 = document.getElementById("inputPassword");
    const inputField2 = document.getElementById("inputPasswordVerify");
    let text1 = inputField1.value;
    let text2 = inputField2.value;
    console.log(text1);
    if (text1 === text2) {
        return true;
    } else {
        return false;
    }
}