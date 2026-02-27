import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react'

import { UserContext } from "./contexts/logged-in-user.jsx";

import './App.css'

import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import Articles from "./components/articles.jsx";
import Article from "./components/article.jsx";

function App() {

	const	{ user } = useContext(UserContext);

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
