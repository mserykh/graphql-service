import { DataSource } from '../../common/services/common.services';

export const genresSource = new DataSource(process.env.GENRES_URL as string);
