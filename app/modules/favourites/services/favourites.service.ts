import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { FavouriteItemType } from '../favourites.types';

class FavouriteSource extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getItems() {
    try {
      const res = await this.get('/');
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

  async addItem(type: FavouriteItemType, id: string) {
    const res = await this.put('add', { type, id });
    return res;
  }
}

export const favouritesSource = new FavouriteSource(process.env.FAVOURITES_URL as string);
