// rafcp con esto ya armamos la estructura de un componente
import React , {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value} ) =>{

    const [ counter , setCounter ] = useState( value ); //useState es un arreglo. Acordate, primero una variable y luego una funcion

    const clickResta = () => {
        setCounter(counter - 1);
    };
    const clickReset = () => {
        setCounter ( value );
    };

    //handleAdd  tambien se puede hacer una funcion para luego ser llamado dentro del boton
    // FUNCION DEL BOTON
    const clickSuma = ( e ) =>{

        setCounter( counter + 1 );
        // setNumero ( ( n ) => n + 1  );  asi tambien se puede hacer la operacion logica
        // return () => {
        
        // console.log(' El boton envia argumentos y espera una funcion como return ');
        
        // }
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button className='misBotones2' onClick= { clickResta } > -1 </button> 
        <button className='' onClick= { clickReset } > Reset </button>
        <button className='misBotones' onClick= { clickSuma } > +1 </button>
        </>
    )

}

CounterApp.propTypes ={
    value: PropTypes.number ,

}

export default CounterApp;