import React from 'react'
import Router from "./routes/Router";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import imageBack from "./Assets/background1.jpg"


const DivMain = styled.div`
  max-width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <div>
      <DivMain>
        <Router />
      </DivMain>
      <Footer />
    </div>
  );
}

export default App;
