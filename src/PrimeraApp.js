//parece que funciona el XML sin la importacion de React, raro
// FC => Funcional Component

//import React, { Fragment } from 'react'; //asi se importa el componente pero lo recomendado es no hacerlo, HACER <></>
import React from 'react';
import PropTypes from 'prop-types'


const PrimeraApp = ( { unSaludo , subtitulo } ) =>{  // es mejor desestructurar el componente que necesitamos
    // const PrimeraApp = ( propiedad ) =>{  asi se puede hacer referencia a la variable del componente, pero en el llamado de la misma 
    //                                       tendriamos que usar propiedad.'elComponente'
    
    // const array = [1,2,3,44,4,4,4,];
    // const objeto = {
    //     nombre: 'pepe',
    //     edad:20
    // };
    //con Fragment podemos exportar sin necesidad de crear tag's div, asi procesamos menos
    return ( <>  
        <h5>{ unSaludo } </h5>
        {/* <p> Un array :{array} </p> */}
        {/* <pre> objeto= { JSON.stringify (objeto,null,2)} </pre>  asi se traduce un objeto */}
        <p> { subtitulo } </p>
        </>   //pero lo recomendado es <div>(si no nos molesta crear otro div) o sino el tag vacío <></>
    );
}

PrimeraApp.propTypes ={

    unSaludo: PropTypes.string.isRequired

};

PrimeraApp.defaultProps = {

    unSaludo: 'Mensaje por Default',
    subtitulo: 'Un subtítulo predeterminado',
};

export default PrimeraApp;