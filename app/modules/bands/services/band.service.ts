import { DataSource } from 'DataSource';

const bandsSource = new DataSource(process.env.BANDS_URL as string);
