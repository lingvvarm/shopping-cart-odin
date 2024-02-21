import Navbar from "../Navbar/Navbar"
import ItemCard from '../Item/ItemCard'
import { ItemProps } from '../Item/ItemCard'
import { getItems } from '../../shopApi'
import { useState, useEffect } from 'react'


function Shop() {
    const [ itemsInfo, setItemsInfo ] = useState([]);

    useEffect(() => {
        getItems(5).then(data => setItemsInfo(data));
    }, [])

    return (
        <>
        <Navbar />
        <p>Shop</p>
        <div className="items-container">
            {itemsInfo ? itemsInfo.map((elem: ItemProps) => {   
            return <ItemCard item={elem} key={elem.id}/>
            }) : <p>Loading</p>}
        </div>
        </>
    )
}

export default Shop