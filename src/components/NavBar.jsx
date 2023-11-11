import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserProvider";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <NavBarStyles>
      {user ? (
        <>
          <NavLink to="/">Home</NavLink>
          <button onClick={() => setUser(!user)}>Log out</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <button onClick={() => setUser(!user)}>Log in</button>
        </>
      )}
    </NavBarStyles>
  );
};

export default NavBar;

const NavBarStyles = styled.nav`
  display: flex;
  border: 1px solid green;
  justify-content: center;
  gap: 20px;
  height: 40px;
  align-items: center;
  padding: 20px;
`;
