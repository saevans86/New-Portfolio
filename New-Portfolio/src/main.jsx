import ReactDOM from 'react-dom/client';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import '../src/style/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './pages/Home'
import Error from './pages/Error';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'AboutMe',
				element: <AboutMe />,
			},
			{
				path: 'Projects',
				element: <Projects />,
			},
			{
				path: 'Contact',
				element: <ContactMe />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
