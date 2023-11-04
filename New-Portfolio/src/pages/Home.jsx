// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import AboutMe from './AboutMe';
// import Error from './Error';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Nav from '../components/Nav'


export default function Home() {
    return (
        
        <AboutMe />,
        <Projects />,
        <ContactMe />,
        <Nav />

	);
}
