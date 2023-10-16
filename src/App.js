import './App.css';
import { Banner } from './Components/Banner/Banner';
import { NavBar } from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './Components/Skills/Skills';
import { Projects } from './Components/Proyectos/Projects';
import { Footer } from './Components/footer/Footer';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
