import { DataSource } from 'DataSource';

const genresSource = new DataSource(process.env.GENRES_URL as string);

