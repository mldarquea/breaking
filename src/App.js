import './App.css';
import Routes from './components/Routes';
import Navbar from './Navbar';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </div>
  );
}

export default App;
