import { DataSource } from '../../../DataSource';

export const albumsSource = new DataSource(process.env.ALBUMS_URL as string);
