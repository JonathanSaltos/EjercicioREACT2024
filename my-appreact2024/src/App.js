import './App.css';
import Cabecera  from './Componentes/Cabecera';
import Footer from './Componentes/Footer';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Resultado from './Componentes/Resultado';

function App() {
  
  
 
  return (    
            <div>
            <Cabecera />
            <Form>
            <Container>
            <Row>

            <Col><Form.Label>Primer Número: </Form.Label>
            <Form.Control type="email" placeholder="Introduzca número1" />
            </Col>
            <Col><Form.Label>Segundo Número </Form.Label>  

            <Form.Control type="email" placeholder="Introduzca número2" />
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
