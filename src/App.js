import './App.css';
import ItemListCointainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  
  
  //  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main className="App-main">
        <ItemListCointainer />
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
