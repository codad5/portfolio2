import './App.css';
import Card from './Card';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Codad5</h1>
        <div className="time-show">
          <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
        </header>
      <main className="main">
        
        <Card className="welcomeCard">
          <div className="welcomeCardImage">
            <img src={logo } />
          </div>
          <div className="welcomeCardTitle .text-primary ">
            <div className="smallText">
              I AM
            </div>
            <h2>Chibueze Aniezeofor Michael</h2>
          </div>
        </Card>
        <Card>
          Hello World
        </Card>
        <Card>
          Hello World
        </Card>
      </main>
    </div>
  );
}

export default App;
