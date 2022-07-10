import { albumsSource } from './modules/albums/services/album.service';
import { artistsSource } from './modules/artists/services/artist.service';
import { bandsSource } from './modules/bands/services/band.service';
import { favouritesSource } from './modules/favourites/services/favourites.service';
import { genresSource } from './modules/genres/services/genre.service';
import { tracksSource } from './modules/tracks/services/track.service';
import { usersSource } from './modules/users/services/user.service';
import { albumTypeDefs } from './modules/albums/schemas/album.schema';
import { artistTypeDefs } from './modules/artists/schemas/artist.schema';
import { bandTypeDefs } from './modules/bands/schemas/band.schema';
import { commonTypeDefs } from './modules/common/schemas/common.schema';
import { favouritesTypeDefs } from './modules/favourites/schemas/favourites.schema';
import { genreTypeDefs } from './modules/genres/schemas/genre.schema';
import { trackTypeDefs } from './modules/tracks/schemas/track.schema';
import { userTypeDefs } from './modules/users/schemas/user.schema';
import { albumResolver } from './modules/albums/resolvers/album.resolver';
import { artistResolver } from './modules/artists/resolvers/artist.resolver';
import { bandResolver } from './modules/bands/resolvers/band.resolver';
import { favouritesResolver } from './modules/favourites/resolvers/favourites.resolver';
import { genreResolver } from './modules/genres/resolvers/genre.resolver';
import { trackResolver } from './modules/tracks/resolvers/track.resolver';
import { userResolver } from './modules/users/resolvers/user.resolver';

export const typeDefs = [
  albumTypeDefs,
  artistTypeDefs,
  bandTypeDefs,
  commonTypeDefs,
  favouritesTypeDefs,
  genreTypeDefs,
  trackTypeDefs,
  userTypeDefs,
];

export const resolvers = [
  albumResolver,
  artistResolver,
  bandResolver,
  favouritesResolver,
  genreResolver,
  trackResolver,
  userResolver,
];

export const services = {
  albumsSource,
  artistsSource,
  bandsSource,
  favouritesSource,
  genresSource,
  tracksSource,
  usersSource,
};
