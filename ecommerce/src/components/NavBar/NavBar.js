import CardWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
            <h3>ZonaCero</h3>
            </Link>

            <div>
            <NavLink to={'/category/camisa'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>camisa</NavLink>
            <NavLink to={'/category/camisa'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>camisa</NavLink>
            <NavLink to={'/category/camisa'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>camisa</NavLink>

            </div>
            <CardWidget/>
        </nav>
    )
}

export default NavBar