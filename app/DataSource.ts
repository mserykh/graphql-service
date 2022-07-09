import { RESTDataSource } from 'apollo-datasource-rest';

export class DataSource extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getItems() {
    return await this.get('');
  }

  async getTtem(id: string) {
    return await this.get(`/${id}`);
  }
}
