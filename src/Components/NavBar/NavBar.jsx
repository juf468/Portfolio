import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import cubeIcon from '../../assets/cubeIcon.png';
import githubIcon from '../../assets/githubIcon.png';
import linkdinIcon from '../../assets/linkdinIcon.png';
// className="bg-body-tertiary" color

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false); //para detectar el scrool x cambio de color de fondo

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', onscroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		return setActiveLink(value);
	};
	return (
		<Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={cubeIcon} alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggle-icon" />
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={
								activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('home')}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#skills"
							className={
								activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('skills')}
						>
							skills
						</Nav.Link>
						<Nav.Link
							href="#projects"
							className={
								activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('projects')}
						>
							projects
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social icon">
							<a href="#icon">
								<img src={githubIcon} alt="" />
							</a>
							<a href="#icon">
								<img src={linkdinIcon} alt="" />
							</a>
						</div>
						<button className="vvd" onClick={() => console.log('connect')}>
							<span className=""> contactame </span>
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
