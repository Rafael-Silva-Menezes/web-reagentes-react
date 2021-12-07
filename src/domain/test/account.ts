import faker from 'faker';
import { AccountModel } from '../models/account';
import { AuthenticationParams } from '../usecases/authentication';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  acessToken: faker.datatype.uuid(),
  name: faker.name.firstName(),
});
