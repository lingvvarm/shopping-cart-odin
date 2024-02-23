import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCard.scss';

export interface ItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  id: number;
  rating: Rating;
}

export interface Rating {
  rate?: number;
  count?: number;
}

function ItemCard({ item }: { item: ItemProps }): JSX.Element {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '20rem', height: '100%' }} className="h-100 d-flex flex-column">
      <Card.Img variant="top" src={item.image} style={{ objectFit: 'contain', height: '200px' }} className='p-2'/>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item.title}</Card.Title>
        <Card.Text className="description">
          Price: ${item.price}
        </Card.Text>
        <div className="mt-auto">
          <Button variant="primary" onClick={() => navigate(`/item/${item.id}`)}>Buy now</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
