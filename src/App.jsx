import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
<div>
    <div>
      <NavBar />

    <div>
      <ItemListContainer nombre="Hola, Axel Cutri" />
    </div>  

    </div>
    </div>
  )
}
export default App