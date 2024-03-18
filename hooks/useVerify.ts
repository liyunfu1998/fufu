import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function useVerify() {
  const { token } = useSelector((state: RootState) => state.user);

  if (!token) return false;

  return true;
}
