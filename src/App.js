import './App.css'
import AreaToDo from './components/AreaToDo';
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Header />
        <AreaToDo/>
        <footer>Desenvolvido por Wallinson Rocha.</footer>
      </Router>
    </div>
  );
}

export default App;
