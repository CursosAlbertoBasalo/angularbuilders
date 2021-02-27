export interface Auth {
  isLoggedIn: boolean;
  sessionToken?: string;
  user?: string;
}
