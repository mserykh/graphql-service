import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { NewUser } from '../user.types';

class UserSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL as string;
  }

  async getUser(id: string) {
    try {
      return await this.get(`/${id}`);
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
      return await this.post('/login', { email, password });
    } catch (err) {
      const error = err as ApolloError;
      return {
        code: error.extensions.response.code,
        success: false,
        message: error.extensions.response.body,
      };
    }
  }

  async register(firstName: string, lastName: string, email: string, password: string) {
    try {
      const res = await this.post('/register', { firstName, lastName, email, password });
      return { ...res, id: res._id };
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

export const usersSource = new UserSource();
