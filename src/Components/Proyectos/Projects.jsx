import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectsCard } from '../Card/ProjectsCard';
import db from '../../api/db.json';
import ImageGallery from '../Gallery/Gallery';

export const Projects = () => {
	const projects = db.projects;

	const rickAndMortyProject = projects.find(
		(project) => project.title === 'Rick and Morty'
	);

	const Drivers = projects.find((project) => project.title === 'Drivers F1');

	const SELPRO = projects.find((project) => project.title === 'SELPRO');
	return (
		<section className="projects" id="projects">
			<Container>
				<Row>
					<Col>
						<h2> Proyectos </h2>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">Rick and Morty</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Drivers F1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">SELPRO</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										<Col sm={6}>
											{rickAndMortyProject && (
												<ProjectsCard {...rickAndMortyProject} />
											)}
										</Col>
										<Col sm={6}>
											<div>
												<ImageGallery images={rickAndMortyProject.imgUrls} />
											</div>
										</Col>
										<Row sm={8} className="flex flex-row">
											<p>
												link:{' '}
												<a
													href="https://github.com/juf468/rick-and-morty"
													target="_blank"
													rel="noopener noreferrer"
												>
													https://github.com/juf468/rick-and-morty
												</a>
											</p>
										</Row>
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>
										<Col sm={6}>{Drivers && <ProjectsCard {...Drivers} />}</Col>

										<Col sm={6}>
											<div className="image-container">
												<ImageGallery images={Drivers.imgUrls} />
											</div>
										</Col>
										<Row sm={8} className="flex flex-row">
											<p>
												link:{' '}
												<a
													href="https://github.com/juf468/Pi-drivers"
													target="_blank"
													rel="noopener noreferrer"
												>
													https://github.com/juf468/Pi-drivers
												</a>
											</p>
										</Row>
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<Row>
										<Col sm={6}>{SELPRO && <ProjectsCard {...SELPRO} />}</Col>
										<Col sm={6}>
											<div className="image-container embed-responsive embed-responsive-16by9 video-container">
												<iframe
													className="embed-responsive-item video-iframe"
													src="https://player.vimeo.com/video/868063080?h=653a66eb66"
													allow="autoplay; fullscreen; picture-in-picture"
													allowFullScreen
													title="SELPRO Video"
												></iframe>
											</div>
										</Col>
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
//Esta configuración utiliza la clase embed-responsive y embed-responsive-16by9
// proporcionada por Bootstrap para garantizar que el video se ajuste de manera responsable al tamaño del contenedor padre (image-container).
//El iframe se establece con una relación de aspecto 16:9, y la clase embed-responsive-item controla su comportamiento dentro del contenedor.
