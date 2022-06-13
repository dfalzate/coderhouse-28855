import express from 'express';
import dotenv from 'dotenv';
import aws from 'aws-sdk';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usuarios = []

const credentials = new aws.Credentials({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const sns = new aws.SNS({
  credentials,
  region:'us-east-1'
})

app.post('/user', (req, res) => {
  const data = req.body
  usuarios.push(data)
  const mensaje = {
    message: 'Usuario creado correctamente',
    data:usuarios
  }
  res.status(200).json(mensaje)
  sns
    .publish({
      Message:"Data:"+JSON.stringify(mensaje),
      Subject:'Usuario creado',
      TopicArn: process.env.SNS_TOPIC_ARN,
    })
    .promise()
    .then(res => {
      console.log(res)
      console.log('enviado')
    })
    .catch(err => {
      console.log('error')
      console.log(err)
    })
})

app.get("/", (req, res) => {
  res.status(200).send("<h3>Hola aws</h3>");
});

const PORT=process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(`🚀 Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err));