import { DataSource } from 'DataSource';

const artistsSource = new DataSource(process.env.ARTISTS_URL as string);
