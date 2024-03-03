import './App.css';
import Cabecera  from './Componentes/Cabecera';
import Footer from './Componentes/Footer';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button , OverlayTrigger, Tooltip } from 'react-bootstrap';

import Resultado from './Componentes/Resultado';

function App() {
  
{/*
Creacion de variables

numero1: Es una variable de estado que almacenará el valor del número 1. setNumero1: Es una función que te permite actualizar el valor de numero1. 
useState(''): Es una llamada al hook useState de React. 
El argumento pasado a useState (en este caso, '') es el valor inicial del estado. 
Aquí, numero1 se inicializa con una cadena vacía como valor inicial */ }

  const [numero1, setNumero1] = useState(''); 
  const [numero2, setNumero2] = useState(''); 
  let [resultado, setResultado] = useState('');




{/*
Creacion de funciones 

numero1Handler: Es una función que recibe un objeto de evento (event) como parámetro. Este objeto contiene información sobre el evento, 
como el valor actual del elemento que desencadenó el evento.
event.target.value: Accede al valor del elemento que desencadenó el evento de cambio. 
En el contexto de un campo de entrada de texto, este sería el valor actual del campo.
setNumero1: Es la función que se utiliza para actualizar el estado de numero1. 
Al llamar a setNumero1 con el nuevo valor del campo de entrada, React se encargará de actualizar el estado y, por lo tanto, re-renderizar el componente con el nuevo valor de numero1.

submitHandler: Es una función que recibe un objeto de evento (event) como parámetro. Este objeto contiene información sobre el evento, 
en este caso, el evento de envío de un formulario.
event.preventDefault(): Este método se utiliza para evitar el comportamiento predeterminado del formulario, que es recargar la página cuando se envía. 
Al llamar a event.preventDefault(), se detiene ese comportamiento predeterminado y te da la oportunidad de manejar el envío del formulario de la manera que desees.
Evitas que el formulario se envíe automáticamente cuando el usuario hace clic en el botón de envío, permitiéndote realizar acciones personalizadas antes o después del envío del formulario,
Como validar datos, realizar una solicitud a un servidor, etc




*/ 
}


 

  const numero1Handler = (event) => {
  setNumero1(event.target.value);
}
 
  const numero2Handler = (event) => {
  setNumero2(event.target.value);
}

const resultadoHandler= (event) => {
  setResultado(event.target.value);
}


  const submitHandler = (event) => {
   event.preventDefault();
}

{/* Suma*/ }
const clickHandler1 = () => {
  
  setResultado(parseFloat(numero1)+parseFloat(numero2));
        console.log(resultado);
  
}

{/* Resta*/ }
const clickHandler2 = () => {
  setResultado(numero1-numero2);
        console.log(resultado);
  
}

{/* Multiplicacion*/ }
const clickHandler3 = () => {
  setResultado(numero1*numero2);
        console.log(resultado);
  
}

{/* Division*/ }
const clickHandler4 = () => {
  setResultado(numero1/numero2);
        console.log(resultado);
  
}
const renderTooltip = (texto) => (
  <Tooltip id="button-tooltip">
    {texto}
  </Tooltip>
);
  return (    
            <div>
            <Cabecera />
            <Form onSubmit={submitHandler}>
            <Container>
            <Row>

            <Col><Form.Label>Primer Número: </Form.Label>
            {/*type = "number", input entrada tipo numero, onChange = {numero1Handler}, asigna la funcion numero1Handler para manejar el 
            evento onChange, value = {numero1} establece el valor del campo de entrada, al valor almecenado en la variable de estado*/ }
            <Form.Control onChange={numero1Handler}type="number" placeholder="Introduzca número1" value={numero1}/>
            </Col>
            <Col><Form.Label>Segundo Número: </Form.Label>  

            <Form.Control onChange={numero2Handler}type="number" placeholder="Introduzca número2" value={numero2} />
            </Col>
            </Row>


            <Row>
            <Col> <OverlayTrigger
                placement="top"
                overlay={renderTooltip('Sumar')}>
            <Button onClick={clickHandler1} variant="success" id="button-addon1 ">
             +
            </Button></OverlayTrigger>
            </Col>

            <Col> <OverlayTrigger
                placement="top"
                overlay={renderTooltip('Restar')}>
            <Button onClick={clickHandler2}variant="primary" id="button-addon1">
             -
            </Button></OverlayTrigger>
            </Col>

            <Col><OverlayTrigger
                placement="top"
                overlay={renderTooltip('Multiplicar')}>
            <Button onClick={clickHandler3}variant="secondary" id="button-addon1">
             X
            </Button></OverlayTrigger>
            </Col>

            <Col><OverlayTrigger
                placement="top"
                overlay={renderTooltip('Dividir')}>
            <Button onClick={clickHandler4}variant="warning" id="button-addon1">
             %
            </Button></OverlayTrigger>
            </Col>
            </Row>
           


            </Container>

            </Form>
            <Resultado resultado={resultado}/>

            <Footer />
            
            </div>
          

  )
}

export default App;
