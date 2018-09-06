import validator from 'validator';

const emails = ['test', 'test@', 'mohit@rocks', 'mohit@isTotallyAwesomeAndCool.com'];
emails.forEach(email => console.log(`validator.isEmail(${email}) = ${validator.isEmail(email)}`))