import React from 'react'
import "./App.css";
import Header from './components/Header';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Outlet />
			{/* if path = /*/}
			{/* <Body /> */}
		</div>
	)
}

export default App