import Navbar from "../Navbar/Navbar"
import { useContext, useEffect, useState } from "react"
import { CartContext } from '../../CartContext'
import { getItemById } from "../../shopApi";


function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const cart = useContext(CartContext);

  useEffect(() => {
    async function fetchCartItems() {
      const promises = cart.map(async (elem) => {
        const info = await getItemById(elem.id);
        return { ...info, quantity: elem.quantity };
      });
  
      const items = await Promise.all(promises);
      setCartItems(items);
    }
  
    fetchCartItems();
    return () => setCartItems([]);
  }, [cart]);
  

    return (
        <>
        <CartContext.Provider value={cart}>
          <Navbar />
          <p>Cart</p>
          {cartItems.map(elem => {
            return (
              <div className="item" key={elem.id}>
                  <p>Name: {elem.title}</p>
                  <p>Price: {elem.price}</p>
                  <p>Quantity: {elem.quantity}</p>
                  <img src={elem.image} alt="image" />
                </div>
            )
          })}
          </CartContext.Provider>
        </>
    )
}

export default Cart