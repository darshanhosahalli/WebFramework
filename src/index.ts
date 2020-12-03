import { User } from './models/User';

const user = new User({name: 'darshan', age: 23});

user.set({name: 'deepak'})

console.log(user.get('name'));
console.log(user.get('age'));