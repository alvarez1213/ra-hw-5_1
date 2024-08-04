import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './App.css';

import { MyCard } from './components/MyCard';

function App() {
  return (
    <div className="content">
      <MyCard>
        <Card.Img variant="top" src="https://dummyimage.com/300" alt='...' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </MyCard>
      <br />
      <MyCard>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in 
            to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </MyCard>
    </div>
  );
}

export default App;
