// data/registrationData.ts

export interface RegistrationData {
  name: string;
  email: string;
  password: string;
  mobile: string;
  expectedErrors?: string[]; // Only used for invalid cases
}

// ✅ Valid Users
export const validTestData: RegistrationData[] = [
  {
    name: 'NewUser01',
    email: 'newuser01@pep.com',
    password: 'StrongPass123',
    mobile: '9876543210',
  },
  {
    name: 'NewUser02',
    email: 'newuser02@pep.com',
    password: 'AnotherPass456',
    mobile: '9876501234',
  },
];

// ❌ Invalid Users
export const invalidTestData: RegistrationData[] = [
  {
    name: 'ExistingUser',
    email: 'anusuya.supplier@gmail.com', // already registered
    password: '123',
    mobile: '9632370046',
    expectedErrors: ['Existing user email. ','Minimum 5 characters.'],
  },
  {
    name: 'InvalidEmailMobile',
    email: 'invalid-email-format',
    password: 'pass123',
    mobile: 'abcde',
    expectedErrors: ['Please enter a valid email id.','Please enter a valid mobile number.'],
  }
//   {
//     name: '',
//     email: '',
//     password: '',
//     mobile: '',
//     expectedErrors: ['Please enter your name', 'Please enter email', 'Please enter password', 'Please enter mobile'],
//   },
];
