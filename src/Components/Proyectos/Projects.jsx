import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectsCard } from '../Card/ProjectsCard';
import db from '../../api/db.json';

export const Projects = () => {
	const projects = db.projects;

	const rickAndMortyProject = projects.find(
		(project) => project.title === 'Rick and Morty'
	);

	const Drivers = projects.find((project) => project.title === 'Drivers F1');

	const SELRPO = projects.find((project) => project.title === 'SELPRO');
	return (
		<section className="projects" id="projects">
			<Container>
				<Row>
					<Col>
						<h2>Proyectos</h2>

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
										{rickAndMortyProject && (
											<ProjectsCard {...rickAndMortyProject} />
										)}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>{Drivers && <ProjectsCard {...Drivers} />}</Row>
								</Tab.Pane>

								<Tab.Pane eventKey="third">
									<Row>{SELRPO && <ProjectsCard {...SELRPO} />}</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
