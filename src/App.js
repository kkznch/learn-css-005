import React from "react";
import styled from "styled-components";
import MagicSquare from "./components/pages/MagicSquare";

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Content>
        <MagicSquare></MagicSquare>
      </Content>
    </Wrapper>
  );
}

export default App;
