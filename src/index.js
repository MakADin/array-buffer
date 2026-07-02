import { Validator } from './Validator.js'

const validator = new Validator();

console.log('Logan123', validator.validateUsername('Logan123'));

console.log('Logan123Wolverine', validator.validateUsername('Logan123Wolverine'));

console.log('Logan12345', validator.validateUsername('Logan12345'));

console.log('Logan123_', validator.validateUsername('Logan123_'));

console.log('Росомаха', validator.validateUsername('Росомаха'));

console.log('Logan-123_Wolverine', validator.validateUsername('Logan123Wolverine'));

console.log('X-men', validator.validateUsername('X-men'));

console.log('-X-men', validator.validateUsername('-X-men'));
