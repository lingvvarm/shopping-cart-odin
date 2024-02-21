import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemCard from './components/Item/ItemCard'
import { ItemProps } from './components/Item/ItemCard'
import { getItems } from './shopApi'
import './App.scss'

function App() {
  const [ itemsInfo, setItemsInfo ] = useState([]);

  useEffect(() => {
    getItems(5).then(data => setItemsInfo(data));
  }, [])


  return (
    <>
      <Navbar />
      <p>Hello!</p>
      <div className="items-container">
        {itemsInfo ? itemsInfo.map((elem: ItemProps) => {
          return <ItemCard item={elem} key={elem.id}/>
        }) : <p>Loading</p>}
      </div>
    </>
  )
}

export default App
