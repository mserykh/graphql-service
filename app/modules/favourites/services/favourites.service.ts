import { DataSource } from 'DataSource';

const favouritesSource = new DataSource(process.env.FAVOURITES_URL as string);
