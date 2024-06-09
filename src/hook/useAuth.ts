import { useContext } from "react";
import { AuthContext } from "../HOC/AuthProvider";
import { IAuthContext } from "../Types/Types";
export function useAuth() {
  return useContext(AuthContext) as IAuthContext;
}