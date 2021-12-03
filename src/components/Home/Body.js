import React from "react";
import styled from "styled-components";
import Videopage from "../VideoPage";

const Body = () => {
  const BodyContainer = styled.div`
    /* height: 100vh; */
  `;

  const BodyContent = styled.div`
    display: grid;
    /* grid-template-columns: 50vw 50vw; */
    align-items: center;
    justify-content: center;
  `;

  const Content = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
  `;

  const Para = styled.p`
    text-align: center;
    font-size: 4vh;
  `;
  return (
    <BodyContainer>
      {/* <Image src={homePage} /> */}
      <BodyContent>
        <Content>
          <Para>Welcome to JorrParivar</Para>
          {/* <HighlightVideo>  </HighlightVideo> */}
        </Content>
      </BodyContent>
      <Videopage />
    </BodyContainer>
  );
};

export default Body;
