import { DataSource } from 'DataSource';

export const genresSource = new DataSource(process.env.GENRES_URL as string);
