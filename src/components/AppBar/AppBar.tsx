import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function AppBar() {
  const cart = useContext(CartContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="nav-link">
            <Navbar.Brand>Shopping cart</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              <Nav.Item>Home</Nav.Item>
            </Link>
            <Link to="/shop" className="nav-link">
              <Nav.Item>Shop</Nav.Item>
            </Link>
            <Link to="/cart" className="nav-link">
              <Nav.Item>
                Cart{' '}
                {cart.length > 0 && (
                  <Badge bg="secondary" className="ml-1">
                    {cart.reduce((accum, elem) => accum += elem.quantity, 0)}
                  </Badge>
                )}
              </Nav.Item>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;
