import { useAppSelector, useAuth } from "../../lib/hooks";

export function Profile() {
  const { token } = useAppSelector((st) => st.auth);
  useAuth(true, token);
  return <div>Profie</div>;
}
