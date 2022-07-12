import { useEffect, useState, Fragment } from 'react';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostList from './components/PostList'
import PostCards from './components/PostCards'
import Filter from './components/Filter';
import PostService from './services/PostService';
import TotalPage from './components/TotalPage';
import PaginationCustom from './components/PaginationCustom';
import './App.scss';


function App() {

  const [posts, setPostList] = useState<[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [typeList, setTypeList] = useState('ListView');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState('0');


  const getPosts = (searchValue: string, page: number) => {
    setPage(page)
    PostService.getApiData(searchValue, page)
      .then((response) => {
        const total_page = response.headers.get('x-total-count') || '0';
        setTotalPages(total_page)
        response.json().then(data => {
          setPostList(data);
        });

      })
  }

  useEffect(() => {
    getPosts('', page);
  }, []);

  function PostView() {
    if (typeList === 'gridView') {
      return <PostCards items={posts} />;
    } else {
      return <PostList items={posts} />;
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
                getPosts={getPosts}
                setTypeList={setTypeList}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
              />
              <PostView />

              <div className="d-flex justify-content-between">
                <TotalPage totalPages={totalPages} />
                <PaginationCustom page={page} getPosts={getPosts} searchValue={searchValue} totalPages={totalPages} />
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </div>
  )
}

export default App