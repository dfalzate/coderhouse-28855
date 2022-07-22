import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  const [personas, setPersonas] = React.useState([]);
  const [nombre, setNombre] = React.useState("");
  const [edad, setEdad] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  React.useEffect(() => {
    obtenerPersonas();
  }, []);

  async function onChangeNombre(e) {
    e.preventDefault();
    setNombre(e.target.value);
  }
  async function onChangeEdad(e) {
    e.preventDefault();
    setEdad(e.target.value);
  }
  async function onChangeEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  async function onChangeAvatar(e) {
    e.preventDefault();
    setAvatar(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(nombre, edad, email, avatar);
    try {
      const response = await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        data: {
          query: `
            mutation{
              agregarPersona(data:{
                nombre: "${nombre}",
                edad: ${edad},
                email: "${email}",
                avatar: "${avatar}"
              }){
                id
                nombre
                edad
              }
            }
          `,
        },
      });
      console.log(response);
      obtenerPersonas();
      alert("Persona agregada");
    } catch (error) {
      console.log(error);
    }
  }

  async function obtenerPersonas() {
    try {
      const response = await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        data: {
          query: `
            query{
              obtenerPersonas{
                id
                nombre
                edad
              }
            }
          `,
        },
      });
      console.log(response);
      setPersonas(response.data.data.obtenerPersonas);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Lista de personas</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor='nombre'>Nombre</label>
          <input name='nombre' type='text' onChange={onChangeNombre} />
          <label htmlFor='edad'>Edad</label>
          <input name='edad' type='number' min='1' onChange={onChangeEdad} />
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={onChangeEmail} />
          <label htmlFor='avatar'>Avatar</label>
          <input name='avatar' type='url' onChange={onChangeAvatar} />
          <button type='submit'>Grabar</button>
        </form>
        {personas.length > 0 &&
          personas.map((persona, index) => {
            return (
              <div key={`persona${index}`}>
                <h3>Persona</h3>
                <br />
                {persona.id}
                <br />
                {persona.nombre}
                <br />
                {persona.edad}
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
