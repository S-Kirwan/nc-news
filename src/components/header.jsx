import hamburgerMenuIcon from "../assets/hamburer-menu-icon.svg";

import { Link } from "react-router-dom";

function Header ( { user } )
{
	return (
		<header className="Header">
			<img className="hamburger-menu" src={hamburgerMenuIcon} alt="menu icon" />
			<Link to="/">
				<h1>Snowfall</h1>
			</Link>
			<section id="header-user-info">
				<p id="header-username">{user.username}</p>
				<img id="header-avatar" className="avatar-img" src={user.avatar_url} alt="user avatar" width="200" height="200" />
			</section>
		</header>
	);
}

export default Header;
