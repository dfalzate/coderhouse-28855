import "./App.css";
import React from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";
import _ from "lodash";

function App() {
  const [noticias, setNoticias] = React.useState([]);

  async function obtenerNoticias(e) {
    e.preventDefault();
    const response = await axios.get("http://localhost:3000/news");
    if (response.status === 200) {
      setNoticias(response.data.news);
    }
  }

  async function generarNoticia() {
    const noticia = {
      title: faker.hacker.phrase(),
      body: faker.lorem.paragraph(),
      author: faker.name.findName(),
      image: faker.image.avatar(),
    };
    const response = await axios.post("http://localhost:3000/news", noticia);
    if (response.status === 200) {
      // const nuevasNoticias = [...noticias]
      //clonado profundo - react
      const nuevasNoticias = _.cloneDeep(noticias);
      nuevasNoticias.push(response.data.news);
      setNoticias(nuevasNoticias);
    }
  }

  return (
    <div className='App'>
      <header>
        <div>
          <label></label>
          <button onClick={obtenerNoticias}>Obtener</button>
          <button onClick={generarNoticia}>Generar</button>
        </div>
        <div>
          {noticias &&
            noticias.length > 0 &&
            noticias.map((noticia, index) => {
              return (
                <div key={`news${index}`}>
                  <img src={noticia.image} alt='' width='150px' height='150px' />
                  <h4>{noticia.title}</h4>
                  <text>{noticia.body}</text>
                  <br />
                  <text>{noticia.createdAt}</text>
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
