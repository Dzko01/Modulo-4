class GhibliAPI {
    constructor(baseURL = "https://ghibliapi.vercel.app/films") {
        this.baseURL = baseURL
        this.OLDER_FILM_YEAR = 1986
    }

    async getFilms() {
        try {
            const result = await fetch(this.baseURL)
            console.log(result)
            const data = result.json()

            return data
        } catch (error) {
            console.error(error)
        }

    }

    async getFilmsId() {
        const filmsID = await this.getFilms()

        filmsID.map((film) => {
            return film.id
        }) // [id1, id2, id3, id4...]

        return filmsID
    }
    async getTitleAndYear() {
        const films = await this.getFilms() // films es un rreglo que tiene peliculas [{}, {}...]

        const filmsTitleAndYear = films.map((film) => {
            return { title: film.title, year: film.release_date }
        }) // [{title: film1, year: film1}, {title: film2, year: film2}...]

        console.log(filmsTitleAndYear)
    }
    getTitlesAndDirectors() { } // Tarea
    gettitleAndDescription() { } // Tarea

    async byYear() {
        const yearQuery = prompt("¿De que año quieres las peliculas? ej: 1999")
        const yearIsNaN = Number.isNaN(yearQuery) //true si es Nan y false si no es Nan

        if (yearIsNaN) {
            return console.log("Ingresa un numero porfvor")
        }
        const films = await this.getFilms()

        if (yearQuery < this.OLDER_FILM_YEAR) {
            // ejemplo de la pelicul mas antigua dinamica
            // const years = films.map(film => film.release_date) // [1986, 1988, 1988, 1989...]
            // console.log(Math.min(...years))
            return films
        }
        

        const filteredFilms = films.filter((film) => {
            if (yearQuery >= film.release_date) {
                return film
            }
        })
        console.table(filteredFilms)
        return filteredFilms
    }
}
const api = new GhibliAPI()
api.getFilms()
api.getFilmsId()
api.getTitleAndYear()
api.byYear()