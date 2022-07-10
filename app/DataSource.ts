import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';

export class DataSource extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getItems() {
    try {
      const res = await this.get('');
      return res;
    } catch (err) {
      const error = err as ApolloError;
      return {
        code: error.extensions.response.code,
        success: false,
        message: error.extensions.response.body,
        track: null,
      };
    }
  }

  async getItem(id: string) {
    try {
      const res = await this.get(`/${id}`);
      return { ...res, id: res._id };
    } catch (err) {
      const error = err as ApolloError;
      return {
        code: error.extensions.response.code,
        success: false,
        message: error.extensions.response.body,
        track: null,
      };
    }
  }

  async createItem(input: any) {
    const res = await this.post('', input);
    return { ...res, id: res._id };
  }
}
