
//Exemplo de Funções
// const divElement = document.getElementById("div-box")

// //divElement.addEventListener("click", ()=>{
// //    console.log("divElement");
// //});

// divElement.addEventListener("click", mostraElemento);

// function mostraElemento(){
//     console.log(divElement)
// }
// function soma(){
//     let n1 = 10
//     let n2 = 5
//     console.log(n1 + n2)
// }
// recuperando elementos do html com query selector
// const liElements = document.querySelectorAll("li");

// //convertendo NODELIST em array com spread
// const arrayElements = [...liElements];

// console.log(arrayElements);

const arrayElements = [...document.querySelectorAll("li")];

arrayElements.map((el,key)=>{

    console.log(el.textContent.indexOf("1"))

   if(el.textContent.indexOf("1") != (-1)) {
      el.textContent = `[ ${el.textContent} ]`;
   }

});

let tmp = 0;

function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    console.log(r)
    
    const elemento = [...document.getElementsByClassName("conteudo")];

    elemento.forEach((el)=>{
        el.getElementsByClassName.backgroundColor = `rgb(${r},${g},${b})`
    })

    tmp = setTimeout(mudaCor, 5000)

}

function pararTimeOut(){
    clearTimeout(tmp)
}


mudaCor();
