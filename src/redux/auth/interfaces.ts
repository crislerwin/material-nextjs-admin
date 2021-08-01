import { SerializedError } from "../../shared/custom-error";
import { Viewer } from "../../shared/sign-method-actions";

export interface Auth {
  viewer: Viewer | null | undefined;
  signUpErrors: SerializedError[];
  getViewerErrors: SerializedError[];
  signInErrors: SerializedError[];
  signOutErrors: SerializedError[];
  loading: boolean;
}
