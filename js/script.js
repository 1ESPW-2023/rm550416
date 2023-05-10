
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

// const arrayElements = [...document.querySelectorAll("li")];

// arrayElements.map((el,key)=>{

//     console.log(el.textContent.indexOf("1"))

//    if(el.textContent.indexOf("1") != (-1)) {
//       el.textContent = `[ ${el.textContent} ]`;
//    }

// });

let tmp = 0;


function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )

   tmp = setTimeout(mudaCor, 5000);

}
function mudaImg1(){
    // let num = Math.ceil(Math.random()*3);

    const elementoImge = [...document.getElementsByClassName("l-e")];
    const elementoImgd = [...document.getElementsByClassName("l-d")];
    elementoImge.forEach( (el)=>{
        el.style.backgroundImage = `url(./img/banner-lateral-1.png)`;
    } )
elementoImgd.forEach( (el)=>{
        el.style.backgroundImage = `url(./img/banner-lateral-1.png)`;
    } )

    setTimeout(mudaImg2, 1000);

    // elementoImge.forEach( (el)=>{
    //     el.style.backgroundImage = `url(./img/banner-lateral-${num}.png)`;
    // } )
}

function mudaImg2(){
    // let num = Math.ceil(Math.random()*3);

    const elementoImge = [...document.getElementsByClassName("l-e")];
    const elementoImgd = [...document.getElementsByClassName("l-d")];
    elementoImge.forEach( (el)=>{
            el.style.backgroundImage = `url(./img/banner-lateral-2.png)`;
        } )
    elementoImgd.forEach( (el)=>{
            el.style.backgroundImage = `url(./img/banner-lateral-2.png)`;
        } )

    setTimeout(mudaImg3, 1000);
    // elementoImge.forEach( (el)=>{
    //     el.style.backgroundImage = `url(./img/banner-lateral-${num}.png)`;
    // } )
}

function mudaImg3(){
    // let num = Math.ceil(Math.random()*3);

    const elementoImge = [...document.getElementsByClassName("l-e")];
    const elementoImgd = [...document.getElementsByClassName("l-d")];
    elementoImge.forEach( (el)=>{
        el.style.backgroundImage = `url(./img/banner-lateral-3.png)`;
    } )
elementoImgd.forEach( (el)=>{
        el.style.backgroundImage = `url(./img/banner-lateral-3.png)`;
    } )

    setTimeout(mudaImg1, 1000);
    // elementoImge.forEach( (el)=>{
    //     el.style.backgroundImage = `url(./img/banner-lateral-${num}.png)`;
    // } )
}

function pararTimeOut() {
    clearTimeout(tmp);
}

mudaCor()

