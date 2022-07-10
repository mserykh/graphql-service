#  GraphQL Service

## Description

Implement the service Musicify for managing and retrieving data for different entities.

## Project setup

- [Download & Install Git](https://git-scm.com/downloads)
- [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager
- Clone this repository
- Go to `develop` branch

```bash
git checkout develop
```

- Install dependencies

```bash
npm install
```

## Setup microservices

- Clone [a repository](https://github.com/rolling-scopes-school/node-graphql-service)
- Follow instructions in `README.md` for installation

## Running the application

- Launch the app

```bash
npm run start:prod
```

- Rename `.env.example` to `.env`

## Testing the application

- Use (http://localhost:3000) to test the GraphQl service
- To test Mutaions and Queries add a new user and login to get a JWT token. Insert the JWT token to Headers.

## Queries list

- artist: get an artist by id
- artists: get all artists
- genre: get a genre by id
- genres: get all genres
- track: get a track by id
- tracks: get all tracks
- band: get a band by id
- bands: get all bands
- album: get a album by id
- albums: get all albums
- login: login to get 
- user: get a user by id
- favourites (available only for logged in user): get all added to your favourites bands, tracks, genres and artists


## Mutations list

- Artists
  - createArtist
  - deleteArtist
  - updateArtist
- Genres
  - createGenre
  - deleteGenre
  - updateGenre
- Bands
  - createBand
  - deleteBand
  - updateBand
- Tracks
  - createTrack
  - deleteTrack
  - updateTrack
- Albums
  - createAlbum
  - deleteAlbum
  - updateAlbum
- Users
  - register
- Favourites
  - addTrackToFavourites
  - addBandToFavourites
  - addArtistToFavourites
  - addGenreToFavourites

**Mutation requests are available only for logged in users. (except Users.register)**
