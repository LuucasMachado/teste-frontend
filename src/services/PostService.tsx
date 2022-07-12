export default {

    async getApiData (searchValue:string, page:number) {
        var filter_parms = ''
        if(searchValue) {
          filter_parms = `?title=${searchValue}`;
        }
        return fetch(
          `https://jsonplaceholder.typicode.com/posts${filter_parms}?_page=${page}&_limit=10`
        )
      }
  };