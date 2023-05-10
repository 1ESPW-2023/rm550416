const inputUser = document.querySelector("input[name='txtNm']");    

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style","outline-color:#00ffff")
});

inputUser.addEventListener("keyup", ()=>{

    const labelUser = document.querySelector("label[for='idNm']")

    if(inputUser.value.length < 5){
        inputUser.setAttribute("style","outline-color:#ff0000;")
        labelUser.setAttribute("style","color:#ff0000;")
    }else{
        inputUser.setAttribute("style","outline-color:#00ff00;")
        labelUser.setAttribute("style","color:#00ff00;")
    }
});

//SUBINDO A RÉGUA
//Agora repita o processo e altere a classe do icone para outra
//Fazendo com que o olho se feche ou apareça com uma cancela
//fa-eye-slash

const eyePass = document.querySelector(".fa-eye-slash");

eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("#idPass");

    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye");
    }
    else{
        inputPass.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye-slash");
    }

});

