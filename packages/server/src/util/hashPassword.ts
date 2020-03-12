import { hash } from 'bcryptjs';

export default async function passwordHash(password): Promise<String> {
  if (password.length < 4) {
    throw new Error('Passwords must be at least 4 characters long');
  }
  const hashed_pass = await hash(password, 10);
  return hashed_pass;
}
