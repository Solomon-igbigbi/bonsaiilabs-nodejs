import { postRepository } from '../account.repository';

const createPost = async (data: { text: string; userId: string }) => {
  try {
    const createdPost = await postRepository.create({ data });
    return createdPost;
  } catch (error) {}
};

const getPosts = async (userId: string) => {
  try {
    const userPosts = await postRepository.findMany({
      where: {
        userId,
      },
    });
    return userPosts;
  } catch (error) {}
};

export { createPost, getPosts };
