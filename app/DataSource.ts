import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';

export class DataSource extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getItems(limit = 5, offset = 0) {
    try {
      const res = await this.get('', { limit, offset });
      return res.items;
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
    return res;
  }

  async updateItem(id: string, input: any) {
    const res = await this.put(`/${id}`, input);
    return res;
  }

  async deleteItem(id: string) {
    const res = await this.delete(`/${id}`);
    return res;
  }

  async getItemsById(ids: string[]) {
    const res = await Promise.allSettled(ids.map((id) => this.getItem(id)));
    return res;
  }
}
