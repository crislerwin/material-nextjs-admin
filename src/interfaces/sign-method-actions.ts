import { SerializedError } from "../shared/custom-error";

export interface ErrorResponse {
  errors: SerializedError[];
}

export interface SignUpInput {
  name: string;
  email: string;
  password: string;
}

export interface SignInInput {
  name: string;
  email: string;
  password: string;
}

export interface Viewer {
  id: string;
  name: string;
  email: string;
}

export interface SignUpForm extends SignUpInput {
  password2: string;
}
