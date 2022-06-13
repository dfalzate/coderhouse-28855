import { Button, Form } from "react-bootstrap";
import react from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [firstName, setFirstName] = react.useState("");
  const [lastName, setLastName] = react.useState("");
  const [email, setEmail] = react.useState("");

  async function onSubmit(e) {
    e.preventDefault();
    console.log(firstName, lastName, email);
    const response = await axios.post("http://localhost:4000/usuarios/create", {
      firstName,
      lastName,
      email,
    });
    if (response.status === 200) {
      alert("Usuario creado correctamente!");
    }
  }

  return (
    <div className='Formulario'>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='firstName'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Form.Text className='text-muted'>Escriba su nombre</Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='lastName'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Form.Text className='text-muted'>Escribas sus apellidos</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder=''
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Form.Text className='text-muted'>Escribas su email</Form.Text>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
