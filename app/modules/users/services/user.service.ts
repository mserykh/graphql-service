import { DataSource } from '../../../DataSource';

export const usersSource = new DataSource(process.env.USERS_URL as string);
