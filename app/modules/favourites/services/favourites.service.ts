import { DataSource } from '../../../DataSource';

export const favouritesSource = new DataSource(process.env.FAVOURITES_URL as string);
