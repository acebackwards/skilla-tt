import './App.css';
import Header from '../src/Components/Header/Header'
import Menu from '../src/Components/Menu/Menu'
import Listing from '../src/Components/Listing/Listing'
function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Menu/>
        <div className='main-content'>
          <Header/>
          <Listing/>
        </div>
      </div>
    </div>
  );
}

export default App;
