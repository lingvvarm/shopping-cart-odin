import './App.scss'
import AppBar from './components/AppBar'
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { getItems } from './shopApi';
import { Container } from 'react-bootstrap';
import ItemCard from './components/ItemCard';
import { ItemProps } from './components/ItemCard';

function App() {
  const [itemsInfo, setItemsInfo] = useState([]);

  useEffect(() => {
    getItems(3).then((data) => setItemsInfo(data));
  }, []);

  return (
    <>
      <AppBar/>
      <div className="app-container">
        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-header">Welcome to the shop!</h1>
            <p className="hero-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec facilisis justo, sagittis bibendum ipsum. Donec diam ex, dictum non vulputate ut, mattis at elit. Proin vitae laoreet diam, vitae feugiat augue. Aliquam sapien purus, posuere ac justo in, ultrices consectetur eros. Aenean placerat sed dolor non lobortis.</p>
          </div>
          <img
          src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE="
          alt="hero-image"
          className="hero-image" />
        </div>
      </div>
        <h2 className='featured-text'>Featured items</h2>
        <Container className='mt-4 text-center d-flex flex-wrap justify-content-center gap-4'>
        {itemsInfo ? itemsInfo.map((elem: ItemProps) => (
          <div key={elem.id} className='mb-4'>
            <ItemCard item={elem} />
          </div>
        )) : <p>Loading</p>}
      </Container>
    </>
  )
}

export default App
