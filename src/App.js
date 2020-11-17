import logo from './logo.svg';
import './App.css';
import MenuAcima from "./components/MenuAcima/menu";
import Cuerpo from "./components/MenuAcima/Cuerpo/index";
import Abajo from "./components/MenuAcima/Abajo/index";

function App() {
  return (
    <>
  <div><header><MenuAcima/></header>
  </div>
  <section><Cuerpo/></section>
  <div>
  <footer><Abajo/></footer>
  </div>
    </>
  );
}

export default App;
