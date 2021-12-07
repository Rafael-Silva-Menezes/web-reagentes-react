import faker from 'faker';
import { HttpPostParams } from '@/app/contracts/http';

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});
