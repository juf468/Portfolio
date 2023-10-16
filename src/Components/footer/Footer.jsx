import { Col, Container, Row } from 'react-bootstrap';

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Col sm={6} className="mt-3">
					<Col align="start">
						<p>CopyRight 2023</p>
					</Col>
				</Col>
			</Container>
		</footer>
	);
};
