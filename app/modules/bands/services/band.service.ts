import { DataSource } from 'DataSource';

export const bandsSource = new DataSource(process.env.BANDS_URL as string);
