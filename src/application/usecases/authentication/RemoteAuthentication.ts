import { HttpPostClient } from 'application/contracts/http/HttpPostClient';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {
    this.url = url;
  }

  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url);
  }
}
