import faker from 'faker';
import { AuthenticationParams } from '@/domain/usecases';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
