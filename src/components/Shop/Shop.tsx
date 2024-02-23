import ItemCard from '../Item/ItemCard';
import { ItemProps } from '../Item/ItemCard';
import { getItems } from '../../shopApi';
import { useState, useEffect } from 'react';
import AppBar from '../AppBar/AppBar';
import { Container } from 'react-bootstrap';

function Shop() {
  const [itemsInfo, setItemsInfo] = useState([]);

  useEffect(() => {
    getItems(15).then((data) => setItemsInfo(data));
  }, []);

  return (
    <>
      <AppBar />
      <Container className='mt-4 text-center d-flex flex-wrap justify-content-center gap-4'>
        {itemsInfo ? itemsInfo.map((elem: ItemProps) => (
          <div key={elem.id} className='mb-4'>
            <ItemCard item={elem} />
          </div>
        )) : <p>Loading</p>}
      </Container>
    </>
  );
}

export default Shop;
