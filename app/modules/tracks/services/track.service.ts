import { DataSource } from '../../common/services/common.services';

export const tracksSource = new DataSource(process.env.TRACKS_URL as string);
