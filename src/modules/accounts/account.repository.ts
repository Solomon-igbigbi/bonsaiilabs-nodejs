import { prisma } from '../../shared/repositories';
const userRepository = prisma.user;
const postRepository = prisma.post;

export { userRepository, postRepository };
