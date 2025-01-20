import React from 'react'
import { Route, withRouter } from 'react-router-dom'
// BootStrap
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/actions/userActions'

// My Components
import SearchBox from '../SearchBox'
import { logoImageBool, logoText, secondaryColor } from '../Assets/Constants'
import Logo from '../Logo'

const Header = (props) => {
  const { history } = props
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/')
  }

  return (
    <header>
      <Navbar
        style={{ backgroundColor: secondaryColor }}
        variant='dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand> {logoImageBool ? <Logo /> : logoText}</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
            <Nav className='ml-auto'>
              <LinkContainer to='/etiquettesession'>
                <Nav.Link>Etiquette training</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/etiquetteacademy'>
                <Nav.Link>Etiquette academy</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/afternoontea'>
                <Nav.Link>Afternoon tea</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/afternoontea'>
                <Nav.Link>Our story</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default withRouter(Header)
