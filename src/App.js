import './index.css';

import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Password from './components/Password';

function App() {
  return (
		<div>
			<div>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='SignUp' element={<SignUp />}></Route>
					<Route path='SignIn' element={<SignIn />}></Route>
					<Route path='Password' element={<Password />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
