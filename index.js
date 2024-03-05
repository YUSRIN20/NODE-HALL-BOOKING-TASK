import express from 'express'
import hallRouter from './Routers/hallBooking.Router.js'

const app = express();
const PORT  = 4000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send(`<div style="text-align: center; background-color:light-blue;"><h1>Welcome to: Golden Oasis Retreat Hall</h1></div>
    <div  style="text-align: center>
    <ul>
    <li><h3><mark>Get:</mark> Use the endpoint to <mark>/hallapi/allroomdetails</mark> to get the All Room Details</h3></li>
    <li><h3><mark>Post:</mark>Change the endpoint to <mark>/hallapi/createroom</mark> to Create the New Room</h3></li>
    <li><h3><mark>Get:</mark>Change the endpoint to <mark>/hallapi/bookingroom</mark> to Booking New Room</h3></li>
    <li><h3><mark>Get:</mark>Change the endpoint to <mark>/hallapi/bookedroomdata</mark> to get the Booked Room Data</h3></li>
    <li><h3><mark>Get:</mark>Change the endpoint to <mark>/hallapi/customersbookeddata</mark> to get the Booked customers & Room Data</h3></li>
    <li><h3><mark>Get:</mark>Change the endpoint to <mark>/hallapi/customerbookingcount</mark> to get the Booked customers Booking Count & Room Data</h3></li>
    </ul> 
    </div>`)
})
app.use('/hallapi',hallRouter)

app.listen(PORT,()=>{
    console.log(`App Listening in ${PORT}`)
})