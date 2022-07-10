import { DataSource } from '../../common/services/common.services';

export const albumsSource = new DataSource(process.env.ALBUMS_URL as string);
