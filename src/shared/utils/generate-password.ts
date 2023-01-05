import bcrypt from 'bcryptjs';

const saltRounds = 10;

const hashPassword = (password) => {
  return bcrypt.hashSync(password, saltRounds);
};

export { hashPassword };
