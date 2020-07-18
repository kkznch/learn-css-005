import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
`;

const Circle = styled.div`
  position: absolute;
  border: solid 2px;
  border-radius: 50%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const Circle1 = styled(Circle)`
  height: 512px;
  width: 512px;
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
`;

const Symbol = styled.div`
  position: absolute;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
`;

const Symbol1 = styled(Symbol)`
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Symbol2 = styled(Symbol)`
  top: 15%;
  bottom: 0;
  right: 12%;
  margin: auto;
`;

const Symbol3 = styled(Symbol)`
  top: 74%;
  bottom: 0;
  right: 11%;
  margin: auto;
`;

const Symbol4 = styled(Symbol)`
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Symbol5 = styled(Symbol)`
  top: 76%;
  bottom: 0;
  left: 14%;
  margin: auto;
`;

const Symbol6 = styled(Symbol)`
  top: 15%;
  bottom: 0;
  left: 12%;
  margin: auto;
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
