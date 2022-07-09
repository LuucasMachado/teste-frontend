import {useEffect, useState} from 'react';
import logo from './logo.svg'
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faGrip } from '@fortawesome/free-solid-svg-icons';


function App() {

  interface IPosts {
    id: number;
    title: string;
    body: string;
  }


  const [users, setUserList] = useState<IPosts[]>([]);
  
  interface ISelectedViewOption {
    value: string;
    text: string;
  }

  const selectedOptionView: ISelectedViewOption[] = [
    { value: "listView", text: "List View" },
    { value: "gridView", text: "Grid View" },
  ];


  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json())
     .then(data =>  setUserList(data));
  
    // update the state
    console.log(users);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo sensedia"
              src={logo}
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div>
      <Container className="p-5">
        <Row>
          <Col>
            <Form className="d-flex d-flex align-items-baseline mb-4">

              <Form.Group className="w-50 m-3" controlId="formBasicTitle">
                <Form.Control type="title" placeholder="Type for search..." />
              </Form.Group>

              <Form.Select aria-label="Select type list" className="w-25 m-3">
                {selectedOptionView.map(option => {
                  return (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                  );
                })}
              </Form.Select>

              <Button variant="primary" type="submit" className="m-1">
                Search
              </Button>

              <Button variant="light" className="m-1 text-uppercase">
                Clear
              </Button>
            </Form>
            <UserList items={users}  />
          </Col>
        </Row>
    </Container>

      </div>
    </div>
  )
}

export default App