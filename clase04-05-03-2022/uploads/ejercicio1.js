const express = require('express');

const app = express();
const frase='Hola Mundo, como estan?? adasd qeqw  asdasd zxc';

app.get('/api/frase', (req, res) => {
    res.status(200).json({
        frase
    })
})

app.get("/api/letras/:num", (req, res) => {

    const numero = req.params.num;

    if(numero < 0 || numero > frase.length){
        res.status(400).json({
            msg: "El numero es invalido"
        })
    }

    const character = frase.charAt(numero)

    res.status(200).json({
        character
    })
})

app.get("/api/palabras/:num", (req, res) => {

    const numero = parseInt(req.params.num - 1);

    const arrayFrase = frase.split(" ");
    
    if(numero < 0 || numero > arrayFrase.length){
        res.status(400).json({
            msg: "El numero es invalido"
        })
    }

    const palabra = arrayFrase[numero];

    res.status(200).json({
        palabra
    })
})

const PORT=8081
const server = app.listen(PORT, () => console.log(`🚀 Server started on port http://localhost:8081`))
server.on('error', (err) => console.log(err));
