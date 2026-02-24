import hamburgerMenuIcon from "../assets/hamburer-menu-icon.svg"

function Header ( { user } )
{
	return (
		<section className="Header">
			<img className="hamburger-menu" src={hamburgerMenuIcon} alt="menu icon" />
			<h1>Snowfall</h1>
			<img id="header-avatar" className="avatar-img" src={user.avatar_url} alt="user avatar" width="200" height="200" />
		</section>
	);
}

export default Header;
