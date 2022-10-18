const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

//ignore above








const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller.js')


// endpoints
app.get('/api/movies', getMovies)

app.delete('/api/movies/:id', deleteMovie)

app.post('/api/movies', createMovie)

app.put('/api/movies/:id', updateMovie)











//ignore below

app.listen(4004, () => {
    console.log('4004 is running A-OK')
})