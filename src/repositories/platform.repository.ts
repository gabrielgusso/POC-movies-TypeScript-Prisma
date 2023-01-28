import { Platform, Movie, PlatformEntity } from "../protocols/protocols.js"
import prisma from "../config/database.js"

export async function listPlatforms(): Promise<PlatformEntity[]> {
  return prisma.platform.findMany()
}

export async function insertPlatiform(platform: Platform): Promise<PlatformEntity>{
  return prisma.platform.create({
    data: platform
  })
}

export async function verifyIfExistPlatform(platform: Platform): Promise<PlatformEntity>{
  return prisma.platform.findFirst({
    where: {
      name: platform.name
    }
  })
}

export async function verifyIfExistPlatformId(movie: Movie){
  return prisma.platform.findFirst({
    where: {
      id: movie.platformId
    }
  })
}