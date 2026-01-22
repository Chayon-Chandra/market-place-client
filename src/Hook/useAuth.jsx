import { use } from "react"
import { AuthConText } from "../Context/AuthConText"

const useAuth = () => {
    const authInfo = use(AuthConText);
    return authInfo;
}

export default useAuth;