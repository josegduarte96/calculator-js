import './styles.css';

//refs - variables
const divKeys   = document.querySelector('.keys');
const cifraHTML = document.querySelector('.cifra');
const operator  = document.querySelector('.operator')
const screen    = document.querySelector('.screen');
const btnReset  = document.querySelector('.reset');
const btnTotal  = document.querySelector('.total');
const btnDel    = document.querySelector('.del');
const btnTheme1    = document.querySelector('#on');
const btnTheme2    = document.querySelector('#off');
let keyOperador, cifra;       
//funciones
const clickOperadores = target => {
    
    let operador;
    switch(target){
        case '+':
        operador = '+';
        break;
        case '-':
        operador = '-';
        break;
        case 'x':
        operador = 'x';
        break;
        case '/':
        operador = '/';
        break;
        default:
        return;
    }

return operador;

};

const pintarCifraHTML = (number, isNumber) => {
    
    
    if(isNumber){        
        cifraHTML.append(number);
     }

    

    return Number(cifraHTML.textContent); 
    
    
};

const obtenCifra = (operador, cifra) => {

    if(/\W/.test(operador) || operator.textContent == 'x'){

        return cifra;

    }

};

let _1raCifra;
//eventos
divKeys.addEventListener('click', event => { 

    //Comprobar que la cifra no exceda el width del Screen
    if( cifraHTML.clientWidth > 300)  return
    
    //Obtener el operador clickeado;
    keyOperador  = clickOperadores(event.target.textContent);
    //comprobar si el click es un numero
    let isNumber = (event.target.classList[0] == 'number') ? true : false;
    //obtener la cifra completa del screen en Number
    cifra        = pintarCifraHTML(event.target.textContent, isNumber);

    
    if(keyOperador) {
        operator.textContent = keyOperador
        setTimeout(function(){ operator.classList.add('top') }, 300); 
        cifraHTML.textContent = "";
        _1raCifra = obtenCifra(keyOperador, cifra)
    }
    
     
})


btnTotal.addEventListener('click', event => {

    keyOperador = clickOperadores(operator.textContent)

    let total = (keyOperador == '+') 
    ?  _1raCifra + cifra  
    : (keyOperador == '-') 
    ?  _1raCifra - cifra 
    : (keyOperador == 'x') 
    ?  _1raCifra * cifra 
    : (keyOperador == '/') 
    ?  _1raCifra / cifra : "";


    operator.textContent = '';
    cifraHTML.textContent = total.toLocaleString('en');

    
})

btnReset.addEventListener('click', () => cifraHTML.textContent = "" );

btnDel.addEventListener('click', event => {

    if(cifraHTML.textContent != ""){
        let miArr = cifraHTML.textContent.split("");
        miArr.pop();
        return cifraHTML.textContent = miArr.join("");
        // cifraHTML.removeChild(cifraHTML.lastElementChild);
    }

})

btnTheme1.addEventListener('click', event => {

    if(btnTheme1.checked){    
    
        document.body.classList.remove('theme2');
        document.querySelector('.calculator-theme').classList.remove('theme2');
        screen.classList.remove('theme2')
        divKeys.classList.remove('theme2')
        btnTotal.classList.remove('theme2')
        btnReset.classList.remove(theme2)
    }

})


btnTheme2.addEventListener('click', event => {
    
    if(btnTheme2.checked){

        document.body.classList.add('theme2')
        document.querySelector('.calculator-theme').classList.add('theme2');
        screen.classList.add('theme2')
        divKeys.classList.add('theme2')
        btnTotal.classList.add('theme2')
        btnReset.classList.add(theme2)
    }
})




