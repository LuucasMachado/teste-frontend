import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../logo.svg'

const NavbBar = () => {
    return (
        <Navbar bg='primary' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>
              <img
              alt='Logo sensedia'
              src={logo}
              height='30'
              className='d-inline-block align-top'
              />{''}
            </Navbar.Brand>
          </Container>
      </Navbar>
    );
  }

export default NavbBar;