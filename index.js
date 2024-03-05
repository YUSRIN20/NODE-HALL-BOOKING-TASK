import express from 'express'
import hallRouter from './Routers/hallBooking.Router.js'

const app = express();
const PORT  = 4000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send(`<div><h1>Golden Oasis Retreat</h1></div>`)
})
app.use('/hallapi',hallRouter)

app.listen(PORT,()=>{
    console.log(`App Listening in ${PORT}`)
})