import { DataSource } from '../../../DataSource';

export const artistsSource = new DataSource(process.env.ARTISTS_URL as string);
