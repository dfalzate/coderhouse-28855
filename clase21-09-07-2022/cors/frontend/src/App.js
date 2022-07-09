import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  React.useEffect(() => {
    obtenerDatos();
  }, []);

  async function obtenerDatos() {
    // const response = await axios.get("http://localhost:4000");
    const response = await axios({
      method: "get",
      url: "http://localhost:4000/image.jpg",
      headers: {
        origin: "http://example1.com",
      },
    });
    console.log(response);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
