import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'


import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import Articles from "./components/articles.jsx";
import Article from "./components/article.jsx";

function App() {

	const	defaultUser =
	{
		username:"jessjelly",
		name:"Jess Jelly",
		avatar_url:"https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
	}

	const [user, setUser] = useState(defaultUser);
	
	return (
	  <>
	  <div className="App">
		<Header user={user} />
		<hr></hr>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/articles" element={<Articles/>}/>
			<Route path="/articles/:article_id" element={<Article/>}/>
		</Routes>
	  </div>
	  </>
	)
}

export default App
