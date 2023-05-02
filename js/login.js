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

