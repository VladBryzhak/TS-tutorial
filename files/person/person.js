function greet(person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName + '!:)';
}

let user = { firstName: 'Vlad', lastName: 'Bryzhak' };

console.log(greet(user)); 