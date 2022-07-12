
import { Fragment } from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface Props {
  page: number;
  searchValue: string;
  getPosts: any;
  totalPages: string;
  
}

  const PaginationCustom: React.FC<Props> = ( {page, getPosts, searchValue, totalPages }) => {
    function handleNextPage() {
      var nextPage = page + 1;
      getPosts(searchValue, nextPage);
    }
  
    function handlePrevPage() {
      if(page === 1) { return true }
      var prevPage = page - 1;
      getPosts(searchValue, prevPage);
    }

    const CustomPagination: Function = (): JSX.Element[] => {
      let qtdPages = parseInt(totalPages) / 10;
      let pageNumbers = [];
      for(var i = 1; i < qtdPages; i++) {
        if(page === i) {
          pageNumbers.push(<Fragment><Pagination.Item active>{page}</Pagination.Item></Fragment>);
        } else if(i < page) {
          pageNumbers.push(<Fragment><Pagination.Item onClick={handlePrevPage}>{i}</Pagination.Item></Fragment>);
        } else {
          pageNumbers.push(<Fragment><Pagination.Item onClick={handleNextPage}>{i}</Pagination.Item></Fragment>);
        }
      }
      return pageNumbers;
    };

    if(parseInt(totalPages) > 10) {
      return (
        <Pagination>
          <Pagination.Prev onClick={handlePrevPage} />
            <Fragment>
              <CustomPagination />
            </Fragment>
          <Pagination.Next onClick={handleNextPage} />
        </Pagination>
      );
    } else {
      return(
        <div></div>
      )
    }

  }

export default PaginationCustom;