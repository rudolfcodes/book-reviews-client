export interface IRegisterFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  onSubmit?: (data: IRegisterFormInput) => Promise<void>;
}
