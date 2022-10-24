import CrudApp from "./components/CrudApp";
import CrudJSON from './components/CrudJSON'


function App() {
  return (
    <div className="App">
      <h2>Simulating CRUD APP with Local Data</h2>
      <CrudApp></CrudApp>
      <hr></hr>
      <h2>CRUD APP with JSON SERVER</h2>
      <CrudJSON></CrudJSON>
    </div>
  );
}

export default App;
