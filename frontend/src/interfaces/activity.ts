export default interface IActivity {
  id?: number;
  title: string;
  created: Date | string;
  description: string;
  date: Date | string;
  author?: {
    user: {
      username: string;
      email: string;
    };
    isOrganization: boolean;
  };
  genre: string;
}
