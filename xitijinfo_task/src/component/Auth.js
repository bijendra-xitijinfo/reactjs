import { useSelector } from "react-redux"

export const Auth = ({children}) => {
const login = useSelector(state => state.login)

if (login) {
    return children;
} else {
    return '';
}
}