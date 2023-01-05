import { error } from 'console';
import { userRepository } from '../account.repository';

const getUsersService = async () => {
  try {
    const data = await userRepository.findMany({
      select: {
        userId: true,
        email: true,
        createdTimestamp: true,
        updatedTimestamp: true,
      },
    });
    return { data, message: 'Data retrieved successfully' };
  } catch (err) {
    throw error(err);
  }
};

export { getUsersService };
