import React from 'react'
import ReactDom from 'react-dom' 
//import PrimeraApp from './PrimeraApp';  //solo escribi PrimeraApp y  te saldra el llamado automatico, sino Ctrl + spacebar
import './index.css'; //así se llama a css, se aclara el que tipo de archivo es
import CounterApp from './CounterApp'

const divRoot = document.querySelector(' #root ');  //creamos la referencia de ese div y  buscamos con docu...querySelector('');

ReactDom.render( <CounterApp value= {7} /> , divRoot );  //significa, renderiza o muestra eso. Dice... que mostrar y donde

console.log(divRoot);



