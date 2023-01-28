import prisma from "../src/config/database.js"

async function main() {
  await prisma.genre.createMany({
    data: [
      {
        name: "Ficção científica",
      },
    ],
  })
  await prisma.platform.createMany({
    data: [
      {
        name: "Prime Video",
      },
    ],
  })
  await prisma.movies.createMany({
    data: [
      {
        name: "Interestelar",
        platformId: 1,
        genreId: 1,
      },
    ],
  })
}

main()
  .then(() => {
    console.log("Sucess")
  })
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
