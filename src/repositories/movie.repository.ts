import prisma from "../config/database.js"
import { Movie, MovieEntity } from "../protocols/protocols.js"

export async function listAllMovies(){
  return await prisma.movies.findMany({
    select: {
      id: true,
      name: true,
      watchedStatus: true,
      platform: {
        select: {
          name: true,
        },
      },
      genre: {
        select: {
          name: true
        }
      } 
    },
    orderBy: {
      id: 'desc'
    }
  })
}

export async function listAmountOfMovies(): Promise<number>{
  return await prisma.movies.count()
}

export async function insertMovie(movie:Movie): Promise<MovieEntity>{
  return prisma.movies.create({
    data: movie
  })
}

export async function verifyIfExist(id:string): Promise<MovieEntity>{
  return await prisma.movies.findFirst({
    where: {
      id: Number(id),
    }
  })
}



export async function updatetMovieTrue(id:string): Promise<MovieEntity>{
  return await prisma.movies.update({
    where: {
      id: Number(id),
    },
    data: {
      watchedStatus: true
    }
  })
}

export async function updatetMovieFalse(id:string): Promise<MovieEntity>{
  return await prisma.movies.update({
    where: {
      id: Number(id),
    },
    data: {
      watchedStatus: false
    }
  })
}

export async function deleteMovie(id:string): Promise<MovieEntity> {
  return await prisma.movies.delete({
    where: {
      id: Number(id)
    }
  })
}

