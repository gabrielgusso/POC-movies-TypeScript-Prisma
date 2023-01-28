# POC-movies-TypeScript

## About

An api to register the movies I want to watch, made to practice TypeScript and Prisma

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```
3. Configure the `.env` file using the `.env.example`

4. Run prima migrate

```bash
npx prisma migrate dev
```

5. Run the back-end in a development environment:

```bash
npm run dev
```

## Building and starting for production

```bash
npm run build
npm start
```

## Routes


### POST: 
/movie - Body: { "name": "Interestelar", "platformId": 5, "genreId": 2 }

/platform - Body: { "name": "Prime Video"}

/genre - Body: { "name": "Ficção científica"}

### GET: 
/movies - Returns : [  {
    "id": 14,
    "name": "Vingadores",
    "watchedStatus": false,
    "platform": {
      "name": "Disney+"
    },
    "genre": {
      "name": "Aventura"
    }, ...]

  /platforms - Returns : [
  {
    "id": 1,
    "name": "Prime Video"
  },
  {
    "id": 2,
    "name": "Netflix"
  },
  {
    "id": 3,
    "name": "HBO max"
  }, ...]

  /genres - Returns : [
  {
    "id": 1,
    "name": "Ficção científica"
  },
  {
    "id": 2,
    "name": "Aventura"
  },
  {
    "id": 3,
    "name": "Mistério"
  }, ...]

  /total-movies - Returns : {
  "totalMovies": "14"
}

### PATCH: 
/movie/:id - Toggle the watchedStatus to true/false

### DELETE: 
/movie/:id - Delete the movie


