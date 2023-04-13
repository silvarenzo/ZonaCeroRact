import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>Tienda de Ropa</h3>
            <div>
                <button>Remeras</button>
                <button>Bermudas</button>
                <button>Chombas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar