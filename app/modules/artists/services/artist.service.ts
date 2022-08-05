import { DataSource } from '../../common/services/common.services';

export const artistsSource = new DataSource(process.env.ARTISTS_URL as string);
