import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { AccountModel } from '@/domain/models/account';
import { AuthenticationParams } from '@/domain/usecases/authentication';
import { HttpPostClient } from '../contracts/http-post-client';
import { HttpStatusCode } from '../contracts/http-response';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >,
  ) {
    this.url = url;
  }

  async auth(params: AuthenticationParams): Promise<void> {
    const HttpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (HttpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
