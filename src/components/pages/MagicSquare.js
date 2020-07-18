import React from "react";
import styled, { keyframes } from "styled-components";
import kekezun from "../../assets/images/kekezun.png";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  transform: perspective(500px) rotateX(60deg);
`;

const Circle = styled.div`
  position: absolute;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0px 0px 32px 3px white;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const Guruguru = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Circle1 = styled(Circle)`
  height: 512px;
  width: 512px;
  animation-name: ${Guruguru};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Circle2 = styled(Circle)`
  height: 94%;
  width: 94%;
`;

const Circle3 = styled(Circle)`
  height: 82%;
  width: 82%;
`;

const Circle4 = styled(Circle)`
  height: 38%;
  width: 38%;
`;

const Circle5 = styled(Circle)`
  height: 82%;
  width: 82%;
  background-image: url(${kekezun});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Symbol = styled.div`
  position: absolute;
  font-size: 2.4rem;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const Symbol1 = styled(Symbol)`
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Symbol2 = styled(Symbol)`
  top: 20%;
  bottom: 0;
  right: 8%;
  margin: auto;
`;

const Symbol3 = styled(Symbol)`
  top: 70%;
  bottom: 0;
  right: 8%;
  margin: auto;
`;

const Symbol4 = styled(Symbol)`
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Symbol5 = styled(Symbol)`
  top: 70%;
  bottom: 0;
  left: 8%;
  margin: auto;
`;

const Symbol6 = styled(Symbol)`
  top: 20%;
  bottom: 0;
  left: 8%;
  margin: auto;
`;

const Square = styled.div`
  position: absolute;
  border-left: 2px solid white;
  border-right: 2px solid white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 85%;
  height: 50%;
`;

const Square1 = styled(Square)`
  transform: rotate(0deg);
`;

const Square2 = styled(Square)`
  transform: rotate(120deg);
`;

const Square3 = styled(Square)`
  transform: rotate(240deg);
`;

const Triangle = styled.div`
  position: absolute;
  border-top: 2px solid white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 85%;
  height: 50%;
`;

const Triangle1 = styled(Triangle)`
  transform: rotate(0deg);
`;

const Triangle2 = styled(Triangle)`
  transform: rotate(120deg);
`;

const Triangle3 = styled(Triangle)`
  transform: rotate(240deg);
`;

export default () => {
  return (
    <Wrapper>
      <Content>
        <Circle1>
          <Circle2>
            <Symbol1>Σ</Symbol1>
            <Symbol2>♂</Symbol2>
            <Symbol3>∞</Symbol3>
            <Symbol4>Π</Symbol4>
            <Symbol5>ℵ</Symbol5>
            <Symbol6>♀</Symbol6>
            <Circle3>
              <Square1></Square1>
              <Square2></Square2>
              <Square3></Square3>
              <Triangle1></Triangle1>
              <Triangle2></Triangle2>
              <Triangle3></Triangle3>
              <Circle4>
                <Circle5></Circle5>
              </Circle4>
            </Circle3>
          </Circle2>
        </Circle1>
      </Content>
    </Wrapper>
  );
};

/**
 * 1. 円を書く
 * 2. 模様を書く
 * 3. 模様を円に乗せる
 * 4. グルグル回す
 * 5. 傾ける
 */
