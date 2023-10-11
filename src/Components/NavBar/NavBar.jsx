import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import cubeIcon from '../../assets/cubeIcon.png';
import githubIcon from '../../assets/githubIcon2.png';
import linkdinIcon from '../../assets/linkedinIcon2.png';

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
			<Container>
				<Navbar.Brand href="/" className="ml-auto">
					<img src={cubeIcon} alt="Logo" />
					<span className="text-white mx-auto font-weight-bold ">
						Julia Franchi
					</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
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
							Habilidades
						</Nav.Link>
						<Nav.Link
							href="#projects"
							className={
								activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('projects')}
						>
							Proyectos
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="#">
								<img src={githubIcon} alt="github" />
							</a>
							<a href="#">
								<img src={linkdinIcon} alt="linkedin" />
							</a>
						</div>

						<button className="vvd">
							<span>Contactame</span>
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
