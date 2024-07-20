// src/types.ts
export interface RegisterRequestBody {
    username: string;
    email: string;
    password: string;
    role?: 'user' | 'admin';
  }
  
  export interface LoginRequestBody {
    email: string;
    password: string;
  }
  