export default interface IAuthor {
  id: Number;
  is_organization: Boolean;
  user: {
    email: string;
    username: string;
    id: Number;
  };
}
