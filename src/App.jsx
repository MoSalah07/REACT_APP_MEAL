import Catagory from "./Components/Catagory";
import Search from "./Components/Search";
import Pages from "./Pages/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { createContext, useState } from "react";
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Container className="app" id={theme}>
        <Router>
          <Nav>
            <div>
              <GiKnifeFork />
              <Logo to={"/"}>Deliciouss</Logo>
            </div>
            <Switch>
              <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'light'}/>
            </Switch>
          </Nav>
          <Search />
          <Catagory />
          <Pages />
        </Router>
      </Container>
    </ThemeContext.Provider>
  );
}

const Container = styled.div`
  padding-inline: 2rem;
  margin-inline: auto;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Switch = styled.div`
display: flex; justify-content: space-between; align-items: center; gap: 2rem;
`;

export default App;
