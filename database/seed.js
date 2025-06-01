import { faker } from '@faker-js/faker';

const personName = faker.person.fullName();
const bio = faker.person.bio();

console.log(`Hi I'm ${personName} and my bio is: ${bio}`);
