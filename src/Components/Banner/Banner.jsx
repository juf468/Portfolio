import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import yo from '../../assets/julita.jpg';

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(0);

	const toRotate = [' (Frontend Developer)=>'];
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);

	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);
		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}
		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(100);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<div>
							<span className="tagline">Sobre mí</span>
							<h1>
								{`const juliaFranchi =`} <span className="wrap">{text}</span>
							</h1>
							<p>
								{`{ Naci el 23 de Septiembre 1996, desde los 12 años me dedico a las acrobacias, me gusta dibujar y pintar, tambien me interese en la salud y trabaje como tecnica de EEG. Sin embargo, mi lado artístico ha sido un constante motor de inspiración. Estoy en constante búsqueda de una alternativa que me permita fusionar mis pasiones y habilidades. A través de la creación de productos y diseños, aspiro a manifestar la esencia multifacética que me define.}`}
							</p>
							<button onClick={() => console.log('connect')}>
								Contactame <ArrowRightCircle size={25} />
							</button>
						</div>
					</Col>
					<Col xs={12} md={6} xl={5} className="mr-auto">
						<img src={yo} alt="Headder Img" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
