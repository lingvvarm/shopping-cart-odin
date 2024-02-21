import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </header>
    )
}

export default Navbar