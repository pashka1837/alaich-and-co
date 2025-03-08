import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/reduxStore";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { links } from "../constants/links";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export function useAuth(isProtected: boolean, token: string | null) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isProtected && !token) navigate(links["signin"].href);
    if (!isProtected && token) navigate(links["about"].href);
  }, []);
}
