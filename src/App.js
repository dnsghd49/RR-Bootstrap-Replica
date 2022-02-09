import './App.css';
import Menubar from './components/Navbar';
import StoreLists from './components/StoreLists';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Menubar />
      <Search />
      <StoreLists />
    </div>
  );
}

export default App;
