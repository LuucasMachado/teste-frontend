import {useEffect, useState} from 'react';
import logo from './logo.svg'
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserList from './components/UserList'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBDataTableV5 } from 'mdbreact';


function App() {

  interface IPosts {
    id: number;
    title: string;
    body: string;
  }


  var [posts, setPostList] = useState<IPosts[]>([]);

  const [datatable, setDatatable] = useState({
    columns: [
    {
      label: 'userId',
      field: 'userId',
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'userId',
      },
    },
    {
      label: 'Title',
      field: 'title',
      width: 300,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'Title',
      },
    },
    {
      label: 'Body',
      field: 'body',
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'Body',
      },
    },
  ],rows: posts})
  
  interface ISelectedViewOption {
    value: string;
    text: string;
  }

  const selectedOptionView: ISelectedViewOption[] = [
    { value: "listView", text: "List View" },
    { value: "gridView", text: "Grid View" },
  ];


  const getApiData = async () => {
    var filter_parms = ''
    if(searchValue) {
      filter_parms = `?title=${searchValue}`;
    }
    const response = fetch(
      `https://jsonplaceholder.typicode.com/posts${filter_parms}`
    ).then((response) => response.json())
      .then(data =>  {
      setPostList(data);
    });

    // update the state
    console.log(posts);
  };

  useEffect(() => {
    getApiData();
  }, []);

  var [searchValue, setSearchValue] = useState("")

  const handleSearch = () => {
    getApiData();
  }

  const handleClear = () => {
    setSearchValue('');
    getApiData();
  }

  const changeValue = (value) => {
    console.log(value)
  }

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
                <Form.Control type="title" placeholder="Type for search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
              </Form.Group>

              <Form.Select aria-label="Select type list" className="w-25 m-3" onChange={e => changeValue(e.target.value)}>
                {selectedOptionView.map(option => {
                  return (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                  );
                })}
              </Form.Select>

              <Button variant="primary"  className="m-1" onClick={handleSearch}>
                Search
              </Button>

              <Button variant="light" className="m-1 text-uppercase" onClick={handleClear}>
                Clear
              </Button>
            </Form>
            {/* <UserList items={posts}  /> */}
            <MDBDataTableV5 
              hover 
              entriesOptions={[5, 20, 25]}
              entries={5}
              // searchTop
              searching={false}
              pagesAmount={4} data={{
                columns: [
                {
                  label: 'POSTID',
                  field: 'postid',
                  width: 150,
                  attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'PostId',
                  },
                },
                {
                  label: 'Title',
                  field: 'title',
                  width: 150,
                  attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Title',
                  },
                },
                {
                  label: 'Body',
                  field: 'body',
                  width: 150,
                  attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Body',
                  },
                },
              ],rows: posts}} />
          </Col>
        </Row>
    </Container>

      </div>
    </div>
  )
}

export default App