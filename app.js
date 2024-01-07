import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'


// if for whatever reason it cannot read the file, then use 5000
const PORT = process.env.PORT || 5000

const app =express()

// set public folder as static
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))

// this middleware call must be before the routes 
// this is needed for create update and delete 
app.use(bodyParser.json())

// LOAD ROUTES INTO OUR MAIN FILE
app.use('/', routes)

const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.debug('connected to the database with mongoose...')

        app.listen(PORT,() => console.log(`Listening on port ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}
init()

