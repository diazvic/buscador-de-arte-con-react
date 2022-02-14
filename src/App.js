import "../src/Nav.scss";
import "../src/Form.scss";
import "../src/Footer.scss";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Seccion from "./components/Seccion";
import Footer from "./components/Footer";
const App = () => {
	return (
		<div>
			<Nav />
			<Form />
			<Seccion />
			<Footer />
		</div>
	);
};
export default App;
