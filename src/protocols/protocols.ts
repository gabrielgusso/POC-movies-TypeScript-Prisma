export type MovieEntity = {
  id: number
  name: string
  platformId: number
  genreId: number
  watchedStatus: boolean
}

export type  Movie = Omit<MovieEntity, "id">

export type Watched = {
  watchedStatus: boolean
}

export type PlatformEntity = {
  id: number
  name: string
}

export type  Platform = Omit<PlatformEntity, "id">

export type GenreEntity = {
  id: number
  name: string
}

export type  Genre = Omit<GenreEntity, "id">

export type TotalMovies = {
  totalMovies: number
}