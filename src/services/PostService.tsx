export default {

    async getApiData (searchValue:string, page:number) {
        let filter_parms = ''
        if(searchValue) {
          filter_parms = `?title=${searchValue}&_page=${page}&_limit=10`;
        } else {
          filter_parms = `?_page=${page}&_limit=10`;
        }
        return fetch(
          `https://jsonplaceholder.typicode.com/posts${filter_parms}`
        )
      }
  };