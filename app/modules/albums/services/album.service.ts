import { DataSource } from 'DataSource';

const albumsSource = new DataSource(process.env.ALBUMS_URL as string);
