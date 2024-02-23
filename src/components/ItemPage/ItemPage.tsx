import { useEffect, useState, useContext } from "react";
import { CartContext } from '../../CartContext';
import { useParams } from "react-router-dom"
import { getItemById } from "../../shopApi";
import AppBar from "../AppBar/AppBar";
import { ItemProps, Rating } from "../Item/ItemCard";
import QuantityInput from "../Quantity";
import { Container, Row, Col, Button, Image, Alert } from 'react-bootstrap';

export interface Item extends Omit<ItemProps, 'rating'> {
  rating?: Rating;  
}

function ItemPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(initialItem);
  const [quantity, setQuantity] = useState(1);
  const cart = useContext(CartContext);
  const [purchased, setPurchased] = useState(false);

  useEffect(() => {
    getItemById(itemId!).then(data => {
      setItem(data);
    })
  }, [itemId])

  function handleChange(value: number | null) {
    if (value === null) value = 1;
    setQuantity(value);
  }

  return (
    <>
      <AppBar />
      <CartContext.Provider value={cart}>
        <Container className="item-page mt-4">
          <Row>
            <Col md={6}>
              <Image src={item.image} alt="item-image" fluid style={{ maxWidth: '90%', height: '90%' }} />
            </Col>
            <Col md={6}>
              <h3><b>{item.title}</b></h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <QuantityInput value={quantity} onChange={handleChange}/>
              <Button variant="primary" className="mt-4" onClick={() => {
                cart.push({ id: item.id, quantity });
                setPurchased(true);
              }}>Add to cart</Button>
              {purchased ? (
                <Alert variant={'success'} className="mt-3">
                {quantity} × {item.title} was added to your cart!
                </Alert>
              ): (
                null
              )}
            </Col>
          </Row>
        </Container>
      </CartContext.Provider>
    </>
  )
}

const initialItem: Item = {
  id: 1,
  title: 'Sample Item',
  price: 19.99,
  category: 'Sample Category',
  description: 'This is a sample item description.',
  image: 'sample.jpg',
};

export default ItemPage;
