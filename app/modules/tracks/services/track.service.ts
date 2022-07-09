import { DataSource } from '../../../DataSource';

export const tracksSource = new DataSource(process.env.TRACKS_URL as string);
