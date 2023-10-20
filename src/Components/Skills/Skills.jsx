import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import jsLogo from '../../assets/javaScripIcon.png';
import htmlLogo from '../../assets/icons8-html-5-240.png';
import csslLogo from '../../assets/icons8-css3-300.png';
import cssTailwindlLogo from '../../assets/icons8-tailwind-css-240.png';
import reduxlLogo from '../../assets/icons8-redux-240.png';
import reactlLogo from '../../assets/icons8-reaccionar-nativo-240.png';
import zustandLogo from '../../assets/zustand.png';
import BoostrapLogo from '../../assets/icons8-oreja-240.png';

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2>Tecnologías</h2>

							<Carousel
								responsive={responsive}
								infinite={true}
								className="skill-slider"
							>
								<div className="item">
									<img src={jsLogo} alt="Image" />
									<h5>JavaScript</h5>
								</div>
								<div className="item">
									<img src={htmlLogo} alt="Image" />
									<h5>HTML</h5>
								</div>
								<div className="item">
									<img src={csslLogo} alt="Image" />
									<h5>CSS</h5>
								</div>
								<div className="item">
									<img src={cssTailwindlLogo} alt="Image" />
									<h5>CSS Tailwind</h5>
								</div>
								<div className="item">
									<img src={reduxlLogo} alt="Image" />
									<h5>Redux</h5>
								</div>
								<div className="item">
									<img src={reactlLogo} alt="Image" />
									<h5>React</h5>
								</div>
								<div className="item">
									<img
										src={zustandLogo}
										alt="Image"
										style={{ borderRadius: '50%' }}
									/>
									<h5>zustand</h5>
								</div>
								<div className="item">
									<img src={BoostrapLogo} alt="Image" />
									<h5>Bootstrap</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
