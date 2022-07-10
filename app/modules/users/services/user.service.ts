import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { NewUser } from '../user.types';

class UserSource extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getUser(id: string) {
    try {
      const res = await this.get(`/${id}`);
      return res;
    } catch (err) {
      const error = err as ApolloError;
      return {
        code: error.extensions.response.code,
        success: false,
        message: error.extensions.response.body,
      };
    }
  }

  async login(email: string, password: string) {
    try {
      const res = await this.post('/login', { email, password });
      return res;
    } catch (err) {
      const error = err as ApolloError;
      return {
        code: error.extensions.response.code,
        success: false,
        message: error.extensions.response.body,
      };
    }
  }

  async register(input: NewUser) {
    try {
      const res = await this.post('/register', { ...input });
      return res;
    } catch (err) {
      const error = err as ApolloError;
      return {
        code: error.extensions.response.code,
        success: false,
        message: error.extensions.response.body,
      };
    }
  }
}

export const usersSource = new UserSource(process.env.USERS_URL as string);
