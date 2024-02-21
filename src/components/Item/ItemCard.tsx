import './ItemCard.scss'

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
    rate: number;
    count: number;
}

function ItemCard({ item }: { item: ItemProps }): JSX.Element {
    return (
        <div className="item-card">
            <p><b>{item.title}</b></p>
            <p>{item.description}</p>
            <img src={item.image} alt="item-image" />
            <p>{item.price}</p>
            <p>id: {item.id}</p>
            <p>Rating: {item.rating.rate}</p>
            <button type="button">Buy now</button>
        </div>
    )
}

export default ItemCard