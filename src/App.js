import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [n, setName] = useState("")
  const handleSubmit = () => {
    alert("the name entered is :" + n);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form className='form-control' onSubmit={handleSubmit}>
          <span className='form-detail'>enter your name</span>
          <input className='form-input' placeholder='name' type='number' value={n} onChange={(e) => { setName(e.target.value) }} />
          <button type='submit' className='form-btn'>submit</button>
          <select className='form-drop'>
            <option>hiiiee-</option>
            <option>helllloww-</option>
            <option selected>hihihif</option>
          </select>
          <textarea className='form-text' placeholder='write your comment here'></textarea>
        </form>
      </header>
    </div >
  );
}

export default App;
