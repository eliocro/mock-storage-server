import { faker } from '@faker-js/faker';

export default function createUser() {
  return {
    id: faker.number.int(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
  };
}
