
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface Props {
  searchValue: string;
  setSearchValue: any;
  setTypeList: any;
  getPosts: any;
}

  const Filter: React.FC<Props> = ({searchValue, getPosts, setTypeList, setSearchValue }) => {
    const handleSearch = () => {
      getPosts(searchValue);
    }
    
    const handleClear = () => {
      setSearchValue('');
      getPosts('');
    }
    
    interface ISelectedViewOption {
      value: string;
      text: string;
    }
    
    const selectedOptionView: ISelectedViewOption[] = [
      { value: 'listView', text: 'List View' },
      { value: 'gridView', text: 'Grid View' },
    ];
    
    
    
    const changeValue = (typeView:any) => {
      setTypeList(typeView)
    }
    
    
    return (
      <Form className='d-flex d-flex align-items-baseline mb-4'>
        <Form.Group className='w-50' controlId='formBasicTitle'>
          <Form.Control type='title' placeholder='Type for search...' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
        </Form.Group>

        <Form.Select aria-label='Select type list' className='w-25 m-3 form-control' onChange={e => changeValue(e.target.value)}>
          {selectedOptionView.map(option => {
            return (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
            );
          })}
        </Form.Select>

        <Button variant='primary'  className='m-1 custom-rounded' onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="m-2">Search</span>
        </Button>

        <div role='button' className='m-1 text-uppercase text-primary' onClick={handleClear}>
          Clear
        </div>
      </Form>
    );
  }

export default Filter;