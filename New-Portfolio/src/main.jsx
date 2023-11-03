import React from 'react';
import ReactDOM from 'react-dom/client';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import App from './App';
import AboutMe from './pages/AboutMe';
import Error from './pages/Error';
import Projects from './pages/Project';
import ContactMe from './pages/ContactMe';

// import  Header  from './components/Header';
// import  Project  from './components/Project';
// import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
	{
		path: '/',
		Element: <App />,
        errorElement: <Error />,
        
		children: [
			{
				index: true,
				element: <AboutMe />,
			},
			{
				path: '/Projects',
				element: <Projects />,
			},
			// {
			//     may make this a resume page since linked in is just a link
			//     path: '/LinkedIn',
			//     element: <LinkedIn />,
			// },
			{
				path: '/Contact',
				element: <ContactMe />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
