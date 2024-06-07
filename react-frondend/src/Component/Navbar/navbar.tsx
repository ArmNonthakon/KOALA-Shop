import { useState } from 'react'
import './navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { getCookie, removeCookie } from 'typescript-cookie'
function Navbar() {
    const navigate = useNavigate()
    let [menuState, setMenuState] = useState(false)
    let [amountProduct, SetAmountProduct] = useState(0)
    window.addEventListener('resize', () => {
        SetAmountProduct(0)
        let menu = document.getElementById('navbar-authen-items-loginANDsign')
        let arrow = document.getElementById('icon-arrow')

        if (window.innerWidth >= 750) {
            if (menu) menu.style.display = 'flex';
            if (arrow) arrow.style.transform = 'rotate(90deg)';
            setMenuState(false);
        }
        else {
            if (menu) menu.style.display = 'none';
            if (arrow) arrow.style.transform = 'rotate(90deg)';
            setMenuState(false);
        }
    })
    const showMenu = () => {
        let arrow = document.getElementById('icon-arrow')
        let menu = document.getElementById('navbar-authen-items-loginANDsign')
        if (menuState === false) {
            if (arrow) arrow.style.transform = 'rotate(-90deg)';
            if (menu) menu.style.display = "flex";
            setMenuState(true);
        }
        else {
            if (arrow) arrow.style.transform = 'rotate(90deg)';
            if (menu) menu.style.display = 'none';
            setMenuState(false);
        }
    }

    return (
        <>
            <nav>
                <div className='shop-name'>KOALA Shop</div>
                <div><Link to="/"><img src="/koala.png" width="70px" alt="" /></Link></div>
                <div className='navbar-authen'>
                    <div></div>
                    <div
                        className='navbar-authen-items'
                        style={{ width: getCookie('token') && "75%" ,
                            justifyContent: getCookie('token') && "space-evenly"
                        }}>
                        <div className='navbar-authen-items-cart'>
                            <Link to="/cart"><img id='icon-cart' src="/shopping-cart.svg" alt="" /></Link>
                            <p>{amountProduct >= 100 ? '99+' : amountProduct}</p>
                        </div>

                        <img id='icon-arrow' className='icon-arrow' src="/angle-small-right.svg" width="30px" alt="" onClick={showMenu} />
                        <div
                            id='navbar-authen-items-loginANDsign' className='navbar-authen-items-loginANDsign'
                            style={{
                                padding: getCookie('token') && "12px 18px",
                                width: getCookie('token') && "40%",
                                justifyContent: getCookie('token') && "flex-end"
                            }}>
                            <Link to="/login" style={{ display: getCookie('token') ? "none" : "block" }}>LOGIN</Link>
                            <Link to="/signup" style={{ display: getCookie('token') ? "none" : "block" }}>SIGN UP</Link>
                            <p
                                className='logout'
                                style={{ display: getCookie('token') ? "block" : "none" }}
                                id='logout'
                                onClick={() => {
                                    removeCookie('token')
                                    navigate('/login')
                                }}
                            >LOGOUT</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='list-item'>
                <Link to="/clothes">Clothes</Link>
                <Link to="/trousers">Trousers</Link>
                <Link to="/socks_shoes">Socks and Shoes</Link>
                <Link to="/accessories">Accessories</Link>
            </div>
        </>
    )
}

export default Navbar
