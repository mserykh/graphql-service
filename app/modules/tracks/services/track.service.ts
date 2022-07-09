import { DataSource } from 'DataSource';

const tracksSource = new DataSource(process.env.TRACKS_URL as string);
