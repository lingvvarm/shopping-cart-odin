import { useContext, useEffect, useState } from 'react';
import { ListGroup, Container, Col, Row, Button } from 'react-bootstrap';
import AppBar from './AppBar';
import { CartContext, CartType } from '../CartContext';
import { getItemById } from '../shopApi';
import QuantityInput from './Quantity';
import { Item } from './ItemPage';
import { useNavigate } from 'react-router-dom';

export interface cartItem extends Item {
  quantity: number | null;
}

interface cartData {
  id: number, 
  quantity: number
}

function Cart() {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const cart = useContext<CartType[]>(CartContext);
  const navigate = useNavigate();

  let totalPrice: number | string = cartItems.reduce(
    (accum: number, elem: cartItem) =>
      (accum += elem.price * (elem.quantity ? elem.quantity : 1)),
    0
  );

  totalPrice = totalPrice.toFixed(2);

  useEffect(() => {
    async function fetchCartItems() {
      const promises = cart.map(async (elem: CartType) => {
        const info = await getItemById(elem.id);
        return { ...info, quantity: elem.quantity };
      });

      let items = await Promise.all(promises);
      items = mergeItems(items);
      setCartItems(items);
    }

    fetchCartItems();
    return () => setCartItems([]);
  }, [cart]);

  const handleQuantityChange = (itemId: number, newQuantity: number | null) => {
    const updatedCartItems = cartItems.map((item: cartItem) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  function mergeItems(items: cartData[]) {
    const mergedItems = items.reduce((accumulator: cartData[], currentItem: cartData) => {
      const existingItem = accumulator.find((item) => item.id === currentItem.id);
  
      if (existingItem) {
        existingItem.quantity += currentItem.quantity || 0;
      } else {
        accumulator.push({ ...currentItem });
      }
      return accumulator;
    }, []);
  
    return mergedItems;
  }

  return (
    <>
      <CartContext.Provider value={cart}>
        <AppBar />
        <Container className="text-center">
          <h2 className="my-4">Your cart</h2>
          {cartItems.length > 0 ? (
            <ListGroup style={{ width: '70%', margin: 'auto' }}>
              {cartItems.map((elem: cartItem) => (
                <ListGroup.Item key={elem.id}>
                  <Row>
                    <Col xs={2} md={2}>
                      <img
                        src={elem.image}
                        alt="item"
                        className="img-fluid object-fit-scale"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </Col>
                    <Col xs={5} md={5} className="text-left text-md-center d-flex justify-content-center flex-column">
                      <h5>{elem.title}</h5>
                    </Col>
                    <Col xs={3} md={3} className="text-left text-md-center d-flex justify-content-center flex-column">
                      <div className="quantity-container d-flex justify-content-center mb-3">
                        <QuantityInput
                          value={elem.quantity}
                          onChange={(value) => handleQuantityChange(elem.id, value)}
                        />
                      </div>
                    </Col>
                    <Col xs={2} md={2} className="text-left text-md-center d-flex justify-content-center flex-column">
                      <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#007bff' }}>
                        ${elem.price} × {elem.quantity}
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <h4 className="mt-4 text-end">Total: ${totalPrice}</h4>
              <Button type="button" className="btn btn-primary btn-lg ms-auto mt-2" style={{ width: '300px' }} onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>
                Proceed to checkout
              </Button>
            </ListGroup>
          ) : (
            <>
            <h2>No items in the cart.</h2>
            <Button type="button" className="btn btn-primary btn-lg ms-auto mt-2" style={{ width: '300px' }} onClick={() => navigate(`/shop`)}>
                Go to shop
            </Button>
            </>
          )}
        </Container>
      </CartContext.Provider>
    </>
  );
}

export default Cart;
