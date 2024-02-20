type Person = {
  firstName: string;
  lastName: string;
};

function greeted(person : Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName + '!:)';
}

let user_1 = { firstName: 'Yana', lastName: 'Bryzhak' };

console.log(greeted(user_1)); 