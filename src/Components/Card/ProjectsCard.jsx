import { Col } from 'react-bootstrap';

export const ProjectsCard = ({ title, description }) => {
	return (
		<Col sm={12} md={12}>
			<div className="proj-txtx">
				<h4>{title}</h4>
				<span>{description}</span>
			</div>
		</Col>
	);
};
