export default interface IUser {
  id?: number;
  username: string;
  email: string;
  password?: string;
  is_organization: boolean;
}
