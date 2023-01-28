import { Genre, Movie, GenreEntity } from "../protocols/protocols.js"
import prisma from "../config/database.js"

export async function listGenres(): Promise<GenreEntity[]>{
  return prisma.genre.findMany()
}

export async function insertGenre(genre: Genre): Promise<Genre>{
  return prisma.genre.create({
    data: genre
  })
}

export async function verifyIfExistGenre(genre: Genre){
  return await prisma.genre.findFirst({
    where: {
      name: genre.name
    }
  })
}

export async function verifyIfExistGenremId(movie: Movie){
  return await prisma.movies.findFirst({
    where: {
      id: movie.genreId,
    }
  })
}