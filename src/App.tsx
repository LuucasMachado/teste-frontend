import {useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostList from './components/PostList'
import PostCards from './components/PostCards'
import Filter from './components/Filter';
import PostService from './services/PostService';
import TotalPage from './components/TotalPage';
import Pagination from 'react-bootstrap/Pagination';
import './App.scss';


function App() {

  var [posts, setPostList] = useState<[]>([]);
  var [searchValue, setSearchValue] = useState('');
  var [typeList, setTypeList] = useState('ListView');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState('0');


  const getPosts = (searchValue:string, page:number) => {
    setPage(page)
    PostService.getApiData(searchValue, page)
    .then((response) => {
      setTotalPages(response.headers.get('x-total-count'))
      response.json().then(data =>  {
        setPostList(data);
       });
  
    })
  }

  useEffect(() => {
    getPosts('', page);
  }, []);

  function PostView() {
    if (typeList === 'gridView') {
      return <PostCards items={posts}  />;
    } else {
      return <PostList items={posts}  />;
    }
  }

  function handleNextPage() {
    var nextPage = page + 1;
    getPosts(searchValue, nextPage);
  }

  function handlePrevPage() {
    if(page === 1) { return true }
    var prevPage = page - 1;
    getPosts(searchValue, prevPage);
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

              {/* <Pagination
                totalPages={totalPages}
                currentPage={page}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              /> */}
              <div className="d-flex justify-content-between">
                <TotalPage totalPages={totalPages} />
                <Pagination>
                  <Pagination.Prev onClick={handlePrevPage} />
                  <Pagination.Item active>{page}</Pagination.Item>
                  <Pagination.Item onClick={handleNextPage}>{page + 1}</Pagination.Item>
                  <Pagination.Next onClick={handleNextPage} />
                </Pagination>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </div>
  )
}

export default App