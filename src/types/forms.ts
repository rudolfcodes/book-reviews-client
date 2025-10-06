export interface IRegisterFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  onSubmit?: (data: IRegisterFormInput) => Promise<void>;
}

export interface ILoginFormInput {
  email: string;
  password: string;
}
