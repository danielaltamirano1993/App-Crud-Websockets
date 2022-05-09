import express from 'express';

const app = express()

// app.set('/', (req,res) => {
//     res.send('Hello world in the port 3000')
// })

app.use(express.static(__dirname +'/public'))

app.listen(3000)
console.log('Server on port', 3000)