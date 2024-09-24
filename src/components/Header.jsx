import { useState } from "react";
import { APP_LOGO_URL, CART_LOGO_URL } from "../utils/util";

const Header = () => {
	const [buttonName, setButtonName] = useState("Login")
	// buttonName = "Random"
	return (
		<nav className='nav-bar-main'>
			<div className='content'>
				<img
					width="30" 
					height="30"
					src= {APP_LOGO_URL}
					alt="appicon"
				/>
			</div>
			<ul className='content'>
				<li>Home</li>
				<li>About Us</li>
				<li>Contact Us</li>
			</ul>
			<div className='content'>
				<button role='cart' className='cart-btn'>
					<img width="24" height="24" src={CART_LOGO_URL} alt="shopping-cart-loaded--v1"/>
				</button>
				<button onClick={() => (setButtonName(buttonName === "Logout" ? "Login" : "Logout"))}>{buttonName}</button>
			</div>
		</nav>
	)
}

export default Header;