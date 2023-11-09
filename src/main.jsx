import ReactDOM from 'react-dom/client';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import '../src/style/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Resume from './pages/Resume'
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
				element: <AboutMe />,
			},
			{
				path: 'projects',
				element: <Projects />,
			},
			{
				path: 'ContactMe',
				element: <ContactMe />,
			},
			{
				path: 'Resume',
				element: <Resume />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
