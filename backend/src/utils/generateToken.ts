// src/utils/generateToken.ts
import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
  return jwt.sign({ _id: id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  });
};

export default generateToken;
