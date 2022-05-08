import React from 'react';
import './index.css';

import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home'
import SignIn from './components/SignIn';
import Password from './components/Password';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='SignUp' element={<SignUp />}></Route>
				<Route path='SignIn' element={<SignIn />}></Route>
				<Route path='Password' element={<Password />}></Route>
			</Routes>
		</div>
	);
}

export default App;
