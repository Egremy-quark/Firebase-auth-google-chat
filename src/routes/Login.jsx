import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()

  const handleClickLogin = () => {
    setUser(true)
    navigate("/")
  }

  return (
    <LoginStyles>
      {" "}
      <h1>Login</h1>
      <h2> {user ? "En línea" : "Off line"} </h2>
      <button onClick={handleClickLogin}>
        {user ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </LoginStyles>
  );
};

export default Login;


const LoginStyles = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`