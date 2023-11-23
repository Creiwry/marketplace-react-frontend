import { useSetAtom } from "jotai";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../Atoms/userAtom";
import { RESET } from "jotai/utils";

const LogoutButton = () => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom)

  const signOut = () => {
    Cookies.remove('token')
    setUser(RESET);
    navigate('/login')
  }

  return (
    <div className="">
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export { LogoutButton }
