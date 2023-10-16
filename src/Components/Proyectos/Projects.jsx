import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectsCard } from '../Card/ProjectsCard';

export const Projects = () => {
	const projects = [
		{
			title: 'Rick and Morty',
			description: 'akjdasjdoiasdjo',
			imgUrl:
				'https://us.123rf.com/450wm/cvetinaivanova/cvetinaivanova2301/cvetinaivanova230100100/199685538-c%C3%A1mara-de-fotos-e-icono-de-imagen-o-imagen-s%C3%ADmbolo-lleno-de-galer%C3%ADa-%C3%A1lbum-y-fotograf%C3%ADa.jpg',
		},
		{
			title: 'Drivers',
			description: 'akjdasjdoiasdjo',
			imgUrl:
				'https://us.123rf.com/450wm/cvetinaivanova/cvetinaivanova2301/cvetinaivanova230100100/199685538-c%C3%A1mara-de-fotos-e-icono-de-imagen-o-imagen-s%C3%ADmbolo-lleno-de-galer%C3%ADa-%C3%A1lbum-y-fotograf%C3%ADa.jpg',
		},
	];
	return (
		<section className="projects" id="projects">
			<Container>
				<Row>
					<Col>
						<h2>Proyectos</h2>
						<p> asdasdasda</p>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">Tab 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab 2</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Tab 3</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => {
											return <ProjectsCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second"> Loren Ipsum</Tab.Pane>
								<Tab.Pane eventKey="third"> Loren Ipsum</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
