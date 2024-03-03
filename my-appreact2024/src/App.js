import './App.css';
import Cabecera  from './Componentes/Cabecera';
import Footer from './Componentes/Footer';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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




{/*
Creacion de funciones 

numero1Handler: Es una función que recibe un objeto de evento (event) como parámetro. Este objeto contiene información sobre el evento, 
como el valor actual del elemento que desencadenó el evento.
event.target.value: Accede al valor del elemento que desencadenó el evento de cambio. 
En el contexto de un campo de entrada de texto, este sería el valor actual del campo.
setNumero1: Es la función que se utiliza para actualizar el estado de numero1. 
Al llamar a setNumero1 con el nuevo valor del campo de entrada, React se encargará de actualizar el estado y, por lo tanto, re-renderizar el componente con el nuevo valor de numero1.

*/ }


 

  const numero1Handler = (event) => {
    setNumero1(event.target.value);
}
 
const numero2Handler = (event) => {
  setNumero2(event.target.value);
}



  return (    
            <div>
            <Cabecera />
            <Form>
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
            <Col>
            <Button variant="outline-secondary" id="button-addon1">
             +
            </Button>
            </Col>

            <Col>
            <Button variant="outline-secondary" id="button-addon1">
             -
            </Button>
            </Col>

            <Col>
            <Button variant="outline-secondary" id="button-addon1">
             X
            </Button>
            </Col>

            <Col>
            <Button variant="outline-secondary" id="button-addon1">
             %
            </Button>
            </Col>
            </Row>
           


            </Container>

            </Form>
            <Resultado />

            <Footer />
            
            </div>
          

  )
}

export default App;
