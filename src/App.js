import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Componentes
import PrimerComponente from "./components/PrimerComponente";

function holaMundo(nombre, edad) {
  let presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  );
  return presentacion;
}
function App() {
  let nombre = "Luis";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test de reload react.
        </p>
        {holaMundo(nombre, 20)}
        
        <section className='componentes'>
          <PrimerComponente/>
        </section>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
