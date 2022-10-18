const movies = require('./db.json')

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const deleteId = req.params.id
        let index = movies.findIndex(element => element.id === +deleteId)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        const {title, rating, imageURL} = req.body
 
        let greatestId = -1
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id > greatestId) {
                greatestId = movies[i].id
            }
        }
        let nextId = greatestId + 1
        
        let newMovie = {
            id: nextId,
            title: title,
            rating: rating,
            imageURL: imageURL

        }

        movies.push(newMovie)
        res.status(200).send(movies)
    }
}