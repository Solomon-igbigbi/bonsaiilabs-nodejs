import { RegisterAccountResponseDto } from '../dtos/account.dto';
import { hashPassword } from '../../../shared/utils/generate-password';
import { userRepository } from '../account.repository';

/**
 * Register employee account
 * @param data
 * @returns
 */
const registerUserService = async (data): Promise<RegisterAccountResponseDto> => {
  // Check if the company exists previously
  const { email, password } = data;

  const isUserRegistered = await userRepository.findFirst({
    where: {
      email,
    },
  });

  if (isUserRegistered) throw new Error('account already exist');

  const hashedPassword = hashPassword(password);
  data.password = hashedPassword;

  // Register the account
  const createdAccount = await userRepository.create({ data });

  if (!createdAccount) {
    throw new Error('Registration was not successful, try again later');
  }

  return { message: 'User account was created successfully' };
};

export { registerUserService };
