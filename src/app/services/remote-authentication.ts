import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { AuthenticationParams } from '@/domain/usecases/authentication';
import { HttpPostClient } from '../contracts/http-post-client';
import { HttpStatusCode } from '../contracts/http-response';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {
    this.url = url;
  }

  async auth(params: AuthenticationParams): Promise<void> {
    const HttpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (HttpResponse.statusCode) {
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      default:
        return Promise.resolve();
    }
  }
}
