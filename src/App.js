import CrudApp from "./components/CrudApp";
import CrudJSON from './components/CrudJSON'
import Video from './Videos/CRUD.mkv'


function App() {
  return (
    <div className="App">
      <h2>Simulating CRUD APP with Local Data</h2>
      <CrudApp></CrudApp>
      <hr></hr>
      <h2>CRUD APP with JSON SERVER</h2>
      <h3>Example Video</h3>
      <video width="750" height="500" src={Video} controls/>
      <h3>CRUD</h3>
      <CrudJSON></CrudJSON>
    </div>
  );
}

export default App;
