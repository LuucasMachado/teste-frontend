import {useEffect, useState} from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostList from './components/PostList'
import PostCards from './components/PostCards'
import Filter from './components/Filter';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import PostService from './services/PostService';


function App() {

  interface IPosts {
    id: number;
    title: string;
    body: string;
  }

  var [posts, setPostList] = useState<IPosts[]>([]);
  var [searchValue, setSearchValue] = useState('')
  var [typeList, setTypeList] = useState('ListView')

  const getPosts = (searchValue:string) => {
    PostService.getApiData(searchValue)
    .then((response) => response.json())
    .then(data =>  { setPostList(data); });
  }

  useEffect(() => {
    getPosts('');
  }, []);

  function PostView() {
    if (typeList === 'gridView') {
      return <PostCards items={posts}  />;
    } else {
      return <PostList items={posts}  />;
    }
  }

  return (
    <div className='App'>
      <NavBar /> 
      <div>
        <Container className='p-5'>
          <Row>
            <Col>
              <Filter
                getPosts={ getPosts }
                setTypeList={ setTypeList }
                setSearchValue={setSearchValue}
                searchValue={ searchValue }
                />
              <PostView />
            </Col>
          </Row>

        </Container>
      </div>
    </div>
  )
}

export default App