import { DataSource } from 'DataSource';

const usersSource = new DataSource(process.env.USERS_URL as string);
