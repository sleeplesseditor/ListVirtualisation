import logo from './logo.svg';
import './App.css';
import Section from './Section';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          useIntersectionObserver Test
        </p>
      </header>
      <Section /> 
    </div>
  );
}

export default App;
