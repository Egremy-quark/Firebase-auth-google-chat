import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import RequireAuth from "./components/RequiteAuth";
import Home from "./routes/Home";
import Login from "./routes/Login";

const App = () => {
  return (
    <BodyApp>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BodyApp>
  );
};

export default App;

const BodyApp = styled.main`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 100vh;
  width: 100vw;
`;
