import { useEffect, useState, useContext } from "react";
import { CartContext } from '../../CartContext';
import { useParams } from "react-router-dom"
import { getItemById } from "../../shopApi";
import Navbar from "../Navbar/Navbar";
import { ItemProps, Rating } from "../Item/ItemCard";
import QuantityInput from "../Quantity";

interface Item extends Omit<ItemProps, 'rating'> {
    rating?: Rating;  
}

function ItemPage() {
    const { itemId } = useParams();
    const [item, setItem] = useState(initialItem);
    const [quantity, setQuantity] = useState(1);
    const cart = useContext(CartContext);

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
        <Navbar />
        <CartContext.Provider value={cart}>
        <div className="item-page">
            <p><b>{item.title}</b></p>
            <p>{item.description}</p>
            <img src={item.image} alt="item-image" />
            <p>{item.price}</p>
            <p>id: {item.id}</p>
            <QuantityInput value={quantity} onChange={handleChange}/>
            <button type="button" onClick={() => cart.push({id: item.id, quantity})}>Add to cart</button>
        </div>
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

export default ItemPage