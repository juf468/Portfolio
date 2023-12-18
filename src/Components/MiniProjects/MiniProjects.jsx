import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectsCard } from '../Card/ProjectsCard';
import db from '../../api/db.json';
import ImageGallery from '../Gallery/Gallery';

export const MiniProjects = () => {
	const projects = db.projects;

	const TATETI = projects.find((project) => project.title === 'TA-TE-TI');

	const ToDoList = projects.find((project) => project.title === 'To Do List');

	return (
		<section className="min-projects" id="min-projects">
			<Container>
				<Row>
					<Col>
						<h2> Mini-Proyectos </h2>
						<Tab.Container id="min-projects-tabs" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">TA-TE-TI</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">To Do List</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										<Col sm={6}>{TATETI && <ProjectsCard {...TATETI} />}</Col>
										<Col sm={6}>
											<div>
												<ImageGallery images={TATETI.imgUrls} />
											</div>
										</Col>
										<Row sm={8} className="flex flex-row">
											<p>
												link:{' '}
												<a
													href="https://github.com/juf468/Ta-te-ti"
													target="_blank"
													rel="noopener noreferrer"
												>
													https://github.com/juf468/Ta-te-ti
												</a>
											</p>
										</Row>
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>
										<Col sm={6}>
											{ToDoList && <ProjectsCard {...ToDoList} />}
										</Col>

										<Col sm={6}>
											<div className="image-container">
												<ImageGallery images={ToDoList.imgUrls} />
											</div>
										</Col>
										<Row sm={8} className="flex flex-row">
											<p>
												link:{' '}
												<a
													href="https://github.com/juf468/To-Do-List"
													target="_blank"
													rel="noopener noreferrer"
												>
													https://github.com/juf468/To-Do-List
												</a>
											</p>
										</Row>
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
