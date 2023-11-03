// import  Header  from './components/Header';
// import  Project  from './components/Project';
// import Footer from './components/Footer';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<Nav />
			<main className='mx-2'></main>
			<Outlet />
		</>
	);
}

export default App;
