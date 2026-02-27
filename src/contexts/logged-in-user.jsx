import { useState, createContext } from "react";

const	UserContext = createContext();

function UserProvider ( { children } )
{
	const	defaultUser =
	{
		username:"jessjelly",
		name:"Jess Jelly",
		avatar_url:"https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
	}

	const	[user, setUser] = useState(defaultUser);

	return (
		<UserContext.Provider value={ { user, setUser } }>
			{children}
		</UserContext.Provider>
	)
}

export { UserProvider,  UserContext};

