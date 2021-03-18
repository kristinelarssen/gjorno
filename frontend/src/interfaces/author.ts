export default interface IAuthor {
  id: Number;
  isOrganization: Boolean;
  user: {
    email: string;
    username: string;
    id: Number;
  };
}
