import './App.css';
import { Banner } from './Components/Banner/Banner';
import { NavBar } from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './Components/Skills/Skills';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
		</div>
	);
}

export default App;
