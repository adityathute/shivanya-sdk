export interface AuthUser {
  id: string;
  email: string;
  username?: string | null;
  first_name?: string;
  last_name?: string;
  phone?: string | null;
  bio?: string | null;
  date_of_birth?: string | null;
  location?: string | null;
  website?: string | null;
  avatar?: string | null;
  email_verified?: boolean;
  phone_verified?: boolean;
  date_joined?: string;
  roles?: string[];
  settings?: { theme?: string } | null;
  is_deletion_scheduled?: boolean;
  deletion_scheduled_at?: string | null;
}

export interface AuthSession {
  id: string;
  device?: string | null;
  ip_address?: string | null;
  created_at: string;
  last_active_at?: string | null;
  current?: boolean;
}

export interface AuthConfig {
  baseUrl: string;
  apiPrefix?: string;
  csrfCookieName?: string;
  csrfHeaderName?: string;
  credentials?: RequestCredentials;
}

export interface RegisterInput {
  first_name: string;
  last_name?: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ChangePasswordInput {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

export interface ResetPasswordInput {
  token: string;
  new_password: string;
  confirm_password: string;
}

export interface ProfileInput {
  first_name?: string;
  last_name?: string;
  phone?: string;
  bio?: string;
  date_of_birth?: string;
  location?: string;
  website?: string;
  avatar?: File | null;
}

export interface ApiResponse<T = unknown> {
  success?: boolean;
  message?: string;
  data?: T;
  errors?: unknown;
  [key: string]: unknown;
}

export class AuthError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status = 0, data?: unknown) {
    super(message);
    this.name = "AuthError";
    this.status = status;
    this.data = data;
  }
}
