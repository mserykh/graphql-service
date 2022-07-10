import { DataSource } from '../../common/services/common.services';

export const bandsSource = new DataSource(process.env.BANDS_URL as string);
