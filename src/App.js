import './App.css';
import { Banner } from './Components/Banner/Banner';
import { NavBar } from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
		</div>
	);
}

export default App;
