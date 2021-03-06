import Movie from './movie'

class IMDb {
  endpoint: string

  constructor(endpoint: string = 'https://www.imdb.com') {
    this.endpoint = endpoint
  }

  async getMovie(id: string): Promise<Movie> {
    return (new Movie(id)).get(this.endpoint)
  }
}

export { IMDb, Movie }