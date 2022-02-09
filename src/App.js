import './App.css';
import Menubar from './components/Navbar';
import StoreLists from './components/StoreLists';

function App() {
  return (
    <div className="App">
      <Menubar />
      <h1>Hello World</h1>
      <StoreLists />
    </div>
  );
}

export default App;
